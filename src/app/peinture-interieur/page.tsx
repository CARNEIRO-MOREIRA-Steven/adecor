import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerPrestation from '../components/Prestations/BannerPrestation'
import AboutPrestation from '../components/Prestations/AboutPrestation'
import PrestationRealisations from '../components/Prestations/PrestationRealisations'
import PrestationDetails from '../components/Prestations/PrestationDetails'
// import PrestationDetailsCarousel from '../components/Prestations/PrestationDetailsCarousel'

const index = () => {
  // const prestations = [
  //   {
  //     image: './preparation_mur.jpg',
  //     title: 'Préparation et soins des surfaces',
  //     description: [
  //       "Diagnostic des murs et identification des besoins spécifiques.",
  //       "Nettoyage des surfaces : Lessivage et élimination des résidus.",
  //       "Préparation des supports : Enduits de dégrossissage, traitement anti-humidité, et pose de produits d'apprêt.",
  //       "Ponçage : Uniformisation des surfaces pour une finition lisse."
  //     ]
  //   },
  //   {
  //     image: './peinture_mur.jpg',
  //     title: 'Application et finitions',
  //     className :'inverted',
  //     description: [
  //       "Application de sous-couches adaptées à chaque surface.",
  //       "Peinture murale : Couleurs modernes ou classiques selon vos envies.",
  //       "Pose de revêtements muraux (papier peint, toile de verre).",
  //       "Finitions : Traitement des boiseries et des plinthes pour un résultat impeccable."
  //     ]
  //   },
  //   {
  //     image: './choix_peinture.jpg',
  //     title: 'Expertise et qualité',
  //     description: [
  //       "Peinture mécanisée (airless) pour des surfaces grandes et une application uniforme.",
  //       "Choix des peintures : Peintures écologiques, haute couvrance et résistances.",
  //       "Une expertise validée par plusieurs années d'expérience et des certifications professionnelles."
  //     ]
  //   }
  // ];

  return (
    <section>
      <Header />
      <BannerPrestation 
      image='./peinture2.png'
      title='Peinture interieure'
      className=''
      desciption='Apportez une nouvelle vie à vos espaces grâce à des peintures intérieures de qualité professionnelle.' />
        <PrestationRealisations 
        image='./peinture2.png' 
        image2='./toilette.webp'
        image3='./interieur1.jpg'
        />
      <AboutPrestation
        title='A’Decor, votre Peintre décorateur professionnel à Noyon dans l’Oise'
        description="<p>A la recherche d’un artisan peintre pour peindre l’intérieur de votre logement ou de vos locaux ? . Nos experts en peinture interviennent dans un rayon de 40 km autour de Noyon, dans l’Oise et l'Aisne disposant de toutes les compétences pour réaliser vos souhaits tels que :</p>
        <ul>
        <li>La peinture de vos murs et plafonds, qu’il s’agisse d’un simple rafraîchissement ou d’une rénovation complète</li>
        <li>Peindre vos boiseries, pour un cachet supplémentaire</li>
        <li>Réaliser vos moulures, aussi bien au plafond qu'au mur</li>
        <li>Réaliser des peintures et enduits décoratives sur vos murs, avec des effets de matière ou de couleurs</li>
        <li>Poser du papier peint pour un rendu personnalisé.</li></ul>
        <p>N'hésitez pas à prendre contact. Nous seront vous apporter des conseils fiables et répondre à toutes vos interrogations afin que vos projets prennent formes.</p>
            " />
        <PrestationDetails
        image='./reno.jpeg'
        title="Les étapes clefs d'une réfection de votre peinture d'intérieure"
        subtitle="Chez A'DECOR, nous croyons que votre intérieur doit refléter vos gouts et vous satisfaire dans votre lieu de vie c'est pour cela que nous seront à votre écoute tout au long du projet"
        description={[
            "Application de sous-couches adaptées à chaque surface.",
            "Peinture murale :  Couleurs modernes ou classiques selon vos envies.",
            "Pose de revêtements muraux (papier peint, toile de verre).",
            "Finitions :  Traitement des boiseries et des plinthes pour un résultat impeccable."
        ]} />
      <Footer />
    </section>
  )
}

export default index