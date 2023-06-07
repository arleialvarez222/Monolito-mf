import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TableProducts = (props) => {
    const { products, setListProducts } = props || {}

    const deleteProduct = (item) => {
        const newList = products.filter(x => x.name !== item?.name);
        setListProducts(newList);
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Name&nbsp;</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Description&nbsp;</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Price</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row.name}
                            >
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.description}</TableCell>
                                <TableCell align="center">{row.price}</TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        size='small'
                                        onClick={() => console.log(row)}
                                    >
                                        <EditIcon color='success' />
                                    </IconButton>
                                    <IconButton
                                        size='small'
                                        onClick={() => deleteProduct(row)}
                                    >
                                        <DeleteIcon color='error' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableProducts