import { buildResistorIndex, getDirectChildren, getResistorAncestors, resolveLearningRoute } from "../logic/learning-state.js";
import { resistorTree } from "../data/resistor-tree.js";

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function bidi(text, lang = "fa") {
  const node = el("bdi", "ltr", text);
  node.dir = "ltr";
  node.lang = lang;
  return node;
}

function localRoute(id) { return `#learning/${encodeURIComponent(id)}`; }

function renderHeader(container, node, ancestors, index) {
  const top = el("div", "learning-topline");
  const back = el("a", "learning-back", "← بازگشت به سطح قبل");
  back.href = node.id === "resistors" ? "#families" : localRoute(node.parentId || "resistors");
  top.append(back);
  const home = el("a", "learning-home-link", "خانهٔ آموزش مقاومت‌ها");
  home.href = "#learning";
  top.append(home);
  container.append(top);

  const nav = el("nav", "learning-breadcrumbs");
  nav.setAttribute("aria-label", "مسیر راهنما");
  ancestors.forEach((crumb, i) => {
    if (i) nav.append(el("span", "breadcrumb-separator", "‹"));
    if (i === ancestors.length - 1) {
      const current = el("span", "breadcrumb-current", crumb.titleFa);
      current.setAttribute("aria-current", "page");
      nav.append(current);
    } else {
      const link = el("a", "", crumb.titleFa);
      link.href = localRoute(crumb.id);
      nav.append(link);
    }
  });
  container.append(nav);

  const header = el("header", "learning-header");
  header.append(el("p", "eyebrow", "آموزش خانوادهٔ مقاومت‌ها"));
  const title = el("h1", "learning-title", node.titleFa);
  title.id = "learning-page-title";
  title.tabIndex = -1;
  header.append(title);
  if (node.titleEn) {
    const englishLine = el("p", "learning-english-title");
    englishLine.append(bidi(node.titleEn, "en"));
    header.append(englishLine);
  }
  if (node.description) header.append(el("p", "learning-intro", node.description));
  container.append(header);
  return title;
}

function renderNodeCards(container, children) {
  const list = el("div", "lesson-list");
  list.setAttribute("aria-label", "زیرگروه‌ها و درس‌ها");
  for (const child of children) {
    const card = el("a", "lesson-card");
    card.href = localRoute(child.id);
    card.setAttribute("aria-label", `${child.titleFa}، ${child.type === "category" ? "نمایش زیرگروه‌ها" : "بازکردن درس"}`);
    const symbol = el("span", "lesson-card-symbol", child.type === "category" ? "↳" : "Ω");
    symbol.setAttribute("aria-hidden", "true");
    const copy = el("span", "lesson-card-copy");
    copy.append(el("strong", "", child.titleFa));
    if (child.titleEn) copy.append(bidi(child.titleEn, "en"));
    copy.append(el("span", "", child.description || "برای دیدن توضیحات این بخش انتخاب کن."));
    const arrow = el("span", "lesson-card-arrow", "←");
    arrow.setAttribute("aria-hidden", "true");
    card.append(symbol, copy, arrow);
    list.append(card);
  }
  container.append(list);
}

function renderExplainer(container, text) {
  const aside = el("aside", "learning-explainer");
  aside.setAttribute("aria-labelledby", "dependent-title");
  const title = el("h2", "lesson-block-title", "وابسته یعنی چه؟");
  title.id = "dependent-title";
  aside.append(title, el("p", "", text));
  container.append(aside);
}

const mediaLabels = {
  cutaway: "نمای داخلی یا برش‌خورده",
  applications: "نمونهٔ کاربرد روی مدار",
  educational: "تصویر آموزشی ساختار",
  symbols: "نماد شماتیک (استاندارد در تصویر منبع مشخص نشده)",
};

function renderMediaCard(item, extraClass = "") {
  const card = el("article", `media-card media-card--figure ${extraClass}`.trim());
  const isSymbol = item.kind === "symbol";
  const figure = el("figure", isSymbol ? "schematic-figure" : "part-photo-figure");
  const image = el("img", isSymbol ? "schematic-image" : "part-photo");
  image.src = item.path;
  image.alt = item.alt;
  image.loading = "lazy";
  image.decoding = "async";
  if (isSymbol) image.dir = "ltr";
  image.addEventListener("error", () => {
    figure.replaceChildren(el("p", "media-placeholder", "بارگذاری این تصویر ممکن نشد؛ اطلاعات منبع در فهرست منابع باقی است."));
  }, { once: true });
  figure.append(image, el("figcaption", "", item.caption));
  card.append(figure);
  if (item.author && item.license && item.sourceUrl) {
    const credit = el("p", "image-credit");
    credit.append(document.createTextNode(`اثر: ${item.author} · مجوز ${item.license} · `));
    const source = el("a", "source-link", "منبع و مجوز");
    source.href = item.sourceUrl;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    credit.append(source);
    card.append(credit);
  } else if (item.provenance) {
    card.append(el("p", "image-credit", item.provenance));
  }
  return card;
}

function renderPhoto(container, photo, additionalPhotos = []) {
  const card = el("section", "media-card");
  card.setAttribute("aria-labelledby", "real-part-title");
  const title = el("h2", "lesson-block-title", "تصویر واقعی قطعه");
  title.id = "real-part-title";
  card.append(title);
  const photos = [photo, ...additionalPhotos].filter(Boolean);
  if (!photos.length) card.append(el("p", "media-placeholder", "عکس واقعیِ تأییدشده از خود قطعه در این نسخه موجود نیست."));
  else {
    const grid = el("div", "media-figure-grid");
    photos.forEach((item) => grid.append(renderMediaCard(item)));
    card.append(grid);
  }
  container.append(card);
}

function renderMediaGroup(container, items, groupKey) {
  if (!items?.length) return;
  const section = el("section", "media-card media-group");
  const title = el("h2", "lesson-block-title", mediaLabels[groupKey] || "تصاویر آموزشی تکمیلی");
  section.append(title);
  const grid = el("div", "media-figure-grid");
  items.forEach((item) => grid.append(renderMediaCard(item)));
  section.append(grid);
  container.append(section);
}

function renderSymbol(container, symbol, standards = null) {
  const availableStandards = standards && Object.values(standards).some(Boolean);
  if (availableStandards) {
    const card = el("section", "media-card schematic-card");
    card.setAttribute("aria-labelledby", "schematic-title");
    const title = el("h2", "lesson-block-title", "نمادهای شماتیک بر اساس استاندارد");
    title.id = "schematic-title";
    card.append(title);
    const grid = el("div", "symbol-standards-grid");
    for (const standard of ["IEC", "ANSI"]) {
      const item = standards[standard];
      const variant = el("article", "symbol-standard-card");
      const label = el("h3", "symbol-standard-label", standard);
      label.dir = "ltr";
      label.lang = "en";
      variant.append(label);
      if (item) variant.append(renderMediaCard(item));
      else variant.append(el("p", "media-placeholder", `نماد ${standard} برای این قطعه در تصاویر موجود با این استاندارد مشخص نشده است.`));
      grid.append(variant);
    }
    card.append(grid);
    container.append(card);
    return;
  }

  const card = el("section", "media-card schematic-card");
  card.setAttribute("aria-labelledby", "schematic-title");
  const title = el("h2", "lesson-block-title", "نماد در نقشهٔ شماتیک");
  title.id = "schematic-title";
  card.append(title);
  if (symbol?.imagePath) {
    const figure = el("figure", "schematic-figure");
    const image = el("img", "schematic-image");
    image.src = symbol.imagePath;
    image.alt = `نماد شماتیک ${symbol.label || "قطعه"}`;
    image.loading = "lazy";
    image.decoding = "async";
    image.dir = "ltr";
    image.addEventListener("error", () => figure.replaceChildren(el("p", "media-placeholder", "بارگذاری نماد ممکن نشد.")), { once: true });
    figure.append(image);
    card.append(figure);
  } else {
    card.append(el("p", "media-placeholder", "نماد شماتیکیِ یکتا و تأییدشده برای این قطعه در این بررسی پیدا نشد؛ نماد ساختگی نمایش داده نمی‌شود."));
  }
  if (symbol?.label) card.append(el("p", "schematic-note", symbol.label));
  if (symbol?.standard) card.append(el("p", "schematic-note", symbol.standard));
  if (symbol?.author && symbol?.license) {
    const credit = el("p", "image-credit");
    credit.append(document.createTextNode(`نماد: ${symbol.author} · مجوز ${symbol.license} · `));
    const license = el("a", "source-link", "شرایط مجوز");
    license.href = symbol.licenseUrl || symbol.source;
    license.target = "_blank";
    license.rel = "noopener noreferrer";
    credit.append(license);
    card.append(credit);
  }
  if (symbol?.source) {
    const link = el("a", "source-link", symbol.sourceLabel || "منبع نماد");
    link.href = symbol.source;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    card.append(link);
  }
  container.append(card);
}

function renderLesson(container, node, lesson) {
  if (!lesson) {
    container.append(el("p", "media-placeholder", "این درس در حال تکمیل است."));
    return;
  }
  const columns = el("div", "lesson-content");
  for (const section of lesson.sections) {
    const article = el("article", "lesson-content-block");
    article.append(el("h2", "lesson-block-title", section.title));
    if (section.ltr) article.append(bidi(section.ltr, "en"));
    for (const paragraph of section.paragraphs ?? []) article.append(el("p", "", paragraph));
    if (section.bullets?.length) {
      const list = el("ul", "lesson-bullets");
      section.bullets.forEach((item) => list.append(el("li", "", item)));
      article.append(list);
    }
    columns.append(article);
  }
  container.append(columns);
  if (lesson.sources?.length) {
    const sources = el("aside", "lesson-sources");
    sources.append(el("h2", "lesson-block-title", "منابع آموزشی"));
    const list = el("ul", "lesson-bullets");
    lesson.sources.forEach((item) => {
      const li = el("li", "");
      const a = el("a", "source-link", item.label);
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.append(a);
      list.append(li);
    });
    sources.append(list);
    container.append(sources);
  }
}

export function renderLearningView(container, { index, lessons }, nodeId) {
  container.replaceChildren();
  const node = index.get(nodeId) || index.get("resistors");
  container.classList.toggle("learning-section--detail", node.type === "component");
  const title = renderHeader(container, node, getResistorAncestors(node, index), index);
  if (node.explainer) renderExplainer(container, node.explainer);
  if (node.childrenIds?.length) renderNodeCards(container, getDirectChildren(node, index));
  if (node.type === "component") {
    if (node.incomplete) container.append(el("p", "media-placeholder", "این درس در حال تکمیل است."));
    renderSymbol(container, node.symbol, node.symbolStandards);
    renderPhoto(container, node.photo, [...(node.media?.photos || []), ...(node.imageAdditions?.photos || [])]);
    renderMediaGroup(container, [...(node.media?.cutaway || []), ...(node.imageAdditions?.cutaway || [])], "cutaway");
    renderMediaGroup(container, node.media?.applications, "applications");
    renderMediaGroup(container, [...(node.media?.educational || []), ...(node.imageAdditions?.educational || [])], "educational");
    renderMediaGroup(container, node.imageAdditions?.symbols, "symbols");
    if (!node.incomplete) renderLesson(container, node, lessons.find((item) => item.id === node.lessonId));
  }
  return title;
}

export function initializeLearning({ container, lessons, landingSections }) {
  const index = buildResistorIndex(resistorTree);
  const context = { index, lessons };
  let initialRender = true;
  function updateFromRoute() {
    const route = resolveLearningRoute(window.location.hash, index);
    container.hidden = !route.isLearningRoute;
    landingSections.forEach((section) => { section.hidden = route.isLearningRoute; });
    if (!route.isLearningRoute) {
      const targetId = window.location.hash.slice(1);
      if (targetId) document.getElementById(targetId)?.scrollIntoView({ block: "start" });
      initialRender = false;
      return;
    }
    const heading = renderLearningView(container, context, route.nodeId);
    container.scrollIntoView({ block: "start" });
    const welcomeVisible = !document.querySelector(".welcome-overlay")?.classList.contains("is-dismissed");
    if (!initialRender && !welcomeVisible) heading?.focus({ preventScroll: true });
    initialRender = false;
  }
  window.addEventListener("hashchange", updateFromRoute);
  updateFromRoute();
}

