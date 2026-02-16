# 1. Evolució històrica dels videojocs a la web
## 1.1 Limitacions prèvies a HTML5

HTML5 (2014) va suposar grans canvis a la web. Entre elles, la possibilitat de dibuixar gràfics amb l'element `<canvas>` i la possibilitat d'emmagatzemar dades locals amb LocalStorage. Abans, la interacció amb l'usuari es feia amb HTML + CSS + JavaScript simple i amb pluguins que permetien executar eines del sistema operatiu des del navegador. 

## 1.2 Videojocs web basats en servidor

Abans que el navegador pogués dibuixar gràfics, els jocs web es basaven en informació donava per text,  imatges estàtiques i formularis.

Alguns dels jocs destacables van ser:

[![Ikariam gameplay](https://img.youtube.com/vi/6cm7BvcaY7o/0.jpg)](https://www.youtube.com/watch?v=6cm7BvcaY7o)
_Ikariam (Gameforge, 2008)_

[![Ikariam gameplay](https://img.youtube.com/vi/_SZuIQH5SE4/0.jpg)](https://youtu.be/_SZuIQH5SE4)
_Comunio (Fabian Loschek, 2000)_

Molts d'aquests jocs eren RPGs en format text o jocs online per torns. 

## 1.3 Videojocs basats en plugins: Flash i Java Applets

Per altra banda, els navegadors permetien incrustar plugins externs mitjançant elements com `<object>` i `<embed>`.
Aquests plugins eren programes instal·lats a l’ordinador de l’usuari (com el reproductor Flash Player o la Java Virtual Machine) que el navegador carregava i executava dins de la pàgina web.

Entre altres, aquests plugins permetien dibuixar gràfics 2D i 3D al navegador i executar aplicacions interactives complexes.

_Curiositat, com es feien els videojocs amb Adobe Flash Player: https://youtu.be/NTuhk8j3A-o?list=PLD17B0A2D547A9E5D_

Alguns dels jocs destacables van ser:

[![Samorost gameplay](https://img.youtube.com/vi/kRV9yUKbKuM/0.jpg)](https://youtu.be/kRV9yUKbKuM)
_Samorost (Amanita Design, 2003)_

[![The Binding of Isaac gameplay](https://img.youtube.com/vi/oU8EEHy9vR0/0.jpg)](https://youtu.be/oU8EEHy9vR0)
_The Binding of Isaac (Edmund McMillen & Florian Himsl, 2011)_

[![Meat Boy gameplay](https://img.youtube.com/vi/Dhz_YjR1Ve0/0.jpg)](https://youtu.be/Dhz_YjR1Ve0)
_Meat Boy (Team Meat, 2010)_

[![Minecraft Beta](https://i.imgur.com/LU4nt.jpeg)](https://imgur.com/LU4nt)
_Minecraft Beta (Mojang, 2009)_

# 2. HTML5 i la nova era
Amb el pas del temps, els plugins com Flash Player o Java Applets van començar a mostrar vulnerabilitats greus, problemes de rendiment i incompatibilitat amb dispositius mòbils. La web necessitava una alternativa moderna, segura i nativa.

A partir del 2010 els navegadors van començar a implementar progressivament les noves funcionalitats d’HTML5, i el 2014 l’estàndard es va publicar oficialment. Aquest conjunt de noves llibreries i APIs va permetre substituir completament els antics plugins.

Algunes de les novetats més importants van ser:
- **Canvas2D.** Va permetre dibuixar gràfics, animacions i sprites directament al navegador.
- **WebGL.** Va permetre gràfics 3D accelerats per GPU, comparable a OpenGL.
- **WebAudio API.** Va permetre gestionar so, música, efectes i mescles d’àudio.
- **LocalStorage.** Va permetre guardar partides, configuracions i dades de joc de manera persistent.
- **APIs d’entrada.** Va permetre el suport per a teclat, ratolí, pantalla tàctil i gamepads.

Totes aquestes llibreries van fer possible crear interactius amb el navegador de forma nativa. Sense la necessitat de recórrer a Flash o Java applets.

# 3. Phaser.js
## 3.1 Llibreria vs. framework
Amb l’arribada d’HTML5, els desenvolupadors web van començar a crear llibreries i frameworks per facilitar la creació de videojocs web. Programar directament amb Canvas o WebGL era complex (encara ho és).

Phaser (2013) és un d’aquests frameworks que facilita el desenvolupament de videojocs HTML5.

| Framework      | Llibreria |
| ----------- | ----------- |
| És una estructua completa. Defineix la metodolgia que s'ha de seguir. | Agrupa eines i funcions per a utilitzar amb total flexibilitat. |
| Controla el flux del programa. | El desenvolupador és responsable del flux del codi. |
| Hi ha una metodologia definida. | Flexibilitat completa per usar les funcions que ofereix la llibreria. |

_Framework vs. llibreria (Brandon Wozniewicz, 2019): https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/_

Amb Phaser.js es poden desenvolupar la majoria d’interactius i videojocs 2D que abans es feien amb Flash, però utilitzant tecnologia moderna i nativa del navegador.

_Pàgina web oficial: https://phaser.io/_

## 3.2 Preparació d'entorn i configuració inicial

_Documentació oficial - guia d'entrada a Phaser.js: https://phaser.io/learn_

Per començar a utilitzar Phaser, necessitem:
- Iniciar un servidor local.
- Carregar les llibreries phaser.js.
- Definir la configuració inicial del projecte. 

### 3.2.1 Inicial un servidor local
Phaser necessita poder carregar recursos propis (imatges, àudios, etc.) per a construir cada projecte. Si ho carreguessim tot amb fitxers estàtics, per exemple `file://C:/Users/eric/recursos/imatges-phaser/`, hauriem de donar la llibertat al navegador de poder accedir a qualsevol indret del nostre ordinador. 

Exposar el nostres fitxers a la web és molt perillòs. La manera adequada és crear un entorn tancat i controlat, amb un servidor, per exemple `http://127.0.0.1:5500/recursos/imatges-phaser`.

> [!NOTE]
> A Visual Studio Code trobem l'extensió Live Server (Ritwick Dey) que permet obrir un servidor local a la carpeta del projecte. 
> A linux podem iniciar un servidor amb la comanda python instal·lada: python -m SimpleHTTPServer 8080

### 3.2.2 Carregar les llibreries phaser.js

Podem carregar Phaser remotament des d’un servidor web. 

```html
<!-- Pas únic: Càrrega remota -->
<script src="//cdn.jsdelivr.net/npm/phaser@3.11.0/dist/phaser.js"></script>
```

També podem carregar Phaser localment baixant-lo des de la seva pàgina oficial. phaser.js és la versió llegible, mentre que phaser.min.js és la versió minificada i més lleugera.

```html
<!-- Pas 1: Baixada de l'última versió disponible (https://phaser.io/download/stable) -->
<!-- Pas 2: Càrrega local -->
<script src="./phaser.min.js"></script>
```

### 3.2.1 Configuració inicial del projecte i cicle de vida

A la part javascript del nostre projecte web, hem de definir aquests 4 elements:
- **var config.** Objecte de configuració. Defineix la configuració del projecte. 
- **preload().** S’executa abans de començar el joc. Carrega recursos en memòria (imatges, sons, spritesheets, …). 
- **create().** Inicialitza el joc. Pot carregar en escena els fitxers que s'han carregat en memòria.
- **update().** Loop principal. S’executa a cada frame (60 FPS).

```js
var config = {
    type: Phaser.AUTO,     // Phaser tria automàticament el context de renderitzat (més info. a l'enllaç de la documentació)
    width: 800,            // Amplada de la pantalla del joc
    height: 600,           // Alçada de la pantalla del joc
    scene: {
        preload: preload,  // Funció que carrega recursos
        create: create,    // Funció que inicialitza el joc
        update: update     // Funció que s'executa cada frame
    }
};

// Creem el joc amb la configuració definida
var game = new Phaser.Game(config);

function preload ()
{
    // Aquí carregarem imatges, sons, etc.
}

function create ()
{
    // Aquí col·locarem els elements inicials del joc
}

function update ()
{
    // Aquí escriurem la lògica que s'executa contínuament
}

```


_Documentació - Tutorial guiat: https://phaser.io/tutorials/making-your-first-phaser-3-game/part1_

_Objecte info: https://phaser.io/tutorials/making-your-first-phaser-3-game/part1_

_Funció preload() i create(): https://phaser.io/tutorials/making-your-first-phaser-3-game/part2_

_Funció update(): https://phaser.io/tutorials/making-your-first-phaser-3-game/part7_
