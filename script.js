onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// Ждем полной загрузки страницы
window.addEventListener('DOMContentLoaded', () => {
    const welcomeTitle = document.querySelector('.welcome');
    const blogBlock = document.getElementById('blog-animation-block');

    if (welcomeTitle && blogBlock) {
        // Слушаем событие окончания CSS-анимации у надписи Welcome!
        welcomeTitle.addEventListener('animationend', () => {
            // Как только Welcome появилась, активируем появление ссылки Blog
            blogBlock.classList.add('blog-visible');
        });
    }
});

