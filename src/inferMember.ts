type UnboxArray<T> = 
T extends Array<infer Member>
? Member
: T;

type UnboxedStringArray = UnboxArray<string[]>
type UnboxedNumberArray = UnboxArray<number[]>
type Anything = UnboxArray<string>;