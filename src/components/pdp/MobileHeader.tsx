import { Search, ShoppingCart, User, Menu } from "lucide-react";
import drmaxLogo from "@/assets/drmax-logo.svg";

const MobileHeader = () => {
  return (
    <header className="sticky top-0 z-40 bg-primary shadow-drmax-sm">
      <div className="flex items-center justify-between px-3 py-2 max-w-[480px] mx-auto">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-2">
          <button aria-label="Meniu" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors p-1">
            <Menu className="w-6 h-6" />
          </button>
          <div className="bg-card rounded-lg px-2 py-1">
            <img src={drmaxLogo} alt="Dr.Max" className="h-7 w-auto" />
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-3">
          <button aria-label="Favorite" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <button aria-label="Cont" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            <User className="w-6 h-6" />
          </button>
          <button aria-label="Coș" className="relative text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-drmax-red text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="px-3 pb-2 max-w-[480px] mx-auto">
        <div className="flex items-center gap-2 bg-card rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Introduceți un nume de produs, un brand...</span>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
