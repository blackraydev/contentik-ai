import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';

export const MarkdownStyled = styled(MDEditor.Markdown)<{ $isMobile: boolean }>`
  color-scheme: none;
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primaryFont};
  overflow: scroll !important;

  &::-webkit-scrollbar {
    display: none;
  }

  h2 {
    margin-bottom: 8px !important;
    border: none !important;
  }

  ul {
    padding-left: 1em !important;
  }

  li {
    color: ${({ theme }) => theme.colors.primaryLightFont};
  }

  p {
    color: ${({ theme }) => theme.colors.primaryLightFont};
    margin-bottom: 8px;
  }

  strong {
    transition: 0.2s ease;
    color: ${({ theme }) => theme.colors.primaryFont};
  }

  a {
    transition: 0.2s ease;
    display: none;
  }
`;
