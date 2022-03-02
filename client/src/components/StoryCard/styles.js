import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  border-bottom: 8px solid #222;
`;

export const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  max-width: 1100px;
  margin-auto;
  flex-direction: ${(p) => (p.flip ? "row" : "row-reverse")};
`;

export const Left = styled.div`
  width: 100%;
`;

export const Right = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h4`
  color: white;
  font-size: 1.25rem;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
