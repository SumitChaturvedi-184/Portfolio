document.addEventListener("DOMContentLoaded", function () {
    // Typing Animation Effect
    const lines = [
        "> Hello, I am Sumit Chaturvedi",
        "> DevOps Engineer",
        "> Automating infrastructure and streamlining deployments"
    ];

    let index = 0;
    function typeLine(id, text, speed, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                document.getElementById(id).innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                setTimeout(callback, 500); // Delay before next line starts
            }
        }
        type();
    }

    typeLine("line1", lines[0], 50, function () {
        typeLine("line2", lines[1], 50, function () {
            typeLine("line3", lines[2], 50);
        });
    });

    // Smooth scrolling for navbar links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove #
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Footer responsiveness on window resize
    window.addEventListener("resize", function () {
        let footerContainer = document.querySelector(".footer-container");
        if (window.innerWidth < 768) {
            footerContainer.style.flexDirection = "column";
        } else {
            footerContainer.style.flexDirection = "row";
        }
    });
});
