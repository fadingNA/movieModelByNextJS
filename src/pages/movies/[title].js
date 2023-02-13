import React from "react";
import useSWR from "swr";
import Movie from "@/components/MovieDetail";
import Error from "next/error";
import PageHeader from "@/components/PageHeader";
import {useRouter} from "next/router";


export default function Movies(){
    const router = useRouter();
    const { title } = router.query;
    let endpoint = 'https://exuberant-trench-coat-wasp.cyclic.app';
    const {data,erorr} = useSWR(`${endpoint}/api/movies?page=1&perPage=10&title=${title}`)
    //https://exuberant-trench-coat-wasp.cyclic.app/api/movies?page=1&perPage=10&title=title
    if(!data){
        return null;
    }
    if(data.length === 0){
        return <Error statusCode={404}/>
    }

    return (
        <div>
            {data.map((movie) => (
                <div key={movie._id}>
                    <PageHeader title={movie.title} />
                    <Movie movie={movie} />
                </div>
            ))}
        </div>
    );
}