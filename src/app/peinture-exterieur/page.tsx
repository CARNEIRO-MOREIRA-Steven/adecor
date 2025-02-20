import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerPrestation from '../components/Prestations/BannerPrestation'
import AboutPrestation from '../components/Prestations/AboutPrestation'
import PrestationRealisations from '../components/Prestations/PrestationRealisations'
import PrestationDetails from '../components/Prestations/PrestationDetails'

const index = () => {
  const prestations = [
    {
      image: './preparation_mur_exterieur.jpg',
      title: 'Préparation des surfaces extérieures',
      description: [
          "Inspection des murs extérieurs pour détecter les défauts à corriger.",
          "Nettoyage en profondeur des surfaces avant l’application de la peinture.",
          "Traitement des zones endommagées (réparation des fissures, traitement anti-humidité).",
          "Application de primaires pour assurer une bonne adhérence de la peinture."
      ]
    } ,   
    { 
      className :'inverted',
      image :'./peinture_ext.jpg',
      title :'Application de la peinture extérieure',
      description : [
          "Peinture extérieure : application de produits résistants aux intempéries.",
          "Peinture des façades, fenêtres, portes et autres éléments extérieurs.",
          "Choix des finitions : mate, satinée ou brillante selon vos préférences.",
          "Protection des surfaces sensibles (fenêtres, sols) contre les éclaboussures."
      ]
    }, 
    {
      image :'./finition_mur_ext.jpg',
      title :'Finitions et nettoyage après peinture',
      description : [
          "Finitions soignées sur les bords, les contours et les détails pour un rendu uniforme.",
          "Application de produits de protection pour prolonger la durée de vie de la peinture.",
          "Nettoyage des zones de travail et mise en valeur des surfaces fraîchement peintes."
      ]
    },
  ];
  return (
    <section>
      <Header />
      <BannerPrestation 
      image='./devant_maison.png'
      title='Peinture extérieur'
      className='inverted'
      desciption='Apportez une nouvelle vie à vos espaces grâce à des peintures intérieures de qualité professionnelle.' />
      <AboutPrestation
        image='./devant_maison.png'
        title='A’Decor, spécialiste en Peinture extérieure basé à Noyon, dans l’Oise'
        description="<p>Nous vous proposons des solutions de peinture extérieure pour protéger vos façades tout en améliorant l'apparence de votre maison.
        Nous utilisons des peintures spécifiques résistantes aux intempéries pour garantir une longue durée de vie à vos surfaces extérieures.</p>
        <p>Notre service comprend la préparation minutieuse des surfaces, l'application de peintures de qualité, et des finitions impeccables pour garantir
        une protectionet une esthétique optimales.</p>
        <p>Améliorez l’apparence de votre maison tout en la protégeant des agressions extérieures grâce à nos prestations de peinture extérieure.</p>"
      />
       <PrestationDetails
        image='./chambre1.png'
        title='Préparation et soins des surfaces'
        description={[
          "Diagnostic des murs et identification des besoins spécifiques.",
          "Nettoyage des surfaces : Lessivage et élimination des résidus.",
          "Préparation des supports : Enduits de dégrossissage, traitement anti-humidité, et pose de produits d'apprêt.",
          "Ponçage : Uniformisation des surfaces pour une finition lisse."
        ]} />
      <PrestationDetails
        className='inverted'
        image='./chambre1.png'
        title='Application et finitions'
        description={[
          "Application de sous-couches adaptées à chaque surface.",
          "Peinture murale :  Couleurs modernes ou classiques selon vos envies.",
          "Pose de revêtements muraux (papier peint, toile de verre).",
          "Finitions :  Traitement des boiseries et des plinthes pour un résultat impeccable."
        ]} />
        <PrestationDetails
        className='last'
        image='./chambre1.png'
        title='Expertise et qualité :'
        description={[
          "Peinture mécanisée (airless) pour des surfaces grandes et une application uniforme.",
          "Choix des peintures :  Peintures écologiques, haute couvrance et résistances.",
          "Une expertise validée par plusieurs années d'expérience et des certifications professionnelles.",
        ]} />
       <PrestationRealisations 
        image='./devant_maison.png' 
        image2='./interieur1.jpg'
        image3='./devant_maison.png'
        />
      <Footer />
    </section>
  )
}

export default index