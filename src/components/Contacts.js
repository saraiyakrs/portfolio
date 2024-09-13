// import React from 'react'
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
// import SendIcon from "@material-ui/icons/Send";
// import Navbar from './Navbar';


// const useStyles = makeStyles(theme => ({
//   form: {
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     position: "absolute",
//   },
//   button: {
//     marginTop: "1rem",
//     color: "tomato",
//     borderColor: "tomato",

//   }

// }));


// const InputField = withStyles({
//   root: {
//     "& label.Mui-focused": {
//       color: "tomato",

//     },
//     "& label": {
//       color: "tan",

//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "tan",
//       },
//       "&:hover fieldset": {
//         borderColor: "tan",
//       },
//       "& .Mui-focused fieldset": {
//         borderColor: "tan",
//       }
//     },
//   },
// })(TextField);



// const Contacts = () => {
//   const classes = useStyles();

//   return (
//     <Box component="div" style = {{background: "#233", height: "100vh"}}>
//       <Navbar />
//       <Grid container justify="center">
//         <Box component="form" className={classes.form}>
//           <Typography variant="h5" style = {{color:"tomato", textAlign : "center", textTransform: "uppercase"}}>Hire or contact me...</Typography>

//           <InputField
//             fullWidth={true}
//             label="Name"
//             variant="outlined"
//             inputProps={{ style: { color: "black" } }}
//             margin="dense"
//             size="medium" />
//           <br />

//           <InputField
//             fullWidth={true}
//             label="Email"
//             variant="outlined"
//             inputProps={{ style: { color: "black" } }}
//             margin="dense"
//             size="medium" />
//           <br />

//           <InputField
//             fullWidth={true}
//             label="Company Name"
//             variant="outlined"
//             inputProps={{ style: { color: "black" } }}
//             margin="dense"
//             size="medium" />

//           <br />

//           <br />
//           <Button
//             className={classes.button}
//             variant="outlined"
//             fullWidth={true}
//             endIcon={<SendIcon />}>
//             Send {handleContact}
//           </Button>
//         </Box>
//       </Grid>
//     </Box>
//   )
// }
// const handleContact = () => {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const companyName = document.getElementById("companyName").value;

//   const subject = `Contact Request from ${name}`;
//   const body = `Hi,\n\nI am ${name} from ${companyName}. Please reach me at ${email}.\n\nBest regards,\n${name}`;
//   const mailtoLink = `mailto:saraiyakr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//   window.location.href = mailtoLink;
// };

// export default Contacts