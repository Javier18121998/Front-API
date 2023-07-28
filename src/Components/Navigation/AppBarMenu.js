import React, {useState} from "react";
import { AppBar, Button, Container, Drawer, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@material-ui/core";
import useStyles from '../../theme/useStyles'
import { Link } from 'react-router-dom';

const AppBarMenu = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const openToggle = () => {
        setOpen(true);
    }

    const closeTogle = () => {
        setOpen(false);
    }

    return(
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Container>
                    <Toolbar className={classes.helper}>
                        <div className={classes.sectionMobile}>
                            <IconButton color="inherit" onClick={openToggle}>
                                <Icon fontSize="large">menu</Icon>
                            </IconButton>
                        </div>
                        <Drawer
                            open={open}
                            onClose={closeTogle}
                        >
                            <div className={classes.list}>
                                <List>
                                    <ListItem button onClick={closeTogle} className={classes.listItem}>
                                        <Link to="/login" color="inherit" underline="none" className={classes.linkAppBarMobile}>
                                            <ListItemIcon className={classes.listItemIcon}>
                                                <Icon>person</Icon>
                                            </ListItemIcon>
                                            <ListItemText>Login</ListItemText>
                                        </Link>
                                    </ListItem>
                                </List>
                            </div>
                        </Drawer>
                        <div className={classes.grow}>
                            <Link
                                color="inherit"
                                underline="none"
                                className={classes.linkAppBarLogo}
                                to="/"
                            >
                                <Icon fontSize="large" className={classes.mr}>store</Icon>
                                <Typography variant="h5">SAMPLE SHOP</Typography>
                            </Link>
                        </div>
                        <div className={classes.sectionDesktop}>
                            <Button color="inherit" className={classes.buttonIcon}>
                                <Link to="/login" color="inherit" underline="none" className={classes.linkAppBarDesktop}>
                                    <Icon className={classes.mr}>person</Icon>
                                    LOGIN
                                </Link>
                            </Button>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
};
export default AppBarMenu;