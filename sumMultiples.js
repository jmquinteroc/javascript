//Find the sum of all the multiples of 3 or 5 below 1000.
function sumMultiples(){
    var vtemp=0;
    for (var i=1; i<1000; i++){
        if ((i % 3==0) || (i % 5==0)){
            vtemp=vtemp+i;
        }
    }
    return vtemp;
}
console.log(sumMultiples());
