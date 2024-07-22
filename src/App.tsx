import { BrowserRouter } from 'react-router-dom';
import { PublicScopeComposer } from './scopes';
import { Router as AppRouter } from './components';
import { GlobalStyles } from './App.styled';

function App() {
  return (
    <BrowserRouter basename="/contentik-ai">
      <PublicScopeComposer>
        <GlobalStyles />
        <AppRouter />
      </PublicScopeComposer>
    </BrowserRouter>
  );
}

export default App;
