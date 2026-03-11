import { Link } from "react-router-dom";
import { CheckCircle2, Heart, Leaf, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { womensHealthNamakkalPageSchemas } from "@/lib/seo";

const PHONE = "tel:+919655225192";
const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";

const womenHealthFocus = [
  "Adolescent menstrual and hormonal guidance with privacy-first consultations",
  "PCOS and cycle health management with regular progress review",
  "Pre-conception planning and reproductive wellness support",
  "Pregnancy-linked women health coordination and postnatal transition care",
  "Menopause symptom management with preventive care planning",
  "Lifestyle, sleep, nutrition, and stress guidance for long-term health stability",
];

export default function WomensHealthNamakkal() {
  return (
    <Layout
      title="Comprehensive Women's Health Clinic in Namakkal | Nila Hospital"
      description="Holistic health for women Namakkal. Nila Hospital offers dedicated life-stage care for adolescence, reproductive years, and menopause with advanced clinical protocols."
      schema={womensHealthNamakkalPageSchemas}
    >
      <HeroGradientSection className="text-white py-20 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Women&apos;s Health in Namakkal
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Complete Women&apos;s Health Care in Namakkal Across Every Life Stage
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Women&apos;s health is not limited to one diagnosis. It includes hormonal balance, menstrual regularity, reproductive planning, pregnancy care, recovery after childbirth, and menopause support. At Nila Hospital Namakkal, we offer structured women-focused care that adapts to your life stage and long-term wellness needs.
          </p>
        </div>
      </HeroGradientSection>

      <section className="py-14 bg-background">
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6945.JPG"
              alt="Supportive patient reception for women health at Nila Hospital"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Compassionate support from first contact to follow-up.</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6872.JPG"
              alt="Consultation room for private women health discussions"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Private consultation environment for sensitive concerns.</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6864.JPG"
              alt="Clinical care room for women health follow-up at Nila Hospital"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Continuity of care for long-term women wellness.</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-7 text-muted-foreground leading-8 text-[17px]">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            1. Women&apos;s health is a long-term journey, not a one-time visit
          </h2>
          <p>
            Most women experience changing health needs across different life stages. A teenager may need guidance for painful periods, a young adult may seek support for PCOS or cycle irregularity, a married woman may need fertility planning, and a mother may need postpartum recovery support. Later, perimenopause and menopause introduce a new set of hormonal and metabolic changes. Effective women&apos;s health care in Namakkal should connect these phases instead of treating each concern in isolation.
          </p>
          <p>
            At Nila Hospital, we follow this continuity model. We look at symptom patterns across time, reproductive goals, and overall wellness indicators so treatment decisions remain relevant and sustainable. This approach improves confidence because women understand what is changing in their body and what practical steps can help.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            2. Hormonal and menstrual health: early action improves outcomes
          </h2>
          <p>
            Menstrual changes are often dismissed as normal stress, but persistent irregularity, heavy bleeding, severe pain, or prolonged absence of cycles should be evaluated early. Hormonal imbalance may affect fertility, sleep, mood, weight, skin, and overall quality of life. When diagnosis is delayed, women often spend months in trial-and-error treatment. Structured specialist assessment shortens this cycle and helps women move toward measurable improvement.
          </p>
          <p>
            PCOS care is a common part of women&apos;s health services in Namakkal. Management works best when medical therapy, lifestyle support, and periodic review are combined. We focus on symptom control as well as long-term metabolic and reproductive stability. If you are seeking dedicated reproductive care, our <Link to="/gynaecology-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">gynaecology page</Link> explains service details.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            3. Women&apos;s wellness during pregnancy and after childbirth
          </h2>
          <p>
            Pregnancy care is a major part of women&apos;s health. Beyond clinical checkups, mothers need nutritional guidance, emotional reassurance, and clear symptom education. Timely obstetric follow-up supports safer delivery outcomes and reduces complications through early intervention. We coordinate pregnancy monitoring with women health priorities so mothers are treated as whole individuals, not only as obstetric cases.
          </p>
          <p>
            After delivery, women often focus completely on newborn care and postpone their own recovery. Postnatal health review is essential for bleeding, pain, blood pressure, mental well-being, and breastfeeding adaptation. Our follow-up model encourages mothers to continue care so recovery remains complete and sustainable. For delivery-specific pathways, visit our <Link to="/maternity-hospital-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">maternity and delivery page</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 nila-gradient-warm">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Women&apos;s Health Focus Areas at Nila Hospital Namakkal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {womenHealthFocus.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-7">
              Our women-centered model emphasizes continuity, dignity, and preventive action, helping patients move from reactive care to planned long-term wellness.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-7 text-muted-foreground leading-8 text-[17px]">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            4. Menopause and midlife care deserve proactive support
          </h2>
          <p>
            Midlife hormonal transition can influence sleep quality, mood, energy, cycle patterns, and bone health. Many women normalize these symptoms and avoid consultation. Proactive menopause support improves comfort and helps women maintain daily function during this stage. We provide practical counselling, symptom evaluation, and follow-up planning so women can navigate transition with confidence.
          </p>
          <p>
            Preventive screening becomes more important in midlife. Structured checkups help detect risk early and support healthier ageing. Women who maintain regular follow-up usually experience better long-term health stability than those who seek care only during acute symptoms.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            5. How to choose women&apos;s health care in Namakkal
          </h2>
          <p>
            Choose a center that offers specialist guidance, private consultations, clear communication, and consistent follow-up across life stages. Women&apos;s health decisions often involve family planning, work routines, and emotional stress, so treatment plans should be practical and individualized. At Nila Hospital, we aim to provide this balance of clinical quality and compassionate care for women in and around Namakkal.
          </p>
          <p>
            Women benefit most when care is preventive and continuous. Small symptoms managed early can prevent larger complications later, especially during hormonally sensitive stages. Our approach supports long-term health planning so patients can stay active, confident, and informed about their body at every phase.
          </p>
          <p>
            If you also need primary evaluation for common adult concerns such as fever, fatigue, or blood pressure trends alongside women&apos;s health follow-up, you can read our <Link to="/general-medicine-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">general medicine page</Link>.
          </p>
        </div>
      </section>

      <section className="bg-nila-navy py-14 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Book Women&apos;s Health Consultation in Namakkal
          </h2>
          <p className="text-nila-light-blue mb-8 max-w-3xl mx-auto">
            Connect with our team for hormonal health, menstrual issues, pregnancy-linked wellness, menopause support, and preventive women care planning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Heart className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Life-stage women health support from adolescence to menopause.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Respectful consultations with privacy and continuity of care.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Leaf className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Preventive care and lifestyle guidance for long-term stability.</p>
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
                <MapPin className="h-5 w-5" /> Visit Hospital
              </Button>
            </a>
          </div>
          <p className="text-xs text-white/60 mt-5 flex items-center justify-center gap-2">
            <Sparkles className="h-3.5 w-3.5" />
            Comprehensive women&apos;s health care for Namakkal families.
          </p>
        </div>
      </section>
    </Layout>
  );
}
