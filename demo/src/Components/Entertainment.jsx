
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Entertainment() {
    const [Entertainment, setEntertainment ] = useState();
    const fetchData = async () => {
        let resonse = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=524661fbfd13483594486c2756ae530b")
        
        let data = await resonse.json();
        console.log('data :', data);
        setEntertainment(data.articles)
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <div className="row">
                <h1 className='d-flex justify-content-center'>Entertainment News</h1>
                <Link to={'/'}>Back</Link>
                {
                    Entertainment && Entertainment.map((data) => {
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

export default Entertainment