import Scroll from './modules/scroll-suave.js';
const scroll = new Scroll('[data-menu="suave"] a[href^="#"]');
scroll.init();

if (window.matchMedia('(max-width:500px)').matches) {
  document.getElementById('agua').remove();
} 

if (window.matchMedia('(max-width:800px)').matches) {
  document.getElementById('br').remove();
} 