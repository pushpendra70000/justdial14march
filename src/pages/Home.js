import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../components/ui/Footer'
import Header from '../components/ui/Header'
import Main from '../components/ui/Main'
import '../style.css'

export default function Home() {
  return (
              <Container className='h_tbdr'>
                <Header></Header>
          <main>main</main>
          <Footer></Footer>
        </Container>
    )
}
