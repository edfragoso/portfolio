const nodemailer = require("nodemailer");

export async function POST(request: Request) {
  const { name, email, title, message } = await request.json();
  const userEmailTo = email;
  const { to, subject, text } = {
    to: process.env.MAILTO,
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
  
    const userInfo = await transporter.sendMail({
      from: `"Mensagem recebida... 👻" <${process.env.USERMAIL}>`,
      to: userEmailTo,
      subject,
      text,
      html: `Olá, <b>${name}</b> tudo bem?<br> Espero realmente que sim.<br>Passando pra avisar que recebi sua mensagem, muito me alegra o teu contato.<br>Sobre a mensagem, <b>"${title}"</b> prometo responder o mais breve possível.<br><br>Atenciosamente;<br><b><br>Ednilson Fragoso</br>`
    });

    //for possibly future use
    /* const infoConfirmation = await transporter.sendMail(confirmationEmail); */

    console.log("E-mail enviado:");

    return new Response("E-mail enviado com sucesso", { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return new Response("Erro ao enviar e-mail", { status: 500 });
  }
}
