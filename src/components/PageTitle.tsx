import styled from "@emotion/styled";

interface PageTitleProps {
  children: string;
}

const Title = styled.h1`
  margin: 0;
  color: #1672f7;
  font-size: 32px;
  font-weight: 700;
`;

export function PageTitle({ children }: PageTitleProps) {
  return <Title>{children}</Title>;
}
