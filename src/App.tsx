import { BrowserRouter } from 'react-router-dom';
import { ScopeComposer } from './scopes';
import { Router as AppRouter } from './components';
import { GlobalStyles } from './App.styled';

function App() {
  return (
    <BrowserRouter basename="/contentik-ai">
      <ScopeComposer>
        <GlobalStyles />
        <AppRouter />
      </ScopeComposer>
    </BrowserRouter>
  );
}

export default App;
