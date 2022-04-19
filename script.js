let menuBtn = document.getElementById("collapseBtnId");
let menu = document.getElementById("navmenuitemsid");

menuBtn.onclick = () => {
    menu.classList.toggle("open");
}

menu.onclick = () => {
    console.log("alo");
}