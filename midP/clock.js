function digitalClock(num){
    let h = Math.floor((num / 60) /60);
    let m = Math.floor(num/60 - 60) ;
    
    console.log(h,m,s);
}



console.log(digitalClock(5025))