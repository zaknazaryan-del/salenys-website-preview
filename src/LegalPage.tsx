import type { SiteLanguage } from './translations';
import './legal.css';

/** REVIEW REQUIRED: Company and host details must be confirmed before launch.
 * Do not replace bracketed placeholders with guessed information.
 * This draft is not legal advice or a finished compliance certification.
 */
export const legalCompany = {
  name: 'Aigua de Salenys SL',
  email: 'salenys@salenys.es',
  phone: '(+34)872096502',
  registeredAddress: 'Avda. Vila de Tossa 56, Lloret de Mar',
  taxId: 'B17167461',
  mercantileRegistry: '[REGISTRO MERCANTIL DETAILS — TO CONFIRM]',
  dataRetention: '[RETENTION PERIOD / CRITERIA — TO CONFIRM]',
  hostingRecipients: '[HOST / EMAIL PROCESSOR NAMES AND LOCATIONS — TO CONFIRM]',
} as const;

export type LegalKind = 'legal-notice' | 'privacy-policy' | 'cookie-policy';
type Section = { heading: string; paragraphs: string[] };
type LegalPageText = { title: string; subtitle: string; draft: string; back: string; sections: Section[] };

const legalText: Record<SiteLanguage, Record<LegalKind, LegalPageText>> = {
  en: {
    'legal-notice': {
      title: 'Legal notice', subtitle: 'Website ownership and contact information',
      draft: 'DRAFT — Mercantile Registry particulars and final legal review are still required before public launch.',
      back: 'Return to the homepage',
      sections: [
        { heading: 'Website operator', paragraphs: [
          `Company: ${legalCompany.name}`,
          `Registered address: ${legalCompany.registeredAddress}`,
          `Tax identification (NIF/CIF): ${legalCompany.taxId}`,
          `Mercantile Registry: ${legalCompany.mercantileRegistry}`,
          `Email: ${legalCompany.email} · Telephone: ${legalCompany.phone}`,
        ]},
        { heading: 'Purpose of this website', paragraphs: [
          'This website provides general information about Aigua de Salenys, its natural mineral water, products, and commercial contact options. An order enquiry is a request for contact and is not a completed online purchase.',
        ]},
        { heading: 'Website content and external links', paragraphs: [
          'Texts, logos, photographs and other materials belong to their respective rights holders. Permission may be required before copying or reusing protected content. Links to third-party websites are provided for convenience; those services are governed by their own terms and privacy notices.',
        ]},
        { heading: 'Contact', paragraphs: [
          `For questions regarding the website, contact ${legalCompany.email}.`,
        ]},
      ],
    },
    'privacy-policy': {
      title: 'Privacy policy', subtitle: 'How we handle contact and enquiry information',
      draft: 'DRAFT — Retention periods, legal bases, processors and hosting details require confirmation before forms are activated publicly.',
      back: 'Return to the homepage',
      sections: [
        { heading: 'Data controller', paragraphs: [
          `Controller: ${legalCompany.name}. Contact: ${legalCompany.email}. Registered address: ${legalCompany.registeredAddress}.`,
        ]},
        { heading: 'Information submitted through the website', paragraphs: [
          'The Order Salenys form requests province, name, city and telephone number. The business enquiry form requests contact and business information, the general enquiry form requests name, email and a message, and the suggestion form requests the type, name and city of an establishment.',
        ]},
        { heading: 'Purposes and legal basis', paragraphs: [
          'We use submitted information to answer enquiries, discuss potential commercial relationships, respond to order requests and review suggestions. The applicable legal basis must be confirmed for each form before launch (for example, steps prior to a contract, consent or legitimate interests, as applicable). We do not treat a submitted order request as a confirmed transaction.',
        ]},
        { heading: 'Recipients, processors and transfers', paragraphs: [
          `The website host, email provider and any contracted form processor may process data to support these services. Confirm actual recipients, processing locations and any international transfers here: ${legalCompany.hostingRecipients}.`,
        ]},
        { heading: 'Retention', paragraphs: [
          `Data will be retained only for a documented and justified period appropriate to each request. Approved retention schedule: ${legalCompany.dataRetention}.`,
        ]},
        { heading: 'Your rights', paragraphs: [
          `Subject to applicable law, you may request access, rectification, erasure, restriction, portability or object to processing by contacting ${legalCompany.email}. You may also complain to the Agencia Española de Protección de Datos (aepd.es).`,
        ]},
        { heading: 'Automated decisions and security', paragraphs: [
          'The website forms are intended for human follow-up, not automated purchase decisions. The website administrator must implement appropriate security measures and validate where submitted data and server logs are stored.',
        ]},
      ],
    },
    'cookie-policy': {
      title: 'Cookie policy', subtitle: 'Browser storage and tracking information',
      draft: 'DRAFT — Must be reconciled with a cookie and third-party-service scan of the final production hosting.',
      back: 'Return to the homepage',
      sections: [
        { heading: 'Current website implementation', paragraphs: [
          'The website remembers your selected language using browser local storage under the key salenys-language. Local storage is not, by itself, an HTTP cookie. No advertising or analytics tracking integration was found in the reviewed application source.',
        ]},
        { heading: 'Hosting and third parties', paragraphs: [
          'The production host, embedded content, social networks or subsequently installed analytics services may introduce cookies or similar technologies. These must be inspected after deployment and described here before launch. Visiting linked social profiles is governed by those services’ own policies.',
        ]},
        { heading: 'Consent and preferences', paragraphs: [
          'If non-essential cookies or similar tracking are added, they must not be activated before the appropriate consent mechanism has been implemented. Any required choices should make rejection as accessible as acceptance. Essential language-preference storage can be assessed separately.',
        ]},
        { heading: 'Contact', paragraphs: [
          `For questions about browser storage, contact ${legalCompany.email}.`,
        ]},
      ],
    },
  },
  es: {
    'legal-notice': {
      title: 'Aviso legal', subtitle: 'Titularidad de la web e información de contacto',
      draft: 'BORRADOR — Pendientes de confirmar los datos del Registro Mercantil y la revisión jurídica final antes de la publicación.',
      back: 'Volver a la página de inicio',
      sections: [
        { heading: 'Titular del sitio web', paragraphs: [
          `Empresa: ${legalCompany.name}`, `Domicilio social: ${legalCompany.registeredAddress}`,
          `NIF/CIF: ${legalCompany.taxId}`, `Registro Mercantil: ${legalCompany.mercantileRegistry}`,
          `Correo electrónico: ${legalCompany.email} · Teléfono: ${legalCompany.phone}`,
        ]},
        { heading: 'Finalidad del sitio web', paragraphs: [
          'Esta web ofrece información general sobre Aigua de Salenys, su agua mineral natural, sus productos y las vías de contacto comercial. Una solicitud de pedido constituye una petición de contacto, no una compra en línea concluida.',
        ]},
        { heading: 'Contenidos y enlaces externos', paragraphs: [
          'Los textos, logotipos, fotografías y demás materiales pertenecen a sus respectivos titulares. Su reproducción puede requerir autorización. Los enlaces externos se facilitan por comodidad; sus servicios se rigen por sus propias condiciones y políticas de privacidad.',
        ]},
        { heading: 'Contacto', paragraphs: [`Para consultas relativas al sitio web, escriba a ${legalCompany.email}.`]},
      ],
    },
    'privacy-policy': {
      title: 'Política de privacidad', subtitle: 'Tratamiento de los datos facilitados en las consultas',
      draft: 'BORRADOR — Deben confirmarse los plazos de conservación, las bases jurídicas, los encargados y el alojamiento antes de activar los formularios públicamente.',
      back: 'Volver a la página de inicio',
      sections: [
        { heading: 'Responsable del tratamiento', paragraphs: [
          `Responsable: ${legalCompany.name}. Contacto: ${legalCompany.email}. Domicilio social: ${legalCompany.registeredAddress}.`,
        ]},
        { heading: 'Datos facilitados mediante los formularios', paragraphs: [
          'El formulario Pedir Salenys solicita provincia, nombre, ciudad y teléfono. La consulta comercial recoge datos de contacto y de empresa; la consulta general solicita nombre, correo electrónico y mensaje; el formulario de sugerencias solicita el tipo, nombre y ciudad de un establecimiento.',
        ]},
        { heading: 'Finalidades y bases jurídicas', paragraphs: [
          'Los datos se utilizan para responder consultas, estudiar posibles relaciones comerciales, atender solicitudes de pedido y examinar sugerencias. Debe confirmarse la base jurídica aplicable a cada formulario antes del lanzamiento (por ejemplo, medidas precontractuales, consentimiento o interés legítimo, según corresponda). Una solicitud de pedido no constituye una compraventa confirmada.',
        ]},
        { heading: 'Destinatarios y transferencias', paragraphs: [
          `El proveedor de alojamiento, el servicio de correo y los encargados contratados pueden tratar datos para prestar estos servicios. Confirmar destinatarios, ubicaciones y posibles transferencias internacionales: ${legalCompany.hostingRecipients}.`,
        ]},
        { heading: 'Conservación', paragraphs: [
          `Los datos se conservarán solo durante un plazo documentado y justificado en función de la solicitud. Calendario de conservación aprobado: ${legalCompany.dataRetention}.`,
        ]},
        { heading: 'Derechos', paragraphs: [
          `Puede ejercer los derechos de acceso, rectificación, supresión, limitación, portabilidad u oposición, cuando proceda, escribiendo a ${legalCompany.email}. También puede presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).`,
        ]},
        { heading: 'Decisiones automatizadas y seguridad', paragraphs: [
          'Los formularios están destinados a la atención personal, no a decisiones de compra automatizadas. El administrador debe aplicar medidas de seguridad apropiadas y verificar dónde se almacenan los mensajes y registros del servidor.',
        ]},
      ],
    },
    'cookie-policy': {
      title: 'Política de cookies', subtitle: 'Almacenamiento del navegador y tecnologías de seguimiento',
      draft: 'BORRADOR — Pendiente de una revisión de cookies y servicios de terceros en el alojamiento definitivo.',
      back: 'Volver a la página de inicio',
      sections: [
        { heading: 'Implementación actual', paragraphs: [
          'La web recuerda el idioma seleccionado mediante el almacenamiento local del navegador, con la clave salenys-language. El almacenamiento local no constituye por sí solo una cookie HTTP. No se encontró una integración de seguimiento publicitario o analítico en el código de aplicación examinado.',
        ]},
        { heading: 'Alojamiento y terceros', paragraphs: [
          'El alojamiento definitivo, contenidos incrustados, redes sociales o futuros servicios de analítica pueden incorporar cookies o tecnologías equivalentes. Deberán comprobarse después de la instalación y describirse aquí antes del lanzamiento. Los perfiles sociales enlazados tienen sus propias políticas.',
        ]},
        { heading: 'Consentimiento y preferencias', paragraphs: [
          'Si se incorporan cookies no necesarias u otros mecanismos de seguimiento, no deberán activarse antes de implementar el consentimiento que corresponda. La opción de rechazar deberá ser tan accesible como la de aceptar. El almacenamiento necesario de preferencias de idioma se evaluará por separado.',
        ]},
        { heading: 'Contacto', paragraphs: [`Para consultas sobre almacenamiento del navegador, escriba a ${legalCompany.email}.`]},
      ],
    },
  },
  cat: {
    'legal-notice': {
      title: 'Avís legal', subtitle: 'Titularitat del web i informació de contacte',
      draft: 'ESBORRANY — Cal confirmar les dades del Registre Mercantil i fer la revisió jurídica final abans de publicar el lloc web.',
      back: 'Tornar a la pàgina inicial',
      sections: [
        { heading: 'Titular del lloc web', paragraphs: [
          `Empresa: ${legalCompany.name}`, `Domicili social: ${legalCompany.registeredAddress}`,
          `NIF/CIF: ${legalCompany.taxId}`, `Registre Mercantil: ${legalCompany.mercantileRegistry}`,
          `Correu electrònic: ${legalCompany.email} · Telèfon: ${legalCompany.phone}`,
        ]},
        { heading: 'Finalitat del lloc web', paragraphs: [
          'Aquest web ofereix informació general sobre Aigua de Salenys, la seva aigua mineral natural, els seus productes i les vies de contacte comercial. Una sol·licitud de comanda és una petició de contacte, no una compra en línia completada.',
        ]},
        { heading: 'Continguts i enllaços externs', paragraphs: [
          'Els textos, logotips, fotografies i altres materials pertanyen als seus titulars respectius. La reproducció pot requerir autorització. Els enllaços externs es faciliten per comoditat; els serveis corresponents es regeixen per les seves pròpies condicions i polítiques de privacitat.',
        ]},
        { heading: 'Contacte', paragraphs: [`Per a consultes sobre el lloc web, escriviu a ${legalCompany.email}.`]},
      ],
    },
    'privacy-policy': {
      title: 'Política de privacitat', subtitle: 'Tractament de les dades facilitades en les consultes',
      draft: 'ESBORRANY — Cal confirmar els terminis de conservació, les bases jurídiques, els encarregats i l’allotjament abans d’activar els formularis públicament.',
      back: 'Tornar a la pàgina inicial',
      sections: [
        { heading: 'Responsable del tractament', paragraphs: [
          `Responsable: ${legalCompany.name}. Contacte: ${legalCompany.email}. Domicili social: ${legalCompany.registeredAddress}.`,
        ]},
        { heading: 'Dades facilitades mitjançant formularis', paragraphs: [
          'El formulari de comanda de Salenys demana província, nom, ciutat i telèfon. La consulta comercial recull dades de contacte i de l’empresa; la consulta general demana nom, correu electrònic i missatge; el formulari de suggeriments demana el tipus, nom i ciutat d’un establiment.',
        ]},
        { heading: 'Finalitats i bases jurídiques', paragraphs: [
          'Les dades s’utilitzen per respondre consultes, valorar possibles relacions comercials, atendre sol·licituds de comanda i revisar suggeriments. Cal confirmar la base jurídica aplicable a cada formulari abans del llançament (per exemple, mesures precontractuals, consentiment o interès legítim, segons el cas). Una sol·licitud de comanda no constitueix una compravenda confirmada.',
        ]},
        { heading: 'Destinataris i transferències', paragraphs: [
          `El proveïdor d’allotjament, el servei de correu i els encarregats contractats poden tractar dades per oferir aquests serveis. Cal confirmar destinataris, ubicacions i possibles transferències internacionals: ${legalCompany.hostingRecipients}.`,
        ]},
        { heading: 'Conservació', paragraphs: [
          `Les dades es conservaran només durant un termini documentat i justificat segons la sol·licitud. Calendari de conservació aprovat: ${legalCompany.dataRetention}.`,
        ]},
        { heading: 'Drets', paragraphs: [
          `Podeu exercir els drets d’accés, rectificació, supressió, limitació, portabilitat o oposició, quan correspongui, escrivint a ${legalCompany.email}. També podeu presentar una reclamació davant l’Agencia Española de Protección de Datos (aepd.es).`,
        ]},
        { heading: 'Decisions automatitzades i seguretat', paragraphs: [
          'Els formularis estan pensats per a l’atenció personal, no per a decisions de compra automatitzades. L’administrador ha d’aplicar mesures de seguretat adequades i comprovar on s’emmagatzemen els missatges i els registres del servidor.',
        ]},
      ],
    },
    'cookie-policy': {
      title: 'Política de galetes', subtitle: 'Emmagatzematge del navegador i tecnologies de seguiment',
      draft: 'ESBORRANY — Cal revisar les galetes i els serveis de tercers en l’allotjament definitiu.',
      back: 'Tornar a la pàgina inicial',
      sections: [
        { heading: 'Implementació actual', paragraphs: [
          'El web recorda l’idioma seleccionat mitjançant l’emmagatzematge local del navegador, amb la clau salenys-language. L’emmagatzematge local no és, per si mateix, una galeta HTTP. No s’ha identificat cap integració de seguiment publicitari o analític en el codi d’aplicació revisat.',
        ]},
        { heading: 'Allotjament i tercers', paragraphs: [
          'L’allotjament definitiu, els continguts incrustats, les xarxes socials o futurs serveis d’analítica poden afegir galetes o tecnologies equivalents. Cal comprovar-les després de la instal·lació i descriure-les aquí abans del llançament. Els perfils socials enllaçats tenen polítiques pròpies.',
        ]},
        { heading: 'Consentiment i preferències', paragraphs: [
          'Si s’incorporen galetes no necessàries o altres mecanismes de seguiment, no s’han d’activar abans d’implementar el consentiment que correspongui. L’opció de rebutjar-les ha de ser tan accessible com la d’acceptar-les. L’emmagatzematge necessari de la preferència d’idioma s’avaluarà per separat.',
        ]},
        { heading: 'Contacte', paragraphs: [`Per a consultes sobre l’emmagatzematge del navegador, escriviu a ${legalCompany.email}.`]},
      ],
    },
  },
};

export default function LegalPage({ kind, language }: { kind: LegalKind; language: SiteLanguage }) {
  const content = legalText[language][kind];
  return <article className="salenys-legal-page" data-no-dom-translate="true" aria-labelledby="legal-page-title">
    <div className="legal-page-inner">
      <p className="legal-kicker">Aigua de Salenys · Information</p>
      <h1 id="legal-page-title">{content.title}</h1>
      <p className="legal-subtitle">{content.subtitle}</p>
      <div className="legal-review-alert" role="note">{content.draft}</div>
      {content.sections.map((section, i) => <section key={i} className="legal-section">
        <h2>{section.heading}</h2>
        {section.paragraphs.map((paragraph, j) => <p key={j}>{paragraph}</p>)}
      </section>)}
      <a className="legal-back" href="/">← {content.back}</a>
    </div>
  </article>;
}
