/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return new Promise((res, rej) =>{
        promise1.then((value1)=>{
            promise2.then((value2)=>{
                res(value1+value2)
            })
        })  
    })
    // return await promise1 + await promise2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */