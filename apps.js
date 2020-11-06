/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navbar = document.querySelector('#navbar__list');//we can also use document.getElementById('navbar__list')
const sections = document.querySelectorAll('section'); 


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

    

  function buildmenu_nav(){
    let box = document.createDocumentFragment();
    for (section of sections){
        let new_li_element = document.createElement('li');
        let new_anchor = document.createElement('a');
        new_anchor.innerText = section.getAttribute('data-nav');
        new_anchor.setAttribute('data-nav',section.id);
        new_li_element.setAttribute('href', section.getAttribute('id'));
        new_li_element.classList.add('menu__link');
        new_li_element.appendChild(new_anchor);
        box.appendChild(new_li_element);
    
    }
  navbar.appendChild(box);
  navbar.style.backgroundColor = 'skyblue';
  }
 

function scrolling (){document.querySelectorAll('.menu__link').forEach(link=>{
  link.addEventListener('click',function (event){
       event.preventDefault();
      // console.log(this.getAttribute('href'));
         let destination = document.querySelector(`#${this.getAttribute('href')}`)
       // console.log(destination)
        destination.scrollIntoView( {behavior:'smooth',block:'center'});
    });
  });
}

  
function getPosition (sec)  {
      const position =Math.floor(sec.getBoundingClientRect().top);/* This function returns the size and the position 
      of the element to the nearest unit (remove decimal)*/
      return position ;

}
  //in this  function we need to add class (active) to section (give the section specific color when we reach it)
function AddActivation (condition , sec) {  
      if(condition){
       sec.classList.add('your-active-class'); 
        //when we reach the active give section any color (ex.skyblue)  and make fontweight bold
        sec.style.backgroundColor='#AE45E2';
        sec.style.fontWeight = 'bold';
      }
}
     //in this  function we need to remove class (active) to section (remove the given specific color of section to its default color in css) 
     //and return font weigth to normal
function RemoveActivation (sec)  {  
      sec.classList.remove('your-active-class');  
          /* When you leave a specific section , its background color converts to its default color */
      sec.style.cssText =  'background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)';
      sec.style.fontWeight = 'normal';
  
}
  
  
function activateSection() {
    for (const section of sections) 
     { 
            const element = getPosition(section); 

            function viewPort() {
              if(element < 100 && element >= -100){//section in view activate it by calling AddActivation
                return true;
              }
              else{
                return false;
                  }
            }
            //call RemoveActivation to remove active section
            RemoveActivation(section);  
            //call addActivation to add active section acorrding to the viewPort
            AddActivation(viewPort(),section); 
     }
}
  
 
buildmenu_nav(); 
scrolling(); 
  

  
  // Set sections as active
  window.addEventListener('scroll',activateSection); 