import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  p {
    font-size: 2.5rem;
    color: ${(props) => props.theme["gray-300"]};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: center;

    label {
      font-size: 1rem;
      color: ${(props) => props.theme["gray-300"]};
    }

    button {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
    }
  }

  button {
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
    background: ${(props) => props.theme["pink-500"]};
    border: none;
    border-radius: 0.25rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
      cursor: pointer;
    }

    &:disabled {
      background: ${(props) => props.theme["pink-700"]};
      filter: brightness(0.6);
      cursor: not-allowed;
    }
  }
`;

export const TimerContainer = styled.div`
  font-family: "Orbitron", monospace;
  font-size: 6rem;
  line-height: 10rem;
  color: ${(props) => props.theme["gray-100"]};

  display: flex;
  gap: 1.5rem;

  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 3rem 2rem;
    border-radius: 12px;
    width: 8rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Separator = styled.div`
  padding: 3rem 0;
  color: ${(props) => props.theme["pink-300"]};

  width: 4rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12rem;
  line-height: 1; /* Prevent extra space around the text */
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${(props) => props.theme["gray-300"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

export const TaskInput = styled.input`
  flex: 0;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme["gray-100"]};
  background: ${(props) => props.theme["gray-700"]};
  border: none;
  border-radius: 0.25rem;
  font-size: 1.125rem;

  appearance: none; /* Disable default dropdown arrow */
  -webkit-appearance: none; /* Disable WebKit-specific default dropdown arrow */
  background: none; /* Remove any default background styling */
  outline: none; /* Remove default focus outline */

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesInput = styled.input`
  width: 4rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme["gray-100"]};
  background: ${(props) => props.theme["gray-700"]};
  border: none;
  border-radius: 0.25rem;
`;
