import { IconButton, Snackbar } from '@mui/material'
import './App.css'
import RouterApp from './components/routers/router'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const snackbar = useSelector((state) => state.snackbarReducer)
  const dispatch = useDispatch()

  const handleCloseSnackbar = () => {
    dispatch({
      type: 'SNACKBAR_APP',
      openSnackbar: false,
      message: ""
    })
  }

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <RouterApp />
      <Snackbar
        open={snackbar.openSnackbar}
        autoHideDuration={6000}
        //onClose={handleClose}
        message={snackbar.message}
        action={action}
      />
    </>
  )
}

export default App
