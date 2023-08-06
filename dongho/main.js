// Bai_Tap DOM 2
// let gio = document.getElementById("gio")
// let phut = document.getElementById("phut")
// let giay = document.getElementById("giay")

// let thoiGian;
// sau 1s thuc hien lai viec gan thoi gan

// let idClock = setInterval(() => {
//     thoiGian = new Date()
//     gio.innerHTML = thoiGian.getHours(); // 17
//     phut.innerHTML = thoiGian.getMinutes(); // 25
//     giay.innerHTML = thoiGian.getSeconds(); //12
// }, 1000)

// let idChao = setInterval(() => {
//     console.log("xin chao");
// }, 2000)

// let idMau = setInterval(() => {
//     let mau = 100 + Math.floor(Math.random() * 899)
//     console.log(mau);
//     document.getElementById("anh_nen_1").style.background = `#${mau}`
// }, 2000)

// function stopClock() {
//     clearInterval(idClock)
// }

// function stopChao() {
//     clearInterval(idChao)
// }

// function stopMau() {
//     clearInterval(idMau)
// }

// ==================================================================
let gio = document.getElementById("gio2")
let phut = document.getElementById("phut2")
let giay = document.getElementById("giay2")
let diem = document.getElementById("diem")

let gioBanDau = 0;
let phutBanDau = 0;
let giayBanDau = 1;
let diemBanDau = 0;

gio.innerHTML = gioBanDau;
phut.innerHTML = phutBanDau;
giay.innerHTML = giayBanDau;

let id

id = setInterval(() => {

    if (giayBanDau == 0) {
        giayBanDau = 59
        phutBanDau--
    } else {
        giayBanDau--
    }

    if (giayBanDau == 0 && phutBanDau == 0 && gioBanDau == 0) {
        clearInterval(id)
    }

    gio.innerHTML = gioBanDau;
    phut.innerHTML = phutBanDau;
    giay.innerHTML = giayBanDau;
}, 1000)



let ga = document.getElementById("ga")

ga.addEventListener("mouseover", () => {
    ga.style.border = `1px solid blue`
})

ga.addEventListener("mouseout", () => {
    ga.style.border = `1px solid black`
})

ga.addEventListener("click", () => {
    diemBanDau += 10
    diem.innerHTML = diemBanDau
    ga.style.display = "none"
})

let kichThuoc
setInterval(() => {
    ga.style.display = "block"
}, 3000)