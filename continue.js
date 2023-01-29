var numbers = [42, 67, 18, 99, 100, 43, 50, 188, 927, 32]
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i]
    // if (number > 150){
    //     break;
    // }
    if(number >= 50){
        continue;
    }
    console.log(number)
}