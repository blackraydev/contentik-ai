import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import { BiCopy } from 'react-icons/bi';
import { BiSolidCopy } from 'react-icons/bi';

export const MarkdownWrapper = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
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

  h1,
  h2,
  h3,
  h4 {
    padding: 0 !important;
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  h1 {
    font-size: 1.5em !important;
  }

  h2 {
    font-size: 1.3em !important;
  }

  h3 {
    font-size: 1.1em !important;
  }

  h4 {
    font-size: 1em !important;
  }

  ol,
  ul {
    padding-left: 1.25em !important;
    margin-bottom: 0 !important;
  }

  li {
    transition: 0.2s ease !important;
    color: ${({ theme }) => theme.colors.primaryLightFont};
    font-size: 1em !important;
  }

  li p {
    margin-top: 4px !important;
  }

  p {
    transition: 0.2s ease !important;
    color: ${({ theme }) => theme.colors.primaryLightFont};
    margin-bottom: 8px;
    font-size: 1em !important;
  }

  strong {
    transition: 0.2s ease;
    color: ${({ theme }) => theme.colors.primaryFont};
  }

  a {
    transition: 0.2s ease;
    display: none;
  }

  & * {
    border: none !important;
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
