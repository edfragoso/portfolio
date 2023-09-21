import styled from "styled-components";

export const DefaultPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 14px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: 768px) {
    padding: 24px 30px;
  }
`;
