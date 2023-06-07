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

const TableCredits = (props) => {
    const { listCredits, setListCredits } = props || {}

    const deleteCredit = (item) => {
        const newList = listCredits.filter(x => x.nameCustomer !== item?.nameCustomer);
        setListCredits(newList);
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Name Customer&nbsp;</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Amount&nbsp;</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Date</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listCredits.map((row) => (
                            <TableRow
                                key={row.name}
                            >
                                <TableCell align="center">{row.nameCustomer}</TableCell>
                                <TableCell align="center">{row.amount}</TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        size='small'
                                        onClick={() => console.log(row)}
                                    >
                                        <EditIcon color='success' />
                                    </IconButton>
                                    <IconButton
                                        size='small'
                                        onClick={() => deleteCredit(row)}
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

export default TableCredits