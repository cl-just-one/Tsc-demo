let num: number = 20;

document.title = "Typescript测试";

function greeter(name: string) {
    return "hello " + name;
}

let user = "da cheng zi";

document.body.innerHTML = greeter(user);

// 基本类型
let flag: boolean = true;
let age: number = 29;
let binaryLiteral = 0b1010; // 二进制
let hexLiteral = 0xf00d; // 十六进制
let octalLiteral = 0o722; // 八进制
let name1: string ="chengcheng";
name1 = "huahua";

// 数组
let list: number[] = [1, 2, 3];
let arr: Array<number> = [3, 4, 4];
let arr1: Array<object> = [{}, {}, {}];

// 元组Tuple 已知元素数量和类型的数组
let s: [string, number] = ["q", 9];

// 枚举
enum Color {red, blue, yellow};
let c: Color = Color.blue;
console.log("----color---", c);

// Any不清楚类型
let a: any = "222";
a = false;
let list1: any = [1, "333", false];

// Void没有任何类型 与Any相反 void类型只能赋值undefined和null
function func(): void {
    console.log("--void--");
}
let haha: void = undefined;
// let haha1: void = null; // 报错

// Null和Undefined 
// todo -- null和undefined是所有类型的子类型
let aa: undefined = undefined;
let bb: null = null;

// Never 永不存在的值的类型
// never类型是任何类型的子类型
// any也不可赋值给never
function err(message: string): never{
    throw new Error(message)
};

// Object表示非原始类型
declare function create(o: object | null): void;
create({ a: "111" });
create(null);

// 类型断言两种形式
// 第一种 "尖括号"语法
let someValue: any = "This is a big dog!";
let strLength: number = (<string>someValue).length;
// 第二种 as语法
let someValue1: any = "This is a big dog!";
let strLength1: number = (someValue as string).length;
// typescript中使用jsx 只有as语法被允许


