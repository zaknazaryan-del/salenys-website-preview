import { experienceImages } from "./experienceImages"
import "./experience.css"

// LOCKED: approved 26 October 2026; exact source copy and continuous two-part layout.
export default function ExperiencePage() {
  return (
    <article className="salenys-experience" aria-label="The Salenys Experience">
      <img className="experience-hero" src={experienceImages.e01} alt="Salenys served at a luxury Mediterranean restaurant" loading="eager" />
      <section className="experience-intro experience-paper">
        <div className="experience-inner">
          <div className="experience-eyebrow">The Salenys Experience</div>
          <h1>The Salenys Experience</h1>
          <div className="experience-subtitle">Naturally exceptional. A pleasure to discover.</div>
          <div className="experience-copy experience-wide-copy">
        <p>Some qualities are best discovered through taste.</p>
        <p>Salenys brings together a remarkable combination of natural characteristics: abundant carbonation, exceptional mineral richness and a surprisingly light, refreshing taste.</p>
        <p>Smooth and velvety on the palate, with a lively natural sparkle, Salenys offers a distinctive drinking experience that is both elegant and effortlessly enjoyable.</p>
        <p>Its character comes from the spring itself — a remarkable natural balance of minerals and carbonation that makes every sip unmistakably Salenys.</p>
          </div>
        </div>
      </section>
      <section className="experience-pair">
      <img src={experienceImages.e02} alt="Sparkling Salenys water served on a Mediterranean terrace" loading="lazy" />
<div className="experience-textpane experience-paper">
        <div className="experience-flag">THE SALENYS EXPERIENCE</div>
        <h2>A Natural Pleasure, From the First Sip</h2>
        <div className="experience-copy">
        <p>The beauty of Salenys lies in an unexpected harmony: extraordinary mineral richness combined with remarkable softness.</p>
        <p>Fresh, smooth and pleasantly sparkling, it is a water to enjoy at any moment of the day.</p>
        <p>The generous natural carbonation gives Salenys its lively character, while its delicate taste makes it a refreshing pleasure, whether enjoyed on its own or alongside a meal.</p>
        <p>There is nothing to intensify or reinvent. Nature has already given Salenys the mineral composition and level of carbonation that make it distinctive.</p>
        </div>
      </div>
      </section>
      <section className="experience-pair">
      <div className="experience-textpane experience-paper">
        <div className="experience-flag">THE SALENYS EXPERIENCE</div>
        <h2>At Home on the Finest Tables</h2>
        <div className="experience-copy">
        <p>Great food deserves water that complements the experience.</p>
        <p>With its refreshing sparkle, delicate taste and distinctive mineral character, Salenys is a natural companion to gastronomy, equally at home with everyday meals and fine dining.</p>
        <p>Its qualities have earned it a place in Michelin-starred restaurants and prestigious five-star luxury hotels, including establishments where Salenys is the exclusive choice of sparkling mineral water.</p>
        <p>Selected for tables where attention to detail matters, Salenys brings something genuinely distinctive: a naturally sparkling mineral water whose character comes from its source, not from an industrial recipe.</p>
        </div>
      </div>
<img src={experienceImages.e03} alt="Salenys at an elegant gastronomic dining table" loading="lazy" />
      </section>
      <section className="experience-pair">
      <img src={experienceImages.e04} alt="Salenys with Girona Excel·lent recognition display" loading="lazy" />
<div className="experience-textpane experience-paper">
        <div className="experience-flag">THE SALENYS EXPERIENCE</div>
        <h2>Excellence Recognized, Time After Time</h2>
        <div className="experience-copy">
        <p>The qualities of Salenys have also earned repeated independent recognition.</p>
        <p>Salenys has received the Girona Excel·lent agri-food quality distinction from the Diputació de Girona in four consecutive editions, spanning 2018 to 2026.</p>
        <p>The distinction is awarded through blind tastings conducted by specialist juries, evaluating sensory qualities such as appearance, aroma, flavour and harmony.</p>
        <p>Four consecutive selections reflect repeated independent appreciation of the quality and distinctive character of Salenys.</p>
        </div>
      </div>
      </section>
      <section className="experience-conclusion experience-paper">
        <div className="experience-inner">
          <h2>Naturally Rare. Uniquely Salenys.</h2>
          <div className="experience-copy experience-wide-copy">
        <p>Exceptional mineral richness. Natural carbonation. Remarkable softness.</p>
        <p>These are not qualities created to follow a trend. They belong to the water itself, shaped by the natural conditions of its source in Les Gavarres.</p>
        <p>Together, they create something that numbers and descriptions alone cannot fully convey.</p>
          </div>
        </div>
      </section>
      <section className="experience-ending experience-paper">
        <h2>A natural character to discover. A taste to experience. Uniquely Salenys.</h2>
      </section>
      <div className="experience-final-blue-line" aria-hidden="true" />
    </article>
  )
}
