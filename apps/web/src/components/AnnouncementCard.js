import React from 'react';

function AnnouncementCard({ title, category, level, description, instructor, image }) {
  return (
    <div style={{ 
      display: 'flex', 
      backgroundColor: '#fff', 
      borderRadius: '15px', 
      padding: '20px', 
      marginBottom: '20px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      gap: '20px'
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <span style={{ color: '#E67E22', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>{category}</span>
          <span style={{ color: '#95A5A6', fontSize: '12px' }}>{level}</span>
        </div>
        <h3 style={{ margin: '0 0 10px 0' }}>{title}</h3>
        <p style={{ color: '#7F8C8D', fontSize: '14px' }}>{description}</p>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
          <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#ddd', marginRight: '10px' }}></div>
          <span style={{ fontSize: '13px' }}>Instructor: <strong>{instructor}</strong></span>
        </div>
        <button style={{ 
          marginTop: '20px', 
          backgroundColor: '#fff', 
          border: '1px solid #E67E22', 
          color: '#E67E22', 
          padding: '8px 20px', 
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          + JOIN CLASS
        </button>
      </div>
      <div style={{ width: '200px', height: '130px', borderRadius: '12px', overflow: 'hidden' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  );
}

export default AnnouncementCard;