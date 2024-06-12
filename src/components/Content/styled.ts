import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';

export const Markdown = styled(MDEditor.Markdown)`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 400;
  width: 500px;
  height: 750px;
  line-height: 0.6cm;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  border-radius: 15px;
  padding: 15px 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  h2 {
    border: none !important;
  }

  ul: padding: 0 !important;
`;
