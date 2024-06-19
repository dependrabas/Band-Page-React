import React from 'react';
import './styles.css'; // Ensure you import the CSS file

function HeroButtons() {
    return (
        <div className="hero-btn">
            <a href="https://www.yourshopnowlink.com" className="button-link">
                <button>Shop Now</button>
            </a>
            <a href="https://www.yourcategorylink.com" className="button-link">
                <button>Category</button>
            </a>
        </div>
    );
}

export default HeroButtons;
