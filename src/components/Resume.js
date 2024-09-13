import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box} from "@material-ui/core";
import Navbar from './Navbar';
import ResumePDF from '../Krishna-Saraiya-Resume-Sept082024.pdf';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#233"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem:{
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after":{
      content: "''",
      position: "absolute"

    },
    "&:before":{
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"

  },
  [theme.breakpoints.up("md")]:{
    width: "44%",
    margin: "1rem",
    "&:nth-of-type(2n)":{
      float: "right",
      margin: "1rem",
      borderColor: "tan"
    },
    "&:nth-of-type(2n):before":{
      right: "auto",
      left: "-0.625rem",
      borderColor: "transparent transparent tomato tomato"

    }
  }
},
  timeLineYear:{
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before":{
      display: "none"
    },
    [theme.breakpoints.up("md")]:{
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)":{
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before":{
        display: "none"

      }
    }


  },
  heading:{
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading:{
    color: "white",
    padding: "0",
    textTransform: "uppercase"
    
  }

}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
   <Navbar/> 
    {/* Add Embedded Resume PDF Here */}
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Resume</title>
      </head>
      <body>
        <embed src={ResumePDF} width="100%" height="1000px" />
      </body>
    </html>

    </>
  );
};

export default Resume