import styled from "styled-components";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: max-content auto max-content;
  align-items: end;
  padding: 10px 20px 10px 10px;
  background-color: rgba(237, 224, 206);
  color: rgb(101, 43, 35);
  gap: 5px;
  white-space: nowrap;
`;

export const Img = styled.img`
  width: 30px;
  padding-bottom: 5px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  // font-size: clamp(1rem, 0.3043rem + 2.1739vw, 2.5rem);
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  font-size: 20px;
`;

export const Li = styled.li`
  cursor: pointer;
  border-bottom: 2px solid rgba(237, 224, 206);
  transition: border-bottom-color 0.2s ease-in-out;

  &:hover {
    border-bottom-color: rgb(101, 43, 35);
  }
`;
