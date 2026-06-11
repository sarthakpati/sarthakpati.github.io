export interface BibTexEntry {
  id: string;
  type: string;
  fields: Record<string, string>;
  abstract?: string;
  year?: number;
  title?: string;
  authors?: string[];
  journal?: string;
  doi?: string;
  url?: string;
}

function parseAuthorString(authors: string): string[] {
  return authors
    .split(' and ')
    .map(a => a.trim())
    .filter(Boolean);
}

export function parseBibTeX(content: string): BibTexEntry[] {
  const entries: BibTexEntry[] = [];
  const bibRegex = /@(\w+)\s*\{\s*([^,]+),\s*([\s\S]*?)\n\}/gm;

  let match;
  while ((match = bibRegex.exec(content)) !== null) {
    const type = match[1].toLowerCase();
    const id = match[2].trim();
    const fieldsStr = match[3];

    const fields: Record<string, string> = {};
    const fieldRegex = /(\w+)\s*=\s*\{([^}]*)\}/g;

    let fieldMatch;
    while ((fieldMatch = fieldRegex.exec(fieldsStr)) !== null) {
      const key = fieldMatch[1].toLowerCase();
      let value = fieldMatch[2].trim();

      // Clean up value
      value = value.replace(/\s+/g, ' ');
      if (value.startsWith('"')) value = value.slice(1);
      if (value.endsWith('"')) value = value.slice(0, -1);

      fields[key] = value;
    }

    const entry: BibTexEntry = {
      id,
      type,
      fields,
    };

    // Parse common fields
    if (fields.title) entry.title = fields.title;
    if (fields.year) entry.year = parseInt(fields.year);
    if (fields.journal) entry.journal = fields.journal;
    if (fields.doi) entry.doi = fields.doi;
    if (fields.url) entry.url = fields.url;
    if (fields.author) entry.authors = parseAuthorString(fields.author);
    if (fields.abstract) entry.abstract = fields.abstract;

    entries.push(entry);
  }

  return entries;
}

export function formatAuthors(entry: BibTexEntry): string {
  if (!entry.authors || entry.authors.length === 0) return '';

  if (entry.authors.length === 1) return entry.authors[0];
  if (entry.authors.length === 2) return entry.authors.join(' and ');

  return entry.authors.slice(0, -1).join(', ') + ', and ' + entry.authors[entry.authors.length - 1];
}

export function formatCitation(entry: BibTexEntry): string {
  const authors = formatAuthors(entry);
  const title = entry.title ? `"${entry.title}"` : '';
  const journal = entry.journal || '';
  const year = entry.year ? `(${entry.year})` : '';

  const parts = [authors, title, journal, year].filter(Boolean);
  return parts.join('. ') + '.';
}
