import React from "react";
import {Container,Row,Col} from "react-bootstrap";



export default function Movie({movie}) {
    return (
        <Container>
            <Row>
                {movie.poster && (
                    <Col md>
                        <img src={movie.poster} alt="poster" className="w-100" />
                        <br />
                        <br />
                    </Col>
                )}
                <Col md>
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                    <p><strong><hr/>Director: </strong>{movie.directors.join(', ')}</p>
                    <p><strong>Fullplot: </strong>{movie.fullplot}</p>
                    <p><strong>Cast: </strong>{movie.cast ? movie.cast.join(', ') : 'No movie'}</p>
                    <p><strong>Nominated: </strong>{movie.awards.text}</p>
                    <p><strong>IMDB RATING: </strong>{movie.imdb.rating}</p>
                    <p><strong>IMDB VOTES: </strong>{movie.imdb.votes}</p>`
                </Col>
            </Row>
        </Container>
    )
}