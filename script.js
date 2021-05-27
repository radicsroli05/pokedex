var tomb = [
    ["Pikachu", "", 35, 55, 40, 90],
    ["Ivysaur", "", 45, 49, 49, 45],
    ["Vanusaur", "", 10, 52, 54, 75],
];

var szamlalok1 = 0;
var szamlalok2 = 0;
var nev1 = document.getElementById("nev1");
var nev2 = document.getElementById("nev2");
var kep1 = document.getElementById("kep1");
var kep2 = document.getElementById("kep2");
var csata = document.getElementById("csata");
var szamok = document.querySelectorAll("#szam");

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");

var stats = document.querySelectorAll("#statbar");
var osszesen = document.querySelectorAll("#total #szam");

function reset() {
    if (szamlalok1 < 0) szamlalok1 = tomb.length - 1;
    else if (szamlalok1 >= tomb.length) szamlalok1 = 0;
    if (szamlalok2 < 0) szamlalok2 = tomb.length - 1;
    else if (szamlalok2 >= tomb.length) szamlalok2 = 0;
}

function valtas() {
    reset();
    var c1 = tomb[szamlalok1];
    var c2 = tomb[szamlalok2];
    nev1.innerHTML = c1[0];
    nev2.innerHTML = c2[0];
    for (let i = 0; i < 4; i++) {
        szamok[i].innerHTML = c1[2 + i];
        szamok[4 + i].innerHTML = c2[2 + i];
        stats[i].style.width = c1[2 + i] + 20 + "px";
        stats[4 + i].style.width = c2[2 + i] + 20 + "px";
    }
    osszesen[0].innerHTML = c1[2] + c1[3] + c1[4] + c1[5];
    osszesen[1].innerHTML = c2[2] + c2[3] + c2[4] + c2[5];
}

function j1() {
    szamlalok1++;
    valtas();
}

function b1() {
    szamlalok1--;
    valtas();
}

function j2() {
    szamlalok2++;
    valtas();
}

function b2() {
    szamlalok2--;
    valtas();
}

