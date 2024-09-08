class Player {
 add(str) { 
        let stringWithNums = this.replaceChars(str, ',')
        let numbersArray = this.strToArray(stringWithNums);
        const sum = this.calculateNumbers(numbersArray);
        return sum;
}



 strToArray(str) {
    return str.split(',')
}

 replaceChars(str, replaceBy) {
   
    let string1 = str.replace(/[\n]/g, replaceBy);
    return string1
}

 calculateNumbers(arr) {
    const sum = arr.reduce((acc, curr) => acc + +curr, 0);
    return sum;
}



}

module.exports = Player;
