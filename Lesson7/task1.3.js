// 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home (for)

const n = prompt('Какой конец диапазона?', '10');
const k = prompt('Числа должны быть кратны?', '2');

for (let j = 1; j <= n; j++){
    if (j%k == 0){
        console.log(j)
    }
}



