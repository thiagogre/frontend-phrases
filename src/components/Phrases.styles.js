import styled from 'styled-components'

export const Phrase = styled.div`
  text-align: center;
  max-width: 1000px;
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color:blanchedalmond;
  border-radius: 0 0 2rem 2rem;
  transition: 500ms;
  :hover {
    transform: scale(1.01, 1.01);
  }
  h1 {
    padding-top: 2rem;
    margin-bottom: 1rem;
  }
  .input {
    font-size: 1.2rem;
    text-decoration: none;
    padding: 0.4rem;
    border: none;
    background-color: whitesmoke;
    color: #707070;
    border-radius: 0.6rem 0 0 0.6rem;
    outline: none;
  }
  .btn {
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0.4rem;
    border-radius: 0 0.6rem 0.6rem 0;
    background-color: #6B78B4;
    border: none;
    color: white;
    transition: 500ms;
    margin-bottom: 2rem;
  }
  .btn:hover {
    transform: scale(1.1, 1.1);
  }
  .content {
    padding-top: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin: 0;
    border-top: 6px solid #593E1A;
  }
  .content p {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  .content .portuguese p:hover {
    border-radius: 4rem;
    background-image: linear-gradient(to right, #FFFF33, #32CD32);
  }
  .content .english p:hover {
    border-radius: 4rem;
    background-image: linear-gradient(to right, #e74c3c, #3498db);
  }
  .error {
    color: #ff5252;
  }
`