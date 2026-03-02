export function mobileMenu() {

    // Mobile Menu

    (function() {
        const mobileMenuBtn = document.querySelector(".mobileIcon");
        const closeMobileMenuBtn = document.querySelector("#mobileMenuCloseBtn");
        const navItems = document.querySelectorAll("#mobileMenu ul li a");

        function toggleMobileMenu() {
            const mobileMenu = document.querySelector("#mobileMenu");

            if (mobileMenu.classList.contains("open")) {
                mobileMenu.classList.remove("open");
            } else {
                mobileMenu.classList.add("open") 
            }
        }

        mobileMenuBtn.addEventListener("click",toggleMobileMenu);
        closeMobileMenuBtn.addEventListener("click",toggleMobileMenu);
        navItems.forEach((navItem) => {
            navItem.addEventListener("click", toggleMobileMenu);
        });
    })();
}