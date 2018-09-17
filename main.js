var links = [
    "https://soundcloud.com/digitalmole/toto-africa",
    "https://soundcloud.com/digitalmole/2a-1",
    "https://soundcloud.com/digitalmole/what-is-true-pain",
    "https://soundcloud.com/digitalmole/luigi-ahoowaaoough",
    "https://soundcloud.com/digitalmole/world-bowser-diy-edition",
    "https://soundcloud.com/digitalmole/mario-and-green-mario-superstar-saga-diy-edition",
    "https://soundcloud.com/digitalmole/arms-diy-edition",
    "https://soundcloud.com/digitalmole/i-only-use-my-phone-for-pokemon",
    "https://soundcloud.com/digitalmole/hey-now-youre-a-grand-dad",
    "https://youtu.be/j3dUVVAA5Lg",
    "https://youtu.be/UGBWFeqeSpA",
    "https://youtu.be/p4jL5_jv2G4",
    "https://youtu.be/z7hMq6Z2vFA",
    "https://youtu.be/81UbuMpKyh4",
    "https://youtu.be/qBoRrQkSpus",
    "https://youtu.be/OzOj69ToArY",
    "https://youtu.be/hGtpFVoyZOI",
    "https://youtu.be/EOAn25lXLtk",
    "https://youtu.be/d-ntibqlewg",
    "https://youtu.be/T2wJikrc4fM",
    "https://youtu.be/5XVN1ks3534",
    "https://youtu.be/WoWMBj4K5p8",
    "https://youtu.be/CRDaRAyXYjg",
    "https://youtu.be/bu9Qmj3d4yw",
]

function getLink() {
    var link = links[Math.floor(Math.random(1) * links.length)];
    document.getElementById("surpriseButton").href = link;
}