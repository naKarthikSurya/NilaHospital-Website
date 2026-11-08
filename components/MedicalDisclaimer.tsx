import { AlertCircle } from "lucide-react";

export default function MedicalDisclaimer() {
  return (
    <div className="bg-muted/40 border border-border/80 rounded-2xl p-5 my-8 text-xs text-muted-foreground leading-relaxed flex items-start gap-3">
      <AlertCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
      <div>
        <strong className="text-foreground font-semibold">Medical Disclaimer:</strong> The clinical information on this page is for general educational and informational purposes only and does not constitute medical advice, diagnosis, or formal treatment planning. Healthcare decisions and treatments must be evaluated in person with a registered medical practitioner based on individual clinical evaluation. In the event of a medical emergency, please proceed immediately to the nearest hospital casualty or call emergency medical services.
      </div>
    </div>
  );
}
