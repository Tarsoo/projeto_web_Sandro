const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const AUTH_TOKEN = process.env.AUTH_TOKEN;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const authHeader = event.headers['authorization'];
  if (!authHeader || authHeader !== `Bearer ${AUTH_TOKEN}`) {
    return {
      statusCode: 401,
      body: 'Unauthorized',
    };
  }

  try {
    const { toMail, content } = JSON.parse(event.body);

    if (!toMail || !content) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Campos toMail e content são obrigatórios' }),
      };
    }

    const msg = {
      to: toMail,
      from: 'jplr16@gmail.com', // ⚠️ Precisa ser um remetente validado no SendGrid
      subject: 'Mensagem da função Netlify',
      text: content,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email enviado com sucesso' }),
    };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return {
      statusCode: error.code || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
