import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const HeaderContent = styled.div`
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxTitle = styled.div`
  margin-top: 50px;
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
  margin-top: 50px;
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
  display: flex;
  align-items: center;
  flex-direction: row;
`;
