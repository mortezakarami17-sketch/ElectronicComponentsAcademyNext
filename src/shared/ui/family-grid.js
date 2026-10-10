function createFamilyCard(family) {
  const isActive = family.status === "active";
  const card = document.createElement(isActive ? "a" : "article");
  card.className = `family-card ${isActive ? "family-card--active" : "family-card--disabled"}`;

  if (isActive) {
    card.href = "#learning";
    card.setAttribute("aria-label", `${family.title}، ورود به دسته‌بندی آموزش`);
  } else {
    card.setAttribute("aria-label", `${family.title}، به‌زودی`);
  }

  const symbol = document.createElement("span");
  symbol.className = "family-icon";
  symbol.setAttribute("aria-hidden", "true");
  symbol.textContent = family.symbol;

  const title = document.createElement("h3");
  title.textContent = family.title;

  const description = document.createElement("p");
  description.textContent = family.description;

  const status = document.createElement("span");
  status.className = "family-status";
  status.textContent = isActive ? "مسیر فعال" : "به‌زودی";

  card.append(symbol, title, description, status);
  return card;
}

export function renderFamilyGrid(container, families) {
  const cards = families.map(createFamilyCard);
  container.replaceChildren(...cards);
}
