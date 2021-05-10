# JavaScript30
練習來自Wes Bos的JS30

<h2>Day 1 [Drum Kit]</h2>
按下指定按鍵會出現指定聲響，於按下同時產生動畫效果。

<h3>What's new?</h3>
<ol>
  <li> HTMLTag - kbd 為行內元素，表示狀態 <kbd>這是kbd</kbd></li>
  <li> 快速得知e.keycode的網站 --- http://keycode.info/ </li>
  <li> HTMLTag audio的使用，屬性: 
       <ul>
       <li> src-設定檔案URL</li>
       <li> preload - 當瀏覽者進入網頁時是否預先下載
            <br>(default-auto:PC預先下載/行動裝置不會:metedata-只下載meta;none-不預先下載)</li>
       <li> autoplay</li>
       <li> mediagrounp</li>
       <li> loop</li>
       <li> muted</li>
       <li> controls 出現播放控制器</li>
       </ul>
  </li>
  <li>認識ES6 Template String: 輕鬆進行字串相加
      <br> 使用重音符號框起來 ``，不需再特別使用加號/單引號/雙引號，直接用${變數}即可</li>
   <li> transitionend 事件 </li>
  <li> FlexBox 內的  Flex由三個屬性組合而成，依照先後順序分別是「flex-grow」、「flex-shrink」和「flex-basis」
    <br>如果 flex 只填了一個數值 ( 無單位 )，那麼預設就是以 flex-grow 的方式呈現，至於三個屬性的解釋如下：
    <br>flex-grow：數字，無單位，當子元素的 flex-basis 長度「小」於它自己在父元素分配到的長度，按照數字做相對應的「伸展」比例分配，預設值為 0，不會進行彈性變化，不可為負值，設為 1 則會進行彈性變化。
    <br>flex-shrink：數字，無單位，當子元素的 flex-basis 長度「大」於它自己在父元素分配到的長度，按照數字做相對應的「壓縮」比例分配，預設值為 1，設為 0 的話不會進行彈性變化，不可為負值。
    <br>flex-basis：子元素的基本大小，作為父元素的大小比較基準，預設值為 0，也因為預設值為 0，所以沒有設定此屬性的時候，會以直接採用 flex-grow 屬性，flex-basis 也可以設為 auto，如果設為 auto，就表示子元素以自己的基本大小為單位。。

<br>三個屬性可以分開設定，也可以合在一起用一個 flex 統一設定
<li>vh/vw/rem</li>
<li>JS箭頭函式</li>
<li>forEach</li>
</ol>

<h3>How to do?</h3>
這次的練習與 Key 有關，監聽元素並且使用keyup與keydown事件。
<br>加入自訂的屬性(data-key)於指定按鍵和相對應的audio上
<br>於css增加class=playing - 點擊時的動畫效果
<h4>事件:</h4>
<ul>
  <h5>監聽window，Keydown觸發PlaySound函式</h5>
  window.addEventListener('keydown',PlaySound,false);
<li>
  <br> function PlaySound(e){
  <br>const audio=document.querySelector(`audio[data-key="${e.keycode}"]`);//使用ES6 template string
  <br>if(!audio)return; //如果沒有相對應audio，stop the function from running all together
  <br>audio.play();//若有相對應之audio，play it.
  <br>}
  <br><bold>這時候會有一個問題:在一個音檔持續的秒數中，重複按同一按鍵時，聲音不會重複撥放，因此需要加入-點擊按鍵時，從新開始，也就是 currentTime = 0 </bold>
  <br>audio.currentTime = 0 ; //點擊時從0開始撥放
  <br><bold>接下來點擊時要將動畫加入</bold>
  <br>key.classList.add('playing')
  
  <br> function PlaySound(e){
  <br>const audio=document.querySelector(`audio[data-key="${e.keycode}"]`);//使用ES6 template string
  <br><bold> const key=document.querySelector(`.key[data-key="${e.keycode}"]`);</bold>
  <br>if(!audio)return; //如果沒有相對應audio，stop the function from running all together
  <br>audio.currentTime = 0 ;//點擊時從0開始撥放
  <br>audio.play();//若有相對應之audio，play it.
  <br>key.classList.add('playing')
  <br>}
  </li>
  <h5>TransitionEvent - RemoveTransition</h5>
  <li>
  <br>這時候又有個問題了!動畫執行後，沒有消失。因為執行的只有"加上效果"而已，這時候可以監聽transitionEvent - transitionend，類似clickEvent
  <br>這裡避免使用setTimeout，在css時已經設定transition秒數了，會重複設定。
  <br> const keys=document.querySelectorAll('.key');//選擇所有.key
  <br> keys.forEach(key=>key.addEventListener('transitionend';removeTransition));//當transition結束，removeTransition
  <br>function removeTransition(e){
  <br>if(e.propertyName !== 'transform') return;//如果不是transform就不要管它
  <br>this.classList.remove('playing');
  <br>}
  </li>
</ul>
