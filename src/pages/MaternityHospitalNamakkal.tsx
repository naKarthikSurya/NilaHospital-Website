import { Link } from "react-router-dom";
import { Baby, CheckCircle2, Clock, Heart, MapPin, Phone, Shield, Users } from "lucide-react";
import Layout from "@/components/Layout";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { maternityHospitalNamakkalPageSchemas } from "@/lib/seo";

const PHONE = "tel:+919655225192";
const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";

const maternityStrengths = [
  "Specialist-led ANC planning from first trimester to labour",
  "Support for both normal delivery and medically indicated C-section",
  "Prepared OT environment and safety-focused labour protocols",
  "Postnatal follow-up for maternal recovery and newborn transition",
  "Clear communication with family during every critical milestone",
];

export default function MaternityHospitalNamakkal() {
  return (
    <Layout
      title="Best Maternity Hospital in Namakkal | Delivery & Labor Experts"
      description="Planning your birth? Nila Hospital provides high-quality maternity care in Namakkal. Specializing in normal delivery, painless labor, and safe C-section protocols with 24/7 care."
      schema={maternityHospitalNamakkalPageSchemas}
    >
      <HeroGradientSection className="text-white py-20 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Maternity & Delivery Care
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Best Maternity Hospital in Namakkal for Safe Mother and Baby Care
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Choosing a maternity hospital is one of the most important decisions a family makes. The best delivery hospital in Namakkal should provide more than labour-room readiness. It should deliver continuity from antenatal care to childbirth and postnatal recovery. Nila Hospital is built around that complete maternity pathway with specialist oversight and compassionate support.
          </p>
        </div>
      </HeroGradientSection>

      <section className="py-14 bg-background">
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6952.JPG"
              alt="Nila Hospital maternity facility in Namakkal"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Trusted maternity destination for families in Namakkal.</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6892.JPG"
              alt="Operation theatre for safe delivery procedures at Nila Hospital"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Prepared infrastructure for delivery and emergency readiness.</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6864.JPG"
              alt="Inpatient maternity care rooms for mother recovery"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Comfortable post-delivery recovery with clinical supervision.</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-7 text-muted-foreground leading-8 text-[17px]">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            1. What defines the best maternity hospital in Namakkal?
          </h2>
          <p>
            Families often evaluate maternity hospitals based on delivery-day readiness alone, but true quality begins months before childbirth. A strong maternity center provides antenatal risk tracking, regular fetal and maternal review, nutritional counselling, and timely intervention planning. These steps reduce uncertainty and improve outcomes during labour. At Nila Hospital, our maternity care model is designed to keep mothers informed and monitored from early pregnancy through postpartum recovery.
          </p>
          <p>
            The best maternity hospital is also one that communicates clearly. Mothers and caregivers should know what to expect at each trimester, what symptoms need urgent review, and how labour plans may change based on clinical findings. Clear communication lowers panic, improves decision-making, and helps families participate in care with confidence.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            2. Why delivery planning matters for maternal safety
          </h2>
          <p>
            Safe delivery is a process, not a single event. From the third trimester onward, delivery planning must include maternal condition, fetal status, prior obstetric history, and emergency preparedness. We support normal delivery when medically appropriate and advise C-section when safety factors demand it. The core principle is individualized clinical judgment, not fixed preference.
          </p>
          <p>
            Families should understand both pathways in advance so labour decisions are not overwhelming. We explain expected progression, monitoring needs, and backup plans early in care. This approach is one reason many patients describe Nila Hospital as a preferred delivery hospital in Namakkal. If you want a deeper view of obstetric risk care, visit our <Link to="/obstetrics-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">obstetrics page</Link>.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            3. Maternity care beyond childbirth: postnatal support
          </h2>
          <p>
            Delivery is only one part of the maternity journey. The early postnatal period is critical for maternal recovery, breastfeeding confidence, emotional well-being, and identification of warning signs. Women need structured support during this phase, especially after difficult labour, surgical delivery, or first-time motherhood. Our team guides families on practical recovery milestones and when to seek immediate review.
          </p>
          <p>
            Postnatal continuity also helps women transition into long-term reproductive and hormonal care. Concerns such as irregular cycles, pelvic discomfort, or mood changes after delivery should not be ignored. We connect postpartum care with ongoing women&apos;s health pathways for better long-term outcomes.
          </p>
        </div>
      </section>

      <section className="py-16 nila-gradient-warm">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Families Choose Nila Hospital for Maternity in Namakkal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {maternityStrengths.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-7">
              We combine medical discipline and compassionate maternity support, helping families navigate pregnancy and delivery with confidence. This balanced approach is central to safe maternal outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-7 text-muted-foreground leading-8 text-[17px]">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            4. Integrated women-focused care under one roof
          </h2>
          <p>
            A maternity hospital becomes more valuable when it also supports long-term women&apos;s health. Many patients prefer one center that can handle pre-conception guidance, pregnancy care, delivery, and later gynaecology follow-up. This continuity avoids fragmented care and improves quality of decisions over time. At Nila Hospital, women can transition smoothly between maternity and gynaecology pathways as needs change.
          </p>
          <p>
            For families seeking ongoing support after childbirth, our <Link to="/gynaecology-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">gynaecology services</Link> and <Link to="/womens-health-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">women&apos;s health programs</Link> provide continuity beyond the delivery period.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            5. Choosing a delivery hospital in Namakkal with confidence
          </h2>
          <p>
            If you are comparing hospitals, ask practical questions: Is ANC follow-up consistent? Are labour decisions explained in advance? Is there reliable support after delivery? Are emergency pathways clear? The hospital that answers these questions with clear systems is usually the safer choice. Nila Hospital is committed to this model, helping mothers and families move through maternity care with stability and trust.
          </p>
          <p>
            Another useful factor is continuity after discharge. Mothers recover better when the same care team reviews progress, clarifies concerns, and supports early postnatal decisions. This connected model helps reduce avoidable complications and gives families stronger confidence in the first weeks after childbirth.
          </p>
          <p>
            Planned maternity care also supports better birth experience. When families understand labour signs, admission timing, and recovery expectations in advance, stress reduces significantly. Structured counselling before delivery helps mothers stay prepared and improves confidence during both normal labour and surgical delivery pathways.
          </p>
        </div>
      </section>

      <section className="bg-nila-navy py-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Talk to Our Maternity Team in Namakkal
          </h2>
          <p className="text-nila-light-blue mb-8 max-w-3xl mx-auto">
            Book consultation for antenatal care, safe delivery planning, and postnatal follow-up at Nila Hospital.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Baby className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Full maternity pathway from ANC to postpartum recovery.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Shield className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Safe delivery planning based on mother and baby condition.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Clock className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Timely medical guidance for each pregnancy milestone.</p>
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
            <Users className="h-3.5 w-3.5" />
            Trusted maternity and delivery support for Namakkal families.
          </p>
        </div>
      </section>
    </Layout>
  );
}
