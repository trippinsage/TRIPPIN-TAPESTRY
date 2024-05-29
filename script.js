document.addEventListener("DOMContentLoaded", function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            backToTopBtn.style.display = "none";
        } else {
            // Scrolling up or at the top
            if (scrollTop <= 0) {
                backToTopBtn.style.display = "none";
            } else {
                backToTopBtn.style.display = "block";
            }
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Display one review at a time with a fading effect
    const reviewItems = document.querySelectorAll('.review-item');
    let currentReviewIndex = 0;

    function showNextReview() {
        reviewItems.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentReviewIndex) {
                item.classList.add('active');
            }
        });
        currentReviewIndex = (currentReviewIndex + 1) % reviewItems.length;
    }

    // Initialize the first review
    if (reviewItems.length > 0) {
        reviewItems[0].classList.add('active');
    }

    // Change review every 6 seconds
    setInterval(showNextReview, 6000);
});
