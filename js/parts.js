'use strict';

{
    const $hdr_main = document.getElementById('hdr_main');
    $hdr_main.insertAdjacentHTML('afterbegin' , `

    <link rel="apple-touch-icon" sizes="180x180" href="../../img/etc/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/x-icon" href="../../img/etc/favicon.ico">
  <nav id='nav'>
    <div class="box" id="makeImg"></div>
    <a href="../../index.html"><img src="../../img/etc/logo.png"width="auto" height="100vh" alt="ホーム"></a>
    <ul class="nav-links">
      <li><a href="../../pages/Tavern/Tavern-Home.html">酒場情報</a></li>
      <li><a href="../../pages/Pirate King Adventures/PKA-Home.html">海賊王への軌跡</a></li>
      <li><a href="../../pages/Treasure Map/TM-Home.html">トレジャーマップ</a></li>
      <li><a href="../../pages/Kizuna Clash/KC-Home.html">絆決戦</a></li>
      <li><a href="../../pages/Events/Events-Home.html">イベント</a></li>
    </ul>
    <div class="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>

  <div class="siteLink">
    <a href="https://twitter.com/1yoccccci7" target="_blank"> <img src="../../img/etc/X-logo-black.png" alt="X" width="50" height="auto"></a>
    <a href="https://www.youtube.com/channel/UCrW2L9sQW8TVwfrxz-fjXHA" target="_blank"> <img src="../../img/etc/youtube-logo.png" alt="Youtube" width="60" height="auto"></a>
  </div>
`)
}

// const $hdr_main = document.getElementById('hdr_main');
// window.addEventListener('scroll' , () => {
//   let scrollY = window.scrollY;
//   if (200 < scrollY) {
//     $hdr_main.classList.add('on');
//   }else{
//     $hdr_main.classList.remove('on');
//   }
//   console.log(scrollY);
//   });




