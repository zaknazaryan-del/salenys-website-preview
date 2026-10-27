import { useEffect, useId, useRef, useState } from "react"
import { translateDocument } from "./domTranslation"
import type { CSSProperties } from "react"
import { homepageImages, type HomepageImage } from "./homepageImages"
import { naturalCarbonationImages } from "./naturalCarbonationImages"
import { mineralCompositionImages } from "./mineralCompositionImages"
import { mineralProfileImages } from "./mineralProfileImages"
import HistoryPage from "./HistoryPage"
import OriginPage from "./OriginPage"
import ProductsPage from "./ProductsPage"
import ExperiencePage from "./ExperiencePage"
import FindSalenysPage from "./FindSalenysPage"

type Language = "en" | "es" | "cat"

type MenuItem = {
  label: string
  href: string
}

type NavItem = {
  label: string
  href: string
  children?: MenuItem[]
}

const navItems: NavItem[] = [
  {
    label: "The Water", href: "/the-water/natural-carbonation/",
    children: [
      { label: "Natural Carbonation", href: "/the-water/natural-carbonation/" },
      { label: "Mineral Composition", href: "/the-water/mineral-composition/" },
      { label: "Mineral Profile", href: "/the-water/mineral-profile/" },
    ],
  },
  { label: "Products and Presentation", href: "/products-presentation/" },
  {
    label: "Origin & History", href: "/origin-history/#history-page1",
    children: [
      { label: "Origin", href: "/origin-history/#origin" },
      { label: "History", href: "/origin-history/#history-page1" },
    ],
  },
  { label: "The Experience", href: "/the-experience/" },
  { label: "Find Salenys", href: "/find-salenys/" },
]

function ArrowIcon({ direction = "down" }: { direction?: "down" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={`arrow-icon arrow-icon--${direction}`}
      viewBox="0 0 20 20"
    >
      <path d="m6 8 4 4 4-4" />
    </svg>
  )
}

function SocialIcon({ name }: { name: "facebook" | "instagram" | "youtube" }) {
  const gradientId = `instagram-gradient-${useId().replace(/:/g, "")}`

  if (name === "facebook") {
    return (
      <svg
        className="social-icon social-icon--facebook"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M13.6 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.4V13h2.8v8h3.4Z" />
      </svg>
    )
  }

  if (name === "instagram") {
    return (
      <svg
        className="social-icon social-icon--instagram"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id={gradientId} x1="3" y1="21" x2="21" y2="3">
            <stop offset="0" stopColor="#FEDA75" />
            <stop offset="0.28" stopColor="#FA7E1E" />
            <stop offset="0.52" stopColor="#D62976" />
            <stop offset="0.76" stopColor="#962FBF" />
            <stop offset="1" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          stroke={`url(#${gradientId})`}
        />
        <circle cx="12" cy="12" r="4" stroke={`url(#${gradientId})`} />
        <circle cx="17.5" cy="6.8" r="1" fill={`url(#${gradientId})`} />
      </svg>
    )
  }

  return (
    <svg
      className="social-icon social-icon--youtube"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path d="M21 8.2a3 3 0 0 0-2.1-2.1C17 5.6 12 5.6 12 5.6s-5 0-6.9.5A3 3 0 0 0 3 8.2 31 31 0 0 0 2.6 12 31 31 0 0 0 3 15.8a3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8Z" />
      <path className="icon-cutout" d="m10 15.2 5.2-3.2L10 8.8v6.4Z" />
    </svg>
  )
}

const SOCIAL_PROFILE_URLS = {
  facebook: "https://www.facebook.com/Salenys?locale=es_ES",
  instagram: "https://www.instagram.com/aigua_de_salenys/",
  youtube: "https://www.youtube.com/@salenyssl3750",
} as const

function SocialLinks({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`social-links${light ? " social-links--light" : ""}`}
      aria-label="Social media"
    >
      {(["facebook", "instagram", "youtube"] as const).map((name) => (
        <a
          key={name}
          href={SOCIAL_PROFILE_URLS[name]}
          aria-label={`Visit Salenys on ${name[0].toUpperCase()}${name.slice(1)} (opens in a new tab)`}
          title={`Salenys on ${name[0].toUpperCase()}${name.slice(1)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon name={name} />
        </a>
      ))}
    </div>
  )
}

function Header({
  language,
  onLanguageChange,
}: {
  language: Language
  onLanguageChange: (language: Language) => void
}) {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null)
        setMobileMenuOpen(false)
        ;(document.activeElement as HTMLElement | null)?.blur()
      }
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("scroll", onScroll)
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
    >
      <div className="header-inner">
        <a className="brand-mark" href="/" aria-label="Aigua de Salenys — Home">
          <img src="/assets/salenys-logo.svg" alt="Aigua de Salenys" />
        </a>

        <button
          className="mobile-navigation-toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="site-primary-navigation"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileMenuOpen(value => !value)}
        >
          <span aria-hidden="true">{mobileMenuOpen ? "✕" : "☰"}</span>
        </button>

        <nav id="site-primary-navigation" className={`main-navigation${mobileMenuOpen ? " main-navigation--mobile-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`nav-item${
                openMenu === item.label ? " nav-item--open" : ""
              }`}
              onMouseEnter={() => window.matchMedia("(min-width: 901px)").matches && item.children && setOpenMenu(item.label)}
              onMouseLeave={() => window.matchMedia("(min-width: 901px)").matches && item.children && setOpenMenu(null)}
            >
              <a className="nav-title" href={item.href}>
                {item.label}
              </a>
              {item.children && (
                <>
                  <button
                    className="submenu-toggle"
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-controls={`submenu-${item.label.replace(/\W/g, "-").toLowerCase()}`}
                    aria-label={`Open ${item.label} submenu`}
                    onClick={() =>
                      setOpenMenu(openMenu === item.label ? null : item.label)
                    }
                  >
                    <ArrowIcon />
                  </button>
                  <div
                    className="submenu"
                    id={`submenu-${item.label.replace(/\W/g, "-").toLowerCase()}`}
                  >
                    {item.children.map((child) => (
                      <a key={child.label} href={child.href}>
                        {child.label}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>

        <div className="header-utilities">
          <SocialLinks />
          <div className="language-selector" aria-label="Language selection">
            {(["en", "es", "cat"] as const).map((code) => (
              <button
                key={code}
                type="button"
                className={language === code ? "is-active" : ""}
                aria-pressed={language === code}
                onClick={() => onLanguageChange(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

type BenefitType = "carbonation" | "minerals" | "origin" | "heritage"

function BenefitIcon({ type }: { type: BenefitType }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 58 58">
      <circle cx="29" cy="29" r="27" />
      {type === "carbonation" && (
        <>
          <circle cx="24" cy="34" r="5" />
          <circle cx="34.5" cy="22" r="4" />
          <circle cx="38" cy="38" r="2.5" />
        </>
      )}
      {type === "minerals" && (
        <>
          <path d="m18 38 3-17 7 8-3 12-7-3Z" />
          <path d="m28 41 1-22 8 6-2 16h-7Z" />
          <path d="m37 39 1-13 5 5-1 8h-5Z" />
        </>
      )}
      {type === "origin" && (
        <>
          <path d="m12 39 11-15 6 7 6-11 12 19H12Z" />
          <path d="m20 39 9-8 5 4 5-4 6 8" />
        </>
      )}
      {type === "heritage" && (
        <>
          <path d="m16 38 2-16 8 7 4-12 5 12 7-7 2 16H16Z" />
          <path d="M17 42h27" />
        </>
      )}
    </svg>
  )
}

const heroBenefits: Array<{ type: BenefitType; label: string }> = [
  { type: "carbonation", label: "Naturally carbonated" },
  { type: "minerals", label: "Rich in minerals" },
  { type: "origin", label: "Born in Les Gavarres" },
  { type: "heritage", label: "Since 1823" },
]

type HomepageImageStyle = CSSProperties & {
  "--image-position": string
  "--image-position-compact": string
  "--image-position-wide": string
}

function homepageImageStyle(image: HomepageImage): HomepageImageStyle {
  return {
    "--image-position": image.objectPosition,
    "--image-position-compact":
      image.desktopObjectPosition?.compact ?? image.objectPosition,
    "--image-position-wide":
      image.desktopObjectPosition?.wide ?? image.objectPosition,
  }
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        className="hero-background managed-homepage-image"
        src={homepageImages.hero.src}
        alt={homepageImages.hero.alt}
        aria-hidden={homepageImages.hero.decorative}
        style={homepageImageStyle(homepageImages.hero)}
      />
      <div className="hero-shade" />
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 id="hero-title" className="hero-brand-title">
            <img className="hero-brand-lettering" src="/assets/salenys-hero-lettering.png" alt="Aigua de Salenys" />
          </h1>
          <p className="hero-product-description">
            Naturally carbonated water from Costa Brava
          </p>
          <p className="hero-slogan">Naturally rare. Uniquely Salenys.</p>
          <div className="hero-actions">
            <a className="button button--primary" href="/the-water/natural-carbonation/">
              Discover the Water
              <ArrowIcon direction="right" />
            </a>
            <a className="button button--secondary" href="/find-salenys/">
              Find Salenys
            </a>
          </div>
          <div className="hero-benefits" aria-label="Salenys qualities">
            {heroBenefits.map((benefit) => (
              <div className="hero-benefit" key={benefit.type}>
                <BenefitIcon type={benefit.type} />
                <span>{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
      <a
        className="scroll-cue"
        href="#discover"
        aria-label="Continue to explore"
      >
        <span>Explore</span>
        <ArrowIcon />
      </a>
    </section>
  )
}

type BandProps = {
  id: string
  image: HomepageImage
  heading: string
  href: string
  action: string
  side: "left" | "right"
  prominent?: boolean
  children: React.ReactNode
}

function NavigationBand({
  id,
  image,
  heading,
  href,
  action,
  side,
  prominent = false,
  children,
}: BandProps) {
  return (
    <article
      id={id}
      className={`navigation-band navigation-band--${side}${
        prominent ? " navigation-band--prominent" : ""
      }`}
    >
      <div className="band-image">
        <img
          className="managed-homepage-image"
          src={image.src}
          alt={image.alt}
          aria-hidden={image.decorative}
          style={homepageImageStyle(image)}
        />
      </div>
      <div className="band-content">
        <div className="band-text">
          <h2>{heading}</h2>
          {children}
        </div>
        <span className="band-action" aria-hidden="true">
          {action}
          <ArrowIcon direction="right" />
        </span>
      </div>
      <a
        className="band-main-link"
        href={href}
        aria-label={`${action}: ${heading}`}
      />
    </article>
  )
}

function NavigationBands() {
  return (
    <section
      className="discovery"
      id="discover"
      aria-label="Explore Aigua de Salenys"
    >
      <div className="discovery-heading">
        <p className="eyebrow">Discover Salenys</p>
        <p>Water shaped by nature, shared with distinction.</p>
      </div>

      <div className="bands">
        <NavigationBand
          id="the-water"
          image={homepageImages.water}
          heading="The Water"
          href="/the-water/natural-carbonation/"
          action="Explore the Water"
          side="left"
          prominent
        >
          <nav className="band-links" aria-label="The Water pages">
            <a href="/the-water/natural-carbonation/">Natural Carbonation</a>
            <a href="/the-water/mineral-composition/">Mineral Composition</a>
            <a href="/the-water/mineral-profile/">Mineral Profile</a>
          </nav>
        </NavigationBand>

        <NavigationBand
          id="origin-history"
          image={homepageImages.originHistory}
          heading="Origin & History"
          href="/origin-history/"
          action="Explore our Origin"
          side="left"
        >
          <p>Born in Les Gavarres. Since 1823.</p>
          <nav className="band-links" aria-label="Origin and History pages">
            <a href="/origin-history/#origin">Origin</a>
            <a href="/origin-history/">History</a>
          </nav>
        </NavigationBand>

        <NavigationBand
          id="experience"
          image={homepageImages.experience}
          heading="The Experience"
          href="/the-experience/"
          action="Discover the Experience"
          side="right"
        >
          <p>Naturally exceptional. A pleasure to discover.</p>
        </NavigationBand>

        <NavigationBand
          id="products"
          image={homepageImages.products}
          heading="Products and Presentation"
          href="/products-presentation/"
          action="Discover Our Products"
          side="right"
        >
          <p>Salenys. Exclusively in Glass.</p>
          <p className="formats">1 L · 500 ml · 330 ml</p>
        </NavigationBand>

        <NavigationBand
          id="find-salenys"
          image={homepageImages.findSalenys}
          heading="Find Salenys"
          href="/find-salenys/"
          action="Find Salenys"
          side="left"
        >
          <p>Discover where Salenys is served.</p>
        </NavigationBand>
      </div>
    </section>
  )
}

function Footer({
  language,
  onLanguageChange,
}: {
  language: Language
  onLanguageChange: (language: Language) => void
}) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="/" aria-label="Aigua de Salenys — Home">
            <img src="/assets/salenys-logo.svg" alt="Aigua de Salenys" />
          </a>
          <p>Naturally carbonated Water</p>
          <p>Les Gavarres · Catalonia, Spain</p>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer-column">
          <h2>Information</h2>
          <a href="#legal-notice-pending">Legal notice</a>
          <a href="#privacy-policy-pending">Privacy policy</a>
          <a href="#cookie-policy-pending">Cookie policy</a>
        </div>

        <div className="footer-contact">
          <h2>Contact</h2>
          <div className="footer-contact-details">
            <p>Aigua de Salenys</p>
            <a href="mailto:salenys@salenys.es">salenys@salenys.es</a>
            <a href="tel:+34872096502">(+34)872096502</a>
          </div>
          <SocialLinks light />
          <div
            className="language-selector language-selector--footer"
            aria-label="Footer language selection"
          >
            {(["en", "es", "cat"] as const).map((code) => (
              <button
                key={code}
                type="button"
                className={language === code ? "is-active" : ""}
                aria-pressed={language === code}
                onClick={() => onLanguageChange(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aigua de Salenys</p>
        <p>Product imagery subject to final brand artwork verification.</p>
      </div>
    </footer>
  )
}

function NaturalCarbonationPage() {
  return (
    <>
      <section className="carbonation-hero" aria-labelledby="carbonation-title">
        <img src={naturalCarbonationImages.hero.src} alt={naturalCarbonationImages.hero.alt} />
        <div className="carbonation-hero-shade" />
        <div className="carbonation-hero-copy">
          <h1 id="carbonation-title">Naturally Carbonated. Naturally Rare.</h1>
          <p>Some waters are made sparkling. Salenys is born sparkling.</p>
        </div>
      </section>
      <div className="carbonation-reading-surface">
      <section className="carbonation-intro">
        <div className="carbonation-intro-inner">
          <p>Deep beneath the forests of Les Gavarres, Costa Brava, nature creates something exceptional: mineral water naturally enriched with carbon dioxide.</p>
          <p>Unlike conventionally carbonated waters, Salenys emerges from its source already sparkling, with a distinctive combination of natural gas and minerals.</p>
        </div>
      </section>
      <section className="carbonation-split" aria-labelledby="carbonation-explanation-heading">
        <div className="carbonation-split-image"><img src={naturalCarbonationImages.split.src} alt={naturalCarbonationImages.split.alt} /></div>
        <div className="carbonation-explanation">
          <div className="carbonation-explanation-inner">
            <h2 id="carbonation-explanation-heading">Exceptional carbonation, naturally</h2>
            <p>Naturally carbonated mineral waters are rare. Rarer still are springs with a natural concentration of CO₂ sufficient to give the bottled water its full sparkling character without additional reinforcement.</p>
            <p>Salenys is one of them.</p>
            <p>Its spring provides not only naturally occurring CO₂, but also the generous level of carbonation that defines its distinctive character.</p>
            <p>During bottling, the natural CO₂ is carefully recovered and reintroduced, maintaining the carbonation level found at the source.</p>
            <p>The result is a naturally sparkling experience, with all the carbonation nature originally provided — nothing more, nothing less.</p>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}


// Approved verbatim copy: Salenys Complete Approved Website Content, PDF page 5.
function MineralCompositionPage() {
  return (
    <div className="mineral-page">
      <section className="mineral-hero" aria-labelledby="mineral-title">
        <img src={mineralCompositionImages.hero.src} alt={mineralCompositionImages.hero.alt} />
        <div className="mineral-hero-copy">
          <h1 id="mineral-title">Exceptional Mineral Composition</h1>
          <p>Rich in minerals. Remarkably soft in taste.</p>
        </div>
      </section>
      <section className="mineral-intro"><div className="mineral-intro-inner">
        <p>Deep beneath the protected forests of Les Gavarres, nature has created a remarkable paradox. Salenys possesses an extraordinary concentration of bicarbonates, calcium and magnesium, yet offers a surprisingly delicate drinking experience.</p>
        <p>Despite its exceptionally high mineral content, Salenys is remarkably soft on the palate, without a pronounced salty or bitter aftertaste.</p>
        <p>Crisp, smooth and delicate, it reveals something unexpected: exceptional mineral richness and remarkable softness can exist in perfect harmony.</p>
        <p>A distinctive natural balance, unique to the Salenys spring.</p>
      </div></section>
      <section className="mineral-story" aria-labelledby="mineral-balance-title">
        <div className="mineral-story-image"><img src={mineralCompositionImages.split.src} alt={mineralCompositionImages.split.alt} /></div>
        <div className="mineral-story-copy">
          <h2 id="mineral-balance-title">Nature's Exceptional Mineral Balance</h2>
          <p>The mineral composition of Salenys is remarkable not only for its richness, but for the combination of essential minerals it naturally provides.</p>
          <div className="mineral-fact"><h3>3,041.5 mg/L Bicarbonates</h3><p>The most abundant component of Salenys' mineral profile. Bicarbonates are part of the natural chemical balance of mineral waters and are also involved in the body's physiological acid–base regulation. Their exceptional concentration is one of Salenys' defining characteristics.</p></div>
          <div className="mineral-fact"><h3>651.8 mg/L Calcium</h3><p>An essential mineral that contributes to the maintenance of normal bones and teeth, normal muscle function, nerve transmission and the normal functioning of digestive enzymes.</p></div>
          <div className="mineral-fact"><h3>117.0 mg/L Magnesium</h3><p>An essential mineral that contributes to normal energy metabolism, muscle and nervous-system function, electrolyte balance and the reduction of tiredness and fatigue.</p></div>
          <p>Together, these naturally occurring minerals make Salenys a remarkably mineral-rich water, combining an exceptional composition with a pleasantly soft drinking experience.</p>
        </div>
      </section>
    </div>
  )
}


// Approved page 6 copy, verbatim. Photo includes embedded desktop data,
// while the text table below is rendered on mobile for accessibility/legibility.
function MineralProfilePage() {
  return (
    <div className="profile-final-page">
      <section className="profile-final-visual" aria-label="Complete Mineral Profile">
        <img className="profile-final-art" src={mineralProfileImages.integrated.src} alt={mineralProfileImages.integrated.alt} />
        <div className="profile-final-mobile-table">
          <h1>Complete Mineral Profile</h1>
          <table><thead><tr><th scope="col">Mineral / Component</th><th scope="col">mg/L</th></tr></thead>
            <tbody>
              <tr><td>Bicarbonates (HCO₃⁻)</td><td>3,041.5</td></tr>
              <tr><td>Calcium (Ca)</td><td>651.8</td></tr>
              <tr><td>Magnesium (Mg)</td><td>117.0</td></tr>
              <tr><td>Sodium (Na)</td><td>149.3</td></tr>
              <tr><td>Silica (SiO₂)</td><td>89.0</td></tr>
              <tr><td>Chloride (Cl)</td><td>31.7</td></tr>
              <tr><td>Potassium (K)</td><td>5.5</td></tr>
              <tr><td>Sulfates (SO₄²⁻)</td><td>2.3</td></tr>
              <tr><td>Fluoride (F)</td><td>0.34</td></tr>
              <tr><td>Dry residue at 180°C</td><td>2,497</td></tr>
            </tbody></table>
        </div>
      </section>
      <div className="profile-final-below">
        <section className="profile-final-notes" aria-label="Mineral profile notes">
          <p>Chemical composition declared on the Salenys bottle label, based on analysis by Laboratorio Dr. Oliver Rodés, Barcelona.</p>
          <p>Dry residue indicates the mass remaining after evaporation and drying at 180°C.</p>
        </section>
        <section className="profile-final-conclusion">
          <h2>Exceptional by Composition. Unique in Character.</h2>
          <p>The richness of its minerals, the softness of its taste and its natural carbonation come together in a distinctive drinking experience.</p>
          <p>Salenys demonstrates that exceptional mineralization does not require an overpowering mineral taste.</p>
          <p className="profile-final-statement">Extraordinary mineral richness. Remarkable natural softness. Uniquely Salenys.</p>
        </section>
      </div>
    </div>
  )
}

function WaterPages() {
  // Each historical deep link remains valid, but all three approved water pages
  // now flow consecutively with a single footer, like Origin & History.
  useEffect(() => {
    const path = window.location.pathname.replace(/\/+$/, "")
    const routeTarget: Record<string, string> = {
      "/the-water/mineral-composition": "water-composition",
      "/the-water/mineral-profile": "water-profile",
    }
    const hashTarget = window.location.hash.replace(/^#/, "")
    const targetId = hashTarget || routeTarget[path]
    if (!targetId) return
    const goToTarget = () => document.getElementById(targetId)?.scrollIntoView({ block: "start" })
    window.requestAnimationFrame(() => window.requestAnimationFrame(goToTarget))
  }, [])

  return (
    <div className="water-pages" aria-label="The Water — complete presentation">
      <div id="water-carbonation" className="water-page-section"><NaturalCarbonationPage /></div>
      <div id="water-composition" className="water-page-section"><MineralCompositionPage /></div>
      <div id="water-profile" className="water-page-section"><MineralProfilePage /></div>
    </div>
  )
}

function detectInitialLanguage(): Language {
  const saved = window.localStorage.getItem("salenys-language")
  if (saved === "en" || saved === "es" || saved === "cat") return saved

  const browserLanguage = navigator.language.toLowerCase()
  if (browserLanguage.startsWith("ca")) return "cat"
  if (browserLanguage.startsWith("es")) return "es"
  return "en"
}

export default function App() {
  const [language, setLanguage] = useState<Language>(detectInitialLanguage)

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
    window.localStorage.setItem("salenys-language", nextLanguage)
    document.documentElement.lang = nextLanguage === "cat" ? "ca" : nextLanguage
  }

  useEffect(() => {
    document.documentElement.lang = language === "cat" ? "ca" : language
    translateDocument(language)
    // React may create new text nodes after form and menu interactions.
    // Reapply the selected language to added nodes, without observing our own text edits.
    const root = document.getElementById("root")
    if (!root) return
    const observer = new MutationObserver(mutations => {
      if (mutations.some(m => m.addedNodes.length > 0 || m.removedNodes.length > 0)) {
        translateDocument(language)
      }
    })
    observer.observe(root, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [language])

  return (
    <>
      <Header language={language} onLanguageChange={changeLanguage} />
      <main>
        {window.location.pathname.replace(/\/+$/, "") === "/find-salenys" ? (
          <FindSalenysPage />
        ) : window.location.pathname.replace(/\/+$/, "") === "/the-experience" ? (
          <ExperiencePage />
        ) : window.location.pathname.replace(/\/+$/, "") === "/products-presentation" ? (
          <ProductsPage />
        ) : ["/origin-history", "/origin-history/history", "/origin-history/origin"].includes(window.location.pathname.replace(/\/+$/, "")) ? (
          <><HistoryPage followedByOrigin /><OriginPage /></>
        ) : ["/the-water", "/the-water/natural-carbonation", "/the-water/mineral-composition", "/the-water/mineral-profile"].includes(window.location.pathname.replace(/\/+$/, "")) ? (
          <WaterPages />
        ) : (
          <><Hero /><NavigationBands /></>
        )}
      </main>
      <Footer language={language} onLanguageChange={changeLanguage} />
    </>
  )
}
