"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const modalidades = [
  "Ciclismo",
  "Tiro Esportivo",
  "Pesca",
  "Futebol",
  "Corrida",
  "Eventos / Promocional",
  "Corporativo",
  "Personalizado",
];

type FormState = {
  nome: string;
  telefone: string;
  email: string;
  modalidade: string;
  quantidade: string;
  mensagem: string;
};

const emptyForm: FormState = {
  nome: "",
  telefone: "",
  email: "",
  modalidade: "",
  quantidade: "",
  mensagem: "",
};

const inputClass =
  "w-full bg-[#0F0F0F] border border-white/10 text-white px-4 py-4 text-sm focus:outline-none focus:border-[#FF8C00] transition-colors placeholder:text-gray-700";

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="py-32 px-6" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <p
            className="text-xs font-bold uppercase tracking-[0.3em] mb-4"
            style={{ color: "#FF8C00" }}
          >
            Fale Conosco
          </p>
          <h2 className="font-tanker text-[60px] md:text-[90px] leading-none uppercase text-white">
            Solicite seu{" "}
            <span style={{ color: "#FF8C00" }}>Orçamento</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact info */}
          <div>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Nossa equipe responde em até{" "}
              <strong className="text-white">24h úteis</strong> com uma proposta
              personalizada para o seu time ou evento.
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/556299999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center border border-white/10 group-hover:border-[#FF8C00] transition-colors shrink-0"
                  style={{ backgroundColor: "#0F0F0F" }}
                >
                  <Icon
                    icon="simple-icons:whatsapp"
                    className="text-2xl"
                    style={{ color: "#FF8C00" }}
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                    WhatsApp
                  </p>
                  <p className="text-white font-bold group-hover:text-[#FF8C00] transition-colors">
                    +55 (62) 9999-9999
                  </p>
                </div>
              </a>

              <a
                href="mailto:contato@sobrosa.esp.br"
                className="flex items-center gap-5 group"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center border border-white/10 group-hover:border-[#FF8C00] transition-colors shrink-0"
                  style={{ backgroundColor: "#0F0F0F" }}
                >
                  <Icon
                    icon="lucide:mail"
                    className="text-2xl"
                    style={{ color: "#FF8C00" }}
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                    E-mail
                  </p>
                  <p className="text-white font-bold group-hover:text-[#FF8C00] transition-colors">
                    contato@sobrosa.esp.br
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div
                  className="w-14 h-14 flex items-center justify-center border border-white/10 shrink-0"
                  style={{ backgroundColor: "#0F0F0F" }}
                >
                  <Icon
                    icon="lucide:map-pin"
                    className="text-2xl"
                    style={{ color: "#FF8C00" }}
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                    Fábrica
                  </p>
                  <p className="text-white font-bold">
                    Polo Industrial · Goiânia, GO
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/5">
              <p className="text-xs text-gray-600 uppercase tracking-widest font-bold mb-3">
                Atendimento em
              </p>
              <p className="font-tanker text-6xl" style={{ color: "#FF8C00" }}>
                Todo Brasil
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {status === "success" ? (
              <div
                className="flex flex-col items-center justify-center text-center py-20 px-8 border border-white/10"
                style={{ backgroundColor: "#0F0F0F" }}
              >
                <Icon
                  icon="lucide:check-circle"
                  className="text-6xl mb-6"
                  style={{ color: "#FF8C00" }}
                />
                <h3 className="font-tanker text-4xl text-white uppercase mb-4">
                  Mensagem Enviada!
                </h3>
                <p className="text-gray-400 max-w-xs">
                  Nossa equipe entrará em contato em até 24h úteis.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-xs font-bold uppercase tracking-widest underline transition-opacity hover:opacity-70"
                  style={{ color: "#FF8C00" }}
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      required
                      value={form.telefone}
                      onChange={handleChange}
                      placeholder="(62) 9 0000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Modalidade *
                    </label>
                    <div className="relative">
                      <select
                        name="modalidade"
                        required
                        value={form.modalidade}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer pr-10`}
                      >
                        <option value="" disabled>
                          Selecione...
                        </option>
                        {modalidades.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                      <Icon
                        icon="lucide:chevron-down"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Quantidade estimada
                    </label>
                    <input
                      type="text"
                      name="quantidade"
                      value={form.quantidade}
                      onChange={handleChange}
                      placeholder="Ex: 20 peças"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    rows={5}
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto, prazo ou dúvidas..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Ocorreu um erro. Tente novamente ou entre em contato pelo
                    WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-5 font-bold uppercase text-sm tracking-widest text-black flex items-center justify-center gap-3 hover:opacity-90 transition-opacity disabled:opacity-50"
                  style={{ backgroundColor: "#FF8C00" }}
                >
                  {status === "loading" ? (
                    <>
                      <Icon icon="lucide:loader-2" className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Icon icon="lucide:send" />
                      Enviar Solicitação
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
