import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  border-style: solid;
  margin: 1rem 1rem;

  img {
    margin: 0.5rem 0.5rem;
  }
`;

export const Content = styled.ul`
  list-style: none;

  h4 {
    font-weight: 500;
    font-size: 20px;
  }

  .fields {
    font-size: 20px;
    font-weight: 800;
  }
`;
