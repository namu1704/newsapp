import React from 'react'
import  {Link}  from 'react-router-dom';
import sports from '../Asstes/sports.jpg'
import Science from '../Asstes/Science.jpg'
import Entertainment from '../Asstes/Entertainment.jpeg'
import Busniess from '../Asstes/Busniess.jpg'
import Pollution from '../Asstes/Pollution.jpeg'
import Environment from '../Asstes/Environment.jpg'
import Health from '../Asstes/Health.jpeg'
import CurrentAffairs from '../Asstes/CurrentAffairs.jpeg'

export const Home = () => {

  return (
    <>
      <div className="mainDiv ">

        <div className="row">

          <div className="col-3">
            <div class="card" style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem", boxShadow: "2px 2px 8px gray" }}>
              <img src={CurrentAffairs} class="card-img-top" alt="..." style={{height:"150px"}} />
              <div class="card-body">
                <h5 class="card-title">CurrentAffairs</h5>

                <p class="card-text">Get The Latest CurrentAffairs News</p>
                <Link className="nav-link active" to='/CurrentAffair'>Get More...</Link>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div class="card" style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem", boxShadow: "2px 2px 8px gray" }}>
              <img src={sports} class="card-img-top" alt="..." style={{height:"150px"}}/>
              <div class="card-body">
                <h5 class="card-title">Sports</h5>

                <p class="card-text">Get The Latest Sports News</p>
                <Link className="nav-link active" to='/sports'>Get More...</Link>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div class="card" style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem", boxShadow: "2px 2px 8px gray" }}>
              <img src={Science} class="card-img-top" alt="..." style={{height:"150px"}} />
              <div class="card-body">
                <h5 class="card-title">Science</h5>

                <p class="card-text">Get The Latest Science News</p>
                <Link className="nav-link active" to='/Science'>Get More...</Link>

              </div>
            </div>
          </div>

          <div className="col-3">
            <div class="card" style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem", boxShadow: "2px 2px 8px gray" }}>
              <img src={Entertainment} class="card-img-top" alt="..." style={{height:"150px"}}/>
              <div class="card-body">
                <h5 class="card-title">Entertainment</h5>

                <p class="card-text">Get The Latest Entertainment News</p>
                <Link className="nav-link active" to='/Entertainment'>Get More...</Link>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div class="card" style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem", boxShadow: "2px 2px 8px gray" }}>
              <img src={Health} class="card-img-top" alt="..." style={{height:"150px"}}/>
              <div class="card-body">
                <h5 class="card-title">Health</h5>

                <p class="card-text">Get The Latest Health News</p>
                <Link className="nav-link active" to='Health/'>Get More...</Link>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div class="card" style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem", boxShadow: "2px 2px 8px gray" }}>
              <img src={Environment} class="card-img-top" alt="..." style={{height:"150px"}}/>
              <div class="card-body">
                <h5 class="card-title">Environment</h5>

                <p class="card-text">Get The Latest Environment News</p>
                <Link className="nav-link active" to='/Environment'>Get More...</Link>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div class="card" style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem", boxShadow: "2px 2px 8px gray" }}>
              <img src={Pollution} class="card-img-top" alt="..."style={{height:"150px"}}/> 
              <div class="card-body">
                <h5 class="card-title">Pollution</h5>

                <p class="card-text">Get The Latest Pollution News</p>
                <Link className="nav-link active" to='/Pollution'>Get More...</Link>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div class="card" style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem", boxShadow: "2px 2px 8px gray" }}>
              <img src={Busniess} class="card-img-top" alt="..."style={{height:"150px"}}/> 
              <div class="card-body">
                <h5 class="card-title">Busniess</h5>

                <p class="card-text">Get The Latest Busniess  News</p>
                <Link className="nav-link active" to='/Busniess'>Get More...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;






