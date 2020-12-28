import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/ui/Header';
import theme from './ui/Theme';


function App() {
  return (
    <ThemeProvider theme={theme} color='secondary'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={()=> <h1>home</h1>} />
          <Route exact path='/services' component={()=> <h1>Services</h1>} />
          <Route exact path='/customsoftware' component={()=> <h1>Software</h1>} />
          <Route exact path='/mobileapps' component={()=> <h1>Mobile Apps</h1>} />
          <Route exact path='/website' component={()=> <h1>Website</h1>} />
          <Route exact path='/revolution' component={()=> <h1>Revolution</h1>} />
          <Route exact path='/about' component={()=> <h1>About us</h1>} />
          <Route exact path='/contact' component={()=> <h1>Contact</h1>} />
          <Route exact path='/estimate' component={()=> <h1>Estimate</h1>} />
        </Switch>
        </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
