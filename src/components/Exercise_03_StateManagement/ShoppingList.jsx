import { useState } from "react"

const ShoppingList = () => {
    const [items, setItems] = useState ([])
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !quantity) return
        
        const newItems = {
            name, quantity: parseInt(quantity)
        };

        setItems((prev) => [...prev, newItems])
        setName("")
        setQuantity("")
    }

  return (
    <section>
        <h2>Shopping List</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Item name"
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <input 
            type="number"
            placeholder="Quantity "
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            />
            <button type="submit">ADD</button>
        </form>
        <ul>
            {items.map((items, index) => (
                <li key={index}>{items.name} - Qty: {items.quantity}</li>
            ))}
        </ul>
    </section>
  )
}

export default ShoppingList