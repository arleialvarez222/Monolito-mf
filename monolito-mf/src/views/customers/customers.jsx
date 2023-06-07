import { useState } from 'react'
import '../../App.css'
import TableCustomers from './table-customers'

const customers = [
    { name: 'Juan Loaiza', address: 'clle 23 #21', city: 'Medellin', email: 'juan@gmail.com', phone: 12345 },
    { name: 'Andres Cardozo', address: 'clle 13 #214', city: 'Medellin', email: 'andres@gmail.com', phone: 58785 },
    { name: 'Jheny Perez', address: 'clle 27 #21', city: 'Bogota', email: 'jhennn@gmail.com', phone: 952284815 },
]

const Customers = () => {
    const [listCustomers, setListCustomers] = useState(customers)

    return (
        <div>
            <h2 className="title-main">Customers</h2>
            <TableCustomers
                listCustomers={listCustomers}
                setListCustomers={setListCustomers}
            />
        </div>
    )
}

export default Customers