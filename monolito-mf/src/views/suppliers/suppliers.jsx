import { useState } from 'react'
import '../../App.css'
import TableSuppliers from './table-suppliers'

const suppliers = [
    { name: 'Juan Loaiza', address: 'clle 23 #21', city: 'Medellin', email: 'juan@gmail.com', phone: 12345 },
    { name: 'Andres Cardozo', address: 'clle 13 #214', city: 'Medellin', email: 'andres@gmail.com', phone: 58785 },
    { name: 'Jheny Perez', address: 'clle 27 #21', city: 'Bogota', email: 'jhennn@gmail.com', phone: 952284815 },
]

const Suppliers = () => {
    const [listSuppliers, setListSuppliers] = useState(suppliers)
    return (
        <div>
            <h2 className="title-main">Suppliers</h2>
            <TableSuppliers
                listSuppliers={listSuppliers}
                setListSuppliers={setListSuppliers}
            />
        </div>
    )
}

export default Suppliers