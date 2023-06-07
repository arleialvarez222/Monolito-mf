import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../sing-in/login/login'
import Products from '../../views/products/products'
import PrivateRoute from './privateRoute'
import Register from '../sing-in/register/register'
import Credits from '../../views/credits/credits'
import Customers from '../../views/customers/customers'
import Inventories from '../../views/inventories/inventories'
import Invoices from '../../views/invoices/invoices'
import Suppliers from '../../views/suppliers/suppliers'
import Navbar from '../navbar/navbar'
import '../../App.css'
import { useSelector } from 'react-redux'

const RouterApp = () => {
    const state = useSelector((state) => state.usersReducer.isAuth)

    return (
        <>
            <BrowserRouter>
                {state ? <Navbar /> : null}
                <div className='root-main'>
                    <Routes>
                        <Route exact path='/' element={<Login />} />
                        <Route exact path='/auth/login' element={<Login />} />
                        <Route exact path='/auth/register' element={<Register />} />

                        <Route path='/dashboard/products'
                            element={
                                <PrivateRoute isLogged={state}>
                                    <Products />
                                </PrivateRoute>
                            }
                        />
                        <Route path='/dashboard/credits'
                            element={
                                <PrivateRoute isLogged={state}>
                                    <Credits />
                                </PrivateRoute>
                            }
                        />
                        <Route path='/dashboard/customers'
                            element={
                                <PrivateRoute isLogged={state}>
                                    <Customers />
                                </PrivateRoute>
                            }
                        />
                        <Route path='/dashboard/inventories'
                            element={
                                <PrivateRoute isLogged={state}>
                                    <Inventories />
                                </PrivateRoute>
                            }
                        />
                        <Route path='/dashboard/invoices'
                            element={
                                <PrivateRoute isLogged={state}>
                                    <Invoices />
                                </PrivateRoute>
                            }
                        />
                        <Route path='/dashboard/suppliers'
                            element={
                                <PrivateRoute isLogged={state}>
                                    <Suppliers />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default RouterApp