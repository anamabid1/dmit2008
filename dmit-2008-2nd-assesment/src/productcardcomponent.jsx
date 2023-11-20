/*Product Card Component*/

/*Create a reusable ProductCard component to display individual products.*/

/*app/products/ProductCard.jsx:*/

const ProductCard = ({ uid, productName, productPrice, productImage, shortDescription }) => (
    <div>
      <img src={productImage} alt={productName} />
      <h3>{productName}</h3>
      <p>{shortDescription}</p>
      <p>${productPrice}</p>
    </div>
  );
  
  export default ProductCard;
  