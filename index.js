////
const stul = prompt(`Ismingizni kiriting`)
if (stul > "") {
    alert(`salom ` + stul)
} else (
    alert(`Soralgan malumotni kiritishni unutmang`)
)
////
const bad1 = document.querySelector(`#nepit1`);
const buttonbosilganda1 = function () {
    const qurilish = [`Banan  `, `Uzum  `, `Kivi  `, `Torvuz  `, `Qovun  `];
    console.log(qurilish);
    alert(qurilish);
};
nepit1.addEventListener(`click`, buttonbosilganda1);
////
const bad2 = document.querySelector(`#nepit2`);
const buttonbosilganda2 = function () {
    const daraxt = function () {
        const bark = prompt(`Nima olishini xoxlaysiz`);
        console.log(bark)
        alert(bark)
    }
    daraxt();
}
nepit2.addEventListener(`click`, buttonbosilganda2);
//// 
const bad3 = document.querySelector(`#nepit3`);
const buttonbosilganda3 = function () {
    const fikr = function () {
        const goya = prompt(`yangi saytimmiz xaqida fikrinngiz`)
        console.log(goya);
        alert(goya)
    }
    fikr()
}
nepit3.addEventListener(`click`, buttonbosilganda3);