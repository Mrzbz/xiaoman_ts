const fn = (name: string, age: number): string => {
	return `${name}${age}`;
}
console.log(fn('john', 22))


interface User {
	name: String,
	age: Number,
	gender?: Number, // 0 男 1 女
}

interface Add {
	(num_1: number, num_2: number): number
}

const fn1: Add = (a, b) => a + b

function user(user: User): User {
	return {
		age: user.age,
		name: user.name,
	};
}

const user2 = (user: User): User => {
	return {
		name: user.name,
		age: user.age,
		gender: user.gender
	}
}

console.log(user({ name: 'user1', age: 23 }))
console.log(user2({ name: 'user-1', age: 34 }))
console.log(user2({ name: 'user-1', age: 34, gender: 1 }))

// 定义剩余参数
function args(arrary: number[], ...items: any[]): any[] {
	return [...arrary, ...items];
}

// 参数默认值
function params(name: string = 'zhangsan'): void {
	console.log(`my name is ${name}`)
}
params('lisi')
params()

//  函数重载
function reload(params1:string): void
function reload(params1: string, params2: number): void
function reload(params1: any, params2?: any): void {
	console.log(params1, 'params1');
	console.log(params2, 'params2');

}

reload('123')
reload('123', 123)
reload('123',12)