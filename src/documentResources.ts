/** Find Salenys has exactly two approved resource groups.
 * Each supports up to three PDF documents, supplied later by the host manager.
 * The public/documents/manifest.json is read at runtime: update PDFs and the JSON
 * on the hosting account without rebuilding or changing approved page designs.
 */
export const documentResources = [
  { id: 'catalogue', title: 'Product Catalogue', description: 'Bottle formats and packaging configurations' },
  { id: 'palletization', title: 'Palletization', description: 'Pallet configurations and shipment information' },
] as const;

export type DocumentCategoryId = typeof documentResources[number]['id'];
export type DocumentFile = { title: string; url: string };
export type DocumentFilesByCategory = Record<DocumentCategoryId, DocumentFile[]>;

export const emptyDocumentFiles = (): DocumentFilesByCategory => ({ catalogue: [], palletization: [] });

function isSafeDocument(candidate: unknown): candidate is DocumentFile {
  if (!candidate || typeof candidate !== 'object') return false;
  const item = candidate as Record<string, unknown>;
  return typeof item.title === 'string' && item.title.trim().length > 0 && item.title.length <= 100
    && typeof item.url === 'string' && /^\/documents\/[a-zA-Z0-9_-]+\.pdf$/i.test(item.url);
}

export async function fetchDocumentFiles(signal?: AbortSignal): Promise<DocumentFilesByCategory> {
  const response = await fetch('/documents/manifest.json', { cache: 'no-store', signal });
  if (!response.ok) throw new Error('Document manifest unavailable');
  const data: unknown = await response.json();
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Invalid manifest');
  const manifest = data as Record<string, unknown>;
  const results = emptyDocumentFiles();
  for (const { id } of documentResources) {
    const files = manifest[id];
    if (Array.isArray(files)) results[id] = files.filter(isSafeDocument).slice(0, 3);
  }
  return results;
}
