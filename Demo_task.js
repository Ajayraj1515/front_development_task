< script src = "https://code.jquery.com/jquery-3.6.0.min.js" > < /script> <
    script >
    // Smooth scrolling for navigation links
    $(document).ready(function() {
        $('a.nav-link').on('click', function(event) {
            if (this.hash !== '') {
                event.preventDefault();
                const hash = this.hash;
                const target = $(hash);
                const headerHeight = $('nav').outerHeight(); // Adjust for fixed header (if applicable)
                const scrollToPosition = target.offset().top - headerHeight;
                $('html, body').animate({
                    scrollTop: scrollToPosition
                }, 800); // Adjust the scrolling speed (in milliseconds)
            }
        });
    }); <
/script>