import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name = "Unnamed Item", price = "N/A", description = "No description available", image }) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    // ✅ Ensure the correct image URL
    const imageUrl = image.startsWith("/uploads/") ? `${url}${image}` : `${url}/uploads/${image}`;

    // Debugging logs
    console.log("Received image prop:", image);
    console.log("Constructed image URL:", imageUrl);

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img
                    className="food-item-image"
                    src={imageUrl}
                    onError={(e) => (e.target.src = assets.default_food_image)}
                    alt={name}
                />

                {!cartItems?.[id] ? (
                    <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
                ) : (
                    <div className="food-item-counter">
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add" />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
