import React from "react";
import MainNav from "@/components/nav/Nav";
import {Container} from "react-bootstrap";
import Footer from "@/components/footer/Footer";


export default function Layout(props) {
    return (
        <>
            <MainNav/>
            <br/>
            <Container>
                {props.children}
            </Container>
            <Footer/>
        </>
    )
}