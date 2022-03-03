import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  margin-bottom: -90px;
  position: relative;
  z-index: 20;
`;

export const Logo = styled.img`
  width: 160px;
`;

export const Container = styled.div`
  padding-top: 60px;
  background: rgba(0, 0, 0, 0.4);
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 733px;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/1691099b-ff71-4321-bd54-1bba46b0886b/2c85b161-6a67-445b-a029-3861905f047d/US-en-20220228-popsignuptwoweeks-perspective_alpha_website_small.jpg");
  height: 100%;
  background-size: cover;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
`;

export const Form = styled.form`
  min-width: 380px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 515px;
  padding: 20px 0 30px;
  width: 100%;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 90px;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  padding: 10px;
  background: #333;
  box-sizing: border-box;
  width: 100%;
  box-shadow: none;
  font-size: 16px;
  outline: none;
  margin-bottom: 16px;
`;

export const Signin = styled.button`
  background-color: #e50914;
  color: white;
  border: none;
  padding: 16px 17px;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 40px;
  &:hover {
    background-color: #c7000a;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  color: #b3b3b3;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
`;

export const Checkbox = styled.input`
  color: #000 !important;
  font-size: 16px;
  height: 18px;
  width: 18px;
  background-color: #b3b3b3 !important;
  margin-right: 4px;
  cursor: pointer;
`;

export const LargeText = styled.p`
  color: #b3b3b3;
  font-size: 1em;
  margin-right: 10px;
`;

export const Signup = styled.p`
  font-size: 1em;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

export const SignupWrapper = styled.div`
  display: flex;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #b3b3b3;
`;
