export function initBoard(){
    const board = document.getElementById('board');

    for(let i=0;i<24;i++){
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.animate([
            { transform:'scale(0)' },
            { transform:'scale(1)' }
        ],{
            duration:300,
            delay:i*30,
            fill:'forwards'
        });

        board.appendChild(tile);
    }
}