import { Search, ShoppingCart, User } from "lucide-react";
import drmaxLogo from "@/assets/drmax-logo.webp";

const MobileHeader = () => {
  return (
    <header className="sticky top-0 z-40 bg-card border-b shadow-drmax-sm">
      <div className="flex items-center justify-between px-4 py-2.5 max-w-[480px] mx-auto">
        <img src={drmaxLogo} alt="Dr.Max" className="h-8 w-auto" />
        <div className="flex items-center gap-4">
          <button aria-label="Caută" className="text-muted-foreground hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="Cont" className="text-muted-foreground hover:text-primary transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button aria-label="Coș" className="relative text-muted-foreground hover:text-primary transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
