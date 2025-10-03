export function isFQDN(input: string) {
  if (input.length === 0) return false;

  const parts = input.split('.');
  for (const part of parts) {
    if (
      !/^[\da-z\u00A1-\uFFFF-]+$/i.test(part) ||
      /[\uFF01-\uFF5E]/.test(part) ||
      part.startsWith('-') ||
      part.at(-1) === '-'
    )
      return false;
  }
  return true;
}
