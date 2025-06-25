import { useState } from "react";
import "../styles/contact.css";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`, // 🔥 Coloca aqui o mesmo token que está no Netlify (AUTH_TOKEN)
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toMail: email,
          content: mensagem,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Email enviado com sucesso!");
        setEmail("");
        setMensagem("");
      } else {
        setStatus(`Erro: ${data.error || "Não foi possível enviar o email"}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("Erro na conexão ou na função.");
    }
  };

  return (
    <section className="contact-section" id="contato">
      <h2 className="text-center mb-1">Entre em contato</h2>
      <p className="text-center mb-2">
        Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica ou algo sobre nossos produtos. 
        Estamos à disposição para responder. 😊
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          className="border border-gray-300 rounded p-2"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Motivo do contato (Ex.: Gostei muito do produto X, poderia me enviar um orçamento?)"
          className="border border-gray-300 rounded p-2"
          required
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition-colors"
        >
          Enviar
        </button>

        {status && <p className="mt-2">{status}</p>}
      </form>
    </section>
  );
}
