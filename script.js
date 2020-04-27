//ABOVE 19 QUIZ

// select elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const questionEN = document.getElementById("questionEN");
const questionSI = document.getElementById("questionSI");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

//questions and answers
let questionsList_1 = //cosmology
     [
          {
               questionEN: "Cosmology is the part of science regarded with the ___________ ",
               questionSI: "විශ්ව න්‍යාය විද්‍යාව යනු විද්‍යාවේ කොටසක් වන අතර එමගින් විස්තර වනුයේ ",
               imgSrc: "1",
               choiceA: "Formation of Planets ",
               choiceB: "Formation of Stars ",
               choiceC: "Formation of Universe",
               choiceD: "Formation of Black holes ",
               correct: "C"
          },
          {
               questionEN: "Which of the understanding is not an inference of Hubble’s law",
               questionSI: "හබල් නියමය හා සමග එකග නොවන සිද්ධාන්තයක් වනුයේ ",
               imgSrc: "1",
               choiceA: "The universe is expanding ",
               choiceB: "We are in the center of the universe ",
               choiceC: "The universe had a beginning ",
               choiceD: "The universe was once denser than it is now ",
               correct: "B"
          },
          {
               questionEN: "The rate of expansion of the universe is __________",
               questionSI: "විශ්වය ප්‍රසාරණය වනුයේ ",
               imgSrc: "1",
               choiceA: "Decelerating ",
               choiceB: "Accelerating ",
               choiceC: "Constant ",
               choiceD: "Zero ",
               correct: "B"
          },
          {
               questionEN: "Leptons and quarks are called the survivors.",
               questionSI: "Leptons සහා quarks ආරම්භයේ සිට පැමිණෙන අංශුන් වේ ",
               imgSrc: "1",
               choiceA: "It is true for leptons ",
               choiceB: "It is true for quarks",
               choiceC: "True for leptons and quarks",
               choiceD: "False for both particles ",
               correct: "C"
          },
          {
               questionEN: "The theory which postulates that the universe works as a heart beating in rhythms is _________",
               questionSI: "විශ්වයේ ක්‍රියාකාරිත්වය හදවතක ක්‍රියාවට සමාන වන බව කියවෙන සිද්ධාන්තය වනුයේ ",
               imgSrc: "1",
               choiceA: "Oscillating Universe Theory ",
               choiceB: "Slowing down theory ",
               choiceC: "Big crunch theory ",
               choiceD: "Big bang theory ",
               correct: "A"
          },
          {
               questionEN: "Most of the helium of the universe was produced __________",
               questionSI: "විශ්වයේ පවතින බොහෝමයක් හීලියම් නිර්මාණය වුයේ ",
               imgSrc: "1",
               choiceA: "In stars ",
               choiceB: " In quasars ",
               choiceC: " At the time the cosmic background radiation was formed ",
               choiceD: " First ten minutes of the expansion ",
               correct: "D"
          },
          {
               questionEN: "Nova is thought to occur in a system, X, in which a white-dwarf star orbits a red giant star. What is X?",
               questionSI: "නෝවා හටගන්නේ X පද්ධතියක වන අතර සුදු වාමන තාරකාවක් රතු යෝධ තාරකාවක් වටා ගමන් කරයි. X යනු කුමක්ද?",
               imgSrc: "1",
               choiceA: "“Triple System",
               choiceB: "Binary system ",
               choiceC: "Compact system ",
               choiceD: "Congenial system ",
               correct: "B"
          },
          {
               questionEN: "When astronomers look at distant galaxies, what sort of motion do they see?",
               questionSI: "තාරකා විද්‍යායින්  මන්දාකිණි නිරීක්ෂණය කරන විට, ඔවුන් මන්දාකිණි වල කුමන ආකාරයේ චලිතයක් දකිනු ලබයිද?",
               imgSrc: "1",
               choiceA: "The Galaxies are all spinning rapidly ",
               choiceB: "The galaxies are all moving rapidly toward us ",
               choiceC: "The galaxies are all moving rapidly away from us ",
               choiceD: "Galaxies are falling toward three centers in opposite parts of the sky. ",
               correct: "C"
          },
          {
               questionEN: "How do astronomers detect the motion of galaxies?",
               questionSI: "මන්දාකිණි වල චලිතය මැන ගැනීමට බහුවල යොදා ගනු ලබන ක්‍රමයක් වනුයේ ",
               imgSrc: "1",
               choiceA: "The shift in spectrum lines of the galaxies ",
               choiceB: "The steady dimming of the galaxy's light ",
               choiceC: "The rapid brightening of the galaxy's light ",
               choiceD: "The disappearance of the most distant galaxies, one by one ",
               correct: "A"
          },
          {
               questionEN: "How was the CMB created?",
               questionSI: "CMB විකිරණය නිර්මාණය වී ඇත්තේ ",
               imgSrc: "1",
               choiceA: "The fusion of H into He by the first stars ",
               choiceB: "The radioactive decay of uranium ",
               choiceC: "The formation of quarks in the big bang ",
               choiceD: "The burst of radiation from the big bang as it cooled toward 10,000 K ",
               correct: "D"
          },
          {
               questionEN: "The Einstein universe presented by Einstein in 1917 is a/an ------------universe model ",
               questionSI: "1917 දී  අයින්ස්ටයින් විසින් විස්තර කරනු ලැබූ විශ්වය වනුයේ ",
               imgSrc: "1",
               choiceA: "Contracting, hyper spherical ",
               choiceB: "  expanding, hyper spherical ",
               choiceC: " static, hyperspherical ",
               choiceD: " expanding, hypercritical ",
               correct: "C"
          },
          {
               questionEN: "The universe is expanding. The rate of this expansion is called",
               questionSI: "වර්තමාන විශ්වය ප්‍රසාරණවේ. මෙම ප්‍රසාරණ සිග්‍රතාවය හදුන්වනු ලබන්නේ ",
               imgSrc: "1",
               choiceA: "Instrinsic Luminosty ",
               choiceB: "Hubble constant",
               choiceC: "Redshift",
               choiceD: "Entropy ",
               correct: "B"
          },
          {
               questionEN: "What is the approximate size of the observable universe?",
               questionSI: "නිරීක්ෂණාත්මක විශ්වයේ ප්‍රමාණය අසන්න වශයෙන් ",
               imgSrc: "1",
               choiceA: "46.5 billion Ly ",
               choiceB: "13.8 billion LY ",
               choiceC: "93.0 billion LY ",
               choiceD: "27.6 billion LyZero ",
               correct: "C"
          },
          {
               questionEN: "Which one of the following star types is NOT used to estimate extragalactic distances?",
               questionSI: "අන්තර් මන්දාකිණි අතර දුර මැනගැනීමට භාවිතා  වන දුරදර්ශකයක් නොවන්නේ? ",
               imgSrc: "1",
               choiceA: "Neutron Stars ",
               choiceB: "RR Lyrae ",
               choiceC: "Type Ia Supernovae",
               choiceD: "Cepheid Variables ",
               correct: "A"
          },
          {
               questionEN: "The concept that on a large scale galaxies are distributed evenly throughout the universe is called:",
               questionSI: "විශ්වය තුල විශාල පරිමාණයක් තුල මන්දාකිණි එකම අයුරින් විසිරිලා පැවතීම වනුයේ ",
               imgSrc: "1",
               choiceA: "Critical density ",
               choiceB: "Homogeneity",
               choiceC: "Lyman Alpha Forest ",
               choiceD: "Cosmological constant ",
               correct: "B"
          },
          {
               questionEN: "In the Big Bang model, the Big Bang produced mainly three elements - hydrogen, helium, and.................",
               questionSI: "මහා පිපුරුමෙන් පසුව විශ්වයේ ඇති වූ ප්‍රධාන මුලද්‍රව්‍ය තුන වනුයේ හයිඩ්‍රජන්, හීලියම් සහ .................... ",
               imgSrc: "1",
               choiceA: "Argon",
               choiceB: "Nitrogen ",
               choiceC: "Lithium ",
               choiceD: "Carbon  ",
               correct: "C"
          },
          {
               questionEN: "Which piece of evidence supports the Big Bang theory?",
               questionSI: "පහත සදහන් නිරීක්ෂණ අතරින් මහා පිපුරුමට වඩාත් සමීප සාක්ෂිය වනුයේ ",
               imgSrc: "1",
               choiceA: "The more distant galaxies are moving the slowest ",
               choiceB: "Galaxies and space is not changing ",
               choiceC: "The more distant galaxies are moving the quickest ",
               choiceD: "The more distant galaxies are moving towards us ",
               correct: "C"
          }
];

let questionsList_2 =//general_astronomy
     [
          {
               questionEN: "Which of these solar system bodies is the smallest ?",
               questionSI: "මෙම සෞරග්‍රහ මණ්ඩල වස්තු අතරින් කුඩාම වස්තුව කුමක් ද ?",
               imgSrc: "1",
               choiceA: "Earth - පෘථිවිය",
               choiceB: "Uranus -යුරේනස්",
               choiceC: "Venus - සිකුරු ",
               choiceD: "Ganymede -ගැනිමිඩ් ",
               correct: "D"
          },
          {
               questionEN: "Which element is responsible for a yellow colored meteor ?",
               questionSI: "උල්කාපාතයක කහ පැහැයට හේතුවන මූලද්‍රව්‍යය කුමක් ද ?",
               imgSrc: "1",
               choiceA: "Iron - අයන් ",
               choiceB: "Nitrogen -නයිට්රජන් ",
               choiceC: "Phosphorus - පොස්පරස් ",
               choiceD: "Beryllium - බෙරිලියම්  ",
               correct: "A"
          },
          {
               questionEN: "Which meteor shower falls in November ? ",
               questionSI: "නොවැම්බර් මාසයේදී ඇදහැලෙන උල්කාපාත වර්ෂාව කුමක් ද ?",
               imgSrc: "1",
               choiceA: "Geminids - ජෙමිනිඩ්ස් ",
               choiceB: "Leonids - ලියෝනිඩ්ස් ",
               choiceC: "Orionids - ඔරියෝනිඩ්ස් ",
               choiceD: "Lyrids - ලයිරිඩ්ස් ",
               correct: "B"
          },
          {
               questionEN: "First man to ride a rover on the Moon was, ",
               questionSI: "සද මත ප්‍රථම වරට රෝවරයක් පැදවූයේ කවුරුන් ද ?",
               imgSrc: "1",
               choiceA: "Alan Sheppard - ඇලන් ෂෙපඩ්",
               choiceB: "Neil Armstrong - නීල් ආම්ස්ට්රෝන් ",
               choiceC: "Edwin Aldrin- එඩ්වින් ඕල්ඩ්රින් ",
               choiceD: "David Scott - ඩේවිඩ් ස්කොට් ",
               correct: "D"
          },
          {
               questionEN: "A Lunar eclipse is occurring on a,",
               questionSI: "චන්ද්‍රග්‍රහණයක්  සිදුවන්නේ,",
               imgSrc: "1",
               choiceA: "Full Moon day - පුර පසළොස්වක දවසකය ",
               choiceB: "First Quarter day - පුර අටවක  දවසකය ",
               choiceC: "Third Quarter day - අව අටවක දවසකය ",
               choiceD: "Waxing Crescent day - පිරෙන නුපුන් සදැති දවසකය ",
               correct: "A"
          },
          {
               questionEN: "A Solar eclipse is occurring on a,",
               questionSI: "සූර්යග්‍රහණයක් සිදුවන්නේ,",
               imgSrc: "1",
               choiceA: "Full Moon day - පුර පසළොස්වක දවසකය ",
               choiceB: "New Moon day - අමාවක දවසකය ",
               choiceC: "First Quarter day - පුර අටවක  දවසකය ",
               choiceD: "Third Quarter day - අව අටවක දවසකය ",
               correct: "B"
          },
          {
               questionEN: "What is the brightest star located on the northern celestial hemisphere ?",
               questionSI: "උතුරු ඛගෝල අර්ධගෝලයෙහි පිහිටා ඇති දීප්තිමත්ම තාරකාව කුමක් ද?",
               imgSrc: "1",
               choiceA: "Betelguese - බෙටල්ජූස් ",
               choiceB: "Polaris - පෝලාරිස් ",
               choiceC: "Bellatrix - බෙලාට්රික්ස් ",
               choiceD: "Arcturus - ආක්ටූරස් ",
               correct: "D"
          },
          {
               questionEN: "Which spacecraft first visited Pluto ?",
               questionSI: "ප්ලූටෝ වෙත ගිය ප්‍රථම යානය කුමක් ද?",
               imgSrc: "1",
               choiceA: "Galileo",
               choiceB: "Cassini-Huygens ",
               choiceC: "Juno",
               choiceD: "New Horizons ",
               correct: "D"
          },
          {
               questionEN: "On which zone/sphere of the Sun, sun spots are located ?",
               questionSI: "සූර්යයාගේ කුමන කලාපයෙහි සූර්යලප දැකගත හැකිවේ ද ?",
               imgSrc: "1",
               choiceA: "Chromosphere - වර්ණගෝලයෙහි ",
               choiceB: "Corona - කොරෝනාවෙහි ",
               choiceC: "Photosphere - ප්රභාගෝලයෙහි ",
               choiceD: "Radiative Zone - විකිරණ කලාපයෙහි ",
               correct: "C"
          },
          {
               questionEN: "What’s the closet Galilean moon for the Jupiter ?",
               questionSI: "බ්රහස්පති ග්‍රහලොවට ආසන්නතම ගැලීලියානු චන්ද්‍රයා කුමක් ද ?",
               imgSrc: "1",
               choiceA: "Europa - යුරෝපා ",
               choiceB: "IO - අයෝ ",
               choiceC: "Ganymede - ගැනිමිඩ් ",
               choiceD: "Callisto - කැලිස්ටෝ ",
               correct: "B"
          },
          {
               questionEN: "How many dwarf planets in our Solar System ?",
               questionSI: "අපගේ සෞරග්‍රහ මණ්ඩලය තුළ වාමන ග්‍රහලෝක ගණන වන්නේ?",
               imgSrc: "1",
               choiceA: "3",
               choiceB: "5",
               choiceC: "7",
               choiceD: "8",
               correct: "B"
          },
          {
               questionEN: "What was the name of the first exoplanet discovered ?",
               questionSI: "සෞරග්‍රහ මණ්ඩලයෙන් පිටත සොයාගත් ප්‍රථම බාහිර් ග්‍රහලොව කුමක් ද?",
               imgSrc: "1",
               choiceA: "Kepler 22b",
               choiceB: "51 Pegasi b",
               choiceC: "55 Cancri e",
               choiceD: "55 Cancri c",
               correct: "B"
          },
          {
               questionEN: "1 Parsec equals to,",
               questionSI: "පාසෙක් එකක් සමාන වන්නේ,",
               imgSrc: "1",
               choiceA: "3.26 Astronomical Units - නක්ෂත්‍ර ඒකක 3.26",
               choiceB: "206265 Astronomical Units - නක්ෂත්‍ර ඒකක 206265 ",
               choiceC: "63240 Astronomical Units - නක්ෂත්‍ර ඒකක 63240",
               choiceD: "100,000 Astronomical Units - නක්ෂත්‍ර ඒකක 100,000",
               correct: "B"
          },
          {
               questionEN: "How old is the Earth ?",
               questionSI: "පෘථිවිය බිහිවී දැනට කොපමණ කල් ගතවී ඇත් ද?",
               imgSrc: "1",
               choiceA: "4.5 Billion years - අවුරුදු බිලියන 4.5",
               choiceB: "3.2 Million years - අවුරුදු මිලියන 3.2",
               choiceC: "7.2 Billion years - අවුරුදු බිලියන 7.2",
               choiceD: "45 Million years - අවුරුදු මිලියන 45  ",
               correct: "A"
          },
          {
               questionEN: "TNO stands for, ",
               questionSI: "TNO යන්නෙහි දිගු යෙදුම වන්නේ ,",
               imgSrc: "1",
               choiceA: "Totally Neutralized Object",
               choiceB: "Trans Neptunian Object",
               choiceC: "Total Neutral Object",
               choiceD: "Transformed Natural Object",
               correct: "B"
          },
          {
               questionEN: "Who was the first person to accurately calculate the mass of the Earth ?",
               questionSI: "පෘථිවියෙහි ස්කන්ධය ප්‍රථම වරට නිවැරදිව ගණනය කළේ කවුරුන් ද?",
               imgSrc: "1",
               choiceA: "Henry Cavendish - හෙන්රි කැවෙන්ඩිෂ්",
               choiceB: "Isaac Newton - අයිසැක් නිව්ටන් ",
               choiceC: "Albert Einstein - ඇල්බට් අයින්ස්ටයින් ",
               choiceD: "Eratosthenes - එරටොස්තිනස් ",
               correct: "A"
          },
          {
               questionEN: "What type is our own galaxy ?",
               questionSI: "අපගේ චක්‍රාවාටය කුමන වර්ගයේ එකක් ද?",
               imgSrc: "1",
               choiceA: "Elliptical - ඉලිප්සියාකාර",
               choiceB: "Spiral - සර්පිලාකාර ",
               choiceC: "Barred Spiral - යෂ්ටි සහිත සර්පිලාකාර ",
               choiceD: "Irregular - අක්රමවත් ",
               correct: "C"
          },
          {
               questionEN: "At what time the full moon can be seen directly above your head (zenith)?",
               questionSI: "පූර්ණ චන්ද්රයා කෙළින්ම හිස මුදුනට  උඩින් දැකගත හැකිවන වේලාව කුමක් ද?",
               imgSrc: "1",
               choiceA: "6am - පෙරවරු 6",
               choiceB: "6pm - පස්වරු 6 ",
               choiceC: "12pm - පස්වරු 12",
               choiceD: "9pm - පස්වරු 9 ",
               correct: "C"
          },
];

 let questionsList_3 = // observation
[{
               questionEN: "Identify the asterism shown below.", 
               questionSI: "මෙම තාරකා රටාව හදුනාගන්න.",
               imgSrc: "imgO/1.png",
               choiceA: "Bootes - බූට්ස් ",
               choiceB: "Auriga - ඔරිගා",
               choiceC: "Maui's Hook - මෞවීගේ කොක්ක ",
               choiceD: "Keyhole - යතුරුසිදුර",
               correct: "A"
          }, {
               questionEN: "Which of the following star doesn't belong to either Summer Triangle or the Winter Triangle?", 
               questionSI: "ගිම්හාන හෝ ශිශිර ත්රිකෝණයට  අයිති තාරකාවක් නොවන්නේ කුමක්ද?",
               imgSrc: "1",
               choiceA: "Procyon ",
               choiceB: "Altair ",
               choiceC: "Rigel ",
               choiceD: "Betelgeuse ",
               correct: "C"
          }, {
               questionEN: "Which of the following constellation can be used to find the West?", 
               questionSI: "පහත තාරකා රාශි අතරින් බටහිර  දිශාව සෙවීමට භාවිත කිරීමට හැකි තාරකා රාශිය කුමක්ද?",
               imgSrc: "1",
               choiceA: "Scorpius",
               choiceB: "Cygnus ",
               choiceC: "Orion",
               choiceD: "Leo",
               correct: "C"
          }, {
               questionEN: "Where does the \"Large Magellanic Cloud\" located?",
               questionSI: "මහා මැගලන් වලාව පිහිටා තිබෙන තාරකා රාශිය කුමක්ද?",
               imgSrc: "1",
               choiceA: "Mensa - මෙන්සා ",
               choiceB: "Carina- කැරීනා ",
               choiceC: "Hydrus- හයිඩ්රස්",
               choiceD: "Centaurus- සෙන්ටෝරස් ",
               correct: "A"
          }, {
               questionEN: "Identify the nebula shown below.", 
               questionSI: "මෙම ඡායාරූපය හදුනාගන්න.",
               imgSrc: "imgO/2.png",
               choiceA: "Ring nebula ",
               choiceB: "Dumbbell Nebula",
               choiceC: "Little Dumbell Nebula",
               choiceD: " Owl nebula",
               correct: "D"
          }, {
               questionEN: "Identify the nebula shown below.", 
               questionSI: "මෙම ඡායාරූපය හදුනාගන්න.",
               imgSrc: "imgO/3.png",
               choiceA: "Ring Nebula ",
               choiceB: "Dumbbell Nebula",
               choiceC: "Little Dumbell Nebula",
               choiceD: "Owl nebula",
               correct: "B"
          }, {
               questionEN: "Identify the telescope shown below.", 
               questionSI: "පහත ඡායාරූපය හදුනාගන්න.",
               imgSrc: "imgO/4.png",
               choiceA: "Five hundred meter Aperture Spherical Telescope",
               choiceB: "Atacama Large Millimeter/submillimeter Array",
               choiceC: "Arecibo observatory",
               choiceD: "Green Bank radio telescope",
               correct: "C"
          }, {
               questionEN: "Which telescope type uses mirrors as a part?", 
               questionSI: "දර්පණ භාවිත කරන දුරේක්ෂය වර්ගය කුමක්ද?",
               imgSrc: "1",
               choiceA: "Terrestrial telescope",
               choiceB: "Keplerian telescope",
               choiceC: "Galilean telescope",
               choiceD: "Coude telescope",
               correct: "B"
          }, {
               questionEN: "Which of the following telescopes has not explored the CMBR?", 
               questionSI: " තරංග පසුබිම් විකිරණ අධ්යනය කරන දුරේක්ෂයක් නොවන්නේ?ප්‍රශ්නය සිංහලෙන්",
               imgSrc: "1",
               choiceA: "Compton observatory  ",
               choiceB: "COBE observatory  ",
               choiceC: "WMAP observatory  ",
               choiceD: "Plank observatory  ",
               correct: "A"
          }, {
               questionEN: "What is this special phenomenon?", 
               questionSI: " රූපයේ දැක්වෙන ආචරණය හදුනාගන්.",
               imgSrc: "imgO/5.png",
               choiceA: " Baily's beads effect ",
               choiceB: " Cherenkov effect",
               choiceC: " Zeeman effect ",
               choiceD: " Diamond ring effect ",
               correct: "A"
          }, {
               questionEN: "What is this special phenomenon?", 
               questionSI: " රූපයේ දැක්වෙන ආචරණය හදුනාගන්.ප්‍රශ්නය සිංහලෙන්",
               imgSrc: "imgO/6.png",
               choiceA: " Aurora ",
               choiceB: " Green flash",
               choiceC: " Lens flare",
               choiceD: " Lenticular clouds",
               correct: "B"
          }, {
               questionEN: "Which of the following filters can be used to reduce light pollution caused by the street lights?", 
               questionSI: " වීදි පහන් වලින් ඇතිවන ආලෝක දූෂණ බාදාව අවම කරගැනීම සදහා භාවිත කල හැකි පෙරහන කුමක්ද?",
               imgSrc: "1",
               choiceA: "Calcium filter- කැල්සියම් පෙරහන",
               choiceB: " Sodium filter- සෝඩියම් පෙරහන",
               choiceC: " Hydrogen filter - හයිඩ්රජන් පෙරහන ",
               choiceD: " Oxygen filter - ඔක්සිජන් පෙරහන ",
               correct: "B"
           },
          //  {
          //      questionEN: "What is the celestial sphere ? ", 
          //      questionSI: " ඛගෝලය යනු කුමක්ද? ",
          //      imgSrc : "1",
          //      choiceA: "It represents a belief in an Earth - centered universe, and hence is no longer considered to have any use. ",
          //      choiceB: " It is a model of how the stars are arranged in the sky relative to our Sun, which is in the middle of the sphere.",
          //      choiceC: " The celestial sphere is a model that shows the true locations of the Sun and a few thousand of the nearest stars.",
          //      choiceD: " The celestial sphere is a representation of how the sky looks as seen from Earth. ",
          //      correct: "D"
          //  },
          //  {
          //      questionEN: "Which of the following statements does not use term angular size or angular distance correctly ? ", 
          //      questionSI: " පහත ප්රකාශයන් අතර නිවැරදි නොවන ප්රකාශය තෝරන්න. ",
          //      imgSrc : "1",
          //      choiceA: " The angular size of the Sun is about the same as that of the Moon.",
          //      choiceB: " The angular distance between those two bright stars in the sky is about 2 meters..",
          //      choiceC: " The angular distance between those two houses in the distance is 30 degrees.",
          //      choiceD: " You can use your outstretched hand against the sky to estimate angular sizes and angular distances.",
          //      correct: "C"
          //  },
           {
               questionEN: " Lunar eclipses can occur only during a ….",
               questionSI: " චන්ද්ර ග්රහණයක් සිදුවිය හැකි දිනයක් වනුයේ ",
               imgSrc : "1",
               choiceA: " Full moon - පුර පසලොස්වක  ",
               choiceB: " First quarter moon - අව අටවක ",
               choiceC: " third quarter moon - පුර අටවක ",
               choiceD: " new moon - අමාවක ",
               correct: "A"
          }, {
               questionEN: "How long is a solar cycle ? ", 
               questionSI: " සූර්ය චක්රයක් යනු ",
               imgSrc : "1",
               choiceA: "11 years ",
               choiceB: " 11 months ",
               choiceC: " 22 years ",
               choiceD: " 22 months ",
               correct: "A"
          }, {
               questionEN: ".It's 6 am and the Moon is at its highest point in your sky. What is the Moon's phase ",
               questionSI: "උදෑසන 6ට චන්ද්රයා අහසේ උපරිම ඉහලින් පිහිටා තිබේ නම් චනචන්ද්රයාගේ කලාව කුමක්ද ? ",
               imgSrc: "1",
               choiceA: "Full - පුර පසලොස්වක  ",
               choiceB: " Third quarter - අව අටවක ",
               choiceC: " First quarter - පුර අටවක ",
               choiceD: " New- අමාවක",
               correct: "B"
          }, {
               questionEN: "What can be observed by the Virgo observatory ? ", 
               questionSI: " Virgo  නිරීක්ශනාගාරයේ නිරීක්ෂණය කරන්නේ?",
               imgSrc : "1",
               choiceA: " Cosmic microwave background radiation ",
               choiceB: " Neutrino particles ",
               choiceC: " Gravitational waves ",
               choiceD: " Alpha particles",
               correct: "C"
          } 
     ];
     
//shuffle
let arrayShuffle = function (arry) {
     let newPos, temp;
     for (let i = (arry.length - 1); i > 0; i--) {
          newPos = Math.floor(Math.random() * (i + 1));
          temp = arry[i];
          arry[i] = arry[newPos];
          arry[newPos] = temp;
     }
     return arry;
};

let questions_1 = arrayShuffle(questionsList_1);
let questions_2 = arrayShuffle(questionsList_2);
let questions_3 = arrayShuffle(questionsList_3);

let questions_1_slice = questions_1.slice(0, 20);
let questions_2_slice = questions_2.slice(0, 20);
let questions_3_slice = questions_3.slice(0, 10); 

//select from randomized array and add to another array
let questionsTOT = [].concat(questions_1_slice, questions_2_slice,questions_3_slice);

let questions = arrayShuffle(questionsTOT);

// variables
const lastQuestion = 39;
let runningQuestion = 0;
let count_sec = 60;
let count_min = 14;
let count = 900;
let guageCount = 0;
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / count;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
     let q = questions[runningQuestion];
     questionNo.innerHTML = "<p>" + "Question " + (runningQuestion + 1) + " of 40" +"</p>";
     questionEN.innerHTML = "<p>" + q.questionEN + "</p>";
     questionSI.innerHTML = "<p>" + q.questionSI + "</p>";
     if (q.imgSrc !== "1")
     {
          qImg.innerHTML = "<img src=" + q.imgSrc + ">";
          document.getElementById("qImg").style.display = "block";
          document.getElementById("questionNo").style.width = "400px";
          document.getElementById("questionNo").style.left = "250px";
          document.getElementById("questionEN").style.width = "400px";
          document.getElementById("questionEN").style.left = "250px";
          document.getElementById("questionSI").style.width = "400px";
          document.getElementById("questionSI").style.left = "250px";
     }
     choiceA.innerHTML = q.choiceA;
     choiceB.innerHTML = q.choiceB;
     choiceC.innerHTML = q.choiceC;
     choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
     start.style.display = "none";
     renderQuestion();
     quiz.style.display = "block";
     renderProgress();
     renderCounter();
     TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
     document.getElementById("container").style.backgroundImage = "url('back2.png')";
}

//preventRefresh();

// render progress
function renderProgress() {
     for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
          progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
          qIndex.style = "<preventRefresh>" + runningQuestion + "</p>";
     }
}

// counter render
function renderCounter() {
     if (count > 0) {
          count--;
          count_sec--;
          timeGauge.style.width = (900 - count) * gaugeUnit + "px";
          if (count_sec == -1) {
               count_min--;
               count_sec = 59;
          }
          if (count_sec == 60 || 0) {
               counter.innerHTML = count_min + ':' + '00';
          }
          if (count_sec >= 10 && count_sec < 60) {
               counter.innerHTML = count_min + ':' + count_sec;
          }
          if (count_sec < 10) {
               counter.innerHTML = count_min + ':' + '0' + count_sec;
          }
     }
     else {
          // end the quiz and show the score
          clearInterval(TIMER);
          scoreRender();
     }
}

// checkAnwer
function checkAnswer(answer) {
     document.getElementById("qImg").style.display = "none";
     document.getElementById("questionNo").style.width = "680px";
     document.getElementById("questionNo").style.left = "35px";
     document.getElementById("questionEN").style.width = "680px";
     document.getElementById("questionEN").style.left = "35px";
     document.getElementById("questionSI").style.width = "680px";
     document.getElementById("questionSI").style.left = "35px";
     if (answer == questions[runningQuestion].correct) {
          // answer is correct
          score++;
          // change progress color to green
          answerIsCorrect();
     } else {
          // answer is wrong
          // change progress color to red
          answerIsWrong();
     }
     if (runningQuestion < lastQuestion) {
          runningQuestion++;
          renderQuestion();
     } else {
          // end the quiz and show the score
          clearInterval(TIMER);
          scoreRender();
     }
}

 // answer is correct
function answerIsCorrect() {
     document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

 // answer is Wrong
function answerIsWrong() {
     document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
     scoreDiv.style.display = "block";

     // calculate the amount of question percent answered by the user
     const scorePerCent = Math.round(100 * score / 30);

     scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
     document.getElementById("quiz").style.display = "none";
     document.getElementById("start").style.display = "none";
     document.getElementById("ended").style.display = "block";
}

function preventRefresh()
{
     if ((performance.navigation.type == 1) || (performance.navigation.type == 2) || (performance.navigation.type == 255))
     {
     clearInterval(TIMER);
     scoreRender();
     }
}
















