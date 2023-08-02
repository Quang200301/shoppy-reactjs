import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const FormEdit = () => {
    const { id } = useParams();
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const navigate =useNavigate();
    const url = `https://645e542e8d08100293fcd90e.mockapi.io/webxedap/${id}`;

    // Function to fetch the existing product data from the API
    const fetchProductData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setName(data.name);
            setPrice(data.price);
            setImage(data.image);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    useEffect(() => {
        fetchProductData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Function to handle the form submission (update product data)
    const update = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, price, image }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            alert('Product updated successfully!');
            navigate('/show');
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Failed to update product. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={(e) => update(e)}>
                <input
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    value={name}
                    placeholder="name"
                    type="text"
                />
                <input
                    onChange={(e) => setPrice(e.target.value)}
                    id="price"
                    value={price}
                    placeholder="price"
                    type="text"
                />
                {/* For the image field, we'll use a text input to update the image URL */}
                <input
                    onChange={(e) => setImage(e.target.value)}
                    id="image"
                    value={image}
                    placeholder="image URL"
                    type="text"
                />
                <button>Update</button>
            </form>
        </div>
    );
};

export default FormEdit;
