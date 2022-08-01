'use strict'

			let range = {
				from: 1,
				to: Infinity
			};

			range[Symbol.iterator] = function() {

				return {
					current: this.from,
					last: this.to,

					next() {
						if (this.current <= this.last) {
							return { done: false, value: this.current++ };
						} else {
							return { done: true };
						}
					}
				};
			};

			let isSimpleNumber = (n) => {
				if (n === 1) {   // Я могла бы в функции showSimpleNumbers сразу откинуть 1 или запушить в result 2-ку, но тогда бы функция isSimpleNumber была бы не полноценной: если её вызвать отдельно с n = 1 или 2, то работать будет некорректно
					return false;
				}
				if (n === 2) {
					return true;
				}      
				for(let i = 3; i * i <= n; i = i + 2) {
					if (n % i === 0) {
						return false;
					}
				}
				return true;
			};

			let showSimpleNumbers = (obj) => {   
				let result = [];

				for (let num of obj) {   //Я не могу управлять шагом в цикле for of, поэтому приходится проверять четное ли число.
					if (result.length === 100) {
						break;
					}
					if (num % 2 === 0 && num !== 2) {
						continue;
					} else {
						if ( isSimpleNumber(num) ) {
							result.push(num);	
						}
					}
				}

				return result;
			};

			console.log( showSimpleNumbers(range) );