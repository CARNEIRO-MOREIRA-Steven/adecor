"use client"
import React, { useState } from 'react'
import './form_contact.css'
import InterventionZone from './InterventionZone'

const FormContact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
        prestation: "",
        message: "",
    });

    const [isSuccess, setIsSucces] = useState(false)

    const closeSend = (e: Event) => {
        setIsSucces(false)
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log(formData);

        try {
            const response = await fetch("/api/contactForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Message envoyé avec succès !");
                setIsSucces(true)
                setFormData({
                    name: "",
                    email: "",
                    tel: "",
                    prestation: "",
                    message: "",
                });
            } else {
                console.error(
                    "Une erreur s'est produite lors de l'envoi du formulaire :",
                    response.status,
                    response.statusText
                );
            }
        } catch (error) {
            console.error(
                "Une erreur s'est produite lors de l'envoi du formulaire :",
                error
            );
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section className='container_contact'>
            <aside className='contact_info'>
                <p className='contact_info_phone'><img className="contact_icon_phone" alt="icon_phone" src="phone-solid.svg"></img>06.56.77.27.92</p>
                <p className='contact_info_mail'><img className="contact_icon_mail" alt="icon mail" src="envelope-regular.svg"></img>alexisdurand341@gmail.com</p>
                <p className='contact_info_location'><img className="contact_icon_location" alt="icon localisation" src="location-dot-solid.svg"></img>Rue de Montdidier, 60400 Larbroye</p>
                <a target='_blank' className='contact_info_facebook' href="https://www.facebook.com/profile.php?id=100079740254760"> 
                <img className="contact_icon_facebook" alt="icon_facebook" src="facebook-brands-solid.svg"></img>
                Adecor Noyon
                </a>
                <InterventionZone />
                     </aside>
            <form className='container_form' onSubmit={handleSubmit}>
                <h3 className='form_title'>Contactez-nous</h3>
                <div className='form_group'>
                <div className='name'>
                    <label htmlFor='name'>Nom prénom</label>
                    <input id='name' type='text' name='name' value={formData.name} required onChange={handleChange}></input>
                </div>
                <div className='tel'>
                    <label htmlFor='tel'>Téléphone</label>
                    <input autoComplete="telephone" id='tel' type='tel' name='tel' value={formData.tel} required onChange={handleChange}></input>
                </div>
                </div>
                <div className='form_group_mail'>
                <div className='email'>
                    <label htmlFor='email'>Email</label>
                    <input autoComplete="email" id='email' type='email' name='email' value={formData.email} required onChange={handleChange}></input>
                </div>
                <div className='prestation'>
                    <label htmlFor="prestation">Type de prestation</label>
                    <select id="prestation" name="prestation"  value={formData.prestation} onChange={handleChange} required>
                        <option value="peinture interieure">Peinture intérieure</option>
                        <option value="amenagement et isolation">Aménagement et isolation</option>
                        <option value="peinture exterieure">Peinture extérieure</option>
                        <option value="revetement de sols">Revetement de sols</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
                </div>
                <div className='message'>
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' name='message' value={formData.message} maxLength={1000} onChange={handleChange}></textarea>
                </div>
                <button type='submit' className='form_button'>{isSubmitting ? <>En cours...</> : "Demander un devis gratuit"}</button>
            </form>
        </section>
    )
}

export default FormContact