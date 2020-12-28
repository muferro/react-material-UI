import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  }

  const useStyles = makeStyles(theme => ({
      toolbarMargin:{
          ...theme.mixins.toolbar
      }
  }))


export default function Header(props){ 
    
    const classes = useStyles()

    return (
        <React.Fragment>
        <ElevationScroll>
            <AppBar position='fixed' color='secondary'>
                <ToolBar>
                    <Typography variant='h3' color='primary'>
                        Arc Development
                    </Typography>
                </ToolBar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}