'use strict'

class Aritakl {
    constructor(id, naziv, cena, dostupnost) {
        this.id = id
        this.naziv = naziv
        this.cena = cena
        this.dostupnost = dostupnost
    }
}

let artikal1 = new Aritakl(1, "hlace", 2000, true)
let artikal2 = new Aritakl(2, "traktorska guma", 500, false)
let artikal3 = new Aritakl(3, "motorna testera", 5000, false)
let artikal4 = new Aritakl(4, "nimbus 2000", 1000000, true)

let listaArtikala = [artikal1, artikal2, artikal3, artikal4]

