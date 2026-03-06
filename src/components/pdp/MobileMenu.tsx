import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  X, Search, Pill, Baby, Sparkles, Heart, Apple, Leaf,
  Stethoscope, Gift, Tag, Star, ChevronRight, Phone, Mail,
  CreditCard, Flame, ShoppingBag, Microscope
} from "lucide-react";
import drmaxLogo from "@/assets/drmax-logo.svg";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mainCategories = [
  {
    label: "Ofertele lunii",
    icon: Tag,
    badge: "Până la -40%",
    badgeType: "promo" as const,
    highlight: true,
  },
  {
    label: "Medicamente fără rețetă",
    icon: Pill,
    badge: "Popular",
    badgeType: "popular" as const,
  },
  {
    label: "Suplimente alimentare",
    icon: Apple,
  },
  {
    label: "Dermato-cosmetice",
    icon: Sparkles,
    badge: "Nou",
    badgeType: "new" as const,
  },
  {
    label: "Mamă și copilul",
    icon: Baby,
  },
  {
    label: "Frumusețe și îngrijire",
    icon: Heart,
  },
  {
    label: "Sănătate intimă",
    icon: Microscope,
  },
  {
    label: "Tehnico-medicale",
    icon: Stethoscope,
  },
  {
    label: "Dietă și nutriție",
    icon: Leaf,
  },
];

const secondaryLinks = [
  { label: "Produse Dr. Max", icon: ShoppingBag },
  { label: "Cadouri", icon: Gift, highlight: true },
  { label: "ECO", icon: Leaf },
];

const utilityLinks = [
  { label: "Farmacii" },
  { label: "Blog" },
  { label: "Despre Dr. Max" },
  { label: "Cariere" },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu panel */}
      <div className="relative w-[85%] max-w-[360px] bg-card h-full overflow-y-auto animate-in slide-in-from-left duration-300">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-primary px-4 py-3 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-primary-foreground p-1 hover:bg-primary-foreground/10 rounded-lg transition-colors"
            aria-label="Închide meniul"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="bg-card rounded-lg px-3 py-1">
            <img src={drmaxLogo} alt="Dr.Max" className="h-7 w-auto" />
          </div>
          <div className="w-8" /> {/* Spacer for centering */}
        </div>

        {/* Search - integrated per Baymard */}
        <div className="px-4 py-3 bg-secondary/50 border-b border-border">
          <div className="flex items-center gap-2 bg-card rounded-lg px-3 py-2.5 border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
            <Search className="w-4 h-4 text-muted-foreground shrink-0" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Ce cauți azi?"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
          </div>
        </div>

        {/* Loyalty widget - Econsultancy */}
        <div className="mx-4 mt-3 mb-1 p-3 bg-secondary rounded-xl border border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-foreground">DrMax Card</p>
              <p className="text-xs text-muted-foreground">
                Ai <span className="font-bold text-primary">230 puncte</span> — vezi ofertele tale
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Main categories - single column, icons, badges */}
        <nav className="px-2 pt-2 pb-1">
          <p className="px-3 pt-2 pb-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
            Categorii
          </p>
          <ul className="space-y-0.5">
            {mainCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <li key={cat.label}>
                  <button
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-colors text-left ${
                      cat.highlight
                        ? "bg-accent/10 hover:bg-accent/15"
                        : "hover:bg-muted"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        cat.highlight
                          ? "bg-accent/20 text-accent"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-[18px] h-[18px]" />
                    </div>
                    <span
                      className={`flex-1 text-sm font-medium ${
                        cat.highlight ? "text-accent font-semibold" : "text-foreground"
                      }`}
                    >
                      {cat.label}
                    </span>
                    {cat.badge && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          cat.badgeType === "promo"
                            ? "bg-accent text-accent-foreground"
                            : cat.badgeType === "new"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {cat.badge}
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Trending / hot category */}
        <div className="mx-4 my-2 p-3 bg-accent/5 rounded-xl border border-accent/20">
          <div className="flex items-center gap-2 mb-1.5">
            <Flame className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold text-accent">Trending acum</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {["Vitamina D", "Collagen", "Probiotice", "Magneziu"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-card border border-border text-foreground hover:border-primary cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Secondary links */}
        <div className="px-2 pb-1">
          <p className="px-3 pt-3 pb-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
            Mai mult
          </p>
          <ul className="space-y-0.5">
            {secondaryLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.label}>
                  <button
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-left hover:bg-muted ${
                      link.highlight ? "text-accent" : "text-foreground"
                    }`}
                  >
                    <Icon className="w-[18px] h-[18px] text-muted-foreground" />
                    <span className="flex-1 text-sm font-medium">{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Utility links - compact row */}
        <div className="mx-4 mt-2 mb-3 flex flex-wrap gap-2">
          {utilityLinks.map((link) => (
            <button
              key={link.label}
              className="text-xs text-muted-foreground font-medium px-3 py-1.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Separator */}
        <div className="border-t border-border mx-4" />

        {/* Contact */}
        <div className="px-4 py-4 space-y-2">
          <p className="text-xs text-muted-foreground font-medium text-center mb-2">
            Aveți nevoie de ajutor?
          </p>
          <a
            href="tel:0800080400"
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border hover:border-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">0800 080 400</span>
          </a>
          <a
            href="mailto:info@drmax.ro"
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border hover:border-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">info@drmax.ro</span>
          </a>
        </div>

        {/* Bottom safe area */}
        <div className="h-8" />
      </div>
    </div>
  );
};

export default MobileMenu;
