import styled from 'styled-components';

export const MarkdownEditorStyled = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  .rsw-editor {
    width: 100%;
    height: 100%;
    transition: 0.2s ease;
    font-size: 16px;
    border-radius: 15px;
    padding: 13px 15px;
    resize: none;
    overflow-y: scroll;
    color: ${({ theme }) => theme.colors.primaryFont} !important;
    background: ${({ theme }) => theme.colors.primaryBg};
    border: 1px solid ${({ theme }) => theme.colors.borderDefault};

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.borderActive};
    }
    &::-webkit-scrollbar {
      display: none;
    }
    &::placeholder {
      transition: 0.2s ease;
      color: ${({ theme }) => theme.colors.placeholderFont};
    }
  }

  .rsw-toolbar {
    display: none;
  }

  .rsw-ce h1 {
    font-size: 24px !important;
  }
  .rsw-ce h2 {
    font-size: 22px !important;
  }
  .rsw-ce h3 {
    font-size: 20px !important;
  }
  .rsw-ce p {
    font-size: 16px !important;
  }
  .rsw-ce li {
    font-size: 16px !important;
  }
  .rsw-ce ul,
  .rsw-ce ol {
    padding-left: 1em !important;
  }

  .rsw-ce * {
    max-width: 100% !important;
    background: none !important;
    color: ${({ theme }) => theme.colors.primaryFont} !important;
  }
`;
