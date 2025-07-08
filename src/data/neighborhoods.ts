import { NeighborhoodData } from '../types';

export const neighborhoods: NeighborhoodData[] = [
  {
    id: 'mumbai-bandra',
    name: 'Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    description: 'Trendy neighborhood with upscale dining, Bollywood celebrity homes, and vibrant nightlife scene.',
    image: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=800',
    demographics: {
      population: 180000,
      medianAge: 32,
      medianIncome: 1200000,
      educationLevel: 'Graduate Degree',
      diversityIndex: 0.78
    },
    lifestyle: {
      walkabilityScore: 85,
      transitScore: 82,
      bikeScore: 65,
      nightlifeScore: 92,
      diningScore: 95,
      shoppingScore: 88,
      parksScore: 72,
      culturalScore: 89
    },
    amenities: {
      restaurants: 425,
      bars: 78,
      cafes: 156,
      parks: 8,
      gyms: 35,
      schools: 22,
      hospitals: 5,
      libraries: 3
    },
    housing: {
      medianHomePrice: 25000000,
      medianRent: 85000,
      propertyTax: 0.8,
      homeownershipRate: 0.42
    },
    safety: {
      crimeRate: 12.5,
      safetyScore: 82
    },
    climate: {
      averageTemp: 28,
      rainyDays: 120,
      sunnyDays: 200
    },
    commute: {
      averageCommuteTime: 45,
      publicTransitAccess: 85,
      walkingCommute: 15
    }
  },
  {
    id: 'bangalore-koramangala',
    name: 'Koramangala',
    city: 'Bangalore',
    state: 'Karnataka',
    description: 'Tech hub with startup culture, modern cafes, and young professional community.',
    image: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=800',
    demographics: {
      population: 125000,
      medianAge: 29,
      medianIncome: 950000,
      educationLevel: 'Graduate Degree',
      diversityIndex: 0.85
    },
    lifestyle: {
      walkabilityScore: 78,
      transitScore: 72,
      bikeScore: 82,
      nightlifeScore: 88,
      diningScore: 92,
      shoppingScore: 85,
      parksScore: 68,
      culturalScore: 84
    },
    amenities: {
      restaurants: 380,
      bars: 65,
      cafes: 145,
      parks: 12,
      gyms: 28,
      schools: 18,
      hospitals: 4,
      libraries: 5
    },
    housing: {
      medianHomePrice: 12000000,
      medianRent: 45000,
      propertyTax: 0.6,
      homeownershipRate: 0.38
    },
    safety: {
      crimeRate: 8.2,
      safetyScore: 88
    },
    climate: {
      averageTemp: 24,
      rainyDays: 85,
      sunnyDays: 250
    },
    commute: {
      averageCommuteTime: 35,
      publicTransitAccess: 75,
      walkingCommute: 12
    }
  },
  {
    id: 'delhi-cp',
    name: 'Connaught Place',
    city: 'New Delhi',
    state: 'Delhi',
    description: 'Historic commercial center with colonial architecture, shopping, and cultural landmarks.',
    image: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=800',
    demographics: {
      population: 95000,
      medianAge: 35,
      medianIncome: 1100000,
      educationLevel: 'Graduate Degree',
      diversityIndex: 0.82
    },
    lifestyle: {
      walkabilityScore: 92,
      transitScore: 88,
      bikeScore: 58,
      nightlifeScore: 85,
      diningScore: 89,
      shoppingScore: 95,
      parksScore: 75,
      culturalScore: 94
    },
    amenities: {
      restaurants: 320,
      bars: 45,
      cafes: 89,
      parks: 6,
      gyms: 22,
      schools: 15,
      hospitals: 3,
      libraries: 4
    },
    housing: {
      medianHomePrice: 18000000,
      medianRent: 65000,
      propertyTax: 0.7,
      homeownershipRate: 0.35
    },
    safety: {
      crimeRate: 18.5,
      safetyScore: 75
    },
    climate: {
      averageTemp: 25,
      rainyDays: 65,
      sunnyDays: 280
    },
    commute: {
      averageCommuteTime: 42,
      publicTransitAccess: 92,
      walkingCommute: 25
    }
  },
  {
    id: 'pune-koregaon-park',
    name: 'Koregaon Park',
    city: 'Pune',
    state: 'Maharashtra',
    description: 'Upscale area with German Bakery culture, expat community, and serene ashram atmosphere.',
    image: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=800',
    demographics: {
      population: 45000,
      medianAge: 31,
      medianIncome: 850000,
      educationLevel: 'Graduate Degree',
      diversityIndex: 0.75
    },
    lifestyle: {
      walkabilityScore: 82,
      transitScore: 68,
      bikeScore: 85,
      nightlifeScore: 78,
      diningScore: 88,
      shoppingScore: 82,
      parksScore: 88,
      culturalScore: 92
    },
    amenities: {
      restaurants: 185,
      bars: 35,
      cafes: 95,
      parks: 15,
      gyms: 18,
      schools: 12,
      hospitals: 3,
      libraries: 2
    },
    housing: {
      medianHomePrice: 8500000,
      medianRent: 32000,
      propertyTax: 0.5,
      homeownershipRate: 0.48
    },
    safety: {
      crimeRate: 6.8,
      safetyScore: 92
    },
    climate: {
      averageTemp: 26,
      rainyDays: 95,
      sunnyDays: 240
    },
    commute: {
      averageCommuteTime: 28,
      publicTransitAccess: 72,
      walkingCommute: 18
    }
  },
  {
    id: 'hyderabad-hitech-city',
    name: 'HITEC City',
    city: 'Hyderabad',
    state: 'Telangana',
    description: 'IT corridor with modern infrastructure, tech companies, and contemporary lifestyle.',
    image: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=800',
    demographics: {
      population: 85000,
      medianAge: 28,
      medianIncome: 920000,
      educationLevel: 'Graduate Degree',
      diversityIndex: 0.88
    },
    lifestyle: {
      walkabilityScore: 75,
      transitScore: 78,
      bikeScore: 72,
      nightlifeScore: 82,
      diningScore: 85,
      shoppingScore: 88,
      parksScore: 82,
      culturalScore: 78
    },
    amenities: {
      restaurants: 245,
      bars: 42,
      cafes: 78,
      parks: 18,
      gyms: 25,
      schools: 16,
      hospitals: 4,
      libraries: 3
    },
    housing: {
      medianHomePrice: 9500000,
      medianRent: 38000,
      propertyTax: 0.4,
      homeownershipRate: 0.52
    },
    safety: {
      crimeRate: 7.5,
      safetyScore: 89
    },
    climate: {
      averageTemp: 27,
      rainyDays: 75,
      sunnyDays: 270
    },
    commute: {
      averageCommuteTime: 32,
      publicTransitAccess: 82,
      walkingCommute: 8
    }
  },
  {
    id: 'chennai-adyar',
    name: 'Adyar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    description: 'Cultural hub with Theosophical Society, beach access, and traditional South Indian charm.',
    image: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=800',
    demographics: {
      population: 165000,
      medianAge: 33,
      medianIncome: 780000,
      educationLevel: 'Bachelor\'s Degree',
      diversityIndex: 0.68
    },
    lifestyle: {
      walkabilityScore: 88,
      transitScore: 82,
      bikeScore: 78,
      nightlifeScore: 72,
      diningScore: 92,
      shoppingScore: 85,
      parksScore: 85,
      culturalScore: 95
    },
    amenities: {
      restaurants: 285,
      bars: 28,
      cafes: 65,
      parks: 22,
      gyms: 20,
      schools: 25,
      hospitals: 6,
      libraries: 8
    },
    housing: {
      medianHomePrice: 7800000,
      medianRent: 28000,
      propertyTax: 0.6,
      homeownershipRate: 0.58
    },
    safety: {
      crimeRate: 9.2,
      safetyScore: 86
    },
    climate: {
      averageTemp: 29,
      rainyDays: 55,
      sunnyDays: 285
    },
    commute: {
      averageCommuteTime: 38,
      publicTransitAccess: 85,
      walkingCommute: 22
    }
  },
  {
    id: 'kolkata-salt-lake',
    name: 'Salt Lake City',
    city: 'Kolkata',
    state: 'West Bengal',
    description: 'Planned township with IT sector, modern amenities, and intellectual community.',
    image: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=800',
    demographics: {
      population: 220000,
      medianAge: 34,
      medianIncome: 720000,
      educationLevel: 'Graduate Degree',
      diversityIndex: 0.72
    },
    lifestyle: {
      walkabilityScore: 85,
      transitScore: 78,
      bikeScore: 82,
      nightlifeScore: 75,
      diningScore: 88,
      shoppingScore: 82,
      parksScore: 92,
      culturalScore: 89
    },
    amenities: {
      restaurants: 195,
      bars: 32,
      cafes: 58,
      parks: 28,
      gyms: 18,
      schools: 20,
      hospitals: 4,
      libraries: 6
    },
    housing: {
      medianHomePrice: 6200000,
      medianRent: 22000,
      propertyTax: 0.8,
      homeownershipRate: 0.62
    },
    safety: {
      crimeRate: 11.8,
      safetyScore: 84
    },
    climate: {
      averageTemp: 27,
      rainyDays: 125,
      sunnyDays: 210
    },
    commute: {
      averageCommuteTime: 35,
      publicTransitAccess: 82,
      walkingCommute: 15
    }
  },
  {
    id: 'gurgaon-cyber-city',
    name: 'Cyber City',
    city: 'Gurgaon',
    state: 'Haryana',
    description: 'Modern business district with multinational companies, luxury malls, and urban lifestyle.',
    image: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=800',
    demographics: {
      population: 75000,
      medianAge: 30,
      medianIncome: 1350000,
      educationLevel: 'Graduate Degree',
      diversityIndex: 0.89
    },
    lifestyle: {
      walkabilityScore: 72,
      transitScore: 68,
      bikeScore: 58,
      nightlifeScore: 88,
      diningScore: 90,
      shoppingScore: 95,
      parksScore: 65,
      culturalScore: 75
    },
    amenities: {
      restaurants: 165,
      bars: 48,
      cafes: 72,
      parks: 8,
      gyms: 32,
      schools: 14,
      hospitals: 3,
      libraries: 2
    },
    housing: {
      medianHomePrice: 15000000,
      medianRent: 55000,
      propertyTax: 0.3,
      homeownershipRate: 0.35
    },
    safety: {
      crimeRate: 14.2,
      safetyScore: 78
    },
    climate: {
      averageTemp: 26,
      rainyDays: 45,
      sunnyDays: 295
    },
    commute: {
      averageCommuteTime: 48,
      publicTransitAccess: 72,
      walkingCommute: 5
    }
  }
];