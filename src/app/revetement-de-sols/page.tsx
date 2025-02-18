import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerPrestation from '../components/Prestations/BannerPrestation'
import AboutPrestation from '../components/Prestations/AboutPrestation'
import PrestationDetails from '../components/Prestations/PrestationDetails'
import PrestationRealisations from '../components/Prestations/PrestationRealisations'

const index = () => {
  return (
    <section>
      <Header />
      <BannerPrestation 
      image='./chambre1.png'
      title='Revetement de sols'
      className=''
      desciption='Apportez une nouvelle vie à vos espaces grâce à des peintures intérieures de qualité professionnelle.' />
      <AboutPrestation
        image='./chambre2.png'
        title='A’Decor, spécialiste en Revêtements de sols basé à Noyon, dans l’Oise'
        description="<p>Nous vous proposons une large gamme de revêtements de sols adaptés à vos besoins : carrelage, parquet, moquette, sols PVC, etc.
        Notre équipe vous accompagne dans le choix et la pose de revêtements qui allient esthétisme, confort et durabilité.</p>
        <p>Nous préparons soigneusement vos sols avant de poser les revêtements, afin d’assurer une finition parfaite et une résistance optimale sur le
        long terme.</p>
        <p>Que vous ayez besoin de rénover ou d'aménager un nouvel espace, nous vous proposons des solutions de qualité adaptées à vos attentes.</p>" />
      <PrestationDetails
        image='./preparation_sol.jpg'
        title='Préparation des sols pour les revêtements'
        description={[
          "Diagnostic de l’état des sols pour identifier les besoins en préparation.",
          "Nettoyage, dégraissage et élimination des imperfections avant la pose.",
          "Correction des irrégularités : ragréage, traitement des fissures.",
          "Application de sous-couches pour assurer une meilleure adhérence des revêtements."
        ]} />
      <PrestationDetails
        className='inverted'
        image='./sol_pose.jpg'
        title='Pose des revêtements de sols'
        description={[
          "Pose de carrelage, parquet, PVC, lino, moquette ou autres revêtements selon votre choix.",
          "Découpe des matériaux pour un ajustement parfait aux dimensions des pièces.",
          "Application de colle, pose de joints et traitement des bords pour un résultat net.",
          "Réalisation de finitions soignées autour des plinthes et des murs."
        ]} />
        <PrestationDetails
        image='./finition.jpg'
        className='last'
        title='Finitions et entretien des sols'
        description={[
          "Vérification du bon alignement et de la solidité des revêtements posés.",
          "Application de produits d'entretien pour préserver la beauté et la longévité des sols.",
          "Conseils d’entretien adaptés à chaque type de revêtement choisi."
        ]} />
        <PrestationRealisations 
        image='./toilette.jpeg' 
        image2='./interieur1.jpg'
        image3='./interieur3.jpg'
        />
      <Footer />
    </section>
  )
}

export default index