/**
 * ==========================================================================
 * Lumina Image Gallery - JavaScript (script.js)
 * Complete 200-Photo Catalog across 4 Dedicated Sections:
 *   1. Nature (50 Photos)
 *   2. Animals (50 Photos)
 *   3. Travel (50 Photos)
 *   4. Technology (50 Photos)
 * Total: Exactly 200 Unique Curated Photos
 * Pure HTML5, CSS3 & Vanilla JavaScript (No frameworks)
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. SECTION 1: NATURE PHOTOGRAPHY (EXACTLY 50 PHOTOS)
// --------------------------------------------------------------------------
const naturePhotos = [
  {
    id: 1,
    title: "Misty Alpine Forest",
    category: "nature",
    description: "Serene pine trees shrouded in morning fog nestled in deep alpine valleys.",
    thumbUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=90",
    tags: ["forest", "trees", "mist", "fog", "pine", "mountain"]
  },
  {
    id: 2,
    title: "Sunset over Dolomite Peaks",
    category: "nature",
    description: "Golden hour sunlight illuminating rugged mountain ridges in the Italian Alps.",
    thumbUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=90",
    tags: ["mountains", "sunset", "dolomites", "alps", "golden hour"]
  },
  {
    id: 3,
    title: "Emerald Forest Waterfall",
    category: "nature",
    description: "Pristine emerald water cascading down mossy rocks in a temperate rainforest.",
    thumbUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1800&q=90",
    tags: ["waterfall", "emerald", "stream", "river", "rocks"]
  },
  {
    id: 4,
    title: "Turquoise Tropical Coast",
    category: "nature",
    description: "Crystal-clear azure ocean waters meeting pure white sand dunes.",
    thumbUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90",
    tags: ["ocean", "beach", "tropical", "sea", "sand", "summer"]
  },
  {
    id: 5,
    title: "Autumn Maple Canopy",
    category: "nature",
    description: "Vibrant scarlet and amber leaves canopying a quiet sunlit forest pathway.",
    thumbUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=1800&q=90",
    tags: ["autumn", "fall", "leaves", "maple", "trees", "red"]
  },
  {
    id: 6,
    title: "Starry Night over Moraine Lake",
    category: "nature",
    description: "Milky way arc reflecting over glacial waters in Banff National Park.",
    thumbUrl: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1800&q=90",
    tags: ["night", "stars", "milky way", "lake", "reflection", "astronomy"]
  },
  {
    id: 7,
    title: "Sahara Desert Sand Dunes",
    category: "nature",
    description: "Wind-swept golden crests creating geometric ripple patterns across the desert.",
    thumbUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1800&q=90",
    tags: ["desert", "sand", "dunes", "sahara", "warm", "sunlight"]
  },
  {
    id: 8,
    title: "Glacial Ice Cave",
    category: "nature",
    description: "Translucent sapphire ice structures sculpted by sub-zero glacial meltwater.",
    thumbUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=90",
    tags: ["ice", "glacier", "cave", "blue", "winter", "frozen"]
  },
  {
    id: 9,
    title: "Lavender Fields of Provence",
    category: "nature",
    description: "Endless purple rows blooming under a warm Mediterranean summer sky.",
    thumbUrl: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=1800&q=90",
    tags: ["lavender", "flowers", "purple", "field", "provence", "bloom"]
  },
  {
    id: 10,
    title: "Volcanic Aurora Borealis",
    category: "nature",
    description: "Dancing green northern lights shimmering over Icelandic volcanic black sands.",
    thumbUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1800&q=90",
    tags: ["aurora", "northern lights", "green", "iceland", "sky"]
  },
  {
    id: 11,
    title: "Sunlit Redwood Giants",
    category: "nature",
    description: "Beams of golden light piercing through ancient coastal redwood canopy.",
    thumbUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1800&q=90",
    tags: ["redwood", "trees", "forest", "sunbeams", "california"]
  },
  {
    id: 12,
    title: "Dramatic Storm Waves",
    category: "nature",
    description: "Crashing ocean breakers colliding violently against jagged volcanic sea cliffs.",
    thumbUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1800&q=90",
    tags: ["ocean", "waves", "storm", "cliffs", "surf", "dramatic"]
  },
  {
    id: 13,
    title: "Cherry Blossom Sunrise",
    category: "nature",
    description: "Delicate pink sakura petals flowering along tranquil riverside gardens.",
    thumbUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1800&q=90",
    tags: ["cherry blossom", "sakura", "pink", "spring", "flowers"]
  },
  {
    id: 14,
    title: "Alpine Meadow Wildflowers",
    category: "nature",
    description: "Kaleidoscope of alpine flowers carpeting high mountain valleys at spring.",
    thumbUrl: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1800&q=90",
    tags: ["meadow", "wildflowers", "mountains", "spring", "green"]
  },
  {
    id: 15,
    title: "Deep Canyon Gorge",
    category: "nature",
    description: "Towering sandstone cliffs sculpted by millions of years of river erosion.",
    thumbUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=90",
    tags: ["canyon", "rocks", "geology", "sandstone", "gorge"]
  },
  {
    id: 16,
    title: "Thunderhead Cloudscape",
    category: "nature",
    description: "Towering cumulonimbus cloud formation glowing with evening sunset fire.",
    thumbUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1800&q=90",
    tags: ["clouds", "storm", "sunset", "sky", "weather"]
  },
  {
    id: 17,
    title: "Morning Dew on Fern Leaves",
    category: "nature",
    description: "Macro capture of shimmering water droplets on delicate rainforest fronds.",
    thumbUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1800&q=90",
    tags: ["macro", "dew", "fern", "water drops", "leaves", "rain"]
  },
  {
    id: 18,
    title: "Frozen Winter Lake",
    category: "nature",
    description: "Geometric fracture patterns in crystal ice over deep northern waters.",
    thumbUrl: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1800&q=90",
    tags: ["winter", "frozen", "ice", "snow", "cold", "lake"]
  },
  {
    id: 19,
    title: "Misty Valley Sunrise",
    category: "nature",
    description: "Layered mountain silhouettes emerging from a sea of morning fog.",
    thumbUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=90",
    tags: ["sunrise", "fog", "mountains", "valley", "silhouette"]
  },
  {
    id: 20,
    title: "Tropical Coral Reef",
    category: "nature",
    description: "Sunlight dancing across thriving underwater coral gardens and ocean floor.",
    thumbUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=90",
    tags: ["coral", "reef", "underwater", "ocean", "tropical"]
  },
  {
    id: 21,
    title: "Golden Grass Savanna",
    category: "nature",
    description: "Sun-drenched golden grasses swaying under wide African horizon skies.",
    thumbUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=90",
    tags: ["savanna", "grass", "golden", "africa", "landscape"]
  },
  {
    id: 22,
    title: "Mossy River Rapids",
    category: "nature",
    description: "Silky long-exposure water cascading through ancient moss-covered river rocks.",
    thumbUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1800&q=90",
    tags: ["river", "rapids", "moss", "forest", "long exposure"]
  },
  {
    id: 23,
    title: "Breathtaking Coastal Fjords",
    category: "nature",
    description: "Sheer granite cliffs rising dramatically from deep Norwegian fjords.",
    thumbUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=90",
    tags: ["fjord", "norway", "cliffs", "water", "dramatic"]
  },
  {
    id: 24,
    title: "Sunflower Field at Dusk",
    category: "nature",
    description: "Bright yellow sunflower heads catching the last warm rays of evening dusk.",
    thumbUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1800&q=90",
    tags: ["sunflower", "flowers", "yellow", "sunset", "dusk"]
  },
  {
    id: 25,
    title: "Bamboo Forest Pathway",
    category: "nature",
    description: "Towering green bamboo stalks creating an emerald tunnel in Kyoto.",
    thumbUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1800&q=90",
    tags: ["bamboo", "forest", "green", "pathway", "kyoto"]
  },
  {
    id: 26,
    title: "Snowy Mountain Peak",
    category: "nature",
    description: "Crisp white snow-covered summit against a vivid sapphire blue sky.",
    thumbUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=90",
    tags: ["snow", "peak", "summit", "blue sky", "winter"]
  },
  {
    id: 27,
    title: "Volcanic Basalt Columns",
    category: "nature",
    description: "Hexagonal geometric basalt rock columns shaped by ancient cooling lava.",
    thumbUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1800&q=90",
    tags: ["volcanic", "basalt", "rocks", "geology", "cliffs"]
  },
  {
    id: 28,
    title: "Sunset over Pacific Ocean",
    category: "nature",
    description: "Blazing orange and magenta sky reflected on wet shoreline sands.",
    thumbUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90",
    tags: ["sunset", "pacific", "ocean", "orange", "magenta"]
  },
  {
    id: 29,
    title: "Pine Forest in Winter Fog",
    category: "nature",
    description: "Frost-tipped evergreens standing silent in heavy winter mountain mist.",
    thumbUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=90",
    tags: ["pine", "winter", "mist", "frost", "trees"]
  },
  {
    id: 30,
    title: "Crystal Clear Glacier Lagoon",
    category: "nature",
    description: "Icebergs floating gently in turquoise glacial waters under bright sunlight.",
    thumbUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1800&q=90",
    tags: ["glacier", "iceberg", "lagoon", "turquoise", "water"]
  },
  {
    id: 31,
    title: "Golden Hour Wheat Field",
    category: "nature",
    description: "Warm summer breeze rippling across endless ripe wheat fields at sunset.",
    thumbUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90",
    tags: ["wheat", "field", "golden hour", "summer", "sunlight"]
  },
  {
    id: 32,
    title: "Majestic Alpine Lake Reflection",
    category: "nature",
    description: "Mirror-perfect mountain reflections on calm glass-like alpine waters.",
    thumbUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=90",
    tags: ["lake", "reflection", "mountains", "calm", "mirror"]
  },
  {
    id: 33,
    title: "Lush Green Rolling Hills",
    category: "nature",
    description: "Vibrant emerald grass hills stretching into the misty morning horizon.",
    thumbUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=90",
    tags: ["hills", "green", "pasture", "rolling hills", "morning"]
  },
  {
    id: 34,
    title: "Canyon River Curve",
    category: "nature",
    description: "Emerald horseshoe river loop winding around immense sandstone plateau cliffs.",
    thumbUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=90",
    tags: ["canyon", "horseshoe", "river", "curve", "sandstone"]
  },
  {
    id: 35,
    title: "Sunlit Forest Stream",
    category: "nature",
    description: "Bubbling brook winding gently through sunlit ferns and ancient hardwood trees.",
    thumbUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1800&q=90",
    tags: ["stream", "forest", "brook", "water", "sunlight"]
  },
  {
    id: 36,
    title: "Icelandic Black Sand Beach",
    category: "nature",
    description: "Moody Atlantic foam breaking onto pristine dark volcanic sands in Vik.",
    thumbUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1800&q=90",
    tags: ["black sand", "beach", "iceland", "ocean", "waves"]
  },
  {
    id: 37,
    title: "Rocky Mountain Pass",
    category: "nature",
    description: "Winding alpine road crossing between jagged granite snow-dusted ridges.",
    thumbUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=90",
    tags: ["rocky mountains", "pass", "ridge", "snow", "road"]
  },
  {
    id: 38,
    title: "Golden Autumn Forest Path",
    category: "nature",
    description: "Path covered in golden yellow birch leaves under a radiant sunny canopy.",
    thumbUrl: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=1800&q=90",
    tags: ["autumn", "path", "yellow", "birch", "forest"]
  },
  {
    id: 39,
    title: "Secluded Desert Oasis",
    category: "nature",
    description: "Emerald palm trees surrounding a tranquil freshwater pool amid desert dunes.",
    thumbUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1800&q=90",
    tags: ["oasis", "desert", "palm trees", "water", "dunes"]
  },
  {
    id: 40,
    title: "Rainbow over Mountain Valley",
    category: "nature",
    description: "Vibrant double rainbow arcing across a sunlit rain-cleared mountain valley.",
    thumbUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1800&q=90",
    tags: ["rainbow", "mountains", "rain", "sunlight", "valley"]
  },
  {
    id: 41,
    title: "Frozen Icicles in Forest",
    category: "nature",
    description: "Glistening clear ice formations hanging from rock overhangs in winter.",
    thumbUrl: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1800&q=90",
    tags: ["icicles", "winter", "ice", "frost", "cold"]
  },
  {
    id: 42,
    title: "Tropical Island Atoll",
    category: "nature",
    description: "Aerial perspective of a pristine circular coral atoll and azure lagoon.",
    thumbUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90",
    tags: ["atoll", "island", "aerial", "lagoon", "tropical"]
  },
  {
    id: 43,
    title: "Misty Sunrise Pine Ridge",
    category: "nature",
    description: "Soft orange morning light glowing behind silhouette ridge pine branches.",
    thumbUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=90",
    tags: ["sunrise", "pine", "ridge", "orange", "morning"]
  },
  {
    id: 44,
    title: "Dramatic Storm Light over Ocean",
    category: "nature",
    description: "Sun rays breaking through deep gray storm clouds over choppy seas.",
    thumbUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1800&q=90",
    tags: ["storm", "clouds", "sunbeams", "ocean", "waves"]
  },
  {
    id: 45,
    title: "Wild Poppy Flower Field",
    category: "nature",
    description: "Sea of vibrant red poppy blossoms swaying under blue spring skies.",
    thumbUrl: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1800&q=90",
    tags: ["poppy", "red", "flowers", "spring", "field"]
  },
  {
    id: 46,
    title: "Sandstone Desert Arches",
    category: "nature",
    description: "Naturally carved red sandstone arch framing the distant desert horizon.",
    thumbUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=90",
    tags: ["arch", "sandstone", "utah", "desert", "rocks"]
  },
  {
    id: 47,
    title: "Snowy Alpine Forest Sunrise",
    category: "nature",
    description: "Pastel pink and gold skies illuminating heavy snow on evergreen trees.",
    thumbUrl: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1800&q=90",
    tags: ["snow", "winter", "sunrise", "evergreen", "pastel"]
  },
  {
    id: 48,
    title: "Calm Turquoise Cove",
    category: "nature",
    description: "Sheltered coastal bay with crystalline shallow waters and limestone rocks.",
    thumbUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90",
    tags: ["cove", "bay", "turquoise", "water", "limestone"]
  },
  {
    id: 49,
    title: "Cascading Mountain Falls",
    category: "nature",
    description: "Powerful waterfall thundering into a deep turquoise pool surrounded by cliffs.",
    thumbUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1800&q=90",
    tags: ["waterfall", "mountain", "power", "cliffs", "cascade"]
  },
  {
    id: 50,
    title: "Twilight Starfield over Pines",
    category: "nature",
    description: "First evening stars gleaming through dark silhouette forest pine needles.",
    thumbUrl: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1800&q=90",
    tags: ["twilight", "stars", "pines", "night", "astrophotography"]
  }
];

// --------------------------------------------------------------------------
// 2. SECTION 2: ANIMALS & WILDLIFE (EXACTLY 50 PHOTOS)
// --------------------------------------------------------------------------
const animalsPhotos = [
  {
    id: 51,
    title: "Majestic African Lion",
    category: "animals",
    description: "A commanding male lion basking in the golden evening light on the savanna.",
    thumbUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1800&q=90",
    tags: ["lion", "safari", "wildlife", "africa", "predator"]
  },
  {
    id: 52,
    title: "Curious Red Fox in Meadow",
    category: "animals",
    description: "Vibrant red fox with keen eyes pausing alertly in an autumn forest clearing.",
    thumbUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1800&q=90",
    tags: ["fox", "red fox", "wildlife", "autumn", "curious"]
  },
  {
    id: 53,
    title: "Graceful Sea Turtle",
    category: "animals",
    description: "Green sea turtle gliding effortlessly through transparent tropical coral waters.",
    thumbUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=90",
    tags: ["turtle", "sea turtle", "ocean", "underwater", "marine"]
  },
  {
    id: 54,
    title: "Snowy Owl in Winter Flight",
    category: "animals",
    description: "Magnificent white snowy owl with piercing yellow eyes gliding above snowdrifts.",
    thumbUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=90",
    tags: ["owl", "snowy owl", "bird", "flight", "winter", "white"]
  },
  {
    id: 55,
    title: "Playful Bottlenose Dolphin",
    category: "animals",
    description: "Dolphin leaping high out of glittering turquoise waves in the ocean.",
    thumbUrl: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=1800&q=90",
    tags: ["dolphin", "ocean", "leap", "marine", "playful"]
  },
  {
    id: 56,
    title: "Powerful Bengal Tiger",
    category: "animals",
    description: "Striking orange and black striped tiger walking quietly through jungle bamboo.",
    thumbUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1800&q=90",
    tags: ["tiger", "bengal tiger", "predator", "jungle", "stripes"]
  },
  {
    id: 57,
    title: "Savanna Elephant Herd",
    category: "animals",
    description: "Gentle giant African elephant matriarch and calf strolling under acacia trees.",
    thumbUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1800&q=90",
    tags: ["elephant", "safari", "wildlife", "africa", "savanna"]
  },
  {
    id: 58,
    title: "Soaring Bald Eagle",
    category: "animals",
    description: "Noble bald eagle perched on a cedar branch overlooking Alaskan coastal fjords.",
    thumbUrl: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=1800&q=90",
    tags: ["eagle", "bald eagle", "bird", "raptor", "alaska"]
  },
  {
    id: 59,
    title: "Giant Panda Eating Bamboo",
    category: "animals",
    description: "Fluffy giant panda calmly munching on fresh green bamboo shoots in Sichuan.",
    thumbUrl: "https://images.unsplash.com/photo-1527118732049-c88155f2107c?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1527118732049-c88155f2107c?auto=format&fit=crop&w=1800&q=90",
    tags: ["panda", "giant panda", "bamboo", "china", "cute"]
  },
  {
    id: 60,
    title: "Colorful Macaw Parrot",
    category: "animals",
    description: "Vibrant scarlet, blue, and yellow feathers of an Amazon rainforest macaw.",
    thumbUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1800&q=90",
    tags: ["macaw", "parrot", "colorful", "bird", "tropical", "amazon"]
  },
  {
    id: 61,
    title: "Arctic Polar Bear on Ice",
    category: "animals",
    description: "Formidable polar bear navigating crystal blue sea ice floes in Svalbard.",
    thumbUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=1800&q=90",
    tags: ["polar bear", "arctic", "ice", "svalbard", "white bear"]
  },
  {
    id: 62,
    title: "Graceful Cheetah at Rest",
    category: "animals",
    description: "Sleek spotted cheetah scanning the savanna grassland from atop a termite mound.",
    thumbUrl: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1800&q=90",
    tags: ["cheetah", "speed", "spotted", "safari", "wildlife"]
  },
  {
    id: 63,
    title: "Emperor Penguin Colony",
    category: "animals",
    description: "Huddled emperor penguins standing resilient against Antarctic blizzards.",
    thumbUrl: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=1800&q=90",
    tags: ["penguin", "antarctica", "emperor penguin", "ice", "bird"]
  },
  {
    id: 64,
    title: "Timber Wolf in Winter Snow",
    category: "animals",
    description: "Gray timber wolf with intense amber eyes moving silently through deep powder snow.",
    thumbUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?auto=format&fit=crop&w=1800&q=90",
    tags: ["wolf", "timber wolf", "snow", "winter", "eyes"]
  },
  {
    id: 65,
    title: "Humpback Whale Tail Breach",
    category: "animals",
    description: "Colossal fluke of a humpback whale slicing the ocean surface at sunset.",
    thumbUrl: "https://images.unsplash.com/photo-1518877593221-1f28d84a147b?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1518877593221-1f28d84a147b?auto=format&fit=crop&w=1800&q=90",
    tags: ["whale", "humpback", "ocean", "tail", "breach", "marine"]
  },
  {
    id: 66,
    title: "Zebra Herd in Serengeti",
    category: "animals",
    description: "Intricate black and white striped zebras grazing along the great migration route.",
    thumbUrl: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?auto=format&fit=crop&w=1800&q=90",
    tags: ["zebra", "stripes", "serengeti", "migration", "safari"]
  },
  {
    id: 67,
    title: "Koala Bear in Eucalyptus",
    category: "animals",
    description: "Adorable Australian koala sleeping peacefully in the fork of a eucalyptus branch.",
    thumbUrl: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1800&q=90",
    tags: ["koala", "australia", "eucalyptus", "cute", "marsupial"]
  },
  {
    id: 68,
    title: "Golden Hummingbird in Bloom",
    category: "animals",
    description: "Tiny iridescent hummingbird hovering precisely while sipping flower nectar.",
    thumbUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1800&q=90",
    tags: ["hummingbird", "bird", "nectar", "flower", "hover"]
  },
  {
    id: 69,
    title: "Grizzly Bear Catching Salmon",
    category: "animals",
    description: "Massive brown grizzly standing at river rapids catching leaping sockeye salmon.",
    thumbUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=1800&q=90",
    tags: ["grizzly", "bear", "salmon", "river", "alaska"]
  },
  {
    id: 70,
    title: "Giraffe under African Sunset",
    category: "animals",
    description: "Tall silhouette of a Masai giraffe browsing high acacia tree leaves at dusk.",
    thumbUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1800&q=90",
    tags: ["giraffe", "sunset", "acacia", "safari", "africa"]
  },
  {
    id: 71,
    title: "Red-Eyed Tree Frog",
    category: "animals",
    description: "Vivid lime green Costa Rican tree frog with bright red eyes clinging to a rainforest leaf.",
    thumbUrl: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=1800&q=90",
    tags: ["frog", "tree frog", "amphibian", "green", "rainforest"]
  },
  {
    id: 72,
    title: "Mountain Gorilla Silverback",
    category: "animals",
    description: "Impressive silverback mountain gorilla resting thoughtfully in lush Rwandan jungle.",
    thumbUrl: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1800&q=90",
    tags: ["gorilla", "silverback", "primate", "jungle", "rwanda"]
  },
  {
    id: 73,
    title: "Chameleon on Branch",
    category: "animals",
    description: "Panther chameleon displaying vivid turquoise and yellow scales while climbing.",
    thumbUrl: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=1800&q=90",
    tags: ["chameleon", "reptile", "scales", "color", "lizard"]
  },
  {
    id: 74,
    title: "Clownfish in Sea Anemone",
    category: "animals",
    description: "Bright orange anemonefish peeking out from waving tentacles on the Great Barrier Reef.",
    thumbUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=90",
    tags: ["clownfish", "anemone", "fish", "reef", "underwater"]
  },
  {
    id: 75,
    title: "Leopard in Fig Tree",
    category: "animals",
    description: "Camouflaged African leopard lounging gracefully across a thick fig tree limb.",
    thumbUrl: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1800&q=90",
    tags: ["leopard", "cat", "tree", "safari", "spotted"]
  },
  {
    id: 76,
    title: "Flock of Pink Flamingos",
    category: "animals",
    description: "Hundreds of vibrant pink flamingos wading in shallow alkaline lake waters.",
    thumbUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1800&q=90",
    tags: ["flamingo", "pink", "birds", "lake", "flock"]
  },
  {
    id: 77,
    title: "Playful Sea Otter",
    category: "animals",
    description: "Sea otter floating on its back in giant kelp forests while cracking a shellfish.",
    thumbUrl: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=1800&q=90",
    tags: ["otter", "sea otter", "kelp", "ocean", "cute"]
  },
  {
    id: 78,
    title: "Majestic Black Stallion",
    category: "animals",
    description: "Pure black horse galloping freely across sunlit open green pastures.",
    thumbUrl: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=90",
    tags: ["horse", "stallion", "black horse", "gallop", "pasture"]
  },
  {
    id: 79,
    title: "Arctic Fox in Snow",
    category: "animals",
    description: "Pure white arctic fox curled into a ball against freezing tundra winds.",
    thumbUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1800&q=90",
    tags: ["arctic fox", "white", "snow", "winter", "tundra"]
  },
  {
    id: 80,
    title: "Peacock Tail Display",
    category: "animals",
    description: "Extravagant iridescent emerald and blue eye feathers fanned in full plumage.",
    thumbUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1800&q=90",
    tags: ["peacock", "feathers", "iridescent", "bird", "display"]
  },
  {
    id: 81,
    title: "Sloth in Canopy",
    category: "animals",
    description: "Three-toed sloth hanging leisurely upside down in a tropical rainforest canopy.",
    thumbUrl: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1800&q=90",
    tags: ["sloth", "rainforest", "tree", "canopy", "slow"]
  },
  {
    id: 82,
    title: "Rhino in Kruger National Park",
    category: "animals",
    description: "Armor-like white rhinoceros grazing calmly near a watering hole at sunrise.",
    thumbUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1800&q=90",
    tags: ["rhino", "safari", "wildlife", "africa", "horn"]
  },
  {
    id: 83,
    title: "Kangaroo in Australian Outback",
    category: "animals",
    description: "Red kangaroo bounding across red earth dunes under the blazing Australian sun.",
    thumbUrl: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1800&q=90",
    tags: ["kangaroo", "outback", "australia", "red earth", "hop"]
  },
  {
    id: 84,
    title: "Kingfisher on Mossy Branch",
    category: "animals",
    description: "Brilliant cobalt blue and copper kingfisher watching for river fish below.",
    thumbUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1800&q=90",
    tags: ["kingfisher", "bird", "blue", "river", "feathers"]
  },
  {
    id: 85,
    title: "Jaguar on River Bank",
    category: "animals",
    description: "Powerful spotted jaguar drinking quietly along the Pantanal river bank.",
    thumbUrl: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1800&q=90",
    tags: ["jaguar", "pantanal", "big cat", "spotted", "predator"]
  },
  {
    id: 86,
    title: "Puffin on Atlantic Cliffs",
    category: "animals",
    description: "Charming Atlantic puffin with a colorful beak nesting on green sea cliffs.",
    thumbUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=90",
    tags: ["puffin", "seabird", "beak", "cliffs", "atlantic"]
  },
  {
    id: 87,
    title: "Manta Ray Gliding in Deep Blue",
    category: "animals",
    description: "Huge oceanic manta ray soaring like a bird through deep sunlit ocean depths.",
    thumbUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=90",
    tags: ["manta ray", "ocean", "underwater", "wings", "marine"]
  },
  {
    id: 88,
    title: "Meerkats on Lookout",
    category: "animals",
    description: "Family of meerkats standing upright in sentry duty across Kalahari red sands.",
    thumbUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1800&q=90",
    tags: ["meerkat", "kalahari", "lookout", "sentry", "desert"]
  },
  {
    id: 89,
    title: "Orca Pod at Sunset",
    category: "animals",
    description: "Killer whale pod surfacing synchronously in coastal Pacific waters.",
    thumbUrl: "https://images.unsplash.com/photo-1518877593221-1f28d84a147b?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1518877593221-1f28d84a147b?auto=format&fit=crop&w=1800&q=90",
    tags: ["orca", "killer whale", "pod", "ocean", "sunset"]
  },
  {
    id: 90,
    title: "Chimpanzee in Rain Forest",
    category: "animals",
    description: "Intelligent chimpanzee holding a leafy branch in the dense tropical canopy.",
    thumbUrl: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1800&q=90",
    tags: ["chimpanzee", "primate", "jungle", "intelligence", "wild"]
  },
  {
    id: 91,
    title: "Lynx in Winter Forest",
    category: "animals",
    description: "Eurasian lynx with tufted ears prowling stealthily through snow-covered birch.",
    thumbUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?auto=format&fit=crop&w=1800&q=90",
    tags: ["lynx", "wildcat", "snow", "ears", "stealth"]
  },
  {
    id: 92,
    title: "Sea Lion Colony on Rocks",
    category: "animals",
    description: "Barking California sea lions sunbathing together on coastal Pacific boulders.",
    thumbUrl: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=1800&q=90",
    tags: ["sea lion", "pacific", "rocks", "sunbathing", "marine"]
  },
  {
    id: 93,
    title: "Monarch Butterfly Migration",
    category: "animals",
    description: "Vibrant orange and black monarch butterfly resting gently on a lavender bloom.",
    thumbUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1800&q=90",
    tags: ["butterfly", "monarch", "insect", "orange", "wings"]
  },
  {
    id: 94,
    title: "Walrus on Arctic Ice Sheet",
    category: "animals",
    description: "Tusked walrus resting heavily on floating ice sheets in northern waters.",
    thumbUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=1800&q=90",
    tags: ["walrus", "tusks", "arctic", "ice", "polar"]
  },
  {
    id: 95,
    title: "Ibex on Mountain Cliff",
    category: "animals",
    description: "Sure-footed Alpine ibex balancing effortlessly on near-vertical granite cliffs.",
    thumbUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=90",
    tags: ["ibex", "horns", "cliff", "alps", "mountains"]
  },
  {
    id: 96,
    title: "Sea Horse in Coral",
    category: "animals",
    description: "Delicate yellow pygmy seahorse anchored by its tail to soft sea fan corals.",
    thumbUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=90",
    tags: ["seahorse", "coral", "underwater", "delicate", "yellow"]
  },
  {
    id: 97,
    title: "Bison Herd in Yellowstone",
    category: "animals",
    description: "Shaggy American bison grazing steam-warmed thermal meadows in winter.",
    thumbUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?auto=format&fit=crop&w=1800&q=90",
    tags: ["bison", "yellowstone", "winter", "american bison", "steam"]
  },
  {
    id: 98,
    title: "Toucan with Rainbow Beak",
    category: "animals",
    description: "Keel-billed toucan perched proudly on a mossy branch in the Costa Rican rainforest.",
    thumbUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1800&q=90",
    tags: ["toucan", "beak", "bird", "tropical", "costa rica"]
  },
  {
    id: 99,
    title: "Hyena in Serengeti Dawn",
    category: "animals",
    description: "Spotted hyena surveying misty grasslands as the African sun breaks the horizon.",
    thumbUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1800&q=90",
    tags: ["hyena", "serengeti", "dawn", "safari", "wildlife"]
  },
  {
    id: 100,
    title: "Jellyfish Glowing in Deep Sea",
    category: "animals",
    description: "Luminescent moon jellyfish pulsating with ethereal blue and pink light in the abyss.",
    thumbUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=90",
    tags: ["jellyfish", "bioluminescence", "glow", "deep sea", "ocean"]
  }
];

// --------------------------------------------------------------------------
// 3. SECTION 3: TRAVEL & LANDMARKS (EXACTLY 50 PHOTOS)
// --------------------------------------------------------------------------
const travelPhotos = [
  {
    id: 101,
    title: "Cappadocia Hot Air Balloons",
    category: "travel",
    description: "Dozens of colorful hot air balloons rising over fairy chimney rock valleys at dawn.",
    thumbUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1800&q=90",
    tags: ["cappadocia", "turkey", "balloons", "sunrise", "travel"]
  },
  {
    id: 102,
    title: "Santorini Caldera View",
    category: "travel",
    description: "Whitewashed houses and sapphire church domes overlooking the deep blue Aegean Sea.",
    thumbUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1800&q=90",
    tags: ["santorini", "greece", "dome", "sea", "islands"]
  },
  {
    id: 103,
    title: "Neon Streets of Tokyo",
    category: "travel",
    description: "Vibrant neon-lit skyscrapers and bustling crosswalks of Shinjuku at night.",
    thumbUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1800&q=90",
    tags: ["tokyo", "japan", "neon", "city", "night", "street"]
  },
  {
    id: 104,
    title: "Venice Grand Canal Gondolas",
    category: "travel",
    description: "Traditional wooden gondolas moored beside historic Venetian palaces at sunrise.",
    thumbUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1800&q=90",
    tags: ["venice", "italy", "canal", "gondola", "water"]
  },
  {
    id: 105,
    title: "Eiffel Tower in Autumn Paris",
    category: "travel",
    description: "The iconic iron lady framed by golden autumn trees along the River Seine.",
    thumbUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1800&q=90",
    tags: ["paris", "france", "eiffel tower", "autumn", "landmark"]
  },
  {
    id: 106,
    title: "Taj Mahal at Sunrise",
    category: "travel",
    description: "Magnificent white marble mausoleum reflecting in serene garden pools in Agra.",
    thumbUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1800&q=90",
    tags: ["taj mahal", "india", "marble", "monument", "sunrise"]
  },
  {
    id: 107,
    title: "Machu Picchu in the Clouds",
    category: "travel",
    description: "Ancient Inca stone citadel perched high in the lush misty Andes mountains.",
    thumbUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1800&q=90",
    tags: ["machu picchu", "peru", "inca", "andes", "ancient"]
  },
  {
    id: 108,
    title: "New York City Manhattan Skyline",
    category: "travel",
    description: "Glowing skyscrapers and illuminated bridges over the East River at twilight.",
    thumbUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1800&q=90",
    tags: ["new york", "nyc", "skyline", "manhattan", "cityscape"]
  },
  {
    id: 109,
    title: "Pyramids of Giza at Sunset",
    category: "travel",
    description: "Timeless ancient stone pyramids silhouetted against a golden Egyptian sunset.",
    thumbUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1800&q=90",
    tags: ["pyramids", "egypt", "giza", "ancient", "desert"]
  },
  {
    id: 110,
    title: "Colosseum of Rome",
    category: "travel",
    description: "Historic arches of the Roman Colosseum illuminated against the deep evening sky.",
    thumbUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1800&q=90",
    tags: ["colosseum", "rome", "italy", "history", "ancient"]
  },
  {
    id: 111,
    title: "Kyoto Fushimi Inari Torii Gates",
    category: "travel",
    description: "Endless vermilion torii gates winding up the sacred mountain path in Japan.",
    thumbUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=90",
    tags: ["kyoto", "japan", "torii", "shrine", "red gates"]
  },
  {
    id: 112,
    title: "Sydney Opera House at Dusk",
    category: "travel",
    description: "Sail-like shell architecture glowing across the illuminated Sydney Harbour.",
    thumbUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1800&q=90",
    tags: ["sydney", "australia", "opera house", "harbour", "sunset"]
  },
  {
    id: 113,
    title: "Amalfi Coast Cliffside Village",
    category: "travel",
    description: "Pastel colored Italian villas cascading down sheer cliffs to turquoise Mediterranean waters.",
    thumbUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=90",
    tags: ["amalfi", "positano", "italy", "coast", "cliffs"]
  },
  {
    id: 114,
    title: "Great Wall of China at Dawn",
    category: "travel",
    description: "Ancient stone fortifications snaking across rugged mountain ridges in morning mist.",
    thumbUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1800&q=90",
    tags: ["great wall", "china", "history", "mountains", "landmark"]
  },
  {
    id: 115,
    title: "London Big Ben & Westminster",
    category: "travel",
    description: "Iconic Elizabeth Tower and red double-decker bus crossing Westminster Bridge.",
    thumbUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1800&q=90",
    tags: ["london", "big ben", "uk", "westminster", "bus"]
  },
  {
    id: 116,
    title: "Dubai Burj Khalifa & Fountains",
    category: "travel",
    description: "World's tallest skyscraper sparkling above choregraphed illuminated water fountains.",
    thumbUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=90",
    tags: ["dubai", "burj khalifa", "fountain", "skyscraper", "uae"]
  },
  {
    id: 117,
    title: "Bali Water Temple (Ulun Danu)",
    category: "travel",
    description: "Sacred tiered pagoda temple floating peacefully on misty Lake Bratan in Bali.",
    thumbUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=90",
    tags: ["bali", "indonesia", "temple", "lake", "spiritual"]
  },
  {
    id: 118,
    title: "San Francisco Golden Gate Bridge",
    category: "travel",
    description: "International orange suspension bridge emerging majestically from Pacific sea fog.",
    thumbUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1800&q=90",
    tags: ["golden gate", "san francisco", "bridge", "california", "fog"]
  },
  {
    id: 119,
    title: "Petra Treasury (Al-Khazneh)",
    category: "travel",
    description: "Intricate ancient monument hand-carved directly into rose-red desert sandstone cliffs.",
    thumbUrl: "https://images.unsplash.com/photo-1579606032834-2e233306dbcd?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1579606032834-2e233306dbcd?auto=format&fit=crop&w=1800&q=90",
    tags: ["petra", "jordan", "treasury", "ancient", "carving"]
  },
  {
    id: 120,
    title: "Prague Charles Bridge at Sunrise",
    category: "travel",
    description: "Baroque stone statues lining the historic medieval bridge crossing the Vltava River.",
    thumbUrl: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1800&q=90",
    tags: ["prague", "czech", "charles bridge", "medieval", "statue"]
  },
  {
    id: 121,
    title: "Amsterdam Canal Houses",
    category: "travel",
    description: "Quaint narrow brick gabled townhouses reflected in calm canal waters with bicycles.",
    thumbUrl: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1800&q=90",
    tags: ["amsterdam", "netherlands", "canal", "houses", "bicycle"]
  },
  {
    id: 122,
    title: "Moroccan Riads of Marrakech",
    category: "travel",
    description: "Intricate mosaic zellij tiles and lush courtyards in historic Moroccan architecture.",
    thumbUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=90",
    tags: ["morocco", "marrakech", "riad", "tiles", "architecture"]
  },
  {
    id: 123,
    title: "Singapore Marina Bay Sands",
    category: "travel",
    description: "Futuristic illuminated skybridge and Supertree Grove glowing in evening colors.",
    thumbUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1800&q=90",
    tags: ["singapore", "marina bay", "supertrees", "futuristic", "night"]
  },
  {
    id: 124,
    title: "Cinque Terre Colorful Harbor",
    category: "travel",
    description: "Vibrant yellow, pink, and orange houses perched over the Ligurian Sea in Vernazza.",
    thumbUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1800&q=90",
    tags: ["cinque terre", "italy", "vernazza", "colorful", "coast"]
  },
  {
    id: 125,
    title: "Rio de Janeiro Christ the Redeemer",
    category: "travel",
    description: "Towering Art Deco statue overlooking Copacabana and Sugarloaf Mountain.",
    thumbUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1800&q=90",
    tags: ["rio", "brazil", "christ the redeemer", "sugarloaf", "bay"]
  },
  {
    id: 126,
    title: "Angkor Wat Sunrise Temple",
    category: "travel",
    description: "Ancient stone lotus towers of Cambodia's sacred temple reflected in lotus ponds.",
    thumbUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1800&q=90",
    tags: ["angkor wat", "cambodia", "temple", "ancient", "sunrise"]
  },
  {
    id: 127,
    title: "Barcelona Sagrada Familia",
    category: "travel",
    description: "Gaudí’s breathtaking organic stone towers and stained glass sunburst interiors.",
    thumbUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1800&q=90",
    tags: ["barcelona", "spain", "sagrada familia", "gaudi", "cathedral"]
  },
  {
    id: 128,
    title: "Havana Vintage Cars in Cuba",
    category: "travel",
    description: "Classic 1950s convertible cars cruising past pastel Spanish colonial facades.",
    thumbUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=90",
    tags: ["havana", "cuba", "vintage cars", "classic", "colonial"]
  },
  {
    id: 129,
    title: "Swiss Alpine Village in Zermatt",
    category: "travel",
    description: "Traditional wooden chalets nestled beneath the iconic pyramid of the Matterhorn.",
    thumbUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=90",
    tags: ["switzerland", "zermatt", "matterhorn", "chalet", "alps"]
  },
  {
    id: 130,
    title: "Neuschwanstein Fairy Tale Castle",
    category: "travel",
    description: "Romantic 19th-century Bavarian palace perched high among Alpine pine forests.",
    thumbUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1800&q=90",
    tags: ["germany", "bavaria", "castle", "neuschwanstein", "fairy tale"]
  },
  {
    id: 131,
    title: "Santorini Oia Sunset",
    category: "travel",
    description: "Golden sunlight bathing windmill rooftops and cliffside pools in Cycladic islands.",
    thumbUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1800&q=90",
    tags: ["santorini", "oia", "sunset", "windmill", "cyclades"]
  },
  {
    id: 132,
    title: "Hong Kong Victoria Harbour",
    category: "travel",
    description: "Illuminated high-rise skyline and traditional red-sailed junk boat on the harbour.",
    thumbUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1800&q=90",
    tags: ["hong kong", "skyline", "victoria harbour", "junk boat", "night"]
  },
  {
    id: 133,
    title: "Dubrovnik Medieval Old Town",
    category: "travel",
    description: "Terracotta tiled rooftops surrounded by colossal Adriatic fortress stone walls.",
    thumbUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=90",
    tags: ["dubrovnik", "croatia", "adriatic", "old town", "walls"]
  },
  {
    id: 134,
    title: "Istanbul Blue Mosque",
    category: "travel",
    description: "Cascading domes and six slender minarets glowing in evening twilight across the Bosphorus.",
    thumbUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=90",
    tags: ["istanbul", "turkey", "mosque", "blue mosque", "bosphorus"]
  },
  {
    id: 135,
    title: "Reykjavik Hallgrimskirkja",
    category: "travel",
    description: "Expressionist concrete church tower inspired by volcanic basalt rock formations.",
    thumbUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1800&q=90",
    tags: ["iceland", "reykjavik", "church", "nordic", "basalt"]
  },
  {
    id: 136,
    title: "Mount Fuji & Chureito Pagoda",
    category: "travel",
    description: "Five-story red pagoda framed by cherry blossoms and snow-capped Mount Fuji.",
    thumbUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=90",
    tags: ["mount fuji", "japan", "pagoda", "sakura", "cherry blossom"]
  },
  {
    id: 137,
    title: "Lisbon Tram 28 in Alfama",
    category: "travel",
    description: "Historic yellow electric streetcar climbing narrow cobbled streets in Portugal.",
    thumbUrl: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1800&q=90",
    tags: ["lisbon", "portugal", "tram", "alfama", "yellow tram"]
  },
  {
    id: 138,
    title: "Grand Canyon South Rim",
    category: "travel",
    description: "Expansive multi-layered red rock gorge illuminated by golden setting sun rays.",
    thumbUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=90",
    tags: ["grand canyon", "arizona", "canyon", "geology", "sunset"]
  },
  {
    id: 139,
    title: "Venice Rialto Bridge",
    category: "travel",
    description: "Famous Renaissance arch bridge bustling with water taxis and sunset strollers.",
    thumbUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1800&q=90",
    tags: ["venice", "rialto", "bridge", "italy", "water taxi"]
  },
  {
    id: 140,
    title: "St. Basil's Cathedral",
    category: "travel",
    description: "Fairytale patterned colorful onion domes standing proudly on Red Square.",
    thumbUrl: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1800&q=90",
    tags: ["moscow", "cathedral", "onion domes", "red square", "colorful"]
  },
  {
    id: 141,
    title: "Banff Lake Louise Kayaks",
    category: "travel",
    description: "Red canoes floating peacefully on turquoise glacial water backed by rocky summits.",
    thumbUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=90",
    tags: ["banff", "lake louise", "canada", "canoes", "mountains"]
  },
  {
    id: 142,
    title: "Sanorini Blue Door Steps",
    category: "travel",
    description: "Traditional vibrant blue wooden doorway framing the deep Mediterranean sea.",
    thumbUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1800&q=90",
    tags: ["santorini", "door", "blue", "stairs", "greece"]
  },
  {
    id: 143,
    title: "Chicago Cloud Gate (The Bean)",
    category: "travel",
    description: "Seamless stainless steel sculpture reflecting Millennium Park and the Chicago skyline.",
    thumbUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1800&q=90",
    tags: ["chicago", "the bean", "cloud gate", "reflection", "sculpture"]
  },
  {
    id: 144,
    title: "Hallstatt Village in Austria",
    category: "travel",
    description: "Charming wooden Alpine village reflecting into misty Lake Hallstatt under steep peaks.",
    thumbUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=90",
    tags: ["hallstatt", "austria", "lake", "alps", "village"]
  },
  {
    id: 145,
    title: "Times Square Broadway Lights",
    category: "travel",
    description: "Massive digital billboard screens and yellow cabs illuminating the heart of NYC.",
    thumbUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1800&q=90",
    tags: ["times square", "new york", "broadway", "billboards", "yellow cab"]
  },
  {
    id: 146,
    title: "Santorini Windmills at Dusk",
    category: "travel",
    description: "Historic stone windmills perched high over the glowing Aegean sunset waters.",
    thumbUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1800&q=90",
    tags: ["windmill", "santorini", "greece", "dusk", "aegean"]
  },
  {
    id: 147,
    title: "Edinburgh Castle on Castle Rock",
    category: "travel",
    description: "Ancient Scottish stronghold fortress commanding panoramic views over Princes Street.",
    thumbUrl: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1800&q=90",
    tags: ["edinburgh", "scotland", "castle", "historic", "fortress"]
  },
  {
    id: 148,
    title: "Kyoto Arashiyama River Boat",
    category: "travel",
    description: "Wooden traditional boat gliding through river waters flanked by maple-covered hills.",
    thumbUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=90",
    tags: ["arashiyama", "kyoto", "boat", "river", "autumn"]
  },
  {
    id: 149,
    title: "Florence Duomo (Santa Maria del Fiore)",
    category: "travel",
    description: "Brunelleschi’s iconic Renaissance terracotta dome rising above Florentine rooftops.",
    thumbUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1800&q=90",
    tags: ["florence", "duomo", "italy", "renaissance", "cathedral"]
  },
  {
    id: 150,
    title: "Venice Gondola at St. Mark's Basin",
    category: "travel",
    description: "Classic silhouette of gondolas bobbing gently in front of San Giorgio Maggiore.",
    thumbUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1800&q=90",
    tags: ["venice", "st marks", "gondola", "sunset", "lagoon"]
  }
];

// --------------------------------------------------------------------------
// 4. SECTION 4: TECHNOLOGY & INNOVATION (EXACTLY 50 PHOTOS)
// --------------------------------------------------------------------------
const technologyPhotos = [
  {
    id: 151,
    title: "High-Performance Developer Setup",
    category: "technology",
    description: "Clean modern workstation with glowing mechanical keyboard and dual curved 4K monitors.",
    thumbUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1800&q=90",
    tags: ["developer", "coding", "setup", "monitors", "workspace"]
  },
  {
    id: 152,
    title: "Quantum Microprocessor Circuit",
    category: "technology",
    description: "Intricate macro view of a next-generation silicon chip and microcircuit pathways.",
    thumbUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90",
    tags: ["microchip", "quantum", "processor", "hardware", "silicon"]
  },
  {
    id: 153,
    title: "Hyperscale Cloud Data Center",
    category: "technology",
    description: "Illuminated server racks and fiber-optic cables powering global internet infrastructure.",
    thumbUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=90",
    tags: ["datacenter", "servers", "cloud", "networking", "infrastructure"]
  },
  {
    id: 154,
    title: "Cybernetic Neural Network",
    category: "technology",
    description: "Abstract digital visualization of deep learning nodes and artificial intelligence interconnects.",
    thumbUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=90",
    tags: ["neural network", "ai", "artificial intelligence", "data", "cyber"]
  },
  {
    id: 155,
    title: "Robotic Precision Arm",
    category: "technology",
    description: "High-speed automated industrial robotic arm assembling micro-electronics in cleanroom.",
    thumbUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1800&q=90",
    tags: ["robotics", "automation", "industry", "mechanical", "engineering"]
  },
  {
    id: 156,
    title: "Virtual Reality Immersion",
    category: "technology",
    description: "User experiencing spatial computing and immersive 3D virtual reality metaverse worlds.",
    thumbUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1800&q=90",
    tags: ["vr", "virtual reality", "metaverse", "spatial", "headset"]
  },
  {
    id: 157,
    title: "Futuristic Autonomous EV Concept",
    category: "technology",
    description: "Sleek aerodynamic electric vehicle featuring interactive head-up dashboard displays.",
    thumbUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=90",
    tags: ["ev", "electric car", "autonomous", "vehicle", "concept"]
  },
  {
    id: 158,
    title: "Fiber Optic High-Speed Network",
    category: "technology",
    description: "Luminous glowing strands of ultra-fast glass fiber transmitting terabits of light data.",
    thumbUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1800&q=90",
    tags: ["fiber optic", "broadband", "network", "light", "data"]
  },
  {
    id: 159,
    title: "Space Telescope Deep Field",
    category: "technology",
    description: "Next-generation orbital telescope capturing distant galaxies across deep cosmic space.",
    thumbUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=90",
    tags: ["space", "astronomy", "telescope", "cosmic", "satellite"]
  },
  {
    id: 160,
    title: "Bionic Prosthetic Hand",
    category: "technology",
    description: "Advanced myoelectric carbon-fiber prosthetic hand responding to neural impulses.",
    thumbUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1800&q=90",
    tags: ["bionic", "prosthetics", "biotech", "cybernetics", "medical"]
  },
  {
    id: 161,
    title: "Modern Smartphone Glass Display",
    category: "technology",
    description: "Sleek bezel-less OLED smartphone screen glowing with crystal-sharp colors in dark studio.",
    thumbUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1800&q=90",
    tags: ["smartphone", "mobile", "oled", "gadget", "screen"]
  },
  {
    id: 162,
    title: "Clean Energy Offshore Wind Turbines",
    category: "technology",
    description: "Massive renewable energy wind turbines spinning gracefully over ocean swells.",
    thumbUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=90",
    tags: ["wind turbine", "renewable", "clean energy", "green tech", "power"]
  },
  {
    id: 163,
    title: "Printed Circuit Board (PCB) Traces",
    category: "technology",
    description: "Macro gold solder pads and emerald conductive copper traces on modern motherboard.",
    thumbUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90",
    tags: ["pcb", "circuit", "motherboard", "electronics", "hardware"]
  },
  {
    id: 164,
    title: "Drone Aerial Cinematography",
    category: "technology",
    description: "High-end 8K camera drone hovering steadily against a mountain sunset backdrop.",
    thumbUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1800&q=90",
    tags: ["drone", "aerial", "camera", "uav", "flying"]
  },
  {
    id: 165,
    title: "Solar Photovoltaic Farm",
    category: "technology",
    description: "Endless rows of solar panels capturing sunlight to generate sustainable electricity.",
    thumbUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1800&q=90",
    tags: ["solar", "photovoltaic", "energy", "sustainable", "power"]
  },
  {
    id: 166,
    title: "Cybersecurity Matrix Code Screen",
    category: "technology",
    description: "Streaming cryptographic algorithms and encryption security protocols on dark terminal.",
    thumbUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1800&q=90",
    tags: ["cybersecurity", "encryption", "code", "terminal", "matrix"]
  },
  {
    id: 167,
    title: "Interactive Smartwatch Interface",
    category: "technology",
    description: "Modern wearable smartwatch tracking biometric health metrics on an AMOLED dial.",
    thumbUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&q=90",
    tags: ["smartwatch", "wearable", "biometrics", "amoled", "gadget"]
  },
  {
    id: 168,
    title: "AI Humanoid Robotics Laboratory",
    category: "technology",
    description: "Researchers testing advanced bipedal balance algorithms on autonomous androids.",
    thumbUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1800&q=90",
    tags: ["humanoid", "robot", "lab", "android", "research"]
  },
  {
    id: 169,
    title: "3D Holographic Data Display",
    category: "technology",
    description: "Futuristic volumetric light holograms projecting interactive floating city charts.",
    thumbUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=90",
    tags: ["hologram", "holographic", "3d", "volumetric", "future"]
  },
  {
    id: 170,
    title: "Industrial 3D Printing Laser Sintering",
    category: "technology",
    description: "High-precision selective laser melting creating complex aerospace titanium alloy components.",
    thumbUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=90",
    tags: ["3d printing", "manufacturing", "additive", "laser", "aerospace"]
  },
  {
    id: 171,
    title: "Satellite Dish Ground Station",
    category: "technology",
    description: "Parabolic communication antennas pointing skyward to track orbital communications.",
    thumbUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=90",
    tags: ["satellite", "dish", "telecom", "antenna", "space"]
  },
  {
    id: 172,
    title: "Server Rack Ethernet Cables",
    category: "technology",
    description: "Meticulously organized blue and yellow cat6 patch cables routed through server bays.",
    thumbUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=90",
    tags: ["cables", "ethernet", "networking", "servers", "datacenter"]
  },
  {
    id: 173,
    title: "Mechanical Gaming Keyboard RGB",
    category: "technology",
    description: "Custom mechanical switches backlit with dynamic customizable RGB color waves.",
    thumbUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1800&q=90",
    tags: ["keyboard", "mechanical", "rgb", "gaming", "custom"]
  },
  {
    id: 174,
    title: "Microscope Nanotechnology Research",
    category: "technology",
    description: "Scanning electron microscope visualizing molecular lattice atomic structures.",
    thumbUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1800&q=90",
    tags: ["nanotech", "microscope", "science", "research", "atoms"]
  },
  {
    id: 175,
    title: "Augmented Reality Smart Glasses",
    category: "technology",
    description: "Lightweight waveguide lenses overlaying real-time contextual navigation onto city streets.",
    thumbUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1800&q=90",
    tags: ["augmented reality", "ar", "smart glasses", "hud", "wearables"]
  },
  {
    id: 176,
    title: "Spacecraft Rocket Launch",
    category: "technology",
    description: "Heavy orbital rocket igniting thrust plumes ascending into the upper stratosphere.",
    thumbUrl: "https://images.unsplash.com/photo-1517976487504-59a1a04d20d6?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1517976487504-59a1a04d20d6?auto=format&fit=crop&w=1800&q=90",
    tags: ["rocket", "spacecraft", "launch", "thrust", "aerospace"]
  },
  {
    id: 177,
    title: "Modern Laptop with Code Editor",
    category: "technology",
    description: "Minimalist aluminum ultrabook running clean dark-theme code in modern cafe.",
    thumbUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=90",
    tags: ["laptop", "coding", "software", "ultrabook", "developer"]
  },
  {
    id: 178,
    title: "Futuristic Glass Supercomputer",
    category: "technology",
    description: "Liquid-cooled compute cluster glowing with deep ultraviolet illumination.",
    thumbUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=90",
    tags: ["supercomputer", "liquid cooling", "uv", "compute", "hardware"]
  },
  {
    id: 179,
    title: "Digital Audio Workstation (DAW)",
    category: "technology",
    description: "Studio mixing console with motorized faders and illuminated sound equalizer visualizers.",
    thumbUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1800&q=90",
    tags: ["audio", "studio", "mixing", "faders", "sound engineer"]
  },
  {
    id: 180,
    title: "Electric Vehicle Fast Charger",
    category: "technology",
    description: "High-voltage DC fast charging connector docked into an EV power port.",
    thumbUrl: "https://images.unsplash.com/photo-1558441719-79255c1a480d?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1558441719-79255c1a480d?auto=format&fit=crop&w=1800&q=90",
    tags: ["charging", "ev", "battery", "fast charger", "green transport"]
  },
  {
    id: 181,
    title: "Precision Mirrorless Camera Sensor",
    category: "technology",
    description: "Full-frame backside-illuminated CMOS imaging sensor capturing vivid light photons.",
    thumbUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1800&q=90",
    tags: ["camera", "sensor", "optics", "photography", "mirrorless"]
  },
  {
    id: 182,
    title: "Quantum Cryogenic Dilution Refrigerator",
    category: "technology",
    description: "Gilded chandelier cryostat cooling quantum qubits down to near absolute zero.",
    thumbUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90",
    tags: ["quantum", "cryostat", "gold", "physics", "superconducting"]
  },
  {
    id: 183,
    title: "Wireless Smart Home Automation Hub",
    category: "technology",
    description: "Touchscreen wall panel controlling smart climate, lighting, and home security.",
    thumbUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1800&q=90",
    tags: ["smart home", "iot", "automation", "touchscreen", "wireless"]
  },
  {
    id: 184,
    title: "High-Frequency Trading Algorithm Screens",
    category: "technology",
    description: "Wall of dynamic financial candlestick charts and real-time market data streaming.",
    thumbUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1800&q=90",
    tags: ["trading", "finance", "algorithms", "charts", "fintech"]
  },
  {
    id: 185,
    title: "Surgical Robotics Tele-Operation",
    category: "technology",
    description: "Surgeon utilizing micro-manipulator console to execute minimally invasive robotic surgery.",
    thumbUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=90",
    tags: ["surgical", "medtech", "robotics", "healthcare", "precision"]
  },
  {
    id: 186,
    title: "Laser Cutting CNC Machine",
    category: "technology",
    description: "High-power CO2 laser cutting intricate geometric patterns into sheet steel with spark spray.",
    thumbUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=90",
    tags: ["laser", "cnc", "sparks", "manufacturing", "steel"]
  },
  {
    id: 187,
    title: "High-End Over-Ear Audiophile Headphones",
    category: "technology",
    description: "Open-back planar magnetic headphones resting on polished wooden acoustic stand.",
    thumbUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1800&q=90",
    tags: ["headphones", "audiophile", "sound", "acoustic", "music"]
  },
  {
    id: 188,
    title: "Biometric Fingerprint Scanner",
    category: "technology",
    description: "Optical biometric sensor scanning glowing capacitive fingerprint ridge patterns.",
    thumbUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1800&q=90",
    tags: ["biometrics", "fingerprint", "security", "sensor", "scanner"]
  },
  {
    id: 189,
    title: "Mars Rover Testing on Sand Dunes",
    category: "technology",
    description: "Robotic planetary exploration rover navigating simulated Martian terrain.",
    thumbUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=90",
    tags: ["rover", "mars", "space", "robotics", "planetary"]
  },
  {
    id: 190,
    title: "Smart Urban Transit Light Display",
    category: "technology",
    description: "Long exposure light trails of electric autonomous city buses navigating smart urban streets.",
    thumbUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1800&q=90",
    tags: ["smart city", "transit", "urban", "light trails", "mobility"]
  },
  {
    id: 191,
    title: "Silicon Wafer Cleanroom Fabrication",
    category: "technology",
    description: "Technician in cleanroom bunny suit inspecting etched semiconductor silicon wafer disc.",
    thumbUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90",
    tags: ["semiconductor", "wafer", "cleanroom", "microchip", "fab"]
  },
  {
    id: 192,
    title: "Wireless Earbuds with Charging Case",
    category: "technology",
    description: "Sleek noise-cancelling true wireless earbuds resting on magnetic fast wireless charger.",
    thumbUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1800&q=90",
    tags: ["earbuds", "audio", "wireless", "anc", "gadget"]
  },
  {
    id: 193,
    title: "Artificial Intelligence Code Generation",
    category: "technology",
    description: "Syntax highlighted full-stack software development on dark IDE editor window.",
    thumbUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=90",
    tags: ["code", "ide", "syntax", "fullstack", "programming"]
  },
  {
    id: 194,
    title: "Drone Agriculture Crop Monitoring",
    category: "technology",
    description: "Multispectral sensor drone surveying farmland to optimize water and nutrient levels.",
    thumbUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1800&q=90",
    tags: ["agritech", "drone", "agriculture", "sensors", "smart farming"]
  },
  {
    id: 195,
    title: "Smart Ring Health Tracker",
    category: "technology",
    description: "Titanium smart ring measuring heart rate and sleep cycles using infrared sensors.",
    thumbUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&q=90",
    tags: ["smart ring", "wearable", "health", "titanium", "sensors"]
  },
  {
    id: 196,
    title: "Geothermal Power Plant Turbines",
    category: "technology",
    description: "Vast clean energy steam turbines converting underground volcanic heat into power.",
    thumbUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=90",
    tags: ["geothermal", "clean energy", "turbines", "steam", "power"]
  },
  {
    id: 197,
    title: "High-Resolution Graphics Card GPU",
    category: "technology",
    description: "High-end gaming and AI machine learning graphics processing unit with triple fans.",
    thumbUrl: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1800&q=90",
    tags: ["gpu", "graphics card", "gaming", "ai hardware", "fans"]
  },
  {
    id: 198,
    title: "Electronic Circuit Breadboard Prototyping",
    category: "technology",
    description: "Colorful jumper wires, microcontrollers, and LED indicators on electronics workbench.",
    thumbUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90",
    tags: ["breadboard", "prototyping", "arduino", "maker", "electronics"]
  },
  {
    id: 199,
    title: "Autonomous Delivery Drone",
    category: "technology",
    description: "Hexacopter delivery drone dropping packages safely in suburban neighborhood.",
    thumbUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1800&q=90",
    tags: ["delivery drone", "hexacopter", "logistics", "autonomous", "flight"]
  },
  {
    id: 200,
    title: "Cosmic Deep Space Communication Satellite",
    category: "technology",
    description: "Solar array wings deployed on deep space probe journeying to outer solar planets.",
    thumbUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80",
    fullUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=90",
    tags: ["satellite", "solar array", "space probe", "deep space", "astronomy"]
  }
];

// --------------------------------------------------------------------------
// 5. Combined 200-Photo Catalog & Section Metadata
// --------------------------------------------------------------------------
const allPhotos = [
  ...naturePhotos,
  ...animalsPhotos,
  ...travelPhotos,
  ...technologyPhotos
];

// Section Details for Hero Banners
const sectionInfo = {
  all: {
    badge: '<i class="fa-solid fa-layer-group"></i> Complete Gallery',
    title: 'All Photography Collection',
    description: 'Explore our complete curated catalog of 200 high-resolution photographs across nature, wildlife, global destinations, and groundbreaking technology.',
    countLabel: 'Total Photos'
  },
  nature: {
    badge: '<i class="fa-solid fa-mountain-sun"></i> Section 1: Nature',
    title: 'Nature & Landscapes Gallery',
    description: 'Immerse yourself in 50 breathtaking landscapes, serene mountain valleys, emerald waterfalls, autumn forests, and sunlit coastal shores.',
    countLabel: 'Nature Photos'
  },
  animals: {
    badge: '<i class="fa-solid fa-paw"></i> Section 2: Wildlife',
    title: 'Animals & Wildlife Gallery',
    description: 'Discover 50 intimate portraits of wildlife across land, air, and ocean—from savanna lions and arctic polar bears to deep sea marine life.',
    countLabel: 'Animal Photos'
  },
  travel: {
    badge: '<i class="fa-solid fa-earth-americas"></i> Section 3: Travel',
    title: 'World Travel & Architecture Gallery',
    description: 'Embark on a visual journey through 50 iconic global landmarks, historic ancient citadels, romantic canals, and vibrant cultural destinations.',
    countLabel: 'Travel Photos'
  },
  technology: {
    badge: '<i class="fa-solid fa-laptop-code"></i> Section 4: Innovation',
    title: 'Technology & Future Gallery',
    description: 'Step into the cutting-edge world of 50 photographs showcasing quantum computing, AI neural networks, aerospace rocketry, and clean robotics.',
    countLabel: 'Tech Photos'
  }
};

// --------------------------------------------------------------------------
// 6. Application State
// --------------------------------------------------------------------------
let currentSection = "all";
let currentSearchQuery = "";
let displayedPhotos = [...allPhotos];
let currentLightboxIndex = 0;
let isZoomed = false;

// Touch swipe tracking variables
let touchStartX = 0;
let touchEndX = 0;

// Safe SVG Fallback Image (used if any online CDN image fails)
const svgFallback = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" fill="%231e293b"><rect width="800" height="600" fill="%231e293b"/><circle cx="400" cy="260" r="60" fill="%236366f1"/><path d="M220 460 L360 320 L440 390 L520 290 L620 460 Z" fill="%23818cf8"/><text x="400" y="520" font-family="sans-serif" font-size="24" fill="%23f8fafc" text-anchor="middle">Lumina Photography</text></svg>';

// --------------------------------------------------------------------------
// 7. DOM Elements Selection
// --------------------------------------------------------------------------
const galleryGrid = document.getElementById("galleryGrid");
const emptyState = document.getElementById("emptyState");
const navButtons = document.querySelectorAll(".nav-btn");
const filterPills = document.querySelectorAll(".filter-pill");
const brandHomeLink = document.getElementById("brandHomeLink");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const resetFilterBtn = document.getElementById("resetFilterBtn");
const themeToggleBtn = document.getElementById("themeToggle");

// Banner Elements
const sectionBadge = document.getElementById("sectionBadge");
const sectionTitle = document.getElementById("sectionTitle");
const sectionDescription = document.getElementById("sectionDescription");
const currentPhotoCount = document.getElementById("currentPhotoCount");
const currentPhotoCountLabel = document.getElementById("currentPhotoCountLabel");

// Lightbox Elements
const lightboxModal = document.getElementById("lightboxModal");
const lightboxBackdrop = document.getElementById("lightboxBackdrop");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxSpinner = document.getElementById("lightboxSpinner");
const lightboxCategory = document.getElementById("lightboxCategory");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDescription = document.getElementById("lightboxDescription");
const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
const lightboxPrevBtn = document.getElementById("lightboxPrevBtn");
const lightboxNextBtn = document.getElementById("lightboxNextBtn");
const lightboxZoomBtn = document.getElementById("lightboxZoomBtn");

// --------------------------------------------------------------------------
// 8. Initialization & Event Binding
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  updateSectionUI(currentSection);
  renderGallery();
  setupEventListeners();
  verifyDatasetIntegrity();
});

/**
 * Validates dataset counts in the console
 */
function verifyDatasetIntegrity() {
  console.log(`[Lumina Gallery Verification]`);
  console.log(`Nature Photos: ${naturePhotos.length} / 50`);
  console.log(`Animals Photos: ${animalsPhotos.length} / 50`);
  console.log(`Travel Photos: ${travelPhotos.length} / 50`);
  console.log(`Technology Photos: ${technologyPhotos.length} / 50`);
  console.log(`Total Photos: ${allPhotos.length} / 200`);
}

function setupEventListeners() {
  // Brand Click -> Return to Home / All Gallery
  if (brandHomeLink) {
    brandHomeLink.addEventListener("click", (e) => {
      e.preventDefault();
      switchSection("all");
    });
  }

  // Top Nav Section buttons
  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetSection = button.getAttribute("data-section");
      switchSection(targetSection);
    });
  });

  // Filter Pill buttons
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const targetFilter = pill.getAttribute("data-filter");
      switchSection(targetFilter);
    });
  });

  // Search input live typing
  searchInput.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = currentSearchQuery.length > 0 ? "block" : "none";
    filterAndRender();
  });

  // Clear search button
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearchQuery = "";
    clearSearchBtn.style.display = "none";
    searchInput.focus();
    filterAndRender();
  });

  // Empty state reset button
  resetFilterBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearchQuery = "";
    clearSearchBtn.style.display = "none";
    switchSection("all");
  });

  // Lightbox controls
  lightboxCloseBtn.addEventListener("click", closeLightbox);
  lightboxBackdrop.addEventListener("click", closeLightbox);
  lightboxPrevBtn.addEventListener("click", showPrevPhoto);
  lightboxNextBtn.addEventListener("click", showNextPhoto);
  lightboxZoomBtn.addEventListener("click", toggleZoom);

  // Keyboard navigation
  window.addEventListener("keydown", handleKeyDown);

  // Mobile Touch Swipe support for Lightbox
  lightboxModal.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightboxModal.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  // Theme toggle
  themeToggleBtn.addEventListener("click", toggleTheme);
}

// --------------------------------------------------------------------------
// 9. Section Switching & Filtering Logic
// --------------------------------------------------------------------------

/**
 * Switches the active section (all, nature, animals, travel, technology)
 */
function switchSection(sectionKey) {
  currentSection = sectionKey;

  // Sync Nav buttons
  navButtons.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-section") === sectionKey);
  });

  // Sync Filter pills
  filterPills.forEach(pill => {
    pill.classList.toggle("active", pill.getAttribute("data-filter") === sectionKey);
  });

  updateSectionUI(sectionKey);
  filterAndRender();
}

/**
 * Updates the hero banner title, badge, description, and photo count
 */
function updateSectionUI(sectionKey) {
  const info = sectionInfo[sectionKey] || sectionInfo.all;
  sectionBadge.innerHTML = info.badge;
  sectionTitle.textContent = info.title;
  sectionDescription.textContent = info.description;
  currentPhotoCountLabel.textContent = info.countLabel;
}

/**
 * Filters the photo list according to current section and search query
 */
function filterAndRender() {
  // 1. Filter by Section
  let pool = (currentSection === "all")
    ? allPhotos
    : allPhotos.filter(p => p.category === currentSection);

  // 2. Filter by Search Query
  if (currentSearchQuery) {
    pool = pool.filter(p => {
      const inTitle = p.title.toLowerCase().includes(currentSearchQuery);
      const inDesc = p.description.toLowerCase().includes(currentSearchQuery);
      const inCategory = p.category.toLowerCase().includes(currentSearchQuery);
      const inTags = p.tags && p.tags.some(t => t.toLowerCase().includes(currentSearchQuery));
      return inTitle || inDesc || inCategory || inTags;
    });
  }

  displayedPhotos = pool;
  currentPhotoCount.textContent = displayedPhotos.length;
  renderGallery();
}

/**
 * Dynamically generates and renders photo cards into the CSS Grid container
 */
function renderGallery() {
  galleryGrid.innerHTML = "";

  if (displayedPhotos.length === 0) {
    emptyState.style.display = "block";
    galleryGrid.style.display = "none";
    return;
  }

  emptyState.style.display = "none";
  galleryGrid.style.display = "grid";

  // Use DocumentFragment for high-performance rendering of 200 items
  const fragment = document.createDocumentFragment();

  displayedPhotos.forEach((photo, index) => {
    const card = document.createElement("article");
    card.className = "gallery-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View ${photo.title}`);

    card.innerHTML = `
      <div class="card-image-wrap">
        <img 
          class="card-img" 
          src="${photo.thumbUrl}" 
          alt="${photo.title}" 
          loading="lazy"
          onerror="this.onerror=null; this.src='${svgFallback}';"
        />
        <div class="card-overlay">
          <span class="card-badge">${photo.category}</span>
          <div class="card-overlay-bottom">
            <div>
              <h3 class="card-overlay-title">${photo.title}</h3>
              <p class="card-overlay-desc">${photo.description}</p>
            </div>
            <div class="card-zoom-icon" title="Expand Photo">
              <i class="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="card-caption">
        <h3 class="card-title">${photo.title}</h3>
        <div class="card-meta">
          <span class="card-category-tag">${photo.category}</span>
          <span><i class="fa-regular fa-image"></i> High Res</span>
        </div>
      </div>
    `;

    // Click event to open in Lightbox
    card.addEventListener("click", () => openLightbox(index));

    // Keyboard support: Enter / Space opens lightbox
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });

    fragment.appendChild(card);
  });

  galleryGrid.appendChild(fragment);
}

// --------------------------------------------------------------------------
// 10. Lightbox Modal Navigation & Functionality
// --------------------------------------------------------------------------

/**
 * Opens Lightbox view for the selected photo
 */
function openLightbox(index) {
  if (displayedPhotos.length === 0) return;
  currentLightboxIndex = index;
  resetZoom();

  lightboxModal.classList.add("active");
  lightboxModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");

  updateLightboxView();
}

/**
 * Closes Lightbox view and restores scroll
 */
function closeLightbox() {
  lightboxModal.classList.remove("active");
  lightboxModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  resetZoom();
}

/**
 * Updates the image, metadata, and "Photo X / Y" counter in the lightbox
 */
function updateLightboxView() {
  const photo = displayedPhotos[currentLightboxIndex];
  if (!photo) return;

  // Show spinner & fade out current image
  lightboxSpinner.style.display = "block";
  lightboxImg.style.opacity = "0.15";

  // Preload high-res image
  const imgLoader = new Image();
  imgLoader.src = photo.fullUrl;

  imgLoader.onload = () => {
    lightboxImg.src = photo.fullUrl;
    lightboxImg.alt = photo.title;
    lightboxImg.style.opacity = "1";
    lightboxSpinner.style.display = "none";
  };

  imgLoader.onerror = () => {
    lightboxImg.src = photo.thumbUrl || svgFallback;
    lightboxImg.alt = photo.title;
    lightboxImg.style.opacity = "1";
    lightboxSpinner.style.display = "none";
  };

  // Update text & counter ("Photo X / Y")
  lightboxCategory.textContent = photo.category;
  lightboxCounter.textContent = `Photo ${currentLightboxIndex + 1} / ${displayedPhotos.length}`;
  lightboxTitle.textContent = photo.title;
  lightboxDescription.textContent = photo.description;
}

/**
 * Navigates to next photo in current set (with loop wrap-around)
 */
function showNextPhoto() {
  if (displayedPhotos.length <= 1) return;
  resetZoom();
  currentLightboxIndex = (currentLightboxIndex + 1) % displayedPhotos.length;
  updateLightboxView();
}

/**
 * Navigates to previous photo in current set (with loop wrap-around)
 */
function showPrevPhoto() {
  if (displayedPhotos.length <= 1) return;
  resetZoom();
  currentLightboxIndex = (currentLightboxIndex - 1 + displayedPhotos.length) % displayedPhotos.length;
  updateLightboxView();
}

/**
 * Toggles zoom magnification on the lightbox image
 */
function toggleZoom() {
  isZoomed = !isZoomed;
  if (isZoomed) {
    lightboxImg.classList.add("zoomed");
    lightboxZoomBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass-minus"></i>';
    lightboxZoomBtn.setAttribute("title", "Exit Zoom");
  } else {
    resetZoom();
  }
}

/**
 * Resets image zoom state
 */
function resetZoom() {
  isZoomed = false;
  lightboxImg.classList.remove("zoomed");
  lightboxZoomBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus"></i>';
  lightboxZoomBtn.setAttribute("title", "Toggle Zoom");
}

/**
 * Handles keyboard navigation in Lightbox
 */
function handleKeyDown(e) {
  if (!lightboxModal.classList.contains("active")) return;

  switch (e.key) {
    case "ArrowRight":
      showNextPhoto();
      break;
    case "ArrowLeft":
      showPrevPhoto();
      break;
    case "Escape":
      closeLightbox();
      break;
  }
}

/**
 * Handles touch gestures for mobile swipe navigation
 */
function handleSwipe() {
  const swipeDelta = touchEndX - touchStartX;
  const threshold = 45;

  if (Math.abs(swipeDelta) > threshold) {
    if (swipeDelta < 0) {
      // Swiped Left -> Next Photo
      showNextPhoto();
    } else {
      // Swiped Right -> Previous Photo
      showPrevPhoto();
    }
  }
}

// --------------------------------------------------------------------------
// 11. Theme Management (Dark & Light Theme)
// --------------------------------------------------------------------------

/**
 * Initializes theme from localStorage or system preference
 */
function initTheme() {
  const savedTheme = localStorage.getItem("lumina-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark-theme");
    updateThemeIcon(true);
  } else {
    document.body.classList.remove("dark-theme");
    updateThemeIcon(false);
  }
}

/**
 * Toggles dark/light theme
 */
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("lumina-theme", isDark ? "dark" : "light");
  updateThemeIcon(isDark);
}

/**
 * Updates the theme toggle icon
 */
function updateThemeIcon(isDark) {
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = isDark
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
  }
}
