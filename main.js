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

const output = document.querySelector(".posts-list");

const postList = [
  {
    idPost: 1,
    nomeAutore: "Gino",
    fotoAutore:
      "https://i.picsum.photos/id/667/300/300.jpg?hmac=o4EA0jGx7AwD7D5-ucGi474kmn2fHAuAKU_Ouog8sT4",
    data: "01-20-2021",
    testoPost: "bla bla bla bla",
    immagine:
      "https://i.picsum.photos/id/82/300/300.jpg?hmac=VnMN7sxSNePsckkp3Rql5brpsqFiYq3Hb1S-RlIjkd0",
    numeroLikes: 21,
    fotoProfiloBase:
      "https://www.amoreaquattrozampe.it/wp-content/uploads/2020/05/curiosit%C3%A0-sul-panda.jpg",
  },

  {
    idPost: 2,
    nomeAutore: "Pino",
    fotoAutore:
      "https://i.picsum.photos/id/671/300/300.jpg?hmac=nGer7nNBNoX4ic5DUHwo4IE-CEaSanMUbMiGSS6C7NU",
    data: "12-23-2021",
    testoPost: "bla bla bla blabla bla bla bla",
    immagine:
      "https://i.picsum.photos/id/244/300/300.jpg?hmac=WhgpTcOK0NsI1PsAfSPNW3PbSiAngouMivX8tSmqWxw",
    numeroLikes: 9,
    fotoProfiloBase:
      "https://www.amoreaquattrozampe.it/wp-content/uploads/2020/05/curiosit%C3%A0-sul-panda.jpg",
  },

  {
    idPost: 3,
    nomeAutore: "Tino",
    fotoAutore: "",
    data: "09-13-2021",
    testoPost: "Solo bla bla bla. Minimal.",
    immagine: "",
    numeroLikes: 88,
    fotoProfiloBase:
      "https://www.amoreaquattrozampe.it/wp-content/uploads/2020/05/curiosit%C3%A0-sul-panda.jpg",
  },
];

/*
Milestone 2
Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
*/

// ciclo all'interno dell'array i singoli post
for (let i = 0; i < postList.length; i++) {
  const singlePost = postList[i];

  // se l'utente non seleziona nessuna immagine profilo allora viene utilizzata l'immagine di un panda
  // inserita come valore della proprietà foto profilo base
  if (singlePost.fotoAutore === "") {
    output.innerHTML += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${singlePost.fotoProfiloBase}" alt="${singlePost.nomeAutore}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${singlePost.nomeAutore}</div>
                    <div class="post-meta__time">${singlePost.data}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${singlePost.testoPost}</div>
        <div class="post__image">
            <img src="${singlePost.immagine}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${singlePost.numeroLikes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `;
  } else {
    output.innerHTML += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${singlePost.fotoAutore}" alt="${singlePost.nomeAutore}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${singlePost.nomeAutore}</div>
                    <div class="post-meta__time">${singlePost.data}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${singlePost.testoPost}</div>
        <div class="post__image">
            <img src="${singlePost.immagine}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${singlePost.numeroLikes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `;
  }
}
