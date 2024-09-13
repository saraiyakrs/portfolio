import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../toceWebsite.png';
import project2 from '../portfolioimg.png';
import def from '../htmlcssjs-overview.png';

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"

    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"

    }

})



const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className = {classes.mainContainer}>
            <Navbar />
            <Grid container justify="center">
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className = {classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Project 1"
                        height="140"
                        image={project1}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5">
                            Touch of Class Events Web App - Convention Center Site
                        </Typography>
                        <Typography gutterBottom variant="body2" color = "textSecondary" component = "p">
                        Developed with team a web application to serve as their online reservation system for the new event center.
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" color="primary">
                        <a href="https://github.com/saraiyakrs/TOCE-National-Web-App-Team" target="_blank">Github Repository</a>
                        </Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Grid>
                {/* Project 2 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className = {classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Project 1"
                        height="140"
                        image={project2}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5">
                            Portfolio Project (This Project) 
                        </Typography>
                        <Typography gutterBottom variant="body2" color = "textSecondary" component = "p">
                           Developed a Web App displaying personal information and coding experiences
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" color="primary">
                            Github Repository
                        </Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>
    
             </Grid>
             <Grid container justify="center">
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className = {classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Project 1"
                        height="140"
                        image={def}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project ???
                        </Typography>
                        <Typography gutterBottom variant="body2" color = "textSecondary" component = "p">
                            To be Added..

                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" color="primary">
                            Github Repository
                        </Button>
                       
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Grid>
            
    
             </Grid>
        </Box>
    );
};

export default Portfolio