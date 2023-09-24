'use client'
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  color: var(--text-color);

  p {
    margin: 0 3px 0 1px;
  }
  span {
    color: var(--primary-color);
  }
`;

export const Target = styled.div`
  a {
    color: var(--second-color);
    text-decoration: none;
    font-weight: 400;
    font-size: 12px;
    font-style: italic;

    &:hover {
      font-weight: 600;
      color: #ffffff;
      border-bottom: solid 1px var(--primary-color);
    }
  }
`;

export const SectionContent = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
