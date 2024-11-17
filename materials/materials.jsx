import React, { useEffect } from 'react';
import material1 from '../Materials/Images/material1.jpg';
import material2 from '../Materials/Images/material2.jpg';
import material3 from '../Materials/Images/material3.jpg';
import material4 from '../Materials/Images/material4.jpg';
import '../../Components/Navbar/Navbar.css';
import './Materials.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function Materials() {

  // browser tab title
  useEffect(() => {
    document.title = 'Materials - Spal';
  }, []);

  // Email functionality
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "efae9b3c-bf15-4bd7-91ed-ff9435feb4d9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Email successfully sent.");
      event.target.reset();
    } else {
      console.log("Error", res);
      toast.error("Error while sending email.");
    }
  };

  return (
    <div>

      <Helmet>
          <title>Materials - Spal</title>
          <meta name="description" content="Collection of educational and resourceful materials." />

          {/* OG Tags */}
          <meta property="og:title" content="Materials - Spal" />
          <meta property="og:description" content="Collection of educational and resourceful materials." />
          <meta property="og:image" content="https://andreschoque.com/static/media/materials-bg.1230c2caaa3e9048b9c2.jpg" />
          <meta property="og:url" content="https://andreschoque.com/materials" />
          <meta property="og:type" content="website" />

          {/* Twitter Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Materials - Spal" />
          <meta name="twitter:description" content="Collection of educational and resourceful materials." />
          <meta name="twitter:image" content="https://andreschoque.com/static/media/materials-bg.1230c2caaa3e9048b9c2.jpg" />
          <meta name="twitter:url" content="https://andreschoque.com/materials"/>
      </Helmet>

      <div className='materials-header'>
        <div className='container'>
          <Navbar/>
        </div>
        <div className='materials-title'>
          <h1>Explore Our Resources</h1>
          <p>Discover a range of materials that support learning and growth.</p>
        </div>
      </div>

      <div className='materials-section'>
        <div className='subscriber-container'>
          <h1>Stay Updated with New Materials</h1>
          <p>Join to get updates on our latest resources and materials.</p>
          <form onSubmit={onSubmit}>
            <input type="email" name="Materials-Subscriber-Email" placeholder='Your Email' required />
            <button type='submit'>Subscribe</button>
          </form>
        </div>

        <div className='materials-list'>
          <div className='materials'>
            <img src={material4} alt="Material-card-1" />
            <h3>Guide to Effective Study Techniques</h3>
            <div className='materials-link'>
              <Link to={'https://cse23.xyz/'}>View Material</Link>
            </div>
            <hr />
            <p className='author'>Spal &nbsp; • &nbsp; August 8, 2024</p>
          </div>

          <div className='materials'>
            <img src={material3} alt="Material-card-2" />
            <h3>Top 10 Learning Platforms to Enhance Skills</h3>
            <div className='materials-link'>
              <Link to={'https://cse23.xyz/'}>View Material</Link>
            </div>
            <hr />
            <p className='author'>Spal &nbsp; • &nbsp; July 28, 2024</p>
          </div>

          <div className='materials'>
            <img src={material2} alt="Material-card-3" />
            <h3>Understanding Time Management for Students</h3>
            <div className='materials-link'>
              <Link to={'https://cse23.xyz/'}>View Material</Link>
            </div>
            <hr />
            <p className='author'>Spal &nbsp; • &nbsp; July 14, 2024</p>
          </div>

          <div className='materials'>
            <img src={material1} alt="Material-card-4" />
            <h3>How to Prepare for Exams Effectively</h3>
            <div className='materials-link'>
              <Link to={'https://cse23.xyz/'}>View Material</Link>
            </div>
            <hr />
            <p className='author'>Spal &nbsp; • &nbsp; June 23, 2024</p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Materials;
