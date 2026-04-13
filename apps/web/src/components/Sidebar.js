import React from 'react';

function Sidebar() {
  return (
    <div style={{ width: '280px', backgroundColor: '#fff', padding: '30px 20px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '50px', paddingLeft: '10px' }}>
        <div style={{ width: '35px', height: '35px', backgroundColor: '#FF7D33', borderRadius: '10px' }}></div>
        <div>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>Noor Masjid</h3>
          <p style={{ margin: 0, fontSize: '10px', color: '#FF7D33', fontWeight: '700', letterSpacing: '1px' }}>MADRASA PORTAL</p>
        </div>
      </div>

     

      <div style={{ paddingLeft: '10px', color: '#94A3B8', fontSize: '14px', fontWeight: '600' }}>⚙️ Settings</div>
    </div>
  );
}

function SidebarItem({ icon, label, active }) {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '15px', 
      padding: '15px 20px', 
      borderRadius: '12px', 
      marginBottom: '8px',
      cursor: 'pointer',
      backgroundColor: active ? '#FF7D33' : 'transparent',
      color: active ? '#fff' : '#64748B',
      fontWeight: '600'
    }}>
      <span>{icon}</span>
      {label}
    </div>
  );
}

export default Sidebar;