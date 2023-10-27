import styled from "styled-components";

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Spinner = styled.div`
  border: 6px solid rgba(255, 255, 255, 0.3);
  border-top: 6px solid #007bff; /* Cor do spinner */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
