// 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home (for)

const n = prompt('Какой конец диапазона?', '10');
const k = prompt('Числа должны быть кратны?', '2');


function isDevided (n, k) {
    for (let j = 1; j <= n; j++){
        if (j%k == 0){
            console.log(j)
        }
    }  
}

if ((n == null) || (k == null)) {
    alert('Вы отказались вводить информацию.');
} else {
    if (isNaN(n) || isNaN(k) || n <=0 || k<=0) {
        alert('Введены некорректные данные.')
    } else {
        isDevided(n, k);
    }  
}

