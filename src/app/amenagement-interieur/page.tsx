// import React from 'react'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import BannerPrestation from '../components/Prestations/BannerPrestation'
// import AboutPrestation from '../components/Prestations/AboutPrestation'
// import PrestationDetailsCarousel from '../components/Prestations/PrestationDetailsCarousel'

// const index = () => {
//   const prestations = [
//         {
//         image:'./amenagement_plan.jpg',
//         title:'Analyse de l’espace et planification de l’aménagement',
//         subtitle :'',
//         description:[
//           "Évaluation de vos besoins en matière d’agencement et d’espace de rangement.",
//           "Conception de plans pour maximiser l'utilisation de chaque pièce.",
//           "Proposition de mobilier adapté à vos contraintes et à votre style de vie.",
//           "Optimisation des espaces de vie pour plus de confort et de fonctionnalité."
//         ]},
//         {
//         className:'inverted',
//         image:'./amenagement meuble.jpg',
//         title:'Mise en œuvre de l’aménagement intérieur',
//         description:[
//           "Installation de meubles sur mesure, étagères, et solutions de rangement.",
//           "Agencement des espaces pour un flux harmonieux et fluide dans chaque pièce.",
//           "Création d’espaces de vie pratiques et agréables en tenant compte de vos habitudes."
//         ]},
//         {
//         image:'./amenagement_fini.jpg',
//         title:'Finitions et touches finales de l’aménagement',
//         description:[
//           "Installation des éléments décoratifs : rideaux, tapis, éclairage.",
//           "Optimisation des espaces avec des accessoires décoratifs pour une atmosphère unique.",
//           "Conseils d'entretien pour conserver l'agencement fonctionnel et esthétique à long terme."
//         ]}
//   ]
//   return (
//     <section>
//       <Header />
//       <BannerPrestation 
//       image='./chambre1.png'
//       className='inverted'
//       title='Aménagement intérieur'
//       desciption='Apportez une nouvelle vie à vos espaces grâce à des peintures intérieures de qualité professionnelle.' />
//       <AboutPrestation
//         image='./chambre2.png'
//         title='A’Decor, spécialiste en Aménagement intérieur basé à Noyon, dans l’Oise'
//         description="<p>Nous optimisons l'espace intérieur de votre logement pour en faire un lieu pratique et agréable. Nous vous aidons à aménager des pièces
//         fonctionnelles, avec des rangements sur mesure et un agencement qui vous ressemble.</p>
//         <p>Grâce à nos conseils en aménagement et décoration, nous transformons vos espaces pour les rendre plus accueillants, tout en
//         maximisant leur utilisation.</p>
//         <p>Créez un intérieur harmonieux et fonctionnel avec nos solutions d'aménagement sur mesure.</p>
//             " />
//       <PrestationDetailsCarousel prestations={prestations} />
//       <Footer />
//     </section>
//   )
// }

// export default index