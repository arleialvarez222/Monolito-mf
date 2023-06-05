/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const AlertDialogLogout = ({ open, close }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const logOut = () => {
        close()
        dispatch({
            type: "USERS_SESSION",
            user: {},
            isAuth: false
        })
        navigate("/auth/login")
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={close}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <h4>Are you sure you want to log out</h4>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={logOut}>Log out</Button>
                    <Button onClick={close} autoFocus>
                        cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default AlertDialogLogout