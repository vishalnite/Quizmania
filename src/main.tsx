import ReactDOM from 'react-dom/client'
import { FluentProvider, teamsLightTheme, makeStyles } from '@fluentui/react-components';
import App from './App.tsx'
import './index.css'
import { StrictMode } from 'react';

const useStyles = makeStyles({
  container: {
    backgroundColor: 'transparent'
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); 

const ThemeSwitcher = () => {
  const classes = useStyles();

  return (
    <FluentProvider className={classes.container} theme={teamsLightTheme}>
      <StrictMode>
        <App />
      </StrictMode>
    </FluentProvider>
  );
};

root.render(<ThemeSwitcher />);