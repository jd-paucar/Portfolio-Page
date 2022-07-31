const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar_2')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})