const HeroSection = () => {

    return <main className="Hero">
        <div className="hero-content">
            <h1>YOUR FEET <br />DESERVE  <br />THE BEST</h1>

            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. <br />YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="hero-btn">
                <button>Shop Now </button>
                <button>Category</button>

            </div>
            <div className="shopping">
                <p>Also Available On</p>
               
            </div>
            <div className="brand-icons">
            <img src="public/images/flipkart.png" alt="Flipkart" />  
            <img src="public/images/amazon.png" alt="Amazon" />
            </div>
        </div>
        <div className="hero-image">
            <img src="public/images/shoe_image.png" alt="Hero" />
        </div>
    </main>
}

export default HeroSection;