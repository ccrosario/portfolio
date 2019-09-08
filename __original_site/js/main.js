///////////////// open & close variables \\\\\\\\\\\\\\\\\\\\\\\

	var clickedElement,
		clickedElementId,
		currentElementId,
		modals = (document.getElementsByClassName("modal-container")),
		modalLength = modals.length,
		closeButton,
		mobileMenuOpen = false;

///////////////// sticky navbar variables \\\\\\\\\\\\\\\\\\\\\\\

	var content = document.getElementById("content-container"),
		navbar = document.getElementById("navbar"),
		navItems = [document.getElementById("home-link"),
					document.getElementById("work-link"),
					document.getElementById('skills-link'),
					document.getElementById('contact-link'),],
		navList = document.getElementById('nav-list'),
		sandwichMenuIcon = document.getElementById('sandwich-icon'),
		sticky = navbar.offsetTop;

///////////////// makes the navbar sticky when scrolled \\\\\\\\\\\\\\\\\\\\\\\

	window.onscroll = function() {modifyStickyClass();};

	function modifyStickyClass() {

		if (window.pageYOffset >= sticky) {

			content.classList.add("sticky-padding");
			navbar.classList.add("sticky-nav");
			
			sandwichMenuIcon.classList.add("sandwich-visible");

			if (window.innerWidth <= 768) {

				for (x = 0; x < 4; x++) {
				
					navItems[0].classList.add("sticky-menu");
					navItems[1].classList.add("sticky-menu");
					navItems[2].classList.add("sticky-menu");
					navItems[3].classList.add("sticky-menu");

				}

				navList.classList.add("collapsible-menu");
				navList.classList.add("menu-invisible");
			
			}
			
		} else if (window.pageYOffset < sticky) {

			content.classList.remove("sticky-padding");
			navbar.classList.remove("sticky-nav");
			navItems[0].classList.remove("sticky-menu");
			navItems[1].classList.remove("sticky-menu");
			navItems[2].classList.remove("sticky-menu");
			navItems[3].classList.remove("sticky-menu");
			navList.classList.remove("collapsible-menu");
			navList.classList.remove("menu-invisible");
			navList.classList.remove("revealed-menu");
			sandwichMenuIcon.classList.remove("sandwich-visible");

			if (window.innerWidth <= 768){

				invisibleMenu();

			}
			
		}

	}

///////////////// event listener for mouse clicks \\\\\\\\\\\\\\\\\\\\\\\

	document.addEventListener("click", function(e) {

		clickedElementId = e.target.id;

		if (clickedElementId.includes('work')) {

			openModal();

		}

		if ((clickedElementId == closeButton && clickedElement.style.display == "block") || clickedElementId.includes('modal')) {

			closeModal();

		}

		if (clickedElementId == 'sandwich-svg' && mobileMenuOpen == false || clickedElementId == 'sandwich-path' && mobileMenuOpen == false || clickedElementId == 'sandwich-icon' && mobileMenuOpen == false ) {

			openMobileMenu();

		} else if (clickedElementId == 'sandwich-svg' && mobileMenuOpen == true || clickedElementId == 'sandwich-path' && mobileMenuOpen == true || clickedElementId == 'sandwich-icon' && mobileMenuOpen == true ){

			closeMobileMenu();

		} else if (window.innerWidth <= 768 && mobileMenuOpen == true) {

			closeMobileMenu();

		}

	})

//////////////////// opens modals \\\\\\\\\\\\\\\\\\\\\\\\\
	
	function openModal() {

		for (i = 0; i < modalLength; i++) {

			currentElementId = modals[i].id;

			if ((clickedElementId + "-modal") == currentElementId) {

				clickedElement = (document.getElementById(clickedElementId + "-modal"));

				clickedElement.style.display = "block";

				closeButton = (clickedElementId.substr(0,7) + "-close-btn");

			}
		}
	}

//////////////////// closes modals \\\\\\\\\\\\\\\\\\\\\\\\\

	function closeModal() {
	
		clickedElement.style.display = "none";
	
	}

	function openMobileMenu() {

		mobileMenuOpen = true;
		navList.classList.remove("menu-invisible");
		navList.style.display = "block";

	}

	function closeMobileMenu() {

		mobileMenuOpen = false;
		navList.classList.add("menu-invisible");
		navList.style.display = "none";

	}

	function invisibleMenu() {

		navList.removeAttribute('style');

	}