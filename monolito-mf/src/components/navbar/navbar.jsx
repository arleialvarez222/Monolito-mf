
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import AlertDialogLogout from '../modals/modal-log-out/log-out';
import DrawerApp from './drawer';

const Navbar = () => {
    const [openLogout, setOpenLogout] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleOpenModal = () => {
        setOpenLogout(!openLogout)
    }

    const handleCloseDrawer = () => {
        setOpenDrawer(!openDrawer)
    }

    return (
        <>
            <AppBar position="fixed" style={{ margin: 0, padding: 0, }}>
                <DrawerApp openDrawer={openDrawer} closedrawer={handleCloseDrawer} />
                <Toolbar variant="dense">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleCloseDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Monolito mf
                    </Typography>
                    <Button color="inherit"
                        onClick={handleOpenModal}
                    >Log out</Button>
                </Toolbar>
            </AppBar>
            <AlertDialogLogout open={openLogout} close={handleOpenModal} />
        </>
    );
}
export default Navbar