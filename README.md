# MIRA ÉLEVAGE — Site public V1

Site web professionnel, responsive et léger pour MIRA ÉLEVAGE. La version actuelle est une couche publique et ne constitue pas encore une WebApp éditoriale.

## Objectif

- Présenter MIRA ÉLEVAGE comme un acteur d’élevage, d’agroéquipement et de formation.
- Proposer des espaces pour produits, services, équipements, formations, réalisations, galerie et actualités.
- Préparer les données pour une future API ou base de données.
- Faciliter la connexion d’un futur agent vocal.

## Lancement

Vous pouvez ouvrir directement `index.html` par double-clic. Le site n’utilise pas de framework ni d’imports JavaScript nécessitant un serveur.

### Option 1 — VS Code Live Server

1. Ouvrez le dossier du projet dans VS Code.
2. Exécutez `npx live-server` ou utilisez l’extension **Live Server**.
3. Ouvrez l’URL affichée, généralement `http://127.0.0.1:5500`.

### Option 2 — Python

```powershell
python -m http.server 8000
```

Puis ouvrez `http://localhost:8000`.

### Option 3 — Replit

Créez un nouveau projet Replit, téléchargez les fichiers du dossier ou ajoutez ce dossier comme dépôt, puis lancez un serveur statique avec `python -m http.server 8000`.

## Fichiers principaux

- `index.html` — structure de la page et métadonnées.
- `styles.css` — design responsive et animations.
- `data.js` — données métier et contenus mockés centralisés.
- `app.js` — rendu des contenus, filtres, formulaire et interactions.
- `logo mira.png` — logo officiel fourni par le client, conservé sans modification.
- `assets/accueil-agriculture.jpg` — visuel composite utilisé en arrière-plan de l’accueil.

### Crédit du visuel d’accueil

Le visuel composite `assets/accueil-agriculture.jpg` assemble deux photos publiées sur Wikimedia Commons, sous licence CC BY-SA 4.0 :

- « A poultry farm of Prof. Basaza in Najjeera.jpg », par Emmanuel Ssekaggo : https://commons.wikimedia.org/wiki/File:A_poultry_farm_of_Prof._Basaza_in_Najjeera.jpg
- « African farmer taking tractor out.jpg », par Christine Xuereb Seidu : https://commons.wikimedia.org/wiki/File:African_farmer_taking_tractor_out.jpg

Le visuel composite est diffusé sous la même licence CC BY-SA 4.0.

### Crédits des visuels agricoles

Les autres images de démonstration privilégient des scènes agricoles africaines en lien avec le contenu des sections :

- « Farm mechanization in Oromia.jpg », par Lucy Shaw, Éthiopie : https://commons.wikimedia.org/wiki/File:Farm_mechanization_in_Oromia.jpg (CC BY-SA 4.0).
- « Milling machine processing grain flour.jpg », par Rwebogora, Tanzanie : https://commons.wikimedia.org/wiki/File:Milling_machine_processing_grain_flour.jpg (CC BY-SA 4.0).
- « A poultry farm of Prof. Basaza in Najjeera.jpg », par Emmanuel Ssekaggo, Ouganda : https://commons.wikimedia.org/wiki/File:A_poultry_farm_of_Prof._Basaza_in_Najjeera.jpg (CC BY-SA 4.0).
- « Chicken feed made from farm products.jpg », par MakaLeanne, Zimbabwe : https://commons.wikimedia.org/wiki/File:Chicken_feed_made_from_farm_products.jpg (CC BY-SA 4.0).
- « Training women farmers on climate smart innovations in Nyando, Kenya (9417196732).jpg », par Climate Change, Agriculture and Food Security : https://commons.wikimedia.org/wiki/File:Training_women_farmers_on_climate_smart_innovations_in_Nyando,_Kenya_(9417196732).jpg (CC BY 2.0).
- « African farmer taking tractor out.jpg », par Christine Xuereb Seidu : https://commons.wikimedia.org/wiki/File:African_farmer_taking_tractor_out.jpg (CC BY-SA 4.0).
- Champ cultivé et rencontre communautaire : photos Unsplash chargées depuis `images.unsplash.com`.

## Configuration centralisée

Le numéro WhatsApp, le numéro de téléphone et les informations de l’entreprise sont dans `settings` de `data.js`. La configuration devra être déplacée vers une API ou une base de données lors de la création de la WebApp.

## Vérifications à effectuer

- Vérifier les liens internes et externes.
- Tester le formulaire sur mobile et desktop.
- Tester les filtres de galerie.
- Vérifier le comportement du menu mobile.
- Vérifier l’accessibilité des boutons et des formulaires.
- Remplacer les images de démonstration par les images officielles du client.
- Ajouter les actualités, projets et formations réels avant publication.

## Futur WebApp

La couche actuelle est volontairement compacte. Pour l’édition future :

1. Déplacer les données de `data.js` vers une API ou une base.
2. Ajouter une administration privée avec des rôles.
3. Reutiliser les composants de cartes, boutons, formulaires et filtres.
4. Connecter le formulaire de devis à une API sécurisée.
5. Connecter MIRA Agent à un moteur vocal asynchrone.

Le site ne doit jamais contenir de clé API secrète dans le frontend.
