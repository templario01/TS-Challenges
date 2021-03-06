import { OptionalKeys } from './template'

type cases = [
  Expect<Equal<OptionalKeys<{ a: number; b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, 'b'>>,
  Expect<
    Equal<
      OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>,
      'b' | 'c' | 'd'
    >
  >,
  Expect<Equal<OptionalKeys<{}>, never>>,
]
