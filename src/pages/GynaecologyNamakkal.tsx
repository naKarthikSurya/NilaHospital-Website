import { Link } from "react-router-dom";
import { CheckCircle2, HeartPulse, MapPin, Phone, ShieldCheck, Stethoscope } from "lucide-react";
import Layout from "@/components/Layout";
import HeroGradientSection from "@/components/HeroGradientSection";
import { Button } from "@/components/ui/button";
import { gynaecologyNamakkalPageSchemas } from "@/lib/seo";

const PHONE = "tel:+919655225192";
const MAPS_URL = "https://maps.app.goo.gl/rYRuDj8rfa5Niuzi8";

const carePoints = [
  "Evaluation and treatment for irregular, painful, or heavy periods",
  "PCOS and hormonal symptom management with structured follow-up",
  "Assessment for vaginal infection, discharge, and pelvic discomfort",
  "Pre-conception and fertility-oriented counselling for couples",
  "Perimenopause and menopause symptom support for midlife women",
  "Preventive women health checks with timely screening guidance",
];

export default function GynaecologyNamakkal() {
  return (
    <Layout
      title="Gynaecology Specialist in Namakkal | Hormone & PCOS Care"
      description="Looking for the best gynaecologist in Namakkal? Nila Hospital provides expert specialist care for PCOS, irregular periods, infections, and perimenopause support with personal attention."
      schema={gynaecologyNamakkalPageSchemas}
    >
      <HeroGradientSection className="text-white py-20 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="text-[hsl(var(--nila-warm))] text-sm font-bold uppercase tracking-widest mb-3">
            Gynaecology Care in Namakkal
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Best Gynaecologist in Namakkal: Focused Care for Every Woman
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            If you are searching for a trusted gynaecologist in Namakkal, what matters most is not just one prescription but a care pathway that understands your symptoms, life stage, and long-term goals. At Nila Hospital, we offer specialist-led gynaecology care that combines diagnosis, treatment, prevention, and follow-up in one coordinated system.
          </p>
        </div>
      </HeroGradientSection>

      <section className="py-14 bg-background">
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6872.JPG"
              alt="Gynaecology consultation room at Nila Hospital Namakkal"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Private and respectful consultation experience.</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6945.JPG"
              alt="Reception and patient support area at Nila Hospital"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Organized patient flow for timely appointments.</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src="/images/gallery/521A6833.JPG"
              alt="Clinical support setup in Nila Hospital Namakkal"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <figcaption className="text-sm text-muted-foreground p-4">Clinical discipline with safety-focused care processes.</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-7 text-muted-foreground leading-8 text-[17px]">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            1. Why women in Namakkal choose specialist gynaecology care
          </h2>
          <p>
            Many women delay consulting a gynaecologist because symptoms begin subtly. Irregular periods, painful cramps, mood shifts, acne, white discharge, or pelvic discomfort are often managed at home until they become disruptive. Early specialist evaluation makes a major difference because the same symptom can have very different causes. Hormonal imbalance, thyroid patterns, polycystic ovarian syndrome, infection, and stress-related cycle disturbances need different treatment strategies. A specialist approach prevents trial-and-error medication and helps women get a clear diagnosis sooner.
          </p>
          <p>
            At Nila Hospital, gynaecology consultations are structured around history, symptom patterns, and practical decision-making. We focus on what you are experiencing now and what risks can be reduced over time. This is especially important for women planning pregnancy in the next one to two years, because untreated cycle disorders can create avoidable complications. If you also need pregnancy-focused services, you can review our <Link to="/obstetrics-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">obstetrics care in Namakkal</Link>.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            2. PCOS, irregular periods, and hormonal health management
          </h2>
          <p>
            One of the most common reasons patients search for the best gynaecologist in Namakkal is PCOS-related symptoms. Women may report delayed cycles, weight fluctuations, facial acne, hair growth changes, and difficulty conceiving. Effective PCOS care is not a one-time course of tablets; it requires phased management with hormonal evaluation, metabolic support, and regular follow-up. We guide treatment based on symptom severity, reproductive goals, and response over time, so progress can be tracked instead of guessed.
          </p>
          <p>
            Menstrual irregularities also need careful interpretation across age groups. A teenager with painful cycles, a young adult with prolonged bleeding, and a woman in perimenopause require different care logic. Our consultation model helps women understand the likely cause, when intervention is necessary, and which warning signs need urgent review. Better understanding improves adherence, reduces anxiety, and helps families make informed health decisions.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            3. Infection symptoms, pelvic pain, and preventive screening
          </h2>
          <p>
            Recurrent vaginal infection symptoms and pelvic pain can affect work, sleep, and relationships. These concerns are often undertreated because many women feel uncomfortable discussing them openly. We maintain a confidential and respectful care environment where sensitive symptoms can be discussed without judgment. Early diagnosis helps avoid prolonged discomfort and prevents recurrent episodes that impact quality of life.
          </p>
          <p>
            Preventive screening is equally essential. Even when symptoms are controlled, women benefit from periodic review for cervical health, hormonal trends, and reproductive planning. A preventive strategy catches risk early and reduces emergency visits later. If you are building a complete long-term plan, our <Link to="/womens-health-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">women&apos;s health page</Link> explains how we approach continuity across life stages.
          </p>
        </div>
      </section>

      <section className="py-16 nila-gradient-warm">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Core Gynaecology Services at Nila Hospital Namakkal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {carePoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-7">
              Our team combines medical discipline with clear communication so women know what treatment to expect, when to follow up, and how to maintain progress. Continuity with the same specialist team is a key reason patients remain with us for long-term gynaecology care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-7 text-muted-foreground leading-8 text-[17px]">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            4. Choosing the right gynaecologist in Namakkal
          </h2>
          <p>
            When comparing options, look for four practical markers: specialist experience, diagnosis clarity, follow-up discipline, and communication quality. A good gynaecologist does not just treat today&apos;s symptoms but explains recurrence risks and prevention steps. Women also benefit from a hospital setup where diagnostics, counselling, and treatment are coordinated instead of fragmented across disconnected providers.
          </p>
          <p>
            At Nila Hospital, our clinical focus is women&apos;s health. We aim to keep care decisions transparent and individualized, especially when symptoms overlap with fertility planning or pregnancy goals. For women planning conception, coordinated care between gynaecology and obstetrics improves outcomes and reduces avoidable stress.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            5. Your next step for better reproductive health
          </h2>
          <p>
            If you have persistent cycle changes, unexplained pain, recurrent infection symptoms, or hormonal concerns, early consultation can prevent prolonged discomfort. Timely care also protects long-term reproductive health and helps you plan confidently for future pregnancy if needed. You can also review our <Link to="/maternity-hospital-namakkal" className="text-[hsl(var(--nila-warm))] font-semibold hover:underline">maternity and delivery page</Link> if you want a single center for both gynaecology and pregnancy care in Namakkal.
          </p>
        </div>
      </section>

      <section className="bg-nila-navy py-14 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[hsl(var(--nila-warm))]/10 rounded-full blur-3xl" />
        <div className="container max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Book a Gynaecology Consultation in Namakkal
          </h2>
          <p className="text-nila-light-blue mb-8 max-w-3xl mx-auto">
            Speak with our specialist team for PCOS, menstrual disorders, infection symptoms, preventive screening, and long-term women health guidance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <Stethoscope className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Specialist-led diagnosis with practical treatment planning.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <HeartPulse className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Continuity of care for hormonal and reproductive health.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-[hsl(var(--nila-warm))] mt-1 shrink-0" />
              <p className="text-white/90 text-sm">Confidential consultations with safety-focused protocols.</p>
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
        </div>
      </section>
    </Layout>
  );
}
