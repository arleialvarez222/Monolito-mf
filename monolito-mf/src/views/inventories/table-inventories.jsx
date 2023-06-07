import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'

const TableInventories = (props) => {
    const { listInventories } = props || {}

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Product Name&nbsp;</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Quantity&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listInventories.map((row) => (
                            <TableRow
                                key={row.name}
                            >
                                <TableCell align="center">{row.productName}</TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableInventories