let bonus = 20;
function sum(first, secound){
    let result = first + secound + bonus;
    if(result > 9){
        let mood = "mood is happy";
        console.log(mood)
    }
    console.log(bonus);
    return result;
}
const output = sum(7, 5);
console.log(output)