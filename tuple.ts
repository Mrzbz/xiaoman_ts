// 如果需要一个固定大小的不同类型值的集合，我们需要使用元组

let tup: [string, number, boolean] = ['1',2,true];
tup.push(1)
console.log(tup);

let tup1: [string, number, boolean][] = [
    ['1',2, true],
    ['2', 3, false]
]
console.log(tup[1]);
console.log(tup1[1]);