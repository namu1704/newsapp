
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function CurrentAffair() {
    const [CurrentAffairs, setCurrentAffairs ] = useState();
    const fetchData = async () => {
        let response = await fetch("GET https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY");
        let data = await response.json();
        console.log('data :', data);
        setCurrentAffairs(data.articles)
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <div className="row">
                <h1 className='d-flex justify-content-center'>CurrentAffairs News</h1>
                <Link to={'/'}>Back</Link>
                {
                    CurrentAffairs && CurrentAffairs.map((data) => {
                        return (
                            <div className="col-3">
                                <div class="card" style={{ width: "18rem", marginTop: "3rem", marginLeft: "3rem", boxShadow: "2px 2px 8px gray" }}>
                                    <img src={data.urlToImage} class="card-img-top" width={'100px'} height={'100px'} alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{data.author}</h5>

                                        <p class="card-text">{data.title}</p>
                                        <Link className="nav-link active" to={data.url}>Get More...</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CurrentAffair