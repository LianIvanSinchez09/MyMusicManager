import { Album } from "./album"
import { Song } from "./song"

export let albums = [
    new Album([new Song(new Audio("../songs/dryhands.mp3"), "Dry Hands", "C418", "../imgs/dryhands.jpg"), 
    new Song(new Audio("../songs/haggstrom.mp3"), "Haggstrom", "C418", "../imgs/haggstrom.jpg"), 
    new Song(new Audio("../songs/wethands.mp3"), "Wet Hands", "C418", "../imgs/wethands.jpg")], "Minecraft", "C418", "../imgs/covers/minecraft.jpg", "Game Soundtrack"),

    new Album([
        new Song(new Audio("../songs/wewillrockyou.mp3"), "We Will Rock You", "Queen", "../imgs/covers/queen-newsoftheworld.jpeg"),
        new Song(new Audio("../songs/wearechampions.mp3"), "We Are The Champions", "Queen", "../imgs/covers/queen-newsoftheworld.jpeg"), new Song(new Audio("../songs/sheerheartattack.mp3"), "Sheer Heart Attack", "Queen", "../imgs/covers/queen-newsoftheworld.jpeg")
    ], "News of the World", "Queen", "../imgs/covers/queen-newsoftheworld.jpeg", "Rock"),

    new Album([
        new Song(new Audio("../songs/Crossroads.mp3"), "Crossroads", "Christopher Larkin", "../imgs/crossroads.jpg"),
        new Song(new Audio("../songs/Dirtmouth.mp3"), "Dirtmouth", "Christopher Larkin", "../imgs/dirtmouth.jpg"),
        new Song(new Audio("../songs/Enter Hallownest.mp3"), "Enter Hallownest", "Christopher Larkin", "../imgs/enterhallownest.jpg")
    ], "Hollow Knight", "Christopher Larkin", "../imgs/covers/hollowknight.jpeg", "Game Soundtrack"),

    new Album([
        new Song(new Audio("../songs/Wonderwall.mp3"), "Wonderwall", "Oasis", "../imgs/wonderwall.jpg"),
        new Song(new Audio("../songs/Don't Look Back In Anger .mp3"), "Don't Look Back in Anger", "Oasis", "../imgs/dontlookbackinanger.jpg"),
        new Song(new Audio("../songs/Champagne Supernova.mp3"), "Champagne Supernova", "Oasis", "../imgs/champagnesupernova.jpg")
    ], "What's the Story Morning Glory?", "Oasis", "../imgs/covers/oasis.jpeg", "Britpop")
]
