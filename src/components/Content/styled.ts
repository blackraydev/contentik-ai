import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';

export const Markdown = styled(MDEditor.Markdown)<{ $isMobile: boolean }>`
  color-scheme: none;
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
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
  border-radius: 0.75rem;
  padding: 15px 20px;
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

  p {
    margin-bottom: 8px;
  }

  a {
    display: none;
  }
`;
