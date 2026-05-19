export function saveGame(){
    const data = {
        time:Date.now()
    };

    localStorage.setItem('super-sales-save', JSON.stringify(data));
}

export function loadGame(){
    const save = localStorage.getItem('super-sales-save');

    if(save){
        console.log('已讀取存檔');
    }
}