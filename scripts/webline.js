var links = [
    "https://hgouni.com",
    "https://veronicapim.github.io/"
];

function weblineWarp() {
    var randIdx = Math.floor(Math.random() * links.length);
    var link = links[randIdx];
    window.open(link, "_self");
}