import { useRef } from "react";
import emailjs from "@emailjs/browser"

import Contact from "../components/contact"

export default function Footer() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_nayar_id', // service_id
            'template_w75gxia', //template_id
            form.current, // formValues
            'oy7lYPVQeFyWczZij' // publicKey
        ).then(
            () => {
                alert("Le méssage à été bien envoyer!");
                form.current.reset();
            },
            (error) => {
                alert("L'envoye de méssage à échoué, Réessayer s'il vous plaît!", error.text);
            }
        )
    }

    const 
        formu = "flex flex-col text-start mb-4",
        lbl = "text-stone-300 mb-2 hover:cursor-pointer",
        inpt = "border rounded-lg p-2 pl-4",
        image = "w-10 h-10 opacity-75 mx-4";


    return (
        <section id="contacts" className="relative text-white font-Montserrat px-10 pt-25 max-lg:px-10 max-md:px-4">
            <div className="grid grid-cols-2 gap-4 mb-10 max-md:grid-cols-1">
                <div>
                    <h3 className="text-indigo-400 font-bold text-2xl tracking-wide mb-10">Contacts</h3>
                    <div className="px-35 max-md:mb-10 max-md:px-10">
                        <Contact image="mail.png" type="Email" lien="mailto:safidynayar@gmail.com">safidynayar@gmail.com</Contact>
                        <Contact image="contact.png" type="Téléphone" lien="tel:+261336004569">+261 33 60 045 69</Contact>
                        <Contact image="linkedin.png" type="LinkedIn" lien="https://www.linkedin.com/in/safidy-nayar-095868332/">Safidy NayaR</Contact>
                        <Contact image="github.png" type="GitHub" lien="https://github.com/safidyNayaR">@safidyNayaR</Contact>
                    </div>   
                    <div className="px-35 max-md:mb-10 max-lg:px-15">
                        <hr /><br />
                        <a href="./Aina_Safidy_RAMANANTSOA_CV.pdf" download="Aina_Safidy_RAMANANTSOA_CV" className="flex items-center gap-2 px-4 py-2 text-black rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:cursor-pointer max-w-max font-bold">
                            Télécharger mon CV
                            <img src="download.png" className="h-5 w-5" />
                        </a>    
                    </div>               
                </div>
                <div>
                    <h3 className="text-yellow-300 font-bold text-2xl tracking-wide mb-10">Contactez-Moi</h3>  
                    <div className="mx-20 max-md:mx-5">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className={formu}>
                                <label htmlFor="username" className={lbl}>Votre nom</label>
                                <input type="text" id="username" name="username" className={inpt} placeholder="NayaR" required />
                            </div>
                            <div className={formu}>
                                <label htmlFor="email" className={lbl}>Votre email</label>
                                <input type="email" id="email" name="email" className={inpt} placeholder="recruteur@gmail.com" required />
                            </div>
                            <div className={formu}>
                                <label htmlFor="subject" className={lbl}>Votre email</label>
                                <input type="text" id="subject" name="subject" className={inpt} placeholder="Objet" required />
                            </div>
                            <div className={formu}>
                                <label htmlFor="message" className={lbl}>Votre Message</label>
                                <textarea name="message" id="message" className={inpt} placeholder="Décrivez l' opportunité ou votre projet..." rows="3" required></textarea>
                            </div>
                            <button type="submit" className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full p-3 rounded-2xl font-bold hover:cursor-pointer">Envoyer le message</button>
                        </form>
                    </div>                  
                </div>
            </div>
            <hr className="border-2" />
            <div className="text-stone-400 my-6">
                © 2025 Safidy NayaR. Tous droits réservés.
                <div className="flex justify-center items-center mt-6">
                    <a href="mailto:safidynayar@gmail.com"><img src="mail.png" alt="mail" className={image} /></a>
                    <a href="tel:+261336004569"><img src="contact.png" alt="Téléphone" className={image} /></a>
                    <a href="https://www.linkedin.com/in/safidy-nayar-095868332/"><img src="linkedin.png" alt="LinkedIn" className={image} /></a>
                    <a href="https://github.com/safidyNayaR"><img src="github.png" alt="GitHub" className={image} /></a>
                </div>
            </div>
        </section>
    )
}