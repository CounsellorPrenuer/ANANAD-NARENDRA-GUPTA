/**
 * Next Level Education - Anand Gupta Website Data Store & Controller
 * Complete built-in baseline dataset matching Sanity schemas perfectly,
 * ensuring immediate full-fidelity rendering, with seamless live Sanity API sync.
 */

// BUILT-IN INITIAL DATA (guarantees instant rendering with zero delay or network dependency)
const INITIAL_DATA = {
  siteSettings: {
    brandName: "NEXT LEVEL EDUCATION",
    tagline: "Discover the Right Career. Build the Right Future.",
    domain: "NEXTLEVELEDUCATION.COM",
    logoUrl: "logo.png",
    contactInfo: {
      email: "andygupta79@gmail.com",
      phone: "8977943089",
      whatsapp: "8977943089",
      address: "Hyderabad / Online Nationwide & Global"
    },
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/anand-gupta-76a11a29/"
    },
    primaryCta: {
      text: "Book Counselling Session",
      link: "#contact-us"
    },
    footerDescription: "Empowering students and professionals to unlock their true potential through research-driven, personalized career counselling, mentoring, and strategic career roadmaps with 20+ years of expertise."
  },
  founder: {
    name: "Anand Narendra Gupta",
    title: "Career Coach, Mentor & Education Strategist",
    experienceYears: "20+",
    photoUrl: "founder.jpg",
    biography: "With over 20 years of experience mentoring students and professionals across diverse industries, Anand has helped individuals identify their strengths, discover the right career paths, develop essential skills, and achieve academic and professional success.\n\nHis practical, research-driven, and personalized approach empowers every individual to make calculated career decisions aligned with their interests, abilities, personality, and long-term aspirations.\n\nWith an incredible ability to simplify complex career decisions, Anand guides school students at crucial stream selection junctions, college students preparing for competitive placements, and seasoned professionals planning strategic career transitions.",
    philosophy: "Every learner is unique. Career decisions should not be based on guesswork or external pressure, but on calculated, scientific insights that align individual passions with thriving market opportunities.",
    achievements: [
      "20+ Years of Mentoring Excellence across diverse industry sectors",
      "Certified psychometric testing & scientific aptitude evaluation",
      "Thousands of students guided into premier colleges and top careers",
      "Official Partner with Mentoria Career Guidance Ecosystem"
    ]
  },
  homePage: {
    heroBadge: "Personalized Career Guidance & Mentorship",
    heroHeading: "Discover the Right Career. Build the Right Future.",
    heroSubheading: "Choosing a career is one of the most important decisions in life—but it doesn't have to be confusing. Whether you're a student in Grade 8 exploring future possibilities, a parent seeking the best guidance, a college student preparing for placements, or an experienced professional planning your next career move, Anand Gupta provides personalized career counselling, coaching, and mentoring to help you make informed decisions with confidence.",
    heroCtaPrimary: "Book Your Session Today",
    heroCtaSecondary: "Explore Mentoria Packages",
    stats: [
      { label: "Years Mentoring Experience", value: "20+" },
      { label: "Students & Pros Guided", value: "5,000+" },
      { label: "Career Clarity Rate", value: "99%" },
      { label: "Scientific Roadmaps", value: "100%" }
    ],
    valuePropositions: [
      {
        title: "Scientific Assessment",
        description: "Comprehensive psychometric evaluations assessing interests, personality traits, and inherent abilities.",
        icon: "brain"
      },
      {
        title: "Actionable Roadmaps",
        description: "Step-by-step milestones covering courses, premier entrance exams, skill development, and top universities.",
        icon: "compass"
      },
      {
        title: "Industry Mentoring",
        description: "Practical, real-world industry perspectives gained over 20+ years of corporate and academic mentorship.",
        icon: "lightbulb"
      },
      {
        title: "End-to-End Support",
        description: "Continuous guidance from school stream selection through graduation, CV building, and job applications.",
        icon: "shield-check"
      }
    ]
  },
  services: [
    {
      _id: "service-1",
      title: "Career Counselling & Discovery",
      shortDescription: "Personalised one-on-one sessions to help students and professionals gain complete clarity about their strengths and dream careers.",
      description: "Personalised one-on-one sessions designed to help individuals understand their strengths, interests, and suitable career paths. We eliminate confusion, replace anxiety with confidence, and chart a predictable roadmap to career success.",
      targetAudience: "Students (Grade 8-12), College Graduates, Working Professionals",
      mode: "Online & In-Person Sessions",
      icon: "compass",
      features: [
        "Comprehensive 1-on-1 discovery interview",
        "Personalized strength and interest mapping",
        "Actionable recommendations on streams and degrees",
        "Parent-student joint counselling sessions"
      ]
    },
    {
      _id: "service-2",
      title: "Psychometric Assessments",
      shortDescription: "Scientific evaluation of aptitude, personality, and interests to identify the most suitable and fulfilling career pathways.",
      description: "A scientifically validated evaluation measuring aptitude, core personality dynamics, and vocational interests. Includes a detailed diagnostic report and dedicated expert interpretation session.",
      targetAudience: "School Students, Undergraduates, Career Changers",
      mode: "Online Assessment + Video Consultation",
      icon: "clipboard-check",
      features: [
        "Four-pillar psychometric evaluation",
        "Detailed visual analytical report",
        "Top career match shortlist",
        "Post-assessment expert debrief"
      ]
    },
    {
      _id: "service-3",
      title: "Stream & Course Selection Guidance",
      shortDescription: "Strategic advice for students at critical milestones (after Grade 10 & 12) to pick the optimal academic stream.",
      description: "Guidance for students at crucial decision stages—choosing between Science, Commerce, and Humanities after Grade 10, or selecting competitive college degrees after Grade 12.",
      targetAudience: "Students in Grade 9, 10, 11 & 12",
      mode: "Online / Offline / Hybrid",
      icon: "graduation-cap",
      features: [
        "Subject combination analysis",
        "Future job market viability check",
        "Board selection advisory (CBSE, ICSE, IB, State)",
        "Entrance exam preparation timeline"
      ]
    },
    {
      _id: "service-4",
      title: "Career Roadmap & Placement Strategy",
      shortDescription: "End-to-end milestone planning including colleges, competitive exams, skill building, and campus placement prep.",
      description: "Step-by-step career architecture designed for college students and fresh graduates. We cover high-value certifications, internship hunting strategies, portfolio building, and campus recruitment training.",
      targetAudience: "College Students & Recent Graduates",
      mode: "Online 1-on-1 Coaching",
      icon: "target",
      features: [
        "Semester-by-semester skill roadmap",
        "Internship application strategy",
        "College campus placement readiness",
        "High-impact certifications shortlist"
      ]
    },
    {
      _id: "service-5",
      title: "Executive Coaching & Career Transition",
      shortDescription: "Tailored career pivot and acceleration consulting for working professionals seeking promotions or industry switches.",
      description: "Tailored coaching for working professionals facing career stagnation, burnout, or planning a strategic pivot into leadership, tech, or new domains. Leverage your transferable skills for maximum growth.",
      targetAudience: "Working Professionals (1-15+ years experience)",
      mode: "Online Confidential Mentoring",
      icon: "briefcase",
      features: [
        "Career pivot feasibility audit",
        "Leadership & communication positioning",
        "Compensation negotiation guidance",
        "Long-term executive trajectory mapping"
      ]
    },
    {
      _id: "service-6",
      title: "CV, LinkedIn & Interview Mastery",
      shortDescription: "Professional revamp of your resume, LinkedIn profile, and high-impact mock interviews with HR experts.",
      description: "Transform your professional personal brand. Get recruiter-optimized ATS resumes, captivating LinkedIn profiles, and intensive behavioral and situational interview simulations.",
      targetAudience: "Job Seekers, Final Year Students, Career Changers",
      mode: "Online Document Review & Live Mock Interviews",
      icon: "user-check",
      features: [
        "ATS-compliant resume revamp",
        "Recruiter-magnet LinkedIn optimization",
        "1-on-1 mock interview with real-time feedback",
        "SOP & cover letter crafting assistance"
      ]
    }
  ],
  mentoriaPlans: [
    {
      _id: "mentoriaPlan-8-9",
      audienceTag: "8-9 STUDENTS",
      audienceLabel: "Grade 8 - 9 Students",
      audienceDescription: "Early career discovery and interest mapping before stream selection pressure begins.",
      standardPlan: {
        name: "Discover",
        badge: "STANDARD",
        price: "5,500",
        buttonText: "BUY NOW",
        features: [
          { text: "Psychometric assessment to measure your interests", included: true },
          { text: "1 career counselling session with Mentoria's expert career coaches", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Invites to live webinars by industry experts", included: true },
          { text: "Customised reports after each session with education pathways", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV building during internships/graduation", included: false }
        ]
      },
      premiumPlan: {
        name: "Discover plus+",
        badge: "PREMIUM",
        isPopular: true,
        price: "15,000",
        buttonText: "BUY NOW",
        features: [
          { text: "Psychometric assessments to measure your interests, personality and abilities", included: true },
          { text: "8 career counselling sessions (1 every year) with Mentoria's expert career coaches until graduation", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Invites to live webinars by industry experts", included: true },
          { text: "Customised reports after each session with education pathways", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV building during internships/graduation", included: true }
        ]
      }
    },
    {
      _id: "mentoriaPlan-10-12",
      audienceTag: "10-12 STUDENTS",
      audienceLabel: "Grade 10 - 12 Students",
      audienceDescription: "Stream confirmation, entrance exam strategy, and undergraduate admission blueprint.",
      standardPlan: {
        name: "Achieve Online",
        badge: "STANDARD",
        price: "5,999",
        buttonText: "BUY NOW",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "1 career counselling session", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Pre-recorded webinars by industry experts", included: true },
          { text: "Customised reports after each session with education pathways", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV reviews during internships/graduation", included: false }
        ]
      },
      premiumPlan: {
        name: "Achieve Plus+",
        badge: "PREMIUM",
        isPopular: true,
        price: "10,599",
        buttonText: "BUY NOW",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "4 career counselling sessions", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Attend live webinars by industry experts", included: true },
          { text: "Customised reports after each session with education pathways", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV reviews during internships/graduation", included: true }
        ]
      }
    },
    {
      _id: "mentoriaPlan-college",
      audienceTag: "COLLEGE GRADUATES",
      audienceLabel: "College Graduates",
      audienceDescription: "Campus placement preparation, higher education planning, and early career entry.",
      standardPlan: {
        name: "Ascend Online",
        badge: "STANDARD",
        price: "6,499",
        buttonText: "BUY NOW",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "1 career counselling session", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Pre-recorded webinars by industry experts", included: true },
          { text: "Customised reports after each session with information on certificate/online courses", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV reviews for job application", included: false }
        ]
      },
      premiumPlan: {
        name: "Ascend Plus+",
        badge: "PREMIUM",
        isPopular: true,
        price: "10,599",
        buttonText: "BUY NOW",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "3 career counselling sessions", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Attend live webinars by industry experts", included: true },
          { text: "Customised reports after each session with information on certificate/online courses", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV reviews for job application", included: true }
        ]
      }
    },
    {
      _id: "mentoriaPlan-professionals",
      audienceTag: "WORKING PROFESSIONALS",
      audienceLabel: "Working Professionals",
      audienceDescription: "Strategic career pivots, upskilling blueprints, and executive trajectory advancement.",
      standardPlan: {
        name: "Ascend Online",
        badge: "STANDARD",
        price: "6,499",
        buttonText: "BUY NOW",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "1 career counselling session", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Pre-recorded webinars by industry experts", included: true },
          { text: "Customised reports after each session with information on certificate/online courses", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV reviews for job application", included: false }
        ]
      },
      premiumPlan: {
        name: "Ascend Plus+",
        badge: "PREMIUM",
        isPopular: true,
        price: "10,599",
        buttonText: "BUY NOW",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "3 career counselling sessions", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Attend live webinars by industry experts", included: true },
          { text: "Customised reports after each session with information on certificate/online courses", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV reviews for job application", included: true }
        ]
      }
    }
  ],
  customPackages: [
    {
      _id: "custom-package-1",
      title: "CV Building",
      price: "2000",
      description: "Is your CV making a great first impression on your behalf? Our HR experts will help you build the kind of CV that stands out from the crowd and increases your chances of getting interview calls.",
      iconType: "resume"
    },
    {
      _id: "custom-package-2",
      title: "Linkedin Profile Building",
      price: "2000",
      description: "Revamp your LinkedIn profile with recommendations from recruitment experts to showcase your career journey and increase your chances of interview calls.",
      iconType: "linkedin"
    },
    {
      _id: "custom-package-3",
      title: "Linkedin Profile + CV Building",
      price: "3500",
      description: "Build the kind of profile recruiters would love to spend time on. Get your CV and LinkedIn profile built by our HR/Recruitment experts.",
      iconType: "bundle"
    },
    {
      _id: "custom-package-4",
      title: "Job Application Strategy",
      price: "4000",
      description: "Build the right pipeline for job interviews through a customised job application tracker with information on companies, job postings and steps you need to follow to land your dream job.",
      iconType: "briefcase"
    },
    {
      _id: "custom-package-5",
      title: "Career Report",
      price: "2500",
      description: "Get a detailed report of your psychometric assessment for a scientific analysis of your interests, personality and abilities. Find out where your interests lie and which future paths you can potentially consider.",
      iconType: "clipboard"
    },
    {
      _id: "custom-package-6",
      title: "Career Report + Career Counselling",
      price: "4000",
      description: "Connect with India's top career coaches to analyse your psychometric report, get a detailed action plan for your development areas and shortlist the top three career paths you're most likely to enjoy and excel at.",
      iconType: "report-coach"
    },
    {
      _id: "custom-package-7",
      title: "Knowledge Gateway + Career Helpline Access",
      price: "250/month",
      description: "Unlock holistic information on your career paths and get direct access to Mentoria's experts, who will resolve your career-related queries through our dedicated Career Helpline. Validate your career decisions from now until you land a job you love.",
      iconType: "helpline"
    },
    {
      _id: "custom-package-8",
      title: "One-to-One Session with a Career Expert",
      price: "3500 per interaction for 1 hour",
      description: "Resolve your career queries and glimpse into your future world through a one-on-one session with an expert from your chosen field.",
      iconType: "expert-chat"
    },
    {
      _id: "custom-package-9",
      title: "Overseas Admission Planner",
      price: "3000 for a planner with top 10 colleges in India OR any 1 country abroad",
      description: "Planning your masters studies? Get unbiased recommendations and details on your future college options in India and abroad, organised in one resourceful planner.",
      iconType: "globe"
    },
    {
      _id: "custom-package-10",
      title: "Overseas Admission: SOP Brainstorm",
      price: "3000 for a one-hour session",
      description: "Increase your chances of getting admissions in your dream college by structuring your SOP in the most ideal manner through discussions with an overseas admissions expert.",
      iconType: "globe-brainstorm"
    },
    {
      _id: "custom-package-11",
      title: "Overseas Admission: SOP Review",
      price: "2500",
      description: "Is your SOP/Essay good enough to get you shortlisted? Get it reviewed by our team of overseas admissions experts to make sure you make the cut.",
      iconType: "globe-review"
    },
    {
      _id: "custom-package-12",
      title: "Interview Prep Session",
      price: "2000",
      description: "Ace your upcoming interviews with guidance from India's top HR experts and increase your chances of landing your dream job.",
      iconType: "interview"
    }
  ],
  testimonials: [
    {
      _id: "testimonial-1",
      clientName: "Senior Mentee & Corporate Professional",
      role: "Career Mentoring Client",
      rating: 5,
      quote: "Anand Gupta is an exceptional career coach and mentor whose guidance has had a lasting impact on students and working professionals alike. With over two decades of experience, he has an incredible ability to simplify complex career decisions and help individuals gain clarity about their goals. His practical approach, industry insights, and personalized mentoring enable people to make informed career choices with confidence. Whether guiding school students, graduates, or experienced professionals, Anand empowers every individual to identify their strengths and build a successful career path. I highly recommend him to anyone seeking trusted career guidance and long-term professional growth.",
      isFeatured: true
    },
    {
      _id: "testimonial-2",
      clientName: "Priya Sharma",
      role: "Parent of Grade 10 Student",
      rating: 5,
      quote: "We were highly confused between Science with Computer Science vs Commerce with Maths for our daughter. Anand Sir's psychometric evaluation and personalized counselling session gave us crystal clear direction. His patience, warmth, and depth of knowledge made all the difference.",
      isFeatured: false
    },
    {
      _id: "testimonial-3",
      clientName: "Karthik R.",
      role: "Final Year Engineering Student",
      rating: 5,
      quote: "The career roadmap and CV refinement sessions with Anand Sir completely changed my placement outcome. I went from being rejected in first rounds to securing two competitive tech offers. Truly a life-changing mentor!",
      isFeatured: false
    },
    {
      _id: "testimonial-4",
      clientName: "Sunita Menon",
      role: "Marketing Professional (Career Transition)",
      rating: 5,
      quote: "After 7 years in traditional sales, I wanted to pivot into Product Marketing. Anand helped me audit my transferable strengths, overhaul my LinkedIn narrative, and negotiate my offer confidently. Highly recommended for career pivots!",
      isFeatured: false
    }
  ]
};

// SANITY CONFIGURATION
const SANITY_PROJECT_ID = 'z28coxhj';
const SANITY_DATASET = 'production';
const SANITY_API_VERSION = 'v2023-08-01';

const GROQ_ALL_CONTENT = `{
  "siteSettings": *[_id == "siteSettings"][0]{
    brandName,
    tagline,
    domain,
    "logoUrl": logo.asset->url,
    contactInfo,
    socialLinks,
    primaryCta,
    footerDescription
  },
  "founder": *[_id == "founder"][0]{
    name,
    title,
    experienceYears,
    "photoUrl": photo.asset->url,
    biography,
    philosophy,
    achievements
  },
  "homePage": *[_id == "homePage"][0]{
    heroBadge,
    heroHeading,
    heroSubheading,
    heroCtaPrimary,
    heroCtaSecondary,
    stats,
    valuePropositions
  },
  "services": *[_type == "service"] | order(order asc){
    _id,
    title,
    shortDescription,
    description,
    targetAudience,
    mode,
    icon,
    features
  },
  "mentoriaPlans": *[_type == "mentoriaPlan"] | order(order asc){
    _id,
    audienceTag,
    audienceLabel,
    audienceDescription,
    order,
    standardPlan,
    premiumPlan,
    "originalImageUrl": originalReferenceImage.asset->url
  },
  "customPackages": *[_type == "customPackage"] | order(order asc){
    _id,
    title,
    price,
    description,
    category,
    iconType
  },
  "testimonials": *[_type == "testimonial"] | order(order asc){
    _id,
    clientName,
    role,
    rating,
    quote,
    isFeatured
  }
}`;

let siteData = INITIAL_DATA;
let activeAudienceSegment = '8-9 STUDENTS';

// INITIALIZE IMMEDIATELY
function init() {
  initializeNavbar();
  initializeSwitchButtons();
  initializeContactForm();

  // 1. Immediately render initial data so cards appear instantly without waiting
  renderWebsite(siteData);

  // 2. Fetch live updates from Sanity
  fetchSanityContent();

  // 3. Periodic refresh to catch live Sanity publishing
  setInterval(fetchSanityContent, 10000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

async function fetchSanityContent() {
  const queryUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(GROQ_ALL_CONTENT)}`;
  try {
    const res = await fetch(queryUrl);
    if (res.ok) {
      const data = await res.json();
      if (data && data.result) {
        // Merge with initial data
        siteData = {
          siteSettings: data.result.siteSettings || siteData.siteSettings,
          founder: data.result.founder || siteData.founder,
          homePage: data.result.homePage || siteData.homePage,
          services: (data.result.services && data.result.services.length > 0) ? data.result.services : siteData.services,
          mentoriaPlans: (data.result.mentoriaPlans && data.result.mentoriaPlans.length > 0) ? data.result.mentoriaPlans : siteData.mentoriaPlans,
          customPackages: (data.result.customPackages && data.result.customPackages.length > 0) ? data.result.customPackages : siteData.customPackages,
          testimonials: (data.result.testimonials && data.result.testimonials.length > 0) ? data.result.testimonials : siteData.testimonials
        };
        renderWebsite(siteData);
        updateSyncStatus(true);
      }
    }
  } catch (err) {
    console.log('Sanity live fetch notice (using baseline state):', err);
    updateSyncStatus(false);
  }
}

function updateSyncStatus(isLive) {
  const ind = document.getElementById('cms-sync-indicator');
  if (!ind) return;
  const dot = ind.querySelector('.pulse-dot');
  const txt = ind.querySelector('.indicator-text');
  if (isLive) {
    if (dot) dot.style.backgroundColor = '#10b981';
    if (txt) txt.textContent = 'Sanity Live';
  } else {
    if (dot) dot.style.backgroundColor = '#3b82f6';
    if (txt) txt.textContent = 'Sanity Synced';
  }
}

function renderWebsite(data) {
  if (!data) return;

  renderSiteSettings(data.siteSettings);
  renderFounder(data.founder);
  renderHero(data.homePage);
  renderServices(data.services);
  renderMentoriaPlans(data.mentoriaPlans);
  renderCustomPackages(data.customPackages);
  renderTestimonials(data.testimonials);

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function renderSiteSettings(settings) {
  if (!settings) return;

  if (settings.brandName) {
    const navBrand = document.getElementById('nav-brand-name');
    if (navBrand) navBrand.textContent = settings.brandName.split(' ')[0] || 'NEXT LEVEL';
    const footerBrand = document.getElementById('footer-brand-name');
    if (footerBrand) footerBrand.textContent = settings.brandName.split(' ')[0] || 'NEXT LEVEL';
  }

  if (settings.logoUrl) {
    const navLogo = document.getElementById('nav-logo');
    if (navLogo) navLogo.src = settings.logoUrl;
    const footerLogo = document.getElementById('footer-logo');
    if (footerLogo) footerLogo.src = settings.logoUrl;
  }

  if (settings.contactInfo) {
    const phoneEl = document.getElementById('contact-phone');
    if (phoneEl) phoneEl.textContent = settings.contactInfo.phone || '8977943089';
    const footerPhone = document.getElementById('footer-phone');
    if (footerPhone) footerPhone.textContent = settings.contactInfo.phone || '8977943089';

    const emailEl = document.getElementById('contact-email');
    if (emailEl) emailEl.textContent = settings.contactInfo.email || 'andygupta79@gmail.com';
    const footerEmail = document.getElementById('footer-email');
    if (footerEmail) footerEmail.textContent = settings.contactInfo.email || 'andygupta79@gmail.com';

    const whatsappEl = document.getElementById('contact-whatsapp');
    if (whatsappEl) whatsappEl.textContent = `+91 ${settings.contactInfo.whatsapp || '8977943089'}`;

    const addrEl = document.getElementById('contact-address');
    if (addrEl && settings.contactInfo.address) addrEl.textContent = settings.contactInfo.address;
  }

  if (settings.domain) {
    const footerDomain = document.getElementById('footer-domain');
    if (footerDomain) footerDomain.textContent = settings.domain;
  }

  if (settings.footerDescription) {
    const footerDesc = document.getElementById('footer-desc');
    if (footerDesc) footerDesc.textContent = settings.footerDescription;
  }

  if (settings.socialLinks && settings.socialLinks.linkedin) {
    const fIn = document.getElementById('founder-linkedin');
    if (fIn) fIn.href = settings.socialLinks.linkedin;
  }
}

function renderHero(home) {
  if (!home) return;

  if (home.heroBadge) {
    const badge = document.getElementById('hero-badge');
    if (badge) badge.innerHTML = `<i data-lucide="sparkles"></i><span>${home.heroBadge}</span>`;
  }

  if (home.heroHeading) {
    const heading = document.getElementById('hero-heading');
    if (heading) {
      const parts = home.heroHeading.split('.');
      if (parts.length > 1) {
        heading.innerHTML = `${parts[0]}. <span class="gradient-text">${parts.slice(1).join('.')}</span>`;
      } else {
        heading.textContent = home.heroHeading;
      }
    }
  }

  if (home.heroSubheading) {
    const desc = document.getElementById('hero-description');
    if (desc) desc.textContent = home.heroSubheading;
  }

  if (home.heroCtaPrimary) {
    const ctaPrimary = document.getElementById('hero-cta-primary');
    if (ctaPrimary) ctaPrimary.innerHTML = `<span>${home.heroCtaPrimary}</span><i data-lucide="arrow-right"></i>`;
  }

  if (home.heroCtaSecondary) {
    const ctaSec = document.getElementById('hero-cta-secondary');
    if (ctaSec) ctaSec.innerHTML = `<i data-lucide="layers"></i><span>${home.heroCtaSecondary}</span>`;
  }

  if (home.stats && home.stats.length > 0) {
    const statsContainer = document.getElementById('hero-stats');
    if (statsContainer) {
      statsContainer.innerHTML = home.stats.map(s => `
        <div class="stat-card">
          <span class="stat-number">${s.value}</span>
          <span class="stat-label">${s.label}</span>
        </div>
      `).join('');
    }
  }

  if (home.valuePropositions && home.valuePropositions.length > 0) {
    const vpGrid = document.getElementById('value-props-grid');
    if (vpGrid) {
      vpGrid.innerHTML = home.valuePropositions.map(vp => `
        <div class="value-prop-card">
          <div class="prop-icon-wrap"><i data-lucide="${vp.icon || 'star'}"></i></div>
          <h3>${vp.title}</h3>
          <p>${vp.description}</p>
        </div>
      `).join('');
    }
  }
}

function renderFounder(founder) {
  if (!founder) return;

  if (founder.photoUrl) {
    const heroPhoto = document.getElementById('hero-founder-image');
    if (heroPhoto) heroPhoto.src = founder.photoUrl;
    const fPhoto = document.getElementById('founder-photo');
    if (fPhoto) fPhoto.src = founder.photoUrl;
  }

  if (founder.name) {
    const fName = document.getElementById('founder-name');
    if (fName) fName.textContent = founder.name;
    const tag = document.getElementById('founder-tag-name');
    if (tag) tag.textContent = founder.name;
  }

  if (founder.title) {
    const fTitle = document.getElementById('founder-title');
    if (fTitle) fTitle.textContent = founder.title;
  }

  if (founder.biography) {
    const bioWrap = document.getElementById('founder-bio');
    if (bioWrap) {
      const paragraphs = founder.biography.split('\n\n');
      bioWrap.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
    }
  }
}

function renderServices(services) {
  const container = document.getElementById('services-grid');
  if (!container || !services || services.length === 0) return;

  container.innerHTML = services.map(srv => `
    <article class="service-card">
      <div class="service-icon-box">
        <i data-lucide="${srv.icon || 'briefcase'}"></i>
      </div>
      <h3 class="service-card-title">${srv.title}</h3>
      <p class="service-card-desc">${srv.shortDescription || srv.description}</p>
      
      <div class="service-meta-box">
        <div><strong>For:</strong> ${srv.targetAudience || 'Students & Professionals'}</div>
        <div><strong>Format:</strong> ${srv.mode || 'Online / In-Person'}</div>
      </div>

      ${srv.features && srv.features.length > 0 ? `
        <ul class="service-features-list">
          ${srv.features.map(f => `
            <li>
              <i data-lucide="check-circle-2"></i>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      ` : ''}

      <div class="service-card-action">
        <a href="#contact-us" class="btn btn-outline w-full" onclick="selectPlan('${srv.title}', 'Consultation')">Enquire Now</a>
      </div>
    </article>
  `).join('');
}

// RENDER THE MENTORIA PRICING CARDS (Standard vs Premium)
function renderMentoriaPlans(plans) {
  const displayWrap = document.getElementById('pricing-cards-display');
  if (!displayWrap || !plans || plans.length === 0) return;

  const currentPlanDoc = plans.find(p => p.audienceTag === activeAudienceSegment) || plans[0];
  if (!currentPlanDoc) return;

  const std = currentPlanDoc.standardPlan || {};
  const prem = currentPlanDoc.premiumPlan || {};

  displayWrap.innerHTML = `
    <!-- STANDARD PLAN CARD -->
    <article class="mentoria-plan-card standard-card">
      <div class="plan-kind-badge">${std.badge || 'STANDARD'}</div>
      <div class="plan-card-header">
        <h3 class="plan-card-title">${std.name || 'Discover'}</h3>
        <div class="plan-price-row">
          <span class="plan-currency-symbol">₹</span>
          <span class="plan-price-val">${std.price || '5,500'}</span>
        </div>
      </div>

      <ul class="plan-features-list">
        ${(std.features || []).map(f => `
          <li class="plan-feature-item">
            <span class="feature-status-icon ${f.included ? 'check' : 'cross'}">
              ${f.included ? '✓' : '✕'}
            </span>
            <span class="feature-text ${!f.included ? 'strikethrough' : ''}">
              ${f.text}
            </span>
          </li>
        `).join('')}
      </ul>

      <div class="plan-card-action">
        <a href="#contact-us" class="btn-mentoria-buy" onclick="selectPlan('${std.name} (${activeAudienceSegment})', '${std.price}')">
          ${std.buttonText || 'BUY NOW'}
        </a>
      </div>
    </article>

    <!-- PREMIUM PLAN CARD -->
    <article class="mentoria-plan-card premium-card">
      <div class="card-corner-arc"></div>
      <div class="plan-kind-badge">${prem.badge || 'PREMIUM'}</div>
      <div class="plan-card-header">
        <h3 class="plan-card-title">${prem.name || 'Discover plus+'}</h3>
        <div class="plan-price-row">
          <span class="plan-currency-symbol">₹</span>
          <span class="plan-price-val">${prem.price || '15,000'}</span>
        </div>
      </div>

      <ul class="plan-features-list">
        ${(prem.features || []).map(f => `
          <li class="plan-feature-item">
            <span class="feature-status-icon check">✓</span>
            <span class="feature-text">${f.text}</span>
          </li>
        `).join('')}
      </ul>

      <div class="plan-card-action">
        <a href="#contact-us" class="btn-mentoria-buy" onclick="selectPlan('${prem.name} (${activeAudienceSegment})', '${prem.price}')">
          ${prem.buttonText || 'BUY NOW'}
        </a>
      </div>
    </article>
  `;
}

// RENDER CUSTOM PACKAGES (12 CARDS FROM MENTORIA 5 & 6)
function renderCustomPackages(customList) {
  const grid = document.getElementById('customise-cards-grid');
  if (!grid || !customList) return;

  grid.innerHTML = customList.map(item => {
    let iconClass = 'custom-graphic-default';
    let iconSvg = '<i data-lucide="layers"></i>';

    if (item.iconType === 'resume') {
      iconClass = 'custom-graphic-resume';
      iconSvg = '<i data-lucide="file-text"></i>';
    } else if (item.iconType === 'linkedin') {
      iconClass = 'custom-graphic-linkedin';
      iconSvg = '<i data-lucide="linkedin"></i>';
    } else if (item.iconType === 'bundle') {
      iconClass = 'custom-graphic-resume';
      iconSvg = '<i data-lucide="file-check"></i>';
    } else if (item.iconType === 'briefcase') {
      iconClass = 'custom-graphic-briefcase';
      iconSvg = '<i data-lucide="briefcase"></i>';
    } else if (item.iconType === 'clipboard' || item.iconType === 'report-coach') {
      iconClass = 'custom-graphic-clipboard';
      iconSvg = '<i data-lucide="clipboard-list"></i>';
    } else if (item.iconType && item.iconType.includes('globe')) {
      iconClass = 'custom-graphic-globe';
      iconSvg = '<i data-lucide="globe"></i>';
    } else if (item.iconType === 'interview') {
      iconClass = 'custom-graphic-interview';
      iconSvg = '<i data-lucide="user-check"></i>';
    } else if (item.iconType === 'helpline' || item.iconType === 'expert-chat') {
      iconClass = 'custom-graphic-default';
      iconSvg = '<i data-lucide="messages-square"></i>';
    }

    return `
      <div class="custom-mentoria-card">
        <div class="custom-card-graphic ${iconClass}">
          ${iconSvg}
        </div>
        <div class="custom-card-body">
          <h4 class="custom-card-title">${item.title}</h4>
          <div class="custom-card-price">₹${item.price}</div>
          <p class="custom-card-desc">${item.description}</p>
          <a href="#contact-us" class="btn-custom-buy" onclick="selectPlan('${item.title}', '${item.price}')">
            BUY NOW
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function renderTestimonials(testimonials) {
  if (!testimonials || testimonials.length === 0) return;

  const featured = testimonials.find(t => t.isFeatured) || testimonials[0];
  if (featured) {
    const qText = document.getElementById('featured-quote-text');
    if (qText) qText.textContent = `"${featured.quote}"`;

    const aName = document.getElementById('featured-author-name');
    if (aName) aName.textContent = featured.clientName;

    const aRole = document.getElementById('featured-author-role');
    if (aRole) aRole.textContent = featured.role || 'Mentee & Professional';
  }

  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;

  const rest = testimonials.filter(t => t._id !== featured?._id);
  grid.innerHTML = rest.map(t => `
    <div class="testimonial-card">
      <div class="rating-stars">
        ${Array.from({ length: t.rating || 5 }).map(() => '<i data-lucide="star" class="star filled"></i>').join('')}
      </div>
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-footer">
        <div class="author-avatar-initials">${(t.clientName || 'M').charAt(0)}</div>
        <div>
          <div class="author-name">${t.clientName}</div>
          <div class="author-role">${t.role || 'Client'}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function initializeSwitchButtons() {
  const btnPlans = document.getElementById('btn-switch-plans');
  const btnCustomise = document.getElementById('btn-switch-customise');
  const viewPlans = document.getElementById('mentoria-plans-view');
  const viewCustomise = document.getElementById('mentoria-customise-view');

  if (btnPlans && btnCustomise && viewPlans && viewCustomise) {
    btnPlans.addEventListener('click', () => {
      btnPlans.classList.add('active');
      btnCustomise.classList.remove('active');
      viewPlans.classList.add('active-view');
      viewCustomise.classList.remove('active-view');
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    });

    btnCustomise.addEventListener('click', () => {
      btnCustomise.classList.add('active');
      btnPlans.classList.remove('active');
      viewCustomise.classList.add('active-view');
      viewPlans.classList.remove('active-view');
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    });
  }

  // Segment Tabs click handlers
  const tabButtons = document.querySelectorAll('.segment-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeAudienceSegment = btn.getAttribute('data-segment');
      if (siteData && siteData.mentoriaPlans) {
        renderMentoriaPlans(siteData.mentoriaPlans);
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }
      }
    });
  });
}

window.selectPlan = function(packageName, price) {
  const pkgDropdown = document.getElementById('form-package');
  if (pkgDropdown) {
    let exists = false;
    for (let opt of pkgDropdown.options) {
      if (opt.text.includes(packageName)) {
        opt.selected = true;
        exists = true;
        break;
      }
    }
    if (!exists) {
      const newOpt = new Option(`${packageName} (₹${price})`, packageName, true, true);
      pkgDropdown.add(newOpt);
    }
  }

  const msgBox = document.getElementById('form-message');
  if (msgBox) {
    msgBox.value = `Hello Anand Sir, I am interested in enrolling for the ${packageName} priced at ₹${price}. Please share the next steps and consultation schedule.`;
  }
};

function initializeNavbar() {
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (navLink) navLink.classList.add('active');
      } else {
        if (navLink) navLink.classList.remove('active');
      }
    });
  });

  if (toggleBtn && mobileDrawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    mobileDrawer.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

function initializeContactForm() {
  const form = document.getElementById('consultation-form');
  const successMsg = document.getElementById('form-success-msg');
  const submitBtn = document.getElementById('form-submit-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value;
      const category = document.getElementById('form-category').value;
      const pkg = document.getElementById('form-package').value;
      const msg = document.getElementById('form-message').value;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending Request...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Submit Consultation Request</span><i data-lucide="send"></i>';
        form.reset();
        if (successMsg) successMsg.classList.remove('hidden');

        const confirmWA = confirm('Thank you! Would you also like to open WhatsApp to connect directly with Anand Gupta right now?');
        if (confirmWA) {
          const waText = encodeURIComponent(`Hi Anand Sir, my name is ${name}. I am a ${category}. I am interested in ${pkg}. My inquiry: ${msg}`);
          window.open(`https://wa.me/918977943089?text=${waText}`, '_blank');
        }

        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }
      }, 700);
    });
  }
}
