import '../styles/CardSection.css';

function CardSection() {
    return (
        <>
            <h1 className="card-heading-text black-text">card heading</h1>

            <div className="card-container">
                <div className="card">
                    <div className="tag">
                        <p className="small-text white-text tag-text">Out Of Stock</p>
                    </div>
                    <img className="card-image" src={require('../assets/images/bannerimage.jpg')} alt="card-item" />
                    <h2 className="card-item-name-text black-text">Nike Bag</h2>

                    <div className="card-price-container">
                        <p className="strike-text light-gray-text">Rs 1500</p>
                        <p className="black-text">Rs 800</p>
                    </div>

                    <p className="read-more-text link-text">Read more</p>
                </div>





            </div>
        </>
    )
}

export default CardSection;