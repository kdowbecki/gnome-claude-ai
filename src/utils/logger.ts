export const logger =
  (prefix: string) =>
  (...content: unknown[]): void =>
    console.log("[gnome-claude-ai]", `[${prefix}]`, ...content);