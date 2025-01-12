import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 1rem;

    a {
      color: ${(props) => props.theme["gray-100"]};
      font-size: 1.5rem;
      transition: color 0.2s;

      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent;

      &:hover {
        color: ${(props) => props.theme["pink-700"]};
        border-bottom: 3px solid ${(props) => props.theme["pink-700"]};
      }

      &.active {
        color: ${(props) => props.theme["pink-500"]};
      }
    }
  }
`;
