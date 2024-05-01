// const names =[
//     "Nurmuhumad",
//     "Firdavishon",
//     "Rahmonjon",
//     "Dilmurodjon",
//     "Abdurahmon",
//     "Farhod",
// ];
// let caunter = {
//     bek: 0,
//     jon: 0,
// }
// for (let i = 0; i < names.length; i ++) {
//   if (names[i].includes("jon")){
//     caunter.bek +=1;
// }  else if (names[i].includes("bek")){
//     caunter.jon +=1;
// }
// }
// console.log(caunter);

function getInitialodds(n){
    let oddNumber =[];
    let k = 1;
    for (let i = 1; i <= n; i++){
        if (i == 1){
            oddNumber.push(i);
        } else {
            oddNumber.push((k += 2));
        } 
    }
    return oddNumber;
}
const result = getInitialodds(5);
console.log(result);
    
