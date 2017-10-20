var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
function average(array){
    var sum = 0;
    for(var i=0; i<array.length; i++){
        sum += array[i];
    }
    console.log(Math.round(sum/array.length));
}

average(scores);
average(scores2);