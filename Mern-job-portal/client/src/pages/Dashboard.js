
import Layout from "../components/Layout/Layout";

import React from "react";
import '../styles/dash.css';

const Dashboard = () => {
 
  return (
    
     <Layout>

    
       <div className="App">
            <header className="sticky-header">
                <h1 className="brand_name">
                     Job
                    Search Portal
                </h1>
                <nav>
                    <ul>
                       
                        
                        <li><input
                            type="text"
                            placeholder="Search your dream company..."
                            className="search_button"
                        /></li>
                    </ul>
                </nav>
            </header>
           

  <div>
  <header>
    <div className="container">
      <h1>Job Portal</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <section className="hero">
    <div className="container">
      <h2>Find Your Dream Job</h2>
      <p>Search for jobs, apply online, and get hired!</p>
      <form className="search-form">
        <input type="text" placeholder="Job title, keywords, or company" />
        <input type="text" placeholder="City, state, or zip code" />
        <button type="submit">Search</button>
      </form>
    </div>
  </section>
  <footer>
    <div className="container">
      <p>© 2024 Job Portal. All rights reserved.</p>
    </div>
  </footer>
</div>



           
        </div>
     </Layout>
   
  );
};

export default Dashboard;
