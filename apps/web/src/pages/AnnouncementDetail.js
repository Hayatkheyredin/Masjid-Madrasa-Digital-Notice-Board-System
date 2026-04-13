import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const announcements = {
  'special-eid-al-fitr': {
    id: 'special-eid-al-fitr',
    title: 'Special Eid Al-Fitr Prayer 1445H',
    category: 'Event',
    type: 'eid',
    hero: 'https://sheikhdrsultan.ae/Portal/Content/Generated/Thumbnails/4df5a3f5_3201x2581wTransparent.jpg', 
    description: 'Join us for the most joyous occasion of the year! Noor Masjid invites all community members, families, and friends to the Eid Al-Fitr congregational prayer and our annual community festival.',
    details: 'The program includes the Takbeerat, the Eid Prayer, and a Khutbah. Following the formal service, we will have breakfast refreshments, activities for children, and a community bazaar in the parking lot area.',
    features: [
      { label: 'Main Hall & Courtyard', description: 'Extra space arranged for families' },
      { label: 'Zakat Al-Fitr', description: 'Pay before prayer starts ($15/person)' }
    ],
    schedule: [
      { label: 'Takbeerat', time: '7:00 AM' },
      { label: 'Eid Prayer', time: '7:30 AM' },
      { label: 'Eid Khutbah', time: '7:50 AM' },
      { label: 'Breakfast', time: '8:30 AM' }
    ],
    location: '123 Islamic Center Dr, Chicago, IL 60601',
    otherUpdates: [
      { title: 'Ramadan Food Drive Success', info: '2 days ago' },
      { title: 'New Quran Classes for Kids', info: '5 days ago' }
    ]
  },
  'winter-quran-registration': {
    id: 'winter-quran-registration',
    title: 'Quran and Kitab Intensive Registration',
    category: 'Madrasa',
    type: 'madrasa',
    hero: 'https://images.unsplash.com/photo-1623314556929-69d34cb19010?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0YWIlMjBhcmFifGVufDB8fDB8fHww',
    description: 'Najashi Masjid in Koye Feche, Addis Ababa is opening winter Quran enrollment for youth. Select from multiple kitaab tracks, each with a dedicated instructor, timeline, and assessment plan.',
    details: 'This winter program is held at Najashi Masjid and focuses on Quran memorization, Tajweed, and Islamic studies. Classes run Monday through Thursday from 4:00 PM to 6:00 PM. Students will receive all materials and can join the structured kitāb-based tracks.',
    features: [
      { label: 'Age Groups', description: 'no restricted age' },
      { label: 'Transportation', description: 'Pickup from participating schools' },
      { label: 'Materials', description: 'All books and supplies included' },
      { label: 'Multiple Kitaab Tracks', description: 'Select from eight distinct study paths' }
    ],
    kitaabs: [
      {
        name: 'Surah Al-Baqarah (Chapters 1-10)',
        author: 'Imam Al-Qurtubi',
        teacher: 'Ustadh Omar',
        classTime: 'Monday & Wednesday 4:00 PM - 6:00 PM',
        currentPage: 'Page 18',
        yearWritten: '8th century CE',
        image: 'https://quranlearningusa.com/blog/wp-content/uploads/2024/12/147603740-102499925-1566817755.webp',
        description: 'Comprehensive study of the first 10 chapters of Surah Al-Baqarah, focusing on legal rulings, stories of prophets, and practical applications.',
        startDate: 'December 2, 2024',
        endDate: 'January 15, 2025',
        tests: 'Weekly memorization tests, monthly comprehension exams',
        assignments: 'Daily homework, weekly Tafseer summaries',
        relatedWorks: ['Tafseer al-Qurtubi: Selected Lessons', 'Fiqh from Surah Al-Baqarah']
      },
      {
        name: 'Tajweed Rules - Part 1',
        author: 'Sheikh Muhammad Saad Al-Din',
        teacher: 'Ustadh Abdullah',
        classTime: 'Tuesday & Thursday 4:00 PM - 6:00 PM',
        currentPage: 'Lesson 5',
        yearWritten: '2022',
        image: 'https://fastercapital.com/images/company/sharing/tajweed.jpg',
        description: 'Fundamental rules of Quran recitation including proper pronunciation, elongation, and articulation points.',
        startDate: 'December 2, 2024',
        endDate: 'February 28, 2025',
        tests: 'Monthly recitation assessments',
        assignments: 'Daily practice recordings, weekly rule applications',
        relatedWorks: ['Tajweed Rules - Part 2', 'Advanced Quran Recitation']
      },
      {
        name: 'Islamic Studies - Prophets Stories',
        author: 'Shaykh Abdullah Al-Jibrin',
        teacher: 'Sheikh Ahmed',
        classTime: 'Monday & Wednesday 4:15 PM - 5:45 PM',
        currentPage: 'Chapter 3',
        yearWritten: '2020',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyrTqVQu6T-6tttGvvrx1Ouqgf3dV562PXw&s',
        description: 'Stories of major prophets from Adam to Muhammad (PBUH), their struggles and lessons for modern Muslims.',
        startDate: 'December 9, 2024',
        endDate: 'March 15, 2025',
        tests: 'Bi-weekly quizzes on prophet stories',
        assignments: 'Weekly reflection journals, group presentations',
        relatedWorks: ['Lessons from the Prophets', 'Prophetic Character Study']
      },
      {
        name: 'Arabic Grammar Basics',
        author: 'Ustadh Nouman Ali Khan',
        teacher: 'Ustadh Hassan',
        classTime: 'Friday 4:00 PM - 6:00 PM',
        currentPage: 'Noun & Verb Patterns',
        yearWritten: '2019',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRHPvMIe_l_C5hBf611kFoQ4rymcjZqE07A&s',
        description: 'Essential Arabic grammar rules needed for understanding Quran and Hadith, including I\'rab and Sarf.',
        startDate: 'January 6, 2025',
        endDate: 'March 30, 2025',
        tests: 'Weekly grammar exercises, final comprehensive exam',
        assignments: 'Daily grammar drills, sentence construction practice',
        relatedWorks: ['Arabic Grammar for Students', 'Quranic Syntax Simplified']
      },
      {
        name: 'Surah Yusuf Memorization',
        author: 'Ustadh Anas Al-Din',
        teacher: 'Ustadh Omar',
        classTime: 'Tuesday & Thursday 4:15 PM - 5:45 PM',
        currentPage: 'Verse 50',
        yearWritten: '2021',
        image: 'https://img.freepik.com/premium-vector/surah-yusuf-quran-calligraphy-surah-holy-quran-surat-yusuf-islamic-vector_724044-48.jpg',
        description: 'Focused memorization of Surah Yusuf with meaning and tajweed emphasis.',
        startDate: 'December 16, 2024',
        endDate: 'February 10, 2025',
        tests: 'Memorization recitation checkups every two weeks',
        assignments: 'Daily memorization goals and partner review sessions',
        relatedWorks: ['Tafsir Surah Yusuf', 'Stories of the Prophets']
      },
      {
        name: 'Hadith Studies - Riyadh As-Salihin',
        author: 'Imam Nawawi',
        teacher: 'Sheikh Ahmed',
        classTime: 'Saturday 11:00 AM - 1:00 PM',
        currentPage: 'Book 4',
        yearWritten: '1994',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl5WEh6WvsRu0gLkstRShaII2UEBLTbRKSpQ&s',
        description: 'Selected hadiths covering good character, worship, and community conduct.',
        startDate: 'January 2, 2025',
        endDate: 'March 20, 2025',
        tests: 'Weekly hadith understanding quizzes',
        assignments: 'Hadith explanation notes and student presentations',
        relatedWorks: ['Hadith of the Prophet', 'Character Building in Islam']
      },
      {
        name: 'Fiqh Basics for Youth',
        author: 'Sheikh Salih Al-Fawzan',
        teacher: 'Ustadh Abdullah',
        classTime: 'Wednesday 4:00 PM - 6:00 PM',
        currentPage: 'Prayer & Purity',
        yearWritten: '2023',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Z0Osq928SLEaP52NXvg4-khwE_mjyimCWw&s',
        description: 'Introductory fiqh concepts that support correct Quranic practice and daily worship.',
        startDate: 'January 13, 2025',
        endDate: 'April 5, 2025',
        tests: 'Monthly fiqh assessments',
        assignments: 'Case studies and practical application exercises',
        relatedWorks: ['Youth Fiqh Essentials', 'Islamic Rulings for Daily Life']
      },
    ],
    instructors: [
      { name: 'Ustadh Omar', subject: 'Quran Memorization' },
      { name: 'Ustadh Abdullah', subject: 'Tajweed' },
      { name: 'Sheikh Ahmed', subject: 'Islamic Studies' }
    ],
    location: 'Najashi Masjid, Koye Feche, Addis Ababa, Ethiopia',
    otherUpdates: [
      { title: 'Summer Camp Registration Open', info: '3 days ago' },
      { title: 'New Arabic Classes', info: '1 week ago' }
    ]
  },
  'food-drive': {
    id: 'food-drive',
    category: 'Events',
    type: 'event',
    hero: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5xbkV-IPgMXkuCAAHLNliMr4JSd4XYCLXw&s',
    description: 'Help us distribute food parcels to local families in need this Sunday morning. Volunteers needed for sorting and delivery.',
    details: 'We need volunteers to help sort donations, pack food parcels, and deliver to families. All volunteers will receive breakfast and lunch. Gloves and masks will be provided. We also provide Iftar meals during Ramadan.',
    features: [
      { label: 'Volunteer Roles', description: 'Sorting, packing, and delivery' },
      { label: 'Meals Provided', description: 'Breakfast and lunch for volunteers, Iftar program available' },
      { label: 'Safety Measures', description: 'Gloves and masks provided' },
      { label: 'Community Impact', description: 'Help feed 200+ families monthly' }
    ],
    programs: [
      { name: 'Daily Lunch Program', description: 'Hot meals served Monday-Friday for those in need', time: '12:00 PM - 2:00 PM' },
      { name: 'Ramadan Iftar Distribution', description: 'Iftar meals for 150 families during Ramadan', time: 'Sunset daily' },
      { name: 'Weekly Food Parcels', description: 'Non-perishable food packages for families', time: 'Every Sunday' },
      { name: 'Emergency Food Bank', description: '24/7 access for urgent needs', time: 'Available anytime' }
    ],
    volunteerNeeds: [
      'Food sorting and packaging volunteers',
      'Delivery drivers (must have valid license)',
      'Kitchen helpers for meal preparation',
      'Administrative support for tracking donations',
      'Social media coordinators to spread awareness'
    ],
    schedule: [
      { label: 'Setup & Sorting', time: '8:00 AM' },
      { label: 'Packing Parcels', time: '9:00 AM' },
      { label: 'Delivery Teams', time: '10:00 AM' },
      { label: 'Cleanup', time: '2:00 PM' }
    ],
    location: 'Noor Masjid Community Hall, 123 Islamic Center Dr, Chicago, IL 60601',
    otherUpdates: [
      { title: 'Zakat Collection Update', info: '1 day ago' },
      { title: 'Winter Clothing Drive', info: '4 days ago' }
    ]
  },
  'facility-upgrade': {
    id: 'facility-upgrade',
    category: 'General',
    type: 'general',
    hero: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
    description: 'The new wudu area construction is nearly complete. We appreciate your patience during these improvements to our Masjid.',
    details: 'The new wudu facilities include 12 individual stations, modern fixtures, and improved accessibility. The project is expected to be completed by next week.',
    features: [
      { label: '12 Individual Stations', description: 'Private wudu areas for comfort' },
      { label: 'Modern Fixtures', description: 'Energy-efficient and water-saving' },
      { label: 'Accessibility', description: 'Wheelchair accessible design' }
    ],
    facilityIssues: [
      {
        facility: 'Main Prayer Hall Air Conditioning',
        status: 'Out of Service',
        issue: 'Unit needs replacement after 15 years',
        cost: '$12,000',
        estimatedCompletion: 'December 15, 2024'
      },
      {
        facility: 'Women\'s Wudu Area',
        status: 'Limited Capacity',
        issue: 'Only 3 working stations out of 8',
        cost: '$8,500',
        estimatedCompletion: 'January 30, 2025'
      },
      {
        facility: 'Parking Lot Lighting',
        status: 'Partially Working',
        issue: 'Half of lights need replacement',
        cost: '$4,200',
        estimatedCompletion: 'December 20, 2024'
      },
      {
        facility: 'Sound System',
        status: 'Needs Upgrade',
        issue: 'Outdated equipment causing feedback',
        cost: '$6,800',
        estimatedCompletion: 'February 15, 2025'
      }
    ],
    location: 'Noor Masjid Main Building, 123 Islamic Center Dr, Chicago, IL 60601',
    otherUpdates: [
      { title: 'Prayer Hall Renovation', info: '2 weeks ago' },
      { label: 'Parking Lot Expansion', info: '3 weeks ago' }
    ]
  },
  'upcoming-khutbah': {
    id: 'upcoming-khutbah',
    category: 'Friday',
    type: 'khutbah',
    hero: 'https://open-images.acast.com/shows/64c531806624ec0011ae53f0/1699125015368-e9907e55d1eafe175418806313ac1361.jpeg?height=750',
    description: 'We are pleased to announce our guest speakers for the month of November. View the full list and topics online.',
    details: 'This month features inspiring Khutbahs from renowned scholars. Topics include community building, family values, and contemporary Islamic issues.',
    speakers: [
      {
        name: 'Sheikh Ahmed Al-Rashid',
        topic: 'The Importance of Community Bonds in Islam',
        date: 'Nov 3',
        details: 'This Khutbah explores the concept of brotherhood in Islam (Al-Ukhuwwah Al-Islamiyyah) and how Muslims are commanded to support one another. The Sheikh will discuss Quranic verses and Hadiths that emphasize community solidarity, mutual help, and the prohibition of division among believers. This topic is crucial in today\'s world where social media often divides rather than unites communities.'
      },
      {
        name: 'Ustadh Omar Al-Sayed',
        topic: 'Youth and Faith: Navigating Modern Challenges',
        date: 'Nov 10',
        details: 'Focusing on the younger generation, this Khutbah addresses the unique challenges Muslim youth face in maintaining their faith amidst peer pressure, social media influences, and cultural conflicts. The speaker will draw from the examples of the Prophet\'s companions who were young and how they preserved their Islamic identity. This topic is essential as it provides guidance for parents and youth alike in strengthening faith in contemporary society.'
      },
      {
        name: 'Sheikh Muhammad Al-Zahra',
        topic: 'The Blessings of Regular Prayer',
        date: 'Nov 17',
        details: 'This Khutbah delves into the spiritual and worldly benefits of establishing regular prayer (Salah). The Sheikh will explain how prayer serves as a direct connection with Allah, provides discipline, prevents immorality, and brings peace to the heart. Drawing from scientific studies and Islamic teachings, he\'ll demonstrate why maintaining prayer is fundamental to a Muslim\'s success in both worlds.'
      },
      {
        name: 'Imam Hassan Al-Qurashi',
        topic: 'Patience and Gratitude in Times of Trial',
        date: 'Nov 24',
        details: 'In this Khutbah, the Imam will discuss the Islamic concepts of Sabr (patience) and Shukr (gratitude) as essential qualities for Muslims. He\'ll explain how trials and tribulations are tests from Allah, and how maintaining patience and expressing gratitude transforms difficulties into opportunities for spiritual growth. This topic is particularly relevant given current global challenges and personal hardships many face.'
      }
    ],
    location: 'Nejashi Mesjid, Koye Feche, Addis Ababa, Ethiopia ',
    otherUpdates: [
      { title: 'New Khutbah Series Announced', info: '1 week ago' },
      { title: 'Online Khutbah Archive', info: '2 weeks ago' }
    ]
  }
};

function AnnouncementDetail() {
  const { announcementId } = useParams();
  const announcement = announcements[announcementId] || announcements['special-eid-al-fitr'];
  const [selectedKitabIndex, setSelectedKitabIndex] = useState(0);

  useEffect(() => {
    setSelectedKitabIndex(0);
  }, [announcementId]);

  const selectedKitab = announcement.kitaabs?.[selectedKitabIndex] || null;

  const renderSidebarContent = () => {
    switch (announcement.type) {
      case 'event':
        return (
          <div style={{ borderRadius: '24px', padding: '28px', background: 'linear-gradient(180deg, #FF7D33 0%, #F6A35F 100%)', color: '#fff', boxShadow: '0 18px 45px rgba(255, 125, 51, 0.18)' }}>
            <h2 style={{ margin: 0, fontSize: '20px' }}>Our Programs</h2>
            <div style={{ marginTop: '20px', display: 'grid', gap: '14px' }}>
              {announcement.programs.map((program) => (
                <div key={program.name} style={{ padding: '14px 16px', backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: '18px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '4px' }}>{program.name}</div>
                  <div style={{ color: '#FCEDE2', fontSize: '14px', marginBottom: '4px' }}>{program.time}</div>
                  <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px' }}>{program.description}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px' }}>
              <h3 style={{ margin: '0 0 12px', fontSize: '16px' }}>Volunteer Opportunities:</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: 1.6 }}>
                {announcement.volunteerNeeds.map((need, index) => (
                  <li key={index}>{need}</li>
                ))}
              </ul>
            </div>
            <p style={{ margin: '20px 0 0', color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: 1.7 }}>
              Volunteers please arrive 15 minutes early for briefing.
            </p>
          </div>
        );

      case 'khutbah':
        return (
          <div style={{ borderRadius: '24px', padding: '28px', background: 'linear-gradient(180deg, #10B981 0%, #34D399 100%)', color: '#fff', boxShadow: '0 18px 45px rgba(16, 185, 129, 0.18)' }}>
            <h2 style={{ margin: 0, fontSize: '20px' }}>This Month's Khutbah Topics</h2>
            <div style={{ marginTop: '20px', display: 'grid', gap: '14px' }}>
              {announcement.speakers.map((speaker) => (
                <div key={speaker.name} style={{ padding: '14px 16px', backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: '18px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '4px' }}>{speaker.name}</div>
                  <div style={{ color: '#E0F2FE', fontSize: '14px', marginBottom: '6px', fontWeight: 600 }}>{speaker.topic}</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', marginBottom: '8px' }}>{speaker.date}</div>
                  <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', lineHeight: 1.4 }}>{speaker.details}</div>
                </div>
              ))}
            </div>
            <p style={{ margin: '20px 0 0', color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: 1.7 }}>
              Khutbah starts at 1:15 PM. Please arrive early for the best seats.
            </p>
          </div>
        );

      case 'madrasa':
        return (
          <div style={{ borderRadius: '24px', padding: '28px', background: 'linear-gradient(180deg, #3B82F6 0%, #60A5FA 100%)', color: '#fff', boxShadow: '0 18px 45px rgba(59, 130, 246, 0.18)' }}>
            <h2 style={{ margin: 0, fontSize: '20px' }}>Available Kitaabs</h2>
            <div style={{ marginTop: '20px', display: 'grid', gap: '14px' }}>
              {announcement.kitaabs.map((kitab) => (
                <div key={kitab.name} style={{ padding: '14px 16px', backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: '18px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '4px' }}>{kitab.name}</div>
                  <div style={{ color: '#DBEAFE', fontSize: '14px', marginBottom: '6px' }}>By: {kitab.author}</div>
                  <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', marginBottom: '6px' }}>{kitab.startDate} - {kitab.endDate}</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: 1.4 }}>{kitab.description}</div>
                  <div style={{ marginTop: '8px', fontSize: '12px', color: '#BFDBFE' }}>
                    <div>Tests: {kitab.tests}</div>
                    <div>Assignments: {kitab.assignments}</div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ margin: '20px 0 0', color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: 1.7 }}>
              Classes begin December 1st. Registration closes November 25th.
            </p>
          </div>
        );

      case 'general':
        return (
          <div style={{ borderRadius: '24px', padding: '28px', background: 'linear-gradient(180deg, #6B7280 0%, #9CA3AF 100%)', color: '#fff', boxShadow: '0 18px 45px rgba(107, 114, 128, 0.18)' }}>
            <h2 style={{ margin: 0, fontSize: '20px' }}>Facility Status</h2>
            <div style={{ marginTop: '20px', display: 'grid', gap: '14px' }}>
              {announcement.facilityIssues.map((issue) => (
                <div key={issue.facility} style={{ padding: '14px 16px', backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: '18px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '4px' }}>{issue.facility}</div>
                  <div style={{ color: '#F3F4F6', fontSize: '14px', marginBottom: '6px' }}>{issue.status}</div>
                  <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', marginBottom: '6px' }}>{issue.issue}</div>
                  <div style={{ color: '#FDE68A', fontSize: '14px', fontWeight: 600 }}>Cost: {issue.cost}</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>Completion: {issue.estimatedCompletion}</div>
                </div>
              ))}
            </div>
            <p style={{ margin: '20px 0 0', color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: 1.7 }}>
              Expected completion: Next week. We appreciate your patience.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '1180px', margin: '0 auto', color: '#0F172A' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '18px', marginBottom: '30px' }}>
        <div>
          <p style={{ margin: 0, color: '#FB923C', fontSize: '13px', fontWeight: 700, letterSpacing: '1px' }}>Announcements</p>
          <h1 style={{ margin: '12px 0 0', fontSize: '34px' }}>{announcement.title}</h1>
          <p style={{ margin: '14px 0 0', color: '#64748B', maxWidth: '720px', lineHeight: 1.8 }}>
            {announcement.type === 'khutbah' ? 'Explore the full Khutbah schedule and speaker information for this month.' :
             announcement.type === 'madrasa' ? 'Learn about our upcoming Quran intensive program and registration details.' :
             announcement.type === 'event' ? 'Join us for this community service event and make a difference.' :
             announcement.type === 'general' ? 'Stay updated with the latest facility improvements and announcements.' :
             'Explore the full celebration details, schedule, and community information for our upcoming Eid prayer.'}
          </p>
        </div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: '#fff', color: '#334155', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '14px 22px', cursor: 'pointer', fontWeight: 700 }}>
            ← Back to Announcements
          </button>
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.75fr 1fr', gap: '28px', marginBottom: '32px' }}>
        <div style={{ borderRadius: '28px', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 18px 45px rgba(15, 23, 42, 0.08)' }}>
          <div style={{ position: 'relative', width: '100%', height: '420px', overflow: 'hidden' }}>
            <img src={announcement.hero} alt={announcement.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <span style={{ position: 'absolute', top: '24px', left: '24px', backgroundColor: 'rgba(255, 125, 51, 0.95)', color: '#fff', padding: '10px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.4px' }}>
              {announcement.category}
            </span>
          </div>
          <div style={{ padding: '32px 34px' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <button style={{ backgroundColor: '#FF7D33', border: 'none', borderRadius: '14px', color: '#fff', padding: '12px 20px', fontWeight: 700, cursor: 'pointer' }}
                onClick={() => {
                  if (announcement.type === 'madrasa') {
                    alert('Registration form will open. Contact: admin@noormasjid.org or call (555) 123-4567');
                  } else if (announcement.type === 'khutbah') {
                    alert('Reminder set! You will be notified before the Khutbah.');
                  } else if (announcement.type === 'event') {
                    alert('Thank you for your interest! Please contact the events coordinator at events@noormasjid.org');
                  } else {
                    alert('Calendar event added to your device.');
                  }
                }}
              >
                {announcement.type === 'khutbah' ? 'Set Reminder' :
                 announcement.type === 'madrasa' ? 'Register Now' :
                 announcement.type === 'event' ? 'Sign Up to Volunteer' :
                 announcement.type === 'general' ? 'View Progress' :
                 'Add to Calendar'}
              </button>
              <button style={{ backgroundColor: '#F1F5F9', border: 'none', borderRadius: '14px', color: '#334155', padding: '12px 20px', fontWeight: 700, cursor: 'pointer' }}>
                Share
              </button>
            </div>
            <div style={{ marginBottom: '28px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', color: '#0F172A' }}>
                {announcement.type === 'khutbah' ? 'About This Month\'s Khutbahs' :
                 announcement.type === 'madrasa' ? 'Program Overview' :
                 announcement.type === 'event' ? 'Event Details' :
                 announcement.type === 'general' ? 'Update Details' :
                 'About the Celebration'}
              </h2>
              <p style={{ margin: '16px 0 0', color: '#475569', lineHeight: 1.8 }}>
                {announcement.description}
                {announcement.type === 'eid' ? ' We will be celebrating the completion of the blessed month of Ramadan together.' :
                 announcement.type === 'khutbah' ? ' Each Khutbah focuses on contemporary issues affecting our community.' :
                 announcement.type === 'madrasa' ? ' This program is designed to deepen students\' understanding of the Quran.' :
                 announcement.type === 'event' ? ' Your participation helps strengthen our community bonds.' :
                 ' We continue to improve our facilities for better service to the community.'}
              </p>
            </div>
            {announcement.features && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '18px', marginBottom: '28px' }}>
                {announcement.features.map((feature) => (
                  <div key={feature.label} style={{ backgroundColor: '#F8FAFC', borderRadius: '20px', padding: '22px' }}>
                    <h3 style={{ margin: 0, fontSize: '16px', color: '#0F172A' }}>{feature.label}</h3>
                    <p style={{ margin: '10px 0 0', color: '#64748B', fontSize: '14px', lineHeight: 1.8 }}>{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
            {announcement.type === 'madrasa' && selectedKitab && (
              <div style={{ marginBottom: '28px' }}>
                <h2 style={{ margin: '0 0 20px', fontSize: '24px', color: '#0F172A' }}>Winter Kitāb Tracks</h2>
                <p style={{ margin: '0 0 24px', color: '#64748B', lineHeight: 1.8 }}>
                  Select a track below to view full details for each specific kitab, including the teacher, timeline, written author, and assessment plan.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.9fr', gap: '24px' }}>
                  <div style={{ display: 'grid', gap: '18px' }}>
                    {announcement.kitaabs.map((kitab, index) => (
                      <button
                        key={kitab.name}
                        onClick={() => setSelectedKitabIndex(index)}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '120px 1fr',
                          gap: '16px',
                          alignItems: 'center',
                          textAlign: 'left',
                          border: selectedKitabIndex === index ? '2px solid #3B82F6' : '1px solid #E2E8F0',
                          borderRadius: '22px',
                          backgroundColor: selectedKitabIndex === index ? '#EFF6FF' : '#fff',
                          padding: '18px',
                          cursor: 'pointer',
                          boxShadow: selectedKitabIndex === index ? '0 18px 35px rgba(59, 130, 246, 0.14)' : '0 12px 30px rgba(15, 23, 42, 0.06)'
                        }}
                      >
                        <div style={{ width: '120px', height: '120px', borderRadius: '18px', overflow: 'hidden' }}>
                          <img src={kitab.image} alt={kitab.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div>
                          <p style={{ margin: 0, color: '#0F172A', fontSize: '15px', fontWeight: 700 }}>{kitab.name}</p>
                          <p style={{ margin: '8px 0 10px', color: '#475569', fontSize: '13px', lineHeight: 1.6 }}>{kitab.author}</p>
                          <p style={{ margin: 0, color: '#64748B', fontSize: '13px' }}>{kitab.classTime}</p>
                          <p style={{ margin: '6px 0 0', color: '#94A3B8', fontSize: '12px' }}>{kitab.startDate} – {kitab.endDate}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div style={{ borderRadius: '28px', backgroundColor: '#F8FAFC', padding: '28px', boxShadow: '0 18px 45px rgba(15, 23, 42, 0.08)' }}>
                    <div style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '22px' }}>
                      <img src={selectedKitab.image} alt={selectedKitab.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p style={{ margin: 0, color: '#64748B', fontSize: '13px' }}>Selected Kitāb</p>
                      <h3 style={{ margin: '10px 0 6px', fontSize: '24px', color: '#0F172A' }}>{selectedKitab.name}</h3>
                      <p style={{ margin: 0, color: '#475569', lineHeight: 1.8 }}>{selectedKitab.description}</p>
                    </div>

                    <div style={{ marginTop: '24px', display: 'grid', gap: '16px' }}>
                      {[
                        { label: 'Teacher', value: selectedKitab.teacher },
                        { label: 'Author', value: selectedKitab.author },
                        { label: 'Class Time', value: selectedKitab.classTime },
                        { label: 'Current Page', value: selectedKitab.currentPage },
                        { label: 'Duration', value: `${selectedKitab.startDate} to ${selectedKitab.endDate}` },
                        { label: 'Written', value: selectedKitab.yearWritten }
                      ].map((item) => (
                        <div key={item.label} style={{ padding: '18px', backgroundColor: '#fff', borderRadius: '20px' }}>
                          <p style={{ margin: 0, color: '#64748B', fontSize: '12px' }}>{item.label}</p>
                          <p style={{ margin: '8px 0 0', color: '#0F172A', fontWeight: 700 }}>{item.value}</p>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: '24px', display: 'grid', gap: '16px' }}>
                      <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '20px' }}>
                        <h4 style={{ margin: '0 0 10px', fontSize: '18px', color: '#0F172A' }}>Assessment Plan</h4>
                        <p style={{ margin: 0, color: '#475569', lineHeight: 1.8 }}>{selectedKitab.tests} and assignments include {selectedKitab.assignments}.</p>
                      </div>
                      <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '20px' }}>
                        <h4 style={{ margin: '0 0 10px', fontSize: '18px', color: '#0F172A' }}>Related Works</h4>
                        <ul style={{ margin: 0, paddingLeft: '20px', color: '#475569', lineHeight: 1.8 }}>
                          {selectedKitab.relatedWorks.map((work) => (
                            <li key={work}>{work}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <p style={{ margin: 0, color: '#475569', lineHeight: 1.8 }}>
              {announcement.details}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {renderSidebarContent()}

          <div style={{ borderRadius: '24px', padding: '26px', backgroundColor: '#fff', boxShadow: '0 18px 45px rgba(15, 23, 42, 0.06)' }}>
            <h3 style={{ margin: 0, fontSize: '18px', color: '#0F172A' }}>Location</h3>
            <div style={{ marginTop: '18px', height: '200px', borderRadius: '20px', overflow: 'hidden', backgroundColor: '#E2E8F0', backgroundImage: 'url(https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <p style={{ margin: '18px 0 0', color: '#475569', lineHeight: 1.7 }}>{announcement.location}</p>
          </div>

          <div style={{ borderRadius: '24px', padding: '26px', backgroundColor: '#fff', boxShadow: '0 18px 45px rgba(15, 23, 42, 0.06)' }}>
            <h3 style={{ margin: 0, fontSize: '18px', color: '#0F172A' }}>Other Updates</h3>
            <div style={{ marginTop: '20px', display: 'grid', gap: '14px' }}>
              {announcement.otherUpdates.map((update) => (
                <div key={update.title || update.label} style={{ display: 'flex', gap: '14px', alignItems: 'center', backgroundColor: '#F8FAFC', padding: '14px 16px', borderRadius: '18px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#34D399' }} />
                  <div>
                    <p style={{ margin: '0 0 6px', fontWeight: 700, color: '#0F172A' }}>{update.title || update.label}</p>
                    <p style={{ margin: 0, color: '#64748B', fontSize: '13px' }}>{update.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementDetail;
