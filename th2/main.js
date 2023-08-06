let item = [
    "Backpack",
    "MiBand watch",
    "Ring"
]
console.log(item);
let list = document.getElementById("list")
for (let i = 0; i < item.length; i++) {
    list.insertAdjacentHTML("beforeend", `<li>${item[i]}<button onclick="xoa(${i})">Remove</button></li>`)
}

function veListItem(item) {
    for (let i = 0; i < item.length; i++) {
        list.insertAdjacentHTML("beforeend", `<li>${item[i]}<button onclick="xoa(${i})">Remove</button></li>`)
    }
}
veListItem(item)

// console.log(list[0].children[1]);
// fo
// let mang = document.querySelector("ul")
// console.log(mang);

//xoa item test
// list.children[0].remove()
// list.children[1].remove()


//lay ra o input va nut add
let inputText = document.getElementById("input_text")
let btnAdd = document.getElementById("btn_add")
console.log(inputText)
console.log(btnAdd);;

//bat su kien cho nut add
btnAdd.addEventListener("click", () => {
    // console.log(inputText.value);
    item.push(inputText.value)
    list.innerHTML = ""
    veListItem(item)
    // list.insertAdjacentHTML("beforeend", `<li>${item[item.length - 1]}<button onclick="xoa(${item.length - 1})">Remove</button></li>`)
    inputText.value = ""
})

function xoa(vitri) {
    // console.log(vitri);
    item.splice(vitri, 1)
    list.innerHTML = ""
    veListItem(item)
    // for (let i = 0; i < item.length; i++) {
    //     list.insertAdjacentHTML("beforeend", `<li>${item[i]}<button onclick="xoa(${i})">Remove</button></li>`)
    // }
    console.log(item);
}