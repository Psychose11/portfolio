import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useApp } from '../AppContext';

// Clé publique Web3Forms (faite pour être visible dans le front : elle sert seulement à t'envoyer des messages).
const ACCESS_KEY = '52704f2f-3083-47b9-a202-22afd4bbe025';
const MIN_FILL_MS = 3000; // un humain met plus de 3 s à remplir le formulaire
const COOLDOWN_MS = 60000; // 1 message par minute et par navigateur

type Status = 'idle' | 'sending' | 'success' | 'error';

const readLast = (): number => {
  try {
    return Number(localStorage.getItem('lastContact') ?? 0);
  } catch {
    return 0;
  }
};
const writeLast = () => {
  try {
    localStorage.setItem('lastContact', String(Date.now()));
  } catch {
    /* ignore */
  }
};

const Contact: React.FC = () => {
  const { tr } = useApp();
  const c = tr.contact;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', website: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [feedback, setFeedback] = useState('');
  const openedAt = useRef(Date.now());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fail = (msg: string) => {
    setStatus('error');
    setFeedback(msg);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    // Robot : le champ piège est rempli -> on fait semblant que tout va bien, sans rien envoyer.
    if (formData.website) {
      setStatus('success');
      setFeedback(c.success);
      return;
    }
    // Trop rapide ou trop fréquent
    if (Date.now() - openedAt.current < MIN_FILL_MS || Date.now() - readLast() < COOLDOWN_MS) {
      return fail(c.errorSpam);
    }
    if (!ACCESS_KEY) return fail(c.errorGeneric);

    setStatus('sending');
    setFeedback('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: 'Portfolio',
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio] ${formData.subject}`,
          message: formData.message,
          botcheck: formData.website,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        writeLast();
        setStatus('success');
        setFeedback(c.success);
        setFormData({ name: '', email: '', subject: '', message: '', website: '' });
        openedAt.current = Date.now();
      } else {
        fail(c.errorGeneric);
      }
    } catch {
      fail(c.errorGeneric);
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent';

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.title}</h2>
          <p className="text-lg text-secondary/90 max-w-2xl mx-auto">{c.intro}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">{c.connectTitle}</h3>
            <p className="text-secondary/90 mb-8 leading-relaxed">{c.connectText}</p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">{c.email}</div>
                  <div className="text-secondary/90">fetrasarobidy3@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">{c.phone}</div>
                  <div className="text-secondary/90">+261 34 13 136 55</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">{c.location}</div>
                  <div className="text-secondary/90">Antananarivo, MG</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">{c.follow}</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/Psychose11" className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors">
                  <Github className="w-5 h-5 text-secondary" />
                </a>
                <a href="https://www.linkedin.com/in/tahina-sarobidy-779934295/" className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors">
                  <Linkedin className="w-5 h-5 text-secondary" />
                </a>
                <a href="https://www.facebook.com/fetra.sarobidy.54" className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-secondary/30 transition-colors">
                  <Facebook className="w-5 h-5 text-secondary" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-secondary font-medium mb-2">{c.fullName}</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required minLength={2} maxLength={100} className={inputClass} placeholder={c.phName} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-secondary font-medium mb-2">{c.emailAddress}</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required maxLength={254} className={inputClass} placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-secondary font-medium mb-2">{c.subject}</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required minLength={2} maxLength={150} className={inputClass} placeholder={c.phSubject} />
              </div>

              <div>
                <label htmlFor="message" className="block text-secondary font-medium mb-2">{c.message}</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required minLength={10} maxLength={5000} rows={5} className={`${inputClass} resize-none`} placeholder={c.phMessage} />
              </div>

              {/* Champ piège anti-robots : invisible pour les humains */}
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>

              {feedback && (
                <div
                  role="status"
                  className={`flex items-start space-x-2 rounded-lg px-4 py-3 text-sm ${
                    status === 'success' ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'
                  }`}
                >
                  {status === 'success' ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                  <span>{feedback}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                <span>{status === 'sending' ? c.sending : c.send}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;