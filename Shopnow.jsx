import React from 'react';

function HeroButtons() {
    const handleShopNowClick = () => {
        window.location.href = 'https://www.yourshopnowlink.com';
    };

    const handleCategoryClick = () => {
        window.location.href = 'https://www.yourcategorylink.com';
    };

    return (
        <div className="hero-btn">
            <button onClick={handleShopNowClick}>Shop Now</button>
            <button onClick={handleCategoryClick}>Category</button>
        </div>
    );
}

export default HeroButtons;
