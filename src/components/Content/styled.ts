import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';

export const Markdown = styled(MDEditor.Markdown)<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 400;
  width: ${({ $isMobile }) => ($isMobile ? '100%' : '700px')};
  height: ${({ $isMobile }) => ($isMobile ? 'fit-content' : '100%')};
  max-height: ${({ $isMobile }) => ($isMobile ? '0' : '800px')};
  line-height: 0.6cm;
  overflow-y: ${({ $isMobile }) => ($isMobile ? 'none' : 'scroll')};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.brightWhite};
  border-radius: 15px;
  padding: 15px 20px;

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

  p {
    margin-bottom: 8px;
  }

  a {
    display: none;
  }
`;
