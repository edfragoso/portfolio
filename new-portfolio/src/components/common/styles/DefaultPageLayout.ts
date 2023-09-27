import styled from "styled-components";

export const DefaultPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 14px;
  min-height: 100vh;

  background-color: var(--bg-primary);

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    padding: 14px 10px;
  }
 
`;

