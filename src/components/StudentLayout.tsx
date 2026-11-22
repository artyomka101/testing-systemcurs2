import { Outlet, NavLink } from "react-router";
import styled from "@emotion/styled";
import { Icon } from "../icons/icons";


const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  background: #fafafa;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 240px;
  flex-shrink: 0;
  min-height: 100vh;
  padding: 27px 16px;
  background-color: #fff;
  border-radius: 0 12px 12px 0;

  @media (max-width: 600px) {
    width: 100%;
    min-height: auto;
    border-radius: 0;
  }
`;

const Logo = styled.h2`
  margin-bottom: 22px;
  color: #1672f7;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -1px;
`;

const StyledLink = styled(NavLink)`
  height: 44px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 12px;

  border-radius: 10px;

  text-decoration: none;
  color: #111318;
  font-size: 14px;
  &.active{
    background-color: #e7f4ff;
    color: #006fff;
  }
   &.focus-visible{
    outline: 2px solid #1672f7;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Main = styled.main`
  flex: 1;
  min-width: 0;
  padding: 26px 36px;
`;
export function StudentLayout() {
  return (
    <Shell>
      <Sidebar>
        <Logo>ПАЗЛ &amp; [КОД]</Logo>
        <Nav>
        <StyledLink to= "/student/tests">
        <Icon name="tests"></Icon>
        Тестирование
        </StyledLink>
        <StyledLink to= "/student/stats">
        <Icon name="statistics"></Icon>
        Статистика
        </StyledLink>
        <StyledLink to= "/student/profile">
        <Icon name="profile"></Icon>
        Профиль
        </StyledLink>
        </Nav>
      </Sidebar>
      <Main>
        <Outlet />
      </Main>
    </Shell>
  );
}
