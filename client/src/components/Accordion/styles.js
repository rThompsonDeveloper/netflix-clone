import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
`;

export const Navbar = styled.div`
  background-color: #303030;
  display: flex;
  width: 100%;
  border: 1px solid black;
  justify-content: space-between;
  cursor: pointer;
  box-sizing: border-box;
`;

export const Text = styled.h3`
  color: white;
  font-size: 1.6em;
  font-weight: 400;
  box-sizing: border-box;
  padding: 20px;
`;

export const Content = styled.div`
  width: 100%;
  border: 1px solid black;
  background-color: #303030;
  border-top: none;
  transition: max-height 0.3s ease-in-out;
  max-height: ${(p) => (p.open ? "1000px" : "0px")};
  box-sizing: border-box;
`;
