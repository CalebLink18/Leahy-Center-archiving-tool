// Enhanced artifact data structure for ethnography archive
export const artifacts = [
  {
    id: 1,
    title: "Abenaki Sweetgrass Gathering Basket",
    image: "/src/assets/artifacts/artifact.jpg",
    
    // Basic Info
    tags: ["craftwork", "daily life", "cultural tradition", "Abenaki", "basket weaving"],
    uploader: "John Doe",
    uploadDate: "2024-01-15",
    fileType: "image/jpeg",
    fileSize: "2.4 MB",
    dimensions: "1920x1080",
    
    // Ethnography Core Fields
    context: "This traditional sweetgrass basket was documented during fieldwork at the Burlington Farmers Market, where the artisan sells their work every Saturday during the summer season. The basket represents the continued practice of traditional Abenaki basket weaving techniques passed down through generations.",
    
    // Where - Location Information
    location: {
      place: "Burlington Farmers Market",
      city: "Burlington",
      state: "Vermont",
      country: "USA",
      coordinates: "44.4759° N, 73.2121° W"
    },
    
    // When - Time Period
    timePeriod: {
      created: "Spring 2023",
      documented: "January 15, 2024",
      era: "Contemporary"
    },
    
    // Who - Subject Information
    subject: {
      name: "Maria S.", // Pseudonym for privacy
      isPseudonym: true,
      role: "Artisan / Basket Weaver",
      community: "Abenaki"
    },
    
    // Descriptions
    description: "A traditional sweetgrass basket used for gathering and storing produce. The basket demonstrates intricate weaving patterns characteristic of Northeastern Native American craftsmanship.",
    
    physicalDescription: {
      materials: "Sweetgrass, ash wood splints, natural dyes",
      dimensions: "12 inches diameter, 8 inches height",
      condition: "Excellent - actively used",
      weight: "Approximately 1.5 lbs"
    },
    
    // Function & Meaning
    function: "Originally designed for harvesting and transporting vegetables and herbs. Currently used at farmers markets for displaying and selling produce, maintaining its traditional purpose while adapting to contemporary commercial contexts.",
    
    meaning: "Represents cultural continuity and resilience. The basket embodies traditional ecological knowledge and sustainable practices. For the maker, it serves as a connection to ancestors and a way to share cultural heritage with the broader community.",
    
    // Transcript (interview excerpt)
    transcript: `Interviewer: "Can you tell me about this basket?"

Maria: "This is a gathering basket, the kind my grandmother taught me to make when I was young. We use sweetgrass - it smells beautiful when it's fresh. The pattern here [gestures] is called the 'potato stamp' design, it's traditional to our people.

I make these to use, not just to sell. When I'm at the market with vegetables in this basket, I'm doing what my ancestors did, just in a different place. It connects me to them."

Interviewer: "How long does it take to make one?"

Maria: "This size, maybe 40-50 hours of work. You have to gather the materials at the right time of year, prepare them, then the weaving itself. It's meditative work."`,
    
    // Additional Media (for future implementation)
    additionalMedia: [
      { type: "video", title: "Weaving Demonstration", duration: "5:23" },
      { type: "audio", title: "Interview Recording", duration: "15:42" }
    ],
    
    // Analysis / Student Work
    analysis: {
      hasStudentWork: true,
      course: "ANTH 301 - Cultural Anthropology",
      student: "Alex Thompson",
      summary: "Analysis explores the intersection of traditional craft practices and modern economic systems, examining how cultural objects negotiate between authenticity and commodification."
    },
    
    // Privacy & Consent
    privacy: {
      level: "Restricted - Identity Protected",
      publicAccess: true,
      identityProtected: true,
      notes: "Subject requested pseudonym use. Face not shown in photographs."
    },
    
    consent: {
      formSigned: true,
      dateSigned: "2024-01-10",
      permissions: {
        archiveUse: true,
        classroomUse: true,
        publicDisplay: true,
        commercialUse: false
      },
      irbApproved: true,
      irbNumber: "IRB-2023-445",
      irbDate: "2023-12-01"
    }
  },
  {
    id: 2,
    title: "Notre Dame Cathedral - Pre-Fire Documentation",
    image: "/src/assets/artifacts/notredame.png",
    
    // Basic Info
    tags: ["historical", "architecture", "religious site"],
    uploader: "Jane Smith",
    uploadDate: "2023-11-08",
    fileType: "image/png",
    fileSize: "3.8 MB",
    dimensions: "2400x1600",
    
    // Ethnography Core Fields
    context: "Photograph taken during architectural documentation project in Paris, March 2019, one month before the devastating fire. Part of a larger study on Gothic architectural preservation and religious tourism.",
    
    // Where - Location Information
    location: {
      place: "Notre-Dame de Paris Cathedral",
      city: "Paris",
      state: "Île-de-France",
      country: "France",
      coordinates: "48.8530° N, 2.3499° E"
    },
    
    // When - Time Period
    timePeriod: {
      created: "1163-1345 CE (original construction)",
      documented: "March 2019",
      era: "Medieval Gothic / Contemporary Documentation"
    },
    
    // Who - Subject Information
    subject: {
      name: "Public Monument",
      isPseudonym: false,
      role: "Historic Cathedral",
      community: "Catholic Church / Parisian Cultural Heritage"
    },
    
    // Descriptions
    description: "Historic photograph of Notre Dame Cathedral's western façade, capturing the iconic Gothic architecture before the April 2019 fire. The image documents the rose window, flying buttresses, and twin towers in their pre-restoration state.",
    
    physicalDescription: {
      materials: "Limestone, oak timber frame (destroyed 2019), stained glass",
      dimensions: "128m length, 48m width, 69m tower height",
      condition: "Pre-fire: Good with ongoing preservation. Post-fire: Severely damaged, under restoration",
      weight: "N/A - Immovable structure"
    },
    
    // Function & Meaning
    function: "Served as Catholic cathedral and archbishop's seat for over 850 years. Functions as place of worship, pilgrimage site, tourist destination, and symbol of French Gothic architecture. Hosted significant historical events including Napoleon's coronation (1804).",
    
    meaning: "Embodies French national identity, Catholic spiritual heritage, and European medieval craftsmanship. Represents human artistic achievement and the relationship between sacred and secular spaces. The 2019 fire transformed its meaning to include themes of loss, resilience, and collective memory.",
    
    // Transcript (fieldnotes excerpt)
    transcript: `Field Notes - March 15, 2019
Location: Parvis Notre-Dame, exterior documentation

10:45 AM - Arriving at cathedral. Tourist crowds already significant despite early hour. Noted approximately 200-300 visitors in immediate vicinity.

The western façade remains breathtaking despite centuries of environmental exposure and previous restoration efforts. The Gallery of Kings statues (19th century reconstructions) show some weathering but overall preservation is remarkable.

Interviewed several visitors:
- German couple: "It's like touching history. Every stone has a story."
- Local Parisian (declined name): "I pass by almost daily. It's Paris. It's us. Can't imagine the city without it."

11:30 AM - Inside observation: The interplay of light through the rose windows creates the intended mystical atmosphere. Medieval builders understood human psychology and spiritual experience.

Note: The oak timber framework in the roof (la forêt - "the forest") dates to the 13th century. Each beam from a different oak tree. Irreplaceable if damaged.`,
    
    // Additional Media
    additionalMedia: [
      { type: "image", title: "Interior Rose Window Detail", count: 15 },
      { type: "image", title: "Flying Buttress Series", count: 8 },
      { type: "video", title: "Architectural Walkthrough", duration: "12:34" }
    ],
    
    // Analysis / Student Work
    analysis: {
      hasStudentWork: true,
      course: "ARCH 405 - Gothic Architecture & Preservation",
      student: "Sophie Martin",
      summary: "Comparative analysis of Notre Dame's construction techniques versus other French Gothic cathedrals (Chartres, Reims, Amiens). Examines how architectural innovation served both structural and theological purposes. Post-fire addendum discusses restoration ethics and authenticity debates."
    },
    
    // Privacy & Consent
    privacy: {
      level: "Public Domain",
      publicAccess: true,
      identityProtected: false,
      notes: "Public monument. No privacy restrictions. Some interior images may include incidental tourist presence."
    },
    
    consent: {
      formSigned: true,
      dateSigned: "2019-03-01",
      permissions: {
        archiveUse: true,
        classroomUse: true,
        publicDisplay: true,
        commercialUse: true
      },
      irbApproved: true,
      irbNumber: "IRB-2019-002",
      irbDate: "2019-02-15"
    }
  }
];

// Enhanced filter options with ethnography categories
export const filterOptions = {
  tags: [
    "craftwork", 
    "daily life", 
    "cultural tradition", 
    "historical", 
    "architecture", 
    "religious site",
    "nature",
    "urban",
    "ritual"
  ],
  fileTypes: [
    "image/png", 
    "image/jpeg", 
    "application/pdf", 
    "video/mp4",
    "audio/mp3"
  ],
  uploaders: [
    "John Doe", 
    "Jane Smith", 
    "Archive Admin",
    "Dr. Martinez",
    "Research Team"
  ],
  locations: [
    "Vermont",
    "France",
    "New England",
    "International"
  ],
  privacyLevels: [
    "Public Domain",
    "Restricted - Identity Protected",
    "Classroom Use Only",
    "Research Only"
  ]
};
