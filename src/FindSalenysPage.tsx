import { useRef, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import './findSalenys.css';

/** LOCKED visual layout — 26 October 2026. No network submission until a backend is configured. */
export const findSalenysConfig = {
  company: 'Aigua de Salenys SL',
  email: 'salenys@salenys.es',
  phoneDisplay: '872 096 502',
  phoneHref: 'tel:+34872096502',
  mapEnabled: false, // future customer map module is opt-in, never automatically populated
  documents: [
    { id: 'catalogue', title: 'Product Catalogue', description: 'Bottle formats and packaging configurations', url: null as string | null },
    { id: 'technical', title: 'Technical Sheet', description: 'Mineral composition and product specifications', url: null as string | null },
    { id: 'additional', title: 'Additional Document', description: 'Reserved for a third approved file', url: null as string | null },
  ],
};

function DemoStatus({ visible }: { visible: boolean }) {
  return visible ? <p role="status" className="fs-status">Preview only — your information has <strong>not</strong> been sent or saved. A verified submission service must be connected before publication.</p> : null;
}
function Field({ label, children }: { label: string; children: ReactNode }) {
  return <label className="fs-field"><span>{label}</span>{children}</label>;
}
function DocItem({ title, description, url, optional }: { title: string; description: string; url: string | null; optional?: boolean }) {
  return <div className="fs-document"><div className="fs-docleft"><span className="fs-pdf" aria-hidden="true">PDF</span><div><strong>{title}</strong><small>{description}</small></div></div>{url ? <a href={url} target="_blank" rel="noopener noreferrer">Download PDF</a> : <span className="fs-docstatus">{optional ? 'Optional' : 'Document to add'}</span>}</div>;
}
export default function FindSalenysPage() {
  const [businessOpen, setBusinessOpen] = useState(false);
  const [businessType, setBusinessType] = useState('Restaurant');
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [sentPreview, setSentPreview] = useState<'business'|'general'|'suggest'|null>(null);
  const businessRef = useRef<HTMLDivElement>(null);
  const showBusiness = (type: string) => {
    setBusinessType(type); setBusinessOpen(true); setSentPreview(null);
    window.requestAnimationFrame(() => businessRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };
  const demoSubmit = (event: FormEvent<HTMLFormElement>, which: 'business'|'general'|'suggest') => {
    event.preventDefault(); // Intentionally never stores or sends personal data.
    setSentPreview(which);
  };
  return <article className="find-salenys" aria-label="Find Salenys and contact">
    <section className="fs-hero" id="find-salenys-top">
      <div className="fs-kicker">Find Salenys · Contact &amp; Partnerships</div>
      <h1>Discover Salenys.<br/>Connect with us.</h1>
      <p className="fs-lead">Whether you would like to offer Salenys at your establishment, get in touch with our team, or suggest a place to enjoy it, we would be delighted to hear from you.</p>
      <div className="fs-actions"><a className="fs-button" href="#collaborate">Collaborate With Salenys ↗</a><a className="fs-button fs-outline" href="#contact">Contact Us ↗</a></div>
    </section>
    <section id="collaborate" className="fs-section fs-muted">
      <div className="fs-sectionheading"><div className="fs-kicker">01 / Business relationships</div><h2>Collaborate With Salenys</h2><p>We welcome enquiries from restaurants, hotels, retailers, distributors, importers and other businesses in Spain and internationally.</p></div>
      <div className="fs-routes"><div className="fs-route"><div className="fs-tag">Hospitality &amp; retail</div><h3>Bring Salenys to your establishment.</h3><p>Offer a naturally carbonated mineral water with a distinctive origin and a long heritage in glass.</p><button type="button" className="fs-button" onClick={()=>showBusiness('Restaurant')}>Start a collaboration enquiry ↗</button></div><div className="fs-route fs-alt"><div className="fs-tag">Distribution &amp; import</div><h3>Explore a commercial partnership.</h3><p>For distributors, importers and partners interested in introducing Salenys to new markets.</p><button type="button" className="fs-button fs-outline" onClick={()=>showBusiness('Distributor')}>Discuss a partnership ↗</button></div></div>
      {businessOpen && <div className="fs-formbox fs-business" ref={businessRef}><div className="fs-formtop"><h3>Business enquiry</h3><button type="button" className="fs-close" onClick={()=>setBusinessOpen(false)}>Close ×</button></div><p>Tell us about your company and the opportunity you would like to explore.</p><form onSubmit={e=>demoSubmit(e,'business')}><div className="fs-fields"><Field label="Business type"><select value={businessType} onChange={e=>setBusinessType(e.target.value)} required>{['Restaurant','Hotel','Retailer','Distributor','Importer','Other'].map(t=><option key={t}>{t}</option>)}</select></Field><Field label="Your name"><input required minLength={2} autoComplete="name"/></Field><Field label="Company"><input required autoComplete="organization"/></Field><Field label="Country"><input required autoComplete="country-name"/></Field><Field label="City"><input required autoComplete="address-level2"/></Field><Field label="Business email"><input required type="email" autoComplete="email"/></Field><Field label="Telephone"><input required type="tel" autoComplete="tel"/></Field><Field label="Message"><textarea required placeholder="Tell us about your business and collaboration opportunity"/></Field></div><button type="submit" className="fs-button">Send business enquiry</button><DemoStatus visible={sentPreview==='business'}/></form></div>}
    </section>
    <section id="contact" className="fs-section"><div className="fs-contactgrid"><div className="fs-contactinfo"><div className="fs-kicker">02 / Direct contact</div><h2>Contact Salenys</h2><p>For general questions and information, contact us directly or use the enquiry form.</p><div className="fs-contactlines"><div><small>Company</small><strong>{findSalenysConfig.company}</strong></div><div><small>Email</small><a href={'mailto:'+findSalenysConfig.email}>{findSalenysConfig.email}</a></div><div><small>Telephone</small><a href={findSalenysConfig.phoneHref}>{findSalenysConfig.phoneDisplay}</a></div></div></div><div className="fs-formbox"><div className="fs-tag">General enquiry</div><h3>How can we help?</h3><p>Send a message to the Salenys team.</p><form onSubmit={e=>demoSubmit(e,'general')}><div className="fs-fields"><Field label="Name"><input required minLength={2} autoComplete="name"/></Field><Field label="Email"><input required type="email" autoComplete="email"/></Field><label className="fs-field fs-span"><span>Message</span><textarea required placeholder="Write your message"/></label></div><button type="submit" className="fs-button">Send message</button><DemoStatus visible={sentPreview==='general'}/></form></div></div></section>
    <section id="suggest" className="fs-section fs-muted"><div className="fs-suggestgrid"><div><div className="fs-kicker">03 / Make a suggestion</div><h2>Where would you like to find Salenys?</h2><p>If you know a restaurant, hotel or store where you would like Salenys to be available, tell us. Your suggestions help us understand interest from customers.</p><p className="fs-small">No registration required. Suggested establishments are not displayed as verified Salenys customers.</p></div><div className="fs-formbox"><div className="fs-tag">Suggest Salenys Here</div><h3>Recommend a place.</h3><p>Just its type, name and city.</p><button type="button" className="fs-button" aria-expanded={suggestOpen} aria-controls="fs-suggestion-fields" onClick={()=>{setSuggestOpen(!suggestOpen);setSentPreview(null)}}>Suggest an establishment ↗</button>{suggestOpen && <form id="fs-suggestion-fields" onSubmit={e=>demoSubmit(e,'suggest')}><Field label="Establishment type"><select required defaultValue=""><option value="" disabled>Choose a type</option><option>Restaurant</option><option>Hotel</option><option>Store</option></select></Field><Field label="Establishment name"><input required minLength={2}/></Field><Field label="City"><input required minLength={2}/></Field><button type="submit" className="fs-button">Send suggestion</button><DemoStatus visible={sentPreview==='suggest'}/></form>}</div></div></section>
    <section id="documents" className="fs-section"><div className="fs-kicker">04 / Product resources</div><h2>Catalogue &amp; Documents</h2><p className="fs-inset">Find Salenys product information and downloadable commercial or technical documents here. Documents will be added to this single, easy-to-manage area.</p><div className="fs-documents">{findSalenysConfig.documents.map((d,i)=><DocItem key={d.id} title={d.title} description={d.description} url={d.url} optional={i===2}/>)}</div></section>
    <section className="fs-ending"><h2>Discover Salenys. Connect with us.</h2></section><div className="fs-final-line" aria-hidden="true" />
  </article>;
}
