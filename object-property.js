const players = [
    {id: 28, name: 'sabbir'},
    {id: 27, name: 'mashrafi'},
    {id: 91, name: 'mushfiq'},
    {id: 44, name: 'ruble'},
];
// for(let i = 0; i = players.length; i++){
//     const elements = players[i]
// }
const name = players.map( s=> s.name)
const id = players.map( s => s.id)
const best = players.filter(s => s.id>40)
console.log(best);