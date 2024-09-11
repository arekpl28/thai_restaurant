import styled from "styled-components";
import { device } from "../utils/variables";

export const BgImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  aspect-ratio: 1440 / 480;
  background-image: url("banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const DivContainer = styled.div`
  position: absolute;
  display: grid;
  top: 17%;
  left: 15%;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.1rem;
  text-underline-offset: 4px;
  text-decoration: underline;
  color: rgb(101, 43, 35);
  font-family: "Playfair Display", serif;
  @media screen and ${device.mobileM} {
    font-size: 2.5rem;
    text-underline-offset: 5px;
  }
  @media screen and ${device.mobileL} {
    font-size: 2.9rem;
  }
  @media screen and ${device.phablet} {
    font-size: 3.5rem;
    text-underline-offset: 6px;
  }
  @media screen and ${device.tablet} {
    font-size: 4.9rem;
    text-underline-offset: 8px;
  }
  @media screen and ${device.laptopS} {
    font-size: 6.5rem;
    text-underline-offset: 10px;
  }
  @media screen and ${device.laptopM} {
    font-size: 8rem;
    text-underline-offset: 15px;
  }
  @media screen and ${device.laptopL} {
    font-size: 90px;
    text-underline-offset: 10px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 0.6rem;
  padding-top: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  color: rgb(101, 43, 35);
  @media screen and ${device.mobileM} {
    font-size: 0.8rem;
  }
  @media screen and ${device.mobileL} {
    font-size: 0.9rem;
  }
  @media screen and ${device.phablet} {
    font-size: 1.1rem;
    padding-top: 8px;
  }
  @media screen and ${device.tablet} {
    font-size: 1.5rem;
    padding-top: 10px;
    letter-spacing: 1px;
  }
  @media screen and ${device.laptopS} {
    font-size: 2rem;
    padding-top: 15px;
  }
  @media screen and ${device.laptopM} {
    font-size: 2.4rem;
    padding-top: 20px;
    letter-spacing: 2px;
  }
  @media screen and ${device.laptopL} {
    font-size: 2.7rem;
    padding-top: 20px;
    letter-spacing: 2px;
  }
`;

export const SoonButton = styled.button`
  margin-top: 3px;
  padding: 2px 5px;
  font-size: 4px;
  text-transform: uppercase;
  background-color: rgb(101, 43, 35);
  color: #eee;
  cursor: pointer;
  border: none;
  border-radius: 30px;
  @media screen and ${device.mobileM} {
    font-size: 5px;
  }
  @media screen and ${device.mobileL} {
    font-size: 6px;
  }
  @media screen and ${device.phablet} {
    font-size: 8px;
    padding: 3px 5px;
    margin-top: 7px;
    letter-spacing: 1px;
  }
  @media screen and ${device.tablet} {
    font-size: 9px;
    padding: 5px 5px;
    margin-top: 10px;
    letter-spacing: 1px;
  }
  @media screen and ${device.laptopS} {
    font-size: 12px;
    padding: 5px 5px;
    margin-top: 14px;
    letter-spacing: 1px;
  }
  @media screen and ${device.laptopM} {
    font-size: 15px;
    padding: 8px 5px;
    margin-top: 15px;
    letter-spacing: 2px;
  }
  @media screen and ${device.laptopL} {
    padding: 10px 30px;
    margin-top: 10px;
  }
`;
