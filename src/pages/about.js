import React from "react";
import Link from "next/link";
import {Card} from "react-bootstrap";
import Movie from "@/components/MovieDetail";
import PageHeader from "@/components/PageHeader";


export function getStaticProps() {
    const _id = "573a13d3f29313caabd9690b";

    return new Promise((resolve, reject) => {
        fetch(`https://exuberant-trench-coat-wasp.cyclic.app/api/movies/${_id}`)
            .then((res) => res.json())
            .then((data) => {
                resolve({props: {movie: data}});
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export default function About(props) {
    return (
        <>
            <PageHeader text="About the Developer Nonthachai"/>
            <br/>
            <Card>
                <Card.Body>
                    <p>I want to be All-around developer</p>
                    <Link href="/movies/Trash">
                        Trash
                    </Link>
                    <Movie movie={props.movie}/>
                </Card.Body></Card>
        </>
    )
}