//dom-document object Model
//truy cap 1 phan tu dom bang js
//truy cap qu id
document.getElementById("table")
console.log({ table });
//truy cap thong qua class
let tds = document.getElementsByClassName("td")
console.log(tds);

//truy cap thong qua ten the
let trs = document.getElementsByTagName("tr")
console.log(trs);


//su dung bo chon css
let td = document.querySelectorAll("td.td")
console.log(td);
let a = document.querySelector("td.thg")
console.log(a);
let b = document.querySelector("tbody")
console.log(b);


//cach di chuyen vi tri phan tu
//di chuyen ve node cha
// let p = document.querySelector(".box>p")
// console.log(p.nextElementSibling);
// let box = document.querySelector(".box>p").parentNode
// console.log(box);
// let h = h2.parentNode
// console.log(h);

// let tr2 = document.querySelector("tr").lastElementChild
// console.log(tr2);



let box = document.querySelector(".btn")
console.log(box);


box.addEventListener("dbclick", function () {
    alert("ban vua mousedown vao the div")
})

window.addEventListener("keydown", function (e) {
    console.log("ban vua bam" + e.keyCode);
})