let t=document.getElementsByClassName("menu-link");for(let e of t)(document.location.pathname===e.getAttribute("href")||document.location.href===e.getAttribute("href"))&&e.classList.add("active");
