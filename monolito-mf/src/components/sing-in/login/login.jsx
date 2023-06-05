/* eslint-disable no-prototype-builtins */

import { Button, FormHelperText, Grid, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import './login.css'

const Login = () => {

    const isRequired = 'This field is required';
    const listUsers = useSelector((state) => state.listUsersReducer.users)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        email: yup.string()
            .nullable()
            .email('Email must be a valid email')
            .required(isRequired),
        password: yup.string()
            .nullable()
            .required(isRequired)
    })

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValue: { email: null, password: null },
        mode: 'all',
        reValidateMode: 'onChange'
    })

    const submit = (data) => {
        findUser(data)
    }

    const findUser = (data) => {
        const user = listUsers?.find(item => {
            let dataUser = undefined
            if (item.email === data.email && item.password === data.password) return dataUser = item
            return dataUser
        })
        navigateToDashboard(user)
    }

    const navigateToDashboard = (info) => {
        if (info !== undefined) {
            dispatch({
                type: 'USERS_SESSION',
                user: info,
                isAuth: true
            })
            navigate("/dashboard/products")
        } else {
            dispatch({
                type: 'SNACKBAR_APP',
                openSnackbar: true,
                message: "The user don't exist or your credentials aren't correct"
            })
        }

    }

    const createAccount = () => {
        navigate("/auth/register")
    }

    return (
        <div className="container-login">
            <div style={{ marginTop: 200 }}>
                <form onSubmit={handleSubmit(submit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} lg={12}>
                            <TextField
                                variant="outlined"
                                {...register('email')}
                                control={control}
                                defaultValue=""
                                name="email"
                                InputLabelProps={{ shrink: true }}
                                label="Email *"
                                type="email"
                                fullWidth
                                size="small"
                                error={errors.hasOwnProperty("email") && errors["email"].message}
                            />
                            <FormHelperText style={{ color: '#f44336' }}>
                                {errors.hasOwnProperty("email") && errors["email"].message}
                            </FormHelperText>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <TextField
                                variant="outlined"
                                {...register('password')}
                                control={control}
                                defaultValue=""
                                name="password"
                                InputLabelProps={{ shrink: true }}
                                label="Password *"
                                type="password"
                                fullWidth
                                size="small"
                                error={errors.hasOwnProperty("password") && errors["password"].message}
                            />
                            <FormHelperText style={{ color: '#f44336' }}>
                                {errors.hasOwnProperty("password") && errors["password"].message}
                            </FormHelperText>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Button
                                variant="contained"
                                type="submit"
                                fullWidth
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                type="button"
                                fullWidth
                                className="btn-register"
                                onClick={createAccount}
                            >
                                Create an account
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )
}

export default Login