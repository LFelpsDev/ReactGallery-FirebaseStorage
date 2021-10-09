import styled from 'styled-components';

export const Container = styled.div`
  background-color: #27282F;
  color: #FFFFFF;
  min-height: 100vh;
`;


export const SubContainer = styled.div`
  margin: 0 auto;
  max-width: 980px;
  padding: 30px 0;
`;


export const Title = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 30px;
`;


export const ScreenWarning = styled.div`
  text-align: center;

  .emoji {
    font-size: 50px;
    margin-bottom: 20px;
  }

  .message {
    font-weight: 500;
    color: red;
    font-size: 1.4rem;
  }
`;

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;


export const FormUpload = styled.form`
  background-color: #3D3F4E;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;

  input[type=file] {
    border: 0;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
    background: #4F4F4F;
    border-radius: 5px;
  }

  button {
    margin-left: 40px;
    font-weight: bold;
    color: #FFFFFF;
    background: #4F4F4F;
    border: 0;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
