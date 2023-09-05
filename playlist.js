"use strict";
class Musica {
    constructor(titulo, artista, duracao) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
    }
}
class Playlist {
    constructor() {
        this.musicas = [];
        this.reproduzindo = false;
        this.indeceAtual = 0;
    }
    adicionarMusica(musica) {
        this.musicas.push(musica);
    }
    reproduzir() {
        if (this.musicas.length > 0) {
            this.reproduzindo = true;
            return "Reproduzindo: " + this.musicas[this.indeceAtual].titulo + " - " + this.musicas[this.indeceAtual].artista;
        }
        else {
            return "A playlist está vazia";
        }
    }
    pausar() {
        if (this.reproduzindo == true) {
            this.reproduzindo = false;
            return "Música pausada";
        }
        else {
            return "Nenhuma música está sendo reproduzida";
        }
    }
    proxima() {
        if (this.musicas.length > 0) {
            this.indeceAtual = (this.indeceAtual + 1) % this.musicas.length;
            return this.reproduzir();
        }
        else {
            return "A playlist está vazia";
        }
    }
}
const musica1 = new Musica("Enchated", "Taylor Swift", 200);
const musica2 = new Musica("ETA", "New Jeans", 500);
const musica3 = new Musica("Killin' Me Good", "JIHYO", 300);
const minhaPlaylist = new Playlist();
minhaPlaylist.adicionarMusica(musica1);
minhaPlaylist.adicionarMusica(musica2);
minhaPlaylist.adicionarMusica(musica3);
console.log(minhaPlaylist.reproduzir());
console.log(minhaPlaylist.pausar());
console.log(minhaPlaylist.proxima());
console.log(minhaPlaylist.proxima());
console.log(minhaPlaylist.proxima());
