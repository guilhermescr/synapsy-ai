/**
 * Converts a name to its possessive form.
 * @param name - The name to convert.
 * @returns The possessive form of the name.
 */
export function toPossessive(name: string): string {
  if (!name) return '';
  return name.endsWith('s') ? `${name}'` : `${name}'s`;
}
