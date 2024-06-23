import { BrowserRouter } from 'react-router-dom';
import {
  ContentScope,
  GenerationsScope,
  OptimizationScope,
  ThemeScope,
  TonalityScope,
  UserScope,
} from './scopes';
import { Router as AppRouter } from './components';
import { GlobalStyles } from './App.styled';

function App() {
  return (
    <BrowserRouter basename="/contentik-ai">
      <ThemeScope>
        <UserScope>
          <ContentScope>
            <GenerationsScope>
              <OptimizationScope>
                <TonalityScope>
                  <GlobalStyles />
                  <AppRouter />
                </TonalityScope>
              </OptimizationScope>
            </GenerationsScope>
          </ContentScope>
        </UserScope>
      </ThemeScope>
    </BrowserRouter>
  );
}

export default App;
