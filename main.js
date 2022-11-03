function createGame(player1, hour, player2) {
    return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="${player1}">
     <strong>${hour}</strong>
     <img src="./assets/icon-${player2}.svg" alt="${player2}">
    </li>
    `
}

function createCard(date, day, games) {
    return `
    <div class="card-n20">
    <h2>${date} <span>${day}</span> </h2>
    <ul>
        ${games}
    </ul>
</div>`
}

document.querySelector('#app').innerHTML = `
<header>
<img src="./assets/logo.svg" alt="Logo NLW">
</header>

<main id="cards">
 ${createCard("NOV 20", "domingo", 
    createGame('qatar', '13:00', 'ecuador')
 )}
 
 ${createCard("NOV 21", "segunda", 
    createGame('england', '10:00', 'iran') +
    createGame('senegal', '13:00', 'netherlands') + 
    createGame('usa', '16:00', 'wales')
 )}

 ${createCard("NOV 22", "terça",
    createGame('argentina', '7:00', 'saudi-arabia') + 
    createGame('denmark', '10:00', 'tunisia') + 
    createGame('mexico', '13:00', 'poland') + 
    createGame('france', '16:00', 'australia')
 )}

 ${createCard("NOV 23", "quarta", 
    createGame('morocco', '7:00', 'croatia') + 
    createGame('germany', '10:00', 'japan') + 
    createGame('spain', '13:00', 'costa-rica') + 
    createGame('belgium', '16:00', 'canada')
 )}

 ${createCard("NOV 24", "quinta", 
    createGame('switzerland', '7:00', 'cameroon') + 
    createGame('uruguay', '10:00', 'south-korea') + 
    createGame('portugal', '13:00', 'ghana') + 
    createGame('brazil', '16:00', 'serbia')
 )}

 ${createCard("NOV 25", "sexta", 
    createGame('wales', '7:00', 'iran') + 
    createGame('qatar', '10:00', 'senegal') + 
    createGame('netherlands', '13:00', 'ecuador') + 
    createGame('england', '16:00', 'usa')
 )}

 ${createCard("NOV 26", "sábado", 
    createGame('tunisia', '7:00', 'australia') + 
    createGame('poland', '10:00', 'saudi-arabia') + 
    createGame('france', '13:00', 'denmark') + 
    createGame('argentina', '16:00', 'mexico')
 )}

 ${createCard("NOV 27", "domingo", 
    createGame('japan', '7:00', 'costa-rica') + 
    createGame('belgium', '10:00', 'morocco') + 
    createGame('croatia', '13:00', 'canada') + 
    createGame('spain', '16:00', 'germany')
 )}

 ${createCard("NOV 28", "segunda", 
    createGame('cameroon', '7:00', 'serbia') + 
    createGame('south-korea', '10:00', 'ghana') + 
    createGame('brazil', '13:00', 'switzerland') + 
    createGame('portugal', '16:00', 'uruguay')
 )}

 ${createCard("NOV 29", "terça", 
    createGame('ecuador', '12:00', 'senegal') + 
    createGame('netherlands', '12:00', 'qatar') + 
    createGame('iran', '16:00', 'usa') + 
    createGame('wales', '16:00', 'england')
 )}

 ${createCard("NOV 30", "quarta", 
    createGame('tunisia', '12:00', 'france') + 
    createGame('australia', '12:00', 'denmark') + 
    createGame('poland', '16:00', 'argentina') + 
    createGame('saudi-arabia', '16:00', 'mexico')
 )}

 ${createCard("DEZ 01", "quinta", 
    createGame('croatia', '12:00', 'belgium') + 
    createGame('canada', '12:00', 'morocco') + 
    createGame('japan', '16:00', 'spain') + 
    createGame('costa-rica', '16:00', 'germany')
 )}

 ${createCard("DEZ 02", "sexta", 
    createGame('south-korea', '12:00', 'portugal') + 
    createGame('ghana', '12:00', 'uruguay') + 
    createGame('serbia', '16:00', 'switzerland') + 
    createGame('cameroon', '16:00', 'brazil')
 )}
</main>`