import { Product } from "../Exercises/Product";

const ProductInfo = () => {
  const ProductList = [
    {
      brand: "Dell",
      model: "XPS 16",
      price: "$2100",
    },
    {
      brand: "Lenovo",
      model: "ThinkPad P16",
      price: "$2500",
    },
    {
      brand: "Apple",
      model: "Macbook Pro 16",
      price: "$3200",
    },
  ];
  return (
    <main>
      <Product name={ProductList[0].brand} price={ProductList[0].price} />
      <div>
        {/* {ProductList.map(({ brand, model, price }) => (
          <ul key={model + brand}>
            <li>Brand : {brand}</li>
            <li>Model : {model}</li>
            <li>Price : {price}</li>
          </ul>
        ))} */}
      </div>
    </main>
  );
};

export default ProductInfo;
