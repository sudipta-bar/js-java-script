const marvel_heros = ["su","pra","md"]
const dc_heros = ["super","ankit","viraj"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


//sparte
const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[3,45,5],[7,68,9,[2,4,6,8]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("sudipta"));
console.log(Array.from("sudipta"));

console.log(Array.from({name:"sudipta"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

