import styled from "styled-components";

export const BannerWrapper = styled.div`
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/8607d312-c4d0-4ce2-955d-50d728ae845f/edd80d0c-63ba-460a-8a1d-2d8c3e6587b7/US-en-20220226-popsignuptwoweeks-perspective_alpha_website_small.jpg");
  height: 100%;
  background-size: cover;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
`;

export const Gradient = styled.div`
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
  border-bottom: 8px solid #222;
`;

export const BannerContent = styled.div`
  position: relative;
  width: 100%;
  padding: 160px 0;
  max-width: 650px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`;

export const BannerTitle = styled.h1`
  color: white;
  font-size: 3.125rem;
  padding-bottom: 20px;
`;

export const BannerSubtitle = styled.h2`
  color: white;
  font-size: 1.8rem;
  font-weight: 400;
  padding-bottom: 10px;
`;
