import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  padding: 30px;
  margin: 80px auto;

  h1{
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg{
      margin-right: 10px
    }
  }


  @media screen and (max-width: 1366px){
    max-width: 700px;
  }

  @media screen and (max-width: 720px){
    max-width: 650px;
  }

  @media screen and (max-width: 700px){
    max-width: 550px;
  }






`;

export default Container;
