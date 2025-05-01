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

let table = document.querySelector("#artikli")


    for (let artikal of listaArtikala) {
        let tr = document.createElement("tr")
    
        let id = document.createElement("td")
        let naziv = document.createElement("td")
        let cena = document.createElement("td")
        let dostupnost = document.createElement("td")
        
        

        id.textContent = artikal.id
        naziv.textContent = artikal.naziv
        cena.textContent = artikal.cena
        if (artikal.dostupnost) {
            dostupnost.textContent = "DA"
        }
        else {
            dostupnost.textContent = "NE"
            tr.style.backgroundColor = "rgba(255, 0, 0, 0.3)"
            id.style.borderColor = "rgba(255, 0, 0, 0.5)"
            naziv.style.borderColor = "rgba(255, 0, 0, 0.5)"
            cena.style.borderColor = "rgba(255, 0, 0, 0.5)"
            dostupnost.style.borderColor = "rgba(255, 0, 0, 0.5)"

        }
        

    
        tr.appendChild(id)
        tr.appendChild(naziv)
        tr.appendChild(cena)
        tr.appendChild(dostupnost)
    
        table.appendChild(tr)
    }