export default {
  elements: [
    // Hidrógeno (No metal - Grupo 1)
    {
      symbol: "H",
      name: "Hidrógeno",
      atomicNumber: 1,
      category: "non_metal",
      subcategory: "diatomic_nonmetal",
      color: "#A0FFA0", // Verde claro para no metales
      group: 1,
      period: 1,
      block: "s",
      state: "gas",
      electronConfig: "1s¹",
      electronegativity: 2.20,
      atomicWeight: 1.008,
      discoveryYear: 1766,
      description: "Elemento más abundante en el universo. No metal reactivo e inflamable.",
      uses: ["Combustible limpio", "Refinerías de petróleo", "Hidrogenación de alimentos"],
      hazards: "Altamente inflamable",
      density: "0.08988 g/L",
      isotopes: [
        { name: "Protio", neutrons: 0, abundance: "99.98%" },
        { name: "Deuterio", neutrons: 1 }
      ]
    },
    // Litio (Li)
    {
      symbol: "Li",
      name: "Litio",
      atomicNumber: 3,
      category: "metal",
      subcategory: "alkali_metal",
      color: "#FF9999", // Rosa claro para alcalinos
      group: 1,
      period: 2,
      block: "s",
      state: "solid",
      electronConfig: "[He] 2s¹",
      electronegativity: 0.98,
      atomicWeight: 6.94,
      discoveryYear: 1817,
      description: "Metal más ligero. Blandez y reactividad en agua.",
      uses: ["Baterías recargables", "Aleaciones aeronáuticas", "Medicina (trastorno bipolar)"],
      density: "0.534 g/cm³",
      meltingPoint: "180.5 °C",
      boilingPoint: "1330 °C",
      facts: [
        "No existe libre en la naturaleza",
        "Extraído de minerales como espodumena"
      ]
    },
    // Sodio (Na)
    {
      symbol: "Na",
      name: "Sodio",
      atomicNumber: 11,
      category: "metal",
      subcategory: "alkali_metal",
      color: "#FF9999", // Rosa claro
      group: 1,
      period: 3,
      block: "s",
      state: "solid",
      electronConfig: "[Ne] 3s¹",
      electronegativity: 0.93,
      atomicWeight: 22.99,
      discoveryYear: 1807,
      description: "Metal esencial para la vida. Reacciona violentamente con agua.",
      uses: ["Cloruro de sodio (sal común)", "Iluminación pública", "Fabricación de jabones"],
      density: "0.968 g/cm³",
      meltingPoint: "97.72 °C",
      boilingPoint: "883 °C",
      hazards: "Corrosivo en contacto con agua"
    },
    // Potasio (K)
    {
      symbol: "K",
      name: "Potasio",
      atomicNumber: 19,
      category: "metal",
      subcategory: "alkali_metal",
      color: "#FF9999", // Rosa claro
      group: 1,
      period: 4,
      block: "s",
      state: "solid",
      electronConfig: "[Ar] 4s¹",
      electronegativity: 0.82,
      atomicWeight: 39.10,
      discoveryYear: 1807,
      description: "Vital para funciones celulares. Reacciona explosivamente con agua.",
      uses: ["Fertilizantes (KNO₃)", "Suplementos dietéticos", "Pólvora negra"],
      density: "0.89 g/cm³",
      meltingPoint: "63.38 °C",
      isotopes: [
        { name: "K-39", abundance: "93.26%" },
        { name: "K-40", abundance: "0.01%", radioactive: true }
      ]
    },
    // Rubidio (Rb)
    {
      symbol: "Rb",
      name: "Rubidio",
      atomicNumber: 37,
      category: "metal",
      subcategory: "alkali_metal",
      color: "#FF9999", // Rosa claro
      group: 1,
      period: 5,
      block: "s",
      state: "solid",
      electronConfig: "[Kr] 5s¹",
      electronegativity: 0.82,
      atomicWeight: 85.47,
      discoveryYear: 1861,
      description: "Metal blando y radiactivo natural. Usado en relojes atómicos.",
      uses: ["Investigación cuántica", "Tecnología láser"],
      density: "1.532 g/cm³",
      meltingPoint: "39.31 °C",
      facts: [
        "Descubierto por espectroscopia (líneas rojas)",
        "Isótopo Rb-87 usado en datación geológica"
      ]
    },
    // Cesio (Cs)
    {
      symbol: "Cs",
      name: "Cesio",
      atomicNumber: 55,
      category: "metal",
      subcategory: "alkali_metal",
      color: "#FF9999", // Rosa claro
      group: 1,
      period: 6,
      block: "s",
      state: "solid",
      electronConfig: "[Xe] 6s¹",
      electronegativity: 0.79,
      atomicWeight: 132.91,
      discoveryYear: 1860,
      description: "Metal líquido a temperatura ambiente. Extremadamente reactivo.",
      uses: ["Relojes atómicos (estándar internacional de tiempo)", "Propulsores iónicos"],
      density: "1.93 g/cm³",
      meltingPoint: "28.5 °C",
      hazards: "Explosivo en contacto con agua"
    },
    // Francio (Fr)
    {
      symbol: "Fr",
      name: "Francio",
      atomicNumber: 87,
      category: "metal",
      subcategory: "alkali_metal",
      color: "#FF9999", // Rosa claro
      group: 1,
      period: 7,
      block: "s",
      state: "solid",
      electronConfig: "[Rn] 7s¹",
      electronegativity: 0.7,
      atomicWeight: 223,
      discoveryYear: 1939,
      description: "Metal más inestable y raro. Radiactivo con vida media corta.",
      uses: ["Investigación científica"],
      density: "~2.48 g/cm³ (estimado)",
      meltingPoint: "27 °C (estimado)",
      hazards: "Altamente radiactivo (emisión alfa)",
      facts: [
        "Solo existen microgramos en la Tierra",
        "Descubierto por Marguerite Perey"
      ]
    },
    // Berilio (Be)
    {
      symbol: "Be",
      name: "Berilio",
      atomicNumber: 4,
      category: "metal",
      subcategory: "alkaline_earth_metal",
      color: "#FF6666", // Rosa intenso para alcalinotérreos
      group: 2,
      period: 2,
      block: "s",
      state: "solid",
      electronConfig: "[He] 2s²",
      electronegativity: 1.57,
      atomicWeight: 9.012,
      discoveryYear: 1798,
      description: "Metal tóxico pero útil en aleaciones ligeras y resistentes.",
      uses: [
        "Ventanas de radiación (rayos X)",
        "Aleaciones aerospaciales",
        "Componentes de satélites"
      ],
      hazards: "Carcinógeno por inhalación",
      density: "1.85 g/cm³",
      meltingPoint: "1287 °C",
      boilingPoint: "2469 °C",
      isotopes: [
        { name: "Be-9", abundance: "100%" }
      ]
    },

    // Magnesio (Mg)
    {
      symbol: "Mg",
      name: "Magnesio",
      atomicNumber: 12,
      category: "metal",
      subcategory: "alkaline_earth_metal",
      color: "#FF6666", // Rosa intenso
      group: 2,
      period: 3,
      block: "s",
      state: "solid",
      electronConfig: "[Ne] 3s²",
      electronegativity: 1.31,
      atomicWeight: 24.305,
      discoveryYear: 1755,
      description: "Metal esencial para la vida. Ligero y reactivo con ácidos.",
      uses: [
        "Aleaciones para autos y aviones",
        "Suplementos nutricionales",
        "Flash fotográfico"
      ],
      density: "1.738 g/cm³",
      meltingPoint: "650 °C",
      boilingPoint: "1090 °C",
      facts: [
        "Componente clave de la clorofila",
        "Se extrae del agua de mar (MgCl₂)"
      ]
    },

    // Calcio (Ca)
    {
      symbol: "Ca",
      name: "Calcio",
      atomicNumber: 20,
      category: "metal",
      subcategory: "alkaline_earth_metal",
      color: "#FF6666", // Rosa intenso
      group: 2,
      period: 4,
      block: "s",
      state: "solid",
      electronConfig: "[Ar] 4s²",
      electronegativity: 1.00,
      atomicWeight: 40.078,
      discoveryYear: 1808,
      description: "Abundante en la corteza terrestre. Vital para huesos y dientes.",
      uses: [
        "Suplementos dietéticos",
        "Producción de cemento",
        "Regulador de pH en alimentos"
      ],
      density: "1.55 g/cm³",
      meltingPoint: "842 °C",
      boilingPoint: "1484 °C",
      isotopes: [
        { name: "Ca-40", abundance: "97%" }
      ]
    },

    // Estroncio (Sr)
    {
      symbol: "Sr",
      name: "Estroncio",
      atomicNumber: 38,
      category: "metal",
      subcategory: "alkaline_earth_metal",
      color: "#FF6666", // Rosa intenso
      group: 2,
      period: 5,
      block: "s",
      state: "solid",
      electronConfig: "[Kr] 5s²",
      electronegativity: 0.95,
      atomicWeight: 87.62,
      discoveryYear: 1790,
      description: "Metal que emite color rojo brillante al quemarse.",
      uses: [
        "Pigmentos para fuegos artificiales",
        "Imágenes médicas (Sr-89 para cáncer óseo)"
      ],
      density: "2.64 g/cm³",
      meltingPoint: "777 °C",
      boilingPoint: "1382 °C",
      hazards: "Radioisótopos pueden ser peligrosos"
    },

    // Bario (Ba)
    {
      symbol: "Ba",
      name: "Bario",
      atomicNumber: 56,
      category: "metal",
      subcategory: "alkaline_earth_metal",
      color: "#FF6666", // Rosa intenso
      group: 2,
      period: 6,
      block: "s",
      state: "solid",
      electronConfig: "[Xe] 6s²",
      electronegativity: 0.89,
      atomicWeight: 137.33,
      discoveryYear: 1808,
      description: "Metal pesado usado en contrastes radiológicos.",
      uses: [
        "Sulfato de bario (radiografías digestivas)",
        "Vidrios de alta densidad"
      ],
      density: "3.51 g/cm³",
      meltingPoint: "727 °C",
      boilingPoint: "1845 °C",
      hazards: "Compuestos solubles son tóxicos"
    },

    // Radio (Ra)
    {
      symbol: "Ra",
      name: "Radio",
      atomicNumber: 88,
      category: "metal",
      subcategory: "alkaline_earth_metal",
      color: "#FF6666", // Rosa intenso
      group: 2,
      period: 7,
      block: "s",
      state: "solid",
      electronConfig: "[Rn] 7s²",
      electronegativity: 0.9,
      atomicWeight: 226,
      discoveryYear: 1898,
      description: "Metal radiactivo descubierto por Marie Curie. Brilla en la oscuridad.",
      uses: [
        "Históricamente en pinturas luminiscentes (hoy descontinuado)",
        "Investigación nuclear"
      ],
      density: "5.5 g/cm³",
      meltingPoint: "700 °C",
      hazards: "Altamente radiactivo (emite partículas alfa y gamma)",
      facts: [
        "Se encuentra en minerales de uranio",
        "Vida media del Ra-226: 1600 años"
      ]
    },
    // Escandio (Sc)
{
  symbol: "Sc",
  name: "Escandio",
  atomicNumber: 21,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave (transición)
  group: 3,
  period: 4,
  block: "d",
  state: "solid",
  electronConfig: "[Ar] 3d¹ 4s²",
  electronegativity: 1.36,
  atomicWeight: 44.956,
  discoveryYear: 1879,
  description: "Metal blando y ligero, similar al aluminio. Raro en la naturaleza.",
  uses: [
    "Aleaciones para aeronáutica",
    "Lámparas de vapor de mercurio"
  ],
  density: "2.99 g/cm³",
  meltingPoint: "1541 °C",
  hazards: "Polvo inflamable",
  facts: [
    "Se extrae de minerales de wolframio y uranio",
    "No tiene rol biológico conocido"
  ]
},

// Itrio (Y)
{
  symbol: "Y",
  name: "Itrio",
  atomicNumber: 39,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave (transición)
  group: 3,
  period: 5,
  block: "d",
  state: "solid",
  electronConfig: "[Kr] 4d¹ 5s²",
  electronegativity: 1.22,
  atomicWeight: 88.906,
  discoveryYear: 1794,
  description: "Metal plateado, estable en aire. Usado en superconductores y LEDs.",
  uses: [
    "Fósforos rojos en pantallas CRT",
    "Aleaciones de aluminio y magnesio"
  ],
  density: "4.47 g/cm³",
  meltingPoint: "1526 °C",
  hazards: "Polvo metálico puede explotar",
  facts: [
    "Presente en lunares lunares (rocas traídas por Apollo)",
    "Isótopo Y-90 usado en radioterapia"
  ]
},

// Lantano (La)
{
  symbol: "",
  name: "57-71",
  atomicNumber: '',
  category: "",
  subcategory: "",
  color: "#a65580", 
  group: '',
  period: '',
  block: "",
  state: "",
  electronConfig: "",
  electronegativity: '',
  atomicWeight: '',
  discoveryYear: '',
  description: "",
  uses: [
    "",
    ""
  ],
  density: "",
  meltingPoint: "",
  hazards: "",
  facts: [
    "",
    ""
  ]
},

// Actinio (Ac)
{
  symbol: "",
  name: "89-103",
  atomicNumber: '',
  category: "",
  subcategory: "",
  color: "#ff3ae1", 
  group: '',
  period: '',
  block: "",
  state: "",
  electronConfig: "",
  electronegativity: '',
  atomicWeight: '',
  discoveryYear: '',
  description: "",
  uses: [
    "",
    ""
  ],
  density: "",
  meltingPoint: "",
  hazards: "",
  facts: [
    "",
    ""
  ]
},

// Titanio (Ti)
{
  symbol: "Ti",
  name: "Titanio",
  atomicNumber: 22,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave (transición)
  group: 4,
  period: 4,
  block: "d",
  state: "solid",
  electronConfig: "[Ar] 3d² 4s²",
  electronegativity: 1.54,
  atomicWeight: 47.867,
  discoveryYear: 1791,
  description: "Metal fuerte, ligero y resistente a la corrosión. Biocompatible.",
  uses: [
    "Industria aeroespacial (aviones, misiles)",
    "Implantes médicos (prótesis, tornillos óseos)",
    "Pigmento blanco (TiO₂ en pinturas)"
  ],
  density: "4.51 g/cm³",
  meltingPoint: "1668 °C",
  hazards: "Polvo puede ser inflamable",
  facts: [
    "Nombre inspirado en los Titanes de la mitología griega",
    "Más fuerte que el acero pero 45% más ligero"
  ]
},

// Circonio (Zr)
{
  symbol: "Zr",
  name: "Circonio",
  atomicNumber: 40,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave
  group: 4,
  period: 5,
  block: "d",
  state: "solid",
  electronConfig: "[Kr] 4d² 5s²",
  electronegativity: 1.33,
  atomicWeight: 91.224,
  discoveryYear: 1789,
  description: "Metal resistente a la corrosión, usado en reactores nucleares.",
  uses: [
    "Barras de combustible nuclear (recubrimiento Zr)",
    "Joyeria (simula diamantes con óxido de circonio)",
    "Instrumentos quirúrgicos"
  ],
  density: "6.52 g/cm³",
  meltingPoint: "1855 °C",
  hazards: "Polvo puede autoinflamarse en aire",
  facts: [
    "El mineral circón (ZrSiO₄) es más antiguo que la Tierra (4.4 mil millones de años)",
    "Transparente a neutrones (ideal para reactores)"
  ]
},

// Hafnio (Hf)
{
  symbol: "Hf",
  name: "Hafnio",
  atomicNumber: 72,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave
  group: 4,
  period: 6,
  block: "d",
  state: "solid",
  electronConfig: "[Xe] 4f¹⁴ 5d² 6s²",
  electronegativity: 1.3,
  atomicWeight: 178.49,
  discoveryYear: 1923,
  description: "Metal denso, resistente a la corrosión. Siempre asociado al circonio.",
  uses: [
    "Barras de control en reactores nucleares (absorbe neutrones)",
    "Microprocesadores (óxido de hafnio como aislante)"
  ],
  density: "13.31 g/cm³",
  meltingPoint: "2233 °C",
  hazards: "Bajo riesgo en estado sólido",
  facts: [
    "Nombre por 'Hafnia' (nombre latino de Copenhague)",
    "Difícil de separar del circonio (químicamente idénticos)"
  ]
},

// Rutherfordio (Rf)
{
  symbol: "Rf",
  name: "Rutherfordio",
  atomicNumber: 104,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave (aunque es sintético)
  group: 4,
  period: 7,
  block: "d",
  state: "synthetic",
  electronConfig: "[Rn] 5f¹⁴ 6d² 7s² (estimado)",
  electronegativity: "N/A",
  atomicWeight: 267,
  discoveryYear: 1969,
  description: "Elemento sintético altamente radiactivo. Vida media de minutos.",
  uses: [
    "Solo investigación científica"
  ],
  density: "N/A",
  meltingPoint: "N/A",
  hazards: "Radiactivo extremo",
  facts: [
    "Sintetizado bombardeando californio con carbono",
    "Nombre en honor a Ernest Rutherford"
  ]
},
// Vanadio (V)
{
  symbol: "V",
  name: "Vanadio",
  atomicNumber: 23,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave (transición)
  group: 5,
  period: 4,
  block: "d",
  state: "solid",
  electronConfig: "[Ar] 3d³ 4s²",
  electronegativity: 1.63,
  atomicWeight: 50.942,
  discoveryYear: 1801,
  description: "Metal dúctil, resistente a la corrosión. Forma compuestos coloridos.",
  uses: [
    "Aleaciones para aceros de alta resistencia (tools, chasis)",
    "Catalizador en producción de ácido sulfúrico",
    "Baterías de flujo redox (Vanadio redox)"
  ],
  density: "6.11 g/cm³",
  meltingPoint: "1910 °C",
  hazards: "Polvo tóxico si se inhala",
  facts: [
    "Nombre inspirado en Vanadis (diosa escandinava de la belleza)",
    "Compuestos de vanadio cambian de color según estado de oxidación"
  ]
},

// Niobio (Nb)
{
  symbol: "Nb",
  name: "Niobio",
  atomicNumber: 41,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave
  group: 5,
  period: 5,
  block: "d",
  state: "solid",
  electronConfig: "[Kr] 4d⁴ 5s¹",
  electronegativity: 1.6,
  atomicWeight: 92.906,
  discoveryYear: 1801,
  description: "Metal superconductor a bajas temperaturas. Resistente a ácidos.",
  uses: [
    "Aleaciones para superconductores (MRI, aceleradores de partículas)",
    "Joyeria (hipoalergénico, similar al tantalio)",
    "Industria aeroespacial"
  ],
  density: "8.57 g/cm³",
  meltingPoint: "2477 °C",
  hazards: "Baja toxicidad",
  facts: [
    "Nombrado por Niobe (hija de Tántalo en mitología griega)",
    "Siempre se encuentra junto al tantalio en la naturaleza"
  ]
},

// Tantalio (Ta)
{
  symbol: "Ta",
  name: "Tantalio",
  atomicNumber: 73,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave
  group: 5,
  period: 6,
  block: "d",
  state: "solid",
  electronConfig: "[Xe] 4f¹⁴ 5d³ 6s²",
  electronegativity: 1.5,
  atomicWeight: 180.948,
  discoveryYear: 1802,
  description: "Metal ultraresistente a la corrosión. Biocompatible y denso.",
  uses: [
    "Electrónica (condensadores para smartphones)",
    "Implantes médicos (no reactivo con tejidos humanos)",
    "Equipo químico (resistente a ácidos)"
  ],
  density: "16.69 g/cm³",
  meltingPoint: "3017 °C",
  hazards: "Polvo puede ser inflamable",
  facts: [
    "Nombre del mito de Tántalo (castigado a no alcanzar el agua)",
    "Mineral coltán (mezcla de columbita y tantalita) es clave para tecnología"
  ]
},

// Dubnio (Db)
{
  symbol: "Db",
  name: "Dubnio",
  atomicNumber: 105,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave (aunque es sintético)
  group: 5,
  period: 7,
  block: "d",
  state: "synthetic",
  electronConfig: "[Rn] 5f¹⁴ 6d³ 7s² (estimado)",
  electronegativity: "N/A",
  atomicWeight: 268,
  discoveryYear: 1968,
  description: "Elemento sintético altamente radiactivo. Vida media de horas.",
  uses: [
    "Solo investigación científica"
  ],
  density: "N/A",
  meltingPoint: "N/A",
  hazards: "Radiactivo extremo",
  facts: [
    "Sintetizado bombardeando californio con nitrógeno",
    "Nombre en honor al Instituto Conjunto de Investigación Nuclear en Dubna (Rusia)"
  ]
},
// Cromo (Cr)
{
  symbol: "Cr",
  name: "Cromo",
  atomicNumber: 24,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave (transición)
  group: 6,
  period: 4,
  block: "d",
  state: "solid",
  electronConfig: "[Ar] 3d⁵ 4s¹",
  electronegativity: 1.66,
  atomicWeight: 51.996,
  discoveryYear: 1797,
  description: "Metal duro, resistente a la corrosión. Conocido por sus compuestos coloridos.",
  uses: [
    "Cromado decorativo y protector",
    "Aceros inoxidables (18% Cr)",
    "Pigmentos (verde esmeralda, amarillo cromo)"
  ],
  density: "7.19 g/cm³",
  meltingPoint: "1907 °C",
  hazards: "Cromo VI es cancerígeno",
  facts: [
    "Su nombre viene del griego 'chroma' (color)",
    "El rubí debe su color rojo a trazas de cromo"
  ]
},

// Molibdeno (Mo)
{
  symbol: "Mo",
  name: "Molibdeno",
  atomicNumber: 42,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave
  group: 6,
  period: 5,
  block: "d",
  state: "solid",
  electronConfig: "[Kr] 4d⁵ 5s¹",
  electronegativity: 2.16,
  atomicWeight: 95.95,
  discoveryYear: 1778,
  description: "Metal refractario con alto punto de fusión. Esencial para la vida.",
  uses: [
    "Aleaciones para herramientas de alta resistencia",
    "Catalizador en refinación de petróleo",
    "Componente de enzimas en seres vivos"
  ],
  density: "10.28 g/cm³",
  meltingPoint: "2623 °C",
  hazards: "Polvo puede ser tóxico",
  facts: [
    "Su nombre viene del griego 'molybdos' (plomo), por confusión inicial",
    "Presente en la nitrogenasa (enzima clave para fijar nitrógeno)"
  ]
},

// Wolframio/Tungsteno (W)
{
  symbol: "W",
  name: "Wolframio",
  atomicNumber: 74,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave
  group: 6,
  period: 6,
  block: "d",
  state: "solid",
  electronConfig: "[Xe] 4f¹⁴ 5d⁴ 6s²",
  electronegativity: 2.36,
  atomicWeight: 183.84,
  discoveryYear: 1783,
  description: "Metal con el punto de fusión más alto de todos los elementos.",
  uses: [
    "Filamentos para bombillas incandescentes",
    "Aleaciones para herramientas de corte",
    "Contrapesos en aviación"
  ],
  density: "19.25 g/cm³",
  meltingPoint: "3422 °C",
  hazards: "Polvo puede causar problemas pulmonares",
  facts: [
    "Tiene dos nombres: wolframio (español) y tungsteno (inglés)",
    "Su densidad es similar al oro (por eso se usa en joyería falsa)"
  ]
},

// Seaborgio (Sg)
{
  symbol: "Sg",
  name: "Seaborgio",
  atomicNumber: 106,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave (aunque es sintético)
  group: 6,
  period: 7,
  block: "d",
  state: "synthetic",
  electronConfig: "[Rn] 5f¹⁴ 6d⁴ 7s² (estimado)",
  electronegativity: "N/A",
  atomicWeight: 269,
  discoveryYear: 1974,
  description: "Elemento sintético altamente radiactivo. Vida media de minutos.",
  uses: [
    "Solo investigación científica"
  ],
  density: "N/A",
  meltingPoint: "N/A",
  hazards: "Radiactivo extremo",
  facts: [
    "Primer elemento nombrado en honor a un científico vivo (Glenn T. Seaborg)",
    "Sintetizado bombardeando californio con oxígeno"
  ]
},
// Manganeso (Mn)
{
  symbol: "Mn",
  name: "Manganeso",
  atomicNumber: 25,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave (transición)
  group: 7,
  period: 4,
  block: "d",
  state: "solid",
  electronConfig: "[Ar] 3d⁵ 4s²",
  electronegativity: 1.55,
  atomicWeight: 54.938,
  discoveryYear: 1774,
  description: "Metal quebradizo pero esencial en aleaciones y biología. Forma compuestos coloridos.",
  uses: [
    "Producción de acero (elimina azufre y oxígeno)",
    "Baterías recargables (LiMn₂O₄ en baterías de litio)",
    "Enzimas esenciales (superóxido dismutasa)"
  ],
  density: "7.21 g/cm³",
  meltingPoint: "1246 °C",
  hazards: "Polvo neurotóxico (síndrome de manganismo)",
  facts: [
    "El mineral pirolusita (MnO₂) se usaba en la prehistoria para decolorar vidrio",
    "El permanganato de potasio (KMnO₄) es un potente oxidante"
  ]
},

// Tecnecio (Tc)
{
  symbol: "Tc",
  name: "Tecnecio",
  atomicNumber: 43,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave
  group: 7,
  period: 5,
  block: "d",
  state: "solid",
  electronConfig: "[Kr] 4d⁵ 5s²",
  electronegativity: 1.9,
  atomicWeight: 98,
  discoveryYear: 1937,
  description: "Primer elemento artificialmente producido. Radiactivo pero usado en medicina.",
  uses: [
    "Medicina nuclear (Tc-99m en diagnósticos por imagen)",
    "Inhibidor de corrosión en aceros"
  ],
  density: "11 g/cm³",
  meltingPoint: "2157 °C",
  hazards: "Emisor de rayos gamma (vida media corta)",
  facts: [
    "Nombre del griego 'technetos' (artificial)",
    "Se encuentra trazas en minerales de uranio como producto de fisión"
  ]
},

// Renio (Re)
{
  symbol: "Re",
  name: "Renio",
  atomicNumber: 75,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave
  group: 7,
  period: 6,
  block: "d",
  state: "solid",
  electronConfig: "[Xe] 4f¹⁴ 5d⁵ 6s²",
  electronegativity: 1.9,
  atomicWeight: 186.21,
  discoveryYear: 1925,
  description: "Uno de los metales más densos y con alto punto de fusión. Extremadamente raro.",
  uses: [
    "Catalizadores para refinación de petróleo",
    "Termopares para medición de altas temperaturas",
    "Aleaciones en motores a reacción"
  ],
  density: "21.02 g/cm³",
  meltingPoint: "3186 °C",
  hazards: "Baja toxicidad",
  facts: [
    "Último elemento natural descubierto (nombre del río Rin en latín)",
    "Más raro que el platino en la corteza terrestre"
  ]
},

// Bohrio (Bh)
{
  symbol: "Bh",
  name: "Bohrio",
  atomicNumber: 107,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave (sintético)
  group: 7,
  period: 7,
  block: "d",
  state: "synthetic",
  electronConfig: "[Rn] 5f¹⁴ 6d⁵ 7s² (estimado)",
  electronegativity: "N/A",
  atomicWeight: 270,
  discoveryYear: 1981,
  description: "Elemento sintético superpesado. Vida media de segundos a minutos.",
  uses: [
    "Solo investigación científica"
  ],
  density: "N/A",
  meltingPoint: "N/A",
  hazards: "Radiactivo extremo",
  facts: [
    "Sintetizado bombardeando bismuto con cromo",
    "Nombre en honor a Niels Bohr (físico cuántico)"
  ]
},
// Hierro (Fe)
{
  symbol: "Fe",
  name: "Hierro",
  atomicNumber: 26,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave
  group: 8,
  period: 4,
  block: "d",
  state: "solid",
  electronConfig: "[Ar] 3d⁶ 4s²",
  electronegativity: 1.83,
  atomicWeight: 55.845,
  discoveryYear: "Antigüedad",
  description: "Metal esencial para la civilización. Componente clave del núcleo terrestre.",
  uses: [
    "Aceros y aleaciones (95% de la producción mundial)",
    "Hemoglobina (transporte de oxígeno en sangre)",
    "Imanes permanentes (aleaciones con neodimio)"
  ],
  density: "7.87 g/cm³",
  meltingPoint: "1538 °C",
  hazards: "Óxido causa corrosión",
  facts: [
    "Núcleo terrestre es 90% hierro",
    "Edad del Hierro comenzó ~1200 a.C."
  ]
},

// Rutenio (Ru)
{
  symbol: "Ru",
  name: "Rutenio",
  atomicNumber: 44,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", 
  group: 8,
  period: 5,
  block: "d",
  state: "solid",
  electronConfig: "[Kr] 4d⁷ 5s¹",
  electronegativity: 2.2,
  atomicWeight: 101.07,
  discoveryYear: 1844,
  description: "Metal raro del grupo del platino. Resistente a la corrosión.",
  uses: [
    "Catalizadores para producción de amoníaco",
    "Aleaciones para contactos eléctricos",
    "Celdas solares sensibilizadas por colorantes"
  ],
  density: "12.45 g/cm³",
  meltingPoint: "2334 °C",
  hazards: "Polvo puede ser inflamable",
  facts: [
    "Nombre del latín 'Ruthenia' (Rusia)",
    "Añade dureza al platino en joyería"
  ]
},

// Osmio (Os)
{
  symbol: "Os",
  name: "Osmio",
  atomicNumber: 76,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880",
  group: 8,
  period: 6,
  block: "d",
  state: "solid",
  electronConfig: "[Xe] 4f¹⁴ 5d⁶ 6s²",
  electronegativity: 2.2,
  atomicWeight: 190.23,
  discoveryYear: 1803,
  description: "Metal más denso conocido. Forma tetróxido tóxico.",
  uses: [
    "Aleaciones ultra-duras (plumas estilográficas, pivotes)",
    "Catalizadores en síntesis química"
  ],
  density: "22.59 g/cm³", // El más denso
  meltingPoint: "3033 °C",
  hazards: "OsO₄ es altamente tóxico (daña ojos y pulmones)",
  facts: [
    "Olor a ozono cuando se oxida (de ahí su nombre del griego 'osme')",
    "Usado en la punta de los bolígrafos más exclusivos"
  ]
},

// Hassio (Hs)
{
  symbol: "Hs",
  name: "Hassio",
  atomicNumber: 108,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880",
  group: 8,
  period: 7,
  block: "d",
  state: "synthetic",
  electronConfig: "[Rn] 5f¹⁴ 6d⁶ 7s² (estimado)",
  electronegativity: "N/A",
  atomicWeight: 277,
  discoveryYear: 1984,
  description: "Elemento sintético superpesado. Vida media de segundos.",
  uses: [
    "Solo investigación nuclear"
  ],
  density: "N/A",
  meltingPoint: "N/A",
  hazards: "Radiactivo extremo",
  facts: [
    "Nombre en honor al estado alemán de Hesse",
    "Sintetizado bombardeando plomo con hierro"
  ]
},
// Cobalto (Co)
{
  symbol: "Co",
  name: "Cobalto",
  atomicNumber: 27,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880",
  group: 9,
  period: 4,
  block: "d",
  state: "solid",
  electronConfig: "[Ar] 3d⁷ 4s²",
  electronegativity: 1.88,
  atomicWeight: 58.933,
  discoveryYear: 1735,
  description: "Metal ferromagnético. Esencial en baterías modernas.",
  uses: [
    "Baterías de iones de litio (LiCoO₂ en cátodos)",
    "Superaleaciones para turbinas de avión",
    "Imanes (Alnico, SmCo)"
  ],
  density: "8.9 g/cm³",
  meltingPoint: "1495 °C",
  hazards: "Polvo puede causar neumonía",
  facts: [
    "Nombre de 'kobold' (duende alemán), mineros creían que robaba plata",
    "Vitamin B12 contiene cobalto"
  ]
},

// Rodio (Rh)
{
  symbol: "Rh",
  name: "Rodio",
  atomicNumber: 45,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880",
  group: 9,
  period: 5,
  block: "d",
  state: "solid",
  electronConfig: "[Kr] 4d⁸ 5s¹",
  electronegativity: 2.28,
  atomicWeight: 102.91,
  discoveryYear: 1803,
  description: "Metal más caro del mundo (2023). Reflectante y resistente.",
  uses: [
    "Convertidores catalíticos en autos",
    "Joyeria (chapado en rodio para brillo permanente)",
    "Espejos para telescopios"
  ],
  density: "12.41 g/cm³",
  meltingPoint: "1964 °C",
  hazards: "Compuestos pueden ser cancerígenos",
  facts: [
    "Precio ~10x mayor que el oro (2023)",
    "Nombre del griego 'rhodon' (rosa), por sus compuestos coloreados"
  ]
},

// Iridio (Ir)
{
  symbol: "Ir",
  name: "Iridio",
  atomicNumber: 77,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880",
  group: 9,
  period: 6,
  block: "d",
  state: "solid",
  electronConfig: "[Xe] 4f¹⁴ 5d⁷ 6s²",
  electronegativity: 2.2,
  atomicWeight: 192.22,
  discoveryYear: 1803,
  description: "Metal más resistente a la corrosión. Relacionado con extinciones masivas.",
  uses: [
    "Puntas de bolígrafos de lujo",
    "Crisoles para crecimiento de cristales",
    "Aleaciones para equipos a alta temperatura"
  ],
  density: "22.56 g/cm³", // Segundo más denso tras osmio
  meltingPoint: "2466 °C",
  hazards: "Polvo puede irritar piel",
  facts: [
    "Capa de iridio en límite K-Pg sugiere impacto de asteroide que extinguió dinosaurios",
    "Nombre del griego 'iris' (arcoíris), por sus compuestos coloridos"
  ]
},

// Meitnerio (Mt)
{
  symbol: "Mt",
  name: "Meitnerio",
  atomicNumber: 109,
  category: "metal",
  subcategory: "transition_metal",
  color: "#CCCCCC",
  group: 9,
  period: 7,
  block: "d",
  state: "synthetic",
  electronConfig: "[Rn] 5f¹⁴ 6d⁷ 7s² (estimado)",
  electronegativity: "N/A",
  atomicWeight: 278,
  discoveryYear: 1982,
  description: "Elemento sintético superpesado. Vida media de milisegundos.",
  uses: [
    "Solo investigación en física nuclear"
  ],
  density: "N/A",
  meltingPoint: "N/A",
  hazards: "Radiactivo extremo",
  facts: [
    "Nombre en honor a Lise Meitner (descubridora de la fisión nuclear)",
    "Producido fusionando bismuto con hierro"
  ]
},
// Níquel (Ni)
{
  symbol: "Ni",
  name: "Níquel",
  atomicNumber: 28,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880", // Naranja suave
  group: 10,
  period: 4,
  block: "d",
  state: "solid",
  electronConfig: "[Ar] 3d⁸ 4s²",
  electronegativity: 1.91,
  atomicWeight: 58.693,
  discoveryYear: 1751,
  description: "Metal resistente a la corrosión. Esencial en aleaciones modernas.",
  uses: [
    "Aceros inoxidables (8-12% Ni)",
    "Baterías recargables (NiMH, NiCd)",
    "Monedas (aleación cuproníquel)"
  ],
  density: "8.91 g/cm³",
  meltingPoint: "1455 °C",
  hazards: "Alergénico (dermatitis por contacto)",
  facts: [
    "Nombre del alemán 'Kupfernickel' (cobre del diablo), mineros creían que era cobre inútil",
    "Núcleo terrestre contiene 5% de níquel"
  ]
},

// Paladio (Pd)
{
  symbol: "Pd",
  name: "Paladio",
  atomicNumber: 46,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880",
  group: 10,
  period: 5,
  block: "d",
  state: "solid",
  electronConfig: "[Kr] 4d¹⁰",
  electronegativity: 2.20,
  atomicWeight: 106.42,
  discoveryYear: 1803,
  description: "Metal precioso del grupo del platino. Absorbe hidrógeno excepcionalmente.",
  uses: [
    "Convertidores catalíticos (alternativa al platino)",
    "Joyeria (oro blanco contiene paladio)",
    "Hidrógeno almacenamiento (hasta 900x su volumen)"
  ],
  density: "12.02 g/cm³",
  meltingPoint: "1554.9 °C",
  hazards: "Baja toxicidad",
  facts: [
    "Descubierto en platino crudo y nombrado por el asteroide Pallas",
    "Precio ~50% del platino (2023)"
  ]
},

// Platino (Pt)
{
  symbol: "Pt",
  name: "Platino",
  atomicNumber: 78,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880",
  group: 10,
  period: 6,
  block: "d",
  state: "solid",
  electronConfig: "[Xe] 4f¹⁴ 5d⁹ 6s¹",
  electronegativity: 2.28,
  atomicWeight: 195.08,
  discoveryYear: 1735,
  description: "Metal precioso inerte. Símbolo de prestigio y resistencia.",
  uses: [
    "Joyeria (70% del uso mundial)",
    "Catalizadores para automóviles (20% del uso)",
    "Electrodos médicos (marcapasos)"
  ],
  density: "21.45 g/cm³",
  meltingPoint: "1768.3 °C",
  hazards: "Compuestos pueden ser cancerígenos",
  facts: [
    "Un cubo de 1m³ pesaría 21.45 toneladas",
    "Los Incas lo usaban en arte antes que los europeos"
  ]
},

// Darmstadtio (Ds)
{
  symbol: "Ds",
  name: "Darmstadtio",
  atomicNumber: 110,
  category: "metal",
  subcategory: "transition_metal",
  color: "#CCCCCC",
  group: 10,
  period: 7,
  block: "d",
  state: "synthetic",
  electronConfig: "[Rn] 5f¹⁴ 6d⁹ 7s¹ (estimado)",
  electronegativity: "N/A",
  atomicWeight: 281,
  discoveryYear: 1994,
  description: "Elemento sintético superpesado. Vida media de microsegundos.",
  uses: [
    "Solo investigación en física nuclear"
  ],
  density: "N/A",
  meltingPoint: "N/A",
  hazards: "Radiactivo extremo",
  facts: [
    "Nombre en honor al centro GSI en Darmstadt (Alemania)",
    "Producido fusionando plomo con níquel"
  ]
},
// Cobre (Cu)
{
  symbol: "Cu",
  name: "Cobre",
  atomicNumber: 29,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880",
  group: 11,
  period: 4,
  block: "d",
  state: "solid",
  electronConfig: "[Ar] 3d¹⁰ 4s¹",
  electronegativity: 1.90,
  atomicWeight: 63.546,
  discoveryYear: "Prehistoria",
  description: "Primer metal manipulado por humanos. Excelente conductor.",
  uses: [
    "Cableado eléctrico (60% del uso mundial)",
    "Tuberías y techumbres",
    "Monedas (aleado con níquel o zinc)"
  ],
  density: "8.96 g/cm³",
  meltingPoint: "1084.62 °C",
  hazards: "Exceso causa enfermedad de Wilson",
  facts: [
    "Nombre del latín 'cuprum' (por Chipre, principal fuente en la antigüedad)",
    "Estátua de la Libertad contiene 81 toneladas de cobre"
  ]
},

// Plata (Ag)
{
  symbol: "Ag",
  name: "Plata",
  atomicNumber: 47,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880",
  group: 11,
  period: 5,
  block: "d",
  state: "solid",
  electronConfig: "[Kr] 4d¹⁰ 5s¹",
  electronegativity: 1.93,
  atomicWeight: 107.87,
  discoveryYear: "Antigüedad",
  description: "Metal precioso con mayor conductividad eléctrica/térmica.",
  uses: [
    "Joyeria y vajillas (50% del uso)",
    "Fotografía (antes digital)",
    "Nanopartículas antibacterianas"
  ],
  density: "10.49 g/cm³",
  meltingPoint: "961.78 °C",
  hazards: "Argiria (piel azulada por acumulación)",
  facts: [
    "Nombre del germánico 'silabar' (brillante)",
    "México produce 23% de la plata mundial"
  ]
},

// Oro (Au)
{
  symbol: "Au",
  name: "Oro",
  atomicNumber: 79,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880",
  group: 11,
  period: 6,
  block: "d",
  state: "solid",
  electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
  electronegativity: 2.54,
  atomicWeight: 196.97,
  discoveryYear: "Antigüedad",
  description: "Metal precioso por excelencia. Inerte y maleable.",
  uses: [
    "Reservas monetarias (30%)",
    "Joyeria (50%)",
    "Electrónica (contactos libres de corrosión)"
  ],
  density: "19.32 g/cm³",
  meltingPoint: "1064.18 °C",
  hazards: "Cianuro usado en extracción contamina",
  facts: [
    "Todo el oro extraído en la historia cabría en 3 piscinas olímpicas",
    "Oro coloidal da color al vidrio rubí"
  ]
},

// Roentgenio (Rg)
{
  symbol: "Rg",
  name: "Roentgenio",
  atomicNumber: 111,
  category: "metal",
  subcategory: "transition_metal",
  color: "#CCCCCC",
  group: 11,
  period: 7,
  block: "d",
  state: "synthetic",
  electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s¹ (estimado)",
  electronegativity: "N/A",
  atomicWeight: 282,
  discoveryYear: 1994,
  description: "Elemento sintético superpesado. Vida media de segundos.",
  uses: [
    "Solo investigación en física nuclear"
  ],
  density: "N/A",
  meltingPoint: "N/A",
  hazards: "Radiactivo extremo",
  facts: [
    "Nombre en honor a Wilhelm Röntgen (descubridor rayos X)",
    "Producido fusionando bismuto con níquel"
  ]
},
// Zinc (Zn)
{
  symbol: "Zn",
  name: "Zinc",
  atomicNumber: 30,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880",
  group: 12,
  period: 4,
  block: "d",
  state: "solid",
  electronConfig: "[Ar] 3d¹⁰ 4s²",
  electronegativity: 1.65,
  atomicWeight: 65.38,
  discoveryYear: 1746,
  description: "Metal anti-corrosivo esencial para la vida.",
  uses: [
    "Galvanizado (50% del uso: cubrir acero)",
    "Aleaciones (latón = Cu+Zn)",
    "Suplemento nutricional (refuerza sistema inmune)"
  ],
  density: "7.14 g/cm³",
  meltingPoint: "419.53 °C",
  hazards: "Humos de óxido causan fiebre del zinc",
  facts: [
    "La estatua de la Libertad está galvanizada con 30 toneladas de zinc",
    "El cuerpo humano contiene 2-4g de zinc (enzimas y sistema inmune)"
  ]
},

// Cadmio (Cd)
{
  symbol: "Cd",
  name: "Cadmio",
  atomicNumber: 48,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880",
  group: 12,
  period: 5,
  block: "d",
  state: "solid",
  electronConfig: "[Kr] 4d¹⁰ 5s²",
  electronegativity: 1.69,
  atomicWeight: 112.41,
  discoveryYear: 1817,
  description: "Metal tóxico pero útil en aplicaciones técnicas.",
  uses: [
    "Baterías NiCd (en desuso por toxicidad)",
    "Pigmentos (amarillo cadmio en arte)",
    "Barras de control nuclear (absorbe neutrones)"
  ],
  density: "8.65 g/cm³",
  meltingPoint: "321.07 °C",
  hazards: "Cancerígeno (acumulación en riñones)",
  facts: [
    "Nombre del griego 'kadmeia' (mineral de zinc donde se encontró)",
    "Envenenamiento por cadmio causa itai-itai en Japón"
  ]
},

// Mercurio (Hg)
{
  symbol: "Hg",
  name: "Mercurio",
  atomicNumber: 80,
  category: "metal",
  subcategory: "transition_metal",
  color: "#FFC880",
  group: 12,
  period: 6,
  block: "d",
  state: "liquid",
  electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
  electronegativity: 2.00,
  atomicWeight: 200.59,
  discoveryYear: "Antigüedad",
  description: "Único metal líquido a temperatura ambiente. Altamente tóxico.",
  uses: [
    "Termómetros (en desuso)",
    "Amalgamas dentales (Hg+Ag)",
    "Proceso cloro-álcali (industria química)"
  ],
  density: "13.53 g/cm³",
  meltingPoint: "-38.83 °C",
  hazards: "Neurotóxico (afeta sistema nervioso)",
  facts: [
    "Nombre del planeta Mercurio (símbolo Hg del griego 'hydrargyros': plata líquida)",
    "Minamata: enfermedad por contaminación de mercurio en Japón (1950s)"
  ]
},

// Copernicio (Cn)
{
  symbol: "Cn",
  name: "Copernicio",
  atomicNumber: 112,
  category: "metal",
  subcategory: "transition_metal",
  color: "#CCCCCC",
  group: 12,
  period: 7,
  block: "d",
  state: "synthetic",
  electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² (estimado)",
  electronegativity: "N/A",
  atomicWeight: 285,
  discoveryYear: 1996,
  description: "Elemento sintético superpesado. Puede ser líquido a temperatura ambiente.",
  uses: [
    "Solo investigación en física nuclear"
  ],
  density: "~14 g/cm³ (estimado)",
  meltingPoint: "~10°C (estimado)",
  hazards: "Radiactivo extremo",
  facts: [
    "Nombre en honor a Nicolás Copérnico",
    "Primer elemento del grupo 12 predicho para ser líquido"
  ]
},
// Boro (B) - Semimetal
{
  symbol: "B",
  name: "Boro",
  atomicNumber: 5,
  category: "semimetal",
  subcategory: "typical_semimetal",
  color: "#00709a",
  group: 13,
  period: 2,
  block: "p",
  state: "solid",
  electronConfig: "1s² 2s² 2p¹",
  electronegativity: 2.04,
  atomicWeight: 10.81,
  discoveryYear: 1808,
  description: "Elemento semimetálico esencial para plantas.",
  uses: ["Fibra de vidrio", "Bórax", "Detergentes"],
  density: "2.34 g/cm³",
  meltingPoint: "2076°C",
  hazards: "Tóxico en grandes cantidades",
  facts: ["Elemento esencial para el crecimiento vegetal"]
},

// Aluminio (Al)
{
  symbol: "Al",
  name: "Aluminio",
  atomicNumber: 13,
  category: "metal",
  subcategory: "other_metal",
  color: "#80FFFF",
  group: 13,
  period: 3,
  block: "p",
  state: "solid",
  electronConfig: "[Ne] 3s² 3p¹",
  electronegativity: 1.61,
  atomicWeight: 26.98,
  discoveryYear: 1825,
  description: "Metal liviano muy usado en la industria.",
  uses: ["Aviones", "Latas", "Construcción"],
  density: "2.70 g/cm³",
  meltingPoint: "660°C",
  hazards: "No tóxico pero puede acumularse",
  facts: ["El metal más abundante en la corteza terrestre"]
},

// Galio (Ga)
{
  symbol: "Ga",
  name: "Galio",
  atomicNumber: 31,
  category: "metal",
  subcategory: "other_metal",
  color: "#80FFFF",
  group: 13,
  period: 4,
  block: "p",
  state: "solid",
  electronConfig: "[Ar] 3d¹⁰ 4s² 4p¹",
  electronegativity: 1.81,
  atomicWeight: 69.72,
  discoveryYear: 1875,
  description: "Metal que se derrite en la mano.",
  uses: ["Termómetros", "LEDs", "Semiconductores"],
  density: "5.91 g/cm³",
  meltingPoint: "29.8°C",
  hazards: "No tóxico en pequeñas cantidades",
  facts: ["Descubierto por predicción de Mendeleiev"]
},

// Indio (In)
{
  symbol: "In",
  name: "Indio",
  atomicNumber: 49,
  category: "metal",
  subcategory: "other_metal",
  color: "#80FFFF",
  group: 13,
  period: 5,
  block: "p",
  state: "solid",
  electronConfig: "[Kr] 4d¹⁰ 5s² 5p¹",
  electronegativity: 1.78,
  atomicWeight: 114.82,
  discoveryYear: 1863,
  description: "Metal blando con usos electrónicos.",
  uses: ["Pantallas LCD", "Aleaciones", "Semiconductores"],
  density: "7.31 g/cm³",
  meltingPoint: "157°C",
  hazards: "Tóxico en grandes dosis",
  facts: ["Recibe su nombre por una línea índigo en su espectro"]
},

// Talio (Tl)
{
  symbol: "Tl",
  name: "Talio",
  atomicNumber: 81,
  category: "metal",
  subcategory: "other_metal",
  color: "#80FFFF",
  group: 13,
  period: 6,
  block: "p",
  state: "solid",
  electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
  electronegativity: 1.62,
  atomicWeight: 204.38,
  discoveryYear: 1861,
  description: "Metal muy tóxico con aplicaciones limitadas.",
  uses: ["Cristales ópticos", "Detectores de radiación"],
  density: "11.85 g/cm³",
  meltingPoint: "304°C",
  hazards: "Extremadamente tóxico",
  facts: ["Fue usado como veneno en el pasado"]
},
// Nihonio (Nh)
{
  symbol: "Nh",
  name: "Nihonio",
  atomicNumber: 113,
  category: "metal",
  subcategory: "other_metal",
  color: "#CCCCCC",
  group: 13,
  period: 7,
  block: "p",
  state: "synthetic",
  electronConfig: "[Rn] 5f14 6d10 7s2 7p1 (estimado)",
  electronegativity: "N/A",
  atomicWeight: 286,
  discoveryYear: 2004,
  description: "Elemento superpesado sintético, de existencia breve.",
  uses: ["Investigación científica"],
  density: "~16 g/cm³ (estimado)",
  meltingPoint: "~430°C (estimado)",
  hazards: "Altamente radiactivo",
  facts: [
    "Descubierto por Japón, de ahí su nombre 'Nihon'",
    "Pertenece al grupo 13 como boro y aluminio"
  ]
},
// Carbono (C) - No metal
{
  symbol: "C",
  name: "Carbono",
  atomicNumber: 6,
  category: "nonmetal",
  subcategory: "other_nonmetal",
  color: "#A0FFA0",
  group: 14,
  period: 2,
  block: "p",
  state: "solid",
  electronConfig: "1s² 2s² 2p²",
  electronegativity: 2.55,
  atomicWeight: 12.01,
  discoveryYear: "Antigüedad",
  description: "Elemento base de la vida.",
  uses: ["Biología", "Combustibles", "Grafito, diamantes"],
  density: "2.26 g/cm³ (grafito)",
  meltingPoint: "3652°C",
  hazards: "No tóxico",
  facts: ["Forma el 20% de los organismos vivos en masa"]
},

// Silicio (Si) - Semimetal
{
  symbol: "Si",
  name: "Silicio",
  atomicNumber: 14,
  category: "semimetal",
  subcategory: "typical_semimetal",
  color: "#00709a",
  group: 14,
  period: 3,
  block: "p",
  state: "solid",
  electronConfig: "[Ne] 3s² 3p²",
  electronegativity: 1.90,
  atomicWeight: 28.09,
  discoveryYear: 1824,
  description: "Elemento clave para la electrónica.",
  uses: ["Microchips", "Vidrio", "Paneles solares"],
  density: "2.33 g/cm³",
  meltingPoint: "1414°C",
  hazards: "No tóxico",
  facts: ["Segundo más abundante en la corteza terrestre"]
},

// Germanio (Ge) - Semimetal / Metaloide
{
  symbol: "Ge",
  name: "Germanio",
  atomicNumber: 32,
  category: "semimetal",
  subcategory: "metalloid",
  color: "#00709a",
  group: 14,
  period: 4,
  block: "p",
  state: "solid",
  electronConfig: "[Ar] 3d¹⁰ 4s² 4p²",
  electronegativity: 2.01,
  atomicWeight: 72.63,
  discoveryYear: 1886,
  description: "Metaloide usado en óptica y semiconductores.",
  uses: ["Fibra óptica", "Transistores", "Detector infrarrojo"],
  density: "5.32 g/cm³",
  meltingPoint: "938°C",
  hazards: "Levemente tóxico",
  facts: ["Predicho por Mendeleiev como 'eka-silicio'"]
},

// Estaño (Sn) - Metal del bloque p
{
  symbol: "Sn",
  name: "Estaño",
  atomicNumber: 50,
  category: "metal",
  subcategory: "other_metal",
  color: "#80FFFF",
  group: 14,
  period: 5,
  block: "p",
  state: "solid",
  electronConfig: "[Kr] 4d¹⁰ 5s² 5p²",
  electronegativity: 1.96,
  atomicWeight: 118.71,
  discoveryYear: "Antigüedad",
  description: "Metal usado en aleaciones como el bronce.",
  uses: ["Soldaduras", "Latas", "Bronce"],
  density: "7.31 g/cm³",
  meltingPoint: "232°C",
  hazards: "No tóxico",
  facts: ["Forma allotrópica gris a bajas temperaturas"]
},

// Plomo (Pb)
{
  symbol: "Pb",
  name: "Plomo",
  atomicNumber: 82,
  category: "metal",
  subcategory: "other_metal",
  color: "#80FFFF",
  group: 14,
  period: 6,
  block: "p",
  state: "solid",
  electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
  electronegativity: 2.33,
  atomicWeight: 207.2,
  discoveryYear: "Antigüedad",
  description: "Metal pesado y tóxico.",
  uses: ["Baterías", "Municiones", "Protección radiológica"],
  density: "11.34 g/cm³",
  meltingPoint: "327°C",
  hazards: "Altamente tóxico",
  facts: ["Uso antiguo en cañerías y pinturas"]
},
// Flerovio (Fl)
{
  symbol: "Fl",
  name: "Flerovio",
  atomicNumber: 114,
  category: "metal",
  subcategory: "other_metal",
  color: "#CCCCCC",
  group: 14,
  period: 7,
  block: "p",
  state: "synthetic",
  electronConfig: "[Rn] 5f14 6d10 7s2 7p2 (estimado)",
  electronegativity: "N/A",
  atomicWeight: 289,
  discoveryYear: 1999,
  description: "Elemento superpesado con vida media corta.",
  uses: ["Investigación"],
  density: "~14 g/cm³ (estimado)",
  meltingPoint: "Desconocido",
  hazards: "Radiactivo",
  facts: [
    "Nombrado en honor al físico Flerov",
    "Comportamiento químico aún incierto"
  ]
},
// Nitrógeno (N)
{
  symbol: "N",
  name: "Nitrógeno",
  atomicNumber: 7,
  category: "nonmetal",
  subcategory: "other_nonmetal",
  color: "#A0FFA0",
  group: 15,
  period: 2,
  block: "p",
  state: "gas",
  electronConfig: "[He] 2s² 2p³",
  electronegativity: 3.04,
  atomicWeight: 14.007,
  discoveryYear: 1772,
  description: "Gas incoloro y vital para los seres vivos.",
  uses: [
    "Fertilizantes", "Explosivos", "Refrigeración criogénica"
  ],
  density: "1.2506 g/L",
  meltingPoint: "-210°C",
  hazards: "Asfixiante en ambientes cerrados",
  facts: [
    "Compone el 78% de la atmósfera terrestre"
  ]
},

// Fósforo (P)
{
  symbol: "P",
  name: "Fósforo",
  atomicNumber: 15,
  category: "nonmetal",
  subcategory: "other_nonmetal",
  color: "#A0FFA0",
  group: 15,
  period: 3,
  block: "p",
  state: "solid",
  electronConfig: "[Ne] 3s² 3p³",
  electronegativity: 2.19,
  atomicWeight: 30.974,
  discoveryYear: 1669,
  description: "Esencial en el ADN y fertilizantes.",
  uses: [
    "Fertilizantes", "Detergentes", "Fuegos artificiales"
  ],
  density: "1.82 g/cm³",
  meltingPoint: "44.1°C (blanco)",
  hazards: "Inflamable, tóxico",
  facts: [
    "Tiene formas: blanco, rojo y negro"
  ]
},

// Arsénico (As)
{
  symbol: "As",
  name: "Arsénico",
  atomicNumber: 33,
  category: "semimetal",
  subcategory: "typical_semimetal",
  color: "#00709a",
  group: 15,
  period: 4,
  block: "p",
  state: "solid",
  electronConfig: "[Ar] 3d¹⁰ 4s² 4p³",
  electronegativity: 2.18,
  atomicWeight: 74.9216,
  discoveryYear: "conocido desde la antigüedad",
  description: "Metaloide venenoso, usado en pesticidas.",
  uses: [
    "Semiconductores", "Pesticidas", "Aleaciones"
  ],
  density: "5.727 g/cm³",
  meltingPoint: "817°C (sublimación)",
  hazards: "Altamente tóxico",
  facts: [
    "Históricamente usado como veneno"
  ]
},

// Antimonio (Sb)
{
  symbol: "Sb",
  name: "Antimonio",
  atomicNumber: 51,
  category: "semimetal",
  subcategory: "typical_semimetal",
  color: "#00709a",
  group: 15,
  period: 5,
  block: "p",
  state: "solid",
  electronConfig: "[Kr] 4d¹⁰ 5s² 5p³",
  electronegativity: 2.05,
  atomicWeight: 121.76,
  discoveryYear: "conocido desde la antigüedad",
  description: "Metaloide usado en retardantes de fuego.",
  uses: [
    "Retardantes de llama", "Aleaciones", "Semiconductores"
  ],
  density: "6.697 g/cm³",
  meltingPoint: "630.63°C",
  hazards: "Tóxico",
  facts: [
    "Símbolo del latín *Stibium*"
  ]
},

// Bismuto (Bi)
{
  symbol: "Bi",
  name: "Bismuto",
  atomicNumber: 83,
  category: "metal",
  subcategory: "other_metal",
  color: "#80FFFF",
  group: 15,
  period: 6,
  block: "p",
  state: "solid",
  electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
  electronegativity: 2.02,
  atomicWeight: 208.9804,
  discoveryYear: "conocido desde la antigüedad",
  description: "Metal pesado no tóxico. Sustituto del plomo.",
  uses: [
    "Cosméticos", "Fármacos", "Aleaciones"
  ],
  density: "9.78 g/cm³",
  meltingPoint: "271.4°C",
  hazards: "Generalmente seguro",
  facts: [
    "Uno de los metales más diamagnéticos"
  ]
},

// Moscovio (Mc) - Elemento sintético
{
  symbol: "Mc",
  name: "Moscovio",
  atomicNumber: 115,
  category: "metal",
  subcategory: "unknown_properties",
  color: "#CCCCCC",
  group: 15,
  period: 7,
  block: "p",
  state: "synthetic",
  electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³ (estimado)",
  electronegativity: "desconocida",
  atomicWeight: 288,
  discoveryYear: 2003,
  description: "Elemento superpesado, altamente inestable.",
  uses: [
    "Investigación científica"
  ],
  density: "desconocida",
  meltingPoint: "desconocido",
  hazards: "Radiactivo",
  facts: [
    "Descubierto en Dubna, Rusia",
    "Nombrado en honor a Moscú"
  ]
},

// Oxígeno (O)
{
  symbol: "O",
  name: "Oxígeno",
  atomicNumber: 8,
  category: "nonmetal",
  subcategory: "other_nonmetal",
  color: "#A0FFA0",
  group: 16,
  period: 2,
  block: "p",
  state: "gas",
  electronConfig: "[He] 2s² 2p⁴",
  electronegativity: 3.44,
  atomicWeight: 15.999,
  discoveryYear: 1774,
  description: "Esencial para la vida. Segundo elemento más abundante en la atmósfera.",
  uses: [
    "Respiración", "Combustión", "Producción de acero"
  ],
  density: "1.429 g/L",
  meltingPoint: "-218.8°C",
  hazards: "Potencialmente inflamable en altas concentraciones",
  facts: [
    "Compone el 21% del aire"
  ]
},

// Azufre (S)
{
  symbol: "S",
  name: "Azufre",
  atomicNumber: 16,
  category: "nonmetal",
  subcategory: "other_nonmetal",
  color: "#A0FFA0",
  group: 16,
  period: 3,
  block: "p",
  state: "solid",
  electronConfig: "[Ne] 3s² 3p⁴",
  electronegativity: 2.58,
  atomicWeight: 32.06,
  discoveryYear: "conocido desde la antigüedad",
  description: "Sólido amarillo, usado en fertilizantes y pólvora.",
  uses: [
    "Fertilizantes", "Fármacos", "Vulcanización del caucho"
  ],
  density: "2.07 g/cm³",
  meltingPoint: "115.2°C",
  hazards: "Puede liberar gases tóxicos al quemarse",
  facts: [
    "Presente en proteínas y aminoácidos"
  ]
},

// Selenio (Se)
{
  symbol: "Se",
  name: "Selenio",
  atomicNumber: 34,
  category: "nonmetal",
  subcategory: "other_nonmetal",
  color: "#A0FFA0",
  group: 16,
  period: 4,
  block: "p",
  state: "solid",
  electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁴",
  electronegativity: 2.55,
  atomicWeight: 78.971,
  discoveryYear: 1817,
  description: "Semimetal esencial en pequeñas cantidades.",
  uses: [
    "Fotocopiadoras", "Vidrios", "Suplementos nutricionales"
  ],
  density: "4.809 g/cm³",
  meltingPoint: "221°C",
  hazards: "Tóxico en grandes cantidades",
  facts: [
    "Llamado así por la Luna (*Selene* en griego)"
  ]
},

// Telurio (Te)
{
  symbol: "Te",
  name: "Telurio",
  atomicNumber: 52,
  category: "semimetal",
  subcategory: "metalloid",
  color: "#00709a",
  group: 16,
  period: 5,
  block: "p",
  state: "solid",
  electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁴",
  electronegativity: 2.1,
  atomicWeight: 127.60,
  discoveryYear: 1782,
  description: "Metaloide frágil, usado en aleaciones y paneles solares.",
  uses: [
    "Aleaciones", "Paneles solares", "Termoelectricidad"
  ],
  density: "6.24 g/cm³",
  meltingPoint: "449.5°C",
  hazards: "Tóxico en grandes cantidades",
  facts: [
    "Descubierto en Transilvania"
  ]
},

// Polonio (Po)
{
  symbol: "Po",
  name: "Polonio",
  atomicNumber: 84,
  category: "metal",
  subcategory: "other_metal",
  color: "#80FFFF",
  group: 16,
  period: 6,
  block: "p",
  state: "solid",
  electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
  electronegativity: 2.0,
  atomicWeight: 209,
  discoveryYear: 1898,
  description: "Radiactivo, altamente tóxico.",
  uses: [
    "Fuentes de calor en sondas espaciales"
  ],
  density: "9.196 g/cm³",
  meltingPoint: "254°C",
  hazards: "Extremadamente radiactivo",
  facts: [
    "Descubierto por Marie Curie",
    "Nombrado por Polonia"
  ]
},

// Livermorio (Lv)
{
  symbol: "Lv",
  name: "Livermorio",
  atomicNumber: 116,
  category: "metal",
  subcategory: "unknown_properties",
  color: "#CCCCCC",
  group: 16,
  period: 7,
  block: "p",
  state: "synthetic",
  electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴ (estimado)",
  electronegativity: "desconocida",
  atomicWeight: 293,
  discoveryYear: 2000,
  description: "Elemento sintético extremadamente inestable.",
  uses: [
    "Investigación científica"
  ],
  density: "desconocida",
  meltingPoint: "desconocido",
  hazards: "Radiactivo",
  facts: [
    "Nombrado en honor al Laboratorio de Livermore (EE.UU.)"
  ]
},
// Flúor (F)
{
  symbol: "F",
  name: "Flúor",
  atomicNumber: 9,
  category: "nonmetal",
  subcategory: "halogen",
  color: "#A0FFA0",
  group: 17,
  period: 2,
  block: "p",
  state: "gas",
  electronConfig: "[He] 2s² 2p⁵",
  electronegativity: 3.98,
  atomicWeight: 18.998,
  discoveryYear: 1886,
  description: "Elemento más electronegativo, altamente reactivo.",
  uses: ["Pasta dental", "Refrigerantes", "Uranio enriquecido"],
  density: "1.696 g/L",
  meltingPoint: -219.67,
  hazards: "Altamente corrosivo",
  facts: ["Reactivo con casi todos los elementos", "Presente en fluoruros"]
},

// Cloro (Cl)
{
  symbol: "Cl",
  name: "Cloro",
  atomicNumber: 17,
  category: "nonmetal",
  subcategory: "halogen",
  color: "#A0FFA0",
  group: 17,
  period: 3,
  block: "p",
  state: "gas",
  electronConfig: "[Ne] 3s² 3p⁵",
  electronegativity: 3.16,
  atomicWeight: 35.45,
  discoveryYear: 1774,
  description: "Gas verde-amarillo utilizado como desinfectante.",
  uses: ["Agua potable", "Blanqueadores", "Plásticos (PVC)"],
  density: "3.2 g/L",
  meltingPoint: -101.5,
  hazards: "Tóxico y corrosivo",
  facts: ["Usado en la I Guerra Mundial como gas venenoso"]
},

// Bromo (Br)
{
  symbol: "Br",
  name: "Bromo",
  atomicNumber: 35,
  category: "nonmetal",
  subcategory: "halogen",
  color: "#A0FFA0",
  group: 17,
  period: 4,
  block: "p",
  state: "liquid",
  electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁵",
  electronegativity: 2.96,
  atomicWeight: 79.904,
  discoveryYear: 1826,
  description: "Único no metal líquido a temperatura ambiente.",
  uses: ["Fotografía", "Retardantes de fuego", "Medicinas"],
  density: "3.12 g/cm³",
  meltingPoint: -7.2,
  hazards: "Tóxico por inhalación o contacto",
  facts: ["Color rojo oscuro", "Nombre viene de 'hedor' en griego"]
},

// Yodo (I)
{
  symbol: "I",
  name: "Yodo",
  atomicNumber: 53,
  category: "nonmetal",
  subcategory: "halogen",
  color: "#A0FFA0",
  group: 17,
  period: 5,
  block: "p",
  state: "solid",
  electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁵",
  electronegativity: 2.66,
  atomicWeight: 126.9,
  discoveryYear: 1811,
  description: "Sólido brillante de color púrpura.",
  uses: ["Desinfectantes", "Suplementos", "Reactivos químicos"],
  density: "4.93 g/cm³",
  meltingPoint: 113.7,
  hazards: "Tóxico en grandes dosis",
  facts: ["Esencial para la tiroides", "Sublima fácilmente"]
},

// Astato (At)
{
  symbol: "At",
  name: "Astato",
  atomicNumber: 85,
  category: "nonmetal",
  subcategory: "halogen",
  color: "#00709a",
  group: 17,
  period: 6,
  block: "p",
  state: "solid",
  electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
  electronegativity: 2.2,
  atomicWeight: 210,
  discoveryYear: 1940,
  description: "Elemento radiactivo muy escaso.",
  uses: ["Investigación médica (cáncer)"],
  density: "~6.35 g/cm³ (estimado)",
  meltingPoint: ~302,
  hazards: "Altamente radiactivo",
  facts: ["Menos de 1g en la Tierra", "Nombre significa 'inestable'"]
},

// Tenesino (Ts)
{
  symbol: "Ts",
  name: "Tenesino",
  atomicNumber: 117,
  category: "unknown",
  subcategory: "halogen",
  color: "#CCCCCC",
  group: 17,
  period: 7,
  block: "p",
  state: "synthetic",
  electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵ (estimado)",
  electronegativity: "Desconocido",
  atomicWeight: 294,
  discoveryYear: 2010,
  description: "Elemento superpesado, extremadamente inestable.",
  uses: ["Solo investigación nuclear"],
  density: "Desconocida",
  meltingPoint: "Desconocido",
  hazards: "Radiactivo extremo",
  facts: ["Nombrado por Tennessee (EE.UU.)", "Sigue la línea de halógenos"]
},
// Helio (He)
{
  symbol: "He",
  name: "Helio",
  atomicNumber: 2,
  category: "nonmetal",
  subcategory: "noble_gas",
  color: "#CC99CC",
  group: 18,
  period: 1,
  block: "s",
  state: "gas",
  electronConfig: "1s²",
  electronegativity: "N/A",
  atomicWeight: 4.0026,
  discoveryYear: 1868,
  description: "Gas noble ligero e inerte.",
  uses: [
    "Refrigeración criogénica",
    "Globos y dirigibles",
    "Entornos controlados"
  ],
  density: "0.1786 g/L",
  meltingPoint: "-272.2°C",
  hazards: "Asfixiante en espacios cerrados",
  facts: [
    "Segundo elemento más abundante del universo",
    "Descubierto en el Sol antes que en la Tierra"
  ]
},

// Neón (Ne)
{
  symbol: "Ne",
  name: "Neón",
  atomicNumber: 10,
  category: "nonmetal",
  subcategory: "noble_gas",
  color: "#CC99CC",
  group: 18,
  period: 2,
  block: "p",
  state: "gas",
  electronConfig: "[He] 2s² 2p⁶",
  electronegativity: "N/A",
  atomicWeight: 20.1797,
  discoveryYear: 1898,
  description: "Gas noble incoloro, muy utilizado en iluminación.",
  uses: [
    "Letreros luminosos",
    "Tubo de vacío",
    "Refrigeración"
  ],
  density: "0.9002 g/L",
  meltingPoint: "-248.6°C",
  hazards: "Asfixiante en altas concentraciones",
  facts: [
    "Produce una luz rojiza en los tubos de neón",
    "Nombre del griego 'neos' (nuevo)"
  ]
},

// Argón (Ar)
{
  symbol: "Ar",
  name: "Argón",
  atomicNumber: 18,
  category: "nonmetal",
  subcategory: "noble_gas",
  color: "#CC99CC",
  group: 18,
  period: 3,
  block: "p",
  state: "gas",
  electronConfig: "[Ne] 3s² 3p⁶",
  electronegativity: "N/A",
  atomicWeight: 39.948,
  discoveryYear: 1894,
  description: "Gas noble abundante en la atmósfera terrestre.",
  uses: [
    "Protección en soldadura",
    "Ambientes inertes para lámparas y láseres",
    "Aislante térmico en ventanas"
  ],
  density: "1.784 g/L",
  meltingPoint: "-189.3°C",
  hazards: "Asfixiante",
  facts: [
    "Constituye cerca del 1% del aire",
    "Nombre del griego 'argos' (inactivo)"
  ]
},

// Kriptón (Kr)
{
  symbol: "Kr",
  name: "Kriptón",
  atomicNumber: 36,
  category: "nonmetal",
  subcategory: "noble_gas",
  color: "#CC99CC",
  group: 18,
  period: 4,
  block: "p",
  state: "gas",
  electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁶",
  electronegativity: "3.00",
  atomicWeight: 83.798,
  discoveryYear: 1898,
  description: "Gas noble pesado con aplicaciones en iluminación.",
  uses: [
    "Lámparas fluorescentes",
    "Fotografía de alta velocidad",
    "Investigación científica"
  ],
  density: "3.749 g/L",
  meltingPoint: "-157.4°C",
  hazards: "Puede causar asfixia",
  facts: [
    "Nombre del griego 'kryptos' (oculto)",
    "Utilizado en luces de aeropuerto"
  ]
},

// Xenón (Xe)
{
  symbol: "Xe",
  name: "Xenón",
  atomicNumber: 54,
  category: "nonmetal",
  subcategory: "noble_gas",
  color: "#CC99CC",
  group: 18,
  period: 5,
  block: "p",
  state: "gas",
  electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁶",
  electronegativity: "2.60",
  atomicWeight: 131.293,
  discoveryYear: 1898,
  description: "Gas noble denso y pesado, puede formar compuestos raros.",
  uses: [
    "Luces estroboscópicas",
    "Anestesia general",
    "Láseres"
  ],
  density: "5.894 g/L",
  meltingPoint: "-111.8°C",
  hazards: "Inerte pero puede causar narcosis",
  facts: [
    "Uno de los pocos gases nobles que puede formar compuestos",
    "Utilizado en motores de iones"
  ]
},

// Radón (Rn)
{
  symbol: "Rn",
  name: "Radón",
  atomicNumber: 86,
  category: "nonmetal",
  subcategory: "noble_gas",
  color: "#CC99CC",
  group: 18,
  period: 6,
  block: "p",
  state: "gas",
  electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
  electronegativity: "2.20",
  atomicWeight: 222,
  discoveryYear: 1900,
  description: "Gas noble radiactivo, producto de desintegración del uranio.",
  uses: [
    "Investigación médica (históricamente)",
    "Seguimiento de actividad sísmica"
  ],
  density: "9.73 g/L",
  meltingPoint: "-71°C",
  hazards: "Radiactivo, causa cáncer de pulmón",
  facts: [
    "Segundo causante de cáncer de pulmón después del tabaco",
    "Se acumula en sótanos mal ventilados"
  ]
},

// Oganesón (Og)
{
  symbol: "Og",
  name: "Oganesón",
  atomicNumber: 118,
  category: "nonmetal",
  subcategory: "noble_gas",
  color: "#CCCCCC",
  group: 18,
  period: 7,
  block: "p",
  state: "synthetic",
  electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶ (estimado)",
  electronegativity: "N/A",
  atomicWeight: 294,
  discoveryYear: 2002,
  description: "Elemento sintético superpesado, gas noble teórico.",
  uses: [
    "Investigación nuclear"
  ],
  density: "~5.0–10.0 g/cm³ (estimado)",
  meltingPoint: "Desconocido",
  hazards: "Extremadamente radiactivo",
  facts: [
    "Nombrado en honor al físico Yuri Oganessian",
    "Propiedades pueden diferir de los gases nobles típicos"
  ]
},
  ],
  semantics: [
    {
      symbol: "La",
      name: "Lantano",
      atomicNumber: 57,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "solid",
      electronConfig: "[Xe] 5d¹ 6s²",
      electronegativity: 1.10,
      atomicWeight: 138.91,
      discoveryYear: 1839,
      description: "Primer elemento de los lantánidos, usado en lentes y electrodos.",
      uses: ["Cristales ópticos", "Electrodos de baterías de hidruro metálico"],
      density: 6.145,
      meltingPoint: 920,
      hazards: "Moderadamente tóxico",
      facts: [
        "Es el primero de los lantánidos.",
        "Su nombre proviene del griego 'lanthanein', que significa 'oculto'."
      ]
    },
    {
      symbol: "Ce",
      name: "Cerio",
      atomicNumber: 58,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "solid",
      electronConfig: "[Xe] 4f¹ 5d¹ 6s²",
      electronegativity: 1.12,
      atomicWeight: 140.12,
      discoveryYear: 1803,
      description: "Elemento blando y dúctil, usado en catalizadores y vidrios resistentes al calor.",
      uses: ["Catalizadores automotrices", "Pulido de vidrios", "Aleaciones de encendedores"],
      density: 6.770,
      meltingPoint: 798,
      hazards: "Irritante en polvo fino",
      facts: [
        "Nombrado por el planeta enano Ceres.",
        "Uno de los lantánidos más abundantes en la Tierra."
      ]
    },
    {
      symbol: "Pr",
      name: "Praseodimio",
      atomicNumber: 59,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "solid",
      electronConfig: "[Xe] 4f³ 6s²",
      electronegativity: 1.13,
      atomicWeight: 140.91,
      discoveryYear: 1885,
      description: "Elemento blando de color plateado usado en imanes y vidrios de color.",
      uses: ["Vidrio de soldadura", "Imanes permanentes", "Coloración de cerámica"],
      density: 6.640,
      meltingPoint: 931,
      hazards: "Poco tóxico, pero debe manejarse con cuidado",
      facts: [
        "Su nombre significa 'gemelo verde'.",
        "Se utiliza para hacer lentes de protección para soldadores."
      ]
    },
    {
      symbol: "Nd",
      name: "Neodimio",
      atomicNumber: 60,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "solid",
      electronConfig: "[Xe] 4f⁴ 6s²",
      electronegativity: 1.14,
      atomicWeight: 144.24,
      discoveryYear: 1885,
      description: "Elemento raro usado en potentes imanes permanentes.",
      uses: ["Imanes de neodimio", "Láseres", "Auriculares y altavoces"],
      density: 7.007,
      meltingPoint: 1024,
      hazards: "Inflamable en polvo",
      facts: [
        "Los imanes de Nd-Fe-B son de los más fuertes conocidos.",
        "Se usa en micrófonos y discos duros."
      ]
    },
    {
      symbol: "Pm",
      name: "Prometio",
      atomicNumber: 61,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "synthetic",
      electronConfig: "[Xe] 4f⁵ 6s²",
      electronegativity: "N/A",
      atomicWeight: "(145)",
      discoveryYear: 1945,
      description: "Elemento radiactivo sintético con usos limitados.",
      uses: ["Fuente de energía en satélites", "Investigación científica"],
      density: 7.26,
      meltingPoint: 1100,
      hazards: "Altamente radiactivo",
      facts: [
        "No existe de forma natural en la Tierra.",
        "Nombrado en honor al titán griego Prometeo."
      ]
    },
    {
      symbol: "Sm",
      name: "Samario",
      atomicNumber: 62,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "solid",
      electronConfig: "[Xe] 4f⁶ 6s²",
      electronegativity: 1.17,
      atomicWeight: 150.36,
      discoveryYear: 1879,
      description: "Utilizado en imanes permanentes y reactores nucleares.",
      uses: ["Imanes SmCo", "Vidrios ópticos", "Control de barras nucleares"],
      density: 7.520,
      meltingPoint: 1072,
      hazards: "Moderadamente tóxico",
      facts: [
        "Los imanes de Samario son muy estables a altas temperaturas.",
        "Nombrado por el mineral samarskita."
      ]
    },
    {
      symbol: "Eu",
      name: "Europio",
      atomicNumber: 63,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "solid",
      electronConfig: "[Xe] 4f⁷ 6s²",
      electronegativity: 1.20,
      atomicWeight: 151.96,
      discoveryYear: 1901,
      description: "Usado en pantallas fluorescentes y lámparas LED.",
      uses: ["Televisores", "Tubos fluorescentes", "Reactores nucleares"],
      density: 5.243,
      meltingPoint: 822,
      hazards: "Reacciona fácilmente con agua y oxígeno",
      facts: [
        "Produce el color rojo en pantallas de televisión.",
        "Nombrado por Europa, continente europeo."
      ]
    },
    {
      symbol: "Gd",
      name: "Gadolinio",
      atomicNumber: 64,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "solid",
      electronConfig: "[Xe] 4f⁷ 5d¹ 6s²",
      electronegativity: 1.20,
      atomicWeight: 157.25,
      discoveryYear: 1880,
      description: "Usado en imagen por resonancia magnética (IRM) y blindajes.",
      uses: ["Contraste en IRM", "Barras de control", "Aleaciones metálicas"],
      density: 7.90,
      meltingPoint: 1313,
      hazards: "Moderadamente tóxico en polvo fino",
      facts: [
        "Posee propiedades magnéticas únicas.",
        "Nombrado por el químico finlandés Gadolin."
      ]
    },
    {
      symbol: "Tb",
      name: "Terbio",
      atomicNumber: 65,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "solid",
      electronConfig: "[Xe] 4f⁹ 6s²",
      electronegativity: 1.10,
      atomicWeight: 158.93,
      discoveryYear: 1843,
      description: "Usado en dispositivos electrónicos y pantallas.",
      uses: ["Pantallas de televisión", "Aleaciones magnéticas", "Dispositivos electrónicos"],
      density: 8.23,
      meltingPoint: 1356,
      hazards: "Manejo seguro recomendado",
      facts: [
        "Brilla verde bajo luz fluorescente.",
        "Nombrado por el pueblo sueco Ytterby."
      ]
    },
    {
      symbol: "Dy",
      name: "Disprosio",
      atomicNumber: 66,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "solid",
      electronConfig: "[Xe] 4f¹⁰ 6s²",
      electronegativity: 1.22,
      atomicWeight: 162.50,
      discoveryYear: 1886,
      description: "Elemento magnético usado en imanes de alto rendimiento.",
      uses: ["Imanes de turbinas eólicas", "Sistemas de frenado", "Reactores nucleares"],
      density: 8.55,
      meltingPoint: 1412,
      hazards: "Relativamente seguro en forma sólida",
      facts: [
        "Es vital en la fabricación de turbinas eólicas.",
        "Su nombre significa 'difícil de obtener'."
      ]
    },
    {
      symbol: "Ho",
      name: "Holmio",
      atomicNumber: 67,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "solid",
      electronConfig: "[Xe] 4f¹¹ 6s²",
      electronegativity: 1.23,
      atomicWeight: 164.93,
      discoveryYear: 1878,
      description: "Elemento con propiedades magnéticas únicas.",
      uses: ["Imanes", "Núcleos de transformadores", "Láseres médicos"],
      density: 8.80,
      meltingPoint: 1474,
      hazards: "Tóxico en forma de polvo",
      facts: [
        "Posee el mayor momento magnético de todos los elementos.",
        "Nombrado por Estocolmo (Holmia)."
      ]
    },
    {
      symbol: "Er",
      name: "Erbio",
      atomicNumber: 68,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "solid",
      electronConfig: "[Xe] 4f¹² 6s²",
      electronegativity: 1.24,
      atomicWeight: 167.26,
      discoveryYear: 1843,
      description: "Usado en telecomunicaciones y láseres médicos.",
      uses: ["Fibra óptica", "Láseres quirúrgicos", "Coloración de vidrio"],
      density: 9.07,
      meltingPoint: 1529,
      hazards: "Irritante leve",
      facts: [
        "Utilizado para amplificar señales ópticas.",
        "También descubierto en Ytterby, Suecia."
      ]
    },
    {
      symbol: "Tm",
      name: "Tulio",
      atomicNumber: 69,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "solid",
      electronConfig: "[Xe] 4f¹³ 6s²",
      electronegativity: 1.25,
      atomicWeight: 168.93,
      discoveryYear: 1879,
      description: "Elemento escaso usado en láseres y equipos médicos.",
      uses: ["Láseres de rayos X", "Equipos médicos", "Investigación científica"],
      density: 9.32,
      meltingPoint: 1545,
      hazards: "Poco tóxico",
      facts: [
        "El lantánido menos abundante en la Tierra.",
        "Nombre derivado de 'Thule', una tierra mítica del norte."
      ]
    },
    {
      symbol: "Yb",
      name: "Iterbio",
      atomicNumber: 70,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "solid",
      electronConfig: "[Xe] 4f¹⁴ 6s²",
      electronegativity: 1.10,
      atomicWeight: 173.05,
      discoveryYear: 1878,
      description: "Usado en láseres, relojes atómicos y aleaciones.",
      uses: ["Relojes atómicos", "Investigación en física cuántica", "Aleaciones metálicas"],
      density: 6.90,
      meltingPoint: 824,
      hazards: "Puede reaccionar con aire en forma pulverizada",
      facts: [
        "Crucial para relojes atómicos de alta precisión.",
        "También descubierto en el pueblo sueco Ytterby."
      ]
    },
    {
      symbol: "Lu",
      name: "Lutecio",
      atomicNumber: 71,
      category: "metal",
      subcategory: "lanthanide",
      color: "#a65580",
      group: null,
      period: 6,
      block: "f",
      state: "solid",
      electronConfig: "[Xe] 4f¹⁴ 5d¹ 6s²",
      electronegativity: 1.27,
      atomicWeight: 174.97,
      discoveryYear: 1907,
      description: "Último lantánido, usado en catálisis y tecnología médica.",
      uses: ["Tomografía por emisión de positrones (PET)", "Catalizadores", "Investigación científica"],
      density: 9.84,
      meltingPoint: 1663,
      hazards: "Poco tóxico, pero manejable con precaución",
      facts: [
        "Considerado el primer elemento del grupo 3 por algunos científicos.",
        "El más denso y caro de los lantánidos."
      ]
    },
    // Actinio (Ac)
{
  symbol: "Ac",
  name: "Actinio",
  atomicNumber: 89,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "f",
  state: "solid",
  electronConfig: "[Rn] 6d1 7s2",
  electronegativity: 1.1,
  atomicWeight: 227,
  discoveryYear: 1899,
  description: "Primer elemento de los actínidos, radiactivo y raro.",
  uses: ["Fuente de neutrones", "Investigación científica"],
  density: 10.07,
  meltingPoint: 1050,
  hazards: "Altamente radiactivo",
  facts: ["Su nombre viene del griego 'aktinos' que significa rayo"]
},

// Torio (Th)
{
  symbol: "Th",
  name: "Torio",
  atomicNumber: 90,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "f",
  state: "solid",
  electronConfig: "[Rn] 6d2 7s2",
  electronegativity: 1.3,
  atomicWeight: 232.04,
  discoveryYear: 1829,
  description: "Metal radiactivo usado como combustible nuclear.",
  uses: ["Combustible en reactores nucleares", "Aleaciones metálicas"],
  density: 11.72,
  meltingPoint: 1750,
  hazards: "Radiactivo",
  facts: ["Nombrado en honor al dios nórdico Thor"]
},

// Protactinio (Pa)
{
  symbol: "Pa",
  name: "Protactinio",
  atomicNumber: 91,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "f",
  state: "solid",
  electronConfig: "[Rn] 5f2 6d1 7s2",
  electronegativity: 1.5,
  atomicWeight: 231.04,
  discoveryYear: 1913,
  description: "Elemento radiactivo muy raro y tóxico.",
  uses: ["Investigación científica"],
  density: 15.37,
  meltingPoint: 1568,
  hazards: "Altamente tóxico y radiactivo",
  facts: ["Su nombre significa 'antes del actinio'"]
},

// Uranio (U)
{
  symbol: "U",
  name: "Uranio",
  atomicNumber: 92,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "f",
  state: "solid",
  electronConfig: "[Rn] 5f3 6d1 7s2",
  electronegativity: 1.38,
  atomicWeight: 238.03,
  discoveryYear: 1789,
  description: "Metal pesado usado principalmente como combustible nuclear.",
  uses: ["Energía nuclear", "Armas nucleares"],
  density: 18.95,
  meltingPoint: 1132,
  hazards: "Extremadamente radiactivo y tóxico",
  facts: ["Nombrado por el planeta Urano"]
},

// Neptunio (Np)
{
  symbol: "Np",
  name: "Neptunio",
  atomicNumber: 93,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "f",
  state: "solid",
  electronConfig: "[Rn] 5f4 6d1 7s2",
  electronegativity: 1.36,
  atomicWeight: 237,
  discoveryYear: 1940,
  description: "Elemento sintético, primer transuránico descubierto.",
  uses: ["Investigación nuclear", "Posible combustible nuclear"],
  density: 20.25,
  meltingPoint: 640,
  hazards: "Radiactivo",
  facts: ["Nombrado en honor al planeta Neptuno"]
},

// Plutonio (Pu)
{
  symbol: "Pu",
  name: "Plutonio",
  atomicNumber: 94,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "f",
  state: "solid",
  electronConfig: "[Rn] 5f6 7s2",
  electronegativity: 1.28,
  atomicWeight: 244,
  discoveryYear: 1940,
  description: "Elemento altamente radiactivo usado en armas y reactores.",
  uses: ["Armas nucleares", "Reactores nucleares"],
  density: 19.86,
  meltingPoint: 640,
  hazards: "Extremadamente radiactivo y tóxico",
  facts: ["Nombrado en honor al planeta Plutón"]
},

// Americio (Am)
{
  symbol: "Am",
  name: "Americio",
  atomicNumber: 95,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "f",
  state: "solid",
  electronConfig: "[Rn] 5f7 7s2",
  electronegativity: 1.3,
  atomicWeight: 243,
  discoveryYear: 1944,
  description: "Elemento sintético usado en detectores de humo.",
  uses: ["Detectores de humo", "Medición de densidad"],
  density: 12,
  meltingPoint: 1176,
  hazards: "Radiactivo",
  facts: ["Descubierto en EE.UU., de ahí su nombre"]
},

// Curio (Cm)
{
  symbol: "Cm",
  name: "Curio",
  atomicNumber: 96,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "f",
  state: "solid",
  electronConfig: "[Rn] 5f7 6d1 7s2",
  electronegativity: 1.3,
  atomicWeight: 247,
  discoveryYear: 1944,
  description: "Elemento radiactivo sintético, descubierto en los laboratorios de los Curie.",
  uses: ["Investigación científica", "Fuente de energía en sondas espaciales"],
  density: 13.51,
  meltingPoint: 1340,
  hazards: "Muy radiactivo",
  facts: ["Nombrado en honor a Marie y Pierre Curie"]
},

// Berkelio (Bk)
{
  symbol: "Bk",
  name: "Berkelio",
  atomicNumber: 97,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "f",
  state: "solid",
  electronConfig: "[Rn] 5f9 7s2",
  electronegativity: 1.3,
  atomicWeight: 247,
  discoveryYear: 1949,
  description: "Elemento sintético producido en aceleradores.",
  uses: ["Investigación científica"],
  density: 14.78,
  meltingPoint: 986,
  hazards: "Radiactivo",
  facts: ["Descubierto en Berkeley, EE.UU."]
},

// Californio (Cf)
{
  symbol: "Cf",
  name: "Californio",
  atomicNumber: 98,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "f",
  state: "solid",
  electronConfig: "[Rn] 5f10 7s2",
  electronegativity: 1.3,
  atomicWeight: 251,
  discoveryYear: 1950,
  description: "Elemento radiactivo usado como fuente de neutrones.",
  uses: ["Fuente de neutrones", "Radiografía industrial"],
  density: 15.1,
  meltingPoint: 900,
  hazards: "Extremadamente radiactivo",
  facts: ["Nombrado por el estado de California"]
},

// Einstenio (Es)
{
  symbol: "Es",
  name: "Einstenio",
  atomicNumber: 99,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "f",
  state: "solid",
  electronConfig: "[Rn] 5f11 7s2",
  electronegativity: "N/A",
  atomicWeight: 252,
  discoveryYear: 1952,
  description: "Elemento descubierto tras explosiones nucleares.",
  uses: ["Investigación científica"],
  density: 8.84,
  meltingPoint: 860,
  hazards: "Muy radiactivo",
  facts: ["Nombrado en honor a Albert Einstein"]
},

// Fermio (Fm)
{
  symbol: "Fm",
  name: "Fermio",
  atomicNumber: 100,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "f",
  state: "solid",
  electronConfig: "[Rn] 5f12 7s2",
  electronegativity: "N/A",
  atomicWeight: 257,
  discoveryYear: 1952,
  description: "Elemento producido en pruebas nucleares.",
  uses: ["Solo para investigación"],
  density: "Desconocido",
  meltingPoint: 1527,
  hazards: "Radiactivo",
  facts: ["Nombrado por Enrico Fermi"]
},

// Mendelevio (Md)
{
  symbol: "Md",
  name: "Mendelevio",
  atomicNumber: 101,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "f",
  state: "solid",
  electronConfig: "[Rn] 5f13 7s2",
  electronegativity: "N/A",
  atomicWeight: 258,
  discoveryYear: 1955,
  description: "Elemento nombrado por el creador de la tabla periódica.",
  uses: ["Investigación científica"],
  density: "Desconocido",
  meltingPoint: "Desconocido",
  hazards: "Radiactivo",
  facts: ["Nombrado por Dmitri Mendeléyev"]
},

// Nobelio (No)
{
  symbol: "No",
  name: "Nobelio",
  atomicNumber: 102,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "f",
  state: "solid",
  electronConfig: "[Rn] 5f14 7s2",
  electronegativity: "N/A",
  atomicWeight: 259,
  discoveryYear: 1958,
  description: "Elemento sintético nombrado en honor a Alfred Nobel.",
  uses: ["Investigación"],
  density: "Desconocido",
  meltingPoint: 827,
  hazards: "Radiactivo",
  facts: ["Nombrado por Alfred Nobel, creador del Premio Nobel"]
},

// Lawrencio (Lr)
{
  symbol: "Lr",
  name: "Lawrencio",
  atomicNumber: 103,
  category: "metal",
  subcategory: "actinide",
  color: "#ff3ae1",
  group: null,
  period: 7,
  block: "d",
  state: "solid",
  electronConfig: "[Rn] 5f14 7s2 7p1",
  electronegativity: "N/A",
  atomicWeight: 266,
  discoveryYear: 1961,
  description: "Último actínido, altamente inestable.",
  uses: ["Investigación"],
  density: "Desconocido",
  meltingPoint: "Desconocido",
  hazards: "Radiactivo",
  facts: ["Nombrado en honor a Ernest O. Lawrence"]
},
  ],
  deprecated: [
    { abbr: "App", name: "applet", href: "/html/introduccion/etiquetas-html-obsoletas/" },
    { abbr: "Acr", name: "acronym", href: "/html/introduccion/etiquetas-html-obsoletas/" },
    { abbr: "Fr", name: "frame", href: "/html/introduccion/etiquetas-html-obsoletas/" },
    { abbr: "Fnt", name: "font", href: "/html/introduccion/etiquetas-html-obsoletas/" },
    { abbr: "Big", name: "big", href: "/html/introduccion/etiquetas-html-obsoletas/" },
    { abbr: "Blk", name: "blink", href: "/html/introduccion/etiquetas-html-obsoletas/" },
    { abbr: "Cen", name: "center", href: "/html/introduccion/etiquetas-html-obsoletas/" },
    { abbr: "Mrq", name: "marquee", href: "/html/introduccion/etiquetas-html-obsoletas/" },
  ]
};
