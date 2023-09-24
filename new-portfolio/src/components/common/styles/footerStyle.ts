'use client'
import styled from "styled-components";

export const Content = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-top: 1px solid var(--second-color);
  margin-bottom: 30px;
  margin-top: 50px;
  color: var(--second-color);

  p {
    font-size: 11px;
    font-weight: 100;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 1rem;
`;
export const BoxLeft = styled.div`
  /* border: solid 1px blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    margin-top: 30px;
    font-size: 14px;
    font-weight: 300;
  }
`;

export const BoxRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: var(--text-color);
    font-weight: 500;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0;
  }
`;
