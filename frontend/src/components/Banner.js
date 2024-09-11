import styled from "styled-components";

export const BgImage = styled.div`
  max-width: 1440px;
  width: 100%;
  position: relative;
  aspect-ratio: 1440 / 480;
  background-image: url("banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const DivContainer = styled.div`
  display: grid;
  position: absolute;
  // top: 70px;
  top: 14%;
  left: 13%;
  width: 200px;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  // background-color: rgba(255, 255, 255, 0.8);
`;

export const Title = styled.h1`
  font-size: 90px;
  color: rgb(101, 43, 35);
  margin: 0;
  font-family: "Playfair Display", serif;
  text-underline-offset: 10px;
  text-decoration: underline;
`;

export const Subtitle = styled.h2`
  font-size: 27px;
  line-height: 40px;
  color: rgb(101, 43, 35);

  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 5px 0;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
`;

export const SoonButton = styled.button`
  display: inline-block;
  padding: 10px 30px;
  background-color: rgb(101, 43, 35);
  color: #eee;
  text-transform: uppercase;
  border-radius: 30px;
  font-size: 15px;
  letter-spacing: 2px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
`;
