let num:number = 20;

document.title = "Typescript测试";

function greeter(name: String) {
    return "hello " + name;
}

let user = "da cheng zi";

document.body.innerHTML = greeter(user);