/*********************************************************************************
 *  WEB422 – Assignment 3
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Nonthachai Plodthong Student ID: 152487211 Date: 12/Feb/2023
 *
 *
 ********************************************************************************/


import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Pagination, Accordion } from 'react-bootstrap';
import Movie from "@/components/MovieDetail";
import PageHeader from '@/components/PageHeader';

const Home = () => {
    const [page, setPage] = useState(1);
    const [pageData, setPageData] = useState([]);
    let endpoint = 'https://exuberant-trench-coat-wasp.cyclic.app';
    const { data, error } = useSWR(`${endpoint}/api/movies?page=${page}&perPage=10`);
    console.log(data);
    useEffect(() => {
        if (data) {
            setPageData(data);
        }
    }, [data]);

    const previous = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const next = () => {
        setPage(page + 1);
    };

    return (
        <div className="app__non">
            <div>
                <PageHeader title="Film Collection: Sorted by Date" />
                <Pagination className="app_flex">
                    <Pagination.Prev onClick={previous} />
                    <Pagination.Item className="app_page">{page}</Pagination.Item>
                    <Pagination.Next onClick={next} />
                </Pagination>
                <Accordion className="app__change">
                    {pageData.map((movie) => (
                        <Accordion.Item key={movie._id} eventKey={movie._id}>
                            <Accordion.Header>
                                <b>{movie.title}</b> ({movie.year}) by {movie.directors.join(', ')}
                            </Accordion.Header>
                            <Accordion.Body>
                                <Movie movie={movie} />
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </div>


    );
};

export default Home;
