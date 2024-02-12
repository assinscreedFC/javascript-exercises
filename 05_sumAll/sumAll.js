const sumAll = function(debut,fin) {
    let som=0;
if( (debut<0 || fin<0) || (typeof(debut)!="number" || typeof(fin)!="number")) {
    return"ERROR";
}   if(debut>fin){
    // let temp=fin;
    // fin=debut;
    // debut=temp;
    [debut,fin]=[fin,debut];
}
for(let i=debut; i<=fin; i++) { 
    som+=i;
};
return som;
};
// Do not edit below this line
module.exports = sumAll;
