function getKeys<T extends object>(obj: T): Array<keyof T & string> {
  // Object.keys() সর্বদা string[] রিটার্ন করে, তাই টাইপ কাস্ট করা হচ্ছে
  return Object.keys(obj) as Array<keyof T & string>;
}


const user = { id: 1, name: 'Ahsan', active: true };
const keys = getKeys(user); // type: ("id" | "name" | "active")[]
console.log(keys); // ["id", "name", "active"]
