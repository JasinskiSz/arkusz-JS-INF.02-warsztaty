function oblicz() {
    let cena = 0

    const czyPapierBlyszczacy = document.getElementById("papier-blyszczacy").checked
    const czyPapierMatowy = document.getElementById("papier-matowy").checked

    if (czyPapierBlyszczacy === true) {
        console.log("wybrałeś papier błyszczący")
        cena = 1.5
    } else if (czyPapierMatowy === true) {
        console.log("wybrałeś papier matowy")
        cena = 2
    } else {
        console.log("Błąd! żaden papier nie został wybrany")
        return
    }

    const nazwaPliku = document.getElementById("file-jpeg").files[0].name

    const zdjecie = document.createElement("img")
    zdjecie.src = nazwaPliku
    document.getElementById("wynik").appendChild(zdjecie)

    const paragraf = document.createElement("p")
    paragraf.innerText = "321"
    document.getElementById("wynik").appendChild(paragraf)
}