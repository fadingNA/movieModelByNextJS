import React from "react";
import {Card} from "react-bootstrap";


export default function PageHeader(props) {
    return (
        //<PageHeader text="Movie Category"/>
        <Card className="bg-light">
            <Card.Body>
                {props.title}
                {props.text}
            </Card.Body>
        </Card>
    );
};