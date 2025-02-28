import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerPrestation from '../components/Prestations/BannerPrestation'
import AboutPrestation from '../components/Prestations/AboutPrestation'
import PrestationRealisations from '../components/Prestations/PrestationRealisations'
import PrestationDetails from '../components/Prestations/PrestationDetails'
// import PrestationDetailsCarousel from '../components/Prestations/PrestationDetailsCarousel'

const index = () => {

  return (
    <section>
      <Header />
      <BannerPrestation 
      image='./interieur_escalier_debut.webp'
      title='Peinture interieure'
      className=''
      desciption='Apportez une nouvelle vie à vos espaces grâce à des peintures intérieures de qualité professionnelle.' />
        <PrestationRealisations 
        image='./interieur_escalier_debut.webp' 
        image2='./interieur_escalier_fin.webp' 
        image3='./interieur_poutre_debut.webp'
        image4='./interieur_poutre_fin.webp'
        />
      <AboutPrestation
      image=''
      className='peinture_interieur_banner'
        title='A’DECOR, votre Peintre décorateur professionnel à Noyon dans l’Oise'
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
        image='./peinture_interieur.webp'
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