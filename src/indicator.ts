import Gio from "gi://Gio";
import St from "gi://St";
import * as Main from "resource:///org/gnome/shell/ui/main.js";
import * as PanelMenu from "resource:///org/gnome/shell/ui/panelMenu.js";
import { registerGObjectClass } from "./utils/gjs.js";
import { logger } from "./utils/logger.js";

const log = logger("indicator");

@registerGObjectClass
export default class ClaudeAiIndicator extends PanelMenu.Button {
  constructor(path: string, uuid: string) {
    log("Creating indicator");

    super(0.0, "Claude AI", false);
    Main.panel.addToStatusArea(uuid, this, 0, "right");

    const icon = new St.Icon({
      gicon: Gio.icon_new_for_string(`${path}/assets/claude.png`),
      styleClass: "system-status-icon indicator-icon",
    });
    this.add_child(icon);

    this.connect("destroy", this._onDestroy.bind(this));
  }

  private _onDestroy() {
    log("Destroying indicator");
  }
}
