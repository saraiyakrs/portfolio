import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { LinkedIn } from '@material-ui/icons/'
import { GitHub } from '@material-ui/icons/'

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "silver",
                fontSize: "1.8rem"

            }
        }
    }
})

const Footer = () => {
    const classes = useStyles()
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
        <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0, color: "white" }}
            icon={<LinkedIn />}
            //Open in new tab
            link href="https://www.linkedin.com/in/krsaraiya/"
            target="_blank"
            
        
        />
        <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0, color: "white" }}
            icon={<GitHub />}
            //Open in new tab
            link href="https://github.com/saraiyakrs"
            target="_blank"
    />
    </BottomNavigation> 

  )
};

export default Footer