import React from "react";
import { Container, Card, CardImg, CardText, CardBody, CardSubtitle } from 'reactstrap';

export const Course = ({details})=>{
    return(
        <Container>
            <Card>
                <CardImg></CardImg>
                <CardBody>
                    <CardSubtitle>{details.title}</CardSubtitle>
                    <CardText>{details.desc}</CardText>
                </CardBody>
            </Card>
        </Container>
    )
}