/**
 * ---------------------------------------------------------------------------------------------
 * Отмечаем активные ссылки
 * ---------------------------------------------------------------------------------------------
 *
 * @type {HTMLCollectionOf<Element>}
 */

let menuLinks = document.getElementsByClassName('menu-link');

for (let item of menuLinks) {
    if (document.location.pathname === item.getAttribute('href') || document.location.href === item.getAttribute('href')) {
        item.classList.add('active');
    }
}
