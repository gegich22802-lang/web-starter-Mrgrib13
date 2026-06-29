document.addEventListener('DOMContentLoaded', () => {

const content = {
   about: `<div class="blog-post">
       <h2>Привет! Я Mrgrib13</h2>
       <p>Я создатель контента по Minecraft на YouTube. На этом сайте я делюсь своими проектами — от сложных приключенческих карт до анимаций по любимой игре.</p>
       <p>Здесь вы найдете информацию о моих картах, процессе их создания и сможете посмотреть мои анимации.</p>
       <p>А в реальности меня завут Никита, мне 15. Занимаюсь спортом,
Техквандо учит меня дисциплине, во время работы слушаю Funk, в моей голове три языка программирования (JS, Lua, C#) — мои главные инструменты, с помощью которых я оживляю логику. А в свободное время я превращаюсь в коллекционера: тканевые маски — мое сокровище.</p>
       </div>`,

   maps: `<div class="blog-post">
       <h2>Карты для Minecraft</h2>
       <p>Я создаю увлекательные карты для Minecraft, уделяя большое внимание сюжету и деталям.</p>
       <div class="gallery">
           <div class="map-card">
               <div style="background: linear-gradient(135deg, #5454D4, #7a7af0); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
                   🎮 Sweet Dreams Inc
               </div>
               <div class="map-info">
                   <h3 class="map-title">Sweet Dreams Inc</h3>
                   <p class="map-desc">Моя первая большая карта-хоррор. История о корпорации снов. Сейчас работаю над второй частью!</p>
               </div>
           </div>
           <div class="map-card">
               <div style="background: linear-gradient(135deg, #FF7143, #ff9a6d); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
                   🏰 Новая карта
               </div>
               <div class="map-info">
                   <h3 class="map-title">Приключение в замке</h3>
                   <p class="map-desc">Карта с элементами паркура и головоломок в старом замке.</p>
               </div>
           </div>
       </div>
   </div>`,

   animations: `<div class="blog-post">
       <h2>Анимации по Minecraft</h2>
       <p>Помимо карт, я занимаюсь созданием анимаций, оживляя мир Minecraft в новом формате.</p>
       <div class="gallery">
           <div class="map-card">
               <div style="background: linear-gradient(135deg, #FF6B6B, #ee5a24); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
                   🎬 фИЛЬМ: Изумрудный маршрут судьбы
               </div>
               <div class="map-info">
                   <h3 class="map-title">Это мой короткометражный фильм по Minecraft</h3>
                   <p class="map-desc">Он ещё не вышел из за нехватки озвучки</p>
               </div>
           </div>
           <div class="map-card">
               <div style="background: linear-gradient(135deg, #4ECDC4, #44a89f); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
                   🎬 Анимации для Youtybe
               </div>
               <div class="map-info">
                   <h3 class="map-title">Я делаю простенькие анимации</h3>
                   <p class="map-desc">www.youtube.com/@Mrgrib13</p>
               </div>
           </div>
       </div>
   </div>`,

   roblox: `<div class="blog-post">
       <h2>Карты для Roblox</h2>
       <p>Мои увлечения не ограничиваются только Minecraft! Я также создаю карты и проекты на движке Roblox.</p>
       <div class="gallery">
           <div class="map-card">
               <div style="background: linear-gradient(135deg, #e2df0e, #9ec418); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
                    Backrooms 💀
               </div>
               <div class="map-info">
                   <h3 class="map-title">Backrooms</h3>
                   <p class="map-desc">Сложный лабиринт с 5 уровними и боссом</p>
               </div>
           </div>
           <div class="map-card"><div style="background: linear-gradient(135deg, #2d3436, #636e72); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
                   Я не придумал 😔
               </div>
               <div class="map-info">
                   <h3 class="map-title">Тут ничего нет</h3>
                   <p class="map-desc">Пока нет</p>
               </div>
           </div>
       </div>
   </div>`
};

const app = document.getElementById('app');
const links = document.querySelectorAll('.header__list-link');
const header = document.querySelector('.header');

function showPage(pageId) {
   // Проверяем, есть ли такой контент
   if (content[pageId]) {
       app.innerHTML = content[pageId];
   } else {
       app.innerHTML = `<div class="blog-post"><h2>Страница в разработке</h2><p>Контент скоро появится!</p></div>`;
   }
   
   links.forEach(link => link.classList.remove('active'));
   const activeLink = document.querySelector(`.header__list-link[data-page="${pageId}"]`);
   if (activeLink) activeLink.classList.add('active');
   
   // Прокрутка к контенту
   setTimeout(() => {
       window.scrollTo({ top: header.offsetHeight + 20, behavior: 'smooth' });
   }, 50);
}

links.forEach(link => {
   link.addEventListener('click', function(e) {
      e.preventDefault();
      const pageId = this.getAttribute('data-page');
      showPage(pageId);
      history.pushState(null, '', `#${pageId}`);
   });
});

window.addEventListener('popstate', () => {
   const pageId = window.location.hash.replace('#', '') || 'about';
   showPage(pageId);
});

// Запускаем с about
const initialPage = window.location.hash.replace('#', '') || 'about';
showPage(initialPage);

});

// КОД ДЛЯ ТЕМЫ
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggleButton.textContent = '☀️';
} else {
    document.body.classList.remove('dark-theme');
    toggleButton.textContent = '🌙';
}

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = '🌙';
    }
});