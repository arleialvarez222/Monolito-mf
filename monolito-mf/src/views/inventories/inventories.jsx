import { useState } from 'react'
import '../../App.css'
import TableInventories from './table-inventories'

const inventories = [
    { productName: 'Maiz', quantity: 12 },
    { productName: 'Arroz', quantity: 2 },
    { productName: 'Soda', quantity: 30 },
]

const Inventories = () => {
    const [listInventories, setListInventories] = useState(inventories)

    return (
        <div>
            <h2 className="title-main">Inventories</h2>
            <TableInventories
                listInventories={listInventories}
            />
        </div>
    )
}

export default Inventories