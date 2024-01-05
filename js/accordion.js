"use strict";

document.querySelectorAll('.accordion-btn').forEach(function(el){
    const next = el.nextElementSibling
    const nextH = next.scrollHeight + 'px'
    next.style.overflow = 'hidden'
    next.style.transition = '0.5s'
    next.style.height = el.classList.contains("open") ? nextH : 0
    el.onclick = () => next.style.height = el.classList.toggle('open') ? nextH : 0
})