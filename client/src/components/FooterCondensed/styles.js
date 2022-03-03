import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(p) =>
    p.dark ? "rgba(0, 0, 0, 0.96)" : "rgba(0,0,0,0.35)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  max-width: 1000px;
  justify-content: space-between;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 1em;
  color: #757575;
  padding-bottom: 30px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-size: 0.8em;
  color: #757575;
  padding-bottom: 16px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
