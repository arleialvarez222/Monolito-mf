import { useState } from "react";
import TableProducts from "./table-products"
import '../../App.css'

let rows = [
    { name: 'Alcachofa', description: 'desddkfd fdkfd', price: '$200' },
    { name: 'Maiz', description: 'desddk3434', price: '$100' },
    { name: 'Arroz', description: 'dfdf fdkfd', price: '$500' },
];

const Products = () => {
    const [listProducts, setListProducts] = useState(rows)

    return (
        <div>
            <h2 className="title-main">products</h2>
            <TableProducts
                products={listProducts}
                setListProducts={setListProducts}
            />
        </div>
    )
}

export default Products