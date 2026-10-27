import { productsImages } from "./productsImages"
import "./products.css"

// LOCKED: full approved Products and Presentation continuous visual.
// Original text from approved PDF pages 13–14; one ending line only.
export default function ProductsPage() {
  return (
    <article className="salenys-products paper" aria-label="Salenys Products and Presentation">
<img alt="Three Salenys bottle formats in Mediterranean setting" className="hero" src={productsImages.p01}/>
<section className="intro"><div className="narrow"><p className="eyebrow">Products and Presentation</p><h1>Salenys. Exclusively in Glass.</h1><p className="sub">A natural masterpiece deserves a timeless presentation.</p><div className="copy"><p>For over a century, glass has been an essential part of the Salenys tradition. Since the beginning of glass bottling in 1902, Salenys has remained faithful to this choice, presenting its naturally carbonated mineral water exclusively in glass bottles.</p><p>Glass offers a stable, neutral material for a water of such distinctive natural character, helping preserve its original taste without introducing unwanted flavours or aromas.</p><p>This enduring commitment reflects a simple principle: the exceptional qualities of Salenys deserve a presentation that respects the water itself — its natural carbonation, extraordinary mineral composition and remarkably soft taste.</p></div></div></section>
<section className="formats"><h2 className="chapter-title center-title">Three Formats. One Exceptional Water.</h2><p className="lead">Salenys is available in three glass bottle sizes, each suited to different occasions and settings.</p><div className="format-grid">
<article className="format"><img alt="Salenys 1 Litre glass bottle" src={productsImages.p02}/><div className="format-copy"><h3>1 Litre — Made for Sharing</h3><p>The signature format. Ideal for the dining table, restaurants and family gatherings, where good food and naturally sparkling water are enjoyed together.</p></div></article>
<article className="format"><img alt="Salenys 500 ml glass bottle" src={productsImages.p03}/><div className="format-copy"><h3>500 ml — Versatile and Elegant</h3><p>A convenient individual format, equally suited to restaurants, hospitality, meetings and everyday enjoyment.</p></div></article>
<article className="format"><img alt="Salenys 330 ml glass bottle" src={productsImages.p04}/><div className="format-copy"><h3>330 ml — A Refreshing Individual Serving</h3><p>Compact and practical, ideal for cafés, hotels and moments when a smaller serving is preferred.</p></div></article>
</div><p className="final-formats">Every bottle contains the same naturally carbonated mineral water, with the distinctive mineral composition and delicate taste that define Salenys.</p></section>
<section className="packaging-intro"><h2 className="chapter-title">Packaging and Distribution</h2><p>To meet the practical requirements of hospitality, retail and distribution, Salenys is available in reusable plastic crates and cardboard cartons.</p></section>
<section className="packages"><article className="package"><img alt="Blue Salenys reusable plastic crates" src={productsImages.p05}/><div className="package-info"><h3>Reusable Plastic Crates</h3><table><thead><tr><th>Bottle format</th><th>Bottles per crate</th></tr></thead><tbody><tr><td>1 Litre</td><td>12</td></tr><tr><td>500 ml</td><td>20</td></tr><tr><td>330 ml</td><td>24</td></tr></tbody></table></div></article><article className="package"><img alt="Salenys cardboard carton" src={productsImages.p06}/><div className="package-info"><h3>Cardboard Cartons</h3><table><thead><tr><th>Bottle format</th><th>Bottles per carton</th></tr></thead><tbody><tr><td>1 Litre</td><td>6</td></tr><tr><td>500 ml</td><td>12</td></tr><tr><td>330 ml</td><td>20</td></tr></tbody></table></div></article></section>
<p className="distribution-note">These configurations provide practical options for restaurants, hotels, retailers and distributors, both locally and internationally.</p>
<section className="heritage"><img alt="Heritage and modern Salenys glass bottles" src={productsImages.p07}/><div className="heritage-text"><h2>A Legacy Preserved in Glass</h2><p>From the first glass bottles of 1902 to the Salenys of today, the presentation has evolved, but the commitment to glass has remained unchanged.</p><p>More than a packaging choice, it is part of the Salenys identity — a tradition that reflects the value placed on the water and its natural character.</p></div></section>
<section className="ending"><h2>Three formats. Exclusively glass. Uniquely Salenys.</h2></section>
      <div className="products-final-blue-line" aria-hidden="true" />
    </article>
  )
}
