function aleatoire(min, max) {
    let difference = max - min // 5
    let aleatoire = Math.random() * difference
    return min + aleatoire
}

function aleatoire_entier(min, max) {
    return Math.floor(aleatoire(min, max + 1))
}

function array_rand(tableau) {
    let index = Math.floor(Math.random() * tableau.length)
    return tableau[index]
}

// NOUVEAU!
function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
}