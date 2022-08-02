'use strict'

let SimpleNumbersIterator = {
    [Symbol.iterator]() {
        return {
            current: 2,   
            last: Infinity,
            next() {
                if (this.current <= this.last) {
                    if (this.current <= 3) {    //Чтобы корректно вывести 2 и 3
                        return {value: this.current ++, done: false};
                    } else {              
                        let numberIsSimple = (n) => {
                            for (let i = 3; i * i <= n; i = i + 2) {
                                if (n % i === 0) {
                                    return false;
                                }
                            }
                            return true; 
                        }
                        if (this.current % 2 === 0) { //Чтобы перешагнуть с 4 на 5
                            this.current++;
                        }
                        while (true) {
                            if ( numberIsSimple(this.current) ) {   //Проверяю начиная с 5 все нечетные
                                let simple = this.current;
                                this.current = this.current + 2;
                                return {value: simple, done: false};
                            }
                            this.current = this.current + 2;
                        } 
                    }
                } else {
                    return {done: true};
                }
            }
        };
    }
};

let count = 0;
//let arr = [];

for (let simpleNumber of SimpleNumbersIterator) {
    console.log(simpleNumber);
    //arr[count] = simpleNumber;
    count++;
    if (count === 100) {
        break;
    }
}

/*let test = (testArr) => {
    let hundredSinple = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541];

    if (testArr.length !== hundredSinple.length) {
        return ("Упс, ошибка, не совпадает длина");
    } else {
        for (let i = 0; i < hundredSinple.length; i++) {
            if ( testArr[i] !== hundredSinple[i] ) {
                return (`Упс, ошибка, должно быть ${hundredSinple[i]} вместо ${testArr[i]}`);
            }
        }
        return ("Полное совпадение, 100 из 100");
    }
}

console.log( test(arr) );*/

