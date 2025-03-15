document.addEventListener("DOMContentLoaded", function () {
    // Typing Animation Effect
    const lines = [
        "> Hello, I am Sumit Chaturvedi",
        "> DevOps Engineer",
        "> Automating infrastructure and streamlining deployments"
    ];

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

    // ✅ Fix "Get in Touch" Button (Scroll to Contact Section)
    function scrollToSection(sectionId) {
        const target = document.getElementById(sectionId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60, // Adjust for navbar height
                behavior: "smooth"
            });
        }
    }

    // ✅ Fix "View Resume" Button (Show/Hide Resume)
    function toggleResume() {
        let resumeContainer = document.getElementById("resume-container");
        if (resumeContainer.style.display === "none" || resumeContainer.style.display === "") {
            resumeContainer.style.display = "block";
        } else {
            resumeContainer.style.display = "none";
        }
    }

    // Footer responsiveness on window resize
    window.addEventListener("resize", function () {
        let footerContainer = document.querySelector(".footer-container");
        if (footerContainer) {
            footerContainer.style.flexDirection = window.innerWidth < 768 ? "column" : "row";
        }
    });
});
