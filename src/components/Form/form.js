export function ContactForm() {
    return (
    <div className="container-form" id="form">
        <div className="form">
            <div className="card-image">	
                <h2 className="card-heading">
                    Entre em contato
                    <small>Vamos criar seu projeto?</small>
                </h2>
            </div>
            <form className="card-form">
                <div className="input">
                    <input type="text" className="input-field" required/>
                    <label className="input-label">Nome</label>
                </div>
                <div className="input">
                    <input type="text" className="input-field" required/>
                    <label className="input-label">Email</label>
                </div>
                <div className="input">
                    <textarea className="input-field" required></textarea>
                    <label className="input-label">Mensagem</label>
                </div>
                <div className="action">
                    <button className="action-button">Enviar</button>
                </div>
            </form>
            <div className="card-info">
                <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
            </div>
        </div>
    </div>
    )
}
 
export default ContactForm;