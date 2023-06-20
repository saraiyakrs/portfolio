import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Avatar,Grid, Box} from "@material-ui/core";
import Typed from "react-typed"
import avatar from "../avatar.png";

// CSS STYLES
const useStyles = makeStyles(theme => ({

    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)

    },
    title: {
       color: "red" 
    },
    subtitle: {
        color: "black",
        marginBottom: "3rem"
    },
    typedContainer: {  
        position: "absolute",
        top: "75%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width:"100vw",
        textAlign: "center",
        zIndex: 1

    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <Box className = {classes.typedContainer}>
            <Grid container justify = "center">
                <Avatar className = {classes.avatar}  src = {avatar} alt= "Krishna Saraiya" />
             </Grid>
            <Typography className = {classes.title} variant = "h4">
                <Typed strings={["Krishna Saraiya"]} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography className = {classes.title} variant = "h5">
                <Typed strings={["Computer Science and Engineering"]} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography className = {classes.subtitle} variant = "h5">
                <Typed strings={["The Ohio State University"]} typeSpeed={40} backSpeed={60} loop />
            </Typography>
        </Box>
    );
};

export default Header