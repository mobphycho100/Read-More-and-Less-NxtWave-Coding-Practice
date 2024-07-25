// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #f1f5f9;
  padding: 30px 20px;
  font-family: Roboto;
`

export const MainContainer = styled.div`
  max-width: 700px;
  width: 100%;
  font-family: Roboto;
`

export const Heading = styled.h1`
  font-size: 32px;
  color: #1e293b;
  text-align: center;
  font-family: Roboto;
`

export const Description = styled.p`
  font-size: 18px;
  color: #334155;
  text-align: center;
`

export const CardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`

export const Image = styled.img`
  width: 100%;
  margin-bottom: 10px;
`

export const CardDescription = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #334155;
  line-height: 1.6;
`

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  background-color: #1f81ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1e72d8;
  }
`
