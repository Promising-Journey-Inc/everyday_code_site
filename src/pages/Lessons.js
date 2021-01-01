import React from 'react';
import './lessons.css';
// eslint-disable-next-line
const Lessons = () => {
    // eslint-disable-next-line
    return (
        <div>
            <nav className="header">
                <img className="" className="logo" src={"../Artboard – 1.png"} alt={"ec-logo"} width={"80"} />
                <ul className="main-nav">
                    <li><a href={"#"}>Home</a></li>
                    <li><a href={"#"}>Lessons</a></li>
                    <li><a href={"#"}>Blog</a></li>
                    <li><a href={"#"}>What's New</a></li>
                    <li><a href={"#"}>Tech</a></li>
                </ul>
            </nav>
            <section>
                <div className="wrapper">
                    <div className="box">
                        <div className="boxes">
                            <h1>Checkout our YouTube Channel</h1>
                        </div>
                        <div className="boxes">
                            <h1>Checkout our YouTuve Channel</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Lessons;
