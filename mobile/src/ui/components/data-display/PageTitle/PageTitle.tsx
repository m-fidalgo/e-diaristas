import React from 'react';
import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from './PageTitle.style';

export interface PageTitleProp {
  title: string;
  subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProp> = ({ title, subtitle }) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
