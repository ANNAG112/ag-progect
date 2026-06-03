import "./Card.css";

function Card({product}) {
    return (
         <div className="card">
     <img src={product.image} alt={product.title} />

     <div className="card-content">
        <h3>{product.title}</h3>

        <div className="price">
         <span className="old-price">
            {product.oldPrice}
         </span>

         <span className="new-price">
            {product.newPrice}
         </span>
        </div>
     </div>
    </div>
    );
}

export default Card