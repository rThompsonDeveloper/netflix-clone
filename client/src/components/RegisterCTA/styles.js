import styled from "styled-components";

export const Text = styled.p`
  padding-top: 20px;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  padding-bottom: 10px;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-size: 1.4rem;
  border: solid 1px #8c8c8c;
  border-radius: 2px;
  display: block;
  appearance: none;
  width: 100%;
  color: #000;
  padding: 10px 11px;
  height: 60px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const Button = styled.button`
  background-color: #e50914;
  color: white;
  border: none;
  padding: 7px 17px;
  font-size: 1.6rem;
  border-radius: 4px;
  cursor: pointer;
  width: 260px;
  transition: all 0.3s ease-in-out;
  font-weight: 700;

  &:hover {
    background-color: #c7000a;
  }
`;
