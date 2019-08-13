import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  height: 100%;
  width: 50%;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

export const Option = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
