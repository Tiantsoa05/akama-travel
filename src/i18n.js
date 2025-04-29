import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      actualLanguage:'en',
      welcome: "Welcome to my website!",
      description: "This is a simple React page.",
      home:"Home",
      about:"About us",
      en:"English",
      fr:"French",
      slogan:"We'll help you to choose the best destination.",
      obj:"We organize the trip of your dream, suitable with your financial capacity and everywhere you want . Your trust, our expertise.",
      missions:"We offer to our customer satisfaction by giving them an inforgivable aventure.",
      objectifs:"Our objectives are firstly to power up the local products and the touristic sites, show to the world the biodiversity of Madagascar.",
      particularites:"We give a special service with a staff of experts, we assure the security and the passion of our customers.",
      visions:"Our vision is to be the most important travel agency in Madagascar and serving our lovely country by showing its diversity.",
      votre_nom:"Your name",
      votre_prenoms:"Your lastname",
      votre_mail:"Your e-mail address",
      date_depart:"The departure date",
      sejour:"Holiday duration",
      valider:"Confirm",
      titre_part:"Why us?",
      titre_obj:"Our objectives",
      titre_visions:"Our visions",
      titre_missions:"Our missions",
      incitation:"Don't wait :D",
      incitation_text:"Trust our service and pick the trip of your dreams.",
      nb_pers:"Number of travelers"
    }
  },
  fr: {
    translation: {
      actualLanguage:'fr',
      welcome: "Bienvenue sur mon site web!",
      description: "Ceci est une page React simple.",
      en:"Anglais",
      fr:"Français",
      home:"Accueil",
      about:"A propos",
      slogan:"Nous vous aidons à choisir la meilleure destination.",
      obj:"Nous organisons le voyage de vos rêves et de vos attentes,compatibles avec vos moyens et partout où vous voulez être . Votre confiance, notre expertise.",
      missions:"Nous avons pour mission de donner satisfaction à nos clients en leur offrant une aventure inoubliable et des rencontres passionnantes.",
      objectifs:"Nos objectifs sont la valorisation des sites touristiques et nos produits locaux, faire découvrir la biodiversité de Madagascar.",
      particularites:"Nous offrons des services hors du commun avec du personnel experts en leur domaine, nous offrons sécurité et passion à nos clients.",
      visions:"Notre vision est d'être le plus important agence de voyage de Madagascar et servir notre chère pays en montrant dans le monde entier sa diversité",
      votre_nom:"Votre nom",
      votre_prenoms:"Votre prénom",
      votre_mail:"Votre adresse mail",
      date_depart:"Date de départ",
      sejour:"Durée de séjour",
      valider:"Valider",
      titre_part:"Pourquoi nous?",
      titre_obj:"Nos objectifs",
      titre_visions:"Nos visions",
      titre_missions:"Nos missions",
      incitation:"Qu'attendez-vous? :D",
      incitation_text:"Faites nous confiance et reservez le voyage de vos rêves.",
      nb_pers:"Nombre de personnes"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", 
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
