import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Environment() {
    const [Environment, setEnvironments] = useState();
    const fetchData = async () => {
        let resonse = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=Environment&apiKey=524661fbfd13483594486c2756ae530b")
        
        
        let data = await resonse.json();
        console.log('data :', data);
        setEnvironments(data.articles)
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <div className="row">
                <h1 className='d-flex justify-content-center'>Environment News</h1>
                <Link to={'/'}>Back</Link>
                {
                    Environment && Environment.map((data) => {
                        return (
                            <div className="col-3">
                                <div class="card" style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem", boxShadow: "2px 2px 8px gray" }}>
                                    <img src={data.urlToImage} class="card-img-top" width={'200px'} height={'200px'} alt="..." />
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

export default Environment
