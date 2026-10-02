import { useEffect, useRef, useState } from "react";
import logoImg from "@/imports/prime_logo_main.jpeg";
import siennaImg from "@/imports/sienna_home.png";
import heroImg from "@/imports/hero.png";
import ceoImg from "@/imports/newceo.jpg";
import hospitalClinicImg from "@/imports/hospitalclinic.jpg";
import whoWeAreImg from "@/imports/whoweare.png";

/* ── Icons ── */
const PhoneIcon = () => <svg viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor"/></svg>;
const MailIcon = () => <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const PinIcon = () => <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8"/><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" stroke="currentColor" strokeWidth="1.8"/></svg>;
const ClockIcon = () => <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const CheckIcon = () => <svg viewBox="0 0 24 24" fill="none"><path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const ChevronIcon = () => <svg viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const PlusIcon = () => <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>;
const ShieldIcon = () => <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v6c0 5-3.4 8.6-7 9-3.6-.4-7-4-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.7"/><path d="M9.5 12l1.8 1.8L15 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const HeartIcon = () => <svg viewBox="0 0 24 24" fill="none"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-.8.8-.8-.8a5.5 5.5 0 0 0-7.8 7.8l.8.8L12 21l7.8-7.8.8-.8a5.5 5.5 0 0 0 0-7.8z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const CarIcon = () => <svg viewBox="0 0 24 24" fill="none"><path d="M5 17H3v-5l2-5h14l2 5v5h-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="7.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.7"/><circle cx="16.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.7"/><path d="M5 12h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>;
const WheelchairIcon = () => <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.7"/><path d="M12 8v6l2.5 3.5M9 11H6l-1 5h2M15.5 17.5A4 4 0 1 1 9 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const MenuIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
const CloseIcon = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
const StarIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
const UsersIcon = () => <svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.7"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const AwardIcon = () => <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="1.7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;

/* ── Data ── */
const SERVICES = [
  { n:"01", img:"https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?w=700&h=480&fit=crop&auto=format", alt:"Doctor consulting with patient in exam room", title:"Medical Appointments", desc:"Door-to-door rides scheduled around your appointment time, not ours. No parking stress, no rushing." },
  { n:"02", img:"https://images.unsplash.com/photo-1783519890730-3436fd0bf965?w=700&h=480&fit=crop&auto=format", alt:"Medical dialysis treatment center", title:"Dialysis Transportation", desc:"Recurring routes built around your treatment schedule — always on time, always dependable." },
  { n:"03", img:"https://images.unsplash.com/photo-1732194439331-08ec61c4df4f?w=700&h=480&fit=crop&auto=format", alt:"Person in wheelchair next to accessible van", title:"Wheelchair Accessible Rides", desc:"ADA-compliant vehicles with lifts, ramps, and certified securement — handled with care and patience." },
  { n:"04", img:hospitalClinicImg, alt:"Passenger being assisted from a vehicle into a wheelchair", title:"Hospital & Clinic Transport", desc:"Coordinated with facility staff for a seamless transition from admission to discharge, every time." },
  { n:"05", img:"https://images.unsplash.com/photo-1706806594967-44e2b31f01d0?w=700&h=480&fit=crop&auto=format", alt:"Caregiver walking alongside patient", title:"Ambulatory Transportation", desc:"Steady, patient door-to-door help for those who walk but need a little extra support along the way." },
  { n:"06", img:"https://images.unsplash.com/photo-1559234938-b60fff04894d?w=700&h=480&fit=crop&auto=format", alt:"Senior being assisted walking outdoors", title:"Senior Transportation", desc:"We move at your pace — never rushing. Comfortable, dignified rides built around our seniors' needs." },
  { n:"07", img:"https://images.unsplash.com/photo-1540778339538-067eae485e9f?w=700&h=480&fit=crop&auto=format", alt:"Person in wheelchair outdoors", title:"Mobility-Needs Transport", desc:"Every requirement is different. We tailor each ride — from extra time to specialized equipment." },
  { n:"08", img:"https://images.unsplash.com/photo-1741707039536-113e200f9e0d?w=700&h=480&fit=crop&auto=format", alt:"Smiling healthcare professional ready to serve", title:"Scheduled & Recurring Trips", desc:"Set it once, we handle the rest. Reliable transport for one-time or standing weekly appointments." },
];

const VALUES = [
  { Icon: ShieldIcon, title:"Safety", desc:"Maintained vehicles, professionally trained drivers, and certified wheelchair securement on every single trip." },
  { Icon: CarIcon, title:"Comfort", desc:"Clean, climate-controlled, accessible vehicles designed to make every journey as calm and pleasant as possible." },
  { Icon: HeartIcon, title:"Compassion", desc:"Respect, kindness, and empathy for every passenger. We treat each rider like family — every ride, every time." },
  { Icon: CheckIcon, title:"Reliability", desc:"Punctual, consistent, dependable. We plan routes around your schedule so you're never late for care." },
];

const TESTIMONIALS = [
  { initials:"MT", name:"Maria T.", location:"Houston, TX", quote:"PrimeCare has been a lifesaver for my dialysis appointments. The drivers are always on time and treat me with so much kindness. I never worry about getting there anymore." },
  { initials:"JR", name:"James R.", location:"Katy, TX", quote:"My father uses a wheelchair and PrimeCare makes every trip smooth and stress-free. The drivers are patient, gentle, and truly professional. Wouldn't use anyone else." },
  { initials:"LS", name:"Linda S.", location:"Sugar Land, TX", quote:"I've relied on PrimeCare for months for my doctor appointments and they never disappoint. Always on time, always courteous. I recommend them to everyone I know." },
];

const INSIGHTS = [
  { tag:"Dialysis", img:"https://images.pexels.com/photos/5790818/pexels-photo-5790818.jpeg?cs=srgb&w=700&fm=jpg", alt:"Dialysis patient care", title:"Dialysis Transportation: Ensuring Health and Consistency", desc:"Missing a dialysis session can have serious health consequences. Learn how reliable NEMT keeps patients on track." },
  { tag:"Wheelchair Transport", img:"https://images.pexels.com/photos/6284828/pexels-photo-6284828.jpeg?cs=srgb&w=700&fm=jpg", alt:"Wheelchair transport", title:"Wheelchair Accessible Transport: Independence Meets Safety", desc:"ADA-compliant vehicles give passengers with mobility challenges the freedom to travel safely and confidently." },
  { tag:"Senior Transportation", img:"https://images.pexels.com/photos/7224926/pexels-photo-7224926.jpeg?cs=srgb&w=700&fm=jpg", alt:"Senior assisted transport", title:"Senior Transportation: Safe, Compassionate, and Comfortable", desc:"Transportation designed for older adults means more than a ride — it means dignity, patience, and peace of mind." },
];

const FAQS = [
  { q:"What is Non-Emergency Medical Transportation (NEMT)?", a:"NEMT provides transportation for people who need to attend medical appointments but don't require emergency services. Our trained drivers assist patients with varying mobility needs, ensuring safe, comfortable travel." },
  { q:"What types of trips does PrimeCare cover?", a:"We cover medical appointments, dialysis, hospital admissions and discharges, physical therapy, specialist visits, lab work, senior outings, and scheduled recurring trips across Houston and the surrounding areas." },
  { q:"Do you provide emergency medical transport?", a:"No — PrimeCare is a non-emergency medical transportation service. For medical emergencies, please call 911. We specialize in pre-scheduled, safe, and comfortable medical rides." },
  { q:"How far in advance should I book?", a:"We recommend booking at least 24–48 hours in advance for scheduled trips. For recurring rides like dialysis, we set up an ongoing schedule so you never have to worry about it again." },
  { q:"Are your vehicles wheelchair accessible?", a:"Yes. Our fleet includes ADA-compliant vehicles with hydraulic lifts, ramps, and certified wheelchair securement systems, operated by professionally trained transport staff." },
  { q:"Do you accept insurance or Medicaid?", a:"Please contact us directly at +1 (346) 464-3384 to discuss coverage options. We can help coordinate with your healthcare provider or case manager regarding your transportation benefits." },
];

const WHO_SLIDES = [
  "PrimeCare Medical Transport provides reliable non-emergency medical transportation across Houston, TX and surrounding areas. Every ride is scheduled around you — safe, punctual, and handled with genuine care.",
  "We believe every journey matters. Whether it's your weekly dialysis or a specialist visit you've been waiting months for, our team is committed to getting you there with dignity and respect.",
  "Safety, comfort, and compassion aren't just words on our website — they're the standard our drivers hold themselves to on every trip. When you ride with PrimeCare, you're in good hands.",
];

const TICKER_ITEMS = ["Medical Appointments","Dialysis Transportation","Wheelchair Accessible","Senior Transportation","Scheduled & Recurring Trips","Serving Houston, TX","Door-to-Door Service","Compassionate Drivers","On-Time, Every Time"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-top, .reveal-bottom");
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;

    // Each element enters once. Content stays visible if motion is unavailable.
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        target.classList.add('in-view');
        obs.unobserve(target);
      });
    }, { threshold: 0.08 });
    els.forEach((el) => {
      el.classList.add('motion-ready');
      obs.observe(el);
    });
    const showAll = () => {
      if (!motion.matches) return;
      obs.disconnect();
      els.forEach((el) => el.classList.remove('motion-ready', 'in-view'));
    };
    motion.addEventListener('change', showAll);
    return () => {
      obs.disconnect();
      motion.removeEventListener('change', showAll);
      els.forEach((el) => el.classList.remove('motion-ready', 'in-view'));
    };
  }, []);
}

function useScrolledHeader() {
  useEffect(() => {
    const header = document.querySelector(".site-header");
    const handler = () => {
      header?.classList.toggle("scrolled", window.scrollY > 40);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
}

/* ── Counter animation ── */
function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const dur = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1600;
      const step = (now) => {
        const p = dur === 0 ? 1 : Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(ease * target));
        if (p < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(frame); };
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ── Nav ── */
function Nav() {
  const [open, setOpen] = useState(false);
  useScrolledHeader();
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <div>Serving <strong>Houston, Texas</strong> and surrounding areas</div>
          <div>
            <a href="tel:+13464643384">+1 (346) 464-3384</a>
            <span className="pipe">|</span>
            <a href="mailto:primecaremedt@outlook.com">primecaremedt@outlook.com</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="nav-inner">
          <a href="#top" className="brand" aria-label="PrimeCare home">
            <img src={logoImg} alt="PrimeCare Medical Transport LLC" className="brand-logo-img" />
          </a>
          <nav className="main-links">
            {[["#services","Services"],["#about","About"],["#testimonials","Testimonials"],["#faq","FAQ"],["#contact","Contact"]].map(([href,label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <div className="nav-ctas">
            <a href="tel:+13464643384" className="btn btn-outline-navy btn-sm">
              <span className="btn-icon"><PhoneIcon /></span> +1 (346) 464-3384
            </a>
            <a href="#contact" className="btn btn-primary btn-sm">Book a Ride</a>
          </div>
          <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        {open && (
          <div className="mobile-nav" id="mobile-navigation">
            {[["#services","Services"],["#about","About Us"],["#testimonials","Testimonials"],["#faq","FAQ"],["#contact","Contact"]].map(([href,label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <div style={{display:"flex",gap:"10px",marginTop:"6px",flexWrap:"wrap"}}>
              <a href="tel:+13464643384" className="btn btn-outline-navy btn-sm" style={{flex:1,justifyContent:"center"}}>
                <span className="btn-icon"><PhoneIcon /></span> Call Us
              </a>
              <a href="#contact" className="btn btn-primary btn-sm" style={{flex:1,justifyContent:"center"}}>Book a Ride</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img src={siennaImg} alt="PrimeCare Medical Transport Sienna van" />
      </div>

      <div className="hero-body">
        <div className="hero-content">
          <div className="hero-badge reveal-top">
            <span className="pulse">🌟</span>
            Houston's trusted NEMT provider
          </div>
          <h1 className="reveal-left stagger-1">
            Safe, Comfortable &amp; <em>Compassionate</em> Rides — Every Time.
          </h1>
          <p className="hero-sub reveal-left stagger-2">
            You focus on your health. We'll get you there — door to door, on time, with the care and respect you deserve.
          </p>
          <div className="hero-ctas reveal-bottom stagger-3">
            <a href="tel:+13464643384" className="btn btn-primary">
              <span className="btn-icon"><PhoneIcon /></span> Call to Book a Ride
            </a>
            <a href="#contact" className="btn btn-outline-white">Request a Callback</a>
          </div>
          <div className="hero-trust reveal-bottom stagger-4">
            <span><PinIcon />Houston, TX &amp; surrounding areas</span>
            <span><WheelchairIcon />Wheelchair-accessible fleet</span>
            <span><CheckIcon />On-time, every time</span>
          </div>
        </div>

        <div className="hero-visual reveal-right stagger-2">
          <div className="hero-photo-card">
            <span className="hero-photo-label">
              <span className="dot-live" />Serving Houston, TX
            </span>
            <img
              src={heroImg}
              alt="PrimeCare Medical Transportation branded van"
            />
            <div className="hero-photo-caption">
              <strong>Door-to-door care, every ride</strong>
              <span>Trained drivers. Clean vehicles. Your schedule.</span>
            </div>
          </div>
          <div className="hero-quick-card">
            <div className="qc-label">Quick Booking</div>
            <div className="qc-row">
              <PhoneIcon /><span>+1 (346) 464-3384</span>
            </div>
            <div className="qc-row">
              <MailIcon /><span style={{fontSize:"0.71rem"}}>primecaremedt@outlook.com</span>
            </div>
            <div className="qc-row">
              <ClockIcon /><span>Mon–Fri 6am–7:00pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="hero-stats-strip">
        <div className="hero-stats-inner">
          {[
            { num: 98, suffix: "%", label: "Client satisfaction" },
            { num: 500, suffix: "+", label: "Rides completed" },
            { num: 100, suffix: "%", label: "Professional drivers" },
            { raw: "2024", label: "Serving Houston since" },
          ].map((s, i) => (
            <div className={`hero-stat reveal-bottom stagger-${i + 1}`} key={i}>
              <div className="snum">
                {"raw" in s
                  ? s.raw
                  : <Counter target={s.num} suffix={s.suffix} />
                }
              </div>
              <div className="slabel">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i}><span className="dot" />{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Who We Are ── */
function WhoWeAre() {
  const [tab, setTab] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const switchTab = (i) => {
    clearTimeout(timer.current);
    setAnimating(true);
    timer.current = setTimeout(() => { setTab(i); setAnimating(false); }, 180);
  };
  return (
    <section className="section" id="who">
      <div className="wrap">
        <div className="who-grid">
          <div className="who-photo-wrap reveal-left">
            <div className="who-photo">
              <img
                src={whoWeAreImg}
                alt="PrimeCare team member beside a branded transport van outside a hospital"
                loading="lazy"
              />
            </div>
            <div className="who-chip">
              <div className="chip-icon"><HeartIcon /></div>
              <div>
                <div className="chip-num">500+</div>
                <div className="chip-label">Rides completed</div>
              </div>
            </div>
          </div>
          <div className="reveal-right">
            <span className="eyebrow">Who We Are</span>
            <h2 style={{fontSize:"clamp(1.8rem,3vw,2.5rem)",color:"var(--navy)",marginBottom:"20px"}}>
              Safe Rides, Comfortable Journeys, Compassionate Care.
            </h2>
            <div className="who-tabs">
              {["01","02","03"].map((label, i) => (
                <button key={label} aria-pressed={tab === i} aria-label={`About PrimeCare, slide ${i + 1}`} className={`who-tab${tab === i ? " active" : ""}`} onClick={() => switchTab(i)}>
                  {label}
                </button>
              ))}
            </div>
            <p className="who-slide" style={{opacity: animating ? 0 : 1}}>
              {WHO_SLIDES[tab]}
            </p>
            <div className="who-ctas">
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="#values" className="btn btn-outline-navy">Our Philosophy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── About Us ── */
function AboutUs() {
  return (
    <section className="section section-alt" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="reveal-left">
            <span className="eyebrow">About PrimeCare</span>
            <h2>Built on a Promise to Our Community</h2>
            <p>
              PrimeCare Medical Transport LLC was founded with one clear mission: to make sure that no one in Houston misses a medical appointment because they couldn't find a safe, reliable way to get there.
            </p>
            <p>
              We understand that getting to medical care isn't just a logistical challenge — for many of our riders, it's a matter of health, dignity, and independence. That's why every driver we hire is trained not just to drive, but to care.
            </p>
            <p>
              From dialysis patients who need consistency every week to seniors who just need a patient hand and a familiar face — we show up. Every time.
            </p>
            <div className="about-badges">
              <span className="about-badge"><WheelchairIcon />ADA-Compliant Fleet</span>
              <span className="about-badge"><ShieldIcon />Trained &amp; Certified Drivers</span>
              <span className="about-badge"><CheckIcon />On-Time Guarantee</span>
              <span className="about-badge"><PinIcon />Houston &amp; Surrounding Areas</span>
            </div>
          </div>

          <div className="about-photos reveal-right">
            <div className="ap-main">
              <img
                src="https://images.unsplash.com/photo-1675179190914-924be47b35ae?w=900&h=500&fit=crop&auto=format"
                alt="PrimeCare driver and passenger near accessible van"
                loading="lazy"
              />
            </div>
            <div className="ap-sm">
              <img
                src="https://images.pexels.com/photos/6284828/pexels-photo-6284828.jpeg?cs=srgb&w=500&fm=jpg"
                alt="Wheelchair user being assisted"
                loading="lazy"
              />
            </div>
            <div className="ap-sm">
              <img
                src="https://images.pexels.com/photos/8172607/pexels-photo-8172607.jpeg?cs=srgb&w=500&fm=jpg"
                alt="Compassionate caregiver support"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Services ── */
function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Services</span>
          <div className="head-row">
            <h2 style={{color:"var(--navy)"}}>Reliable Transportation Solutions</h2>
            <a href="#contact" className="btn btn-outline-navy btn-sm" style={{flexShrink:0}}>Book a Ride →</a>
          </div>
          <p>From routine appointments to specialized mobility support — trained drivers, purpose-fitted vehicles, and real compassion on every trip.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div className={`svc-card ${['reveal-left', 'reveal-bottom', 'reveal-top', 'reveal-right'][i % 4]} stagger-${(i % 4) + 1}`} key={s.n}>
              <div className="svc-pic">
                <span className="svc-num mono">{s.n}</span>
                <img src={s.img} alt={s.alt} loading="lazy" />
              </div>
              <div className="svc-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Values ── */
function Values() {
  return (
    <section className="section section-alt" id="values">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">Our Values</span>
          <h2 style={{color:"var(--navy)"}}>Guided by Safety, Comfort, and Compassion</h2>
          <p>These aren't just words — they're the standard every PrimeCare driver is held to on every trip, for every passenger, every time.</p>
        </div>
        <div className="values-grid">
          {VALUES.map((v, i) => (
            <div className={`val-card ${i % 2 === 0 ? 'reveal-bottom' : 'reveal-top'} stagger-${i + 1}`} key={v.title}>
              <div className="val-icon"><v.Icon /></div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Banner ── */
function CtaBanner() {
  return (
    <div className="cta-banner">
      <div className="wrap cta-banner-inner reveal-bottom">
        <span className="eyebrow eyebrow-light">Ready to Ride?</span>
        <h2>Experience transportation built on safety, comfort, and compassion.</h2>
        <p>Book today and see the PrimeCare difference.</p>
        <div className="btns">
          <a href="tel:+13464643384" className="btn btn-primary">
            <span className="btn-icon"><PhoneIcon /></span> Book a Ride
          </a>
          <a href="#contact" className="btn btn-ghost">Schedule a Call</a>
        </div>
      </div>
    </div>
  );
}

/* ── Testimonials ── */
function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <div className="testi-header reveal">
          <h2>Client Experiences That<br/>Speak for Themselves</h2>
          <div className="rating-pill">
            <div className="stars">★★★★★</div>
            <div>
              <div className="score">5.0</div>
              <div className="source">Google Reviews</div>
            </div>
          </div>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className={`testi-card ${['reveal-left', 'reveal-bottom', 'reveal-right'][i % 3]} stagger-${i + 1}`} key={t.name}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">"{t.quote}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div><b>{t.name}</b><span>{t.location}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Insights ── */
function Insights() {
  return (
    <section className="section section-alt" id="insights">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Insights</span>
          <div className="head-row">
            <h2 style={{color:"var(--navy)"}}>Tips, Stories, and Insights from Our Team</h2>
            <a href="#contact" className="btn btn-outline-navy btn-sm" style={{flexShrink:0}}>Contact Us →</a>
          </div>
        </div>
        <div className="insights-grid">
          {INSIGHTS.map((a, i) => (
            <div className={`insight-card reveal-bottom stagger-${i + 1}`} key={a.title}>
              <div className="insight-pic">
                <img src={a.img} alt={a.alt} loading="lazy" />
                <span className="insight-tag">{a.tag}</span>
              </div>
              <div className="insight-body">
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <a href="#contact" className="insight-link">Ask our team <ChevronIcon /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div>
            <div className="section-head reveal">
              <span className="eyebrow">FAQ</span>
              <h2 style={{color:"var(--navy)"}}>Frequently Asked Questions</h2>
              <p>Everything you need to know about PrimeCare Medical Transport — before you book your first ride.</p>
            </div>
            <div className="faq-list reveal-left stagger-1">
              {FAQS.map((f, i) => (
                <div className="faq-item" key={f.q}>
                  <button className={`faq-q${open === i ? " open" : ""}`} aria-expanded={open === i} aria-controls={`faq-answer-${i}`} onClick={() => setOpen(open === i ? null : i)}>
                    {f.q}<PlusIcon />
                  </button>
                  <div id={`faq-answer-${i}`} className="faq-a" hidden={open !== i}>{f.a}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="faq-cta-box reveal-right stagger-2" id="contact">
            <span className="eyebrow eyebrow-light">Book Your Ride</span>
            <h3>Ready to schedule your trip?</h3>
            <p>Reach out and we'll get you set up quickly — whether it's a one-time ride or a recurring schedule.</p>
            <div className="contact-rows">
              <div className="contact-row">
                <span style={{width:17,height:17,display:"flex",flexShrink:0}}><PhoneIcon /></span>
                <a href="tel:+13464643384" style={{color:"#cce0f5"}}>+1 (346) 464-3384</a>
              </div>
              <div className="contact-row">
                <span style={{width:17,height:17,display:"flex",flexShrink:0,color:"#25d366"}}><WhatsAppIcon /></span>
                <a href="https://wa.me/13464643384" target="_blank" rel="noopener noreferrer" style={{color:"#cce0f5"}}>WhatsApp us</a>
              </div>
              <div className="contact-row">
                <span style={{width:17,height:17,display:"flex",flexShrink:0}}><MailIcon /></span>
                <a href="mailto:primecaremedt@outlook.com" style={{color:"#cce0f5",wordBreak:"break-all"}}>primecaremedt@outlook.com</a>
              </div>
              <div className="contact-row">
                <span style={{width:17,height:17,display:"flex",flexShrink:0}}><PinIcon /></span>
                <span>Houston, Texas &amp; surrounding areas</span>
              </div>
            </div>
            <div className="faq-hours">
              <b>Service Hours</b>
              Mon – Fri &nbsp;&nbsp;6:00am – 7:00pm<br />
              Saturday &nbsp;&nbsp;7:00am – 5:00pm<br />
              Sunday &nbsp;&nbsp;&nbsp;&nbsp;Closed
            </div>
            <a href="tel:+13464643384" className="btn btn-primary" style={{width:"100%",justifyContent:"center",marginTop:"20px"}}>
              <span className="btn-icon"><PhoneIcon /></span> Call to Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CEO Words ── */
function CeoWords() {
  return (
    <section className="ceo-section" id="ceo">
      <div className="wrap">
        <div className="ceo-inner">
          <div className="ceo-photo-wrap reveal-left">
            <div className="ceo-photo">
              <img
                src={ceoImg}
                alt="PrimeCare CEO and founder"
                loading="lazy"
              />
            </div>
          </div>

          <div className="ceo-content reveal-right">
            <span className="eyebrow eyebrow-light">A Message from Our CEO</span>
            <h2 className="text-white">Turning My Pain Into Purpose</h2>
            <div className="ceo-letter">
              <p>
                I am dedicating this journey to the memory of my late parents, whose lives and experiences inspired the purpose behind this project.
              </p>
              <p>
                My father was diligent about his routine doctor’s appointments and regular checkups. Each time he had an appointment, I would have to take time away from work to take him to and from the hospital. I did it with love, but I also understood how challenging it could be to balance work, family responsibilities, and the need to ensure that a loved one received the care they needed.
              </p>
              <p>
                My mother’s journey was different. After she was diagnosed with kidney disease and began dialysis, transportation became an even greater challenge. Although I was already living in the United States, I never stopped doing my best to fulfill my responsibilities as her daughter. I had to arrange and pay out of pocket for transportation to take her to and from the hospital for her dialysis treatments.
              </p>
              <p>
                Those experiences were painful, but they also opened my eyes to a need that many families face every day.
              </p>
              <p>
                Today, I have chosen to turn that pain into purpose.
              </p>
              <p>
                I am grateful to live in a country with resources, structure, and support systems that can make a difference in people’s lives. Through this project, I want to provide dependable, compassionate, and safe transportation for individuals who need assistance getting to their medical appointments and healthcare services.
              </p>
              <p>
                What once caused me worry and hardship has now become an opportunity to serve others.
              </p>
              <p>
                This work is more than a business to me. It is personal. It is a way of honoring my parents and keeping their memory alive through service.
              </p>
              <p>
                Helping others is a blessing and turning my pain into purpose is one of the greatest ways I can honor the lives of my parents.
              </p>
            </div>
            <div className="ceo-signature">
              <div className="ceo-sig-line">
                <div className="ceo-sig-name lora">Stella Ofodu</div>
                <div className="ceo-sig-title">Founder &amp; CEO — PrimeCare Medical Transport LLC</div>
              </div>
              <div className="ceo-sig-divider" />
              <div className="ceo-values-list">
                {["Safe","Reliable","Compassionate"].map((v) => (
                  <span key={v}><CheckIcon />{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Newsletter ── */
function Newsletter() {
  return (
    <div className="newsletter-band">
      <div className="wrap newsletter-inner reveal-bottom">
        <div>
          <span className="eyebrow" style={{marginBottom:"8px"}}>Latest News &amp; Resources</span>
          <h3>Stay informed on medical transport</h3>
          <p>Tips, service updates, and resources for patients and caregivers in the Houston area.</p>
        </div>
        <div className="shrink-0">
          <a className="btn btn-primary" href="mailto:primecaremedt@outlook.com?subject=Newsletter%20updates">Email us for updates</a>
          <p className="text-xs">Opens your email app to request updates.</p>
        </div>
      </div>
    </div>
  );
}

/* ── Footer CTA ── */
function FooterCta() {
  return (
    <div className="footer-cta">
      <div className="wrap footer-cta-inner reveal-top">
        <span className="eyebrow eyebrow-light">Every Journey Matters</span>
        <h2>Safety, Comfort, Compassion.<br/>Every Journey Matters.</h2>
        <p>Reliable Non-Emergency Medical Transportation You Can Trust in Houston, TX.</p>
        <div className="btns">
          <a href="tel:+13464643384" className="btn btn-primary">
            <span className="btn-icon"><PhoneIcon /></span> Book a Ride
          </a>
          <a href="mailto:primecaremedt@outlook.com" className="btn btn-ghost">Email Us</a>
        </div>
      </div>
    </div>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-inner reveal-bottom">
          <div className="footer-brand">
            <img src={logoImg} alt="PrimeCare Medical Transport LLC" className="footer-logo" />
            <p>Safe. Reliable. Compassionate. Your Health Journey, Our Priority. Proudly serving Houston, Texas and surrounding communities.</p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            {["Medical Appointments","Dialysis Transportation","Wheelchair Transport","Hospital Transport","Senior Transportation","Recurring Trips"].map((s) => (
              <a key={s} href="#services">{s}</a>
            ))}
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <a href="#who">Who We Are</a>
            <a href="#about">About Us</a>
            <a href="#values">Our Values</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#ceo">CEO Message</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <div className="contact-item"><PhoneIcon /><a href="tel:+13464643384">+1 (346) 464-3384</a></div>
            <div className="contact-item" style={{color:"#25d366"}}><WhatsAppIcon /><a href="https://wa.me/13464643384" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></div>
            <div className="contact-item"><MailIcon /><a href="mailto:primecaremedt@outlook.com">primecaremedt@outlook.com</a></div>
            <div className="contact-item"><PinIcon /><span>Houston, Texas &amp; surrounding areas</span></div>
            <div className="contact-item"><ClockIcon /><span>Mon – Fri &nbsp;&nbsp;6:00am – 7:00pm<br/>Saturday &nbsp;&nbsp;7:00am – 5:00pm<br/>Sun: Closed</span></div>
          </div>
        </div>
        <div className="footer-bottom reveal-bottom stagger-1">
          <div>© {new Date().getFullYear()} PrimeCare Medical Transport LLC. All rights reserved.</div>
          <div className="footer-bottom-links">
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="socials">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5H14z" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── App ── */
export default function App() {
  useReveal();
  return (
    <div className="size-full">
      <Nav />
      <main id="main-content">
      <Hero />
      <WhoWeAre />
      <AboutUs />
      <Services />
      <Values />
      <CtaBanner />
      <Testimonials />
      <Insights />
      <FAQ />
      <CeoWords />
      <Newsletter />
      <FooterCta />
      </main>
      <Footer />
      {/* Floating WhatsApp FAB */}
      <a
        href="https://wa.me/13464643384"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-fab-icon"><WhatsAppIcon /></span>
        <span className="whatsapp-fab-label">WhatsApp Us</span>
      </a>

      <div className="mobile-cta-bar">
        <a href="tel:+13464643384">
          <span className="btn-icon"><PhoneIcon /></span>
          Call +1 (346) 464-3384
        </a>
      </div>
    </div>
  );
}
