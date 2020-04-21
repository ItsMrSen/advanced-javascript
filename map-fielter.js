const points = [2, 4, 6, 8, 10];
// const winner = [];
// for(let i = 0; i < points.length; i++){
//     const elements = points[i];
//     const result = elements * elements;
//     winner.push(result);
// }
// function square(elements){
//     return elements * elements
// }
// const winner = points.map(function(elements){
//     return elements * elements
// })

// const square = elements => elements * elements;
// const square = x => x * x;

//**easy double it mathod */
// const winner = points.map(x => x * x);

// console.log(winner);
//filter
const winner = points.filter(x => x >5);
console.log(winner);
const winnerMatch = points.find(x => x<5)
console.log(winnerMatch);