const nodemailer = require("nodemailer");

export async function POST(request: Request) {
    const { name, email, title, message } = await request.json();
    const { to, subject, text } = {
      to: "ednilson.fragoso@hotmail.com", 
      subject: "Contato via Portfolio ✔",
      text: `Nome: ${name}\nE-mail: ${email}\nAssunto: ${title}\nMensagem: ${message}`,
    };
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USERMAIL,
        pass: process.env.USERPASS,
      },
    });
  
    try {
      const info = await transporter.sendMail({
        from: `"Nova mensagem... 👻" <${process.env.USERMAIL}>`,
        to,
        subject,
        text,
      });
  
      console.log("E-mail enviado:", info.response);
      return new Response("E-mail enviado com sucesso", { status: 200 });
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      return new Response("Erro ao enviar e-mail", { status: 500 });
    }
  }
  