import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerPrestation from '../components/Prestations/BannerPrestation'
import AboutPrestation from '../components/Prestations/AboutPrestation'
import PrestationDetails from '../components/Prestations/PrestationDetails'

const index = () => {
  return (
    <section>
      <Header />
      <BannerPrestation 
      image='./banner_image.jpg'
      title='Peinture interieur'
      desciption='Apportez une nouvelle vie à vos espaces grâce à des peintures intérieures de qualité professionnelle.' />
      <AboutPrestation
        image='./chambre2.png'
        title='A’Decor, votre Peintre décorateur professionnel à Noyon dans l’Oise'
        description="<p>A’Decor est votre expert en peinture et décoration intérieure à Noyon. Nous vous accompagnons dans la rénovation et la mise en valeur de vos
        espaces intérieurs, que ce soit pour moderniser vos pièces avec des couleurs tendance ou rénover l'intégralité de vos murs.</p>
        <p>Spécialisés dans les peintures décoratives, nous vous offrons un large choix de finitions : peinture mate, satinée, brillante, ou texturée.
        Nous proposons également la pose de revêtements muraux comme le papier peint ou la toile de verre, pour un intérieur à votre image.</p>
        <p>Avec une expertise éprouvée et un souci du détail, nous faisons de chaque projet une réussite, alliant esthétisme et durabilité. Confiez-nous vos travaux
        de peinture et profitez d'un intérieur à la fois élégant et fonctionnel.</p>
            " />
      <PrestationDetails
        image='./preparation_mur.jpg'
        title='Préparation et soins des surfaces'
        description={[
          "Diagnostic des murs et identification des besoins spécifiques.",
          "Nettoyage des surfaces : Lessivage et élimination des résidus.",
          "Préparation des supports : Enduits de dégrossissage, traitement anti-humidité, et pose de produits d'apprêt.",
          "Ponçage : Uniformisation des surfaces pour une finition lisse."
        ]} />
      <PrestationDetails
        className='inverted'
        image='./peinture_mur.jpg'
        title='Application et finitions'
        description={[
          "Application de sous-couches adaptées à chaque surface.",
          "Peinture murale :  Couleurs modernes ou classiques selon vos envies.",
          "Pose de revêtements muraux (papier peint, toile de verre).",
          "Finitions :  Traitement des boiseries et des plinthes pour un résultat impeccable."
        ]} />
        <PrestationDetails
        className='last'
        image='./choix_peinture.jpg'
        title='Expertise et qualité :'
        description={[
          "Peinture mécanisée (airless) pour des surfaces grandes et une application uniforme.",
          "Choix des peintures :  Peintures écologiques, haute couvrance et résistances.",
          "Une expertise validée par plusieurs années d'expérience et des certifications professionnelles.",
        ]} />
      <Footer />
    </section>
  )
}

export default index