/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)



// =============================EMAIL JS========================
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

      const sendEmail =(e) =>{
        e.preventDefault()
  
      // serviceID - templateID - #form - publickey
      emailjs.sendForm('service_vm75swr','template_2pa57bm','#contact-form','TE1xvpAM0y-YDYfbY')
      .then(() =>{
        //    show sent message
        contactMessage.textContent='Message Sent Succesfully ✅'

        // Remove message after five second
        setTimeout(()=>{
            contactMessage.textContent=''
        },5000)

        // Clear input field
        contactForm.reset() 
      })

      }

      contactForm.addEventListener('submit', sendEmail)
// ================================ SHOW SCROLL UP ==============================



// ================================= SHOW SECTION ACTIVE LINK ==========================



// ======================================SCROLL REVEAL ANIMATION ===============================