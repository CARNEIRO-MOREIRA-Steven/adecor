import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerPrestation from '../components/Prestations/BannerPrestation'
import AboutPrestation from '../components/Prestations/AboutPrestation'
import PrestationRealisations from '../components/Prestations/PrestationRealisations'
import PrestationDetails from '../components/Prestations/PrestationDetails'

export const metadata = {
  title: "A'Decor | Revêtement de sol à Noyon - Parquet, vinyle, carrelage",
  description:
    "Confiez la pose de vos revêtements de sol à A'Decor, artisan basé à Noyon. Parquet, vinyle, carrelage ou moquette, bénéficiez d'une finition professionnelle et durable.",
    alternates: {
      canonical: "https://adecor-renovation.fr/revetement-de-sols",
    },
  }

const index = () => {
  const prestations = [
    {
    image :'./preparation_sol.jpg',
    title :'Préparation des sols pour les revêtements',
    subtitle : '',
    description :[
      "Diagnostic de l’état des sols pour identifier les besoins en préparation.",
      "Nettoyage, dégraissage et élimination des imperfections avant la pose.",
      "Correction des irrégularités : ragréage, traitement des fissures.",
      "Application de sous-couches pour assurer une meilleure adhérence des revêtements."
    ]
  },
  {
    className:'inverted',
    image:'./sol_pose.jpg',
    title:'Pose des revêtements de sols',
    subtitle : '',
    description:[
          "Pose de carrelage, parquet, PVC, lino, moquette ou autres revêtements selon votre choix.",
          "Découpe des matériaux pour un ajustement parfait aux dimensions des pièces.",
          "Application de colle, pose de joints et traitement des bords pour un résultat net.",
          "Réalisation de finitions soignées autour des plinthes et des murs."
    ]
  },
  {  
    image:'./finition.jpg',
    title:'Finitions et entretien des sols',
    subtitle : '',
    description:[
          "Vérification du bon alignement et de la solidité des revêtements posés.",
          "Application de produits d'entretien pour préserver la beauté et la longévité des sols.",
          "Conseils d’entretien adaptés à chaque type de revêtement choisi."
    ]
  },
  ]
  return (
    <section>
      <Header />
      <BannerPrestation 
      image='./peinture2.png'
      title='Revetement de sols'
      className=''
      desciption='Apportez une nouvelle vie à vos espaces grâce à des revetement de sol de qualité professionnelle.' />
        <PrestationRealisations 
        image='./toilette2.webp' 
        image2='./toilette.webp'
        image3='./chambre_sol1.webp'
        image4='chambre_sol2.webp'
        />
      <AboutPrestation
      image=''
      className='revetement_banner'
        title='A’DECOR, spécialiste en Revêtements de sols basé à Noyon, dans l’Oise'
        description="<p>Nous vous proposons une large gamme de <strong>revêtements de sols</strong> adaptés à vos besoins : 
        <strong>carrelage, parquet, moquette, sols PVC</strong>, etc.
        Notre équipe vous accompagne dans le <strong>choix et la pose de revêtements</strong> qui allient esthétisme, confort et durabilité.</p>
        <p>Notre <strong>expertise</strong> en <strong>revêtements de sols</strong> comprend :
        <ul>
        <li>La pose de <strong>carrelage, parquet, PVC, lino, moquette</strong> ou autres revêtements selon votre choix</li>
        <li>Le choix et la pose de <strong>sous-couches</strong> pour assurer une <strong>meilleure adhérence</strong> des revêtements</li>
        <li>Le <strong>diagnostic</strong> de l’état des sols pour <strong>identifier les besoins</strong> en préparation</li>
        </ul>
        <p>N'hésitez pas à prendre contact. Nous seront vous apporter des conseils fiables et répondre à toutes vos interrogations afin que vos projets prennent formes.</p>
            " />
        <PrestationDetails
        image='./reno.webp'
        title="Les étapes clefs d'un revêtement de sol chez A'decor"
        subtitle="Chez A'DECOR, nous croyons que votre intérieur doit refléter vos gouts et vous satisfaire dans votre lieu de vie c'est pour cela que nous seront à votre écoute tout au long du projet"
        description={[
            "Diagnostic de l’état des sols pour identifier les besoins en préparation.",
            "Nettoyage, dégraissage et élimination des imperfections avant la pose.",
            "Correction des irrégularités : ragréage, traitement des fissures.",
            "Application de sous-couches pour assurer une meilleure adhérence des revêtements.",
            "Pose de carrelage, parquet, PVC, lino, moquette ou autres revêtements selon votre choix.",
        ]} />        
      <Footer />
    </section>
  )
}

export default index