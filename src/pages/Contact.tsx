/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Mail, Phone, Send, MapPin, CheckCircle2, Smartphone } from 'lucide-react';
import axios from 'axios';
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', tel: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSentsinding, setIsSentSending] = useState(false);
  const [error, setError] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.email.trim() || !form.message.trim() || !form.tel.trim()) {
      setError('Merci de remplir tous les champs obligatoires.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("L'adresse e-mail ne semble pas valide.");
      return;
    }

    try {
      setIsSentSending(true)
      const formData = {
        name: form.name,
        email: form.email,
        phone: form.tel,
        message: form.message + "  depuis vos protifolio",
      };
      await axios.post("https://burundi-en-temps-reel-backend.burundientempsreel.com/contacts", formData);
      setSent(true);

    } catch (error: any) {
      console.error("Failed to send message:", error);
    } finally {
      setIsSentSending(false)
    }
  };

  return (
    <div className="animate-fade-in pt-32">
      <section className="py-12 sm:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Contact</span>
            <h1 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl text-balance">
              Parlons de votre projet
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Une question, une idée, un devis ? Écrivez-moi et je vous réponds
              sous 24 à 48 heures.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {/* Contact info */}
            <div className="space-y-4">
              <div className="card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <Mail size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">E-mail</h3>
                <a
                  href="mailto:telecomtelesphore@gmail.com"
                  className="mt-1 block text-sm text-slate-600 transition-colors hover:text-teal-600"
                >
                  telecomtelesphore@gmail.com
                </a>
              </div>

              <div className="card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Smartphone size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900"> WhatsApp Instantané</h3>
                <a
                  href="https://wa.me/25762681084"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-slate-600 transition-colors hover:text-teal-600"
                >
                  +257 62 68 10 84
                </a>
              </div>

              <div className="card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Phone size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">Téléphone</h3>
                <a
                  href="tel:+25762681084"
                  className="mt-1 block text-sm text-slate-600 transition-colors hover:text-teal-600"
                >
                  +25762681084
                </a>
              </div>

              <div className="card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <MapPin size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">Localisation</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Bujumbura-Burundi — Travail à distance partout dans le monde
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-8 sm:p-10">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      Message envoyé !
                    </h3>
                    <p className="mt-3 max-w-sm text-slate-600">
                      Merci pour votre message. Je vous répondrai dans les plus
                      brefs délais à l'adresse indiquée.
                    </p>
                    <button
                      onClick={() => {
                        setSent(false);
                        setForm({ name: '', email: '', tel: '', message: '' });
                      }}
                      className="mt-6 btn-secondary"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                          Nom <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                          E-mail <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                          placeholder="vous@exemple.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="tel" className="block text-sm font-medium text-slate-700">
                        Telephone
                      </label>
                      <input
                        id="tel"
                        name="tel"
                        type="text"
                        value={form.tel}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                        placeholder="Votre numero de téléphone"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                        Message <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                        placeholder="Décrivez votre projet ou votre demande..."
                      />
                    </div>

                    {error && (
                      <p className="rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-600">
                        {error}
                      </p>
                    )}

                    <button type="submit" disabled={isSentsinding} className="btn-primary w-full justify-center sm:w-auto">
                     {isSentsinding?"En cours ...":"Envoyer le message "} <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
