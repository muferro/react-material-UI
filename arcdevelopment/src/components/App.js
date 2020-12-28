import { ThemeProvider } from '@material-ui/styles';
import Header from '../components/ui/Header';
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme} color='secondary'>
      <Header />
        Hello!
    </ThemeProvider>
  );
}

export default App;
