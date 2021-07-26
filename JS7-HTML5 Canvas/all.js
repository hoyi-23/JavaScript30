const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');  // 取得 Canvas 的渲染環境及其繪圖函數

canvas.width = window.innerWidth*0.5;
canvas.height = window.innerHeight*0.5;

ctx.strokeStyle = '#333';  // 筆觸顏色
ctx.lineJoin = 'round';  // 兩條線交匯處產生 "圓形" 邊角
ctx.lineCap = 'round';  // 筆觸預設為 "圓形"
ctx.lineWidth = 5;  // 筆頭寬度

let isDrawing = false;  // 是否 mousedown下筆狀態

/* 起點座標 */
let lastX = 0;
let lastY = 0;

/*--- Event binding ---*/
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true; 
    [lastX, lastY] = [e.offsetX, e.offsetY]; // 設定起始點
});

canvas.addEventListener('mousemove', draw); 

//讓筆觸大小改變
const sizing=document.querySelectorAll('.sizeCircle');

sizing.forEach(size => size.addEventListener('click',changeSize));

//讓顏色改變
const colorInput=document.querySelector('.color');
const color = colorInput.value;

colorInput.addEventListener('change',changeColor);

//erase all
const erase = document.querySelector('.erase');
erase.addEventListener('click',eraseAll);

/*--- Event binding end---*/


// 繪製函數；在 mousemove 的時候使用
function draw(e) {
    if(!isDrawing) return;  // 沒有允許繪製即退出

    /* 繪製路線 Setting */
    ctx.beginPath();  // 產生一個新路徑，產生後再使用繪圖指令來設定路徑。
    ctx.moveTo(lastX, lastY);  // 設定起點
    ctx.lineTo(e.offsetX, e.offsetY);  // 設定終點
    ctx.stroke();  // 依照設定開始繪製

    [lastX, lastY] = [e.offsetX, e.offsetY];  // 位置更新
}
//changeSize
function changeSize(e){
    const clickSize = e.target.dataset.size;
    return ctx.lineWidth = clickSize;
}

//changeColor
function changeColor(e){
    const clickColor = e.target.value;
    return ctx.strokeStyle = clickColor;
}

//erase all
function eraseAll(e){
    e.preventDefault();
    return ctx.clearRect(0, 0, canvas.width, canvas.height);
}