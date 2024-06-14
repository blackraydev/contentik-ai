import { ContentScope, ThemeScope } from './scopes';
import { Content, Interaction } from './components';
import { useCheckMobileScreen } from './hooks';
import { AppStyled, GlobalStyles } from './App.styled';

function App() {
  const isMobile = useCheckMobileScreen();

  return (
    <ThemeScope>
      <ContentScope>
        <GlobalStyles />
        <AppStyled $isMobile={isMobile}>
          <Interaction />
          <Content />
        </AppStyled>
      </ContentScope>
    </ThemeScope>
  );
}

export default App;
