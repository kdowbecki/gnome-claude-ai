import Adw from "gi://Adw";
import Gio from "gi://Gio";
import {
  ExtensionPreferences,
  gettext as _,
} from "resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js";

export default class GnomeRectanglePreferences extends ExtensionPreferences {
  _settings?: Gio.Settings;

  fillPreferencesWindow(window: Adw.PreferencesWindow): Promise<void> {
    this._settings = this.getSettings();

    const page = new Adw.PreferencesPage({
      title: _("General"),
      iconName: "dialog-information-symbolic",
    });

    const lookAndFeelGroup = new Adw.PreferencesGroup({
      title: _("Look and Feel"),
      description: _("Configure the look and feel of the extension"),
    });
    page.add(lookAndFeelGroup);

    const compactLayout = new Adw.SwitchRow({
      title: _("Compact Layout"),
      subtitle: _("Use compact layout"),
    });
    lookAndFeelGroup.add(compactLayout);

    window.add(page);

    // TODO how to bind compact layout to settings?
    // this._settings!.bind('animate', compactLayout, 'active', Gio.SettingsBindFlags.DEFAULT);
    // this._settings!.bind('padding-inner', paddingInner, 'value', Gio.SettingsBindFlags.DEFAULT);

    return Promise.resolve();
  }
}
