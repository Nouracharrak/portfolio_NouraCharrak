import { v4 as uuidv4 } from 'uuid';
import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
    {
        id: 1,
        title: 'ZeroGravityStays',
        url: 'zerogravitystays',
        category: 'Web Application',
        img: '/images/home.png',
        ProjectHeader: {
            title: 'ZeroGravityStays',
            publishDate: 'Mars 2025',
            tags: 'Full-stack / Réservation / Frontend / Backend',
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'Liste des categories 1',
                img: '/images/hotelvuepiscine (3).png',
            },
            {
                id: uuidv4(),
                title: 'Liste des categories 2',
                img: '/images/suite2.png',
            },
			{
                id: uuidv4(),
                title: 'Page des categories 3',
                img: '/images/spa.png',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'A propos du client',
            CompanyInfo: [
                {
                    id: uuidv4(),
                    title: 'Projet personnel',
                    details: 'Développement web complet',
                },
                {
                    id: uuidv4(),
                    title: 'Technologies',
                    details: 'React, Node.js, Express, MongoDB, Scss',
                },
                {
                    id: uuidv4(),
                    title: 'Démo',
                    details: 'https://zero-gravity-stays.vercel.app/',
                },
            ],
            ObjectivesHeading: 'Objectif',
            ObjectivesDetails: "Permettre aux utilisateurs de rechercher, réserver et gérer des séjours dans des hôtels de façon simple et intuitive.",
            Technologies: [
                {
                    title: 'Outils & technologies',
                    techs: ['React, Node.js, Express, MongoDB, Scss'],
                },
            ],
            ProjectDetailsHeading: 'Challenge',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: "Développement du front et du back office, gestion des réservations et paiements sécurisés, filtrage dynamique des chambres selon les critères des utilisateurs.",
                },
            ],
            SocialSharingHeading: 'Partager ce projet',
            SocialSharing: [
                {
                    id: uuidv4(),
                    name: 'LinkedIn',
                    icon: "FiLinkedIn",
                    url: 'https://www.linkedin.com/in/noura-charrak-a55b67131/',
                },
            ],
        },
    },
    {
        id: 2,
        title: 'Crystallina',
        url: 'ecommerce-bijoux',
        category: 'Web Application',
        img: '/images/trendingCollection.webp',
        ProjectHeader: {
            title: 'E-commerce Bijoux',
            publishDate: 'Avril 2025',
            tags: 'Full-stack / E-commerce / Frontend / Backend',
        },
        ProjectImages: [
            {
                id: uuidv4(),
                title: 'Page boutique',
                img: '/images/silverCollection.webp',
            },
            {
                id: uuidv4(),
                title: 'Page produit',
                img: '/images/newArrivals.webp',
            },
            {
                id: uuidv4(),
                title: 'Panier',
                img: '/images/goldCollection.webp',
            },
        ],
        ProjectInfo: {
            ClientHeading: 'A propos du projet',
            CompanyInfo: [
                {
                    id: uuidv4(),
                    title: 'Projet personnel',
                    details: 'Développement web complet',
                },
                {
                    id: uuidv4(),
                    title: 'Technologies',
                    details: 'NextJs, MongoDB, Stripe, TailwindCSS',
                },
                {
                    id: uuidv4(),
                    title: 'Démo',
                    details: 'https://crystallina-store.vercel.app/',
                },
            ],
            ObjectivesHeading: 'Objectif',
            ObjectivesDetails: "Créer une plateforme e-commerce pour présenter et vendre des bijoux faits main avec paiement en ligne et espace client sécurisé.",
            Technologies: [
                {
                    title: 'Outils & technologies',
                    techs: ['NextJs', 'Clerk', 'Stripe', 'MongoDB', 'TailwindCSS'],
                },
            ],
            ProjectDetailsHeading: 'Défis & Solutions',
            ProjectDetails: [
                {
                    id: uuidv4(),
                    details: "Intégration complète du processus de commande, gestion du panier d'achats, sécurisation des paiements via Stripe, ainsi que le back-office pour la gestion des produits et des commandes.",
                },
            ],
            SocialSharingHeading: 'Partager ce projet',
            SocialSharing: [
                {
                    id: uuidv4(),
                    name: 'Instagram',
                    icon: "FiInstagram",
                    url: 'https://instagram.com/Noura_charrak',
                },
            ],
        },
    }
];
