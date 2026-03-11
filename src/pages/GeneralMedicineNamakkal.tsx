import { Link } from "react-router-dom";
import { Activity, CheckCircle2, ClipboardCheck, MapPin, Phone, Shield, Stethoscope } from "lucide-react";
import Layout from "@/components/Layout";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { generalMedicineNamakkalPageSchemas } from "@/lib/seo";

const PHONE = "tel:+919655225192";
const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";

const generalMedicineScope = [
  "Initial assessment for fever, fatigue, weakness, and common adult symptoms",
  "Blood pressure, sugar trend, and general wellness review",
  "Medication review and clinical follow-up for ongoing conditions",
  "Primary consultation before specialist referral when required",
  "Coordinated care support for women with combined general and reproductive concerns",
];

export default function GeneralMedicineNamakkal() {
  return (
    <Layout
      title="General Physician in Namakkal | Adult Health & Fever Care"
      description="Need a general doctor in Namakkal? Nila Hospital provides expert consultation for fever, fatigue, blood pressure, and routine adult health concerns with specialist coordination."
      schema={generalMedicineNamakkalPageSchemas}
    >
      <HeroGradientSection className="text-white py-20 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            General Medicine in Namakkal
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            General Doctor Consultation in Namakkal With Coordinated Care
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            When families search for a general doctor in Namakkal, they usually need clear answers quickly for common symptoms and ongoing health concerns. At Nila Hospital, our care model combines primary health assessment, routine monitoring, and smooth specialist coordination whenever advanced care is needed, especially for women and family health contexts.
          </p>
        </div>
      </HeroGradientSection>

      <section className="py-14 bg-background">
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6945.JPG"
              alt="Patient reception and triage support at Nila Hospital Namakkal"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Efficient triage and guidance for first-time consultations.</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6833.JPG"
              alt="Clinical support and monitoring setup in hospital"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Clinical assessment and monitoring with clear follow-up plans.</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6862.JPG"
              alt="Inpatient and observation support for adult patients"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Observation-oriented support for adult recovery needs.</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-7 text-muted-foreground leading-8 text-[17px]">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            1. Why general medicine consultation is the right first step
          </h2>
          <p>
            Many common symptoms do not immediately point to a single specialty. Fever, weakness, body pain, appetite loss, dizziness, recurrent fatigue, and mild breathlessness may arise from infection, nutritional deficiency, metabolic imbalance, stress-related strain, or chronic condition progression. General medicine consultation helps patients get a structured first-level diagnosis instead of self-medicating or delaying care.
          </p>
          <p>
            At Nila Hospital, primary assessment focuses on symptom history, risk profile, and practical treatment direction. We prioritize clarity on what can be managed directly, what requires additional evaluation, and when specialist referral is necessary. This prevents unnecessary delay and helps families make decisions with better confidence.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            2. General doctor support for ongoing health monitoring
          </h2>
          <p>
            General medicine is not only for acute illness. It is equally important for regular tracking of blood pressure, sugar trends, recurring headaches, fatigue patterns, and medication response. Patients with long-standing symptoms often benefit from periodic review because subtle changes can indicate when management needs adjustment. Early correction is usually simpler and safer than late-stage intervention.
          </p>
          <p>
            Routine monitoring also helps women who are preparing for pregnancy or recovering after delivery. General wellness status can influence reproductive outcomes, recovery quality, and long-term stability. For women who need integrated support, our <Link to="/womens-health-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">women&apos;s health services</Link> can be coordinated with general medical follow-up.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            3. Coordinated referral when specialist care is required
          </h2>
          <p>
            A reliable general medicine system should know when to escalate. Not every condition can be solved in a single consultation, and timely referral can prevent complications. Our approach includes early identification of red flags and coordinated referral pathways for obstetrics, gynaecology, and other specialist needs. This is valuable for families who prefer continuity in one care network instead of navigating multiple disconnected centers.
          </p>
          <p>
            For women dealing with cycle disturbances, hormonal concerns, or reproductive symptoms, early referral to focused care can improve outcomes significantly. You can review those pathways on our <Link to="/gynaecology-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">gynaecology page</Link> and <Link to="/obstetrics-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">obstetrics page</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 nila-gradient-warm">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              General Medicine Consultation Scope at Nila Hospital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {generalMedicineScope.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-7">
              Our primary care approach is built around practical diagnosis, continuous monitoring, and timely coordination with specialists when the condition requires deeper intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-7 text-muted-foreground leading-8 text-[17px]">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            4. How to choose a general doctor in Namakkal
          </h2>
          <p>
            Choose a general physician setup that combines careful listening, evidence-based decision-making, and follow-up discipline. The right doctor should explain likely causes, clarify test priorities, and provide clear instructions for recovery and review. A consultation that improves understanding usually improves outcomes because patients can follow treatment correctly.
          </p>
          <p>
            Families also benefit from a center that can handle escalation smoothly. If specialist input becomes necessary, coordinated referral saves time and reduces confusion. At Nila Hospital, this integration is especially useful for women and families who need primary health support plus reproductive care continuity.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            5. Building a preventive health routine
          </h2>
          <p>
            General medicine care is strongest when used preventively. Instead of waiting for severe symptoms, periodic review helps detect trends early and reduces emergency dependence. For working adults, caregivers, and postpartum women, this preventive routine can protect long-term health and improve daily productivity. If you are looking for coordinated care in Namakkal, begin with a focused consultation and a clear follow-up plan.
          </p>
          <p>
            Preventive care also improves treatment efficiency. When baseline health data is tracked consistently, doctors can make more accurate decisions and avoid unnecessary delay. This is especially useful for patients with recurring symptoms who need steady monitoring rather than repeated urgent visits.
          </p>
          <p>
            A simple consultation at the right time can prevent bigger problems later. For many adults, timely review for persistent fatigue, unexplained fever patterns, or blood pressure fluctuation provides early intervention and safer outcomes. Regular follow-up also reduces self-medication risks and supports more consistent recovery.
          </p>
          <p>
            For maternity-linked support, you can also read our <Link to="/maternity-hospital-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">maternity care page</Link> to understand combined primary and specialist pathways.
          </p>
        </div>
      </section>

      <section className="bg-nila-navy py-14 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Book General Medicine Consultation in Namakkal
          </h2>
          <p className="text-nila-light-blue mb-8 max-w-3xl mx-auto">
            Contact Nila Hospital for first-level adult symptom evaluation, routine wellness review, and coordinated specialist support where needed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Stethoscope className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">General doctor review for common medical symptoms and concerns.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Activity className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Primary monitoring for blood pressure, fatigue, and wellness trends.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Shield className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Coordinated referral support for specialist care when needed.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE}>
              <Button size="lg" className="bg-[hsl(var(--nila-warm))] hover:bg-[hsl(var(--nila-warm))]/90 text-white font-bold px-8 gap-2 w-full sm:w-auto">
                <Phone className="h-5 w-5" /> Call +91 96552 25192
              </Button>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-nila-navy hover:bg-white/90 font-bold px-8 w-full sm:w-auto gap-2">
                <MapPin className="h-5 w-5" /> Get Directions
              </Button>
            </a>
          </div>
          <p className="text-xs text-white/60 mt-5 flex items-center justify-center gap-2">
            <ClipboardCheck className="h-3.5 w-3.5" />
            Clear primary care guidance with coordinated next steps.
          </p>
        </div>
      </section>
    </Layout>
  );
}
