import '../styles/CardSection.css';

function CardSection() {

    const cardItems = [
        {
            id: 1,
            name: 'Nike',
            img: 'bannerimage.jpg',
            originalPrice: 2500,
            discountedPrice: 1000
        },
        {
            id: 2,
            name: 'Addidas',
            img: 'bannerimage.jpg',
            originalPrice: 2100,
            discountedPrice: 1000
        },
        {
            id: 3,
            name: 'Puma',
            img: 'bannerimage.jpg',
            originalPrice: 1800,
            discountedPrice: 1000
        },
        {
            id: 4,
            name: 'Vans',
            img: 'bannerimage.jpg',
            originalPrice: 1000,
            discountedPrice: 1000
        },

    ];
    return (
        <>
            <h1 className="section-heading-text center-aligned-text black-text">card heading</h1>

            <div className="card-container">

                {cardItems.map((item) => (
                    <div className="card" key={item.id}>
                        <div className="tag">
                            <p className="small-text white-text tag-text">Out Of Stock</p>
                        </div>
                        <img className="card-image" src={require('../assets/images/bannerimage.jpg')} alt="card-item" />
                        <h2 className="card-item-name-text black-text">{item.name}</h2>

                        <div className="card-price-container">
                            <p className="strike-text light-gray-text">Rs{item.originalPrice}</p>
                            <p className="black-text">Rs {item.discountedPrice}</p>
                        </div>

                        <p className="read-more-text link-text">Read more</p>
                    </div>

                ))}









            </div>
        </>
    )
}

export default CardSection;