import {
  camelCase,
  dotCase,
  kebabCase,
  noCase,
  pascalCase,
  screamingSnakeCase,
  snakeCase,
  titleCase,
} from './index.js';

interface Result {
  noCase: string;
  camelCase: string;
  pascalCase: string;
  titleCase: string;
  screamingSnakeCase: string;
  dotCase: string;
  kebabCase: string;
  snakeCase: string;
}

const tests: Array<[string, Result]> = [
  [
    '',
    {
      noCase: '',
      camelCase: '',
      pascalCase: '',
      titleCase: '',
      screamingSnakeCase: '',
      dotCase: '',
      kebabCase: '',
      snakeCase: '',
    },
  ],
  [
    'test',
    {
      noCase: 'test',
      camelCase: 'test',
      pascalCase: 'Test',
      titleCase: 'Test',
      screamingSnakeCase: 'TEST',
      dotCase: 'test',
      kebabCase: 'test',
      snakeCase: 'test',
    },
  ],
  [
    'test string',
    {
      noCase: 'test string',
      camelCase: 'testString',
      pascalCase: 'TestString',
      titleCase: 'Test String',
      screamingSnakeCase: 'TEST_STRING',
      dotCase: 'test.string',
      kebabCase: 'test-string',
      snakeCase: 'test_string',
    },
  ],
  [
    'Test String',
    {
      noCase: 'test string',
      camelCase: 'testString',
      pascalCase: 'TestString',
      titleCase: 'Test String',
      screamingSnakeCase: 'TEST_STRING',
      dotCase: 'test.string',
      kebabCase: 'test-string',
      snakeCase: 'test_string',
    },
  ],
  [
    'TestV2',
    {
      noCase: 'test v2',
      camelCase: 'testV2',
      pascalCase: 'TestV2',
      titleCase: 'Test V2',
      screamingSnakeCase: 'TEST_V2',
      dotCase: 'test.v2',
      kebabCase: 'test-v2',
      snakeCase: 'test_v2',
    },
  ],
  [
    '_foo_bar_',
    {
      noCase: 'foo bar',
      camelCase: 'fooBar',
      pascalCase: 'FooBar',
      titleCase: 'Foo Bar',
      screamingSnakeCase: 'FOO_BAR',
      dotCase: 'foo.bar',
      kebabCase: 'foo-bar',
      snakeCase: 'foo_bar',
    },
  ],
  [
    'version 1.2.10',
    {
      noCase: 'version 1 2 10',
      camelCase: 'version_1_2_10',
      pascalCase: 'Version_1_2_10',
      titleCase: 'Version 1 2 10',
      screamingSnakeCase: 'VERSION_1_2_10',
      dotCase: 'version.1.2.10',
      kebabCase: 'version-1-2-10',
      snakeCase: 'version_1_2_10',
    },
  ],
  [
    'version 1.21.0',
    {
      noCase: 'version 1 21 0',
      camelCase: 'version_1_21_0',
      pascalCase: 'Version_1_21_0',
      titleCase: 'Version 1 21 0',
      screamingSnakeCase: 'VERSION_1_21_0',
      dotCase: 'version.1.21.0',
      kebabCase: 'version-1-21-0',
      snakeCase: 'version_1_21_0',
    },
  ],
  [
    '𝒳123',
    {
      noCase: '𝒳123',
      camelCase: '𝒳123',
      pascalCase: '𝒳123',
      titleCase: '𝒳123',
      screamingSnakeCase: '𝒳123',
      dotCase: '𝒳123',
      kebabCase: '𝒳123',
      snakeCase: '𝒳123',
    },
  ],
  [
    '1 test',
    {
      noCase: '1 test',
      camelCase: '1Test',
      pascalCase: '1Test',
      titleCase: '1 Test',
      screamingSnakeCase: '1_TEST',
      dotCase: '1.test',
      kebabCase: '1-test',
      snakeCase: '1_test',
    },
  ],
  [
    'Foo12019Bar',
    {
      noCase: 'foo12019 bar',
      camelCase: 'foo12019Bar',
      pascalCase: 'Foo12019Bar',
      titleCase: 'Foo12019 Bar',
      screamingSnakeCase: 'FOO12019_BAR',
      dotCase: 'foo12019.bar',
      kebabCase: 'foo12019-bar',
      snakeCase: 'foo12019_bar',
    },
  ],
  [
    'aNumber2in',
    {
      noCase: 'a number2in',
      camelCase: 'aNumber2in',
      pascalCase: 'ANumber2in',
      titleCase: 'A Number2in',
      screamingSnakeCase: 'A_NUMBER2IN',
      dotCase: 'a.number2in',
      kebabCase: 'a-number2in',
      snakeCase: 'a_number2in',
    },
  ],
  [
    'V1Test',
    {
      noCase: 'v1 test',
      camelCase: 'v1Test',
      pascalCase: 'V1Test',
      titleCase: 'V1 Test',
      screamingSnakeCase: 'V1_TEST',
      dotCase: 'v1.test',
      kebabCase: 'v1-test',
      snakeCase: 'v1_test',
    },
  ],
  [
    '__typename',
    {
      noCase: 'typename',
      camelCase: 'typename',
      pascalCase: 'Typename',
      titleCase: 'Typename',
      screamingSnakeCase: 'TYPENAME',
      dotCase: 'typename',
      kebabCase: 'typename',
      snakeCase: 'typename',
    },
  ],
  [
    'type__',
    {
      noCase: 'type',
      camelCase: 'type',
      pascalCase: 'Type',
      titleCase: 'Type',
      screamingSnakeCase: 'TYPE',
      dotCase: 'type',
      kebabCase: 'type',
      snakeCase: 'type',
    },
  ],
];

describe('change case', () => {
  for (const [input, result] of tests) {
    it(input, () => {
      expect(noCase(input)).toEqual(result.noCase);
      expect(camelCase(input)).toEqual(result.camelCase);
      expect(pascalCase(input)).toEqual(result.pascalCase);
      expect(titleCase(input)).toEqual(result.titleCase);
      expect(screamingSnakeCase(input)).toEqual(result.screamingSnakeCase);
      expect(dotCase(input)).toEqual(result.dotCase);
      expect(kebabCase(input)).toEqual(result.kebabCase);
      expect(snakeCase(input)).toEqual(result.snakeCase);
    });
  }
});
