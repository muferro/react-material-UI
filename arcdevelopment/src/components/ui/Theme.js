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
        },
        typography:{
            tab: {
                fontFamily: 'Raleway',
                textTransform: 'none',
                fontWeight: 700,
                fontSize: '1rem',    
            }
        }
    }


});