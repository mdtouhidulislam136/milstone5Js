
const div = document.getElementsByClassName('country-name')[0].innerHTML;

 console.log(div);

 const sections = document.querySelectorAll('section');
 for(const section of sections){
    section.style.color = 'red';
    section.style.border = '2px solid ';
    section.style.backgroundColor = 'green'
    

  
 }


 const placesContainer = document.getElementsByClassName('important-places');
 placesContainer.classList.add('text-center');










