function numberSplit(num){
    num2 = Math.floor(num/2) ;
    num3 = num - num2
    console.log(num2, num3);
    //[Math.floor(num/2),Math.ceil(num/2)];
}



numberSplit(4);
numberSplit(10);
numberSplit(11);
numberSplit(-9);