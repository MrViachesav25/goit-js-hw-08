
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = "videoplayer-current-time";

const onPlay = (data) => {
    const time = JSON.stringify(data.seconds);
    localStorage.setItem(LOCAL_KEY, time);
}

const restorePlayerPosition = () => {
    const currentTime = localStorage.getItem(LOCAL_KEY);
    if(currentTime) {
        player.setCurrentTime(Number(currentTime));
    }
}
player.on('timeupdate', throttle(onPlay, 1000));
restorePlayerPosition();

