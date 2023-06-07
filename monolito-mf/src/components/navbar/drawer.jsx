/* eslint-disable react/prop-types */
import { Drawer, Grid, List, ListItem, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"
import "./navigation.css"

const DrawerApp = ({ openDrawer, closedrawer }) => {
    return (
        <>
            <Drawer
                variant="temporary"
                open={openDrawer}
                onClose={closedrawer}
                anchor="left"
                sx={{
                    width: 230,
                    backgroundColor: "#fff",
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: 230,
                        background: "#fff",
                        padding: "15px 15px 15px 15px",
                        boxSizing: "border-box",
                        border: "none",
                    },
                }}
            >
                <Grid container>
                    <List component="div">
                        <ListItem
                            disablePadding
                            component={Link}
                            to="/dashboard/products"
                            onClick={closedrawer}
                            className="listItem"
                        >
                            <ListItemText
                                primary="Products"
                                className="list-item-text"
                            />
                        </ListItem>
                        <ListItem
                            disablePadding
                            component={Link}
                            to="/dashboard/credits"
                            onClick={closedrawer}
                            className="listItem"
                        >
                            <ListItemText
                                primary="Credits"
                                className="list-item-text"
                            />
                        </ListItem>
                        <ListItem
                            disablePadding
                            component={Link}
                            to="/dashboard/customers"
                            onClick={closedrawer}
                            className="listItem"
                        >
                            <ListItemText
                                primary="Customers"
                                className="list-item-text"
                            />
                        </ListItem>
                        <ListItem
                            disablePadding
                            component={Link}
                            to="/dashboard/inventories"
                            onClick={closedrawer}
                            className="listItem"
                        >
                            <ListItemText
                                primary="Inventories"
                                className="list-item-text"
                            />
                        </ListItem>
                        <ListItem
                            disablePadding
                            component={Link}
                            to="/dashboard/invoices"
                            onClick={closedrawer}
                            className="listItem"
                        >
                            <ListItemText
                                primary="Invoices"
                                className="list-item-text"
                            />
                        </ListItem>
                        <ListItem
                            disablePadding
                            component={Link}
                            to="/dashboard/suppliers"
                            onClick={closedrawer}
                            className="listItem"
                        >
                            <ListItemText
                                primary="Suppliers"
                                className="list-item-text"
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Drawer>
        </>
    )
}

export default DrawerApp