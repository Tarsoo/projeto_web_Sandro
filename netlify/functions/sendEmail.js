const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const AUTH_TOKEN = process.env.AUTH_TOKEN;

exports.handler = async (event) => {
  // ✔️ Verifica se é POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  // ✔️ Verifica o token no header Authorization
  const authHeader = event.headers['authorization'];
  if (!authHeader || authHeader !== `Bearer ${AUTH_TOKEN}`) {
    return {
      statusCode: 401,
      body: 'Unauthorized',
    };
  }

  const { toMail, content } = JSON.parse(event.body);

  const msg = {
    to: toMail,
    from: 'jplr16@gmail.com', // ✔️ Remetente validado no SendGrid
    subject: 'Mensagem da função Netlify',
    text: content,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email enviado com sucesso' }),
    };
  } catch (error) {
    return {
      statusCode: error.code || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
