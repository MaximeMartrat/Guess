function guessNumber() {
    let chiffre
    const guess = Math.floor(Math.random() * 11)

    chiffre = prompt('Devinez le nombre entre 0 et 10')

    while(chiffre != guess) {
        if(chiffre < 0 || chiffre > 10 || isNaN(chiffre)) {
            chiffre = prompt(`${chiffre} est invalide ! Devinez un nombre entre 1 et 10`)
        } else {
            if(chiffre > guess) {
                chiffre = prompt(`${chiffre} est trop haut ! Devinez à nouveau`)
            } else {
                chiffre = prompt(`${chiffre} est trop bas ! Devinez à nouveau`)
            }
        }
    }

    alert(`Félicitations! Le nombre était ${guess}`)
}

guessNumber()