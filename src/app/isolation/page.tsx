import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerPrestation from '../components/Prestations/BannerPrestation'
import AboutPrestation from '../components/Prestations/AboutPrestation'
import PrestationDetailsCarousel from '../components/Prestations/PrestationDetailsCarousel'
import PrestationRealisations from '../components/Prestations/PrestationRealisations'

export const metadata = {
  title: "A'Decor | Aménagement intérieur et isolation à Noyon",
  description:
    "Optimisez votre confort avec A'Decor : travaux d’aménagement intérieur et isolation thermique à Noyon. Solutions sur mesure pour une maison agréable et économe.",
    alternates: {
      canonical: "https://adecor-renovation.fr/isolation",
    },
  }

const index = () => {
  const prestations = [
    {
      image :'./isolation2.webp',
      title :"Diagnostic et préparation pour l'isolation",
      subtitle : '',
      description :[
          "Une évaluation thermique approfondie pour détecter les zones de déperditions énergétiques.",
          "La vérification et l’analyse de l’état des murs, du toit et des sols pour choisir les matériaux les plus adaptés.",
          "La préparation des surfaces avec nettoyage et traitement préalable pour assurer une adhérence optimale des isolants.",
          "Nous vous accompagnons dans le choix des meilleurs matériaux isolants en fonction de votre budget et de vos besoins spécifiques."
      ]
    },
      {
        className:'',
        image:'./interieur1.webp',
        title:'Pose de l’isolation thermique et acoustique',
        subtitle : '',
        description:[
          "L’application de matériaux isolants adaptés : laine de verre, mousse polyuréthane, ou solutions écologiques.",
          "L’isolation des combles, murs et sols afin d’optimiser votre consommation énergétique.",
          "La mise en place d’une isolation acoustique performante pour limiter les nuisances sonores.",
          "Des finitions soignées avec un traitement des joints et des ponts thermiques pour une isolation optimale."
        ]
      }, 
  ]
  return (
    <section>
      <Header />
      <BannerPrestation 
      image='./interieur3.jpg'
      title='Aménagement et Isolation'
      className='inverted isolation'
      desciption='Apportez une nouvelle vie à vos espaces grâce à un aménagement et une isolation efficaces.' />
      <AboutPrestation
        image='./isolation1.webp'
        title='A’DECOR spécialiste en Isolation thermique et acoustique basé à Noyon, dans l’Oise'
        description="<p><strong>L'isolation thermique</strong> et acoustique est un choix important pour garantir le <strong>confort</strong> et la 
        <strong>durabilité</strong> de votre maison.</p>
        <p>Notre entreprise est spécialisée dans <strong>l'isolation thermique et acoustique</strong>, offrant des solutions adaptées aux besoins de chacun.</p>
        <p>Nous travaillons avec des materiaux de <strong>haute performance et ecologiques</strong>, garantissant ainsi une <strong>isolation</strong> durable et efficace.</p>
            " />
        <PrestationDetailsCarousel prestations={prestations} />
        <PrestationRealisations 
        image='./aménagement_avant.jpg'
        image2='./amenagement_apres.jpg'
        image3='./amenagement_chambre.webp'
        image4='amenagement_apres.webp'
        />
      <Footer />
    </section>
  )
}

export default index