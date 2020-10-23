let kotak = [""]
let container = document.getElementById("container"); //cara mengikat
container.innerHTML = '<span onclick="hitung()" class="dot"></span>' 
container.innerHTML += '<span onclick="hitung()" class="dot"></span>' 
container.innerHTML += '<br>' 
container.innerHTML += '<span onclick="hitung()" class="dot"></span>' 
container.innerHTML += '<span onclick="hitung()" class="dot2"></span>' 

let isi = 0
function hitung () {
    let scoore = document.getElementById("scoore")
    isi++
    scoore.innerHTML = isi
}

let waktu = document.getElementById("Time")
Time.innerHTML = menit
