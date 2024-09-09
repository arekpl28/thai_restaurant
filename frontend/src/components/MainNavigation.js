import styled from "styled-components";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-template-rows: 50px;
  grid-template-areas: "a1 a2 a3";
  align-items: center;
  height: 50px;
  padding-left: 10px;
  background-color: rgba(237, 224, 206);
  color: rgb(101, 43, 35);
`;

export const Img = styled.img`
  grid-area: a1;
  width: 25px;
`;

export const Title = styled.h1`
  grid-area: a2;
  height: 50px;
  font-size: 2rem;
  line-height: 50px;
`;

export const Ul = styled.ul`
  grid-area: a3;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  list-style-type: none;
  padding: 0 20px 0 0;
  margin-left: 0;
  align-items: center;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 2px solid rgba(237, 224, 206);
  transition: border-bottom-color 0.2s ease-in-out;

  &:hover {
    border-bottom-color: rgb(101, 43, 35);
  }
`;
