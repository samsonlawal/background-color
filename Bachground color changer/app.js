function green() {
    document.body.style.backgroundColor = "darkseagreen";
    document.getElementById("para").style.color = "white"
}

function pink() {
    document.body.style.backgroundColor = "deeppink";
    document.getElementById("para").style.color = "white"

}

function gray() {
    document.body.style.backgroundColor = "gainsboro";
    document.getElementById("para").style.color = "purple";

}

function gold() {
    document.body.style.backgroundColor = "gold";
    document.getElementById("para").style.color = "purple";
    

}

function purple() {
    document.body.style.backgroundColor = "mediumpurple";
    document.getElementById("para").style.color = "white"

}

function black() {
    document.body.style.backgroundColor = "black";
    document.getElementById("para").style.color = "gray"
    document.getElementById("head").style.color = "white"


}

function random() {
    document.body.style.backgroundColor = randy();

}

function randy() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

