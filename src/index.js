import "./styles.css";

const BLOCK_CLASS = "tabs";

const CSS_SELECTORS = {
  PANEL: `.${BLOCK_CLASS}__panel`,
  TABLIST: `.${BLOCK_CLASS}__tablist`,
  TAB: `.${BLOCK_CLASS}__tab`
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
    const { PANEL, TABLIST, TAB } = CSS_SELECTORS;

    this.panels_ = [...document.querySelectorAll(PANEL)];
    this.tablist_ = document.querySelector(TABLIST);
    this.tabs_ = [...document.querySelectorAll(TAB)];

    console.log({
      panels_: this.panels_,
      tablist_: this.tablist_,
      tabs_: this.tabs_
    });

    this.registerEvents_();
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
