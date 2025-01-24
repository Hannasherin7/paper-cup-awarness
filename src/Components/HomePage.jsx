import React from 'react';
import Navbar from './Navbar';

function HomePage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Navbar/>
      <nav style={{ backgroundColor: '#4CAF50', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '20px', color: 'white', fontWeight: 'bold' }}>Paper Cup Awareness</div>
        
      </nav>

      
      <section style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f4f4f4' }}>
        <h1 style={{ fontSize: '40px', color: '#2d6a4f' }}>Say No to Paper Cups</h1>
        <p style={{ fontSize: '18px', color: '#2d6a4f', maxWidth: '700px', margin: '0 auto' }}>
          Disposable paper cups are harmful to our environment and health. Let's work together to reduce their usage and find better alternatives.
        </p>
        <img src="https://via.placeholder.com/600x300" alt="Paper Cup Awareness" style={{ width: '80%', marginTop: '20px' }} />
      </section>

      {/* Quotes Section */}
      <section style={{ textAlign: 'center', padding: '40px', backgroundColor: '#e1f7d5' }}>
        <h2 style={{ color: '#2d6a4f' }}>Why It Matters</h2>
        <p style={{ fontSize: '20px', fontStyle: 'italic', color: '#555' }}>
          "The greatest threat to our planet is the belief that someone else will save it." - Robert Swan
        </p>
        <p style={{ fontSize: '20px', fontStyle: 'italic', color: '#555' }}>
          "We do not inherit the earth from our ancestors, we borrow it from our children." - Native American Proverb
        </p>
      </section>

      {/* Call to Action */}
      <section style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f4f4f4' }}>
        <h2 style={{ color: '#2d6a4f' }}>Join Us in the Movement</h2>
        <p style={{ fontSize: '18px', color: '#333', maxWidth: '700px', margin: '0 auto' }}>
          Together, we can reduce the usage of paper cups and promote more sustainable alternatives. Get involved today!
        </p>
        <button style={ctaButtonStyle}>Get Involved</button>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#4CAF50', color: 'white' }}>
        <p>&copy; 2025 Paper Cup Awareness. All rights reserved.</p>
      </footer>
    </div>
  );
}

const navLinkStyle = {
  color: 'white',
  marginLeft: '20px',
  textDecoration: 'none',
  fontSize: '18px',
};

const ctaButtonStyle = {
  backgroundColor: '#2d6a4f',
  color: 'white',
  padding: '12px 25px',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
};

export default HomePage;
