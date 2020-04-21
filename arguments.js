function add(num1, num2){
    console.log(arguments);
    console.log([...arguments])
    return num1 + num2 + arguments[4]
}
const result = add(5, 7, 15, 20, 25);
console.log(result);