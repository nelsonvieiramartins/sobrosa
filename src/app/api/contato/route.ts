import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { nome, telefone, email, modalidade, quantidade, mensagem } = body;

  if (!nome || !telefone || !email || !modalidade) {
    return NextResponse.json({ error: "Campos obrigatórios faltando" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "SobrOsa Site <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "contato@sobrosa.esp.br",
      subject: `Novo orçamento: ${modalidade} — ${nome}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="background:#FF8C00; color:#000; padding:16px 24px; margin:0;">
            Novo pedido de orçamento — SobrOsa
          </h2>
          <div style="padding:24px; background:#f9f9f9; border:1px solid #eee;">
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Telefone / WhatsApp:</strong> ${telefone}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Modalidade:</strong> ${modalidade}</p>
            ${quantidade ? `<p><strong>Quantidade estimada:</strong> ${quantidade}</p>` : ""}
            ${mensagem ? `<p><strong>Mensagem:</strong><br/>${mensagem.replace(/\n/g, "<br/>")}</p>` : ""}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ error: "Erro ao enviar mensagem" }, { status: 500 });
  }
}
