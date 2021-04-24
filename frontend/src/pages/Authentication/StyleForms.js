import styled from 'styled-components'

export const FormTitle = styled.h2`
  color: white;
  text-align: center;
  margin: 30px 30px 10px 30px;
  display: inline-block;
  font-weight: inherit;
`

export const PasswordInfo = styled.div`
  color: #2a2a2a;
  z-index: -1;
  margin-bottom: 2px;
`

export const PasswordInfoContainer = styled.div`
  z-index: 1;
  background: white;
  opacity: 0.9;
  width: 290px;
  position: fixed;
  border-radius: 10px;
  margin: 5px 0 0 5px;
  box-shadow: 0 5px 15px #1B1B1B;
`

export const Container = styled.div`
  text-align: center;
  margin-top: 10%;
  margin-left: 37%;
`

export const Form = styled.form`
  background: #498ee4;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  top: 50%;
  box-shadow: 0 2px 15px #1B1B1B;
`

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  background: #5a9def;
  margin: 10px 10px 0 10px;
  padding-left: 10px;
  font-size: 16px;
  caret-color: white;
  height: 30px;
  color: white;
  
  &::placeholder {
    color: white;
    opacity: 1;
    text-align: center;
  }
`

export const SubmitBtn = styled.input`
  background: #5a9def;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  color: white;
  margin: 30px 10px 30px 10px;
  font-size: 16px;
  
  &:hover {
    transform: scale(1.1);
  }
`

export const ErrorNotification = styled.div`
  background: rgb(204,43,43);
  background: linear-gradient(0deg, rgba(204,43,43,1) 0%, rgba(255,2,79,1) 100%);
  color: white;
  border-radius: 5px;
  max-width: 300px;
  margin-top: 10px;
`

export const Notification = styled.div`
  background: rgb(60,204,43);
  background: linear-gradient(0deg, rgba(60,204,43,1) 0%, rgba(164,255,2,1) 100%);

  color: white;
  border-radius: 5px;
  max-width: 300px;
  height: 55px;
  width: 300px;
  text-align: center;
  left: 40%;
  position: fixed;
  
  p {
    font-weight: bold;
  }
`

export const EmailConfirm = styled.div`
  margin-top: 5px;
  display: inline-block;
  color: white;
  a {
    color: white;
    text-decoration: underline white;
  }
`