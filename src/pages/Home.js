import React from 'react';
import './home.css';
// eslint-disable-next-line
const Home = () => {
    // eslint-disable-next-line
    return (
        <div className="">
            <header className="header-bgc">
                <img className="logo-css" src={"../Artboard – 1.png"} alt={"ec-logo"} width={"400px"} />
            </header>
            <section>
                <div className="black-box">
                    <h4>
                        Technologies: <small><a href={"#"}>*Web</a></small><small><a href={"#"}>*www</a></small><small><a href={"#"}>*sql</a></small><small><a href={"#"}>*React</a></small><small><a href={"#"}>*JavaScript</a></small><small><a href={"#"}>*Angular</a></small>    <br />
                        Tech Companies: <a href={"#"}>**Apple</a> <a href={"#"}>*Microsoft</a>  <br />
                        Social Media: <a href={"#"}>*Twitter</a> <a href={"#"}>*Facebook</a> <br />
                        IT Jobs: <a href={"#"}>*Front-End</a> <a href={"#"}>*Back-End </a> <br />
                        Home Techs: <a href={"#"}>*Smart-Devices</a> <br />
                    </h4>
                </div>
            </section>
            <footer>
                <div className='column'>
                    <h5>@2021 Everyday code, Promising Journey Consulting    <span><a href={""}>Lessons</a> - Blog - Jobs</span></h5>
                </div>

            </footer>
        </div>
    );
}

export default Home;
