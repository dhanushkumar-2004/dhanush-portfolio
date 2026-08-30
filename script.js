document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinksContainer = document.getElementById("nav-links");

if (menuToggle && navLinksContainer) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navLinksContainer.classList.toggle("active");

    });


    /* Close menu when link is clicked */

    navLinksContainer.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navLinksContainer.classList.remove("active");

        });

    });

}

    /* =====================================================
       NAVIGATION
    ===================================================== */

    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");
    const header = document.getElementById("header");


    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            // Ignore links that don't point to a section
            if (!targetId || targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                e.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION WHILE SCROLLING
    ===================================================== */

    const navObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");

                    navLinks.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${currentId}`
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },
        {
            threshold: 0.35
        }
    );


    sections.forEach(section => {

        navObserver.observe(section);

    });


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }


    /* =====================================================
       SKILLS SCROLL ANIMATION
    ===================================================== */

    const skillCards =
        document.querySelectorAll(".skill-card");

    if (skillCards.length > 0) {

        const skillsObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        skillCards.forEach(card => {

            skillsObserver.observe(card);

        });

    }

});