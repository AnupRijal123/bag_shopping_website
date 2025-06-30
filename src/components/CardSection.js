import '../styles/CardSection.css';
import { useNavigate } from 'react-router';

function CardSection(props) {

    const navigate = useNavigate();


    function goToItemDescription(itemId, itemCategory) {
        navigate(`/category/${itemCategory}/${itemId}`);
    }

    return (
        <>
            <h1 className="section-heading-text center-aligned-text black-text">{props.cardItemsHeadingText}</h1>

            <div className="card-container">

                {props.cardItemsArray.map((item) => (
                    <div onClick={() => { goToItemDescription(item.id, item.category) }} className="card" key={item.id}>

                        {
                            item.in_stock_quantity === 0 || item.discount_percentage !== null ?
                                (
                                    <div className="tag">
                                        {item.in_stock_quantity === 0 ?
                                            (<p className="small-text white-text tag-text">Out Of Stock</p>
                                            )
                                            :
                                            (
                                                <p className="small-text white-text tag-text">{item.discount_percentage ? `-${item.discount_percentage}%` : null}</p>
                                            )
                                        }
                                    </div>
                                ) :
                                null
                        }



                        <img className="card-image" src={item.img[0]} alt="card-item" />
                        <h2 className="card-item-name-text black-text">{item.name}</h2>

                        <div className="card-price-container">

                            {
                                item.discount_percentage === null ?
                                    (
                                        <p className="black-text">Rs{item.original_price}</p>
                                    )
                                    :
                                    (
                                        <>
                                            <p className="strike-text light-gray-text">Rs{item.original_price}</p>
                                            <p className="black-text">
                                                Rs{item.original_price - (item.discount_percentage * item.original_price / 100)}
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