type IsNumber<T> = 
 T extends number
 ? 'number'
 : 'other'; //string


 type withNumber = IsNumber<number>
 type withOther = IsNumber<string>

 const isNumber = (value: unknown) => 
 typeof value === 'number'
 ? 'number'
 : 'other';

 const withNumber = isNumber(123)
 const withOther = isNumber('hello')


 