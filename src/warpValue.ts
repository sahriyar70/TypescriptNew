function wrapValue<T>(input: T): { value: T } {
  return { value: input };
}


const wrappedNumber = wrapValue(42);        // { value: number }
const wrappedString = wrapValue("hello");   // { value: string }
const wrappedObj = wrapValue({ a: 1 });     // { value: { a: number } }

console.log(wrappedNumber, wrappedString, wrappedObj);
