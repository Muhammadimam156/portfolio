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
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



// ================================= SHOW SECTION ACTIVE LINK ==========================

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


// ======================================SCROLL REVEAL ANIMATION ===============================