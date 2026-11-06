/** Escape text, then turn `**bold**` markers into `<strong>`. */
export function richText(value: string): string {
  const normalized = value.replace(/\s*\n\s*/g, ' ').trim();
  const escaped = normalized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
