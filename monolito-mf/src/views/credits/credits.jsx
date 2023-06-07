import { useState } from 'react'
import '../../App.css'
import TableCredits from './table-credits'

const listCred = [
    { nameCustomer: 'Juan Alzate', amount: '$20.000', date: '12-01-2023' },
    { nameCustomer: 'Carlos Loaiza', amount: '$50.000', date: '17-01-2023' },
    { nameCustomer: 'Clara Lopez', amount: '$40.000', date: '12-03-2023' },
]

const Credits = () => {
    const [listCredits, setListCredits] = useState(listCred)

    return (
        <div>
            <h2 className="title-main">Credits</h2>
            <TableCredits
                listCredits={listCredits}
                setListCredits={setListCredits}
            />
        </div>
    )
}

export default Credits