// const container = document.getElementById(`list`);
// for (let i = 0; i < 3; i++) {
//     container.insertAdjacentHTML(`beforebegin`, `<li>${i}</li>`)
// container.insertAdjacentHTML(`afterbegin`, `<li>${i}</li>`)
// container.insertAdjacentHTML(`afterend`, `<li>${i}</li>`)
// container.insertAdjacentHTML(`beforeend`, `<li>${i}</li>`)
// }

const collection = document.getElementsByTagName("li");
console.log(collection);
let a = document.querySelectorAll("li")
console.log(a);
const element = document.getElementById("div-02");
for (let i = 0; i < element.clientHeight; i++) {
    element.remove();
}
// Removes the div with the 'div-02' id


// Hàm callback cho button1
function handleClickButton1(e) {
    console.log(e.target);
}

// Hàm callback cho button2
function handleClickButton2(e) {
    console.log(e.target);
}

// Bắt sự kiện click từ 2 nút khác nhau
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", handleClickButton1);
button2.addEventListener("click", handleClickButton2);

