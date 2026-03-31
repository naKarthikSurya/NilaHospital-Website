import { Link } from "react-router-dom";
import { Baby, CalendarHeart, CheckCircle2, Flower2, MapPin, Phone, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { bestWomenHospitalPageSchemas } from "@/lib/seo";

const PHONE = "tel:+919655225192";
const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";

const carePhases = [
  {
    title: "Adolescent and early adult care",
    description:
      "Guidance for menstrual irregularities, hormonal symptoms, and preventive checkups with privacy and non-judgmental counselling.",
  },
  {
    title: "Pre-conception and fertility planning",
    description:
      "Health optimization before pregnancy, risk assessment, and practical planning for healthy conception and pregnancy progression.",
  },
  {
    title: "Pregnancy to postnatal care",
    description:
      "Structured ANC monitoring, delivery guidance, and postpartum follow-up for maternal recovery and newborn transition.",
  },
  {
    title: "Midlife and menopause support",
    description:
      "Evidence-based management of cycle changes, mood and sleep concerns, and preventive screening in the menopausal stage.",
  },
];

export default function BestWomenHospitalNamakkal() {
  return (
    <Layout
      title="Best Women's Hospital in Namakkal | Nila Hospital"
      description="Nila Hospital is recognized for clinical excellence in women's health. We provide expert pregnancy monitoring, PCOS management, and delivery care in a sterile, personal environment in Namakkal."
      schema={bestWomenHospitalPageSchemas}
    >
      <HeroGradientSection className="text-white py-20 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Women&apos;s Health in Namakkal
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Best Women Hospital in Namakkal: What Truly Matters for Your Care
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Searching for the best women hospital in Namakkal often starts during an urgent moment, but the right choice should support your health for years, not just one visit. At Nila Hospital, women-centered care means combining clinical precision with respectful communication, privacy, and long-term follow-up across every life stage.
          </p>
        </div>
      </HeroGradientSection>

      <section className="py-14 bg-background">
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6872.JPG"
              alt="Consultation setup for women health evaluations at Nila Hospital"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Private consultations built around comfort and clarity.</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6864.JPG"
              alt="Inpatient care space for women at Nila Hospital Namakkal"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Clean inpatient support for recovery and observation.</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6833.JPG"
              alt="Clinical infrastructure and equipment in Nila Hospital"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Structured clinical environment with safety-focused workflows.</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-7 text-muted-foreground leading-8 text-[17px]">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            1. A women-focused hospital should understand life-stage transitions
          </h2>
          <p>
            Women&apos;s health is not a single specialty moment. It changes with age, hormonal shifts, reproductive goals, lifestyle stress, and medical history. A dependable women hospital in Namakkal should be equipped to handle these transitions with consistency. At Nila Hospital, we build care plans around where a woman is in her life stage instead of applying the same template to everyone. That means adolescent concerns are handled differently from pre-conception counselling, and pregnancy care is handled differently from menopausal transition support.
          </p>
          <p>
            This life-stage perspective improves diagnosis and treatment outcomes. Symptoms like irregular cycles, fatigue, pelvic discomfort, acne, or mood changes can have overlapping causes that need structured evaluation. Women benefit when doctors do not isolate each symptom but interpret them within a broader endocrine and reproductive context. Families often call this the difference between temporary relief and meaningful long-term care.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            2. Pregnancy care quality is one of the strongest signals of a women hospital
          </h2>
          <p>
            For many families, pregnancy is when they first evaluate hospital quality in depth. Reliable antenatal care is not only about scheduled checkups. It includes risk mapping, fetal growth tracking, blood pressure and sugar surveillance, nutrition planning, symptom counselling, and timely escalation when warning patterns appear. Our obstetric pathway is designed to keep mothers informed at every milestone, so decisions are made early and with confidence.
          </p>
          <p>
            Delivery planning is handled with equal care. We support normal delivery whenever clinically suitable and use surgical intervention when it becomes medically necessary. Good obstetric care does not force one approach; it chooses the safest approach for the specific mother and baby. If you want to review detailed service options before booking, visit our <Link to="/services" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">services page</Link> for ANC, delivery care, PCOS management, and preventive care pathways.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            3. Privacy, dignity, and communication are clinical quality factors
          </h2>
          <p>
            Women often delay care because they fear judgment, rushed appointments, or unclear instructions. A strong women hospital must address this barrier actively. We prioritize private consultations and respectful conversations, especially for sensitive concerns related to menstruation, fertility, sexual health, infection symptoms, and menopause. Patients deserve explanations they can understand and action steps they can follow at home.
          </p>
          <p>
            Communication standards also affect treatment adherence. When women clearly understand what medication to take, when to return, and which symptoms need urgent review, outcomes improve significantly. This is one reason many families in and around Namakkal choose continuity with a specialist center rather than fragmented one-time visits.
          </p>
        </div>
      </section>

      <section className="py-16 nila-gradient-warm">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              4. Care coverage across every women&apos;s health phase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carePhases.map((phase) => (
                <div key={phase.title} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{phase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-7">
              Women often need coordinated support across multiple phases, and fragmented care can cause delays and confusion. A single women-focused center with consistent specialist guidance helps maintain accurate history, better follow-up, and more confident decision-making for both patients and families.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-7 text-muted-foreground leading-8 text-[17px]">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            5. Clinical depth in PCOS, menstrual disorders, and preventive screening
          </h2>
          <p>
            A large percentage of women who search for the best women hospital in Namakkal are dealing with chronic concerns such as PCOS, irregular or painful periods, recurrent infections, or unexplained hormonal symptoms. These conditions need ongoing management, not episodic prescriptions. Our approach combines medical treatment, lifestyle guidance, and follow-up monitoring so that improvements are measurable and sustained. The goal is not short-term symptom masking but better hormonal and reproductive stability over time.
          </p>
          <p>
            Preventive screening is equally important. Women often postpone cervical screening, routine checkups, and pre-conception evaluation because symptoms feel manageable. Early checkups are the opposite of overtesting; they help detect risk before it becomes a crisis. Whether you are planning pregnancy now or later, proactive care can reduce complications and improve maternal outcomes.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            6. Choosing the right hospital in Namakkal: practical checklist
          </h2>
          <p>
            If you are deciding where to seek women&apos;s care, use a practical checklist: Is the hospital focused on women&apos;s health? Are consultations handled by experienced specialists? Is there transparent communication about tests and treatment options? Are delivery and surgery decisions explained clearly? Is follow-up care reliable after procedures and childbirth? A hospital that answers yes to these questions usually provides better confidence and better continuity.
          </p>
          <p>
            At Nila Hospital, we aim to meet these standards every day. Women&apos;s care is deeply personal and often emotionally demanding, so medical accuracy must come with empathy and respect. If you would like to evaluate the team before booking, you can review our <Link to="/doctors" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">doctor profiles</Link> and contact us directly for appointment planning.
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
            If you are looking for trusted women-focused care with specialist guidance, connect with Nila Hospital for consultation, pregnancy planning, or treatment follow-up.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Baby className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">ANC monitoring and safe delivery planning for every pregnancy stage.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <CalendarHeart className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Structured follow-up for PCOS, cycle disorders, and menopausal health.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Respectful, private, and compassionate consultations for women.</p>
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
            <Flower2 className="h-3.5 w-3.5" />
            Women-focused care in Namakkal with specialist-led continuity.
          </p>
        </div>
      </section>
    </Layout>
  );
}
