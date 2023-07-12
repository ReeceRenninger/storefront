import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ActiveCategory from "../ActiveCategory";

function ProductDetails() {

  const { products } = useSelector((state) => state.products);
  const { id } = useParams();

  const product = products.find((product) => product._id === id);

  return (
    <div>
      <h1>Product Details for {product.name}</h1>
      <ActiveCategory />
      <p>{product.price} doll hairs</p>
      <p>Amount inStock: {product.inStock}</p>
    </div>
  )
}

export default ProductDetails;