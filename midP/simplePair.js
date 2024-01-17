function simplePair(arr,target){
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {

            let sum = arr[i] * arr[j] 
            

            if (sum == target) {
                one = arr[i].toString();
                two = arr[j].toString();
                
                return[arr[i],arr[j]]
            }   
        }
        
            
        
    }
}

console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));