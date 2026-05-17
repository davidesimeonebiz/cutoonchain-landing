"use client";

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new Event("cc:reopen"));
      }}
      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
    >
      Gestisci preferenze cookie
    </button>
  );
}
