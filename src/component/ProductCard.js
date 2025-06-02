import "./style/ProductCard.css";

function ProductCard({ title, image, description, price }) {
    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p className="description">{description}</p>
            <p className="price">{price}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default ProductCard