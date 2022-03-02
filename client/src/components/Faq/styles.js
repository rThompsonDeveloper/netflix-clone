import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-bottom: 8px solid #222;
`;

export const Wrapper = styled.div`
padding: 60px 10px;
display: flex;
flex-direction: column;
max-width: 650px;
width: 100%;
margin-auto;`;

export const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;
