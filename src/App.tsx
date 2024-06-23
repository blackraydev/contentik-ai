import { BrowserRouter } from 'react-router-dom';
import {
  CreateContentScope,
  EditContentScope,
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
          <CreateContentScope>
            <EditContentScope>
              <GenerationsScope>
                <OptimizationScope>
                  <TonalityScope>
                    <GlobalStyles />
                    <AppRouter />
                  </TonalityScope>
                </OptimizationScope>
              </GenerationsScope>
            </EditContentScope>
          </CreateContentScope>
        </UserScope>
      </ThemeScope>
    </BrowserRouter>
  );
}

export default App;
