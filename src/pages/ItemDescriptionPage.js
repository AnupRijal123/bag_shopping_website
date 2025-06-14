import '../styles/ItemDescriptionPage.css';
import { useState, useRef, useEffect } from 'react';

function ItemDescriptionPage() {

    const [selectedColour, setSelectedColour] = useState(null);
    const customSelectRef = useRef();
    const itemImageContainerRef = useRef();
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(itemImageContainerRef);
    }, []);

    function handleSelectColour(value) {
        console.log('colour option clicked', value);
        setSelectedColour(value);

        //closing dropdown after option is clicked
        console.log(customSelectRef);
        console.log(customSelectRef.current);
        customSelectRef.current.classList.add('disable-select-mouse-hover');

        setTimeout(() => {
            customSelectRef.current.classList.remove('disable-select-mouse-hover');
        }, 1000);

    }

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
    return (
        <div className="item-description-container">
            <div className="top-container"></div>


            <div className="section-container">
                <h1 className="item-description-heading-text black-text">Nike Bag aaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasssssssssssssssssssssssssssssssssssss</h1>

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

                        <div ref={customSelectRef} className="custom-select-container">
                            <div className="selected-container">
                                <div className="placeholder-text-container">choose colour</div>
                                <div className="selected-text-container">{selectedColour}</div>

                                <div className="down-arrow-container"></div>
                            </div>
                            <div className="dropdown-container">
                                <p onClick={() => { handleSelectColour('red') }} className="dropdown-option-text">red</p>
                                <p onClick={() => { handleSelectColour('green') }} className="dropdown-option-text">green</p>
                            </div>
                        </div>

                        <div className="button-container">

                            <div className="button-layout button-transparent-background button-gray-border">
                                <div className="button-background-container button-gray-background"></div>
                                <p className="button-text dark-gray-text">Buy</p>
                            </div>

                            <div className="button-layout button-transparent-background button-gray-border">
                                <div className="button-background-container button-gray-background"></div>
                                <p className="button-text dark-gray-text">Add to cart</p>
                            </div>


                        </div>

                        <p>
                            this is description
                            this is description
                            this is description
                            this is description
                            this is description
                            this is description
                            this is description
                            this is description
                            this is description
                            this is description
                            this is description
                            this is description
                            this is description
                            this is description
                            this is description
                            this is description
                            this is description
                            this is description
                        </p>



                    </div>


                </div>
            </div>

        </div>
    )
}

export default ItemDescriptionPage;