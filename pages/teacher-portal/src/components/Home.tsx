import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.textSection}>
          <h1 style={styles.heading}>Welcome!</h1>
          <h2 style={styles.subheading}>Teacher</h2>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/943/943359.png"
          alt="Female Teacher"
          style={styles.image}
        />
        <div style={styles.buttons}>
          <button style={styles.primaryButton}>Create a Room</button>
          <button style={styles.secondaryButton}>Home of Content AI</button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '350px',
  },
  textSection: {
    marginBottom: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    margin: '0',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#666',
    marginTop: '8px',
  },
  image: {
    width: '160px',
    height: '160px',
    objectFit: 'contain',
    margin: '20px 0',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  primaryButton: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    padding: '12px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
  },
  secondaryButton: {
    backgroundColor: '#e4e4e7',
    color: '#1f2937',
    padding: '12px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 500,
  },
};

export default Home;
