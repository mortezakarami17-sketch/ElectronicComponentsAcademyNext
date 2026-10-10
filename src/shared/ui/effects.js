let audioContext = null;
let lastClickAt = 0;

function getAudioContext() {
  const AudioContextClass =
    window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) return null;

  try {
    if (!audioContext) {
      audioContext = new AudioContextClass();
    }

    if (audioContext.state === "suspended") {
      audioContext.resume().catch(() => {});
    }

    return audioContext;
  } catch {
    return null;
  }
}

function playTone({
  frequency = 700,
  endFrequency = 560,
  duration = 0.07,
  volume = 0.025,
  wave = "sine",
} = {}) {
  const context = getAudioContext();
  if (!context) return;

  try {
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    const start = context.currentTime;
    const end = start + duration;

    oscillator.type = wave;
    oscillator.frequency.setValueAtTime(frequency, start);

    if (endFrequency) {
      oscillator.frequency.exponentialRampToValueAtTime(
        Math.max(1, endFrequency),
        end,
      );
    }

    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(
      volume,
      start + 0.008,
    );
    gain.gain.exponentialRampToValueAtTime(0.0001, end);

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start(start);
    oscillator.stop(end + 0.01);
  } catch {
    // خطای پخش صدا نباید مانع اجرای برنامه شود.
  }
}

function playClickSound() {
  const now = performance.now();

  if (now - lastClickAt < 65) return;
  lastClickAt = now;

  playTone({
    frequency: 720,
    endFrequency: 590,
    duration: 0.045,
    volume: 0.02,
  });
}

function playWelcomeSound() {
  playTone({
    frequency: 523,
    endFrequency: 659,
    duration: 0.13,
    volume: 0.03,
  });

  window.setTimeout(() => {
    playTone({
      frequency: 659,
      endFrequency: 784,
      duration: 0.14,
      volume: 0.03,
    });
  }, 115);
}

function playFamilySound() {
  playTone({
    frequency: 440,
    endFrequency: 660,
    duration: 0.12,
    volume: 0.03,
  });
}

function animateLearningRoute() {
  const learning = document.querySelector("#learning");

  if (!learning || learning.hidden) return;

  learning.classList.remove("academy-effects-enter");

  // محاسبه مجدد چیدمان برای شروع دوباره انیمیشن
  void learning.offsetWidth;

  learning.classList.add("academy-effects-enter");
}

export function initializeEffects() {
  document.addEventListener("click", (event) => {
    const target =
      event.target instanceof Element ? event.target : null;

    if (!target) return;

    const control = target.closest(
      "button, a[href^='#'], select, " +
      "input[type='button'], input[type='submit']",
    );

    if (
      !control ||
      control.matches(":disabled, [aria-disabled='true']")
    ) {
      return;
    }

    if (control.closest(".welcome-card")) {
      playWelcomeSound();
    } else if (
      control.matches(".family-card, .family-card--active") ||
      control.getAttribute("href") === "#learning"
    ) {
      playFamilySound();
    } else {
      playClickSound();
    }
  });

  const learning = document.querySelector("#learning");

  if (learning) {
    const observer = new MutationObserver(() => {
      if (learning.hidden) return;

      window.requestAnimationFrame(animateLearningRoute);
    });

    observer.observe(learning, {
      childList: true,
    });

    window.requestAnimationFrame(animateLearningRoute);
  }
}