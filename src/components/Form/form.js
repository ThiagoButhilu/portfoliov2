import emailjs from 'emailjs-com';
import { useState } from 'react';
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'


const service_id = "service_up8t7fu"
const api_id = "AbeU8mmptch4gYjkE"
const template_id = "template_ic71vjh"


export function ContactForm() {
    const { t } = useTranslation();
    const [isSend, setIsSend] = useState(false)
    

const handleOnSubmit = (e) => {
     e.preventDefault();
     emailjs.sendForm(service_id, template_id, e.target, api_id)
       .then(() => {
         setIsSend(true)
       }, (error) => {
         console.log(error.text);
         alert(t('contact.error'))
       });
     e.target.reset()
   };
    
    return (
        <div className="container-form" id="form">
            {!isSend ? (
                <div className="form">
                    <div className="card-image">	
                        <h2 className="card-heading">
                            {t('contact.title')}
                            <small>{t('contact.subtitle')}</small>
                        </h2>
                    </div>
                    <form onSubmit={handleOnSubmit} className="card-form">
                        <div className="input">
                            <input type="text" name='name' id='name' className="input-field" required/>
                            <label className="input-label">{t('contact.name')}</label>
                        </div>
                        <div className="input">
                            <input type="text" name='byEmail' id='byEmail' className="input-field" required/>
                            <label className="input-label">{t('contact.email')}</label>
                        </div>
                        <div className="input">
                            <textarea className="input-field" name='message' id='message' required></textarea>
                            <label className="input-label">{t('contact.message')}</label>
                        </div>
                        <div className="action">
                            <button type='submit' className="action-button">{t('contact.send')}</button>
                        </div>
                    </form>
                </div>
            ) : (
                <motion.div initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }} className="success-message">
                    {t('contact.success')}
                </motion.div>
            )}
        </div>
    )
}
 
export default ContactForm;