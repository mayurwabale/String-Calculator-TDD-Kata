class Player {
    add(str) {
        if (str.startsWith("//")) {
            let delimiter = str.charAt(2);
            let stringWithNums = this.createStringAfterNewline(str);
            const temp = this.replaceChars(stringWithNums,delimiter, ',');
            const numbersArr = this.strToArray(temp);
            this.checkNegativeNum(numbersArr);
            const sum = this.calculateNumbers(numbersArr);
            return sum;
        } else {
            let delimiter = '\n';
            let stringWithNums = this.replaceChars(str, delimiter,',')
            let numbersArray = this.strToArray(stringWithNums);
            this.checkNegativeNum(numbersArray);
            const sum = this.calculateNumbers(numbersArray);
            return sum;
        }

    }



    strToArray(str) {
        return str.split(',')
    }

    replaceChars(str, delimiter,replaceBy) {
        const myPattern = `[${delimiter}]`;
        const myFlags = 'g';
        let regex = this.createRequiredRegexp(myPattern, myFlags);
        let string1 = str.replace(regex, replaceBy);
        return string1
    }

    calculateNumbers(arr) {
        const sum = arr.reduce((acc, curr) => acc + +curr, 0);
        return sum;
    }

    createStringAfterNewline(str) {
        let stringWithNums = '';
        let start = false;
        for (let i = 0; i < str.length; i++) {
            if (start) {
                stringWithNums += str.charAt(i)
            }
            if (str.charAt(i) == '\n') {
                start = true
            }
        }
        return stringWithNums;
    }

    createRequiredRegexp(pattern, flags = '') {
        const regex = new RegExp(pattern, flags);
        return regex;
    }

    checkNegativeNum(arr) {
        let negativeNumbs ='';
        arr.forEach(ele => {
            if (ele < 0) {
                negativeNumbs += negativeNumbs.length !=0 ?  ',' + ele : ele;
            }
        })
        if(negativeNumbs != '') {
            throw new Error(`Negative numbers not allowed: ${negativeNumbs}`)
        }
    }

}

module.exports = Player;
