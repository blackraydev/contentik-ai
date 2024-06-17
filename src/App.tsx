import { ContentScope, ThemeScope } from './scopes';
import { Content, Header, Interaction } from './components';
import { useCheckMobileScreen } from './hooks';
import { AppStyled, GlobalStyles, Wrapper } from './App.styled';

function App() {
  const isMobile = useCheckMobileScreen();

  return (
    <ThemeScope>
      <ContentScope>
        <GlobalStyles />
        <AppStyled>
          <Header />
          <Wrapper $isMobile={isMobile}>
            <Interaction />
            <Content />
          </Wrapper>
        </AppStyled>
      </ContentScope>
    </ThemeScope>
  );
}

export default App;
