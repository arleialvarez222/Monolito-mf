import { Button, Grid, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import "./register.css"

const Register = () => {

    const isRequired = 'This field is required';
    const listUsers = useSelector((state) => state.listUsersReducer.users)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        name: yup.string()
            .nullable()
            .required(isRequired),
        lastName: yup.string()
            .nullable()
            .required(isRequired),
        email: yup.string()
            .nullable()
            .required(isRequired)
            .email('Email must be a valid email'),
        password: yup.string()
            .nullable()
            .required(isRequired)
    })

    const { register, control, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        defaultValue: { email: null, password: null, name: null, lastName: null },
        mode: 'all',
        reValidateMode: 'onChange'
    })

    const submit = (data) => {
        createUser(data)
    }

    const createUser = (data) => {
        const list = listUsers
        const updatedList = [...list, data]
        dispatch({
            type: 'LIST_USERS',
            users: updatedList
        })
        navigateToLogin()
    }

    const navigateToLogin = () => {
        navigate("/auth/login")
    }

    return (
        <div className="container-register">
            <form onSubmit={handleSubmit(submit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField
                            variant="outlined"
                            {...register('name')}
                            control={control}
                            defaultValue=""
                            name="name"
                            InputLabelProps={{ shrink: true }}
                            label="Name *"
                            type="text"
                            fullWidth
                            size="small"
                        //error={errors.hasOwnProperty("points") && errors["points"].message}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField
                            variant="outlined"
                            {...register('lastName')}
                            control={control}
                            defaultValue=""
                            name="lastName"
                            InputLabelProps={{ shrink: true }}
                            label="LastName *"
                            type="text"
                            fullWidth
                            size="small"
                        //error={errors.hasOwnProperty("points") && errors["points"].message}
                        />
                    </Grid>
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
                        //error={errors.hasOwnProperty("points") && errors["points"].message}
                        />
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
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                        >
                            Create
                        </Button>
                        <Button
                            variant="contained"
                            type="button"
                            fullWidth
                            className="btn-register"
                            onClick={navigateToLogin}
                        >
                            cancelar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default Register