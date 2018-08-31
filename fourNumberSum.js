function fourNumberSum(array,target){
    let hash = {} 
    let result = []
    for(let first = 0; first < array.length; first ++){
        let num1 = array[first]
        for(let second = first + 1; second < array.length; second++){
            let num2 = array[second]
            let sum = num1 + num2
            let diff = target - sum
            if (hash[diff]){
                for(let k = 0; k < hash[diff].length; k++){
                    result.push((hash[diff][k].concat([num1,num2])))
                }
            }
        }
        
        for(let m = 0; m < first; m++){
            let current = array[m]
            let newSum = num1 + current
            if(hash[newSum]){
                hash[newSum].push([current, num1])
            }else {
                hash[newSum] = [[current,num1]]
            }
        }
        
    }
    return (result)
}

exports.fourNumberSum = fourNumberSum