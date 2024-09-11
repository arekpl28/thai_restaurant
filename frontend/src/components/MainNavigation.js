import styled from "styled-components";
import { device } from "../utils/variables";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: max-content auto max-content;
  padding: 10px 10px 5px 10px;
  align-items: end;
  white-space: nowrap;
  background-color: rgba(237, 224, 206);
  color: rgb(101, 43, 35);
  @media screen and ${device.mobileM} {
    padding: 10px 10px 7px 10px;
    gap: 2px;
  }
  @media screen and ${device.mobileL} {
    gap: 3px;
  }
  @media screen and ${device.tablet} {
    padding: 10px 15px 9px 15px;
  }
  @media screen and ${device.laptopS} {
    padding: 10px 15px 10px 15px;
    gap: 5px;
  }
  @media screen and ${device.laptopM} {
    padding: 15px 20px 12px 20px;
  }
`;

export const Img = styled.img`
  width: 12px;
  padding-bottom: 2px;
  @media screen and ${device.mobileM} {
    width: 14px;
  }
  @media screen and ${device.mobileL} {
    width: 15px;
  }
  @media screen and ${device.tablet} {
    width: 19px;
  }
  @media screen and ${device.laptopS} {
    width: 23px;
  }
  @media screen and ${device.laptopM} {
    width: 27px;
  }
  @media screen and ${device.laptopL} {
    width: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  @media screen and ${device.mobileM} {
    font-size: 1.8rem;
  }
  @media screen and ${device.mobileL} {
    font-size: 2rem;
  }
  @media screen and ${device.tablet} {
    font-size: 2.5rem;
  }
  @media screen and ${device.laptopS} {
    font-size: 3rem;
  }
  @media screen and ${device.laptopM} {
    font-size: 3.5rem;
  }
  @media screen and ${device.laptopL} {
    font-size: 4rem;
  }
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
  text-transform: uppercase;
`;

export const Li = styled.li`
  font-size: 1rem;
  border-bottom: 2px solid rgba(237, 224, 206);
  cursor: pointer;
  transition: border-bottom-color 0.2s ease-in-out;
  @media screen and ${device.tablet} {
    font-size: 1.2rem;
  }
  @media screen and ${device.laptopS} {
    font-size: 1.3rem;
  }
  @media screen and ${device.laptopM} {
    font-size: 1.7rem;
  }
  @media screen and ${device.laptopL} {
    font-size: 2rem;
  }
  &:hover {
    border-bottom-color: rgb(101, 43, 35);
  }
`;
