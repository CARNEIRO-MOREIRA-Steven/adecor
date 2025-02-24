"use client"
import React, { useState } from 'react';
import './banner.css'
import BottomBanner from './BottomBanner';


<link rel="preload" as="image" href="banner_image.webp"></link>
const Banner = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState ({
      name : "",
      email : "",
      tel : "",
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
        const response = await fetch("/api/contactBanner", {
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
        <img alt='image banner' className='banner_image' src='banner_image.webp'></img>
        <section className='container_intro_banner'>
        <section className='intro_banner'>
            <h1 className='banner_title'>A'decor</h1>
            <h2 className='banner_subtitle'>Votre entreprise de rénovation d'intérieur à Noyon et ses alentours</h2>
            <aside className='banner_cta'>
            <button type='submit' className='services_button' ><a href='#services'>Nos services</a></button>
            <button type='submit' className='contact_button'><a href='/contact'>Nous contacter</a></button>
            </aside>
        </section>
        <form className='form_content' onSubmit={handleSubmit}>
      <div className='name'>
      <label htmlFor='name'>Nom prénom</label>
      <input id='name' type='text' name='name' value={formData.name} required onChange={handleChange}></input>
    </div>
    <div className='tel'>
          <label htmlFor='tel'>Téléphone</label>
          <input autoComplete="telephone" id='tel' type='tel' name='tel' value={formData.tel} required onChange={handleChange}></input>
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
        </form>
        <BottomBanner />
        </section>
        
    </section>
  )
}

export default Banner