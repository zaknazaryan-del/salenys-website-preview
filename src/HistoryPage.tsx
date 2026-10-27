import { historyImages } from "./historyImages"
import "./history.css"

// LOCKED: approved continuous History website visual, 25 October 2026.
// Copy follows the approved master PDF pages 9–10 verbatim.
// Both narrative parts scroll continuously. One finishing rule appears only at the end.
export default function HistoryPage({ followedByOrigin = false }: { followedByOrigin?: boolean }) {
  return (
    <article className="salenys-history" aria-label="Aigua de Salenys history since 1823">
    <div className="history-page" id="history-page1">
      <img className="history-hero-image" src={historyImages.h01} alt="Salenys history opening spring" decoding="async" loading="eager" />
      <section className="history-intro history-paper" aria-labelledby="history-heading">
        <div className="history-intro-inner">
          <div className="history-eyebrow">
            History since 1823
          </div>
          <h1 id="history-heading">
            Since 1823. A Remarkable Natural Heritage.
          </h1>
          <div className="history-subheading">
            Two centuries of history. One extraordinary natural origin.
          </div>
          <div className="history-bodycopy">
            <p>
              In the early 19th century, deep within the wild forests of Les Gavarres, a remarkable natural spring began a story that would span generations.
            </p>
            <p>
              Naturally sparkling and exceptionally rich in minerals, the water from the Salenys spring became appreciated by the local communities of Costa Brava.
            </p>
            <p>
              In 1823, the commercialization of Aigua de Salenys began, marking the birth of a tradition that continues more than two centuries later.
            </p>
          </div>
        </div>
      </section>
      <section className="history-split">
        <img className="history-square-photo" src={historyImages.h02} alt="Approved H02 Salenys History photograph" decoding="async" loading="lazy" />
        <div className="history-text-side history-paper">
          <div className="history-text-inner">
            <h2>
              1823 — The Beginning of a Tradition
            </h2>
            <div className="history-bodycopy">
              <p>
                Long before the arrival of modern bottling technology, Salenys was already finding its way to local establishments and restaurants, transported in wooden barrels.
              </p>
              <p>
                Its vibrant natural carbonation and distinctive mineral character made it a valued water in the region.
              </p>
              <p>
                Over the decades, Salenys became known as The Water of Costa Brava — a name reflecting its deep connection with the people and heritage of the region.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="history-split history-reverse">
        <div className="history-text-side history-paper">
          <div className="history-text-inner">
            <h2>
              1902 — A New Era in Glass
            </h2>
            <div className="history-bodycopy">
              <p>
                At the beginning of the 20th century, Salenys entered a new chapter.
              </p>
              <p>
                In collaboration with Laboratorio Oliver Rodés, the water began to be bottled in glass in 1902, allowing its distinctive natural qualities to reach a wider public.
              </p>
              <p>
                During this period, Salenys also established a presence in pharmacies, where it was historically appreciated for its rich mineral composition and reputed digestive properties.
              </p>
              <p>
                What began as a local natural treasure was evolving into a recognized mineral water with a growing reputation.
              </p>
            </div>
          </div>
        </div>
        <img className="history-square-photo" src={historyImages.h03} alt="Approved H03 Salenys History photograph" decoding="async" loading="lazy" />
      </section>
    </div>
    <div className="history-page" id="history-page2">
      <img className="history-hero-image" src={historyImages.h04} alt="Salenys 1947 archival recognition" decoding="async" loading="lazy" />
      <section className="history-full-story history-paper">
        <div className="history-text-inner">
          <div className="history-eyebrow">
            Our history · 1947
          </div>
          <h2>
            1947 — Official Medicinal Recognition
          </h2>
          <div className="history-bodycopy">
            <p>
              One of the most significant milestones in the history of Salenys occurred on 23 July 1947.
            </p>
            <p>
              By Royal Order, Aigua de Salenys was officially declared a medicinal-mineral water of public utility — a remarkable recognition in the history of the spring.
            </p>
            <p>
              This official declaration marked an important chapter in the water's heritage, reflecting the historical appreciation of its distinctive natural and mineral characteristics.
            </p>
            <p>
              The original certificate remains a treasured part of the Salenys historical archives, preserving the documentary evidence of this important recognition.
            </p>
          </div>
        </div>
      </section>
      <section className="history-split">
        <img className="history-square-photo" src={historyImages.h06} alt="Approved H06 Salenys History photograph" decoding="async" loading="lazy" />
        <div className="history-text-side history-paper">
          <div className="history-text-inner">
            <h2>
              1986 — Preserving Tradition, Expanding Possibilities
            </h2>
            <div className="history-bodycopy">
              <p>
                In 1986, a new 60-metre-deep well was established within the Salenys spring area, opening another chapter in its development.
              </p>
              <p>
                The new well increased the available production capacity to 9,000 litres per hour, creating new possibilities for Salenys while continuing the tradition of its naturally carbonated mineral water.
              </p>
              <p>
                Through changing times and technological advancements, Salenys maintained its commitment to glass bottling, preserving an important part of its identity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="history-split history-reverse">
        <div className="history-text-side history-paper">
          <div className="history-text-inner">
            <h2>
              Today — The Heritage Continues
            </h2>
            <div className="history-bodycopy">
              <p>
                More than 200 years after its commercial beginnings, Salenys remains intimately connected to the landscape where its story first began.
              </p>
              <p>
                From wooden barrels to elegant glass bottles, from historic pharmacies to today's dining tables, the world has changed considerably.
              </p>
              <p>
                Yet the defining natural qualities of Salenys remain at the heart of its identity: its natural carbonation, extraordinary mineral richness and remarkably soft character.
              </p>
              <p>
                A living heritage, carried forward through generations with respect for the remarkable creation of nature.
              </p>
            </div>
          </div>
        </div>
        <img className="history-square-photo" src={historyImages.h07} alt="Approved H07 Salenys History photograph" decoding="async" loading="lazy" />
      </section>
      <section className="history-finale history-paper">
        {!followedByOrigin && <div className="history-rule" />}
        <h2>
          Over 200 years of heritage. Naturally rare. Uniquely Salenys.
        </h2>
      </section>
    </div>
    </article>
  )
}
