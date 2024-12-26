import Gio from "gi://Gio";
import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";
import ClaudeAiIndicator from "./indicator.js";
import { logger } from "./utils/logger.js";

const log = logger("extension");

export default class ClaudeAiExtension extends Extension {
  settings?: Gio.Settings;
  indicator?: ClaudeAiIndicator;
  animationsEnabled: boolean = true;

  enable() {
    log("Enabling extension");
    this.settings = this.getSettings();
    this.animationsEnabled =
      this.settings!.get_value("padding-inner").deepUnpack() ?? 8; // TODO What to do with settings?
    this.indicator = new ClaudeAiIndicator(this.path, this.uuid);
  }

  disable() {
    log("Disabling extension");
    this.indicator?.destroy();
    this.indicator = undefined;
    this.settings = undefined;
  }
}
