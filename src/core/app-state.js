export function createInitialAppState() {
  return { welcomeVisible: true };
}

export function reduceAppState(state, action) {
  if (action?.type === "WELCOME_DISMISSED") {
    return { ...state, welcomeVisible: false };
  }

  return state;
}
