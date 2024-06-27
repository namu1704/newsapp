import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Pollution() {
    const [Pollution, setPollution] = useState();
    const fetchData = async () => {
        let resonse = await fetch("http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key")
        
        
        let data = await resonse.json();
        console.log('data :', data);
        setPollution(data.articles)
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <div className="row">
                <h1 className='d-flex justify-content-center'>Pollution News</h1>
                <Link to={'/'}>Back</Link>
                {
                    Pollution&& Pollution.map((data) => {
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

export default Pollution