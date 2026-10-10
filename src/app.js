import { createInitialAppState, reduceAppState } from "./core/app-state.js";
import { componentFamilies } from "./shared/data/component-families.js";
import { renderFamilyGrid } from "./shared/ui/family-grid.js";
import { initializeNavigation } from "./shared/ui/navigation.js";
import { initializeEffects } from "./shared/ui/effects.js";
import { welcomeContent } from "./features/welcome/data/welcome-content.js";
import { createWelcomeDismissedAction } from "./features/welcome/logic/welcome-actions.js";
import { renderWelcome } from "./features/welcome/ui/render-welcome.js";
import { resistorLessons } from "./features/learning/data/resistor-lessons.js";
import { initializeLearning } from "./features/learning/ui/render-learning.js";

let state = createInitialAppState();

const welcome = renderWelcome(
  document.querySelector("#welcome-root"),
  welcomeContent,
  () => {
    state = reduceAppState(state, createWelcomeDismissedAction());
    welcome.setVisible(state.welcomeVisible);
  },
);

renderFamilyGrid(
  document.querySelector("#family-grid"),
  componentFamilies,
);

initializeNavigation();

initializeLearning({
  container: document.querySelector("#learning"),
  lessons: resistorLessons,
  landingSections: document.querySelectorAll("[data-landing-section]"),
});

initializeEffects();

