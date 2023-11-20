let autor1 = document.getElementById("autor1");
let autor2 = document.getElementById("autor2");
let autor3 = document.getElementById("autor3");

function showautor1() {
    autor1.style.display = `flex`;
    autor2.style.display = `none`;
    autor3.style.display = `none`;
}
function showautor2() {
    autor2.style.display = "flex";
    autor1.style.display = "none";
    autor3.style.display = "none";
}
function showautor3() {
    autor3.style.display = "flex";
    autor1.style.display = "none";
    autor2.style.display = "none";
}