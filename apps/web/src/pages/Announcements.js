import React from 'react';
import { useNavigate } from 'react-router-dom';

const featuredAnnouncement = {
  id: 'upcoming-khutbah',
  category: 'Friday',
  title: 'Friday Khutbah: The Importance of Community Bonds',
  description: 'Join us this Friday for an inspiring Khutbah by Sheikh Ahmed focusing on how we can strengthen our community ties and support one another in challenging times.',
  time: 'Friday, Oct 27 · 1:15 PM',
  image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
  type: 'khutbah'
};

const announcements = [
  {
    id: 'winter-quran-registration',
    category: 'Madrasa',
    title: 'Winter Quran Intensive Registration',
    description: 'Registration is now open for our annual winter Quran program for youth ages 7-15. Choose from multiple kitaab tracks with varied start dates and assessments.',
    time: '2 days ago',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
    type: 'madrasa'
  },
  {
    id: 'food-drive',
    category: 'Events',
    title: 'Monthly Community Food Drive',
    description: 'Help us distribute food parcels to local families in need this Sunday morning. Volunteers needed for sorting and delivery.',
    time: '5 hours ago',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80',
    type: 'event'
  },
  {
    id: 'facility-upgrade',
    category: 'General',
    title: 'Facility Upgrade Update',
    description: 'The new wudu area construction is nearly complete. We appreciate your patience during these improvements to our Masjid.',
    time: '1 week ago',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
    type: 'general'
  },
  {
    id: 'upcoming-khutbah',
    category: 'Friday',
    title: 'Upcoming Khutbah Schedule',
    description: 'We are pleased to announce our guest speakers for the month of November. View the full list and topics online.',
    time: 'Yesterday',
    image: 'https://images.unsplash.com/photo-1524213156136-7e6cdd7302df?auto=format&fit=crop&w=900&q=80',
    type: 'khutbah'
  }
];

const filterItems = ['All', 'General', 'Events', 'Madrasa', 'Friday'];

function Announcements() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
        <div>
          <p style={{ margin: 0, color: '#FB923C', fontSize: '14px', fontWeight: '700', letterSpacing: '1px' }}>Announcements</p>
          <h1 style={{ margin: '12px 0 0', fontSize: '38px', color: '#0F172A' }}>Community Announcements</h1>
          <p style={{ margin: '12px 0 0', color: '#64748B', maxWidth: '680px', lineHeight: 1.8 }}>
            Stay updated with the latest news, events, and Friday Khutbah schedules at Noor Masjid.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {filterItems.map((item, index) => (
            <button
              key={item}
              style={{
                border: 'none',
                borderRadius: '999px',
                padding: '10px 18px',
                backgroundColor: index === 0 ? '#FF7D33' : '#F1F5F9',
                color: index === 0 ? '#fff' : '#334155',
                cursor: 'pointer',
                fontWeight: 600,
                boxShadow: index === 0 ? '0 10px 25px rgba(255, 125, 51, 0.18)' : 'none'
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: '#fff', borderRadius: '28px', overflow: 'hidden', marginBottom: '34px', boxShadow: '0 18px 45px rgba(15, 23, 42, 0.08)' }}>
        <div style={{ width: '100%', height: '320px', overflow: 'hidden' }}>
          <img src={featuredAnnouncement.image} alt={featuredAnnouncement.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ padding: '36px 42px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <span style={{ backgroundColor: '#FFF4ED', color: '#FF7D33', padding: '10px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: '700' }}>
              {featuredAnnouncement.category}
            </span>
          </div>
          <h2 style={{ margin: 0, fontSize: '32px', lineHeight: 1.1, color: '#0F172A' }}>{featuredAnnouncement.title}</h2>
          <p style={{ margin: '18px 0 0', color: '#475569', maxWidth: '760px', lineHeight: 1.8 }}>{featuredAnnouncement.description}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '32px', flexWrap: 'wrap', gap: '18px' }}>
            <span style={{ color: '#64748B', fontSize: '14px' }}>{featuredAnnouncement.time}</span>
            <button
              onClick={() => navigate('/announcement/upcoming-khutbah')}
              style={{
                border: 'none',
                backgroundColor: '#FF7D33',
                color: '#fff',
                borderRadius: '14px',
                padding: '14px 26px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Set Reminder
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '24px' }}>
        {announcements.map((item) => (
          <AnnouncementCard key={item.id} item={item} onSelect={() => navigate(`/announcement/${item.id}`)} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '36px' }}>
        <button style={{ border: '1px solid #E2E8F0', backgroundColor: '#fff', color: '#334155', borderRadius: '12px', padding: '14px 24px', fontWeight: 600, cursor: 'pointer' }}>
          Load More Announcements
        </button>
      </div>
    </div>
  );
}

function AnnouncementCard({ item, onSelect }) {
  return (
    <div style={{ borderRadius: '24px', backgroundColor: '#fff', overflow: 'hidden', boxShadow: '0 15px 35px rgba(15, 23, 42, 0.06)', cursor: 'pointer', border: '1px solid #E2E8F0' }} onClick={onSelect}>
      <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ padding: '24px' }}>
        <span style={{ display: 'inline-flex', backgroundColor: '#F1F5F9', color: '#334155', borderRadius: '999px', padding: '8px 12px', fontSize: '12px', fontWeight: 700, marginBottom: '14px' }}>
          {item.category}
        </span>
        <h3 style={{ margin: '0 0 12px', fontSize: '20px', color: '#0F172A' }}>{item.title}</h3>
        <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.8, marginBottom: '18px' }}>{item.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#94A3B8', fontSize: '13px' }}>{item.time}</span>
          <button style={{ border: 'none', backgroundColor: 'transparent', color: '#FF7D33', fontWeight: 700, cursor: 'pointer' }}>View Details →</button>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
