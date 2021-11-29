import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-flow: row wrap;
  height: 300px;
  justify-content: flex-end;
  border-style: none;
  border-radius: 25px;
  margin: 1rem 1rem;
  position: relative;

  img {
    width: 120px;
    height: 60px;
  }

  h2 {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 80px;
    margin-top: 0;
    height: 120px;
  }

  .cardDetails {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    width: 100%;
    margin: 0 1rem;
    height: 120px;
    position: relative;
    margin-top: -60px;
  }

  .cardExpiry {
    width: 40%;
  }

  .bankName {
    width: 40%;
  }

  @media screen and (max-width: 518px) {
    width: 300px;
    height: 200px;

    img {
      width: 100px;
      height: 75px;
    }

    h2 {
      font-size: 30px;
    }

    .cardDetails {
      margin-top: -120px;
    }
  }
`;
