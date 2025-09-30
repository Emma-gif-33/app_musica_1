export default {
    AudioController(playlist){
        this._nextSongs = playlist;
        this._actualSong = this._nextSongs.pop()
    },
    _lastSongs: [],
    _nextSongs: [],
    _actualSong: null,
    _controller: document.getElementById("media"),
    nextSong() {
        if(this._nextSongs.length !== 0){
            this._lastSongs.push(this._actualSong);
            this._actualSong = this._nextSongs.pop();
        }
    },
    prevSong() {
        if(this._lastSongs.length !== 0){
            this._nextSongs.push(this._actualSong);
            this._actualSong = this._lastSongs.pop();
        }
    },
    loadSong(){
        this._controller.src = this._actualSong.song_url;
    },
    playSong(action) {
        if (action == 'play'){
            this._controller.play();
        }else{
            this._controller.onpause()
        }
    }
}