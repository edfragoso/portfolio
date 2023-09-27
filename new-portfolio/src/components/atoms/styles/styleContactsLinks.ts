import styled from "styled-components";

export const ContactsList = styled.div`
  a {
    color: var(--second-color);
    text-decoration: none;
  }

  i {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      padding: 0.3rem;
      margin: 0.5rem 1rem;
      transition: text-shadow 0.3s ease;
    }
    &:hover {
      font-weight: 600;
      text-shadow: 4px 8px 8px rgba(0, 0, 0, 0.8);
    }
  }
`;
