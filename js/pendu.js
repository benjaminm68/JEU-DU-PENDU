// JEU DU PENDU
// © BENJAMIN.M

const arrayCat = {
  voiture: ['peugeot', 'citroen', 'ferrari', 'mercedes', 'audi', 'bmw', 'corvette', 'dacia', 'bentley', 'chevrolet', 'lotus', 'lamborghini', 'mclaren', 'opel', 'skoda', 'fiat', 'tesla'],
  sport: ['football', 'handball', 'basketball','boxe','natation','gymnastique','cycliste'],
}
var mot
var reponses = [];
var bonneLettre = 0;
var nbChance = 9;

const aDeviner = document.getElementById('aDeviner')
const buttons = document.querySelectorAll('#clavier button')
const clavier = document.getElementById('clavier')
const lettreUtiliser = document.getElementById('lettreUtiliser')
const victoire = document.getElementById('victoire')
const nombreChance = document.getElementById('nombreChance')
const rejouer = document.getElementById('btn_rejouer')

const pendu1 = document.getElementById('pendu_1')
const pendu2 = document.getElementById('pendu_2')
const pendu3 = document.getElementById('pendu_3')
const pendu4 = document.getElementById('pendu_4')
const pendu5 = document.getElementById('pendu_5')
const pendu6 = document.getElementById('pendu_6')
const pendu7 = document.getElementById('pendu_7')
const pendu8 = document.getElementById('pendu_8')
const pendu9 = document.getElementById('pendu_9')
const pendu10 = document.getElementById('pendu_10')

for (key in arrayCat) {
  document.querySelector('.modal select').innerHTML += '<option value="' + key + '">' + key + '</option>'
}

document.querySelector('#selectionner').addEventListener('click', function () {
  let cat = document.querySelector('.modal select').value
  //b. faire disparaitre la modal
  document.querySelector('.modal').style.display = "none"
  //c. récupérer un mot aléatoire dans la cat. stockée
  let arrayMot = arrayCat[cat]
  // 2. Stocke dans une variable un mot aléatoire obtenu du tableau
  mot = arrayMot[Math.floor(Math.random() * 4)]
  // 3. Transformer le mot "solution" en majuscules et en tableau de lettres (1 index = 1 lettre du mot)
  mot = mot.toUpperCase().split('')
  // 5. Pour chaque element du tableau, afficher un "_" dans la zone "à deviner"
  for (let i = 0; i < mot.length; i++) {
    reponses.push('_')
  }
  aDeviner.innerHTML = reponses.join(' ')
})

nombreChance.innerHTML = nbChance


// Pour tout les bouttons
// On ajoute un Ã©vÃ¨nement au clique
// On instancie la variable erreur Ã  true
// On rÃ©cupÃ¨re le contenu html du boutton cliquÃ© qu'on stocke dans la variable Lettre
// Au clique on passe l'opacitÃ© du bouton Ã  0.4
// On affiche les lettres utilisÃ©es par le joueur
// On desactive le boutton

for (let button of buttons) {
  button.addEventListener('click', function () {
    let erreur = true;
    let lettre = this.innerHTML
    button.style.opacity = "0.4";
    lettreUtiliser.innerHTML += lettre + ','
    this.disabled = true;

    // On parcourt le tableau du mot Ã  deviner
    // Si la lettre cliquÃ© correspont Ã  une des lettres du mot
    // On passe la variable erreur Ã  false
    // On remplace le tiret par la bonne lettre
    // On incrÃ©mente la variable bonneLettre de 1
    // On affiche le resultat
    for (let i = 0; i < mot.length; i++) {

      if (lettre === mot[i]) {
        erreur = false;
        reponses[i] = lettre
        bonneLettre++
        aDeviner.innerHTML = reponses.join(' ')
      }
    }

    // Si la lettre n'est pas bonne on decremente de 1 le nombre de chance
    // On affiche le nombre de chance restante au joueur
    if (erreur == true) {
      nbChance--
      nombreChance.innerHTML = nbChance
    }

    // A chaque erreur on affiche un bout du pendu
    if (nbChance === 8) {
      pendu1.style.display = "initial"
    } else if (nbChance === 7) {
      pendu2.style.display = "initial"
    } else if (nbChance === 6) {
      pendu3.style.display = "initial"
    } else if (nbChance === 5) {
      pendu4.style.display = "initial"
    } else if (nbChance === 4) {
      pendu5.style.display = "initial"
    } else if (nbChance === 3) {
      pendu6.style.display = "initial"
    } else if (nbChance === 2) {
      pendu7.style.display = "initial"
    } else if (nbChance === 1) {
      pendu8.style.display = "initial"
    } else if (nbChance === 0) {
      pendu9.style.display = "initial"
      pendu10.style.display = "initial"
    }


    // Si le compteur bonneLettre est le mÃªme que la longueur du mot Ã  deviner
    // On affiche un message de victoire au joueur
    // On enlÃ¨ve le clavier
    // On affiche un bouton rejouer
    if (bonneLettre === mot.length) {
      victoire.style.display = "flex"
      clavier.style.display = "none"
      rejouer.style.display = "initial"
      // Sinon si le compteur de chance est Ã©gal Ã  0
      // On affiche le mot Ã  deviner
      // On affiche un message de dÃ©faite au joueur
      // On enlÃ¨ve le clavier
      // On affiche un bouton rejouer
    } else if (nbChance === 0) {
      aDeviner.innerHTML = mot.join(' ')
      defaite.style.display = "flex"
      clavier.style.display = "none"
      rejouer.style.display = "initial"
    }
  })
}
























