function fourNumberSum(array, target){
    let hash = {}
    let result = []
    for(let first = 0; first < array.length; first ++){
        let num1 = array[first]
        for(let second = first + 1; second < array.length; second++){
            let num2 = array[second]
            let sum = num2 + num1
            let diff = target - sum
            if(hash[diff]){
                for(let i = 0; i < hash[diff].length; i++){
                    result.push((hash[diff][i].concat([num1,num2])))
                }
            }
        }
        for(let m = 0; m < first; m++){
            let current = array[m]
            let summed = current + num1
            if(hash[summed]){
                hash[summed].push([current,num1])
            }else {
                hash[summed] = [[current,num1]]
            }
        }
    }
    return (result)

}
exports.fourNumberSum = fourNumberSum