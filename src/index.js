import "./styles.css";

const BLOCK_CLASS = "tabs";

const CSS_SELECTORS = {
  PANEL: `.${BLOCK_CLASS}__panel`,
  TABLIST: `.${BLOCK_CLASS}__tablist`,
  TAB: `.${BLOCK_CLASS}__tab`,
  TIMER: `.${BLOCK_CLASS}__timer`
};

class Tabs {
  constructor(element) {
    this.element = element;

    /**
     * @private {!Array<Element>}
     */
    this.tablist_ = [];

    /**
     * @private {!Array<Element>}
     */
    this.tabs_ = [];

    /**
     * @private {!Array<Element>}
     */
    this.timers_ = [];

    /**
     * @private {!Array<Element>}
     */
    this.panels_ = [];

    /**
     * @private {number}
     */
    this.selectedTab_ = 0;

    this.initialize_();
  }

  /**
   *
   */
  initialize_() {
    const { PANEL, TABLIST, TAB, TIMER } = CSS_SELECTORS;

    this.panels_ = [...document.querySelectorAll(PANEL)];
    this.tablist_ = document.querySelector(TABLIST);
    this.tabs_ = [...document.querySelectorAll(TAB)];
    this.timers_ = [...document.querySelectorAll(TIMER)];

    console.log({
      panels_: this.panels_,
      tablist_: this.tablist_,
      tabs_: this.tabs_,
      timers_: this.timers_
    });

    this.registerEvents_();
    this.getTabsHeight_();
  }

  /**
   * Registers the events.
   * @private
   */
  registerEvents_() {
    this.tabs_.forEach((tab, index) => {
      this.tabs_[index].addEventListener("click", this.clickTab_);
    });
  }

  /**
   * Gets the tabs height..
   * @private
   */
  getTabsHeight_() {
    this.tabs_.forEach((tab, index) => {
      tab.style.removeProperty("--min-tab-height");
      tab.style.removeProperty("--max-tab-height");

      const tabHeight = tab.getBoundingClientRect().height;

      const tabTitle = tab.querySelector(".tabs__tab__title");
      const titleOffset = 16;

      const tabTitleHeight =
        tabTitle.getBoundingClientRect().height + titleOffset;

      tab.style.setProperty("--min-tab-height", `${tabTitleHeight}px`);
      tab.style.setProperty("--max-tab-height", `${tabHeight}px`);

      this.timers_[index].style.setProperty(
        "--min-tab-height",
        `${tabTitleHeight}px`
      );
      this.timers_[index].style.setProperty(
        "--max-tab-height",
        `${tabHeight}px`
      );
    });
  }

  /**
   *
   */
  clickTab_() {}

  /**
   * Activates a tab.
   */
  activateTab_() {}
}

const element = document.querySelector(".tabs");
new Tabs(element);
