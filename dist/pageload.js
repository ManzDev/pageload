let options = {
  value: 0,
  height: 5,
  // modes
  autoIncrement: true,
  fakeMode: false,
  fadeIn: true,
  // delays
  incrementValue: 1,
  incrementDelay: 100,
  transitionDelay: 500,
  transitionType: "ease",
  endDelay: 250,
  removeDelay: 2000,
  // colors & styles
  loadingBarClass: "loading-bar",
  backgroundColor: "#ddd",
  color: "#0ff",
  enableShadow: false,
  shadowOptions: "0 -8px 8px 5px",
  // spinner
  spinBar: true,
  spinBarColor: "#18a",
  enableProgress: false,
  // hooks
  onStart: () => {},
  onDOMLoaded: () => {},
  onEnd: () => {}
};
class LoadingBar {
  static start(userOptions = {}) {
    options = { ...options,
      ...userOptions
    };
    this.progress = options.value; // Reset

    if (this.loadingBar) this.reset();
    const loadingBar = document.createElement("div");
    const innerBar = document.createElement("div");
    const styles = document.createElement("style");
    loadingBar.className = options.loadingBarClass;
    loadingBar.appendChild(innerBar);
    loadingBar.classList.add("loading");
    innerBar.className = "innerbar"; // Options

    if (options.fadeIn) loadingBar.classList.add("off");
    if (options.enableShadow) innerBar.classList.add("shadow");

    if (options.autoIncrement && !options.fakeMode) {
      options.onDOMLoaded = () => LoadingBar.go(50);

      options.onEnd = () => LoadingBar.done();
    }

    if (options.fakeMode) options.autoIncrement = false;

    if (options.enableProgress) {
      const numberProgress = document.createElement("div");
      numberProgress.className = "number";
      numberProgress.textContent = "0%";
      innerBar.appendChild(numberProgress);
      this.numberProgress = numberProgress;
    } // Spinner


    if (options.spinBar) {
      const spinBar = document.createElement("div");
      spinBar.className = "spinbar";
      loadingBar.appendChild(spinBar);
    }

    styles.textContent = ` .${options.loadingBarClass}.off ~ * { opacity: 0; pointer-events: none; transition: none; } .${options.loadingBarClass} ~ * { opacity: 1; transition: opacity 0.5s ease 0.5s; } .${options.loadingBarClass} { position: fixed; left: 0; top: 0; width: 100%; height: ${options.height}px; background: ${options.backgroundColor}; z-index: 999; opacity: 1; transition: top 1s ease 1s; will-change: top; } .${options.loadingBarClass} .innerbar { width: 0%; height: 100%; background: ${options.color}; opacity: 1; transition: width ${options.incrementDelay + options.transitionDelay}ms ${options.transitionType}; will-change: width; } .${options.loadingBarClass} .innerbar.shadow { box-shadow: ${options.shadowOptions} ${options.color}; } .${options.loadingBarClass} .innerbar.smooth { transition: width ${options.endDelay}ms ease; } .number { position: fixed; top: 45px; right: 10px; font-family: sans-serif; font-size: 14px; border-radius: 20px; color: ${options.spinBarColor}; opacity: 0; transition: opacity 0.5s ease; } .spinbar { position: fixed; top: 15px; right: 15px; width: 15px; height: 15px; border-radius: 50%; border: 4px solid ${options.spinBarColor}; clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%); z-index: 999; animation: spin 0.5s linear infinite; opacity: 0; } .loading .spinbar, .loading .number { opacity: 1; } @keyframes spin { 0% { transform: rotate(0); } 100% { transform: rotate(360deg); } } `;
    document.head.appendChild(styles);
    document.body.insertAdjacentElement("afterbegin", loadingBar);
    options.onStart();
    if (options.autoIncrement) this.timer = setInterval(() => this.go(this.progress += options.incrementValue), options.incrementDelay);
    if (options.fakeMode) this.timer = setInterval(() => {
      const value = ~~(Math.random() * 3);
      this.go(this.progress += value);
    }, options.incrementDelay);

    const onDOMLoaded = () => options.onDOMLoaded();

    const onFullLoaded = () => {
      if (options.autoIncrement) {
        innerBar.classList.add("smooth");
        this.done();
      }
    };

    document.addEventListener("DOMContentLoaded", onDOMLoaded);
    window.addEventListener("load", onFullLoaded);
    this.loadingBar = loadingBar;
    this.innerBar = innerBar;
    this.styles = styles;
  }

  static go(percent) {
    this.progress = Math.min(~~percent, 100);
    this.innerBar.style.setProperty("width", `${this.progress}%`);
    if (this.numberProgress) this.numberProgress.textContent = `${this.progress}%`;
    if (percent > 99) this.ends();
  }

  static ends() {
    setTimeout(() => options.onEnd(), options.endDelay);
    clearInterval(this.timer);
    setTimeout(() => {
      this.hideBar();
      this.fadeIn();
      this.loadingBar.classList.remove("loading");
    }, options.endDelay);
    this.destroyTimer = setTimeout(() => this.destroy(), options.removeDelay);
  }

  static done() {
    this.go(100);
    this.ends();
  }

  static hideBar() {
    this.loadingBar.style.setProperty("top", `${(options.height + 6) * -1}px`);
  }

  static reset() {
    if (this.timer) clearInterval(this.timer);
    if (this.destroyTimer) clearTimeout(this.destroyTimer);
    this.destroy();
  }

  static destroy() {
    this.styles.remove();
    this.loadingBar.remove();
  }

  static fadeIn() {
    this.loadingBar.classList.remove("off");
  }

}

export default LoadingBar;
