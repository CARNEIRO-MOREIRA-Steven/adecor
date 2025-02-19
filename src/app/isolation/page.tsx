import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerPrestation from '../components/Prestations/BannerPrestation'
import AboutPrestation from '../components/Prestations/AboutPrestation'
import PrestationDetailsCarousel from '../components/Prestations/PrestationDetailsCarousel'
import PrestationRealisations from '../components/Prestations/PrestationRealisations'

const index = () => {
  const prestations = [
    {
      image :'./isolation_diag.jpg',
      title :"Diagnostic et préparation pour l'isolation",
      description :[
          "Évaluation thermique des surfaces pour identifier les zones à isoler.",
          "Vérification de l’état des murs, du toit et des sols pour définir les matériaux adaptés.",
          "Préparation des surfaces : Nettoyage et préparation avant la pose de l’isolant.",
          "Installation de barrières thermiques pour garantir une isolation optimale."
      ]
    },
      {
        className:'inverted',
        image:'./isolation_pose.jpg',
        title:'Pose de l’isolation thermique et acoustique',
        description:[
          "Application de matériaux isolants : laine de verre, mousse polyuréthane, ou autres solutions écologiques.",
          "Isolation des combles, murs et sols pour une performance énergétique maximale.",
          "Mise en place d’une isolation acoustique pour limiter les nuisances sonores entre les pièces.",
          "Finitions et traitement des joints pour une isolation sans pont thermique."
        ]
      }, 
        {
        image:'./isolation_finition.jpg',
        title:'Expertise et performance de l’isolation',
        description:[
          "Isolation certifiée et conforme aux normes énergétiques en vigueur.",
          "Garantie de durabilité avec des matériaux haute performance et écologiques.",
          "Évaluation post-travaux pour vérifier l'efficacité et la réduction des déperditions thermiques."
        ]
      }
  ]
  return (
    <section>
      <Header />
      <BannerPrestation 
      image='./interieur3.jpg'
      title='Isolation'
      className='inverted'
      desciption='Apportez une nouvelle vie à vos espaces grâce à des peintures intérieures de qualité professionnelle.' />
      <AboutPrestation
        image='./isolation1.jpg'
        title='A’Decor spécialiste en Isolation thermique et acoustique basé à Noyon, dans l’Oise'
        description="<p>Nous vous aidons à améliorer l'efficacité énergétique de votre habitat en offrant des solutions d'isolation thermique et acoustique.
        Que ce soit pour votre toit, vos murs ou vos sols, nos techniques modernes permettent de réduire la consommation d'énergie tout en optimisant le confort
        intérieur.</p>
        <p>Nous utilisons des matériaux isolants de haute qualité et respectueux de l'environnement pour vous offrir une isolation performante et durable.
        Grâce à une expertise pointue, nous assurons l'étanchéité de votre logement, vous permettant de réaliser des économies d'énergie substantielles.</p>
        <p>Faites le choix de la performance et de la durabilité avec nos solutions d'isolation adaptées à vos besoins spécifiques.</p>
            " />
        <PrestationDetailsCarousel prestations={prestations} />
        <PrestationRealisations 
        image='./avant_isolation.png' 
        image2='./isolation1.jpg'
        image3='./isolation2.jpg'
        />
      <Footer />
    </section>
  )
}

export default index