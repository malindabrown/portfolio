const[current, imgs, opacity] = [
   document.querySelector('#current'), document.querySelectorAll('.imgs img'),
   0.8 
];

// Set First img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imageClick));

function imageClick(e){
   // Remove Opacity
   imgs.forEach(img => (img.style.opacity = 1));

   // Change current image to src of clicked image
   current.src = e.target.src;

   // Add Fade-in Class
   current.classList.add('fade-in');

   // Remove Fade-In Class after .5 seconds
   setTimeout(() => current.classList.remove('fade-in'), 500);

   // Change the opacity to opacity var
   e.target.style.opacity = opacity;
   
}