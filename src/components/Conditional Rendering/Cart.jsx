const Cart = () => {
  const items = [
    "Macbook Pro 16",
    "Samsung T7 SSD",
    "Gaming PC",
    "LG Ultrafine 4K monitor",
    "Logitech MX Master 3S"
  ];

  return (
    <div>
      <h1>Cart </h1>
      {items.length > 0 && <p>You have {items.length} item in your cart</p>}
      <ul>
        <h2>=================Products=================</h2>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
