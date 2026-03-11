import { Link } from "react-router-dom";
import { Baby, CheckCircle2, HeartHandshake, MapPin, Phone, Shield, Timer } from "lucide-react";
import Layout from "@/components/Layout";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { obstetricsNamakkalPageSchemas } from "@/lib/seo";

const PHONE = "tel:+919655225192";
const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";

const safetyChecklist = [
  "Trimester-wise ANC planning with risk flagging and milestone tracking",
  "Clinical monitoring for blood pressure, sugar trends, and warning symptoms",
  "Fetal growth and movement guidance with time-sensitive response planning",
  "Delivery method counselling based on maternal and fetal safety priorities",
  "Postnatal review for recovery, feeding guidance, and emotional support",
];

export default function ObstetricsNamakkal() {
  return (
    <Layout
      title="Obstetrics & Pregnancy Specialist in Namakkal | Safe Birth"
      description="Expert obstetrics care in Namakkal at Nila Hospital. We offer comprehensive ANC checkups, high-risk pregnancy monitoring, and safe natural delivery planning with specialist supervision."
      schema={obstetricsNamakkalPageSchemas}
    >
      <HeroGradientSection className="text-white py-20 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Obstetrics in Namakkal
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Safe Delivery in Namakkal Starts With Structured Obstetric Care
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Pregnancy care is not only about routine checkups. It is about identifying risk early, monitoring mother and baby consistently, and planning labour decisions with clarity. At Nila Hospital, our obstetrics care model is built to support both low-risk and high-risk pregnancies with focused supervision, practical counselling, and safety-first protocols.
          </p>
        </div>
      </HeroGradientSection>

      <section className="py-14 bg-background">
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6952.JPG"
              alt="Nila Hospital exterior for maternity and obstetric care in Namakkal"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Dedicated women and maternity care center in Namakkal.</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6892.JPG"
              alt="Sterile operation theatre setup for delivery procedures"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Prepared OT infrastructure for obstetric safety.</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6862.JPG"
              alt="Patient care space for maternal monitoring and recovery"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Continuous support from pregnancy to postnatal phase.</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-7 text-muted-foreground leading-8 text-[17px]">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            1. Why structured obstetrics care matters for safe delivery
          </h2>
          <p>
            Families often search for safe delivery options in Namakkal during late pregnancy, but the strongest outcomes start much earlier. Structured obstetrics care from the first trimester helps detect risk patterns before they become emergencies. Blood pressure changes, sugar trends, fetal growth variations, and maternal symptoms are interpreted over time, not in isolated snapshots. This continuity gives doctors a clearer understanding of risk trajectory and allows timely interventions when needed.
          </p>
          <p>
            At Nila Hospital, antenatal planning is practical and milestone-based. We guide mothers on what to monitor at home, which symptoms require urgent contact, and when follow-up should not be delayed. For first-time mothers, this clarity reduces anxiety and improves decision confidence. For women with prior pregnancy complications, it enables closer surveillance and more personalized care.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            2. Safe normal delivery and clinical decision-making for C-section
          </h2>
          <p>
            Safe delivery does not mean insisting on one mode of birth. It means selecting the safest path for mother and baby based on ongoing clinical evidence. We encourage normal delivery when maternal and fetal conditions support it. At the same time, we counsel families early about scenarios where surgical delivery becomes medically appropriate. Transparent communication helps avoid confusion during labour, when rapid decisions are often required.
          </p>
          <p>
            Obstetric counselling includes labour readiness, expected progression, and contingency planning. Families should understand not only preferred plans but also alternate options. This approach improves trust and helps mothers stay mentally prepared. If you want an overview of combined pregnancy and postnatal services, see our <Link to="/maternity-hospital-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">maternity hospital page</Link>.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            3. High-risk pregnancy monitoring in Namakkal
          </h2>
          <p>
            High-risk pregnancy care requires consistent supervision and escalation readiness. Conditions such as hypertension, gestational diabetes, prior preterm delivery, or fetal growth concerns cannot be managed through irregular visits. We maintain closer review schedules, focused counselling, and clear emergency guidance so families know when immediate attention is necessary. The goal is not fear-based care, but prepared care with measurable checkpoints.
          </p>
          <p>
            During high-risk cases, communication is as important as medication. Mothers and caregivers should understand the meaning of each clinical finding and what it implies for delivery timing. This reduces panic and supports informed decisions. Our team emphasizes practical explanation so families can participate actively in care rather than feeling disconnected from medical planning.
          </p>
        </div>
      </section>

      <section className="py-16 nila-gradient-warm">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Safe Delivery Checklist at Nila Hospital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {safetyChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-7">
              Our obstetrics care emphasizes anticipation over reaction. When mothers are monitored well and decisions are explained clearly, delivery care becomes safer and more predictable for the whole family.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-7 text-muted-foreground leading-8 text-[17px]">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            4. Postnatal follow-up is part of safe obstetrics care
          </h2>
          <p>
            Delivery is a major milestone, but obstetric care does not end there. Early postpartum review is important for bleeding patterns, pain recovery, blood pressure stability, breastfeeding guidance, and emotional well-being. Women who receive structured follow-up recover more confidently and identify warning signs sooner. We encourage families to treat postnatal visits as essential, not optional.
          </p>
          <p>
            If you need additional support for hormonal symptoms, cycle recovery, or ongoing reproductive concerns after childbirth, our <Link to="/gynaecology-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">gynaecology services in Namakkal</Link> provide coordinated long-term care.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            5. Selecting an obstetrics hospital in Namakkal
          </h2>
          <p>
            When comparing hospitals for delivery care, use practical criteria: consistency of specialist supervision, clarity of labour planning, readiness for escalation, and reliability of postpartum support. Safe delivery outcomes are built through these systems, not slogans. At Nila Hospital, we focus on disciplined obstetric workflows and compassionate communication so mothers and families feel supported at every stage.
          </p>
          <p>
            Families from Namakkal, Tiruchengode, and nearby areas often choose a center that can respond quickly when labour patterns change suddenly. This is where preparedness, experienced judgement, and timely clinical communication become critical. A well-planned obstetrics pathway gives mothers safety and families peace of mind during one of life&apos;s most important moments.
          </p>
        </div>
      </section>

      <section className="bg-nila-navy py-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Consult for Obstetrics and Safe Delivery in Namakkal
          </h2>
          <p className="text-nila-light-blue mb-8 max-w-3xl mx-auto">
            Book antenatal and delivery planning consultation with our team for routine pregnancy, high-risk monitoring, and postpartum guidance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Baby className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">ANC and fetal monitoring with specialist supervision.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Shield className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Safety-first decisions for normal delivery and C-section.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Timer className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Time-sensitive escalation guidance for pregnancy complications.</p>
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
            <HeartHandshake className="h-3.5 w-3.5" />
            Compassionate obstetric care for mothers and families in Namakkal.
          </p>
        </div>
      </section>
    </Layout>
  );
}
