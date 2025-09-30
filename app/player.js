import audioController from "../domain/audioController";
import createPlaylist from "../utils/playlist";

export default{
    _progress__bar: document.getElementById("progress"),
    _play_button: document.getElementById("play"),
    _last_btn: document.getElementById("lastest"),
    _forward_btn: document.getElementById("forward"),
    _audioController: audioController,
    Player(songs){
        const media_controller = document.getElementById("media");
        const playlist = createPlaylist(songs, null);
        this._audioController.AudioController(playlist, media_controller);
    },

    evenListeners(){
        this.audioController._audioController.addEventListener('timeupdate', function(){
            progress_value = (player._audioController.currentTime / player._audioController.duration) * 100;
            player._progress__bar.value = progress_value;
        });
        this._progress__bar.addEventListener('input', function(){
            player.audioController.controller.currentTime = 
                (this.value / 100)*player._audioController.controller.duration;
        });
        this._progress__bar.addEventListener('click', function(){
            audioController.nextSong();
        });
        this._last_btn.addEventListener('click', function(){
            audioController.prevSong();
        });
        this._play_button.addEventListener('click', function(event){
            player._audioController.playPause(event.target.classList[0]);
        });
        this._audioController._controller.addEventListener('loadedmetadata', function(){
            player._progress__bar.value = 0;
        });
    }
}

