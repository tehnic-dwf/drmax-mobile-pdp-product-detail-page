import { Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";
import drmaxLogo from "@/assets/drmax-logo.svg";

type FooterSection = {
  title: string;
  links: { label: string; href: string }[];
};

const sections: FooterSection[] = [
  {
    title: "Despre Dr.Max",
    links: [
      { label: "Despre noi", href: "#" },
      { label: "Farmacii Dr.Max", href: "#" },
      { label: "Cariere", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Responsabilitate socială", href: "#" },
      { label: "Pachete de Grijă", href: "#" },
    ],
  },
  {
    title: "Informații utile",
    links: [
      { label: "Cum comand?", href: "#" },
      { label: "Livrare și plată", href: "#" },
      { label: "Politica de retur", href: "#" },
      { label: "Întrebări frecvente", href: "#" },
      { label: "Card de loialitate", href: "#" },
      { label: "Program de fidelitate", href: "#" },
    ],
  },
  {
    title: "Contul meu",
    links: [
      { label: "Autentificare", href: "#" },
      { label: "Înregistrare", href: "#" },
      { label: "Comenzile mele", href: "#" },
      { label: "Lista de dorințe", href: "#" },
      { label: "Alertă de preț", href: "#" },
    ],
  },
];

const Footer = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);
  const [email, setEmail] = useState("");

  const toggleSection = (i: number) => {
    setOpenSections((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter */}
      <div className="px-4 py-6 border-b border-white/10">
        <p className="text-sm font-bold mb-1">Abonează-te la newsletter</p>
        <p className="text-xs text-white/60 mb-3">
          Primește oferte exclusive și noutăți direct pe email
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Adresa ta de email"
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
          />
          <button className="bg-primary text-primary-foreground font-bold text-sm px-4 py-2.5 rounded-lg hover:brightness-110 transition-all flex-shrink-0">
            Abonare
          </button>
        </div>
      </div>

      {/* Accordion sections */}
      <div className="divide-y divide-white/10">
        {sections.map((section, i) => (
          <div key={i}>
            <button
              onClick={() => toggleSection(i)}
              className="flex items-center justify-between w-full px-4 py-3.5 text-left"
            >
              <span className="text-sm font-semibold">{section.title}</span>
              <ChevronDown
                className={`w-4 h-4 text-white/50 transition-transform ${
                  openSections.includes(i) ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSections.includes(i) && (
              <div className="px-4 pb-3 space-y-2 animate-fade-in">
                {section.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href}
                    className="block text-xs text-white/60 hover:text-primary transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="px-4 py-5 border-t border-white/10 space-y-3">
        <p className="text-sm font-semibold">Contact</p>
        <div className="space-y-2">
          <a
            href="tel:0800080400"
            className="flex items-center gap-2 text-xs text-white/70 hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>
              <strong className="text-white">0800 080 400</strong> · apel gratuit
            </span>
          </a>
          <a
            href="mailto:info@drmax.ro"
            className="flex items-center gap-2 text-xs text-white/70 hover:text-primary transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-primary" />
            info@drmax.ro
          </a>
          <div className="flex items-center gap-2 text-xs text-white/70">
            <Clock className="w-3.5 h-3.5 text-primary" />
            Luni – Vineri: 08:00 – 20:00
          </div>
          <div className="flex items-center gap-2 text-xs text-white/70">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            Peste 400 de farmacii în România
          </div>
        </div>
      </div>

      {/* Social media */}
      <div className="px-4 py-4 border-t border-white/10">
        <p className="text-xs font-semibold mb-3">Urmărește-ne</p>
        <div className="flex gap-3">
          {[
            { icon: "📘", label: "Facebook", href: "https://www.facebook.com/drmaxfarmacie" },
            { icon: "📸", label: "Instagram", href: "https://instagram.com/drmaxfarmacie" },
            { icon: "🎬", label: "YouTube", href: "https://www.youtube.com/channel/UCKRh783YIa2Xl8ba5aO-Whw" },
            { icon: "📝", label: "Blog", href: "https://www.drmax.ro/articole" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2 text-xs transition-colors"
            >
              <span>{social.icon}</span>
              <span className="text-white/80">{social.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Payment & delivery */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="flex flex-wrap gap-4">
          <div>
            <p className="text-[10px] text-white/40 uppercase tracking-wide mb-2">Plată securizată</p>
            <div className="flex gap-2">
              {["Visa", "Mastercard", "Apple Pay", "Google Pay"].map((method) => (
                <span
                  key={method}
                  className="bg-white/10 rounded px-2 py-1 text-[10px] font-medium text-white/70"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] text-white/40 uppercase tracking-wide mb-2">Livrare prin</p>
            <div className="flex gap-2">
              {["FAN Courier", "Sameday", "Farmacie"].map((carrier) => (
                <span
                  key={carrier}
                  className="bg-white/10 rounded px-2 py-1 text-[10px] font-medium text-white/70"
                >
                  {carrier}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="px-4 py-4 border-t border-white/10 space-y-3">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {[
            "Termeni și condiții",
            "Politica de confidențialitate",
            "Politica cookies",
            "ANPC",
            "SOL",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[10px] text-white/50 hover:text-primary transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              {link}
            </a>
          ))}
        </div>

        {/* ANPC badges */}
        <div className="flex items-center gap-3">
          <div className="bg-white/10 rounded-lg px-3 py-2 text-center">
            <p className="text-[8px] text-white/40 leading-tight">ANPC</p>
            <p className="text-[10px] font-semibold text-white/70">Protecția<br />Consumatorilor</p>
          </div>
          <div className="bg-white/10 rounded-lg px-3 py-2 text-center">
            <p className="text-[8px] text-white/40 leading-tight">SOL</p>
            <p className="text-[10px] font-semibold text-white/70">Soluționare<br />Online Litigii</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-4 py-4 border-t border-white/10 text-center">
        <img src={drmaxLogo} alt="Dr.Max" className="h-6 mx-auto mb-2 brightness-0 invert opacity-60" />
        <p className="text-[10px] text-white/40">
          © {new Date().getFullYear()} Dr.Max Farmacie. Toate drepturile rezervate.
        </p>
        <p className="text-[10px] text-white/30 mt-1">
          SC Dr.Max Farma S.R.L. · CUI RO14965729 · J40/8635/2002
        </p>
      </div>
    </footer>
  );
};

export default Footer;
