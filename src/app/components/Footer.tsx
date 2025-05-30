import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <section className='footer_content'>
        <aside className='footer_links'>
            <h4 className='footer_links_title'>Nos services</h4>
            <aside className='border_title_footer'></aside>
            <a href="/peinture-interieure">Peinture intérieure</a>
            <a href="/isolation">Aménagement et Isolation</a>
            <a href="/peinture-exterieure">Peinture extérieure</a>
            <a href="/revetement-de-sols">Revetement de sols</a>
        </aside>
        <aside className='footer_infos'>
            <h4 className='footer_infos_title'>Nos informations</h4>
            <aside className='border_title_footer'></aside>
            <p>60400 Larbroye</p>
            <p>06.56.77.27.92</p>
            <p>alexisdurand341@gmail.com</p>
            <a target='_blank' className='contact_info_facebook' href="https://www.facebook.com/profile.php?id=100079740254760"> 
                <img className="contact_icon_facebook" alt="icon_facebook" src="facebook-brands-solid.svg" loading='lazy'></img>
            </a>        
        </aside>
        <aside className='footer_maps'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.3264365769246!2d2.9607212767886186!3d49.572731050171406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e87518c8b00169%3A0x5a4adafb25e86ba5!2sA;DECOR!5e0!3m2!1sfr!2sfr!4v1746885378519!5m2!1sfr!2sfr"
 width="400" height="300" loading="lazy"></iframe>        </aside>
        <aside className='footer_logo'>
            <img src='logo.webp' alt="logo a'decor" loading='lazy'></img>
        </aside>
        </section>
        <p className='footer_copyright'> Créé par CodeMeta Solutions - Copyright ©2025 - Mentions légales et Politiques de confidentialité</p>
    </footer>
  )
}

export default Footer