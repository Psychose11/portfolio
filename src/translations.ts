const fr = {
  nav: { about: 'À propos', projects: 'Projets', skills: 'Compétences', contact: 'Contact' },
  ui: { language: 'Langue', light: 'Mode clair', dark: 'Mode sombre' },
  hero: {
    greeting: 'Bonjour, je suis',
    role: 'Ingénieur Logiciel & Développeur Fullstack',
    intro:
    "Diplômé de l’Ecole Nationale d’Informatique de Fianarantsoa, je conçois, sécurise , optimise et référence de sites et des applications web sur mesure pour des entreprises locales et internationales.",
    viewWork: 'Voir mes réalisations',
    downloadCV: 'Télécharger mon CV',
    badge: 'SEO',
  },
  projects: {
    title: 'Réalisations',
    intro:
      "Des plateformes en production que j'ai conçues et développées pour des entreprises internationales : e-commerce, location, annuaire d'événements et mise en relation.",
    tech: 'Stack technique :',
    visit: 'Visiter le site',
    items: [
      {
        desc: "Plateforme de partage de piscines à La Réunion : les propriétaires louent leur bassin en fixant prix, capacité et règles, et les visiteurs trouvent le cadre idéal pour un anniversaire, un barbecue ou un EVJF. Comptes hôtes et visiteurs, messagerie directe et location couverte par une assurance. Conception fullstack, référencement et mise en production.",
        features: ['Comptes hôtes & visiteurs', 'Recherche par occasion', "Messagerie avec l'hôte", 'Location assurée'],
      },
      {
        desc: "Agenda des sorties et événements de La Réunion : concerts, spectacles, brocantes, festivals et activités en famille. Recherche avancée par date, budget, catégorie et région, publication d'événements par les organisateurs et offres partenaires. Développement fullstack et stratégie SEO.",
        features: ['Filtres date, budget & région', "Publication d'événements", 'Comptes utilisateurs', 'SEO technique'],
      },
      {
        desc: "Boutique en ligne de cartons de déménagement neufs et recyclés, avec des kits prêts à l'emploi du studio à la grande maison. Panier, codes promo, paiement en ligne, livraison sur toute l'île ou retrait au Tampon. Développement, référencement local et suivi des performances.",
        features: ['Kits & cartons', 'Panier & code promo', 'Paiement en ligne', 'Livraison ou retrait'],
      },
      {
        desc: "Site de location de matériel événementiel à La Réunion : bars, photo booth 360, tapis rouge, fontaine à chocolat et plus encore. Catalogue en ligne, demandes de devis, informations de livraison et de retrait. Développement et maintenance.",
        features: ['Catalogue de produits', 'Demande de devis', 'Livraison & retrait', 'Responsive'],
      },
    ],
  },
  skills: {
    title: 'Expertise',
    intro:
      "Ingénieur et développeur fullstack, je couvre toute la chaîne : conception, développement, sécurisation, hébergement et référencement.",
    highlights: [
      { title: 'Ingénieur logiciel', text: "En poste dans une société, en charge de la conception et de l'évolution de plateformes web." },
      { title: 'Master 2 – ENI', text: "Diplômé de l'École Nationale d'Informatique, avec une solide base en algorithmique et en systèmes." },
      { title: 'Spécialiste SEO', text: 'Visibilité, performance et référencement naturel, du code technique jusqu’au contenu.' },
    ],
    cards: [
      {
        title: 'Développement Fullstack',
        desc: "Applications web et mobiles, du front à la base de données.",
        tags: ['React', 'Alpine.js', 'PHP', 'Node.js', 'MySQL', 'Tailwind CSS', 'Flutter', 'Dart'],
      },
      {
        title: 'SEO, Design & Webmastering',
        desc: 'Sites visibles, soignés et faciles à administrer.',
        tags: ['Référencement naturel', 'SEO technique', 'Données structurées', 'Design UI/UX', 'Webmastering'],
      },
      {
        title: 'Sécurité & Hébergement',
        desc: 'Mise en production fiable et protégée.',
        tags: ['Hébergement OVH', 'Sécurisation', 'Cryptage', "Systèmes d'exploitation"],
      },
      {
        title: 'Automatisation & Données',
        desc: 'Scripts et outils pour automatiser et collecter des données.',
        tags: ['Python', 'Scripting', 'Web scraping', 'Automatisation'],
      },
      {
        title: 'Outils & Collaboration',
        desc: "Travail en équipe et livraison continue.",
        tags: ['Git', 'GitHub', 'Shell/Bash', 'Déploiement'],
      },
      {
        title: 'Recherche & Algorithmique',
        desc: "Passion pour l'optimisation, l'électronique et la théorie de la complexité.",
        tags: ["Algorithmes d'optimisation", 'Électronique', 'Complexité (P vs NP)'],
      },
    ],
  },
  contact: {
    title: 'Travaillons ensemble',
    intro:
      "Développeur souhaitant collaborer : parlons de votre projet.",
    connectTitle: 'Un projet en tête ?',
    connectText:
      "Site vitrine, e-commerce, plateforme sur mesure, référencement, sécurisation ou hébergement : je vous accompagne de l'analyse du besoin à la mise en ligne. Ouvert également aux collaborations entre développeurs.",
    email: 'E-mail',
    phone: 'Téléphone',
    location: 'Localisation',
    follow: 'Suivez-moi',
    fullName: 'Nom complet',
    emailAddress: 'Adresse e-mail',
    subject: 'Objet',
    message: 'Message',
    phName: 'Votre nom',
    phSubject: "Création d'un site e-commerce",
    phMessage: 'Décrivez votre projet et vos délais...',
    send: 'Envoyer le message',
  },
  footer: { made: 'Fait avec', using: 'avec React', rights: 'Tous droits réservés.' },
};

export type Dict = typeof fr;

const en: Dict = {
  nav: { about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
  ui: { language: 'Language', light: 'Light mode', dark: 'Dark mode' },
  hero: {
    greeting: "Hi, I'm",
    role: 'Software Engineer & Fullstack Developer',
    intro:
    "A software engineer graduated from the Ecole Nationale d’Informatique Fianarantsoa, I design, secure, and optimize custom websites and web applications for local and international businesses.",
    viewWork: 'View My Work',
    downloadCV: 'Download CV',
    badge: 'SEO',
  },
  projects: {
    title: 'Work',
    intro:
      'Live platforms I designed and built for international businesses : e-commerce, rentals, an events guide and a marketplace.',
    tech: 'Tech stack:',
    visit: 'Visit website',
    items: [
      {
        desc: "A pool-sharing platform in Réunion Island: owners rent out their pool by setting price, capacity and rules, and visitors find the perfect setting for a birthday, a barbecue or a bachelorette party. Host and visitor accounts, direct messaging and insurance-covered rentals. Fullstack design, SEO and deployment.",
        features: ['Host & visitor accounts', 'Search by occasion', 'Messaging with the host', 'Insured rentals'],
      },
      {
        desc: "An events and outings guide for Réunion Island: concerts, shows, flea markets, festivals and family activities. Advanced search by date, budget, category and region, event publishing for organizers and partner deals. Fullstack development and SEO strategy.",
        features: ['Date, budget & region filters', 'Event publishing', 'User accounts', 'Technical SEO'],
      },
      {
        desc: "An online shop for new and recycled moving boxes, with ready-to-use kits from studio to large house. Cart, promo codes, online payment, island-wide delivery or pickup in Le Tampon. Development, local SEO and performance monitoring.",
        features: ['Kits & boxes', 'Cart & promo code', 'Online payment', 'Delivery or pickup'],
      },
      {
        desc: "An event equipment rental website in Réunion Island: bars, 360 photo booth, red carpet, chocolate fountain and more. Online catalogue, quote requests, delivery and pickup information. Development and maintenance.",
        features: ['Product catalogue', 'Quote request', 'Delivery & pickup', 'Responsive'],
      },
    ],
  },
  skills: {
    title: 'Expertise',
    intro:
      'As an engineer and fullstack developer, I cover the whole chain: design, development, security, hosting and search optimization.',
    highlights: [
      { title: 'Software engineer', text: 'Working in a company, in charge of designing and evolving web platforms.' },
      { title: "Master's (M2) – ENI", text: "Graduate of the École Nationale d'Informatique, with a strong foundation in algorithms and systems." },
      { title: 'SEO specialist', text: 'Visibility, performance and organic search, from technical code to content.' },
    ],
    cards: [
      {
        title: 'Fullstack Development',
        desc: 'Web and mobile applications, from front end to database.',
        tags: ['React', 'Alpine.js', 'PHP', 'Node.js', 'MySQL', 'Tailwind CSS', 'Flutter', 'Dart'],
      },
      {
        title: 'SEO, Design & Webmastering',
        desc: 'Visible, polished and easy-to-manage websites.',
        tags: ['Organic search (SEO)', 'Technical SEO', 'Structured data', 'UI/UX design', 'Webmastering'],
      },
      {
        title: 'Security & Hosting',
        desc: 'Reliable and protected deployments.',
        tags: ['OVH hosting', 'Hardening & security', 'Encryption', 'Operating systems'],
      },
      {
        title: 'Automation & Data',
        desc: 'Scripts and tools to automate tasks and collect data.',
        tags: ['Python', 'Scripting', 'Web scraping', 'Automation'],
      },
      {
        title: 'Tools & Collaboration',
        desc: 'Teamwork and continuous delivery.',
        tags: ['Git', 'GitHub', 'Shell/Bash', 'Deployment'],
      },
      {
        title: 'Research & Algorithms',
        desc: 'A passion for optimization, electronics and complexity theory.',
        tags: ['Optimization algorithms', 'Electronics', 'Complexity (P vs NP)'],
      },
    ],
  },
  contact: {
    title: "Let's Work Together",
    intro: 'Developer looking to collaborate: let’s talk about your project.',
    connectTitle: 'Have a project in mind?',
    connectText:
      'Showcase site, e-commerce, custom platform, SEO, security or hosting: I support you from requirements analysis to going live. Also open to collaborations between developers.',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    follow: 'Follow Me',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    subject: 'Subject',
    message: 'Message',
    phName: 'Your Name',
    phSubject: 'E-commerce website',
    phMessage: 'Describe your project and timeline...',
    send: 'Send Message',
  },
  footer: { made: 'Made with', using: 'using React', rights: 'All rights reserved.' },
};

const mg: Dict = {
  nav: { about: 'Momba ahy', projects: 'Tetikasa', skills: 'Fahaizana', contact: 'Fifandraisana' },
  ui: { language: 'Fiteny', light: 'Maody mazava', dark: 'Maody maizina' },
  hero: {
    greeting: 'Salama, izaho no',
    role: 'Injeniera Rindrambaiko & Mpamolavola Fullstack',
    intro:
      "Injeniera avy any amin'ny Ecole Nationale d'Informatique Fianarantsoa, mamolavola, misahana ny fiarovana ny rindrin'afo ary manatsara ny fisehoan'ny tranonkala sy rindrambaiko web mifanaraka amin'ny filan'ny orinasa eto antoerana sy ny any ivelany.",
    viewWork: 'Jereo ny asako',
    downloadCV: 'Alaivo ny CV',
    badge: 'SEO',
  },
  projects: {
    title: 'Asa vita',
    intro:
      "Rindrambaiko miasa tanteraka, noforoniko sy novolavolaiko ho an'ny orinasa any ivelany : varotra an-tserasera, fanofana, tetiandro sy alimanaka ary fampifandraisana.",
    tech: 'Teknolojia nampiasaina :',
    visit: 'Hitsidika ny tranonkala',
    items: [
      {
        desc: "Sehatra fizarana dobo filomanosana any La Réunion : ny tompon'ny dobo dia mametra ny vidiny, ny isan'olona ary ny fitsipika, ary ny mpitsidika kosa mahita ny toerana mety amin'ny fetim-bohitra, barbecue na EVJF. Misy kaonty ho an'ny tompony sy ny mpitsidika, hafatra mivantana ary fanofana voaro fiantohana. Fanamboarana fullstack, SEO ary fampiasana.",
        features: ['Kaonty tompony & mpitsidika', 'Fikarohana araka ny hetsika', "Hafatra amin'ny tompony", 'Fanofana voaro fiantohana'],
      },
      {
        desc: "Tetiandro ny hetsika sy ny fivoahana any La Réunion : konserà, fampisehoana, brocante, festival ary hetsika ho an'ny fianakaviana. Fikarohana mandroso araka ny daty, teti-bola, sokajy ary faritra, famoahana hetsika ho an'ny mpikarakara ary tolotra avy amin'ny mpiara-miasa. Fampandrosoana fullstack sy paikady SEO.",
        features: ['Sivana daty, teti-bola & faritra', 'Famoahana hetsika', 'Kaonty mpampiasa', 'SEO ara-teknika'],
      },
      {
        desc: "Fivarotana an-tserasera boaty kartaona fifindra trano vaovao sy averina nampiasaina, miaraka amin'ny kit vonona ampiasaina avy amin'ny studio ka hatramin'ny trano lehibe. Harona, kaody fihenam-bidy, fandoavam-bola an-tserasera, fandefasana manerana ny nosy na fakana any Le Tampon. Fampandrosoana, SEO eo an-toerana ary fanaraha-maso ny fahombiazana.",
        features: ['Kit & boaty kartaona', 'Harona & kaody', 'Fandoavam-bola an-tserasera', 'Fandefasana na fakana'],
      },
      {
        desc: "Tranonkala fanofana fitaovana ho an'ny hetsika any La Réunion : bar, photo booth 360, karipetra mena, loharano sôkôla sy ny hafa. Katalaogy an-tserasera, fangatahana tolo-bidy, fampahalalana momba ny fandefasana sy ny fakana. Fampandrosoana sy fikojakojana.",
        features: ['Katalaogy vokatra', 'Fangatahana tolo-bidy', 'Fandefasana & fakana', "Mirindra amin'ny efijery rehetra"],
      },
    ],
  },
  skills: {
    title: 'Fahaiza-manao',
    intro:
      'Injeniera sady mpamolavola rindrambaiko aho, ary mitantana ny dingana rehetra : fanamboarana, fampandrosoana, fiarovana, fampiantranoana ary fanatsarana ny fisehoana amin’ny fitadiavana.',
    highlights: [
      { title: 'Injeniera rindrambaiko', text: "Miasa ao amin'ny orinasa iray, miandraikitra ny fanamboarana sy ny fivoaran'ny sehatra web." },
      { title: 'Master 2 – ENI', text: "Nahazo diplaoma tao amin'ny École Nationale d'Informatique, miaraka amin'ny fototra matanjaka amin'ny algorithme sy ny rafitra." },
      { title: 'Manam-pahaizana SEO', text: "Fahitana, fahombiazana ary fisehoana voajanahary amin'ny fitadiavana, manomboka amin'ny kaody ka hatramin'ny votoaty." },
    ],
    cards: [
      {
        title: 'Fampandrosoana Fullstack',
        desc: "Rindrambaiko web sy finday, manomboka amin'ny frontend ka hatramin'ny tahiry.",
        tags: ['React', 'Alpine.js', 'PHP', 'Node.js', 'MySQL', 'Tailwind CSS', 'Flutter', 'Dart'],
      },
      {
        title: 'SEO, Design & Webmastering',
        desc: 'Tranonkala hita, voaravaka ary mora tantanana.',
        tags: ['SEO (fisehoana voajanahary)', 'SEO ara-teknika', 'Angona voarafitra', 'Design UI/UX', 'Webmastering'],
      },
      {
        title: 'Fiarovana & Fampiantranoana',
        desc: 'Fampiasana azo itokisana sy voaro.',
        tags: ['Fampiantranoana OVH', 'Fiarovana', 'Fanafenana (cryptage)', 'Rafitra fiasa'],
      },
      {
        title: 'Automatisation & Angona',
        desc: 'Script sy fitaovana hanaovana asa ho azy sy hanangonana angona.',
        tags: ['Python', 'Scripting', 'Web scraping', 'Automatisation'],
      },
      {
        title: 'Fitaovana & Fiaraha-miasa',
        desc: 'Fiaraha-miasa ho an’ny ekipa sy fandefasana tsy tapaka.',
        tags: ['Git', 'GitHub', 'Shell/Bash', 'Fampiasana'],
      },
      {
        title: 'Fikarohana & Algorithme',
        desc: "Mitia ny fanatsarana, ny elektronika ary ny teoria momba ny fahasarotana.",
        tags: ['Algorithme fanatsarana', 'Elektronika', 'Fahasarotana (P vs NP)'],
      },
    ],
  },
  contact: {
    title: 'Miaraka isika miasa',
    intro: "Mpamolavola te hiara-miasa : andao hiresaka momba ny tetikasanao.",
    connectTitle: 'Manana tetikasa ve ianao?',
    connectText:
      "Tranonkala fampisehoana, varotra an-tserasera, sehatra manokana, SEO, fiarovana na fampiantranoana : miaraka aminao aho manomboka amin'ny famakafakana ny filana ka hatramin'ny fampiasana. Misokatra ihany koa amin'ny fiaraha-miasa eo amin'ny mpamolavola.",
    email: 'Mailaka',
    phone: 'Telefaona',
    location: 'Toerana',
    follow: 'Araho aho',
    fullName: 'Anarana feno',
    emailAddress: 'Adiresy mailaka',
    subject: 'Lohahevitra',
    message: 'Hafatra',
    phName: 'Ny anaranao',
    phSubject: 'Tranonkala varotra an-tserasera',
    phMessage: 'Faritano ny tetikasanao sy ny fe-potoana...',
    send: 'Alefaso ny hafatra',
  },
  footer: { made: "Natao tamin'ny", using: "tamin'ny React", rights: 'Zo rehetra voatokana.' },
};

export const translations = { fr, en, mg };
export type Lang = keyof typeof translations;