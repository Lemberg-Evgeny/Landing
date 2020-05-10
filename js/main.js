
const ClickNavBtn = () => {
    let navClicked = document.getElementById("header-navbar_links");
    navClicked.classList.toggle("nav-active")
    console.log('Change the navigation class to', navClicked.className);
}