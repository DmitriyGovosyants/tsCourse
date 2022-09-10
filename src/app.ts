// const button = document.querySelector("button")!;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// };

// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });

// function combine(param1: string | number, param2: string | number) {
//   if (typeof param1 === 'string' || typeof param2 === 'string') {
//     return param1.toString() + param2.toString();
//   }
//   return param1 + param2;
// }

// combine(1, 2);

// export {}

// class House {
//   private tenants: string[] = [];

//   constructor(public readonly type: string, protected street: string) {
//   }

//   public showAddress(this: House, add: string): void {
//     console.log('Address: ', this.street, add);
//   }

//   public showType(this: House): void {
//     console.log('Type: ', this.type)
//   }

//   public addTenant(name: string) {
//     this.tenants.push(name);
//   }

//   public showTenants() {
//     console.log(this.tenants);
//   }
// }

// class StoneHouse extends House {
//   private chatgeOfTheHouse: string;

//   constructor(street: string, general: string) {
//     super('stone', street);
//     this.chatgeOfTheHouse = general;
//   }

//   public showAddress(): void {
//     console.log('Address: ', this.street);
//   }

//   public showTenants() {
//     console.log('General: ', this.chatgeOfTheHouse);
//     super.showTenants();
//   }
// }

// const stoneHouse = new StoneHouse('stonestreet', 'Max')

// stoneHouse.addTenant('Maximus');

// stoneHouse.showTenants();

// class UseStatic {
//   private static count = 0;

//   constructor() {
//     UseStatic.count += 1;
//   }

//   public static isStaticMethod() {
//     console.log('I`m static');
//   }

//   public showCount() {
//     console.log(UseStatic.count);
//   }
// }

// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();

// obj1.showCount();
// obj2.showCount();
// obj3.showCount();

// UseStatic.isStaticMethod();

// abstract class Plane {
//   protected pilotInCabin = false;

//   public sitInPlane() {
//     this.pilotInCabin = true;
//   }

//   public abstract startEngine(): string;
// }

// class Maize extends Plane {
//   public startEngine(): string {
//     return 'tatatat';
//   }
// }

// class Boeing extends Plane {
//   public startEngine(): string {
//     return 'Buuuuu';
//   }
// }

// const maize = new Maize();
// const boeing = new Boeing();

// maize.sitInPlane();
// boeing.sitInPlane();

// console.log(maize.startEngine());
// console.log(boeing.startEngine());
//
interface IPerson {
  readonly name: string;
  age?: number;

  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

class Pilot implements IPerson, IPilot {
  constructor(public readonly name: string, public age: number) {
    this.checkAge();
  }

  public checkAge() {
    if (this.age < 28) {
      throw new Error('Pilot to young');
    }
  }

  public greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }

  public flyMessage(): void {
    console.log('Самолет набрал высоту, приятного полета!');
  }
}

abstract class Plane {
  protected pilot?: IPilot;

  public sitInPlane(pilot: IPilot) {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine(): boolean {
    if (!this.pilot) {
      throw new Error('No pilot in cabin');
    }

    console.log('Запуск турбин');
    this.pilot.flyMessage();
    return true;
  }
}
class Terrorist implements IPilot {
  public bluff(phrase: string) {
    console.log(phrase);
  }

  public flyMessage(): void {
    console.log('Наши требования - много денег')
  }
}

const boeing = new Boeing();
const pilot = new Terrorist();

boeing.sitInPlane(pilot);
pilot.bluff('Мы захватили этот самолет');
boeing.startEngine();
// const pilot = new Pilot('Demian', 31);


// pilot.greet('Вас привестсвует капитан корабля');
// boeing.sitInPlane(pilot);
// boeing.startEngine();

// let user: IPerson;

// user = {
//   name: "Demian",
//   age: 29,

//   greet(phrase: string): void {
//     console.log(phrase + ' ' + this.name);
//   }
  
// }

// user.greet("Hello, I`m")