function textElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

export function renderWelcome(container, content, onEnter) {
  const overlay = document.createElement("section");
  overlay.className = "welcome-overlay";
  overlay.setAttribute("aria-labelledby", "welcome-title");
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");

  const card = document.createElement("div");
  card.className = "welcome-card";

  const logoSlot = document.createElement("span");
  logoSlot.className = "logo-slot logo-slot--welcome";
  const logo = document.createElement("img");
  logo.className = "logo-image";
  logo.src = "./assets/images/branding/moallemkhoob-logo.png";
  logo.alt = "نشان رسمی معلم خوب";
  logoSlot.append(logo);

  const eyebrow = textElement("p", "eyebrow", content.eyebrow);
  const title = textElement("h2", "", content.title);
  title.id = "welcome-title";
  const description = textElement("p", "", content.description);
  const enterButton = textElement("button", "button button--primary", content.actionLabel);
  enterButton.type = "button";
  enterButton.addEventListener("click", onEnter);
  overlay.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      enterButton.focus();
    }
  });
  const caption = textElement("small", "welcome-caption", content.caption);

  card.append(logoSlot, eyebrow, title, description, enterButton, caption);
  overlay.append(card);
  container.replaceChildren(overlay);
  const background = [...document.querySelectorAll("[data-app-background]")];
  background.forEach((element) => { element.inert = true; });
  enterButton.focus({ preventScroll: true });

  return {
    setVisible(isVisible) {
      if (!isVisible) {
        const target = document.querySelector("#main-content") || document.querySelector(".site-header");
        background.forEach((element) => { element.inert = false; });
        target?.focus({ preventScroll: true });
      }
      overlay.classList.toggle("is-dismissed", !isVisible);
      overlay.inert = !isVisible;
      overlay.setAttribute("aria-hidden", String(!isVisible));
      enterButton.tabIndex = isVisible ? 0 : -1;
    },
    focusEnterButton() {
      enterButton.focus();
    },
  };
}
