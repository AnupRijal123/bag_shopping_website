import '../styles/CardSection.css';

function CardSection(props) {
    console.log(props);
    console.log(props.cardItemsArray);

    return (
        <>
            <h1 className="section-heading-text center-aligned-text black-text">{props.cardItemsHeadingText}</h1>

            <div className="card-container">

                {props.cardItemsArray.map((item) => (
                    <div className="card" key={item.id}>
                        <div className="tag">
                            {item.inStockQuantity === 0 ?
                                (<p className="small-text white-text tag-text">Out Of Stock</p>
                                )
                                :
                                (
                                    <p className="small-text white-text tag-text">{item.discountPercentage ? `-${item.discountPercentage}%` : null}</p>
                                )
                            }
                        </div>

                        <img className="card-image" src={require('../assets/images/bannerimage.jpg')} alt="card-item" />
                        <h2 className="card-item-name-text black-text">{item.name}</h2>

                        <div className="card-price-container">

                            {
                                item.discountPercentage === null ?
                                    (
                                        <p className="black-text">Rs{item.originalPrice}</p>
                                    )
                                    :
                                    (
                                        <>
                                            <p className="strike-text light-gray-text">Rs{item.originalPrice}</p>
                                            <p className="black-text">
                                                Rs{item.originalPrice - (item.discountPercentage * item.originalPrice / 100)}
                                            </p>
                                        </>
                                    )
                            }



                        </div>

                        <p className="read-more-text link-text">Read more</p>
                    </div>

                ))}









            </div>
        </>
    )
}

export default CardSection;