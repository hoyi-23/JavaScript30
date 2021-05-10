# JavaScript30
練習來自Wes Bos的JS30

<h2>Day 1 [Drum Kit]</h2>
按下指定按鍵會出現指定聲響，於按下同時產生動畫效果。

<h3>What's new?</h3>
<ol>
  <li> HTMLTag - kbd 為行內元素，表示狀態 <kbd>這是kbd</kbd></li>
  <li> 快速得知e.keycode的網站 --- http://keycode.info/ </li>
  <li> HTMLTag audio的使用，屬性: 
        <br>1. src-設定檔案URL
        <br>2. preload - 當瀏覽者進入網頁時是否預先下載
                <br>(default-auto:PC預先下載/行動裝置不會:metedata-只下載meta;none-不預先下載)
        <br>3. autoplay
        <br>4. mediagrounp
        <br>5. loop
        <br>6. muted
        <br>7. controls 出現播放控制器
    <li>認識ES6 Template String:
      <br>
</ol>

<h3>How to do?</h3>
這次的練習與 Key 有關，監聽元素並且使用keyup與keydown事件。
加入自訂的屬性(data-key)於指定按鍵和相對應的audio上
於css增加class=playing
<ul>事件:
<li>監聽window，Keydown觸發PlaySound函式
  <br> PlaySound:
  <br> 1. 查看是否有audio的data-key與所按的按鍵相符
          <br>const audio = document.querySelector(`audio[data-key=${e.keycode}]`); ---這裡使用ES6 template string
</ul>
