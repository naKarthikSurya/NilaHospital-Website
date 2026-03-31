import { Link } from "react-router-dom";
import { Phone, MapPin, CheckCircle2, Shield, Heart, Stethoscope } from "lucide-react";
import Layout from "@/components/Layout";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { whyBestHospitalPageSchemas } from "@/lib/seo";

const PHONE = "tel:+919655225192";
const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";

const trustPoints = [
  "Dedicated women-focused care pathway from first consultation to follow-up",
  "Consistent consultant-led treatment with clear communication and practical planning",
  "Clean, protocol-based OT and labour support with safety-first monitoring",
  "Integrated services for ANC, high-risk pregnancy, PCOS, and preventive screening",
  "Compassionate counselling for women and families during emotionally sensitive phases",
];

export default function WhyBestHospitalNamakkal() {
  return (
    <Layout
      title="Best Hospital in Namakkal for Women & Maternity | Nila Hospital"
      description="Why choose Nila Hospital? We are recognized as a top hospital in Namakkal for dedicated women-led care, sterile facilities, and 100% consultant-level attention."
      schema={whyBestHospitalPageSchemas}
    >
      <HeroGradientSection className="text-white py-20 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Nila Hospital Namakkal
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Why We Are Considered One of the Best Hospitals in Namakkal
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Families usually search for the best hospital in Namakkal when they want more than treatment alone. They want accurate diagnosis, safe procedures, clear communication, and doctors who stay available throughout the journey. At Nila Hospital, our focus is women&apos;s and maternity care, and our reputation has grown because we combine clinical discipline with deeply personal support.
          </p>
        </div>
      </HeroGradientSection>

      <section className="py-14 bg-background">
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6952.JPG"
              alt="Exterior view of Nila Hospital in Namakkal"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Easy-to-reach location on Salem Road, Namakkal.</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6945.JPG"
              alt="Reception area at Nila Hospital with welcoming patient support"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Patient-first front desk and coordinated care support.</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6892.JPG"
              alt="Operation theatre infrastructure at Nila Hospital Namakkal"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Sterile OT environment built around safety protocols.</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-7 text-muted-foreground leading-8 text-[17px]">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            1. Specialized care, not general volume-driven care
          </h2>
          <p>
            A hospital becomes truly dependable when its systems are designed around a clear specialty. Nila Hospital is not trying to be everything for everyone. Our strongest domain is obstetrics and gynaecology, and this focused approach helps us deliver stronger outcomes in pregnancy care, menstrual and hormonal disorders, fertility-related planning, and postnatal recovery. Women who visit us are not redirected across multiple departments and disconnected consultations. They receive a coherent care plan from experienced clinicians who understand their stage of life, medical history, and immediate concerns.
          </p>
          <p>
            This focused model also benefits diagnostic quality. When doctors and staff repeatedly manage similar clinical pathways, they identify early warning patterns faster, communicate risk better, and choose investigations more appropriately. For patients, that translates to fewer delays, clearer expectations, and better confidence during treatment. If you are comparing options for <Link to="/services" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">maternity and women&apos;s health services in Namakkal</Link>, specialization is one of the first indicators of long-term trust.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            2. Consultant-led continuity from first visit to follow-up
          </h2>
          <p>
            One of the most common reasons families describe us as a top hospital in Namakkal is continuity of care. In many settings, patients meet a different doctor at each stage. That model often creates confusion and repeated explanations. At Nila Hospital, we prioritize consultant-led continuity so your case history does not get fragmented. Whether it is antenatal monitoring, high-risk pregnancy planning, delivery decisions, or post-delivery review, the same clinical direction is maintained.
          </p>
          <p>
            Continuity matters because women&apos;s health decisions are cumulative. A medicine plan from month two may affect findings in month six. A symptom discussed in one consultation may become critical later. When the same team tracks this progression, care becomes safer and more individualized. This approach reduces unnecessary anxiety for families and improves decision quality during important moments such as labour planning and emergency escalation.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            3. Safety protocols that are visible, practical, and consistent
          </h2>
          <p>
            People often associate quality with reputation alone, but clinical safety is built through disciplined systems. We maintain clean and structured workflows in consultation areas, procedure spaces, and operation theatre environments. Our team follows infection-control protocols, triage practices, and monitoring steps that are practical in day-to-day patient care, not just policy statements on paper. That is especially important for pregnant women, surgical candidates, and patients requiring repeated follow-up visits.
          </p>
          <p>
            Families can usually sense this standard quickly: appointments are organized, escalation is clearer, and doctor instructions are easier to follow. For women entering labour, these details matter even more. A safe hospital is one where the environment, communication, and readiness all work together. If your family is evaluating safe delivery options, you can also review our <Link to="/doctors" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">doctor team</Link> and speak directly with us about your case profile.
          </p>
        </div>
      </section>

      <section className="py-16 nila-gradient-warm">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              4. Why families trust Nila Hospital in Namakkal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-7">
              Beyond these points, families also value practical accessibility. We are centrally located in Namakkal, consultation schedules are transparent, and communication remains clear even during stressful situations. Strong hospitals are built on clinical depth and everyday reliability, and both are essential for women&apos;s health journeys that can span months or years.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-7 text-muted-foreground leading-8 text-[17px]">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            5. Long-term women&apos;s health support, not one-time treatment
          </h2>
          <p>
            The best hospital choice is rarely about a single appointment. It is about whether the same place can support different health phases over time: cycle irregularities, PCOS, pre-conception planning, pregnancy monitoring, delivery, postnatal follow-up, and preventive screening. Women who establish continuity with us often continue for annual checkups because they prefer a care model that already understands their baseline patterns and prior responses to treatment.
          </p>
          <p>
            This long-term continuity helps with preventive care as well. Early evaluation of persistent symptoms, timely scans, and follow-up discipline can prevent many complications from growing silently. We encourage women and families to treat hospital visits as part of planned health management, not only emergency response. If you are searching for a reliable women-focused hospital in Namakkal with sustainable care pathways, this is where a focused specialty center provides clear value.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            6. Patient communication that respects real family concerns
          </h2>
          <p>
            Clinical expertise must be accompanied by understandable communication. Many patients arrive with fear, internet-driven confusion, or conflicting advice. We spend time explaining diagnosis, options, expected timelines, and warning signs in practical language so families can participate in decisions confidently. This is particularly important in obstetrics, where choices about delivery method, risk monitoring, and postnatal recovery affect both mother and baby.
          </p>
          <p>
            Respectful communication is also about dignity and privacy. Women should be able to discuss sensitive symptoms without discomfort or judgment. We maintain that standard across consultations and follow-up discussions. If you would like to evaluate whether our approach suits your family, you can visit our <Link to="/about" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">about page</Link> and then book a direct consultation.
          </p>
        </div>
      </section>

      <section className="bg-nila-navy py-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Speak With Our Team at Nila Hospital
          </h2>
          <p className="text-nila-light-blue mb-8 max-w-3xl mx-auto">
            If you are still comparing hospitals in Namakkal, talk to us directly. A short consultation can help you understand what care pathway is appropriate for your condition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Shield className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Structured safety protocols for maternity and gynaecology care.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Heart className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Compassionate and dignified support for every patient and family.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Stethoscope className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Specialist-led guidance for pregnancy, PCOS, and women&apos;s health concerns.</p>
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
        </div>
      </section>
    </Layout>
  );
}
