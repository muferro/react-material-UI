// import { Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
const arcBlue = "#0B72B9" ; // eslint-disable-next-line
const arcOrange = "#FFBA60"; // eslint-disable-next-line

export default createMuiTheme({
    palette: {
        common:{
            blue: `${arcBlue}`,
            orange: `${arcOrange}` 
        },
        primary:{
            main: `${arcBlue}`
        },
        secondary:{
            main: `${arcOrange}`
        }
    // },
    // typography: {
    //     h3: {
    //         fontWeight: 400
    //     }
    }


});