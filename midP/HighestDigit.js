function highestDigit(num){
    i = 1 ;

    let numStr = num.toString();

    let max = 0;

    if (numStr.length > 1) {
        for (let i = 0; i < numStr.length; i++) {
            for (let j = 1; j < numStr.length; j++) {
             if (numStr[j] > numStr[i]) {
                if (numStr[j]> max){
                 max = numStr[j]}
             }
             else max = numStr[i];
         
     
            }
             
         }
     
    }
    else max = numStr ;
    
    console.log(max);
}



highestDigit(379);
highestDigit(2);
highestDigit(377401);