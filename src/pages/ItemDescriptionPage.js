import '../styles/ItemDescriptionPage.css';

function ItemDescriptionPage() {
    return (
        <div className="item-description-container">
            <div className="top-container"></div>
            <h1 className="item-description-heading-text">Nike Bag aaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasssssssssssssssssssssssssssssssssssss</h1>

            <div className="item-row">
                <div className="item-image-container">1</div>

                <div className="item-content-container">

                    <div className="custom-select-container">
                        <div className="selected-container">
                            <div className="selected-text-container">select colour</div>
                            <div className="down-arrow-container"></div>
                        </div>
                        <div className="dropdown-container">
                            <p className="dropdown-option-text">red</p>
                            <p className="dropdown-option-text">green</p>
                            <p className="dropdown-option-text">blue</p>
                            <p className="dropdown-option-text">red</p>
                            <p className="dropdown-option-text">green</p>
                            <p className="dropdown-option-text">blue</p>
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
    )
}

export default ItemDescriptionPage;