
function hitung(operator) {

    let A = document.getElementById("angkaA").value;
    let B = document.getElementById("angkaB").value;

    if (A === "" || B === "") {
        alert("Masukkan angka A dan B terlebih dahulu!");
        return;
    }

    A = Number(A);
    B = Number(B);

    let hasil;

    if (operator == "+") {
        hasil = A + B;
    }
    else if (operator == "-") {
        hasil = A - B;
    }
    else if (operator == "*") {
        hasil = A * B;
    }
    else if (operator == "/") {

        if (B == 0) {
            alert("Tidak bisa dibagi dengan nol!");
            return;
        }

        hasil = A / B;
    }

    document.getElementById("hasil").innerText = hasil;

    document.getElementById("keterangan").innerText =
        "Hasil dari " + A + " " + operator + " " + B;
}

function resetKalkulator() {

    document.getElementById("angkaA").value = "";
    document.getElementById("angkaB").value = "";

    document.getElementById("hasil").innerText = "0";

    document.getElementById("keterangan").innerText =
        "Masukkan angka terlebih dahulu";
}
