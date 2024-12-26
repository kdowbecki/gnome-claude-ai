import Gio from "gi://Gio";
import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";
import Indicator from "./indicator/indicator.js";
import { logger } from "./utils/logger.js";

const log = logger("extension");

export default class ClaudeAiExtension extends Extension {
  settings?: Gio.Settings;
  indicator?: Indicator;
  private _compactLayout: boolean = false;

  enable() {
    log("Enabling extension");
    this.settings = this.getSettings();

    // Load settings
    this._compactLayout =
      this.settings!.get_value("compact-layout").deepUnpack() ?? false;

    // Create indicator
    this.indicator = new Indicator(this.path, this.uuid);
    this.indicator.compactLayout = this._compactLayout;
    this.indicator.enable();
  }

  disable() {
    log("Disabling extension");
    this.indicator?.destroy();
    this.indicator = undefined;
    this.settings = undefined;
  }
}
