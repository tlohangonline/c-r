// let hero = document.getElementById('hero');
let hero = document.getElementById('hero');
window.addEventListener('load', ()=> {
// alert('loaded')
// let hero = document.getElementById('hero');
hero.style.backgroundPosition = 'top';
// changing background images by mouseover events
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let description = document.getElementById('description');
// BOX 1
box1.addEventListener('mouseover', function(){
hero.style.background = "linear-gradient(rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.7)), url('pexels-los-muertos-crew-8853501.jpg')";
hero.style.backgroundRepeat = "no-repeat";
hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "bottom left";
description.innerText = "Industrial engineering";
})
box1.addEventListener('mouseout', function(){
hero.style.background = "linear-gradient(rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.4)), url('azadi-tower-6974106_1920.jpg')";
hero.style.backgroundRepeat = "no-repeat";
hero.style.backgroundSize = "cover";
description.innerText = "Choose engineering options to see quotes.";
hero.style.backgroundPosition = "top";
})
// BOX 2
box2.addEventListener('mouseover', function(){
hero.style.background = "linear-gradient(rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.7)), url('pexels-nishant-aneja-3970342.jpg')";
hero.style.backgroundRepeat = "no-repeat";
hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "bottom left";
description.innerText = "Electrical engineering";
})
box2.addEventListener('mouseout', function(){
hero.style.background = "linear-gradient(rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.4)), url('azadi-tower-6974106_1920.jpg')";
hero.style.backgroundRepeat = "no-repeat";
hero.style.backgroundSize = "cover";
description.innerText = "Choose engineering options to see quotes.";
hero.style.backgroundPosition = "top";
// BOX 3
box3.addEventListener('mouseover', function(){
hero.style.background = "linear-gradient(rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.7)), url('pexels-photoscom-93400.jpg')";
hero.style.backgroundRepeat = "no-repeat";
hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "bottom left";
description.innerText = "Civil engineering";
})
box3.addEventListener('mouseout', function(){
hero.style.background = "linear-gradient(rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.4)), url('azadi-tower-6974106_1920.jpg')";
hero.style.backgroundRepeat = "no-repeat";
hero.style.backgroundSize = "cover";
description.innerText = "Choose engineering options to see quotes.";
hero.style.backgroundPosition = "top";
})
// BOX 4
box4.addEventListener('mouseover', function(){
hero.style.background = "linear-gradient(rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.7)), url('pexels-pixabay-236060.jpg')";
hero.style.backgroundRepeat = "no-repeat";
hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "bottom left";
description.innerText = "Mining engineering";
})
box4.addEventListener('mouseout', function(){
hero.style.background = "linear-gradient(rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.4)), url('azadi-tower-6974106_1920.jpg')";
hero.style.backgroundRepeat = "no-repeat";
hero.style.backgroundSize = "cover";
description.innerText = "Choose engineering options to see quotes.";
hero.style.backgroundPosition = "top";
})
})
})