import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import { BiCopy } from 'react-icons/bi';
import { BiSolidCopy } from 'react-icons/bi';

export const MarkdownWrapper = styled.div`
  display: inline-block;
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

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
  padding-top: 25px;
  padding-bottom: 25px;

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

export const CopyWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const CopyIcon = styled(BiCopy)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.secondaryLightFont};
  margin-top: 1px;

  &:hover {
    color: ${({ theme }) => theme.colors.icon};
  }
`;

export const CopyFormattedIcon = styled(BiSolidCopy)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.secondaryLightFont};
  margin-top: 1px;

  &:hover {
    color: ${({ theme }) => theme.colors.icon};
  }
`;
