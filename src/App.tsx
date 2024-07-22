import { BrowserRouter } from 'react-router-dom';
import { PublicScopeComposer } from './scopes';
import { Router as AppRouter } from './components';
import { GlobalStyles } from './App.styled';
import { BASE_NAME } from './consts';

function App() {
  return (
    <BrowserRouter basename={BASE_NAME}>
      <PublicScopeComposer>
        <GlobalStyles />
        <AppRouter />
      </PublicScopeComposer>
    </BrowserRouter>
  );
}

export default App;
