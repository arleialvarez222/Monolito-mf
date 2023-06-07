import { useState } from "react";
import '../../App.css'
import TableProducts from "./table-products";

let rows = [
    { name: 'Alcachofa', description: 'desddkfd fdkfd', price: '$200' },
    { name: 'Maiz', description: 'desddk3434', price: '$100' },
    { name: 'Arroz', description: 'dfdf fdkfd', price: '$500' },
];

const Products = () => {
    const [listProducts, setListProducts] = useState(rows)
    //const headers = ['Name', 'Description', 'Price', 'Actions']

    return (
        <div>
            <h2 className="title-main">products</h2>
            {/* <DetailTable
                products={listProducts}
                setListProducts={setListProducts}
                headers={headers}
            /> */}
            <TableProducts
                products={listProducts}
                setListProducts={setListProducts}
            />
        </div>
    )
}

export default Products