import { initBoard } from './modules/board.js';
import { saveGame, loadGame } from './modules/save.js';
import { initAI } from './modules/ai.js';

initBoard();
initAI();

const musicBtn = document.getElementById('musicBtn');
const bgm = document.getElementById('bgm');

musicBtn.addEventListener('click', async () => {
    if(bgm.paused){
        await bgm.play();
        musicBtn.innerText = '🔇 靜音';
    }else{
        bgm.pause();
        musicBtn.innerText = '🔊 音樂';
    }
});

window.addEventListener('beforeunload', saveGame);

loadGame();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./service-worker.js');
}