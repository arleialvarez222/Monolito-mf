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

const TableCustomers = (props) => {
    const { listCustomers, setListCustomers } = props || {}

    const deleteCustomers = (item) => {
        const newList = listCustomers.filter(x => x.name !== item?.name);
        setListCustomers(newList);
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Name&nbsp;</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Address&nbsp;</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>City</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Email</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Phone</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listCustomers.map((row) => (
                            <TableRow
                                key={row.name}
                            >
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.address}</TableCell>
                                <TableCell align="center">{row.city}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.phone}</TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        size='small'
                                        onClick={() => console.log(row)}
                                    >
                                        <EditIcon color='success' />
                                    </IconButton>
                                    <IconButton
                                        size='small'
                                        onClick={() => deleteCustomers(row)}
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

export default TableCustomers