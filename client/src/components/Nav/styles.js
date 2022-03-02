import styled from "styled-components";

export const Wrapper = styled.div`
  transition: background-color 0.5s;
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: -90px;
  z-index: 10;
`;

export const NavBar = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
`;

export const Logo = styled.img`
  width: 160px;
`;

export const Signin = styled.button`
  background-color: #e50914;
  color: white;
  border: none;
  padding: 7px 17px;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c7000a;
  }
`;
