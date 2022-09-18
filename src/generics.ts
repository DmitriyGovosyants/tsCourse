function getPromise(): Promise<Array<string | number>>  {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise ()
.then((data) => {
  console.log(data);
});

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare (top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

function merge3 <T extends object, U extends object> (objA: T, objB: U) {
  return Object.assign(objA, objB);
}

interface IPage3 {
  title: string;
}

class Component<T> {
  constructor (public props:T) {
  }
}

class Page extends Component<IPage3> {
  pageInfo () {
    console.log(this.props.title);
  }
}


// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface User {
//   name: string;
//   startDate: Date;
// }

// // if type -- AdminUser = Admin & User;

// // interface AdminUser extends Admin, User { }

// type ComplexType = string | number;

// function combine(a: ComplexType, b: ComplexType) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// type AdminOrUser = Admin | User;

// function showFields(el: AdminOrUser) {
//   if ('startDate' in el) {
//     console.log(el.startDate);
//   }
//   if ('privileges' in el) {
//     console.log(el.privileges);
//   }
//   console.log(el.name);
// }

// showFields({ name: 'Vasyl', privileges: ['1995-12-17T03:24:00'] });

// abstract class Guy {
//   constructor(public name: string) {

//   }
// }

// class Good extends Guy {
//   advice() {
//     console.log('advice');
//   }
// }

// class Bad extends Guy {
//   insult() {
//     console.log('insult');
//   }
// }

// const good = new Good('John');
// const bad = new Bad('Sergey');

// function guys(user: Guy) {
//   if (user instanceof Good) {
//     user.advice();
//   }
//   if (user instanceof Bad) {
//     user.insult();
//   }
// }

// guys(good);

// const input = document.querySelector('input') as HTMLInputElement;

// if (input) {
//   (input as HTMLInputElement).value;

//   const newInput = input as HTMLInputElement;

//   newInput.value;
// }

// interface PersonA {
//   name: string;
//   age: number;
//   [x: string]: any;
// }

// const userDe: PersonA = {
//   name: 'Honor',
//   age: 30,
//   gender: 'man',
//   country: 'Ukraine',
// }

// interface Person5 {
//   name: string;
//   additionInfo?: {
//     someInfo: string;
//   };
// }

// const user5: Person5 = {
//   name: 'Dem',
// }

// user5?.additionInfo?.someInfo

// const userInpuut = '';

// const store = userInpuut ?? 'DEFAULT';

// console.log(store);

// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// function add(a: string | number, b: string | number) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// // let arr: Array<string | number>;
// // arr = ['string', 1]

// // const promise: Promise<string> = new Promise((resolve) => {
// //   resolve('SString');
// // })

// // // promise.then(() => {
  
// // // })

// // (() => {
// //   async function promiseFoo(): Promise<string> {
// //     return "sstring2"
// //   }
// //   promiseFoo().then((data) => {

// //   })
// // })()

// function merge<T extends object, U extends object> (objA: T, objB: U) {
//   return Object.assign({}, objA, objB);
// }

// const toMerge1 = {
//   name: 'Holig',
// }

// const toMerge2 = {
//   age: 30,
// }

// const merged = merge(toMerge1, toMerge2);

// merged.name

// interface Ilength {
//   length: number;
// }

// function getLength<T extends Ilength>(str: T): number {
//   return str.length;
// }

// const obj4 = {
//   length: 10,
// }

// getLength(obj4)

// function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
//   return obj[key];
// }

// const field = extractValue({ name: 'Vas' }, 'name');

// class DataStore<T> {
//   private data: T[] = [];

//   addItem(item: T): void {
//     this.data.push(item);
//   }

//   getItems(): T[] {
//     return this.data;
//   }
// }

// interface IPersonn {
//   name: string;
// }

// const storeUsers = new DataStore<IPersonn>();

// storeUsers.addItem({
//   name: 'Holi',
// })

// console.log(storeUsers.getItems());

// const ageStore = new DataStore<number>();

// ageStore.addItem(2)


// interface IUser {
//   name: string;
//   age: number;
// }

// function createUser(name: string): IUser {
//   const person: Partial<IUser> = {
//     name,
//   };

//   person.age = 21;
//   return person as IUser;
// }

// interface IPersonnn {
//   name: string;
// }

// const arrr: Readonly<IPersonnn> = {
//   name: 'John',
// };


// interface Page {
//   title: string;
//   annotation: string;
//   numberPage: number;
// }

// const pageAnotation: Pick<Page, 'annotation' | 'numberPage'> = {
//   annotation: 'We are happy',
//   numberPage: 4,
// }