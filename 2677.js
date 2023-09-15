/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const ans = [];

    let subarr = [];

    for (let i = 0; i < arr.length; i++){
        subarr.push(arr[i]);
        if (subarr.length === size){
            ans.push(subarr);
            subarr = [];
        }
    }

    if (subarr.length){
        ans.push(subarr)
    } 

    return ans;
};
