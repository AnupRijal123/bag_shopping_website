import '../styles/ItemDescriptionPage.css';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';

function ItemDescriptionPage() {

    const itemImageContainerRef = useRef();
    const navigate = useNavigate();
    const [selectedColour, setSelectedColour] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const itemDetails = {
        id: 1,
        name: 'Nike sports bag for travelling and schools',
        avaiable_colours: ['red', 'black', 'green', 'blue'],
        description: 'this is very good quality waterproof bag with good padding',
        images: ['hello', 'hello', 'hello']
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        console.log(selectedColour)
        if (selectedColour.length !== 0) {
            setShowErrorMessage(false);
        }

    }, [selectedColour]);

    function handleImageNavigation(value) {
        if (value === 'left') {
            console.log('left clicked')
            console.log(itemImageContainerRef.current)
            itemImageContainerRef.current.scrollBy(-350, 0);
        }
        if (value === 'right') {
            console.log('right clicked');
            itemImageContainerRef.current.scrollBy(350, 0);
        }

    }

    function goToConfirmOrderPage() {

        if (selectedColour.length === 0) {
            setShowErrorMessage(true);
        } else {
            navigate('/confirm-order');
        }

    }


    return (
        <div className="item-description-container">
            <div className="top-container"></div>


            <div className="section-container">
                <h1 className="item-description-heading-text black-text">{itemDetails.name}</h1>
                <div className="item-row">
                    <div className="item-image-container">
                        <div ref={itemImageContainerRef} className="image-container">
                            <img className="item-image" src={require('../assets/images/bannerimage.jpg')} alt="item-image" />
                            <img className="item-image" src={require('../assets/images/bannerimage.jpg')} alt="item-image" />
                            <img className="item-image" src={require('../assets/images/bannerimage.jpg')} alt="item-image" />

                        </div>

                        <div className="image-navigate-button-container">
                            <img onClick={() => { handleImageNavigation('left') }} className="arrow-icon-image" src={require('../assets/icons/left_arrow.png')} alt="left" />
                            <img onClick={() => { handleImageNavigation('right') }} className="arrow-icon-image" src={require('../assets/icons/right_arrow.png')} alt="right" />
                        </div>
                    </div>

                    <div className="item-content-container">

                        <div className="select-container">
                            <select onChange={(event) => {
                                console.log(event.target.value)
                                setSelectedColour(event.target.value);
                            }}>

                                {itemDetails.avaiable_colours.map((item) => (
                                    <option key={item} value={item}>{item}</option>

                                ))}
                            </select>

                            {selectedColour.length === 0 &&
                                <p className="select-placeholder-text small-text light-gray-text">choose colour</p>
                            }

                        </div>


                        {showErrorMessage === true &&
                            <p className="red-text small-text">please choose a colour</p>
                        }

                        <div className="button-container">

                            <div onClick={goToConfirmOrderPage} className="button-layout button-transparent-background button-gray-border">
                                <div className="button-background-container button-gray-background"></div>
                                <p className="button-text dark-gray-text">Buy</p>
                            </div>

                            <div className="button-layout button-transparent-background button-gray-border">
                                <div className="button-background-container button-gray-background"></div>
                                <p className="button-text dark-gray-text">Add to cart</p>
                            </div>


                        </div>

                        <p className="black-text">{itemDetails.description}</p>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default ItemDescriptionPage;