import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

import './App.css'

import { Header } from './layout/Header.tsx'
import { MainContent } from './layout/MainContent.tsx'
import { SideBar } from './layout/SideBar.tsx'
import { Footer } from './layout/Footer.tsx'


const ContentContainer = styled.div`
  flex: 1;
`
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const PageLayout = styled.div`
  flex-grow: 1;
  display: flex;
`

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <PageLayout>
          <ContentContainer>
            <Header />
            <MainContent />
          </ContentContainer>
          <SideBar />
        </PageLayout>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  )
}

export default App
