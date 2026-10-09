(function () {
const settings = {
  company: {
    name: "MIRA ÉLEVAGE",
    shortName: "MIRA",
    location: "Karpala, Ouagadougou, Burkina Faso",
    phone: "+226 70 93 40 50",
    phoneHref: "+22670934050",
    whatsappNumber: "22670934050",
    email: "",
    website: "",
    tagline: "Élevage, agroéquipement, formation et solutions professionnelles"
  },
  nav: [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#a-propos" },
    { label: "Élevage", href: "#elevage" },
    { label: "MIRA Agro", href: "#agro" },
    { label: "Équipements", href: "#equipements" },
    { label: "Formations", href: "#formations" },
    { label: "Contact", href: "#contact" }
  ]
};

const images = {
  farmField: "https://images.unsplash.com/photo-1509099381441-ea3c0cf98b94?auto=format&fit=crop&w=1200&q=80",
  mechanization: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Farm_mechanization_in_Oromia.jpg?width=1000",
  milling: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Milling_machine_processing_grain_flour.jpg?width=1000",
  poultry: "https://commons.wikimedia.org/wiki/Special:Redirect/file/A_poultry_farm_of_Prof._Basaza_in_Najjeera.jpg?width=1000",
  feed: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_feed_made_from_farm_products.jpg?width=900",
  training: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Training_women_farmers_on_climate_smart_innovations_in_Nyando,_Kenya_%289417196732%29.jpg?width=1000",
  tractor: "https://commons.wikimedia.org/wiki/Special:Redirect/file/African_farmer_taking_tractor_out.jpg?width=1000",
  community: "https://images.unsplash.com/photo-1509099955921-f0b4ed0c175c?auto=format&fit=crop&w=1000&q=80"
};

const elevageCards = [
  { icon: "◫", title: "Élevage avicole", description: "Accompagnement pour les projets liés à l’élevage avicole et à la.production.", status: "À découvrir" },
  { icon: "⌁", title: "Productions", description: "Solutions pour organiser et accompagner les différentes productions de votre projet.", status: "À découvrir" },
  { icon: "◇", title: "Produits d’élevage", description: "Des produits liés aux besoins de l’élevage, selon les besoins du projet.", status: "À découvrir" },
  { icon: "↗", title: "Services", description: "Accompagnement, conseil et mise en œuvre des actions nécessaires.", status: "À découvrir" },
  { icon: "✦", title: "Accompagnement", description: "Un suivi professionnel pour mieux structurer et avancer dans votre activité.", status: "À découvrir" }
];

const equipment = [
  { name: "Machine agricole", category: "Machines", description: "Équipement professionnel adapté aux besoins de l’agriculture et de la production.", availability: "Demander la disponibilité", price: "Prix sur devis", image: images.mechanization },
  { name: "Équipement agroalimentaire", category: "Équipements", description: "Matériel destiné aux besoins de la transformation et de l’agroalimentaire.", availability: "Demander la disponibilité", price: "Prix sur devis", image: images.milling },
  { name: "Équipement d’élevage", category: "Équipements", description: "Solutions et matériels liés aux besoins des projets d’élevage.", availability: "Demander la disponibilité", price: "Prix sur devis", image: images.poultry },
  { name: "Aliments pour volailles", category: "Produits", description: "Fabrication de produits alimentaires pour les volailles, selon les specifications du projet.", availability: "Demander la disponibilité", price: "Prix sur devis", image: images.feed }
];

const products = [
  { name: "Produits d’élevage", note: "Produits(confirmés ultérieurement)" },
  { name: "Équipements", note: "Équipement professionnels" },
  { name: "Machines", note: "Matériel agricole" },
  { name: "Autres produits", note: "À compléter" }
];

const services = [
  { name: "Conseil", note: "Accompagnement professionnel" },
  { name: "Accompagnement", note: "Suivi des projets" },
  { name: "Installation", note: "Mise en place des solutions" },
  { name: "Formation", note: "Sensibilisation et apprentissage" },
  { name: "Livraison", note: "Livraison selon les besoins" },
  { name: "Autres services", note: "À compléter" }
];

const formations = [
  { title: "Formation professionnelle", description: "Programme, durée, lieu et date à compléter avant publication.", duration: "À définir", location: "À définir", session: "À définir", tariff: "À définir" },
  { title: "Formation technique", description: "Contenu de formation adapté aux besoins professionnels du participant.", duration: "À définir", location: "À définir", session: "À définir", tariff: "À définir" }
];

const projects = [
  { title: "Installation professionnelle", category: "Installations", description: "Projet d’installation de solutions adaptées aux besoins du terrain et des objectifs.", date: "À compléter", image: images.tractor },
  { title: "Élevage & production", category: "Élevage", description: "Accompagnement de projets liés à l’élevage et à la production.", date: "À compléter", image: images.poultry },
  { title: "Équipement professionnel", category: "Équipements", description: "Équipement destiné aux besoins agricoles et professionnels.", date: "À compléter", image: images.milling },
  { title: "Formation pratique", category: "Formations", description: "Programme de formation destiné à renforcer les compétences professionnelles.", date: "À compléter", image: images.training }
];

const gallery = [
  { src: images.poultry, category: "Élevage", title: "Élevage avicole en Ouganda" },
  { src: images.mechanization, category: "Machines", title: "Mécanisation agricole en Éthiopie" },
  { src: images.milling, category: "Équipements", title: "Moulin à céréales en Tanzanie" },
  { src: images.training, category: "Formations", title: "Formation de femmes agricultrices au Kenya" },
  { src: images.tractor, category: "Installations", title: "Tracteur agricole en Afrique" },
  { src: images.community, category: "Événements", title: "Rencontre communautaire en Afrique" }
];

const news = [
  { title: "Le futur du contenu éditorial", excerpt: "Une structure prête à recevoir les publications, actualités et annexes de MIRA ÉLEVAGE.", date: "À compléter", category: "Contenu", image: images.community },
  { title: "Accompagnement des projets agricoles", excerpt: "Une présentation des solutions nécessaires pour mieux structurer un projet professionnel.", date: "À compléter", category: "Projet", image: images.farmField }
];

const faq = [
  { category: "Présentation", question: "Qui est MIRA ÉLEVAGE ?", answer: "MIRA ÉLEVAGE accompagne les acteurs de l’élevage, de l’agroéquipement, des produits et de la formation. Son approche vise à proposer des solutions utiles et adaptées aux besoins réels des projets." },
  { category: "Élevage et productions", question: "Quels types de projets MIRA intervient-il ?", answer: "Les projets peuvent concerner l’élevage, les productions agricoles, l’équipement, les matériels et les services utiles au bon développement de l’activité." },
  { category: "Équipements et matériels", question: "Peut-on demander un devis pour des machines ou équipements ?", answer: "Oui. Les demandes de devis peuvent être formulées pour mieux comprendre le besoin, la localisation et les solutions à mettre en place." },
  { category: "Formations et CIFEA", question: "Comment obtenir des informations sur les formations ?", answer: "Les informations relatives à la formation peuvent être demandées directement via le formulaire de contact ou le formulaire de devis, afin d’obtenir un accompagnement personnalisé." },
  { category: "Commandes, devis et renseignements", question: "Comment faire une demande de renseignement ?", answer: "Le plus simple est d’utiliser le formulaire de devis ou de contacter MIRA directement par téléphone ou WhatsApp pour préciser votre besoin." },
  { category: "Contact et localisation", question: "Où se trouve MIRA ÉLEVAGE ?", answer: "MIRA ÉLEVAGE est située à Karpala, à Ouagadougou, au Burkina Faso. Le site peut être consulté pour retrouver la localisation exacte et obtenir un itinéraire." }
];

const testimonials = [
  { quote: "La section témoignages sera alimentée une fois les retours authentiques validés pour rester fidèle à l'expérience réelle de nos clients et apprenants.", author: "À compléter", role: "Client, partenaire ou apprenant", context: "Avis vérifié à publier" },
  { quote: "Les retours d’expérience seront ajoutés progressivement pour refléter les réussites, les projets et les échanges liés à MIRA ÉLEVAGE.", author: "À compléter", role: "Partenaire / client", context: "À publier après validation" },
  { quote: "Cette zone est conçue pour accueillir des avis réels et utiles, sans inventer d'expérience ni d'identité.", author: "À compléter", role: "Apprenant / client", context: "Témoignage authentique à venir" }
];

const team = [
  { name: "Profil à publier", role: "Direction / service", specialty: "À compléter", initials: "PP" },
  { name: "Profil à publier", role: "Élevage et productions", specialty: "À compléter", initials: "PP" },
  { name: "Profil à publier", role: "Équipements et matériels", specialty: "À compléter", initials: "PP" },
  { name: "Profil à publier", role: "Formation / accompagnement", specialty: "À compléter", initials: "PP" }
];

globalThis.MIRA_DATA = { settings, elevageCards, equipment, products, services, formations, projects, gallery, news, faq, testimonials, team };
})();
