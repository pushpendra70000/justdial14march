import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { MyComponent } from '../../test'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
    return (
        <>
             <Container className="tbdr">
                <Header></Header>
                <main>
                    <Outlet></Outlet>
                </main>
                <Footer>
                    <MyComponent></MyComponent>
                </Footer>
            </Container>
        </>
    )
}
