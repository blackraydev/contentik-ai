import { ContentScope, ThemeScope } from './scopes';
import { AppStyled, GlobalStyles } from './App.styled';
import { Content, Interaction } from './components';

function App() {
  return (
    <ThemeScope>
      <ContentScope>
        <GlobalStyles />
        <AppStyled>
          <Interaction />
          <Content />
        </AppStyled>
      </ContentScope>
    </ThemeScope>
  );
}

export default App;
