import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className="">
            <header className="header-bgc">
                <img className="logo-css" src="../Artboard – 1.png" alt="ec-logo" width="400px" />
            </header>
            <section>
                <div className="black-box">
                    <h4>

                        Technologies: <a href="#">*Web</a> <a href="#">*www</a> <a href="#">*sql</a> <a href="#">*JavaScript</a> <a href="#">*React</a> <a href="#">*Angular</a><br />
                        Tech Companies: <a href="#">**Apple</a> <a href="#">*Microsoft</a>  <br />
                        Social Media: <a href="#">*Twitter</a> <a href="#">*Facebook</a> <br />
                        IT Jobs: <a href="#">*Front-End</a> <a href="#">*Back-End </a> <br />
                        Home Techs: <a href="#">*Smart-Devices</a> <br />
                    </h4>
                </div>
            </section>
            <footer>
                <div class='column'>
                    <h5>@2021 Everyday code, Promising Journey Consulting    <span>Lessons - Blog - Jobs</span></h5>
                </div>

            </footer>
        </div>
    );
}

export default Home;
