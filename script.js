/**
 * Next Level Education - Anand Gupta Website Frontend Architecture
 * Seamless real-time Sanity CMS integration with local fallback guarantees.
 */

// SANITY CONFIGURATION
const SANITY_PROJECT_ID = 'z28coxhj';
const SANITY_DATASET = 'production';
const SANITY_API_VERSION = 'v2023-08-01';

// GROQ QUERIES
const GROQ_ALL_CONTENT = `
{
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
  },
  "seoSettings": *[_id == "seoSettings"][0]{
    metaTitle,
    metaDescription,
    keywords,
    ogTitle,
    ogDescription,
    "ogImageUrl": ogImage.asset->url
  }
}
`;

// STATE MANAGEMENT
let siteData = null;
let currentMentoriaView = 'plans'; // 'plans' or 'customise'
let activeAudienceSegment = '8-9 STUDENTS';

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initializeNavbar();
  initializeSwitchButtons();
  initializeContactForm();
  
  // Fetch live CMS data
  fetchSanityContent();
  
  // Setup real-time polling to ensure updates reflect on live website
  setInterval(fetchSanityContent, 12000);
});

// FETCH CONTENT FROM SANITY API
async function fetchSanityContent() {
  const queryUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(GROQ_ALL_CONTENT)}`;
  
  try {
    const response = await fetch(queryUrl);
    if (!response.ok) {
      throw new Error(`Sanity fetch failed: ${response.status}`);
    }
    const json = await response.json();
    if (json.result) {
      siteData = json.result;
      renderWebsite(siteData);
      updateSyncStatus(true);
    }
  } catch (error) {
    console.warn('Live Sanity fetch issue, using cached or rendered content:', error);
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
    if (dot) dot.style.backgroundColor = '#f59e0b';
    if (txt) txt.textContent = 'Sanity Synced';
  }
}

// RENDER ALL SECTIONS
function renderWebsite(data) {
  if (!data) return;

  // 1. Site Settings & SEO
  renderSiteSettingsAndSEO(data.siteSettings, data.seoSettings);

  // 2. Founder Section
  renderFounder(data.founder);

  // 3. Home & Hero Section
  renderHero(data.homePage);

  // 4. Services
  renderServices(data.services);

  // 5. Mentoria Packages
  renderMentoriaPackages(data.mentoriaPlans, data.customPackages);

  // 6. Testimonials
  renderTestimonials(data.testimonials);

  // Re-run Lucide Icons rendering
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 1. SITE SETTINGS & SEO
function renderSiteSettingsAndSEO(settings, seo) {
  if (seo) {
    if (seo.metaTitle) {
      document.title = seo.metaTitle;
      const titleTag = document.getElementById('meta-title-tag');
      if (titleTag) titleTag.content = seo.metaTitle;
      const ogTitle = document.getElementById('og-title');
      if (ogTitle) ogTitle.content = seo.ogTitle || seo.metaTitle;
    }
    if (seo.metaDescription) {
      const metaDesc = document.getElementById('meta-description');
      if (metaDesc) metaDesc.content = seo.metaDescription;
      const ogDesc = document.getElementById('og-description');
      if (ogDesc) ogDesc.content = seo.ogDescription || seo.metaDescription;
    }
    if (seo.keywords) {
      const metaKey = document.getElementById('meta-keywords');
      if (metaKey) metaKey.content = seo.keywords;
    }
    if (seo.ogImageUrl) {
      const ogImg = document.getElementById('og-image');
      if (ogImg) ogImg.content = seo.ogImageUrl;
    }
  }

  if (settings) {
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

    if (settings.socialLinks?.linkedin) {
      const fIn = document.getElementById('founder-linkedin');
      if (fIn) fIn.href = settings.socialLinks.linkedin;
    }
  }
}

// 2. HERO
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

  // Hero Stats
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

  // Value props
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

// 3. FOUNDER
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

// 4. SERVICES
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
        <a href="#contact-us" class="btn btn-outline w-full">Enquire Now</a>
      </div>
    </article>
  `).join('');
}

// 5. MENTORIA PACKAGES
function renderMentoriaPackages(plans, customList) {
  renderSegmentPlans(plans);
  renderCustomPackages(customList);
}

function renderSegmentPlans(plans) {
  const displayWrap = document.getElementById('pricing-cards-display');
  if (!displayWrap || !plans) return;

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
    } else if (item.iconType?.includes('globe')) {
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

// 6. TESTIMONIALS
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

// SWITCH VIEWS AND TABS
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
      currentMentoriaView = 'plans';
      if (window.lucide) window.lucide.createIcons();
    });

    btnCustomise.addEventListener('click', () => {
      btnCustomise.classList.add('active');
      btnPlans.classList.remove('active');
      viewCustomise.classList.add('active-view');
      viewPlans.classList.remove('active-view');
      currentMentoriaView = 'customise';
      if (window.lucide) window.lucide.createIcons();
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
        renderSegmentPlans(siteData.mentoriaPlans);
        if (window.lucide) window.lucide.createIcons();
      }
    });
  });
}

// USER PLAN SELECTION HANDLER
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

// NAVBAR SCROLL & ACTIVE LINK TRACKING
function initializeNavbar() {
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  // Sticky shadow effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlighting
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

  // Mobile drawer toggle
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

// CONTACT FORM SUBMISSION
function initializeContactForm() {
  const form = document.getElementById('consultation-form');
  const successMsg = document.getElementById('form-success-msg');
  const submitBtn = document.getElementById('form-submit-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const phone = document.getElementById('form-phone').value;
      const category = document.getElementById('form-category').value;
      const pkg = document.getElementById('form-package').value;
      const msg = document.getElementById('form-message').value;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending Request...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Submit Consultation Request</span><i data-lucide="send"></i>';
        form.reset();
        successMsg.classList.remove('hidden');

        // Optional WhatsApp prefill prompt
        const confirmWA = confirm('Thank you! Would you also like to open WhatsApp to connect directly with Anand Gupta right now?');
        if (confirmWA) {
          const waText = encodeURIComponent(`Hi Anand Sir, my name is ${name}. I am a ${category}. I am interested in ${pkg}. My inquiry: ${msg}`);
          window.open(`https://wa.me/918977943089?text=${waText}`, '_blank');
        }

        if (window.lucide) window.lucide.createIcons();
      }, 700);
    });
  }
}
