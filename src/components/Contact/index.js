import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef()

  useEffect(() => {
  const timeout = setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 3000);
  return () => clearTimeout(timeout);
}, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs 
      .sendForm(
        'service_6zbyc7j', // Service
        'template_y61yyf9', //templace
        refForm.current,
        '6-dCasgRnfCQ71Mij'
      )
      .then(
        () => {
          alert("Message succesfully sent!")
          window.location.reload(false)
        },
        () => {
          alert("Failed to send message, Please Try Again")
        }
      )
  }
  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in any opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='E-mail' required />
                </li>
                <li>
                  <input type='text' name='subject' placeholder='Subject' required />
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required >
                  </textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact;