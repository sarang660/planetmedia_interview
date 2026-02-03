type Primitive = string | number | boolean | null | undefined;

type CamelCase<S extends string> = S extends `${infer P}_${infer R}`
  ? `${Lowercase<P>}${Capitalize<CamelCase<R>>}`
  : Lowercase<S>;

type KeysToCamelCase<T> = T extends Primitive
  ? T
  : T extends Array<infer U>
    ? Array<KeysToCamelCase<U>>
    : { [K in keyof T as K extends string ? CamelCase<K> : K]: KeysToCamelCase<T[K]> };

const toCamelCase = (str: string): string =>
  str.toLowerCase().replace(/[-_](.)/g, (_, char: string) => char.toUpperCase());

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  Object.prototype.toString.call(value) === '[object Object]';

export const keysToCamelCase = <T>(input: T): KeysToCamelCase<T> => {
  if (Array.isArray(input)) {
    return input.map((item: unknown) => keysToCamelCase(item)) as KeysToCamelCase<T>;
  }

  if (isPlainObject(input)) {
    return Object.fromEntries(
      Object.entries(input).map(([key, value]) => [toCamelCase(key), keysToCamelCase(value)])
    ) as KeysToCamelCase<T>;
  }

  return input as KeysToCamelCase<T>;
};
