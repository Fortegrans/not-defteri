let notlar = JSON.parse(localStorage.getItem("notlar"));
if (notlar == null) {
    notlar = [];
}

notlariListele();

function notlariListele() {
    let liste = document.getElementById("notListesi");
    liste.innerHTML = "";

    for (let i = 0; i < notlar.length; i++) {
        liste.innerHTML += "<li class='list-group-item d-flex justify-content-between align-items-center'>" +
                           "<span>" + notlar[i] + "</span>" +
                           "<div>" +
                           "<button class='btn btn-warning btn-sm me-2' onclick='notDuzenle(" + i + ")'>Düzenle</button>" +
                           "<button class='btn btn-danger btn-sm' onclick='notSil(" + i + ")'>Sil</button>" +
                           "</div>" +
                           "</li>";
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

function notSil(index) {
    notlar.splice(index, 1);
    localStorage.setItem("notlar", JSON.stringify(notlar));
    notlariListele();
}

function notDuzenle(index) {
    let yeniMetin = prompt("Notunuzu düzenleyin:", notlar[index]);

    if (yeniMetin !== null && yeniMetin !== "") {
        notlar[index] = yeniMetin;
        localStorage.setItem("notlar", JSON.stringify(notlar));
        notlariListele();
    }
}