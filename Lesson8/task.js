// Начальник цеха пригласил людей на совещание
// Каждый, кто входит в кабинет пожимает руки всем присутствующим
// Сколько человек зашло в кабинет, если известно, что всего произошло 120 рукопожатий.


function getPeople(handshake) {
    let peoples = 0;
    let currentHandshake = 0;

    do {
        peoples++;
        currentHandshake += peoples;
    } while (currentHandshake < handshake);

    return peoples;
}

console.log( getPeople(1) );
console.log( getPeople(3) );
console.log( getPeople(6) ); 
console.log( getPeople(10) );
console.log( getPeople(15) ); 
console.log( getPeople(120) );