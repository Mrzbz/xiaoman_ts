enum types {
    red,
    green,
    blue,
}
console.log(types.red);

enum num {
    red = 1,
    green = 2,
    blue = 3,
}
console.log(num.red);

// 增长枚举
enum add {
    red = 3,
    green,
    blue
}

// 字符串枚举
enum str {
    red = 'red',
    green = 'green',
    blue = 'blue',
}

// 反向映射
enum mapEnum {
    red = 1,
    green,
    blue,
}
let a = mapEnum.red;
console.log(a); // 1

let nameOfa = mapEnum[a];
console.log(nameOfa); // red
