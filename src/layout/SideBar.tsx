import styled from 'styled-components'

const Container = styled.div`
    width: 351px;
    border: 1px solid #ff2d87;
    
`

const Inner = styled.div`
    //border: 1px solid #ff2d87;
    //border-radius: 20px;
    //height: 143px;
    //margin: 24px;
`

export const SideBar = () => {
  return (
    <Container>
      <Inner></Inner>
    </Container>
  )
}
