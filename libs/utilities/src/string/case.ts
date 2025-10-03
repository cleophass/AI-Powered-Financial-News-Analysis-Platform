// Regexps involved with splitting words in various case formats.
const SPLIT_LOWER_UPPER_RE = /(?<lower>[\p{Ll}\d])(?<upper>\p{Lu})/gu;
const SPLIT_UPPER_UPPER_RE = /(?<upper1>\p{Lu})(?<upper2>[\p{Lu}][\p{Ll}])/gu;

// Regexp involved with stripping non-word characters from the result.
const DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;

function split(value: string) {
  let result = value.trim();

  result = result.replaceAll(SPLIT_LOWER_UPPER_RE, '$1\0$2').replaceAll(SPLIT_UPPER_UPPER_RE, '$1\0$2');

  result = result.replaceAll(DEFAULT_STRIP_REGEXP, '\0');

  let start = 0;
  let end = result.length;

  // Trim the delimiter from around the output string.
  while (result.charAt(start) === '\0') start++;
  if (start === end) return [];
  while (result.charAt(end - 1) === '\0') end--;

  return result.slice(start, end).split(/\0/g);
}

function capitalCaseTransformFactory() {
  return (word: string) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
}

function pascalCaseTransformFactory() {
  return (word: string, index: number) => {
    const char0 = word[0];
    const initial = index > 0 && char0 >= '0' && char0 <= '9' ? `_${char0}` : char0.toUpperCase();
    return initial + word.slice(1).toLowerCase();
  };
}

function splitPrefixSuffix(input: string): [string, string[], string] {
  let prefixIndex = 0;
  let suffixIndex = input.length;

  while (prefixIndex < input.length) {
    const char = input.charAt(prefixIndex);
    if (char !== '') break;
    prefixIndex++;
  }

  while (suffixIndex > prefixIndex) {
    const index = suffixIndex - 1;
    const char = input.charAt(index);
    if (char !== '') break;
    suffixIndex = index;
  }

  return [input.slice(0, prefixIndex), split(input.slice(prefixIndex, suffixIndex)), input.slice(suffixIndex)];
}

/**
 * Convert a string to space separated lower case (`foo bar`).
 */
export function noCase(input: string, delimiter = ' ') {
  const [prefix, words, suffix] = splitPrefixSuffix(input);
  return prefix + words.map((w) => w.toLowerCase()).join(delimiter) + suffix;
}

/**
 * Convert a string to camel case (`fooBar`).
 */
export function camelCase(input: string) {
  const [prefix, words, suffix] = splitPrefixSuffix(input);
  const transform = pascalCaseTransformFactory();
  return (
    prefix + words.map((word, index) => (index === 0 ? word.toLowerCase() : transform(word, index))).join('') + suffix
  );
}

/**
 * Convert a string to pascal case (`FooBar`).
 */
export function pascalCase(input: string) {
  const [prefix, words, suffix] = splitPrefixSuffix(input);
  const transform = pascalCaseTransformFactory();
  return prefix + words.map(transform).join('') + suffix;
}

/**
 * Convert a string to title case (`Foo Bar`).
 */
export function titleCase(input: string) {
  const [prefix, words, suffix] = splitPrefixSuffix(input);
  return prefix + words.map(capitalCaseTransformFactory()).join(' ') + suffix;
}

/**
 * Convert a string to screaming snake case (`FOO_BAR`).
 */
export function screamingSnakeCase(input: string) {
  const [prefix, words, suffix] = splitPrefixSuffix(input);
  return prefix + words.map((x) => x.toUpperCase()).join('_') + suffix;
}

/**
 * Convert a string to dot case (`foo.bar`).
 */
export function dotCase(input: string) {
  return noCase(input, '.');
}

/**
 * Convert a string to kebab case (`foo-bar`).
 */
export function kebabCase(input: string) {
  return noCase(input, '-');
}

/**
 * Convert a string to snake case (`foo_bar`).
 */
export function snakeCase(input: string) {
  return noCase(input, '_');
}
