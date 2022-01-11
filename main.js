/*
Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post,
numero progressivo da 1 a n nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
*/

const output = document.querySelector('.posts-list');


const postList = [

    {
        idPost: 1,
        nomeAutore: Gino,
        fotoAutore: https://i.picsum.photos/id/152/300/300.jpg?hmac=dm_GPki-2zVGdmmOTDJdIQzItJi7zC0gbCSSw4N2Hxk,
        data: 01-20-2021,
        testoPost: bla bla bla bla,
        immagine: https://i.picsum.photos/id/82/300/300.jpg?hmac=VnMN7sxSNePsckkp3Rql5brpsqFiYq3Hb1S-RlIjkd0,
        numeroLikes: 21
    },

    {
        idPost: 2,
        nomeAutore: Pino,
        fotoAutore: https://i.picsum.photos/id/671/300/300.jpg?hmac=nGer7nNBNoX4ic5DUHwo4IE-CEaSanMUbMiGSS6C7NU,
        data: 12-23-2021,
        testoPost: bla bla bla blabla bla bla bla,
        immagine: https://i.picsum.photos/id/244/300/300.jpg?hmac=WhgpTcOK0NsI1PsAfSPNW3PbSiAngouMivX8tSmqWxw,
        numeroLikes: 9
    },

    {
        idPost: 3,
        nomeAutore: Tino,
        fotoAutore: https://i.picsum.photos/id/757/300/300.jpg?hmac=FNPB7HNtB37n2Phx2wLfYmHdFFfxHX18YwQZV-bdWuA,
        data: 09-13-2021,
        testoPost: bla bla bla blabla bla bla blabla bla bla bla,
        immagine: ,
        numeroLikes: 88
    },
];
