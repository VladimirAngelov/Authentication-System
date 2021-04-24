import styled from 'styled-components'

export const NavBar = styled.div`
  padding: 10px 30px 0 30px;
  display: inline;
`

export const LeftNav = styled.div`
  float: left;
  font-size: 18px;
`

export const RightNav = styled.div`
  float: right;
  font-size: 18px;
`

export const NavItem = styled.div`
  margin-right: 10px;
  display: inline-block;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 100px;
  height: 27px;
  background: #498ee4;

  text-align: center;

  a {
    color: white;
    width: 100%;
  }
  
  &:hover {
    transform: scale(1.1);
  }
`