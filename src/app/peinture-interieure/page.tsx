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
      <BannerPrestation />
      <AboutPrestation
        image='./chambre2.png'
        title='A’Decor peintre décorateur basé à Noyon, dans l’Oise'
        description="<p>Notre entreprise vous accompagne dans la rénovation et la mise en valeur de vos espaces intérieurs. 
                Que vous souhaitiez moderniser vos pièces avec des couleurs tendances ou rénover l'intégralité de vos murs, nous sommes à
                vos côtés pour donner vie à vos idées.</p><br></br>
                <p>Spécialisés dans les peintures décoratives, nous collaborons avec des fournisseurs pour vous offrir un large choix de finitions :
                peinture mate, satinée, brillante, ou encore texturée. Nos solutions incluent également la pose de revêtements muraux comme le
                papier peint ou la toile de verre, pour un intérieur à votre image.</p><br></br>
                <p>Avec une expertise éprouvée et un souci du détail, nous faisons de chaque projet une réussite, alliant esthétisme et durabilité.</p>
            " />
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
      <Footer />
    </section>
  )
}

export default index