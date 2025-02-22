function getRandomNumber() {
    return Math.ceil(Math.random() * 20);
}

let num1 = getRandomNumber();
let num2 = getRandomNumber();
let num3 = getRandomNumber();
let num4 = getRandomNumber();
let num5 = getRandomNumber();

let artists = ["Cup Of Joe", "WIMY", "Earl Agustin", "Brent Faiyaz", "Clairo"];

document.getElementById("artist1").innerHTML = `<div class='artist-name'>${artists[0]}</div>${num1}`;
document.getElementById("artist2").innerHTML = `<div class='artist-name'>${artists[1]}</div>${num2}`;
document.getElementById("artist3").innerHTML = `<div class='artist-name'>${artists[2]}</div>${num3}`;
document.getElementById("artist4").innerHTML = `<div class='artist-name'>${artists[3]}</div>${num4}`;
document.getElementById("artist5").innerHTML = `<div class='artist-name'>${artists[4]}</div>${num5}`;

let maxNum = Math.max(num1, num2, num3, num4, num5);
let topArtists = [];

[num1, num2, num3, num4, num5].forEach((num, index) => {
    if (num === maxNum) {
        topArtists.push(artists[index]);
    }
});

document.getElementById("topArtist").textContent = topArtists.join(", ") + ` (${maxNum})`;

let totalMinutes = num2 * num3;
let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;
document.getElementById("spotifyTime").textContent = `${totalMinutes} mins (${hours} hr ${minutes} min)`;

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let generatedLetter = alphabet[num1 % 26];
document.getElementById("generatedLetter").textContent = generatedLetter;
