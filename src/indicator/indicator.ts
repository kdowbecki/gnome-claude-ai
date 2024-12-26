import Gio from "gi://Gio";
import St from "gi://St";
import * as Main from "resource:///org/gnome/shell/ui/main.js";
import { Button } from "resource:///org/gnome/shell/ui/panelMenu.js";
import { PopupMenu } from "resource:///org/gnome/shell/ui/popupMenu.js";
import { registerGObjectClass } from "../utils/gjs.js";
import { logger } from "../utils/logger.js";
import ChatMenu from "./chatMenu.js";

const log = logger("indicator");

@registerGObjectClass
export default class Indicator extends Button {
  private _compactLayout: boolean = false;
  private _chatMenu: ChatMenu | null = null;

  constructor(path: string, uuid: string) {
    log("Creating indicator");

    super(0.0, "Claude AI", false);
    Main.panel.addToStatusArea(uuid, this, 0, "right");

    const icon = new St.Icon({
      gicon: Gio.icon_new_for_string(`${path}/assets/claude-icon.svg`),
      styleClass: "system-status-icon indicator-icon",
    });
    this.add_child(icon);

    this.connect("destroy", this._onDestroy.bind(this));
  }

  set compactLayout(value: boolean) {
    if (this._compactLayout === value) return;
    this._compactLayout = value;
    // TODO implement compact layout switching
  }

  enable() {
    (this.menu as PopupMenu).removeAll();
    this._chatMenu = new ChatMenu(this);
  }

  private _onDestroy() {
    log("Destroying indicator");
    this._chatMenu?.destroy();
    this._chatMenu = null;
    (this.menu as PopupMenu).removeAll();
  }
}
