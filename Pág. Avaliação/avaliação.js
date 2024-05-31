// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating');
    let currentRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', setRating);
        star.addEventListener('mouseover', addHoverEffect);
        star.addEventListener('mouseout', removeHoverEffect);
    });

    function setRating(event) {
        const starValue = parseInt(event.target.getAttribute('data-value'));
        currentRating = starValue;
        updateRating(currentRating);
    }

    function addHoverEffect(event) {
        const starValue = parseInt(event.target.getAttribute('data-value'));
        updateRating(starValue);
    }

    function removeHoverEffect() {
        updateRating(currentRating);
    }

    function updateRating(rating) {
        stars.forEach(star => {
            if (parseInt(star.getAttribute('data-value')) <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
        ratingValue.textContent = rating;
    }
});
