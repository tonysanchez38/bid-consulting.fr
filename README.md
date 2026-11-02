# Bid Consulting

Site officiel de [Bid Consulting](https://www.bid-consulting.fr/) : audit de chiffrage, accompagnement aux marchés publics et outils de chiffrage pour TPE et PME.

## Offres présentées (tarifs HT, octobre 2026)

- Audit de chiffrage : Express 190 € (moins de 30 k€, 72 h ouvrées), Standard 390 € (30 à 150 k€, 5 jours ouvrés), carnet de 5 Standard à 1 750 € ;
- Chiffrage externalisé d’un lot : 590 € (7 jours ouvrés) ;
- Marchés publics : Go / No Go 149 €, Pack Dépôt 790 €, Pack Complet 1 190 €, Pack Groupement 1 490 €, Veille qualifiée 69 € par mois ;
- Outils de chiffrage : modèle standard 49 €, Base 149 €, Rentabilité 249 €, Rentabilité + nomenclature 349 €.

## Pages (refonte du 1er novembre 2026)

Le site suit la devise : chaque verbe correspond à une offre.

- `index.html` : présentation générale courte (accroche, terrain libre, trois offres, engagements, contact) ;
- `audit-chiffrage.html` : Chiffrer juste ;
- `marches-publics-tpe.html` : Répondre mieux ;
- `outil-chiffrage-artisan.html` : Décider en connaissance de cause ;
- `approche.html` (Méthode) : outil de chiffrage en six étapes, six gains, grille océan bleu formulée en gestes positifs, profil, engagements, FAQ générale ;
- `tarifs.html` : tous les prix sur une page (catalogue d'offres en JSON-LD) ;
- `analyse-rentabilite-chantier.html`, `calcul-prix-vente-artisan.html`, `chiffrage-chaudronnerie.html` : guides ;
- `contre-chiffrage.html`, `site-vitrine-artisan.html` : anciennes URL, redirection, non indexées ;
- `documents/CGV_B2B_Bid_Consulting.pdf` : CGV B2B, version du 1er novembre 2026.

En-tête et pied de page sont identiques sur toutes les pages.

## Référencement

- Balises `<head>` homogènes : titre de moins de 60 caractères, description de 140 à 160 caractères, canonical, Open Graph et Twitter Card sur chaque page indexable ;
- Données structurées JSON-LD : ProfessionalService (adresse, zone d'intervention Grenoble, Isère, Auvergne-Rhône-Alpes, France), WebSite, WebPage, BreadcrumbList, Service avec offres, Article et FAQPage ;
- Icônes : `favicon.ico`, favicon SVG et PNG, `apple-touch-icon.png`, `site.webmanifest` ;
- Image de partage optimisée : `assets/img/og-bid-consulting.jpg` (1200 x 630) ;
- `llms.txt` : résumé des offres pour les assistants de recherche.
