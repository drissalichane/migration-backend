<!-- Two language versions: README.md (English) and README.fr.md (French). Any change to one must be
     made in the other. The app's interface is in English, so button and menu names stay in English
     in the French version too: the reader has to find those exact words on screen. -->

[English](README.md) | **Français**

# .NET Migration Platform

Met à niveau un dépôt .NET vers une version plus récente de .NET grâce à une chaîne d'agents IA, et
rend le résultat sous forme de pull request GitHub. Vous lui indiquez un dépôt, il analyse le code et
propose un plan de migration, vous validez le plan, il applique et compile les modifications, puis
vous relisez le code avant qu'il n'ouvre la pull request.

Tout fonctionne sur votre propre machine, dans Docker. Ce guide vous mène de zéro à la migration
complète d'une petite application de test, en une heure environ, dont l'essentiel est passé à
attendre les téléchargements et le pipeline.

---

## Ce qu'il vous faut

| | |
|---|---|
| **Docker Desktop** | [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/). Donnez-lui au moins 8 Go de mémoire (Settings → Resources) et gardez environ **12 Go d'espace disque libre** — l'image du pipeline contient trois SDK .NET. |
| **git** | [git-scm.com](https://git-scm.com/downloads) |
| **Un compte GitHub** | Il sert à vous connecter à l'application, et l'application ouvre les pull requests avec. |
| **Un compte OpenRouter** | [openrouter.ai](https://openrouter.ai). Les modèles d'IA du pipeline sont appelés à travers lui. Les nouveaux comptes reçoivent un petit crédit gratuit (environ 1 $ d'après plusieurs sources), qui peut suffire pour quelques essais : une migration de l'application de test coûte environ **0,05 $ – 0,25 $**. Pour aller plus loin, ajoutez du crédit — 5 $ suffisent largement. |

> **Dépôts publics uniquement, pour l'instant.** Le pipeline clone le dépôt sans identifiants : un
> dépôt privé ne peut donc pas encore être migré — même en étant connecté avec GitHub. L'application
> de test ci-dessous est publique, tout comme un fork de celle-ci.

> **À propos de votre code.** Le pipeline envoie le code source du dépôt à des fournisseurs de modèles
> d'IA (via OpenRouter). Utilisez l'application de test ci-dessous, ou un dépôt que vous avez le droit
> de partager avec des services d'IA tiers — si le code appartient à une organisation, vérifiez
> d'abord sa politique.

---

## 1. Récupérer le code

Les deux dépôts se placent côte à côte, **avec ces noms de dossiers** :

```bash
mkdir dotnet-migration
cd dotnet-migration
git clone https://github.com/drissalichane/migration-backend.git migration_backend
git clone https://github.com/drissalichane/migration-dashboard.git migration_dashboard
```

## 2. Créer une application OAuth GitHub

C'est ce qui vous permet de vous connecter avec GitHub, et à l'application d'ouvrir des pull
requests pour vous.

1. Sur GitHub : **Settings → Developer settings → OAuth Apps → New OAuth App**
   (lien direct : [github.com/settings/applications/new](https://github.com/settings/applications/new)).
2. Remplissez :
   - **Application name :** ce que vous voulez, par ex. `Migration Platform (local)`
   - **Homepage URL :** `http://localhost:5173`
   - **Authorization callback URL :** `http://localhost:5153/api/auth/github/callback` — exactement celle-ci.
3. Cliquez sur **Register application**. Copiez le **Client ID**.
4. Cliquez sur **Generate a new client secret** et copiez-le tout de suite (GitHub ne l'affiche qu'une fois).

## 3. Créer une clé OpenRouter

1. Inscrivez-vous sur [openrouter.ai](https://openrouter.ai). Votre compte démarre avec un petit crédit
   gratuit ; la page **Credits** affiche votre solde, et c'est là que vous en ajoutez s'il s'épuise.
   (Le pipeline utilise des modèles payants, pas les modèles `:free` d'OpenRouter : il consomme donc
   ce solde.)
2. Allez dans **Keys → Create Key** et copiez la clé (elle commence par `sk-or-`).

## 4. Remplir le fichier de configuration

Dans le dossier `migration_backend`, copiez le fichier d'exemple vers `.env` :

```bash
cd migration_backend
cp .env.example .env        # Windows (cmd / PowerShell) : copy .env.example .env
```

Ouvrez `.env` dans un éditeur de texte et remplissez :

| Paramètre | Valeur |
|---|---|
| `OPENROUTER_API_KEY` | la clé de l'étape 3 |
| `GITHUB_CLIENT_ID` | le Client ID de l'étape 2 |
| `GITHUB_CLIENT_SECRET` | le client secret de l'étape 2 |
| `JWT_KEY` | n'importe quel texte aléatoire long, 32 caractères ou plus — voir ci-dessous |
| `N8N_API_KEY` | laissez vide pour l'instant (l'étape 6 l'explique) |

Pour générer une `JWT_KEY` :

```powershell
# Windows PowerShell
[Convert]::ToBase64String((1..48 | ForEach-Object { Get-Random -Maximum 256 }))
```
```bash
# macOS / Linux
openssl rand -base64 48
```

`.env` contient vos secrets. Il est ignoré par git — ne le committez jamais et ne l'envoyez à personne.

## 5. Tout démarrer

Toujours dans `migration_backend`, avec Docker Desktop lancé :

```bash
docker compose up -d --build
```

Le **premier** démarrage construit les images et prend **15 à 25 minutes**. Les suivants prennent
quelques secondes.

Une fois terminé, vérifiez que tout tourne :

```bash
docker compose ps
```

Vous devez voir `dashboard`, `api` et `n8n` en état **running**. (`n8n-setup` est une aide ponctuelle
qui prépare n8n à chaque démarrage puis s'arrête — elle n'apparaît plus dans cette liste une fois
terminée.)

Trois adresses sont maintenant disponibles :

| | |
|---|---|
| **http://localhost:5173** | le dashboard — là où vous travaillez |
| **http://localhost:5678** | n8n — le moteur qui exécute le pipeline d'IA |
| http://localhost:5153 | l'API derrière le dashboard (rien à ouvrir ici) |

## 6. Créer votre compte n8n (une seule fois)

Ouvrez **http://localhost:5678** et créez le compte propriétaire. L'e-mail et le mot de passe restent
sur votre machine ; rien n'est envoyé aux serveurs de n8n.

Tout le reste est déjà configuré : les quatre workflows du pipeline sont importés et actifs, et votre
clé OpenRouter est connectée. Vous n'avez rien à modifier dans n8n.

**Facultatif, recommandé :** permettre au dashboard d'afficher le nombre exact de tokens et les
durées de chaque exécution.

1. Dans n8n : **Settings → n8n API → Create an API key**, copiez-la.
2. Collez-la dans `.env` : `N8N_API_KEY=...`
3. Relancez `docker compose up -d`.

## 7. Se connecter au dashboard

> **Recommandé : se connecter avec GitHub.** C'est aujourd'hui le parcours le plus complet et le mieux
> testé de l'application. Il fonctionne dès que le `GITHUB_CLIENT_ID` et le `GITHUB_CLIENT_SECRET` de
> l'application OAuth sont dans `.env` (étapes 2 et 4), et il couvre tout — parcourir vos dépôts et
> ouvrir des pull requests — sans configuration supplémentaire.

Ouvrez **http://localhost:5173** et cliquez sur **Login with GitHub**. GitHub vous demande d'autoriser
votre application OAuth : elle demande l'accès aux dépôts parce qu'elle ouvre des pull requests en
votre nom.

Tout compte GitHub qui se connecte reçoit le rôle Admin.

**Alternative : un compte avec nom d'utilisateur et mot de passe** (*Sign up* sur la page de
connexion). Choisissez le rôle **Admin** pour essayer toutes les fonctionnalités. Un tel compte a
besoin d'une étape de plus avant de pouvoir ouvrir des pull requests ou parcourir vos dépôts : dans
**Settings → GitHub Integration**, collez un
[personal access token](https://github.com/settings/tokens/new?scopes=repo&description=.NET%20Migration%20Platform)
GitHub avec le scope `repo`. L'application le vérifie auprès de GitHub et le stocke chiffré.

## 8. Créer un projet

L'application de test est [LegacyTestApp](https://github.com/drissalichane/LegacyTestApp) : une petite
solution .NET 6 remplie d'API obsolètes ou supprimées dans les versions ultérieures de .NET
(BinaryFormatter, `Thread.Abort`, `WebClient`, d'anciennes versions d'AutoMapper et de RestSharp, …).

1. **Forkez-la** sur votre propre compte GitHub (bouton **Fork** sur sa page GitHub). L'application
   doit pouvoir pousser une branche vers le dépôt qu'elle migre : il doit donc être à vous. Gardez le
   fork **public** (c'est le réglage par défaut de GitHub pour le fork d'un dépôt public) — les dépôts
   privés ne sont pas encore pris en charge.
2. Dans le dashboard, ouvrez **Projects → New Project**.
3. Donnez-lui un nom, choisissez votre fork sous **Repository** (**Browse** liste vos dépôts GitHub,
   ou collez son URL), puis cliquez sur **Import**.

## 9. Lancer une migration

1. Ouvrez **Dashboard** (la page d'accueil) et sélectionnez votre projet.
2. Choisissez éventuellement une branche ou un commit. Choisissez le **Target .NET Framework** —
   `.NET 9` est un bon premier test.
3. Cliquez sur **Create Migration PR**. Vous arrivez sur la page du job, qui suit l'exécution en direct.

Le job passe ensuite par ces étapes (le statut s'affiche en haut de la page) :

| Statut | Ce qui se passe | Votre rôle |
|---|---|---|
| **Analyzing** (7–20 min) | Clone le dépôt, le compile, exécute le .NET Upgrade Assistant de Microsoft, puis un agent IA étudie chaque résultat et rédige un plan de migration. | Suivre le journal en direct, ou revenir plus tard. |
| **Pending Plan Approval** | Le plan est prêt : chaque modification, les mises à jour des packages NuGet, et les éventuelles alertes de sécurité. | Le relire. Chaque modification est marquée **MUST** (nécessaire pour compiler ou fonctionner sur la nouvelle version) ou **SHOULD** (obsolète mais encore fonctionnelle) — cliquez sur l'étiquette pour basculer. Seules les modifications MUST sont appliquées. Puis **Approve & Execute**. |
| **Executing** (4–15 min) | Applique les modifications, compile le résultat, et si la compilation échoue, un « Error Fixer » IA corrige et recompile. Puis rédige un rapport. | Suivre ou attendre. |
| **Pending PR Review** | Chaque modification est affichée sous forme de diff côte à côte. | Décochez ce que vous ne voulez pas, modifiez un changement à la main si besoin, puis **Approve Selected** pour ouvrir la pull request. (**Reject & Save** la garde plutôt comme brouillon ; un brouillon peut encore devenir une pull request plus tard avec **Create PR**.) |
| **Pull request** | Une branche et une pull request apparaissent sur votre fork GitHub. | La relire et la fusionner comme n'importe quelle PR. |

### Suivre une exécution étape par étape dans n8n

La page du job affiche le journal de l'exécution. n8n montre le pipeline lui-même : chaque étape, ce
qui y est entré et ce qui en est sorti, et l'étape qui a échoué. Ouvrez **http://localhost:5678**,
connectez-vous avec votre compte n8n et utilisez **Executions** dans le menu de gauche, ou allez
directement à l'historique d'un workflow :

| Workflow | S'exécute quand | Historique |
|---|---|---|
| **Part 1 – Analyze** | le job est en *Analyzing* | http://localhost:5678/workflow/dnmigPart1Analyz/executions |
| **Part 2 – Execute** | le job est en *Executing* | http://localhost:5678/workflow/dnmigPart2Execut/executions |
| Build Tool | l'Error Fixer recompile le code, ou une PR relue est recompilée | http://localhost:5678/workflow/dnmigBuildTool00/executions |
| Package API | l'Error Fixer consulte l'API d'un package NuGet | http://localhost:5678/workflow/dnmigPackageApi0/executions |

Cliquez sur une exécution pour l'ouvrir : chaque étape apparaît sur le canevas, en vert ou en rouge,
et un clic sur une étape montre ses entrées et ses sorties. L'exécution la plus récente est en haut.
Son numéro est le compteur propre à n8n, pas le numéro de job affiché dans le dashboard ; faites-les
correspondre par leur heure de début.

---

## Commandes courantes

À lancer dans le dossier `migration_backend`.

| | |
|---|---|
| Démarrer | `docker compose up -d` |
| Arrêter | `docker compose down` — vos comptes, projets et exécutions sont conservés |
| Voir ce qui tourne | `docker compose ps` |
| Suivre le journal d'un service | `docker compose logs -f n8n` (ou `api`, `dashboard`) |
| Après avoir modifié `.env` | `docker compose up -d` |
| Après avoir récupéré du nouveau code | `docker compose up -d --build` |
| **Tout effacer** et repartir de zéro | `docker compose down -v` — supprime toutes les données, y compris votre compte n8n |

## Dépannage

| Symptôme | Solution |
|---|---|
| `docker compose up` s'arrête avec *« Set OPENROUTER_API_KEY in .env »* (ou un autre paramètre) | Cette valeur manque dans `.env`. |
| *« port is already allocated »* | Autre chose utilise le port 5173, 5153 ou 5678. Arrêtez-le, puis relancez `docker compose up -d`. |
| GitHub affiche *« The redirect_uri is not associated with this application »* | L'URL de callback de votre application OAuth n'est pas exactement `http://localhost:5153/api/auth/github/callback`. |
| Le dashboard affiche des erreurs ou des pages vides au bout d'un moment | Votre connexion a expiré : déconnectez-vous et refaites **Login with GitHub**. |
| Un job passe en **Failed** dès le début de *Analyzing*, à l'étape de clonage | Le dépôt est privé, ou son URL est fausse. Seuls les dépôts publics sont pris en charge pour l'instant. |
| Un job passe en **Failed** quelques minutes après le début de *Analyzing* | Ouvrez l'exécution échouée dans n8n (voir *Suivre une exécution étape par étape dans n8n*) : le nœud rouge indique pourquoi. La cause la plus fréquente est la clé OpenRouter — fausse, ou sans crédit. Corrigez `.env`, lancez `docker compose up -d`, démarrez une nouvelle migration. |
| `docker compose ps` n'affiche pas `n8n` | Lancez `docker compose logs n8n-setup` — il explique ce qu'il n'a pas pu configurer. |
| Le premier job est plus lent que les suivants | Normal : la première compilation télécharge ~370 Mo de packages NuGet, conservés pour les exécutions suivantes. |

## Coûts, et ce que signifient les chiffres

- Chaque exécution consomme du crédit OpenRouter. **Le montant exact facturé figure sur la page
  Activity d'OpenRouter.**
- Les nombres de tokens et les durées de la page du job sont mesurés (lus dans l'historique de
  l'exécution conservé par n8n, une fois `N8N_API_KEY` renseigné). Sa **colonne de coût est une
  estimation** fondée sur les prix catalogue d'OpenRouter.

## Comment tout s'articule

```
 navigateur ──► dashboard (:5173) ──► api (:5153) ──► n8n (:5678) ──► OpenRouter (modèles d'IA)
                                        ▲                │
                                        └── modifications de fichiers, journaux ─┘
                                             tous deux travaillent sur les mêmes dépôts clonés
```

- **dashboard** — l'application web React.
- **api** — .NET 9 : la base de données, la connexion GitHub et les pull requests, et les outils de
  fichiers que les agents IA utilisent pour lire et modifier le code.
- **n8n** — exécute les deux workflows du pipeline (Analyze, Execute) ainsi que deux outils d'appui,
  avec les SDK .NET 8, 9 et 10 et l'Upgrade Assistant de Microsoft dans le conteneur.
- Les données vivent dans des volumes Docker : les données de n8n, la base de données de l'API, et un
  dépôt cloné par job.
