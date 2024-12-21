# Notes

## Using TypeScript to write a Gnome Shell Extension

[GJS A Guide to JavaScript for GNOME](https://gjs.guide/)

[How to write a Gnome Extension using TypeScript](https://gjs.guide/extensions/development/typescript.html)

[Proposal: Transition GNOME Shell JS & Extensions To TypeScript + Guide For Extensions Today](https://discourse.gnome.org/t/proposal-transition-gnome-shell-js-extensions-to-typescript-guide-for-extensions-today/4270)

[ts-for-gir](https://github.com/gjsify/ts-for-gir)


## Testing

[Testing an extension](https://gjs.guide/extensions/development/creating.html#testing-the-extension) says to start a new nested Gnome session with:

```
$ dbus-run-session -- gnome-shell --nested --wayland
```

and within this new session:

```
$ gnome-extensions enable gnome-claude-ai@dowbecki.com
```
