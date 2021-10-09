import styled from 'styled-components'


export const Container = styled.div`
  background-color: #3D3F43;
  border-radius: 10px;
  padding: 10px;
  transition: filter 0.3s;
  

  img {
    max-width: 100%;
    display: block;
    margin-bottom: 20px;
    border-radius: 10px;
  }

  p {
    text-align: center;
  }

  &:hover {
    filter: brightness(0.9);
  }
  
`;