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

const RouterApp = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Login />} />
                    <Route exact path='/auth/login' element={<Login />} />
                    <Route exact path='/auth/register' element={<Register />} />

                    <Route path='/dashboard/products'
                        element={
                            <PrivateRoute>
                                <Products />
                            </PrivateRoute>
                        }
                    />
                    <Route path='/dashboard/credits'
                        element={
                            <PrivateRoute>
                                <Credits />
                            </PrivateRoute>
                        }
                    />
                    <Route path='/dashboard/customers'
                        element={
                            <PrivateRoute>
                                <Customers />
                            </PrivateRoute>
                        }
                    />
                    <Route path='/dashboard/inventories'
                        element={
                            <PrivateRoute>
                                <Inventories />
                            </PrivateRoute>
                        }
                    />
                    <Route path='/dashboard/invoices'
                        element={
                            <PrivateRoute>
                                <Invoices />
                            </PrivateRoute>
                        }
                    />
                    <Route path='/dashboard/suppliers'
                        element={
                            <PrivateRoute>
                                <Suppliers />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterApp