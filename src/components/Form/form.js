import emailjs from 'emailjs-com';



const service_id = "service_up8t7fu"
const api_id = "AbeU8mmptch4gYjkE"
const template_id = "template_ic71vjh"


export function ContactForm() {
    

const handleOnSubmit = (e) => {
     e.preventDefault();
     emailjs.sendForm(service_id, template_id, e.target, api_id)
       .then(() => {
         alert('Message Sent Successfully')
       }, (error) => {
         console.log(error.text);
         alert('Something went wrong!')
       });
     e.target.reset()
   };
    
    return (
    <div className="container-form" id="form">
        <div className="form">
            <div className="card-image">	
                <h2 className="card-heading">
                    Entre em contato
                    <small>Vamos criar seu projeto?</small>
                </h2>
            </div>
            <form onSubmit={handleOnSubmit} className="card-form">
                <div className="input">
                    <input type="text" name='name' id='name' className="input-field" required/>
                    <label className="input-label">Nome</label>
                </div>
                <div className="input">
                    <input type="text" name='byEmail' id='byEmail' className="input-field" required/>
                    <label className="input-label">Email</label>
                </div>
                <div className="input">
                    <textarea className="input-field" name='message' id='message' required></textarea>
                    <label className="input-label">Mensagem</label>
                </div>
                <div className="action">
                    <button type='submit' className="action-button">Enviar</button>
                </div>
            </form>
        </div>
    </div>
    )
}
 
export default ContactForm;