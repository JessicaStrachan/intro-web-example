/*
This is your site JavaScript code - you can add interactivity and carry out processing
*/

// Hamburger and mobile menu
const hamburgerButton = document.querySelector('[data-behaviour="hamburger-button"]');
const navigation = document.querySelector('[data-behaviour="navigation"]');
const navigationActiveClass = navigation.dataset.activeClass;

if (hamburgerButton) {
  hamburgerButton.addEventListener('click', function(e) {
    const activeClass = e.currentTarget.dataset.activeClass;

    if (!e.currentTarget.classList.contains(activeClass)){
      e.currentTarget.classList.add(activeClass);
      navigation.classList.add(navigationActiveClass);
    } else {
      e.currentTarget.classList.remove(activeClass);
      navigation.classList.remove(navigationActiveClass);
    }
  })
}

