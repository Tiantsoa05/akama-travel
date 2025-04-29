import express from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()
const app = express();
app.use(express.json());

// Création du transporteur
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // compte qui envoie les mails
        pass: process.env.EMAIL_PASS,
    }
});

// Route pour envoyer le mail
app.post('/send-email', async (req, res) => {
    const { destination, numAdults, numSejour, checkInDate, checkOutDate } = req.body;
  
    const emailContent = `
      <h3>Nouvelle demande de réservation</h3>
      <p><strong>Destination:</strong> ${destination}</p>
      <p><strong>Nombre d'adultes:</strong> ${numAdults}</p>
      <p><strong>Nombre d'enfants:</strong> ${numSejour}</p>
      <p><strong>Date d'arrivée:</strong> ${checkInDate}</p>
      <p><strong>Date de départ:</strong> ${checkOutDate}</p>
    `;
  
    try {
      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,  // Ton email comme expéditeur
        to: process.env.EMAIL_ADMIN,  // Destinataire fixe
        subject: 'Nouvelle demande de réservation',
        html: emailContent,
      });
  
      console.log('Message envoyé: %s', info.messageId);
      res.send('Email envoyé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      res.status(500).send('Erreur lors de l\'envoi de l\'email');
    }
})

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
