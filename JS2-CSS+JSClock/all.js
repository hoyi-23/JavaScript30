const secHand = document.querySelector('.sechand'); //取得秒針
const minHand = document.querySelector('.minhand');
const hrHand = document.querySelector('.hourhand');
function setDate(){
//現在時間
    const now = new Date();
//秒針
const sec = now.getSeconds(); //抓取現在的秒數
const secDegrees = (sec*6)+90; //圓圈共360度，共60秒，一秒跑360/60=6度；這邊算出每個秒數應該要轉動的度數
secHand.style.transform = `rotate(${secDegrees}deg)`;
console.log(sec)
//分針
const min = now.getMinutes();
const minDegrees = (min*6)+90;
minHand.style.transform=`rotate(${minDegrees}deg)`;
//時針
const hour = now.getHours();
const hrDegrees = (hour*30)+90;
hrHand.style.transform = `rotate(${hrDegrees}deg)`;
//動畫問題解決
if(secDegrees == 90){
    secHand.style.transition = `all 0s`
    }else{
        secHand.style.transition = `all 0.5s`
    };
};
setInterval(setDate,1000);