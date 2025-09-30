export default{
    _img: document.getElementById(),
    _title: document.getElementById(),
    _artist: HTMLElement, 
    Interface(imgElement, titleElement, artistElement){
        this._img = imgElement;
        this._title = titleElement;
        this._artist = artistElement;
    },
    loadSong(song){
        this._img.src = song.caratula;
        this._title.innerText = now.name;
        this._artist.innerText = now.artist_name;
    }
}