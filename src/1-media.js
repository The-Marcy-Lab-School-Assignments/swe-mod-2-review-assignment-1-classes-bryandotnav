// Problem 1: Inheritance and Polymorphism - Media Player
// Implement your MediaItem, Song, Podcast, and Audiobook classes below
class MediaItem {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
    }
    play() {
        return `Playing: ${this.title}`;
    }
    getFormattedDuration() {
        return new Date(this.duration);
    }
}

class Song extends MediaItem{
    constructor(title, duration, artist) {
        super(title, duration);
        this.artist = artist;
    }
    play() {
        return `Playing: ${this.title} by ${this.artist}`
    }
}

class Podcast extends MediaItem {
    constructor(title, duration, host, episodeNumber) {
        super(title, duration);
        this.host = host;
        this.episodeNumber = episodeNumber;
    }
    play() {
        return `Playing: ${this.tile} with host ${this.host}, Episode ${this.episodeNumber}`
    }
}

class Audiobook extends MediaItem {
    constructor(title, author, narrator) {
        super(title);
        this.author = author;
        this.narrator = narrator;
    }
    play() {
        return `Playing: ${this.tile} by ${this.author}, narrated by ${this.narrator}`
    }
}

const test = () => {
    const song = new Song("Bohemian Rhapsody", 354, "Queen");
    const podcast = new Podcast("Tech Talk", 2400, "Jane Smith", 42);
    const audiobook = new Audiobook("The Great Gatsby", 32400, "F. Scott Fitzgerald", "Jake Gyllenhaal");
  
    const mediaLibrary = [song, podcast, audiobook];
  
    mediaLibrary.forEach(media => {
      console.log(media.play());
    })

}

module.exports = { MediaItem, Song, Podcast, Audiobook };

