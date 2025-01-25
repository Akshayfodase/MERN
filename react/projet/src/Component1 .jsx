import React from 'react';

const Component1 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hello, World!</h1>
      <p style={styles.text}>Welcome to Component1. This is a simple React component.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
  },
  title: {
    color: '#FF9933',
    fontSize: '24px',
  },
  text: {
    color: '#138808',
    fontSize: '16px',
  },
};

export default Component1;
