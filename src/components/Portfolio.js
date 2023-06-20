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
import project1 from '../htmlcssjs-overview.png';

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
                            Project 0
                        </Typography>
                        <Typography gutterBottom variant="body2" color = "textSecondary" component = "p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, voluptatum.

                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
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
                        image={project1}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5">
                            Project 
                        </Typography>
                        <Typography gutterBottom variant="body2" color = "textSecondary" component = "p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, voluptatum.

                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Live Demo
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