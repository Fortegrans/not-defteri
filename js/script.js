let notlar = JSON.parse(localStorage.getItem("notlar"));
if (notlar == null) {
    notlar = [];
}

notlariListele();

function notlariListele() {
    let liste = document.getElementById("notListesi");
    liste.innerHTML = "";

    for (let i = 0; i < notlar.length; i++) {
        liste.innerHTML += "<li class='list-group-item'>" + notlar[i] + "</li>";
    }
}

function notEkle() {
    let kutu = document.getElementById("notInput");
    let metin = kutu.value;

    if (metin !== "") {
        notlar[notlar.length] = metin;
        localStorage.setItem("notlar", JSON.stringify(notlar));
        kutu.value = "";
        notlariListele();
    }
}