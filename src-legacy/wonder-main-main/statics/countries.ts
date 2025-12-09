/* eslint-disable quotes */
import {
  imgsPeru,
  imgsChile,
  imgsEcuador,
  imgsMexico,
  imgsArgentina,
  imgsCostaRica,
  imgsColombia,
} from './imgsCountries';

interface Image {
  img: string;
  label: string;
  icon?: string;
}
export interface ResGetCountry {
  informationBasic: {
    indicativePhone: string;
    capital: string;
    timezone: string;
    currency: string;
    language: string;
    voltage: string;
    population: string;
  };
  aboutCountry: {
    description: string;
    images: Image[];
  };
  mainActivities: {
    description: string;
    images: Image[];
  };
  entryRequirements: {
    requirements: Record<string, string>;
    linkMoreInformation?: string;
  };
  tips: string[];
}

type lngCountry = Record<string, Record<string, ResGetCountry>>;
export const countriesInformation: lngCountry = {
  en: {
    peru: {
      informationBasic: {
        indicativePhone: '+51',
        capital: 'Lima',
        currency: 'Sol (PEN)',
        language: 'Spanish',
        timezone: 'GMT-5',
        voltage: '220V',
        population: '33.7 million',
      },
      aboutCountry: {
        description:
          "Explore the wonders of Peru, a multicultural country full of natural and historical richness, located in the heart of western South America. A true feast for the senses. Catch views of its coast along the Pacific Ocean and wander through the imposing mountains of the Andes. Explore mysterious jungles in the Amazon, and head to the lively atmosphere of Lima for a truly unforgettable gastronomic feast. Don't miss the chance to explore the enigmatic Nazca lines and geoglyphs etched into the desert sands, a mystery that continues to puzzle scientists and historians worldwide. Peru's varied cities, archaeological sites, cuisine and biodiversity, will leave you in awe!",
        images: imgsPeru,
      },
      entryRequirements: {
        requirements: {
          Passport: 'Valid passport',
          'Exit Ticket':
            'Ticket or outgoing voucher for country of origin or for onward travel',
          Visa: 'Not required for most nationalities, but we  recommend verifying the specific situation according to your country of origin',
        },
        linkMoreInformation:
          'https://www.migraciones.gob.pe/wp-content/uploads/2018/03/ley1350_migraciones_reglamento.pdf',
      },
      mainActivities: {
        description:
          'Peru is divided into several natural regions: the coast, the highlands, and the jungle, allowing for a variety of activities. Some of the most notable are:',
        images: imgsPeru,
      },
      tips: [
        'The climate varies from warm to cold depending on altitude and season. We recommended bringing layers of clothing to fit multiple weather conditions.',
        'In higher altitude areas, such as Cuzco, it’s possible to experience altitude sickness. If possible, we advise taking necessary precautions and allowing  time to acclimatize (Coca tea is a local remedy that can also help alleviate the symptoms of altitude sickness).',
        'US dollars and credit cards are accepted in most places, but we still recommend carrying the local currency (Sol (PEN)) to get better rates.',
        'Peruvian cuisine is famous, and trying dishes such as ceviche and lomo saltado is an essential part of your trip.',
        'We strongly advise on the use of sunscreen and insect repellent, especially in tropical regions like the Amazon Rainforest.',
      ],
    },
    chile: {
      informationBasic: {
        indicativePhone: '+56',
        capital: 'Santiago de Chile',
        currency: 'Peso (CLP)',
        language: 'Spanish',
        timezone: 'GMT-3',
        voltage: '220V',
        population: '17.2 million',
      },
      aboutCountry: {
        description:
          'Embark on a journey to Chile, a country that stretches from the waves of the Pacific Ocean to the soaring peaks of the Andes. Visit the eclectic capital of Santiago, buzzing with lively graffitied neighborhoods and art galleries. Head to the south, a wildlife sanctuary where condors, flamingos, and magellan penguins roam free, and journey through the martian-like Atacama Desert. This land of natural wonders will promise an unforgettable adventure.',
        images: imgsChile,
      },
      entryRequirements: {
        requirements: {
          Passport: 'Valid passport',
          'Exit Ticket':
            'Ticket or outgoing voucher to country of origin or for onward travel',
          Others:
            'In some cases, the immigration officer may request that you show economic solvency for your stay in the country',
          Visa: ' If you are a citizen of South America, the European Union, the United States, Canada, or Australia, you do not need a visa for tourism purposes. However, citizens of some countries must pay a fee in cash (reciprocity tax) upon arrival at the Chilean airport',
        },
        linkMoreInformation:
          'https://www.consulado.gob.cl/quiero-viajar-a-chile',
      },
      mainActivities: {
        description:
          'Chile is divided into four regions; North, Center, South, and Austral. Dry climates characterize the north, where you can find the enormous Atacama Desert and the famous Piedras Rojas. The center is the most populated area of the country, home to the beautiful city of Santiago and the colorful houses of Valparaíso. In the south, you can discover the magical Patagonia National Park, one of the best places for adventure tourism. The Austral region includes Punta Arenas and the Strait Park, where you can go hiking, horseback riding, and whale watching in the Pacific Ocean. Among the main activities to do in Chile are:',
        images: imgsChile,
      },
      tips: [
        'In many places, payment in U.S. dollars is accepted, but we suggest carrying the local currency (Chilean Peso CLP) to get better prices.',
        'We recommend bringing insect repellent and sunscreen.',
        'Pack a video or photo camera to capture the wonderful landscapes of the country.',
        'Regarding transportation, we strongly advise using ride-sharing services like Uber or tourist transport services. Choosing domestic flights for long-distance travel is the way to go.',
      ],
    },
    ecuador: {
      informationBasic: {
        indicativePhone: '+593',
        capital: 'Quito',
        currency: 'US dollar (USD)',
        language: 'Spanish',
        timezone: 'GMT-5',
        voltage: '120V & 70Hz',
        population: '17.8 million',
      },
      aboutCountry: {
        description:
          'Discover the mesmerizing country of Ecuador. A one-of-a-kind place located in the heart of the mountains. Explore the native wildlife of Cajas National Park and admire over 200 lagoons surrounded by moorlands and mountain peaks. Head to the Chimborazo Fauna Production Reserve, Ecuador’s highest volcano and enjoy its panoramic views, offering an impressive sighting of the Andes mountain range. Then, there’s one of the most iconic travel destinations in the world, the ecological marvel of the Galápagos Islands. Enjoy its white sand beaches, volcanic rock formations and azure waters in the natural paradise. You’ll be able to get up close and personal with frigate birds, giant tortoises, sea lions and even marine iguanas. Ecuador combines adventure, culture and natural landscapes, a true gem in Latin America.',
        images: imgsEcuador,
      },
      entryRequirements: {
        requirements: {
          Passport:
            'Valid passport. South American citizens may enter with an ID card or national identification document.',
          Visa: 'Not all people who travel to Ecuador  require a tourist visa; this will depend on your nationality. We highly recommend that you verify the specific situation according to your country of origin.',
          Others:
            'Vaccination against yellow fever is recommended for all travelers (both national and international)',
        },
        linkMoreInformation:
          'https://www.ministeriodegobierno.gob.ec/requisitos-para-ingresar-a-ecuador/#:~:text=Las%20personas%20extranjeras%20pueden%20ingresar,punto%20de%20control%20migratorio%20oficial',
      },
      mainActivities: {
        description:
          "Ecuador is divided into three unique natural regions; the coastal lowlands, the Andean highlands and the Amazon rainforest. The three regions are united by the backbone of the country, the majestic Andes mountain range (stretching throughout the country).  While the remote islands of Galápagos are located about, 1000 km from the country's mainland coast. Among Ecuador's most notable activities are:",
        images: imgsEcuador,
      },
      tips: [
        'Climate ranges from tropical to mild, so we suggest packing comfortable clothing that’s suitable to the weather. Success lies in layers.',
        'Regarding transportation, we recommend that you use transportation apps like Uber or hire a tourist transportation service. Caution is advised when using unofficial taxis.',
        'Although credit cards are accepted in most cities, it’s advisable to carry cash (US Dollar) for better prices.',
        'The use of sunscreen and insect repellent is strongly encouraged.',
        'While traveling to Quito, you may experience altitude sickness due to the city’s high elevation. However, rest assured, your body will quickly acclimatize, allowing you to comfortably enjoy all the amazing things that this beautiful city has to offer.',
      ],
    },
    mexico: {
      informationBasic: {
        indicativePhone: '+52',
        capital: 'Ciudad de México (CDMX)',
        currency: 'Peso (MXN)',
        language: 'Spanish',
        timezone: 'GMT-6 to GMT-8 depending on location',
        voltage: '110V type A and B',
        population: '45.4 million',
      },
      aboutCountry: {
        description:
          'Explore the wonders of Mexico, a country brimming with historical treasures and natural wonders. Nestled in Central America, Mexico pays tribute to the ancient Aztec and Mayan civilizations, two  giants of Pre-Columbian Mesoamerica. It is a perfect blend of cultural and natural richness. From arid deserts to tropical rain forests and stunning beaches, you’ll uncover a different type of story in each step of the way. Experience lucha libre wrestling matches, savor authentic Mexican tequilas, and explore exotic flavors in a land that will enchant your spirit.',
        images: imgsMexico,
      },
      entryRequirements: {
        requirements: {
          Passport: 'Valid passport.',
          Visa: 'Not required for most nationalities, but we recommended verifying  the specific situation according to your country of origin',
        },
        linkMoreInformation:
          'https://www.inm.gob.mx/gobmx/word/index.php/paises-requieren-visa-para-mexico/',
      },
      mainActivities: {
        description:
          'Mexico is divided into six geographic regions: North, Center, West, Gulf, Yucatán Peninsula and South. Each region enjoys particular characteristics, from the sun-drenched desert landscapes of the North to the tropical jungles of the South, Mexico offers a wide range of activities to enchant every type of traveler. Among the most notable are:',
        images: imgsMexico,
      },
      tips: [
        "Climate ranges from tropical to mild, so we recommended packing comfortable clothing that's suitable to the weather. Success lies in layers.",
        'Regarding transportation, using ride-sharing services like Uber for short trips, opting for tourist transport services for more extensive exploration, and choosing domestic flights for long-distance travel is the way to go. Caution is advised when using unofficial taxis.',
        'US dollars and credit cards are accepted in most places, but we still recommend carrying the local currency (MXN Peso) to get better rates.',
        'We strongly advise you to use plenty of sunscreen and insect repellent, especially in regions like the Riviera Maya',
      ],
    },
    argentina: {
      informationBasic: {
        indicativePhone: '+54',
        capital: 'Buenos Aires',
        currency: 'Peso (ARS)',
        language: 'Spanish',
        timezone: 'GMT-3',
        voltage: '220V type I and C',
        population: '45.4 million',
      },
      aboutCountry: {
        description:
          "From adventurers to wine and soccer enthusiasts, Argentina is a country that offers something for everyone. Located at the southern tip of South America, this land of enchanting contrasts is distinguished by its wide variety of places. Its exhilarating capital of Buenos Aires offers an exquisite culinary proposal and a lively nightlife filled with music and tango. Head to the majestic Iguazú Falls to witness one of the world's most stunning natural wonders of the world, and enjoy a fine wine in the beautiful vineyards of Mendoza.",
        images: imgsArgentina,
      },
      entryRequirements: {
        requirements: {
          Passport:
            'Valid passport. Travelers from Brazil, Bolivia, Uruguay, Paraguay, Chile, Peru, Venezuela, Ecuador, and Colombia do not require a passport and can enter with the ID card of each of these countries.',
          Visa: 'Not required for most nationalities, but we recommended verifying  the specific situation according to your country of origin',
        },
        linkMoreInformation:
          'https://www.migraciones.gov.ar/accesible/indexdnm.php?visas#U',
      },
      mainActivities: {
        description:
          "Discover the diverse geographical regions of Argentina. Begin your journey in  the north, where you can embark on an epic adventure that combines imposing mountain ranges with wide, arid deserts, ideal for a break from city life. The coastal regions boast with tropical jungles (specially in the Cuyo region), where you'll find charming vineyard vistas, making it a paradise for wine enthusiasts. Take a moment to marvel at the stunning beauty of Patagonia and discover the magical allure  of this South American nation. To kick off your exploration, we suggest checking out the following experiences:",
        images: imgsArgentina,
      },
      tips: [
        'The climate varies from warm in the north to cold in the south of the country, so we recommend bringing appropriate clothing.',
        'In higher altitude areas like Mendoza, you may experience altitude sickness. We suggest taking precautions and allowing  necessary time to acclimatize.',
        'We strongly advise the use of sunscreen and insect repellent, especially in places like the Iguazú jungle.',
        'US dollars and credit cards are accepted in most places, but we still recommend carrying the local currency (Argentine Peso ARS) to get better rates.',
        'Regarding transportation, using ride-sharing services like Uber for short trips, opting for vehicle rentals for more extensive exploration, and choosing domestic flights for long-distance travel is the way to go.',
      ],
    },
    'costa-rica': {
      informationBasic: {
        indicativePhone: '+506',
        capital: 'San José',
        currency: 'Colón (CRC)',
        language: 'Spanish',
        timezone: 'GMT-6',
        voltage: '110V',
        population: '5.2 million',
      },
      aboutCountry: {
        description:
          "Costa Rica, the land of coral reefs, tropical rainforests, and lush forests located in Central America. Take advantage of its tropical climate and engage in adventure activities like trekking and canopy tours in the Monteverde Cloud Forest, a place with an enormous variety of wildlife. Journey through Manuel Antonio, the perfect coastal paradise for those seeking beach days, and don't miss the capital, San Jose, with its colorful neighborhoods and majestic Teatro Nacional.",
        images: imgsCostaRica,
      },
      entryRequirements: {
        requirements: {
          Passport: 'Valid passport',
          'Exit Ticket':
            'Ticket or outgoing voucher to country of origin or for onward travel',
          Visa: '(Not required for all nationalities). For nationalities for which it is mandatory, you must apply at the Costa Rican embassy. The visa will be granted for a single entry into the country.',
          Immigration:
            'In some cases, the immigration officer may request that you show economic solvency for your stay in the country',
          Others:
            'All travelers coming from the following countries must possess a yellow fever vaccination certificate before entry into Costa Rica: Angola, Benin, Burkina Faso, Cameroon, Democratic Republic of the Congo, Gabon, Gambia, Guinea, Liberia, Nigeria, Sierra Leone, Sudan, Bolivia, Venezuela, Brazil, Peru, Colombia, Ecuador, and the Republic of Guyana.',
        },
        linkMoreInformation: 'https://www.migracion.go.cr/Paginas/Visas.aspx',
      },
      mainActivities: {
        description:
          'Costa Rica is divided into seven provinces. In the Valle Central, its capital is located, the province of San José, as well as Alajuela, Heredia, and Cartago. In the Caribbean, there is Limón, and in the Pacific, Guanacaste and Puntarenas. The country is one of the most sought out adventure destinations in the world, but has also begun to position itself as a travel hotspot for all types of explorers:',
        images: imgsCostaRica,
      },
      tips: [
        'US dollars and credit cards are accepted in most places, but we still recommend carrying the local currency (Colón costarricense CRC) to get better rates.',
        'The use of sunscreen and insect repellent is strongly advised',
        'Regarding transportation, we suggest using transportation apps like Uber or hiring tourist transport services. Caution is advised when using unofficial taxis.',
        "Additional info: Costa Ricans are known for their kindness and hospitality. 'La pura vida' is a Costa Rican motto that represents a relaxed and positive lifestyle.",
      ],
    },
    colombia: {
      informationBasic: {
        indicativePhone: '+57',
        capital: 'Bogotá',
        currency: 'Peso (COP)',
        language: 'Spanish',
        timezone: 'GMT-5',
        voltage: '110V',
        population: '51.5 million',
      },
      aboutCountry: {
        description:
          'Colombia, a country of contrasts famous for its incredible diversity, coffee, and the purity of its emeralds. Located in South America, it is a territory with Caribbean coasts on both the Pacific Ocean and the Caribbean Sea and savors a variety of climates due to its geography. From the Andes to the lush Amazon rainforest, the country has the perfect conditions to visit at any time of the year. Head to the Gold Museum in Bogotá, journey through the wax palm trees of Valle del Cocora, and explore the colonial architecture of the Caribbean jewel, Cartagena. Prepare to be delightfully amazed in Latin America’s best-kept secret!',
        images: imgsColombia,
      },
      entryRequirements: {
        requirements: {
          Passport: 'Valid passport',
          'Exit Ticket':
            'Return ticket or passage to the country of origin or onward travel',
          Visa: '(Not required for all nationalities). For nationalities for which it is mandatory, you must apply at the Colombian embassy',
        },
        linkMoreInformation:
          'https://colombia.travel/en/practical-information/visas-and-embassies',
      },
      mainActivities: {
        description:
          'Colombia is divided into six major regions: the Caribbean, Andean, Orinoquía, Amazonian, Pacific, and Insular regions. Each one has various altitudes, climates, and unique landscapes to enjoy multiple activities. Among the most notable are:',
        images: imgsColombia,
      },
      tips: [
        'The climate varies from warm to cold depending on the altitude. We suggest packing for both types of weather options.',
        'The use of sunscreen and insect repellent is recommended, especially in places like the Amazon Rainforest and the Pacific Region.',
        'US dollars and credit cards are accepted in most places, but we advise carrying the local currency (Colombian Peso, COP) to get better rates.',
        'Regarding transportation, using ride-sharing services like Uber for short trips, opting for vehicle rentals for more extensive exploration, and choosing domestic flights for long-distance travel is the way to go. Caution is advised when using unofficial taxis.',
        "It's common to leave a tip in restaurants or establishments, the normal rate is generally around 10% of the total bill",
      ],
    },
  },
  es: {
    peru: {
      informationBasic: {
        indicativePhone: '+51',
        capital: 'Lima',
        currency: 'Sol (PEN)',
        language: 'Español',
        timezone: 'GMT-5',
        voltage: '220V tipo A, B y C',
        population: '33.7 millones',
      },
      aboutCountry: {
        description:
          'Un país multicultural y lleno de tradición, ubicado en el corazón de Sudamérica occidental. Desde su costa, bordeando el océano pacífico hasta las imponentes montañas de la cordillera de los Andes, el territorio de Perú no dejará de sorprenderte. Explora selvas misteriosas en la Amazonia, disfruta de un festín gastronómico en la capital de Lima y déjate sorprender por más de 300 geoglifos grabados en las arenas de sus desiertos. Su variada geografía, que incluye ciudades históricas, sitios arqueológicos, lagos, ríos y una rica biodiversidad, ¡no dejará de sorprenderte!',
        images: imgsPeru,
      },
      entryRequirements: {
        requirements: {
          Pasaporte: 'Pasaporte con vigencia no menor a 6 meses',
          'Exit Ticket':
            'Boleto o pasaje de regreso a país de origen o de continuación de viaje',
          Visa: 'No es obligatoria para la mayoría de las nacionalidades, pero se recomienda verificar la situación específica según el país de origen',
        },
        linkMoreInformation:
          'https://www.migraciones.gob.pe/wp-content/uploads/2018/03/ley1350_migraciones_reglamento.pdf',
      },
      mainActivities: {
        description:
          'Perú se encuentra dividido por diversas regiones naturales: La costa, la sierra y la selva, lo cual permite disfrutar de actividades de todo tipo. Algunas de las más destacadas son:',
        images: imgsPeru,
      },
      tips: [
        'El clima varía según la región y la temporada, por lo que se recomienda llevar ropa ligera',
        'En zonas de mayor altitud, como Cuzco, se puede experimentar el mal de altura, por lo que es recomendable tomar precauciones y permitir tiempo para aclimatarse (El té de coca es un remedio local que también puede ayudar a aliviar los síntomas del mal de altura)',
        'En muchos lugares se acepta el pago con dólares americanos, pero es recomendable llevar la moneda local ( sol peruano, PEN) para obtener mejores precios',
        'La gastronomía peruana es famosa, y probar platos como el ceviche y el lomo saltado es imprescindible',
        'Se recomienda llevar repelente de insectos y protector solar, especialmente en regiones tropicales como la Amazonia',
      ],
    },
    chile: {
      informationBasic: {
        indicativePhone: '+56',
        capital: 'Santiago de Chile',
        currency: 'Peso (CLP)',
        language: 'Español',
        timezone: 'GMT-3',
        voltage: '220V',
        population: '17.2 millones',
      },
      aboutCountry: {
        description:
          'Embárcate en un viaje al increíble país de Chile, una tierra que se extiende desde las olas del Océano Pacífico hasta las impresionantes cumbres de los Andes. Cada rincón cuenta con una historia distinta. Sumérgete en la energía ecléctica de la capital de Santiago, rodeada de galerías de arte y barrios llenos de graffiti. Explora el santuario de vida silvestre del sur de Chile, hogar de majestuosos cóndores, elegantes flamencos y encantadores pingüinos de Magallanes. No te pierdas la oportunidad de conocer los paisajes del Desierto de Atacama, una experiencia que te dejará con recuerdos imborrables.',
        images: imgsChile,
      },
      entryRequirements: {
        requirements: {
          Pasaporte: 'Pasaporte vigente',
          'Tiquete De Salida':
            'Boleto o pasaje de regreso a país de origen o de continuación de viaje',
          Otros:
            'En algunos casos, el oficial de inmigración puede solicitar que demuestres solvencia económica para tu estadía en el país o la reserva de tu hotel',
          Visa: 'Si eres un ciudadano sudamericano, de la Unión Europea, Estados Unidos, Canadá y Australia, no necesitas visa como turista. Sin embargo, algunos países deben pagar una tasa en efectivo (impuesto de reciprocidad) al llegar al aeropuerto de Chile.',
        },
        linkMoreInformation:
          'https://www.consulado.gob.cl/quiero-viajar-a-chile',
      },
      mainActivities: {
        description:
          'Chile se encuentra dividido en cuatro regiones; Norte, Centro, Sur y Austral. El norte es caracterizado por climas secos. Podrás encontrar el desierto de Atacama y el famoso paisaje de Piedras Rojas. El centro es la zona más habitada del país, donde se ubica la hermosa ciudad de Santiago y las coloridas casas de Valparaíso y en el sur, podrás conocer el mágico Parque Nacional Patagonia, uno de los mejores lugares para realizar turismo de aventuras. La región Austral, cuenta con Punta Arenas y el Parque del Estrecho, donde podrás realizar caminatas, cabalgatas y observar ballenas en el océano pacífico. Entre las principales actividades se encuentran:',
        images: imgsChile,
      },
      tips: [
        'En muchos lugares se acepta el pago con dólares americanos, pero es recomendable llevar la moneda local ( Peso Chileno CLP) para obtener mejores precios',
        'Se recomienda llevar repelente de insectos y protector solar',
        'Lleva una cámara de video o foto (para capturar los maravillosos paisajes)',
        'Se recomienda utilizar servicios de transporte turístico, aplicaciones como Uber o rentar un automóvil',
      ],
    },
    ecuador: {
      informationBasic: {
        indicativePhone: '+593',
        capital: 'Quito',
        currency: 'Dólar (USD)',
        language: 'Español',
        timezone: 'GMT-5',
        voltage: '120V y 70Hz',
        population: '17.8 millones',
      },
      aboutCountry: {
        description:
          'Descubre el fascinante país de Ecuador. Un lugar único, situado en el corazón de las montañas. Explora la fauna autóctona del Parque Nacional de Cajas y admira más de 200 lagunas rodeadas de páramos y picos montañosos. Dirígete a la Reserva de Producción Faunística del Chimborazo, el volcán más alto de Ecuador, y disfruta de sus vistas panorámicas de la majestuosa cordillera de los Andes. Uno de los destinos turísticos más emblemáticos del mundo, te envolverá por completo. La maravilla ecológica de las Islas Galápagos te permitirá disfrutar de sus playas de arena blanca, formaciones rocosas volcánicas y aguas cristalinas en este paraíso natural. Podrás acercarte a fragatas, tortugas gigantes, leones marinos e incluso iguanas marinas. Ecuador combina aventura, cultura y paisajes naturales, una auténtica joya en Latinoamérica.',
        images: imgsEcuador,
      },
      entryRequirements: {
        requirements: {
          Pasaporte:
            'Pasaporte vigente. Cédula o documento nacional de identificación para ciudadanos sudamericanos',
          Otros:
            'Se recomienda la vacunación contra la fiebre amarilla para todos los viajeros (tanto nacionales como internacionales)',
          Visa: 'No obligatoria para algunas nacionalidades, pero se recomienda verificar la situación específica según su país de origen',
        },
        linkMoreInformation:
          'https://www.ministeriodegobierno.gob.ec/requisitos-para-ingresar-a-ecuador/#:~:text=Las%20personas%20extranjeras%20pueden%20ingresar,punto%20de%20control%20migratorio%20oficia',
      },
      mainActivities: {
        description:
          'Ecuador está dividido en tres regiones naturales únicas: las tierras bajas costeras, las tierras altas andinas y la selva amazónica. Las tres regiones están unidas por la columna vertebral del país, la majestuosa cordillera de los Andes (que se extiende por todo el país).  Las remotas islas Galápagos se encuentran a unos 1.000 km de la costa continental. Entre las actividades más destacadas de Ecuador se encuentran:',
        images: imgsEcuador,
      },
      tips: [
        'El clima varía desde tropical hasta templado, por lo que recomendamos empacar ropa cómoda adecuada para el clima. El éxito radica en las capas',
        'En cuanto al transporte, se recomienda utilizar aplicaciones de transporte como Uber o contratar un servicio de transporte turístico. Se aconseja precaución al usar taxis no oficiales',
        'Aunque las tarjetas de crédito son aceptadas en la mayoría de las ciudades, se recomienda llevar efectivo (dólares estadounidenses) para obtener mejores precios',
        'Se recomienda el uso de protector solar y repelente',
        'Al viajar a Quito, es posible que experimentes el mal de altura debido a la elevada altitud de la ciudad. Sin embargo, tenga la seguridad de que su cuerpo se aclimatará rápidamente, permitiéndole disfrutar cómodamente de todas las maravillas que esta hermosa ciudad tiene para ofrecer',
      ],
    },
    mexico: {
      informationBasic: {
        indicativePhone: '+52',
        capital: 'Ciudad de México (CDMX)',
        currency: 'Peso (MXN)',
        language: 'Español',
        timezone: 'GMT-6 a GMT-8 según la zona',
        voltage: '110V tipo A y B',
        population: '126.7 millones',
      },
      aboutCountry: {
        description:
          'Sumérgete en la riqueza de México, un país reconocido por su valioso patrimonio histórico y diversidad natural. Ubicado en la región sur de América del Norte, el país se caracteriza no solo por ser la cuna de civilizaciones ancestrales como los aztecas y los mayas, sino por ser una fusión extraordinaria de cultura y naturaleza. Desde enormes desiertos hasta selvas tropicales, cada rincón de este territorio cuenta con una gran historia.',
        images: imgsMexico,
      },
      entryRequirements: {
        requirements: {
          Pasaporte: 'Pasaporte vigente',
          Visa: 'No es obligatoria para algunas de las nacionalidades, pero se recomienda verificar la situación específica según el país de origen',
        },
        linkMoreInformation:
          'https://www.inm.gob.mx/gobmx/word/index.php/paises-requieren-visa-para-mexico/',
      },
      mainActivities: {
        description:
          'México se divide en seis regiones geográficas: Norte, Centro, Occidente, Golfo, Península de Yucatán y Sur. Cada región de este fascinante país cuenta con características y lugares únicos que prometen una experiencia inolvidable. Desde los desérticos áridos del Norte, hasta las selvas tropicales del Sur, el país ofrece una variedad de actividades emocionantes para todo tipo de viajeros. Entre las más destacadas se encuentran:',
        images: imgsMexico,
      },
      tips: [
        'El clima varía desde tropical hasta templado, se recomienda ropa cómoda y adecuada según el clima',
        'En cuanto a transporte se recomiendan aplicaciones de transporte como Uber o contratar servicios de transporte turístico, se aconseja precaución al utilizar taxis no oficiales',
        'A pesar de que las tarjetas de crédito son aceptadas en la mayoría de ciudades, y muchos lugares aceptan el pago en dólares americanos, es recomendable llevar efectivo de la moneda local ( Peso Méxicano, MXN) para obtener mejores precios',
        'Se recomienda el uso de protector solar y repelente de insectos, en especial en regiones como la Riviera Maya',
      ],
    },
    argentina: {
      informationBasic: {
        indicativePhone: '+54',
        capital: 'Buenos Aires',
        currency: 'Peso (ARS)',
        language: 'Español',
        timezone: 'GMT-3',
        voltage: '220V tipo I y C',
        population: '45.4 millones',
      },
      aboutCountry: {
        description:
          'Desde los aventureros hasta los amantes del vino y el futbol, Argentina es un país que ofrece algo para todos. Ubicado en el extremo sur de Sudamérica, la tierra de encantadores contrastes se destaca por su gran variedad de lugares. Su capital te ofrece una propuesta gastronómica exquisita y una animada vida nocturna llena de música y tango. Dirígete a las majestuosas cataratas de Iguazú para observar una de las siete maravillas naturales más importantes del mundo y disfruta de un buen vino en los hermosos viñedos de Mendoza.',
        images: imgsArgentina,
      },
      entryRequirements: {
        requirements: {
          Pasaporte:
            'Pasaporte vigente. Viajeros con nacionalidades de Brasil, Bolivia, Uruguay, Paraguay, Chile, Perú, Venezuela, Ecuador y Colombia no requieren pasaporte, pueden ingresar con el documento de identidad de cada uno de estos países',
          Visa: 'No es obligatoria para algunas de las nacionalidades, pero se recomienda verificar la situación específica según el país de origen',
        },
        linkMoreInformation:
          'https://www.migraciones.gov.ar/accesible/indexdnm.php?visas#U',
      },
      mainActivities: {
        description:
          'Explora las diversas regiones geográficas de Argentina. En el norte, podrás embarcar en una aventura inolvidable a través de los paisajes montañosos, mientras que el noroeste combina imponentes serranías con inhóspitos y serenos desiertos, ideales para romper con la rutina de la ciudad. El litoral se destaca por su exuberante selva tropical y hacia el sur (en la región cuyana), encontrarás paisajes pintorescos de viñedos y la experiencia perfecta para los aficionados al vino. Maravíllate con la desbordante belleza de la Patagonia y descubre la magia de este país Sudamericano. Para comenzar tu aventura, te recomendamos las siguientes experiencias:',
        images: imgsArgentina,
      },
      tips: [
        'El clima varía desde cálido en el norte hasta frío en el sur del país, por lo que se recomienda llevar ropa adecuada',
        'En zonas de mayor altitud como Mendoza se puede experimentar el mal de altura. Es recomendable tomar precauciones y permitir el tiempo necesario para aclimatarse',
        'Se recomienda llevar repelente de insectos y protector solar, en especial en  áreas como la selva de Iguazú',
        'Se recomienda llevar dólares americanos o tarjetas de crédito y realizar el cambio a la moneda local (Pesó argentino ARS) para obtener mejores tasas',
        'En cuanto a transporte, se recomienda utilizar aplicaciones de transporte como Uber, rentar un vehículo y en caso de largas distancias tomar vuelos internos',
      ],
    },
    'costa-rica': {
      informationBasic: {
        indicativePhone: '+506',
        capital: 'San José',
        currency: 'Colón (CRC)',
        language: 'Español',
        timezone: 'GMT-6',
        voltage: '110V',
        population: '5.2 millones',
      },
      aboutCountry: {
        description:
          'Costa Rica, la tierra de arrecifes de coral, selvas tropicales y bosques frondosos que se ubica en Centroamérica. Aprovecha su clima tropical y participa en actividades de aventura como trekking y canopy en el bosque nuboso de Monteverde. Manuel Antonio se convierte en el paraíso costero perfecto para aquellos buscando días de playa y una enorme variedad de fauna y flora silvestre. No te pierdas la oportunidad de visitar la capital, San Jose, con sus barrios coloridos y su  majestuoso Teatro Nacional.',
        images: imgsCostaRica,
      },
      entryRequirements: {
        requirements: {
          Pasaporte: 'Pasaporte vigente',
          'Tiquete de salida':
            'Boleto o pasaje de regreso a país de origen o de continuación de viaje',
          Visa: '(No es obligatoria para todas las nacionalidades). En el caso de las nacionalidades para las cuales es obligatoria, deben ser solicitadas ante la embajada de Costa Rica y se entregará por un plazo de 60 días a partir de su otorgamiento y para un único ingreso al país',
          Inmigración:
            'En algunos casos, el oficial de inmigración puede solicitar que demuestres solvencia económica para tu estancia en el país',
          Otros:
            'Todos los viajeros procedentes de los siguientes países deben poseer un certificado de vacunación contra la fiebre amarilla antes de ingresar a Costa Rica: Angola, Benín, Burkina Faso, Camerún, República Democrática del Congo, Gabón, Gambia, Guinea, Liberia, Nigeria, Sierra Leona, Sudán, Bolivia, Venezuela, Brasil, Perú, Colombia, Ecuador y la República de Guyana.',
        },
        linkMoreInformation: 'https://www.migracion.go.cr/Paginas/Visas.aspx',
      },
      mainActivities: {
        description:
          'Costa Rica se encuentra dividido en siete provincias. En el Valle Central se ubica su capital, la provincia de San José, Alajuela, Heredia y Cartago. En el Caribe, la de Limón, y en el Pacífico, las de Guanacaste y Puntarenas. El país es el epicentro de las actividades de aventura, pero se ha comenzado a posicionar como destino turístico con opciones para todo tipo de viajeros:',
        images: imgsCostaRica,
      },
      tips: [
        'Los costarricenses son conocidos por su amabilidad y hospitalidad.  “La pura vida” es un lema costarricense que representa un estilo de vida relajado y positivo',
        'En muchos lugares se acepta el pago con dólares americanos, pero es recomendable llevar la moneda local (Colón costarricense CRC) para obtener mejores precios',
        'Se recomienda llevar repelente de insectos y protector solar',
        'El transporte público puede ser limitado, por lo que se recomienda utilizar servicios de transporte turístico o rentar un automóvil',
      ],
    },
    colombia: {
      informationBasic: {
        indicativePhone: '+57',
        capital: 'Bogotá',
        currency: 'Peso (COP)',
        language: 'Español',
        timezone: 'GMT-5',
        voltage: '110V',
        population: '51.5 millones',
      },
      aboutCountry: {
        description:
          'Colombia, un país de contrastes famoso por su increíble diversidad, café, y la pureza de sus esmeraldas. Ubicado en América del Sur, es un territorio que cuenta con costas caribeñas tanto en el Océano Pacífico como en el Mar Caribe y disfruta de una variedad de climas debido a su geografía. Desde los Andes hasta la exuberante selva Amazónica, el país posee es el lugar perfecto para visitar durante cualquier época del año. Visita el Museo del Oro en Bogotá, recorre el Valle del Cocora y explora la arquitectura colonial de la joya del caribe, Cartagena. Colombia te sorprenderá no solo con sus paisajes, sino también con su rica cultura y la calidez de su gente',
        images: imgsColombia,
      },
      entryRequirements: {
        requirements: {
          Pasaporte: 'Pasaporte con vigencia no menor a 90 días',
          'Exit Ticket':
            'Boleto o pasaje de regreso a país de origen o de continuación de viaje',
          Visa: 'No se requiere para todas las nacionalidades. Para las que sí, es necesario aplicar a una visa en la embajada correspondiente',
        },
        linkMoreInformation:
          'https://colombia.travel/en/practical-information/visas-and-embassies',
      },
      mainActivities: {
        description:
          'Colombia se divide en seis grandes regiones;  la región Caribe, Andina, Orinoquía, Amazónica, Pacífica e Insular. Cada una cuenta con diversas altitudes y climas y paisajes únicos para disfrutar de múltiples actividades. Entre las más destacadas se encuentran:',
        images: imgsColombia,
      },
      tips: [
        'Se recomienda llevar repelente de insectos, protector solar y vestimenta tanto abrigada como fresca',
        'Muchos lugares aceptan pagos con dólares americanos o euros; sin embargo, es recomendable utilizar la moneda local (Pesos Colombianos COP)',
        'Es común dejar propina en restaurantes y servicios, generalmente alrededor del 10% del total de la cuenta',
        'En ciudades principales, como Bogotá y Medellín, se recomienda utilizar aplicaciones de transporte como Uber, alquilar un vehículo y en caso de largas distancias, tomar vuelos internos',
      ],
    },
  },
  fr: {
    peru: {
      informationBasic: {
        indicativePhone: '+51',
        capital: 'Lima',
        currency: 'Sol (PEN)',
        language: 'Espagnol',
        timezone: 'GMT-5',
        voltage: '220V',
        population: '33,7 millions',
      },
      aboutCountry: {
        description:
          "Explorez les merveilles du Pérou, un pays multiculturel plein de richesse naturelle et historique, situé au cœur de l'ouest de l'Amérique du Sud. Un vrai festin pour les sens. Admirez ses côtes le long de l'océan Pacifique et promenez-vous dans les imposantes montagnes des Andes. Explorez des jungles mystérieuses dans l'Amazonie et dirigez-vous vers l'atmosphère animée de Lima pour un véritable festin gastronomique inoubliable. Ne manquez pas l'occasion d'explorer les énigmatiques lignes et géoglyphes de Nazca gravés dans les sables du désert, un mystère qui continue de déconcerter les scientifiques et les historiens du monde entier. Les villes variées du Pérou, ses sites archéologiques, sa cuisine et sa biodiversité vous laisseront sans voix !",
        images: imgsPeru,
      },
      entryRequirements: {
        requirements: {
          Passport: 'Passeport valide',
          'Exit Ticket':
            "Billet ou bon de sortie pour le pays d'origine ou pour un voyage ultérieur",
          Visa: "Non requis pour la plupart des nationalités, mais nous recommandons de vérifier la situation spécifique en fonction de votre pays d'origine",
        },
        linkMoreInformation:
          'https://www.migraciones.gob.pe/wp-content/uploads/2018/03/ley1350_migraciones_reglamento.pdf',
      },
      mainActivities: {
        description:
          "Le Pérou est divisé en plusieurs régions naturelles : la côte, les hautes terres et la jungle, permettant une variété d'activités. Parmi les plus remarquables :",
        images: imgsPeru,
      },
      tips: [
        "Le climat varie de chaud à froid selon l'altitude et la saison. Nous recommandons de porter des vêtements en couches pour s'adapter aux différentes conditions météorologiques.",
        "Dans les zones de haute altitude, comme Cuzco, il est possible de ressentir le mal de l'altitude. Si possible, nous conseillons de prendre les précautions nécessaires et de prévoir du temps pour s'acclimater (le thé de coca est un remède local qui peut également aider à soulager les symptômes du mal de l'altitude).",
        'Les dollars américains et les cartes de crédit sont acceptés dans la plupart des endroits, mais nous recommandons tout de même de porter la monnaie locale (Sol (PEN)) pour obtenir de meilleurs taux.',
        'La cuisine péruvienne est célèbre, et goûter des plats tels que le ceviche et le lomo saltado est une partie essentielle de votre voyage.',
        "Nous recommandons fortement l'utilisation de crème solaire et de répulsif contre les insectes, en particulier dans les régions tropicales comme la forêt amazonienne.",
      ],
    },
    chile: {
      informationBasic: {
        indicativePhone: '+56',
        capital: 'Santiago du Chili',
        currency: 'Peso (CLP)',
        language: 'Espagnol',
        timezone: 'GMT-3',
        voltage: '220V',
        population: '17,2 millions',
      },
      aboutCountry: {
        description:
          "Partez à la découverte du Chili, un pays qui s'étend des vagues de l'océan Pacifique aux sommets vertigineux des Andes. Visitez la capitale éclectique de Santiago, animée par des quartiers graffités et des galeries d'art. Dirigez-vous vers le sud, un sanctuaire de la faune où les condors, les flamants roses et les manchots de Magellan vivent en liberté, et parcourez le désert d'Atacama aux allures martiennes. Cette terre de merveilles naturelles vous promet une aventure inoubliable.",
        images: imgsChile,
      },
      entryRequirements: {
        requirements: {
          Passport: 'Passeport valide',
          'Exit Ticket':
            "Billet ou bon de sortie pour le pays d'origine ou pour un voyage ultérieur",
          Others:
            "Dans certains cas, l'officier d'immigration peut demander de prouver votre solvabilité économique pour votre séjour dans le pays",
          Visa: "Si vous êtes citoyen d'Amérique du Sud, de l'Union européenne, des États-Unis, du Canada ou de l'Australie, vous n'avez pas besoin de visa pour des fins touristiques. Cependant, les citoyens de certains pays doivent payer une taxe de réciprocité en espèces à leur arrivée à l'aéroport chilien",
        },
        linkMoreInformation:
          'https://www.consulado.gob.cl/quiero-viajar-a-chile',
      },
      mainActivities: {
        description:
          "Le Chili est divisé en quatre régions ; le Nord, le Centre, le Sud et l'Austral. Les climats secs caractérisent le nord, où vous pouvez trouver l'immense désert d'Atacama et les célèbres Piedras Rojas. Le centre est la région la plus peuplée du pays, abritant la belle ville de Santiago et les maisons colorées de Valparaíso. Dans le sud, vous pouvez découvrir le magique parc national de la Patagonie, l'un des meilleurs endroits pour le tourisme d'aventure. La région Australe comprend Punta Arenas et le parc du Détroit, où vous pouvez faire de la randonnée, de l'équitation et observer les baleines dans l'océan Pacifique. Parmi les principales activités à faire au Chili, on trouve :",
        images: imgsChile,
      },
      tips: [
        'Dans de nombreux endroits, le paiement en dollars américains est accepté, mais nous suggérons de porter la monnaie locale (peso chilien CLP) pour obtenir de meilleurs prix.',
        "Nous recommandons d'apporter un répulsif contre les insectes et de la crème solaire.",
        'Emportez une caméra vidéo ou photo pour capturer les merveilleux paysages du pays.',
        "En ce qui concerne le transport, nous recommandons fortement d'utiliser des services de covoiturage comme Uber ou des services de transport touristique. Pour les voyages longue distance, privilégiez les vols intérieurs.",
      ],
    },
    ecuador: {
      informationBasic: {
        indicativePhone: '+593',
        capital: 'Quito',
        currency: 'Dollar américain (USD)',
        language: 'Espagnol',
        timezone: 'GMT-5',
        voltage: '120V & 70Hz',
        population: '17,8 millions',
      },
      aboutCountry: {
        description:
          "Découvrez le pays fascinant de l'Équateur. Un endroit unique situé au cœur des montagnes. Explorez la faune indigène du parc national de Cajas et admirez plus de 200 lagons entourés de páramos et de sommets montagneux. Dirigez-vous vers la réserve de production de faune du Chimborazo, le plus haut volcan d'Équateur et profitez de ses vues panoramiques, offrant une vue impressionnante sur la chaîne de montagnes des Andes. Ensuite, il y a l'une des destinations de voyage les plus emblématiques au monde, la merveille écologique des îles Galápagos. Profitez de ses plages de sable blanc, de ses formations rocheuses volcaniques et de ses eaux azurées dans ce paradis naturel. Vous pourrez vous rapprocher des frégates, des tortues géantes, des lions de mer et même des iguanes marins. L'Équateur combine aventure, culture et paysages naturels, un véritable joyau de l'Amérique latine.",
        images: imgsEcuador,
      },
      entryRequirements: {
        requirements: {
          Passport:
            "Passeport valide. Les citoyens sud-américains peuvent entrer avec une carte d'identité ou un document d'identification national.",
          Visa: "Toutes les personnes qui voyagent en Équateur ne nécessitent pas un visa touristique ; cela dépendra de votre nationalité. Nous vous recommandons vivement de vérifier la situation spécifique en fonction de votre pays d'origine.",
          Others:
            'La vaccination contre la fièvre jaune est recommandée pour tous les voyageurs (nationaux et internationaux).',
        },
        linkMoreInformation:
          'https://www.ministeriodegobierno.gob.ec/requisitos-para-ingresar-a-ecuador/#:~:text=Las%20personas%20extranjeras%20pueden%20ingresar,punto%20de%20control%20migratorio%20oficial',
      },
      mainActivities: {
        description:
          "L'Équateur est divisé en trois régions naturelles uniques ; les basses terres côtières, les hautes terres andines et la forêt amazonienne. Les trois régions sont unies par l'épine dorsale du pays, la majestueuse chaîne de montagnes des Andes (qui s'étend sur tout le pays). Alors que les îles éloignées des Galápagos sont situées à environ 1000 km de la côte continentale du pays. Parmi les activités les plus remarquables en Équateur, on trouve :",
        images: imgsEcuador,
      },
      tips: [
        "L'Équateur a un climat tempéré en raison de sa position sur l'équateur. Les températures peuvent être un peu plus chaudes et humides sur la côte et dans la jungle. Nous recommandons de porter des vêtements légers et confortables.",
        "Pour les randonnées en haute montagne ou l'escalade de volcans, nous vous recommandons de porter des vêtements en couches pour pouvoir vous adapter à différents climats.",
        "L'Équateur utilise le dollar américain comme monnaie, ce qui facilite les transactions pour les voyageurs étrangers. N'oubliez pas d'emporter de petites coupures, car les billets de grande valeur peuvent ne pas être acceptés dans les petits magasins ou par les vendeurs de rue.",
        "Nous vous recommandons de goûter la délicieuse cuisine équatorienne, notamment le ceviche, l'encebollado et les empanadas.",
        'Utilisez un écran solaire et un insectifuge, en particulier dans les régions tropicales comme la forêt amazonienne ou les îles Galápagos.',
      ],
    },
    mexico: {
      informationBasic: {
        indicativePhone: '+52',
        capital: 'Ciudad de México (CDMX)',
        currency: 'Peso (MXN)',
        language: 'Espagnol',
        timezone: 'GMT-6 à GMT-8 selon la zone',
        voltage: '110V type A et B',
        population: '126,7 millions',
      },
      aboutCountry: {
        description:
          "Plongez-vous dans la richesse du Mexique, un pays reconnu pour son précieux patrimoine historique et sa diversité naturelle. Situé dans la région sud de l'Amérique du Nord, le pays se caractérise non seulement par être le berceau de civilisations ancestrales telles que les Aztèques et les Mayas, mais aussi par être une fusion extraordinaire de culture et de nature. Des vastes déserts aux jungles tropicales, chaque coin de ce territoire raconte une grande histoire.",
        images: imgsMexico,
      },
      entryRequirements: {
        requirements: {
          Pasaporte: 'Passeport valide',
          Visa: "Non obligatoire pour certaines nationalités, mais il est recommandé de vérifier la situation spécifique selon le pays d'origine",
        },
        linkMoreInformation:
          'https://www.inm.gob.mx/gobmx/word/index.php/paises-requieren-visa-para-mexico/',
      },
      mainActivities: {
        description:
          "Le Mexique est divisé en six régions géographiques : le Nord, le Centre, l'Ouest, le Golfe, la Péninsule du Yucatán et le Sud. Chaque région de ce pays fascinant possède des caractéristiques et des lieux uniques qui promettent une expérience inoubliable. Des déserts arides du Nord aux jungles tropicales du Sud, le pays offre une variété d'activités excitantes pour tous les types de voyageurs. Parmi les plus remarquables, on trouve :",
        images: imgsMexico,
      },
      tips: [
        'Le climat varie de tropical à tempéré, il est recommandé de porter des vêtements confortables et adaptés au climat.',
        "En termes de transport, il est recommandé d'utiliser des applications de transport comme Uber ou de louer des services de transport touristique. Il est conseillé d'être prudent lors de l'utilisation de taxis non officiels.",
        "Bien que les cartes de crédit soient acceptées dans la plupart des villes et que de nombreux endroits acceptent les paiements en dollars américains, il est recommandé de porter de l'argent liquide en monnaie locale (Peso Mexicain, MXN) pour obtenir de meilleurs prix.",
        "Il est recommandé d'utiliser un écran solaire et un répulsif contre les insectes, en particulier dans des régions comme la Riviera Maya.",
      ],
    },
    colombia: {
      informationBasic: {
        indicativePhone: '+57',
        capital: 'Bogotá',
        currency: 'Peso (COP)',
        language: 'Espagnol',
        timezone: 'GMT-5',
        voltage: '110V',
        population: '51,5 millions',
      },
      aboutCountry: {
        description:
          "La Colombie, un pays de contrastes célèbre pour sa diversité incroyable, son café et la pureté de ses émeraudes. Situé en Amérique du Sud, c'est un territoire avec des côtes caribéennes à la fois sur l'océan Pacifique et la mer des Caraïbes et bénéficie d'une variété de climats en raison de sa géographie. Des Andes à la luxuriante forêt amazonienne, le pays est parfait à visiter en toute saison. Visitez le Musée de l'Or à Bogotá, parcourez la Vallée de Cocora et explorez l'architecture coloniale de la perle des Caraïbes, Carthagène. La Colombie vous étonnera non seulement par ses paysages, mais aussi par sa riche culture et la chaleur de ses habitants.",
        images: imgsColombia,
      },
      entryRequirements: {
        requirements: {
          Pasaporte:
            "Passeport valide avec une durée de validité d'au moins 90 jours",
          'Exit Ticket':
            "Billet ou passage de retour au pays d'origine ou de continuation de voyage",
          Visa: "Non requis pour toutes les nationalités. Pour celles qui le nécessitent, il est nécessaire de demander un visa à l'ambassade correspondante",
        },
        linkMoreInformation:
          'https://colombia.travel/en/practical-information/visas-and-embassies',
      },
      mainActivities: {
        description:
          'La Colombie est divisée en six grandes régions : la région Caraïbe, Andine, Orinoquía, Amazonienne, Pacifique et Insulaire. Chacune possède diverses altitudes, climats et paysages uniques pour profiter de multiples activités. Parmi les plus remarquables, on trouve :',
        images: imgsColombia,
      },
      tips: [
        'Il est recommandé de porter un répulsif contre les insectes, un écran solaire et des vêtements à la fois chauds et légers.',
        "De nombreux endroits acceptent les paiements en dollars américains ou en euros ; cependant, il est recommandé d'utiliser la monnaie locale (Pesos Colombiens, COP).",
        'Il est courant de laisser un pourboire dans les restaurants et les services, généralement environ 10% du total de la note.',
        "Dans les grandes villes comme Bogotá et Medellín, il est recommandé d'utiliser des applications de transport comme Uber, de louer un véhicule et, en cas de longues distances, de prendre des vols internes.",
      ],
    },
  },
};
