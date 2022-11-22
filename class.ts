class Person {
    protected age: number // 受保护的
    public name: string // 公开的
    private sex: string // 私有的
    static nb: string // 静态属性  调用时不能通过this 只能通过类名去调用
    constructor(name: string, age: number, sex: string) {
        this.name = name
        this.age = age
        this.sex = sex
        // this.nb = '32' // 报错，静态属性不能通过this访问，只能通过类名访问
    }
    say() {
        console.log(`hi!, I'm ${this.name}, my age ${this.age}, ${this.sex}`);
    }
    static stFn(): void {
        console.log(this.nb, 'this.nb'); // 静态方法可以访问静态属性
        const str = this.returnStr();
        console.log(str, '同一个类中两个静态方法可以通过this 调用');
    }
    static returnStr(): string {
        return 'static return string'
    }
}

const person1 = new Person('john', 12, '1')
person1.name = 'jj'
// person1.age = 23     // 报错： 只能在Person中或其子类访问
// person1.sex = '1'    // 报错： 只能在Person中访问
// person1.say()

class Man extends Person {
    constructor() {
        super('小明', 18, '1')
        // console.log('--Man--', this.age, this.name);
        this.age = 19
    }
}

const man = new Man()
// console.log(man.name)
// man.say()
// Person.nb = '2nb-23'
// Person.stFn()



// interface 定义类
interface PersonClass {
    get(type: boolean): boolean
}
interface PersonClass2 {
    set(asd: string): void,
    asd:string
}

class A {
    name: string
    constructor() {
        this.name = 'isName'
    }
}
// extends 继承 implements 约束
class PersonA extends A implements PersonClass, PersonClass2 {
    asd: string
    constructor() {
        super()
    }
    get(type: boolean): boolean {
        console.log(this.name, 'this.name', type, this.asd)
        return type
    }
    set(asd: string) {
        this.asd = asd
    }
}

const personA = new PersonA()
// personA.get(false)
// personA.set('89')
// personA.get(true)

// 抽象类
abstract class D {
    public name: string
}
// new D() // 报错： 抽象类无法创建实例

abstract class Da {
    public name: string
    constructor() {
        this.name = 'new Name'
    }
    print(): void {
        console.log(this.name, 'print');
    }
    abstract get(): string 
    // {
    //     return this.name // 报错 不允许在基类中实现抽象类
    // }
    abstract printf(): void
}
class Dac extends Da {
    constructor(){
        super()
    }
    get(): string {
        return this.name
    }
    printf(): void {
        console.log(`\n${this.name}\n`);
    }
}

const dac = new Dac()
dac.name = 'dac Name'
let dacName = dac.get()
console.log(dacName)
dac.print()
dac.printf()