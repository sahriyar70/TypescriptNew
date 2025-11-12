

type product = {
    id : number;
    name : string;
    price : number;
    description : string;
} 
        type productSummary = Pick<product, "id" | "name" | "price">;  /*pick" সাধারণত ব্যবহার হয় object থেকে নির্দিষ্ট কিছু property বাছাই করার জন্য।*/

        type productWithoutstokc = Omit<product, "description">;  /*omit" সাধারণত ব্যবহার হয় object থেকে নির্দিষ্ট কিছু property বাদ দেওয়ার জন্য।*/

        type productRequired = Required<product>; /*required" সাধারণত ব্যবহার হয় object এর সব property কে বাধ্যতামূলক করার জন্য।*/
        type productPartial = Partial<product>; /*partial" সাধারণত ব্যবহার হয় object এর সব property কে ঐচ্ছিক করার জন্য।*/
        type productReadOnly = Readonly<product>; /*readonly" সাধারণত ব্যবহার হয় object এর সব property কে readonly করার জন্য।*/

        type productNameAndPrice = Record<"name" | "price", string | number>; /*record" সাধারণত ব্যবহার হয় একটি object তৈরি করার জন্য যেখানে property গুলোর নাম এবং type নির্দিষ্ট করা হয়।*/

