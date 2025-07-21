import '../styles/AdminAddItems.css';
import { useState } from 'react';
import { supabase } from '../supabase.js';


function AdminAddItems() {

    const [bagData, setBagData] = useState({
        name: '',
        code: '',
        category: '',
        original_price: '',
        discount_percentage: '',
        in_stock_quantity: '',
        available_colours: '',
        description: '',

    });

    const [files, setFiles] = useState([]);
    console.log(files)

    function handleChange(event) {
        console.log(event.target)
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        setBagData((prev) => (
            { ...prev, [name]: value }
        ));
    }

    function handleFileChange(event) {
        // console.log(event.target.files)
        setFiles(event.target.files);
    }

    async function uploadImages() {
        let imageUrls = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            console.log(file);
            console.log(file.name)
            const filePath = `bag-images/${Date().now}-${file.name}`;

            //upload image to supabase

            const { error } = await supabase.storage.from("bag-images").upload(filePath, file);

            if (error) {
                console.error("Error uploading images", error);
            }


        }
    }

    uploadImages();
    return (
        <form>
            <div className="form-row">
                <h2>Bag name</h2>
                <input type="text" name="name" value={bagData.name} onChange={handleChange} required />
            </div>

            <div className="form-row">
                <h2>Code number</h2>
                <input type="text" name="code" value={bagData.code} onChange={handleChange} />
            </div>

            <div className="form-row">
                <h2>Category</h2>
                <select value={bagData.category} name="category" onChange={handleChange}>
                    <option value="backpack">Backpack</option>
                    <option value="handbag">Handbag</option>
                    <option value="ladies">Ladies</option>
                    <option value="school">School</option>
                    <option value="college">College</option>
                    <option value="office">Office</option>
                    <option value="shopping">Shopping</option>
                    <option value="guitar">Guitar</option>
                    <option value="gym">Gym</option>
                    <option value="delivery">Delivery</option>

                </select>
            </div>

            <div className="form-row">
                <h2>Original Price</h2>
                <input type="number" name="original_price" value={bagData.original_price} onChange={handleChange} />
            </div>

            <div className="form-row">
                <h2>Discount Percentage</h2>
                <input type="number" name="discount_percentage" value={bagData.discount_percentage} onChange={handleChange} />
            </div>

            <div className="form-row">
                <h2>In Stock Quantity</h2>
                <input type="number" name="in_stock_quantity" value={bagData.in_stock_quantity} onChange={handleChange} />
            </div>

            <div className="form-row">
                <h2>Available Colours</h2>
                <input type="text" name="available_colours" value={bagData.available_colours} onChange={handleChange} />
            </div>

            <div className="form-row">
                <h2>Description</h2>
                <textarea name="description" value={bagData.description} onChange={handleChange}></textarea>
            </div>

            <div className="form-row">
                <h2>Images</h2>
                <input type="file" multiple onChange={handleFileChange} />
            </div>

        </form>
    )
}

export default AdminAddItems;