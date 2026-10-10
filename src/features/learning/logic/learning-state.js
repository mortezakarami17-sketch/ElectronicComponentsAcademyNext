export function buildResistorIndex(nodes) {
  const index = new Map();
  for (const node of nodes) {
    if (!node.id || index.has(node.id)) throw new Error(`شناسهٔ تکراری یا خالی: ${node.id}`);
    index.set(node.id, node);
  }
  for (const node of nodes) {
    if (node.parentId && !index.has(node.parentId)) throw new Error(`والد نامعتبر برای ${node.id}`);
    if (node.parentId && !(index.get(node.parentId).childrenIds ?? []).includes(node.id)) {
      throw new Error(`فرزند ${node.id} در فهرست والد خود ثبت نشده است.`);
    }
  }
  for (const node of nodes) {
    for (const childId of node.childrenIds ?? []) {
      if (!index.has(childId) || index.get(childId).parentId !== node.id) throw new Error(`پیوند فرزند نامعتبر: ${node.id} → ${childId}`);
    }
  }
  const roots = nodes.filter((node) => !node.parentId);
  if (roots.length !== 1 || roots[0].id !== "resistors") throw new Error("درخت آموزش باید یک ریشهٔ resistors داشته باشد.");
  for (const node of nodes) {
    const seen = new Set();
    let current = node;
    while (current) {
      if (seen.has(current.id)) throw new Error(`چرخه در شاخهٔ ${node.id} شناسایی شد.`);
      seen.add(current.id);
      current = current.parentId ? index.get(current.parentId) : null;
    }
  }
  return index;
}

export function getDirectChildren(node, index) {
  return (node?.childrenIds ?? []).map((id) => index.get(id)).filter(Boolean);
}

export function getResistorAncestors(node, index) {
  const path = [];
  let current = node;
  const seen = new Set();
  while (current && !seen.has(current.id)) {
    seen.add(current.id);
    path.unshift(current);
    current = current.parentId ? index.get(current.parentId) : null;
  }
  return path;
}

export function resolveLearningRoute(hash, index) {
  if (hash === "#learning" || hash === "#learning/resistors") {
    return { isLearningRoute: true, nodeId: "resistors" };
  }
  if (!hash.startsWith("#learning/")) return { isLearningRoute: false, nodeId: null };
  try {
    const nodeId = decodeURIComponent(hash.slice("#learning/".length));
    return { isLearningRoute: true, nodeId: index.has(nodeId) ? nodeId : "resistors" };
  } catch {
    return { isLearningRoute: true, nodeId: "resistors" };
  }
}
