'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { sendMail } from '@/lib/send-mail';
import { policies } from '@/lib/data';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    oggetto: '',
    messaggio: '',
  });

  const resetForm = () => {
    setFormData({
      nome: '',
      cognome: '',
      email: '',
      telefono: '',
      oggetto: '',
      messaggio: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!executeRecaptcha) {
      setLoading(false);
      return;
    }

    try {
      // Genera il token reCAPTCHA
      const token = await executeRecaptcha('submit_contact_form');

      // Invia i dati al server
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token,
        }),
      });

      const result = await response.json();
      if (result.success) {
        const mailResponse = await sendMail({
          email: formData.email,
          subject: formData.oggetto || 'Nuovo messaggio dal modulo di contatto',
          message: `
        Nome: ${formData.nome}
        Cognome: ${formData.cognome}
        Email: ${formData.email}
        Telefono: ${formData.telefono}
        Oggetto: ${formData.oggetto}
        Messaggio: ${formData.messaggio}
        `,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      resetForm();
    }
  };
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <form
        onSubmit={handleSubmit}
        className="rounded-xl md:w-[50%] w-full flex flex-col gap-6">
        <div className="grid grid-cols-12 gap-4">
          <input
            required
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="md:col-span-6 col-span-12 bg-white p-4 rounded-xl"
            placeholder="Nome *"
          />
          <input
            required
            type="text"
            id="cognome"
            name="cognome"
            value={formData.cognome}
            onChange={(e) =>
              setFormData({ ...formData, cognome: e.target.value })
            }
            className="md:col-span-6 col-span-12 bg-white p-4 rounded-xl"
            placeholder="Cognome *"
          />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="md:col-span-6 col-span-12 bg-white p-4 rounded-xl"
            placeholder="Email *"
          />
          <input
            required
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={(e) =>
              setFormData({ ...formData, telefono: e.target.value })
            }
            className="md:col-span-6 col-span-12 bg-white p-4 rounded-xl"
            placeholder="Telefono *"
          />
        </div>
        <input
          type="text"
          id="oggetto"
          name="oggetto"
          value={formData.oggetto}
          onChange={(e) =>
            setFormData({ ...formData, oggetto: e.target.value })
          }
          className="col-span-6 bg-white p-4 rounded-xl"
          placeholder="Oggetto"
        />
        <textarea
          required
          rows={5}
          cols={33}
          id="messaggio"
          name="messaggio"
          value={formData.messaggio}
          onChange={(e) =>
            setFormData({ ...formData, messaggio: e.target.value })
          }
          className="col-span-6 bg-white p-4 rounded-xl"
          placeholder="Messaggio *"
        />
        <div className="flex gap-3">
          <span className="italic text-sm opacity-60">
            Questo form è protetto da reCAPTCHA v3 e si applicano i{' '}
            <Link
              href={policies.privacy}
              className="text-primary-300 hover:underline"
              target="_blank">
              Termini e Condizioni della Privacy
            </Link>{' '}
          </span>
        </div>
        <button
          type="submit"
          className="cursor-pointer md:w-[30%] text-lg uppercase font-semibold bg-cta hover:bg-cta-hover hover:text-secondary-light transition-colors duration-300 text-primary-900 p-3 rounded-xl shadow-lg">
          Invia
        </button>
      </form>
    </GoogleReCaptchaProvider>
  );
}
