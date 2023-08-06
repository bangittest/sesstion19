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