import { Info } from "lucide-react";

const MedicalDisclaimer = () => (
  <div className="mx-4 my-4 flex items-start gap-2.5 bg-muted rounded-lg px-3 py-3">
    <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
    <p className="text-[10px] text-muted-foreground leading-relaxed">
      Produsele cosmetice nu sunt medicamente și nu înlocuiesc consultul medical. Citiți cu atenție prospectul. 
      Pentru reacții adverse, consultați medicul sau farmacistul. Produsele prezentate pot avea un aspect diferit de cel real.
    </p>
  </div>
);

export default MedicalDisclaimer;
