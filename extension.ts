import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Meta from "gi://Meta";
import Shell from "gi://Shell";
import * as Main from "resource:///org/gnome/shell/ui/main.js";
import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";

export default class ClaudeAiExtension extends Extension {
  settings?: Gio.Settings;
  animationsEnabled: boolean = true;

  enable() {
    this.settings = this.getSettings();
    this.animationsEnabled =
      this.settings!.get_value("padding-inner").deepUnpack() ?? 8;
  }

  disable() {
    this.settings = undefined;
  }
}
