// const
const bbb = 100;
const obj = {
    name: "xiaohua",
    age: 20
};

obj.name = "xiaoming";
obj.age = obj.age++;

// 解构数组
let inputs = [1, 2];
let [first, second] = inputs;
console.log(first); // 1
console.log(second); // 2

// 交换变量
[first, second] = [second, first];

// 作用函数参数
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1, 3]);

// ...语法
let [f1, ...rest] = [1, 2, 3, 4, 5];
console.log(f1); // 1
console.log(rest); // [2, 3, 4, 5]

// 对象解构
let obj1 = {
    a1: 0,
    b23: "s",
    c1: true
};
// let { a1, c1 } = obj1;
// console.log(a1); // 0
// console.log(c1); // true
// ({ c1, a1 } = { c1: false, a1: 111 })
// 属性重命名
// let { a1: a22, b23: b999} = obj1;
// 指定类型
let {a1, b23}: {a1: number, b23: string} = obj1;





