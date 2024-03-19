import React from "react";
import {NavLink} from "react-router-dom";



function Home() {
    return(
      <>
        <section id="header" className="d-flex align-items-center">
         <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
             <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
              <h1> Grow your business with <strong className="brand-name"><br/> Mk Advertisers</strong>
              </h1>
              <h4 className="my-3">
                We are the team of talented developers making your product reach to every one globally!

              </h4>
              <div className="mt-3">
                <NavLink to="/service" className="btn-get-started ">Get started</NavLink>
                
              </div>
             </div>

             <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={"logo512.png"} className="img-fluid animated" alt="home img">
              </img>
             </div> 
            </div>
            </div>
          </div>
        </div>

        </section>
      </>
    );
   };
  
    
      
  export default Home;