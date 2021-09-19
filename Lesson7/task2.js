// В ваш подъезд вьехали новые жильцы, которые привезли с собой тараканов.
// Насекомые в поисках еды ползут по вентиляционной шахте.
// За час они поднимаются на 1м, но сразу после этого теряют равновесие и скатываются вниз на 0.5м
// Вопрос: сколько времени у вас есть на покупку ловушек для тараканов, если расстояние от вас до соседей 5м.

// (*) Напишите функцию, которая будет решать эту задачу в общем виде, для любых (speed, slowdown, mine),
// где mine - это высота шахты, speed - скорость таракана за час, slowdown - расстояние падения из-за усталости

function timeForCockroach (mine, speed, slowdown) {

    let t = 0;
    let height = 0;

    do {
        t++
        height = height + speed;
        if (height<mine){
            height = height - slowdown;
        }
        console.log({ t, height });

    } while (height < mine)

    if (height > mine) {
        t -= (height-mine)/speed;
    }


    return t;
}

const m = prompt ('Какая высота шахты?', '3');
const s = prompt ('Какая сторость таракана за час?', '1');
const sl = prompt ('Какое расстояние падения из-за усталости?', '0.5');

mine = parseFloat (m);
speed = parseFloat (s);
slowdown = parseFloat (sl);

if ((mine == null) || (speed == null) || (slowdown == null)) {
    alert('Вы отказались вводить информацию.');
} else {
    if (isNaN(mine) || isNaN(speed) || isNaN(slowdown)) {
        alert('Введены некорректные данные.')
    } else {
        console.log (timeForCockroach (mine, speed, slowdown));
    }  
}
