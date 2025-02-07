"use client"
import React, { useState } from 'react';
import './banner.css'

const Banner = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState ({
      name : "",
      email : "",
      tel : "",
      subject : "",
      message : "",
  });

  const [isSuccess, setIsSucces] = useState(false)

  const closeSend = (e : Event) => {
    setIsSucces(false)
  }

  const handleChange = (e : any) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (e : any) => {
      e.preventDefault();
      setIsSubmitting(true);
      console.log(formData);
  
      try {
        const response = await fetch("/api/contact", {
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
            email : "",
            subject: "",
            tel: "",
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
    <section className='container_banner'>
        <img alt='image banner' className='banner_image' src='banner_image.jpg'></img>
        <section className='container_intro_banner'>
        <section className='intro_banner'>
            <h1 className='banner_title'>A'decor</h1>
            <h2 className='banner_subtitle'>Votre entreprise de rénovation d'intérieur à Noyon et ses alentours</h2>
            <aside className='banner_cta'>
            <button type='submit' className='services_button'>Nos services</button>
            <button type='submit' className='contact_button'>Nous contacter</button>
            </aside>
        </section>
        <form className='form_content' onSubmit={handleSubmit}>
      <div className='name'>
      <label htmlFor='name'>Nom prénom</label>
      <input id='name' type='text' name='name' value={formData.name} required onChange={handleChange}></input>
    </div>
    <div className='email'>
          <label htmlFor='email'>Email</label>
          <input autoComplete="email" id='email' type='email' name='email' value={formData.email} required onChange={handleChange}></input>
        </div>
        <div className='message'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message' value={formData.message} maxLength={1000} onChange={handleChange}></textarea>
        </div>
        <button type='submit' className='form_button'>{isSubmitting ? <>En cours...</> : "Demander un devis gratuit"}</button>
        </form><section className='bottom_banner'>
            <li><img src='award-solid.svg'></img> Garantie décénale</li>
            <li><img src='euro-sign-solid.svg'></img>Devis gratuit</li>
            <li><img src='file-signature-solid.svg'></img> Gestion de projet</li>
            <li><img src='helmet-safety-solid.svg'></img> ouvriers qualifié</li>
        </section>
        </section>
        
    </section>
  )
}

export default Banner