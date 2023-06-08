import { ValidationError, useForm } from '@formspree/react';

import '../Form/Form.css'

function ContactForm() {
    const [state, handleSubmit] = useForm("xjvdqjrl");
    if (state.succeeded) {
        return <div className='thanks'>Thank you for your message!</div>;
    } return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                First Name
            </label>
            <input
                id="name"
                type="name"
                name="name"
                required />
            <ValidationError
                field="name"
                prefix="name"
                errors={state.errors}
            />
            <label htmlFor="name">
                Last Name
            </label>
            <input
                id="name"
                type="name"
                name="name"
                required />
            <ValidationError
                field="name"
                prefix="name"
                errors={state.errors}
            />
            <label htmlFor="email">
                Email
            </label>
            <input
                id="email"
                type="email"
                name="email"
                required />
            <ValidationError
                field="email"
                prefix="Email"
                errors={state.errors} />
            <label htmlFor="message">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                required />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors} />
            <button
                className='form-button'
                type="submit"
                disabled={state.submitting}>
                Submit
            </button>
        </form>
    )
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;