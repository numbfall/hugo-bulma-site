window.burgerToggle = () => {
    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-open');
                    $target.classList.toggle('is-open');

                });
            });
        }

    });
}

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else if (!hasClass(el, className)) el.className += " " + className;
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className)) {
        var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
        el.className = el.className.replace(reg, " ");
    }
}

window.onscroll = () => {
    var currentWindowPos = document.documentElement.scrollTop || document.body.scrollTop,
        header = document.getElementsByClassName('navbar');

    if (currentWindowPos > 27) {
        addClass(header[0], "scrolled");
    } else {
        removeClass(header[0], "scrolled");
    }
};

burgerToggle();

