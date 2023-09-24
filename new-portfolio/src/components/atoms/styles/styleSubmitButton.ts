'use client'
import styled from "styled-components";

export const SubButtom = styled.button`
margin-top: 20px;
  width: 10rem;
  border: 1px solid #c778dd;
  color: #fff;
  font-size: 13px;
  font-weight: 300;
  padding: 0.6rem;
  cursor: pointer;
  background-color: #282c33;
  transition: 0.2s ease-in-out;

  &:hover {
    font-weight: 600;
    background-color: rgba(170, 134, 169, 0.2);
    box-shadow: 0 0 3px 2px rgba(200, 80, 192, 0.6);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    /* transform: translateY(-2px); */
  }
`;
