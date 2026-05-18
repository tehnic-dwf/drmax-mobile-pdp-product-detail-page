import { ExternalLink } from "lucide-react";

// 👉 Edit this to your GitHub Pages URL, e.g. "https://username.github.io/repo-name/"
const LIVE_URL =
  (import.meta.env.VITE_LIVE_URL as string | undefined) ??
  "https://YOUR-USERNAME.github.io/YOUR-REPO/";

const LiveSiteButton = () => {
  return (
    <a
      href={LIVE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-drmax-md hover:bg-primary/90 transition-colors"
      aria-label="Deschide pagina live de pe GitHub Pages"
    >
      <ExternalLink className="w-4 h-4" />
      View Live (GitHub Pages)
    </a>
  );
};

export default LiveSiteButton;
