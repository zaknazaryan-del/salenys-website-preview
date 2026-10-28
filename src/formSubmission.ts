/** Form transport is selected at runtime. No successful UI state is shown on failed HTTP requests. */
export type SalenysFormType = 'order' | 'business' | 'general' | 'suggest';

export async function submitContactForm(type: SalenysFormType, values: FormData): Promise<void> {
  const body = Object.fromEntries([...values.entries()].map(([k, v]) => [k, String(v)]));
  if (typeof body['bot-field'] === 'string' && body['bot-field'].trim()) {
    throw new Error('Invalid form submission');
  }

  const onNetlifyPreview = window.location.hostname.endsWith('.netlify.app');
  let response: Response;
  if (onNetlifyPreview) {
    const names: Record<SalenysFormType, string> = {
      order: 'salenys-order-request',
      business: 'salenys-business-enquiry',
      general: 'salenys-general-enquiry',
      suggest: 'salenys-suggestion',
    };
    const data = new URLSearchParams({ 'form-name': names[type], ...body });
    response = await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data.toString(),
    });
  } else {
    const url = import.meta.env.VITE_SALENYS_CONTACT_ENDPOINT || '/api/contact.php';
    response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({ type, ...body }),
    });
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) throw new Error('Submission endpoint is not configured');
    const result: { ok?: boolean } = await response.json();
    if (!result.ok) throw new Error('Submission was not accepted');
  }
  if (!response.ok) throw new Error('Submission failed');
}
