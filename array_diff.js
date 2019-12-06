/* write a function which subtracts one list from another and returns the result */


let arrayDiff = (a, b) => {

    let aSum = 0;
    let bSum = 0;


    for (let i = 0; i < a.length; i++) {
      aSum += a[i];

    }

    for (let i = 0; i < b.length; i++) {
      bSum += b[i];
    }

    return aSum - bSum; 
}

arrayDiff([3,4], [3]);
