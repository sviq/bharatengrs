export const companyInfo = {
  name: 'Bharat Engrs',
  address: '290, 2, Krishna Nagar, Makarpura GIDC, Makarpura, Vadodara, Gujarat 390010',
  phone: '0265 2645006',
  email: 'bharat_engrs@yahoo.com',
  whatsapp: '+91 265 2645006',
  website: 'https://bharatengrs.com',
  // Manufacturing description
  description:
    'Manufacturing of electrical switchboards, PCC, MCC, DBs, Busduct and instrument transformers',
  manufacturing: [
    'Electrical Switchboards',
    'PCC (Power Control Centers)',
    'MCC (Motor Control Centers)',
    'DBs (Distribution Boards)',
    'Busduct',
    'Instrument Transformers',
  ],
  
  // Google Maps link - Your actual location
  googleMapsLink: 'https://maps.app.goo.gl/Sd9RBu1UDvfe91KQ6',
  
  // Coordinates: 22°15'20.7"N 73°11'32.4"E
  // Converted to decimal degrees
  coordinates: {
    latitude: 22.25575,  // 22°15'20.7"N
    longitude: 73.19233,  // 73°11'32.4"E
  },
  
  // Business hours: 9am to 7pm (Monday to Saturday)
  businessHours: {
    monday: { open: '09:00', close: '19:00', closed: false },
    tuesday: { open: '09:00', close: '19:00', closed: false },
    wednesday: { open: '09:00', close: '19:00', closed: false },
    thursday: { open: '09:00', close: '19:00', closed: false },
    friday: { open: '09:00', close: '19:00', closed: false },
    saturday: { open: '09:00', close: '19:00', closed: false },
    sunday: { open: null, close: null, closed: true },
  },
  
  // Service areas
  serviceAreas: ['Vadodara', 'Gujarat', 'Ahmedabad', 'Surat', 'Rajkot', 'India'],
  
  socialLinks: [
    { name: 'Facebook', url: 'https://facebook.com/bharatengrs' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/bharatengrs' },
    { name: 'Twitter', url: 'https://twitter.com/bharatengrs' },
  ],
}

