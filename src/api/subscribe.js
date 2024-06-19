import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    try {
      await sendgrid.send({
        to: email,
        from: 'newsletter@knockstreetwear.com',
        subject: 'Welcome to Knock Streetwear!',
        html: '<p>Thank you for subscribing to our newsletter. Stay tuned for updates and promotions!</p>',
      });

      return res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
      return res.status(500).json({ error: 'Subscription failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}