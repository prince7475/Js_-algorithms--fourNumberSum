function fourNumberSum(array,target){
    let hash = {} // This object will be our hash table, the key will be the sum of two numbers, the value will be an 2D array of two numbers that will add up to the key value
    let result = [] // This result array will be a 2D array of 4 numbers that sums up to target
    for(let first = 0; first < array.length; first ++){ // The first loop will go through all of the numbers 
        let num1 = array[first] // getting the current n
        for(let second = first + 1; second < array.length; second++){ // for the second loop we will go one ahead of the first element, by adding "first + 1"
            let num2 = array[second] //getting our second number
            let sum = num1 + num2 //getting the sum of our two numbers, once we get the sum we will subtract it from our target to get the remaining sum we will need which we will call diff
            let diff = target - sum 
            if (hash[diff]){ // we will check if diff is in our hash object already, we expect our hash to be a 2D array of two numbers that sums up to diff, so we will look through each one and concat it with num1 and num2 in the order given
                for(let k = 0; k < hash[diff].length; k++){
                    result.push((hash[diff][k].concat([num1,num2])))
                }
            }
        }
        // here is where we create our hash table 
        for(let m = 0; m < first; m++){ // we will loop to the 'first' which is the current number we are on of the outter loop
            let current = array[m] //we will add all the numbers behind it to 'num1' and in the hash table we wil save the sum as a key and the value will be an array of the two numbers
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