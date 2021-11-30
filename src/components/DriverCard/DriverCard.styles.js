import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  height: 200px;
  justify-content: center;
  background-color: rgba(80, 0, 140, 0.8);
  margin: 1rem 1rem 1rem 1rem;
  border-radius: 15px;

  .imgDiv {
    width: 30%;
    display: flex;
    justify-content: flex-end;
    align-self: center;
  }

  .detailsDiv {
    width: 60%;
    /* background-color: rgba(80, 0, 140, 0.8); */
    display: flex;
    flex-flow: row wrap;
    color: white;
    margin-left: 30px;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .driverName {
    width: 100%;
  }
`;
