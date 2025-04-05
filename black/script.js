let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const sliderWrapper = document.querySelector(".slider-wrapper");
const dots = document.querySelectorAll(".dot");
let slideInterval;

// Function to move to the next slide with a smooth transition
function showSlides() {
    slideIndex = (slideIndex + 1) % slides.length; // Loop back to first slide automatically
    updateSlider();
}

// Function to update slide position and active dots
function updateSlider() {
    sliderWrapper.style.transition = "transform 1s ease-in-out"; // Smooth sliding effect
    sliderWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}

// Function to start the slideshow
function startSlideShow() {
    clearInterval(slideInterval);
    updateSlider(); // Ensure correct slide is shown immediately
    slideInterval = setInterval(showSlides, 4000); // 1s slide + 3s pause = 4s total per slide
}

// Function to manually change slides (when clicking dots)
function currentSlide(index) {
    clearInterval(slideInterval);
    slideIndex = index;
    updateSlider();
    setTimeout(startSlideShow, 5000); // Restart auto-slide after 5 sec
}

// Start slideshow when page loads
document.addEventListener("DOMContentLoaded", startSlideShow);
function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${slideIndex * 100}vw)`;
}
// Product Card 2 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const productCard = document.querySelector('.product-card[data-product-id="2"]');
    const wishlistIcon = productCard.querySelector('.wishlist-icon');
    const quickView = productCard.querySelector('.quick-view');
    const addToCartBtn = productCard.querySelector('.add-to-cart');
    const sizeOptions = productCard.querySelector('.size-options');
    
    // Wishlist functionality
    wishlistIcon.addEventListener('click', function() {
        this.classList.toggle('active');
        this.innerHTML = this.classList.contains('active') ? 
            '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
        
        // In a real app, you would update the database here
        console.log('Wishlist updated for product 2');
    });
    
    // Quick view functionality
    quickView.addEventListener('click', function() {
        // In a real app, this would open a modal with more details
        window.location.href = 'product-detail.html?id=2';
    });
    
    // Add to cart functionality
    addToCartBtn.addEventListener('click', function() {
        if (sizeOptions.classList.contains('hidden')) {
            // First click - show size options
            sizeOptions.classList.remove('hidden');
            addToCartBtn.textContent = 'CONFIRM SIZE';
        } else {
            // Second click - add to cart
            const selectedSize = productCard.querySelector('.size-options span.selected').textContent;
            alert(`Added to cart: Product 2 (Size: ${selectedSize})`);
            
            // Reset button
            sizeOptions.classList.add('hidden');
            addToCartBtn.textContent = 'ADD TO CART';
            
            // In a real app, you would add to cart here
            console.log(`Added product 2 (size ${selectedSize}) to cart`);
        }
    });
    
    // Size selection
    sizeOptions.querySelectorAll('span').forEach(size => {
        size.addEventListener('click', function() {
            sizeOptions.querySelectorAll('span').forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});