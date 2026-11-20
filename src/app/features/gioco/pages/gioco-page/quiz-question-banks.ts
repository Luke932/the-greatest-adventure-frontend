import type { QuizQuestion } from './gioco-page';

const q = (
  question: string,
  answers: string[],
  correctAnswer: number,
  explanation: string
): QuizQuestion => ({
  question,
  answers,
  correctAnswer,
  explanation
});

export const SERIES_QUESTIONS: QuizQuestion[] = [

  // ==========================================
  // FRIENDS - 10 DOMANDE
  // ==========================================

  q(
    'In quale locale si ritrovano spesso i sei amici?',
    ['MacLaren’s', 'Central Perk', 'Monk’s Café', 'The Cheesecake Factory'],
    1,
    'Central Perk! Quel divano arancione è praticamente il settimo protagonista.'
  ),
  q(
    'Qual è il mestiere di Ross Geller?',
    ['Avvocato', 'Medico', 'Paleontologo', 'Architetto'],
    2,
    'Ross è un paleontologo. E non dimentichiamo la sua passione per i dinosauri!'
  ),
  q(
    'Come si chiama la scimmietta di Ross?',
    ['Marcel', 'Murray', 'Maurice', 'Mike'],
    0,
    'Marcel! Una scimmietta con una carriera cinematografica tutta sua.'
  ),
  q(
    'Qual è il secondo nome di Chandler?',
    ['Muriel', 'Francis', 'Bing', 'Matthew'],
    0,
    'Chandler Muriel Bing! Una delle rivelazioni più divertenti della serie.'
  ),
  q(
    'Quale professione sogna inizialmente Rachel?',
    ['Cantante', 'Chef', 'Moda', 'Attrice'],
    2,
    'Rachel costruisce una carriera nel mondo della moda, arrivando a lavorare per Ralph Lauren.'
  ),
  q(
    'Come si chiama la canzone più famosa di Phoebe?',
    ['Smelly Cat', 'Funny Dog', 'Crazy Cat', 'Yellow Song'],
    0,
    'Smelly Cat! Una vera hit... almeno secondo Phoebe.'
  ),
  q(
    'Qual è il nome della moglie di Ross nella prima stagione?',
    ['Emily', 'Carol', 'Susan', 'Julie'],
    1,
    'Carol! Ross e Carol erano già separati quando inizia la serie.'
  ),
  q(
    'Quale frase ripete spesso Janice?',
    ['How you doin’?', 'Oh. My. God!', 'We were on a break!', 'Could I BE...?'],
    1,
    'Oh. My. God! Impossibile dimenticare la sua risata!'
  ),
  q(
    'Quale dei sei amici lavora come chef?',
    ['Rachel', 'Phoebe', 'Monica', 'Joey'],
    2,
    'Monica è una chef professionista, molto precisa e decisamente competitiva!'
  ),
  q(
    'In quale città è ambientata principalmente Friends?',
    ['Los Angeles', 'Chicago', 'New York', 'Boston'],
    2,
    'New York! La città in cui sei amici trasformano un semplice caffè in casa loro.'
  ),

  // ==========================================
  // HOW I MET YOUR MOTHER - 10 DOMANDE
  // ==========================================

  q(
    'Qual è il mestiere di Ted Mosby?',
    ['Avvocato', 'Architetto', 'Medico', 'Professore di musica'],
    1,
    'Ted è un architetto, anche se la sua vita sentimentale è decisamente più complicata dei suoi progetti.'
  ),
  q(
    'Come si chiama il bar frequentato dal gruppo?',
    ['Central Perk', 'MacLaren’s Pub', 'The Drunken Clam', 'Monk’s Café'],
    1,
    'MacLaren’s Pub! Il loro punto di ritrovo preferito.'
  ),
  q(
    'Quale oggetto è legato alla ricerca della futura moglie di Ted?',
    ['Una scarpa rossa', 'Un ombrello giallo', 'Una cravatta blu', 'Un cappello nero'],
    1,
    'L’ombrello giallo! Un indizio fondamentale nella storia.'
  ),
  q(
    'Qual è il tormentone di Barney?',
    ['Legendary!', 'Bazinga!', 'Suit up!', 'Nine-Nine!'],
    2,
    'Suit up! Per Barney un completo elegante è praticamente obbligatorio.'
  ),
  q(
    'Quale personaggio è canadese?',
    ['Lily', 'Robin', 'Tracy', 'Victoria'],
    1,
    'Robin Scherbatsky! E non dimentichiamo il suo passato da pop star canadese.'
  ),
  q(
    'Qual è il vero nome di Robin Sparkles?',
    ['Robin Charles', 'Robin Scherbatsky', 'Robin Mosby', 'Robin Stinson'],
    1,
    'Robin Scherbatsky! Robin Sparkles è il suo alter ego musicale.'
  ),
  q(
    'Quale professione svolge Marshall?',
    ['Architetto', 'Avvocato', 'Giornalista', 'Chef'],
    1,
    'Marshall è un avvocato con una forte passione per la tutela dell’ambiente.'
  ),
  q(
    'Come si chiama la moglie di Marshall?',
    ['Robin', 'Tracy', 'Lily', 'Victoria'],
    2,
    'Lily Aldrin! Una delle coppie più solide e amate della serie.'
  ),
  q(
    'Quale gioco inventano Marshall e Barney?',
    ['The Pineapple Game', 'The Slap Bet', 'The Suit Game', 'The Bro Code'],
    1,
    'Lo Slap Bet! Una scommessa che diventa una vera tradizione.'
  ),
  q(
    'Come si chiama la madre dei figli di Ted?',
    ['Victoria', 'Tracy McConnell', 'Stella Zinman', 'Zoey Pierson'],
    1,
    'Tracy McConnell! Finalmente conosciamo la donna al centro di tutta la storia.'
  ),

  // ==========================================
  // MODERN FAMILY - 10 DOMANDE
  // ==========================================

  q(
    'Come si chiama il patriarca della famiglia?',
    ['Phil Dunphy', 'Jay Pritchett', 'Mitchell Pritchett', 'Cameron Tucker'],
    1,
    'Jay Pritchett! Il capofamiglia dal carattere decisamente particolare.'
  ),
  q(
    'Da quale Paese proviene Gloria?',
    ['Messico', 'Brasile', 'Colombia', 'Argentina'],
    2,
    'Gloria viene dalla Colombia e non perde occasione per ricordarcelo!'
  ),
  q(
    'Qual è il lavoro di Phil Dunphy?',
    ['Avvocato', 'Agente immobiliare', 'Chef', 'Medico'],
    1,
    'Phil è un agente immobiliare, ma si considera anche un mago e un grande intrattenitore.'
  ),
  q(
    'Come si chiama il marito di Mitchell?',
    ['Jay', 'Phil', 'Cameron', 'Manny'],
    2,
    'Cameron Tucker! Insieme a Mitchell forma una coppia davvero indimenticabile.'
  ),
  q(
    'Quale strumento suona spesso Cameron?',
    ['Chitarra', 'Pianoforte', 'Fisarmonica', 'Violino'],
    2,
    'La fisarmonica! Cameron ha anche un lato decisamente teatrale.'
  ),
  q(
    'Come si chiama la figlia adottiva di Mitchell e Cameron?',
    ['Lily', 'Alex', 'Haley', 'Manny'],
    0,
    'Lily! La coppia la adotta in Vietnam.'
  ),
  q(
    'Qual è il nome del figlio di Gloria e Jay?',
    ['Luke', 'Joe', 'Manny', 'Dylan'],
    1,
    'Joe Pritchett! Il più piccolo della famiglia.'
  ),
  q(
    'Quale hobby insolito ha Phil?',
    ['Collezionare francobolli', 'Fare il mago', 'Cucinare sushi', 'Coltivare bonsai'],
    1,
    'Phil ama la magia e spesso prova a stupire la famiglia con i suoi trucchi.'
  ),
  q(
    'Come si chiama il figlio di Gloria prima del matrimonio con Jay?',
    ['Luke', 'Manny', 'Dylan', 'Joe'],
    1,
    'Manny Delgado! Un ragazzo romantico e molto più maturo della sua età.'
  ),
  q(
    'Qual è il nome del cane di Jay e Gloria?',
    ['Stella', 'Daisy', 'Lola', 'Sofia'],
    0,
    'Stella! Una cagnolina che riesce a conquistare anche Jay.'
  ),

  // ==========================================
  // BROOKLYN NINE-NINE - 10 DOMANDE
  // ==========================================

  q(
    'In quale distretto lavorano i protagonisti?',
    ['Distretto 12', 'Distretto 99', 'Distretto 21', 'Distretto 42'],
    1,
    'Il 99° distretto di Brooklyn! Nine-Nine!'
  ),
  q(
    'Come si chiama il detective protagonista?',
    ['Terry Jeffords', 'Jake Peralta', 'Charles Boyle', 'Raymond Holt'],
    1,
    'Jake Peralta! Un detective bravissimo, ma con la maturità di un adolescente.'
  ),
  q(
    'Chi è il capitano del distretto?',
    ['Terry Jeffords', 'Raymond Holt', 'Michael Hitchcock', 'Norm Scully'],
    1,
    'Il capitano Holt! Serissimo, impassibile e con un umorismo tutto suo.'
  ),
  q(
    'Qual è il nome della moglie del capitano Holt?',
    ['Amy Santiago', 'Rosa Diaz', 'Kevin Cozner', 'Gina Linetti'],
    2,
    'Kevin Cozner! Professore universitario e grande amore di Holt.'
  ),
  q(
    'Qual è il nome della detective interpretata da Melissa Fumero?',
    ['Rosa Diaz', 'Amy Santiago', 'Gina Linetti', 'Sophia Perez'],
    1,
    'Amy Santiago! Organizzata, ambiziosa e innamorata delle classifiche.'
  ),
  q(
    'Quale personaggio è famoso per la sua passione per lo yogurt?',
    ['Jake', 'Charles', 'Terry', 'Holt'],
    2,
    'Terry Jeffords! Terry ama lo yogurt, ma soprattutto ama le sue figlie.'
  ),
  q(
    'Come si chiama il criminale che torna spesso nella serie ed è amico di Jake?',
    ['Adrian Pimento', 'Doug Judy', 'Caleb', 'Vulture'],
    1,
    'Doug Judy, il Pontiac Bandit! Una delle amicizie più improbabili della TV.'
  ),
  q(
    'Quale personaggio lavora spesso al bancone della reception?',
    ['Gina Linetti', 'Rosa Diaz', 'Amy Santiago', 'Madeline Wuntch'],
    0,
    'Gina Linetti! La sua autostima non ha assolutamente limiti.'
  ),
  q(
    'Qual è il nome del gioco annuale organizzato dai detective?',
    ['Christmas Challenge', 'Halloween Heist', 'Detective Cup', 'Brooklyn Battle'],
    1,
    'Halloween Heist! Una competizione che diventa sempre più elaborata.'
  ),
  q(
    'Qual è il grido di battaglia più famoso della squadra?',
    ['Bazinga!', 'Suit up!', 'Nine-Nine!', 'Smelly Cat!'],
    2,
    'Nine-Nine! E ora ripetetelo tutti insieme!'
  ),

  // ==========================================
  // THE BIG BANG THEORY - 10 DOMANDE
  // ==========================================

  q(
    'Qual è il nome completo di Sheldon?',
    ['Sheldon Cooper', 'Sheldon Lee', 'Sheldon Hofstadter', 'Sheldon Wolowitz'],
    0,
    'Sheldon Cooper! Un genio della fisica teorica con qualche difficoltà nelle relazioni sociali.'
  ),
  q(
    'Quale professione svolge Leonard?',
    ['Fisico sperimentale', 'Ingegnere', 'Astronomo', 'Chimico'],
    0,
    'Leonard è un fisico sperimentale e condivide l’appartamento con Sheldon.'
  ),
  q(
    'Come si chiama la vicina di casa di Sheldon e Leonard?',
    ['Bernadette', 'Amy', 'Penny', 'Emily'],
    2,
    'Penny! La sua vita è molto diversa da quella dei suoi vicini scienziati.'
  ),
  q(
    'Quale personaggio è inizialmente incapace di parlare con le donne?',
    ['Leonard', 'Raj', 'Howard', 'Sheldon'],
    1,
    'Raj Koothrappali! All’inizio ha difficoltà a parlare con le donne senza bere alcol.'
  ),
  q(
    'Quale personaggio è un ingegnere aerospaziale?',
    ['Howard', 'Sheldon', 'Leonard', 'Raj'],
    0,
    'Howard Wolowitz! È un ingegnere e arriva persino ad andare nello spazio.'
  ),
  q(
    'Come si chiama la fidanzata di Sheldon?',
    ['Penny', 'Bernadette', 'Amy Farrah Fowler', 'Emily'],
    2,
    'Amy Farrah Fowler! Una neuroscienziata che cambia profondamente la vita di Sheldon.'
  ),
  q(
    'Qual è la famosa esclamazione di Sheldon?',
    ['Legendary!', 'Bazinga!', 'Nine-Nine!', 'Suit up!'],
    1,
    'Bazinga! Il modo di Sheldon per dire che ha fatto uno scherzo.'
  ),
  q(
    'In quale numero di appartamento vivono Sheldon e Leonard?',
    ['4A', '4B', '3C', '5A'],
    0,
    'Appartamento 4A! Un luogo dove la fisica è sempre al centro delle discussioni.'
  ),
  q(
    'Come si chiama la moglie di Howard?',
    ['Amy', 'Penny', 'Bernadette', 'Leslie'],
    2,
    'Bernadette Rostenkowski! Una microbiologa dalla voce inconfondibile.'
  ),
  q(
    'Qual è il nome del proprietario del negozio di fumetti?',
    ['Stuart', 'Kurt', 'Barry', 'Wil Wheaton'],
    0,
    'Stuart Bloom! Il proprietario del negozio di fumetti frequentato dal gruppo.'
  ),

  // ==========================================
  // STRANGER THINGS - 10 DOMANDE
  // ==========================================

  q(
    'Come si chiama la ragazza con poteri telecinetici?',
    ['Max', 'Eleven', 'Nancy', 'Robin'],
    1,
    'Eleven! Una ragazza con poteri straordinari e un passato misterioso.'
  ),
  q(
    'In quale città è ambientata la serie?',
    ['Derry', 'Hawkins', 'Riverdale', 'Sunnydale'],
    1,
    'Hawkins, Indiana! Una cittadina che nasconde segreti decisamente inquietanti.'
  ),
  q(
    'Come si chiama la dimensione parallela?',
    ['Dark World', 'The Void', 'Il Sottosopra', 'The Abyss'],
    2,
    'Il Sottosopra! Un posto in cui nessuno vorrebbe trascorrere le vacanze.'
  ),
  q(
    'Chi scompare all’inizio della prima stagione?',
    ['Mike Wheeler', 'Dustin Henderson', 'Will Byers', 'Lucas Sinclair'],
    2,
    'Will Byers! La sua scomparsa dà inizio a tutta la storia.'
  ),
  q(
    'Qual è il nome dello sceriffo di Hawkins?',
    ['Jim Hopper', 'Murray Bauman', 'Bob Newby', 'Martin Brenner'],
    0,
    'Jim Hopper! Uno sceriffo burbero, ma dal cuore enorme.'
  ),
  q(
    'Qual è il cibo preferito di Eleven?',
    ['Pizza', 'Waffle Eggo', 'Hamburger', 'Patatine'],
    1,
    'I waffle Eggo! Un amore davvero difficile da dimenticare.'
  ),
  q(
    'Come si chiama il mostro della prima stagione?',
    ['Mind Flayer', 'Demogorgone', 'Vecna', 'Demobat'],
    1,
    'Il Demogorgone! La creatura che terrorizza Hawkins nella prima stagione.'
  ),
  q(
    'Quale personaggio diventa una figura protettiva per i ragazzi?',
    ['Steve Harrington', 'Billy Hargrove', 'Jason Carver', 'Tommy Hagan'],
    0,
    'Steve Harrington! Da ragazzo popolare a babysitter non ufficiale del gruppo.'
  ),
  q(
    'Come si chiama il gruppo di amici appassionati di Dungeons & Dragons?',
    ['The Party', 'The Squad', 'The Hunters', 'The Warriors'],
    0,
    'The Party! Il loro gruppo di Dungeons & Dragons è fondamentale nella storia.'
  ),
  q(
    'Qual è il vero nome di Vecna?',
    ['Henry Creel', 'Billy Hargrove', 'Martin Brenner', 'Victor Creel'],
    0,
    'Henry Creel! Una rivelazione fondamentale per comprendere il mistero della serie.'
  ),

  // ==========================================
  // GAME OF THRONES - 10 DOMANDE
  // ==========================================

  q(
    'Qual è il simbolo della casata Stark?',
    ['Un leone', 'Un lupo gigante', 'Un drago', 'Un cervo'],
    1,
    'Il metalupo! Il simbolo della casata Stark.'
  ),
  q(
    'Qual è il motto della casata Stark?',
    ['Fuoco e sangue', 'L’inverno sta arrivando', 'Ascolta il mio ruggito', 'Mai piegati, mai spezzati'],
    1,
    'Winter is Coming! Una frase che fa venire voglia di accendere il camino.'
  ),
  q(
    'Come si chiama la capitale dei Sette Regni?',
    ['Grande Inverno', 'Approdo del Re', 'Roccia del Drago', 'Alto Giardino'],
    1,
    'Approdo del Re! La città in cui tutti vogliono sedersi sul Trono di Spade.'
  ),
  q(
    'Qual è il cognome di Jon Snow?',
    ['Stark', 'Targaryen', 'Snow', 'Bolton'],
    2,
    'Snow! Almeno per buona parte della storia...'
  ),
  q(
    'Come si chiama la madre dei draghi?',
    ['Cersei Lannister', 'Daenerys Targaryen', 'Arya Stark', 'Sansa Stark'],
    1,
    'Daenerys Targaryen! La madre dei draghi e una delle figure più importanti della saga.'
  ),
  q(
    'Quanti draghi ha Daenerys all’inizio della storia?',
    ['Uno', 'Due', 'Tre', 'Quattro'],
    2,
    'Tre! Drogon, Rhaegal e Viserion.'
  ),
  q(
    'Quale personaggio è noto per la sua astuzia e per essere un grande stratega?',
    ['Tyrion Lannister', 'Theon Greyjoy', 'Joffrey Baratheon', 'Hodor'],
    0,
    'Tyrion Lannister! La sua intelligenza è spesso più potente degli eserciti.'
  ),
  q(
    'Come viene chiamato il terribile evento che coinvolge le nozze di Edmure Tully?',
    ['Le Nozze Rosse', 'La Notte Nera', 'Il Grande Tradimento', 'La Battaglia dei Bastardi'],
    0,
    'Le Nozze Rosse! Uno degli eventi più scioccanti della televisione.'
  ),
  q(
    'Quale personaggio viene addestrato dagli Uomini senza Volto?',
    ['Sansa Stark', 'Arya Stark', 'Brienne di Tarth', 'Yara Greyjoy'],
    1,
    'Arya Stark! Il suo percorso la porta fino a Braavos.'
  ),
  q(
    'Come si chiama il gigantesco muro che protegge il Nord?',
    ['La Barriera', 'Il Confine', 'Il Grande Muro', 'La Fortezza del Nord'],
    0,
    'La Barriera! Oltre la quale si nascondono minacce terribili.'
  ),

  // ==========================================
  // BREAKING BAD - 10 DOMANDE
  // ==========================================

  q(
    'Qual è il vero nome di Heisenberg?',
    ['Jesse Pinkman', 'Walter White', 'Saul Goodman', 'Hank Schrader'],
    1,
    'Walter White! Un professore di chimica che cambia completamente vita.'
  ),
  q(
    'Quale materia insegna Walter all’inizio della serie?',
    ['Biologia', 'Matematica', 'Chimica', 'Fisica'],
    2,
    'Chimica! E Walter dimostra di conoscere la materia decisamente troppo bene.'
  ),
  q(
    'Come si chiama il suo ex studente e socio?',
    ['Hank Schrader', 'Jesse Pinkman', 'Gus Fring', 'Mike Ehrmantraut'],
    1,
    'Jesse Pinkman! Una collaborazione complicata, ma fondamentale per la serie.'
  ),
  q(
    'In quale città è ambientata Breaking Bad?',
    ['Phoenix', 'Las Vegas', 'Albuquerque', 'Los Angeles'],
    2,
    'Albuquerque, New Mexico! Una città diventata famosissima grazie alla serie.'
  ),
  q(
    'Quale colore caratterizza la metanfetamina prodotta da Walter?',
    ['Verde', 'Blu', 'Rosso', 'Viola'],
    1,
    'Blu! Il prodotto di Heisenberg è immediatamente riconoscibile.'
  ),
  q(
    'Come si chiama il ristorante che nasconde l’attività di Gus Fring?',
    ['Los Pollos Hermanos', 'El Camino', 'Chicken Palace', 'Pollos Locos'],
    0,
    'Los Pollos Hermanos! Il fast food più inquietante della televisione.'
  ),
  q(
    'Quale professione svolge Hank Schrader?',
    ['Avvocato', 'Agente della DEA', 'Medico', 'Poliziotto di Albuquerque'],
    1,
    'Hank lavora per la DEA, senza immaginare quanto sia vicino alla verità.'
  ),
  q(
    'Come si chiama l’avvocato di Walter e Jesse?',
    ['Howard Hamlin', 'Saul Goodman', 'Chuck McGill', 'Gale Boetticher'],
    1,
    'Saul Goodman! Il legale che sa sempre come trovare una soluzione... discutibile.'
  ),
  q(
    'Quale mezzo utilizzano Walter e Jesse per produrre metanfetamina all’inizio?',
    ['Un camion', 'Un camper', 'Una roulotte', 'Un furgone della pizza'],
    1,
    'Un camper! Il laboratorio mobile che dà inizio a tutto.'
  ),
  q(
    'Qual è il nome della moglie di Walter White?',
    ['Marie', 'Jane', 'Skyler', 'Andrea'],
    2,
    'Skyler White! La sua vita viene sconvolta dalle attività del marito.'
  ),

  // ==========================================
  // HOUSE OF THE DRAGON - 10 DOMANDE
  // ==========================================

  q(
    'A quale casata appartengono i protagonisti principali della serie?',
    ['Stark', 'Lannister', 'Targaryen', 'Velaryon'],
    2,
    'I Targaryen! Una famiglia legata ai draghi e a una storia decisamente turbolenta.'
  ),
  q(
    'Chi è il re all’inizio della serie?',
    ['Aegon II', 'Viserys I', 'Daemon', 'Jaehaerys'],
    1,
    'Viserys I Targaryen! Il suo regno è al centro dei conflitti dinastici.'
  ),
  q(
    'Come si chiama la figlia ed erede designata di Viserys?',
    ['Alicent', 'Rhaenyra', 'Helaena', 'Baela'],
    1,
    'Rhaenyra Targaryen! La sua pretesa al trono sarà al centro della Danza dei Draghi.'
  ),
  q(
    'Qual è il soprannome di Daemon Targaryen?',
    ['Il Principe Ladro', 'Il Principe Canaglia', 'Il Re Folle', 'Il Cavaliere Nero'],
    1,
    'Il Principe Canaglia! Daemon è imprevedibile e ama vivere pericolosamente.'
  ),
  q(
    'Qual è il nome della seconda moglie di Viserys?',
    ['Rhaenys', 'Alicent Hightower', 'Laena Velaryon', 'Mysaria'],
    1,
    'Alicent Hightower! La sua posizione politica diventa sempre più importante.'
  ),
  q(
    'Come si chiama il drago di Daemon Targaryen?',
    ['Syrax', 'Caraxes', 'Vhagar', 'Meleys'],
    1,
    'Caraxes, il temibile Verme Sanguinario!'
  ),
  q(
    'Come viene chiamato il conflitto per la successione al Trono?',
    ['La Guerra dei Cinque Re', 'La Danza dei Draghi', 'La Ribellione di Robert', 'La Guerra dell’Alba'],
    1,
    'La Danza dei Draghi! Una guerra civile che coinvolge la stessa famiglia Targaryen.'
  ),
  q(
    'A quale casata appartiene Otto Hightower?',
    ['Stark', 'Hightower', 'Velaryon', 'Strong'],
    1,
    'Otto Hightower! È una figura politica molto influente nella corte reale.'
  ),
  q(
    'Come si chiama il drago di Rhaenyra?',
    ['Syrax', 'Sunfyre', 'Dreamfyre', 'Seasmoke'],
    0,
    'Syrax! Il drago dorato legato a Rhaenyra.'
  ),
  q(
    'Quale casata è famosa per la propria flotta e per il legame con il mare?',
    ['Velaryon', 'Stark', 'Lannister', 'Baratheon'],
    0,
    'La casata Velaryon! Il mare e la navigazione sono al centro della loro identità.'
  ),

  // ==========================================
  // IL SIGNORE DEGLI ANELLI: GLI ANELLI DEL POTERE - 10 DOMANDE
  // ==========================================

  q(
    'In quale epoca della storia della Terra di Mezzo è ambientata la serie?',
    ['Prima Era', 'Seconda Era', 'Terza Era', 'Quarta Era'],
    1,
    'La Seconda Era! Molto prima delle avventure di Frodo e della Compagnia dell’Anello.'
  ),
  q(
    'Qual è il nome dell’elfa protagonista della serie?',
    ['Arwen', 'Galadriel', 'Tauriel', 'Éowyn'],
    1,
    'Galadriel! Una potente elfa determinata a sconfiggere il male.'
  ),
  q(
    'Come si chiama il regno degli Uomini che ha un ruolo centrale nella serie?',
    ['Gondor', 'Rohan', 'Númenor', 'Mordor'],
    2,
    'Númenor! Un potente regno degli Uomini destinato a vivere grandi cambiamenti.'
  ),
  q(
    'Chi è il grande artefice degli Anelli del Potere?',
    ['Elrond', 'Celebrimbor', 'Durin', 'Gil-galad'],
    1,
    'Celebrimbor! Il fabbro elfico coinvolto nella creazione degli Anelli.'
  ),
  q(
    'Qual è il nome dell’elfo che stringe amicizia con il principe dei Nani Durin?',
    ['Elrond', 'Arondir', 'Finrod', 'Thranduil'],
    0,
    'Elrond! La sua amicizia con Durin è uno degli elementi più belli della serie.'
  ),
  q(
    'Come si chiama il principe dei Nani amico di Elrond?',
    ['Disa', 'Durin IV', 'Dúrin III', 'Balin'],
    1,
    'Durin IV! Un principe nanico legato a Elrond da una forte amicizia.'
  ),
  q(
    'Qual è il nome della regione che diventerà la terra di Sauron?',
    ['Mordor', 'Gondor', 'Rohan', 'Lothlórien'],
    0,
    'Mordor! Una terra destinata a diventare il centro del potere oscuro.'
  ),
  q(
    'Quale metallo misterioso è legato alla storia dei Nani?',
    ['Adamantio', 'Mithril', 'Valyriano', 'Acciaio di Gondor'],
    1,
    'Il mithril! Un metallo prezioso e leggendario.'
  ),
  q(
    'Quale identità si nasconde dietro Halbrand?',
    ['Isildur', 'Sauron', 'Elendil', 'Adar'],
    1,
    'Sauron! Una rivelazione fondamentale della prima stagione.'
  ),
  q(
    'Come si chiama il figlio di Elendil?',
    ['Isildur', 'Anárion', 'Aragorn', 'Eärendil'],
    0,
    'Isildur! Un personaggio destinato ad avere un ruolo fondamentale nella storia della Terra di Mezzo.'
  )
];

export const COUPLE_QUESTIONS: QuizQuestion[] = [

  // ==========================================
  // FRIENDS - 6 DOMANDE
  // ==========================================

  q(
    'Dove si incontrano per la prima volta Ross e Rachel?',
    ['Al Central Perk', 'Al liceo', 'A una festa di Monica', 'In ufficio'],
    1,
    'Si conoscevano già dai tempi del liceo! Ross aveva una cotta per Rachel da sempre.'
  ),
  q(
    'Chi pronuncia la famosa frase "We were on a break!"?',
    ['Rachel', 'Monica', 'Ross', 'Chandler'],
    2,
    'Ross! Probabilmente una delle discussioni di coppia più famose della televisione.'
  ),
  q(
    'Dove si sposano Monica e Chandler?',
    ['A Las Vegas', 'A Londra', 'A New York', 'A Parigi'],
    2,
    'A New York! Il loro matrimonio è uno dei momenti più emozionanti di Friends.'
  ),
  q(
    'Chi si innamora per primo tra Monica e Chandler?',
    ['Monica', 'Chandler', 'Joey', 'Rachel'],
    1,
    'Chandler! Anche se la loro storia inizia quasi per caso, diventa un grande amore.'
  ),
  q(
    'Quale coppia ha una figlia chiamata Emma?',
    ['Monica e Chandler', 'Ross e Rachel', 'Phoebe e Mike', 'Joey e Rachel'],
    1,
    'Ross e Rachel! Emma nasce dalla loro storia decisamente complicata.'
  ),
  q(
    'Chi diventa il marito di Phoebe?',
    ['Joey', 'David', 'Mike Hannigan', 'Richard'],
    2,
    'Mike Hannigan! Phoebe trova finalmente il suo compagno ideale.'
  ),

  // ==========================================
  // HOW I MET YOUR MOTHER - 6 DOMANDE
  // ==========================================

  q(
    'Da quanto tempo Lily e Marshall stanno insieme all’inizio della serie?',
    ['Dal liceo', 'Dall’università', 'Da quando lavorano insieme', 'Da pochi mesi'],
    1,
    'Dall’università! Sono una coppia storica e inseparabile.'
  ),
  q(
    'Chi lascia Marshall poco prima del matrimonio?',
    ['Robin', 'Victoria', 'Lily', 'Zoey'],
    2,
    'Lily! Parte per San Francisco per capire cosa vuole davvero dalla vita.'
  ),
  q(
    'Quale coppia si sposa a Las Vegas?',
    ['Ted e Robin', 'Barney e Robin', 'Marshall e Lily', 'Ted e Stella'],
    1,
    'Barney e Robin! Una relazione piena di sorprese, proprio come loro.'
  ),
  q(
    'Come si chiama la futura moglie di Ted?',
    ['Victoria', 'Tracy', 'Stella', 'Zoey'],
    1,
    'Tracy McConnell! La donna che Ted ha cercato per tutta la serie.'
  ),
  q(
    'Quale coppia ha due figli chiamati Marvin e Daisy?',
    ['Ted e Tracy', 'Barney e Robin', 'Marshall e Lily', 'Ted e Robin'],
    2,
    'Marshall e Lily! La loro famiglia cresce insieme alla loro storia d’amore.'
  ),
  q(
    'Quale coppia si lascia e si ritrova più volte durante la serie?',
    ['Marshall e Lily', 'Barney e Nora', 'Ted e Robin', 'Barney e Quinn'],
    2,
    'Ted e Robin! Il loro rapporto è un continuo intreccio di sentimenti e occasioni mancate.'
  ),

  // ==========================================
  // MODERN FAMILY - 6 DOMANDE
  // ==========================================

  q(
    'Come si chiamano i due figli di Mitchell e Cameron?',
    ['Haley e Alex', 'Lily e Rex', 'Lily e Rexford', 'Manny e Joe'],
    2,
    'Lily e Rexford! La loro famiglia si allarga con l’arrivo del piccolo Rexford.'
  ),
  q(
    'Dove si sono conosciuti Phil e Claire?',
    ['A una festa', 'In un bar', 'Durante un viaggio', 'Al supermercato'],
    0,
    'A una festa! Phil si innamora di Claire praticamente a prima vista.'
  ),
  q(
    'Quale coppia è formata da un uomo americano e una donna colombiana?',
    ['Phil e Claire', 'Jay e Gloria', 'Mitchell e Cameron', 'Manny e Sherry'],
    1,
    'Jay e Gloria! Due personalità molto diverse che formano una famiglia speciale.'
  ),
  q(
    'Quale coppia si sposa nella serie dopo una relazione molto romantica?',
    ['Haley e Dylan', 'Alex e Ben', 'Manny e Luke', 'Joe e Lily'],
    0,
    'Haley e Dylan! Dopo tante avventure, i due riescono finalmente a costruire una famiglia.'
  ),
  q(
    'Qual è il soprannome affettuoso che Phil usa spesso per Claire?',
    ['Sweetheart', 'Mamma', 'Princess', 'Cookie'],
    1,
    'Mamma! Phil e Claire sono una coppia piena di complicità e battute.'
  ),
  q(
    'Chi organizza spesso grandi gesti romantici per Mitchell?',
    ['Jay', 'Cameron', 'Phil', 'Manny'],
    1,
    'Cameron! Il suo lato teatrale rende ogni occasione decisamente memorabile.'
  ),

  // ==========================================
  // BROOKLYN NINE-NINE - 6 DOMANDE
  // ==========================================

  q(
    'Come si chiamano i due detective che formano la coppia principale?',
    ['Jake e Rosa', 'Jake e Amy', 'Charles e Rosa', 'Terry e Amy'],
    1,
    'Jake Peralta e Amy Santiago! Una coppia che nasce tra competizione e battute.'
  ),
  q(
    'Chi chiede per primo all’altro di sposarsi?',
    ['Amy', 'Jake', 'Rosa', 'Charles'],
    1,
    'Jake! La proposta arriva durante una delle loro sfide più memorabili.'
  ),
  q(
    'Dove si svolge il matrimonio di Jake e Amy?',
    ['In municipio', 'Nel distretto di polizia', 'In un parco', 'In una chiesa'],
    1,
    'Nel distretto 99! Anche un matrimonio può trasformarsi in una missione di polizia.'
  ),
  q(
    'Qual è il nome del marito del capitano Holt?',
    ['Terry Jeffords', 'Kevin Cozner', 'Jake Peralta', 'Doug Judy'],
    1,
    'Kevin Cozner! Un professore universitario e il grande amore del capitano Holt.'
  ),
  q(
    'Quale personaggio è il migliore amico di Jake e spesso sogna di essere il suo testimone?',
    ['Terry', 'Charles Boyle', 'Holt', 'Hitchcock'],
    1,
    'Charles Boyle! La sua amicizia con Jake è praticamente una storia d’amore... platonica!'
  ),
  q(
    'Qual è il nome del figlio di Jake e Amy?',
    ['Kevin', 'Mac', 'Terry', 'Charles'],
    1,
    'Mac! Il suo nome completo è McClane Peralta, in omaggio a John McClane.'
  ),

  // ==========================================
  // THE BIG BANG THEORY - 6 DOMANDE
  // ==========================================

  q(
    'Quale coppia si conosce grazie a un appuntamento organizzato da amici?',
    ['Sheldon e Amy', 'Leonard e Penny', 'Howard e Bernadette', 'Raj e Emily'],
    0,
    'Sheldon e Amy! Si conoscono grazie a un appuntamento organizzato da Howard e Raj.'
  ),
  q(
    'Quale coppia si sposa a Las Vegas?',
    ['Sheldon e Amy', 'Howard e Bernadette', 'Leonard e Penny', 'Raj e Emily'],
    2,
    'Leonard e Penny! Dopo tanti alti e bassi, decidono finalmente di sposarsi.'
  ),
  q(
    'Qual è la professione di Bernadette?',
    ['Fisica', 'Microbiologa', 'Avvocata', 'Astronoma'],
    1,
    'Bernadette è una microbiologa, oltre a essere una delle personalità più forti del gruppo.'
  ),
  q(
    'Quale coppia riceve il premio Nobel per la fisica?',
    ['Leonard e Penny', 'Howard e Bernadette', 'Sheldon e Amy', 'Raj e Emily'],
    2,
    'Sheldon e Amy! Un traguardo straordinario per entrambi.'
  ),
  q(
    'Come si chiama la figlia di Howard e Bernadette?',
    ['Halley', 'Amy', 'Penny', 'Emily'],
    0,
    'Halley! Il nome è un omaggio alla cometa di Halley.'
  ),
  q(
    'Quale coppia ha una relazione che inizia con un semplice appuntamento al ristorante?',
    ['Leonard e Penny', 'Sheldon e Amy', 'Howard e Bernadette', 'Raj e Lucy'],
    2,
    'Howard e Bernadette! Il loro primo incontro avviene grazie a un appuntamento organizzato da Penny.'
  ),

  // ==========================================
  // GAME OF THRONES - 6 DOMANDE
  // ==========================================

  q(
    'Quali due personaggi si sposano nelle Nozze Rosse?',
    ['Robb Stark e Talisa', 'Jon Snow e Ygritte', 'Tyrion e Sansa', 'Joffrey e Margaery'],
    0,
    'Robb Stark e Talisa! Un matrimonio che purtroppo si trasforma in una tragedia.'
  ),
  q(
    'Chi è la moglie di Khal Drogo?',
    ['Cersei', 'Daenerys', 'Sansa', 'Margaery'],
    1,
    'Daenerys Targaryen! Il loro rapporto inizia in modo difficile, ma diventa centrale nella storia.'
  ),
  q(
    'Quale coppia si innamora oltrepassando le rivalità tra i loro popoli?',
    ['Jon Snow e Ygritte', 'Tyrion e Cersei', 'Jaime e Sansa', 'Robb e Cersei'],
    0,
    'Jon Snow e Ygritte! Una storia d’amore che supera le barriere tra Guardiani della Notte e Bruti.'
  ),
  q(
    'Chi è la sorella gemella di Jaime Lannister e sua amante?',
    ['Margaery', 'Cersei', 'Brienne', 'Ellaria'],
    1,
    'Cersei Lannister! Una delle relazioni più controverse della serie.'
  ),
  q(
    'Quale coppia si sposa durante una cerimonia che termina con un avvelenamento?',
    ['Robb e Talisa', 'Joffrey e Margaery', 'Tyrion e Sansa', 'Ramsay e Sansa'],
    1,
    'Joffrey e Margaery! Il matrimonio viola ogni aspettativa e si conclude con la morte del re.'
  ),
  q(
    'Quale personaggio si innamora di Brienne di Tarth?',
    ['Jaime Lannister', 'Tyrion Lannister', 'Podrick Payne', 'Sandor Clegane'],
    0,
    'Jaime Lannister! Il loro rapporto evolve lentamente in uno dei legami più intensi della serie.'
  ),

  // ==========================================
  // BREAKING BAD - 6 DOMANDE
  // ==========================================

  q(
    'Come si chiama la moglie di Walter White?',
    ['Marie', 'Skyler', 'Jane', 'Andrea'],
    1,
    'Skyler White! Il loro matrimonio viene messo a dura prova dai segreti di Walter.'
  ),
  q(
    'Chi è la fidanzata di Jesse Pinkman che muore durante la serie?',
    ['Andrea', 'Jane Margolis', 'Lydia', 'Wendy'],
    1,
    'Jane Margolis! La loro storia è una delle più tragiche della serie.'
  ),
  q(
    'Chi è il marito di Marie Schrader?',
    ['Walter White', 'Jesse Pinkman', 'Hank Schrader', 'Saul Goodman'],
    2,
    'Hank Schrader! Una coppia che affronta insieme momenti molto difficili.'
  ),
  q(
    'Chi è la madre del figlio di Jesse, Brock?',
    ['Jane', 'Andrea', 'Skyler', 'Lydia'],
    1,
    'Andrea Cantillo! Jesse si affeziona molto a lei e a suo figlio Brock.'
  ),
  q(
    'Quale coppia è coinvolta nel traffico di droga gestito da Gus Fring?',
    ['Walter e Skyler', 'Walter e Jesse', 'Hank e Marie', 'Saul e Kim'],
    1,
    'Walter e Jesse! Una collaborazione professionale che si trasforma in un rapporto complicatissimo.'
  ),
  q(
    'Qual è il nome della moglie di Hank Schrader?',
    ['Skyler', 'Marie', 'Jane', 'Lydia'],
    1,
    'Marie Schrader! Sorella di Skyler e moglie di Hank.'
  ),

  // ==========================================
  // HOUSE OF THE DRAGON - 6 DOMANDE
  // ==========================================

  q(
    'Chi è il marito di Rhaenyra Targaryen nella prima parte della serie?',
    ['Daemon Targaryen', 'Laenor Velaryon', 'Criston Cole', 'Aemond Targaryen'],
    1,
    'Laenor Velaryon! Il loro matrimonio è soprattutto un accordo politico.'
  ),
  q(
    'Chi diventa il secondo marito di Rhaenyra?',
    ['Aegon', 'Daemon', 'Otto', 'Corlys'],
    1,
    'Daemon Targaryen! I due si sposano dopo la morte di Laenor.'
  ),
  q(
    'Qual è il nome della moglie di Viserys I?',
    ['Rhaenyra', 'Alicent Hightower', 'Rhaenys', 'Mysaria'],
    1,
    'Alicent Hightower! Il loro matrimonio è uno degli eventi che alimentano il conflitto dinastico.'
  ),
  q(
    'Quale coppia è formata da Daemon Targaryen e una principessa Velaryon?',
    ['Daemon e Rhaenyra', 'Daemon e Laena', 'Daemon e Alicent', 'Daemon e Helaena'],
    1,
    'Daemon e Laena Velaryon! Dal loro matrimonio nascono due figlie.'
  ),
  q(
    'Chi è il marito di Helaena Targaryen?',
    ['Aemond', 'Aegon II', 'Jacaerys', 'Lucerys'],
    1,
    'Aegon II Targaryen! I due sono fratello e sorella, secondo le tradizioni della loro casata.'
  ),
  q(
    'Quale coppia è legata dalla rivalità tra le fazioni dei Neri e dei Verdi?',
    ['Rhaenyra e Alicent', 'Daemon e Corlys', 'Aegon e Aemond', 'Laena e Rhaenys'],
    0,
    'Rhaenyra e Alicent! Un tempo amiche, diventano le figure centrali di due fazioni contrapposte.'
  ),

  // ==========================================
  // IL SIGNORE DEGLI ANELLI: GLI ANELLI DEL POTERE - 6 DOMANDE
  // ==========================================

  q(
    'Chi è il marito di Galadriel nella mitologia della Terra di Mezzo?',
    ['Elrond', 'Celeborn', 'Gil-galad', 'Celebrimbor'],
    1,
    'Celeborn! È il marito di Galadriel nella storia più ampia della Terra di Mezzo.'
  ),
  q(
    'Come si chiama la moglie del principe dei Nani Durin IV?',
    ['Galadriel', 'Disa', 'Bronwyn', 'Míriel'],
    1,
    'Disa! È una principessa nana intelligente e determinata.'
  ),
  q(
    'Quale coppia è al centro di una storia d’amore tra un elfo e un’umana?',
    ['Elrond e Galadriel', 'Arondir e Bronwyn', 'Durin e Disa', 'Gil-galad e Míriel'],
    1,
    'Arondir e Bronwyn! Il loro amore supera le differenze tra i loro popoli.'
  ),
  q(
    'Quale personaggio è il figlio di Elendil e ha una storia sentimentale con Eärien?',
    ['Isildur', 'Arondir', 'Elrond', 'Durin'],
    0,
    'Isildur! La sua famiglia ha un ruolo fondamentale nella storia di Númenor.'
  ),
  q(
    'Quale personaggio è legato sentimentalmente a Bronwyn?',
    ['Halbrand', 'Arondir', 'Adar', 'Elendil'],
    1,
    'Arondir! Un elfo e un’umana che si innamorano nonostante le difficoltà.'
  ),
  q(
    'Quale coppia rappresenta l’amicizia e l’amore tra due popoli diversi, Elfi e Nani?',
    ['Galadriel e Halbrand', 'Elrond e Disa', 'Durin IV e Disa', 'Isildur e Eärien'],
    2,
    'Durin IV e Disa! Una coppia affiatata che dimostra quanto siano forti i legami familiari.'
  ),

  // ==========================================
  // CINEMA - 6 DOMANDE
  // ==========================================

  q(
    'Come si chiamano i due protagonisti della storia d’amore di Titanic?',
    ['Jack e Rose', 'Noah e Allie', 'Edward e Bella', 'Sam e Molly'],
    0,
    'Jack e Rose! Una storia d’amore diventata un classico del cinema.'
  ),
  q(
    'Quale coppia vive in una villa gotica e ama vestirsi di nero?',
    ['Shrek e Fiona', 'Morticia e Gomez', 'Bella ed Edward', 'Jack e Sally'],
    1,
    'Morticia e Gomez Addams! Una coppia che dimostra che l’amore può essere anche... macabro!'
  ),
  q(
    'Chi è la principessa che Shrek sposa?',
    ['Rapunzel', 'Cenerentola', 'Fiona', 'Biancaneve'],
    2,
    'Fiona! Una principessa che non ha bisogno di essere salvata per forza.'
  ),
  q(
    'Come si chiamano i protagonisti romantici di Orgoglio e Pregiudizio?',
    ['Romeo e Giulietta', 'Elizabeth Bennet e Mr. Darcy', 'Jane e Rochester', 'Emma e Knightley'],
    1,
    'Elizabeth Bennet e Mr. Darcy! Un amore che nasce tra orgoglio, pregiudizi e incomprensioni.'
  ),
  q(
    'Quale coppia è protagonista della saga Twilight?',
    ['Katniss e Peeta', 'Bella ed Edward', 'Hermione e Ron', 'Tris e Quattro'],
    1,
    'Bella Swan ed Edward Cullen! Un amore decisamente soprannaturale.'
  ),
  q(
    'Chi è la principessa che si innamora di una Bestia in un famoso classico Disney?',
    ['Ariel', 'Jasmine', 'Belle', 'Aurora'],
    2,
    'Belle! Una storia che ci insegna a guardare oltre le apparenze.'
  )
];


export const PERSONAL_QUESTIONS: QuizQuestion[] = [
  q(
    'In quale paese Erika e Luca si conoscevano già di vista?',
    ['Mazara', 'Palermo', 'Trapani', 'Marsala'],
    0,
    'Si conoscevano già di vista a Mazara, il loro paese natale!'
  ),
  q(
    'Chi ha fatto il primo passo su Tinder?',
    ['Erika', 'Luca', 'Entrambi', 'Nessuno dei due'],
    1,
    'È stato Luca a rompere il ghiaccio!'
  ),
  q(
    'Secondo i loro ricordi, chi ha detto per primo «Ti amo»?',
    ['Erika', 'Luca', 'Entrambi insieme', 'Non se lo ricordano'],
    1,
    'La risposta più probabile è Luca!'
  ),
  q(
    'Chi dei due è più romantico?',
    ['Erika', 'Luca', 'Entrambi allo stesso modo', 'Nessuno dei due'],
    2,
    'Su questo sono perfettamente alla pari!'
  ),
  q(
    'Chi è il più disordinato della coppia?',
    ['Luca', 'Erika', 'Entrambi', 'Nessuno dei due'],
    1,
    'Erika! Luca probabilmente avrebbe qualcosa da ridire.'
  ),
  q(
    'Chi è il più puntuale?',
    ['Erika', 'Luca', 'Entrambi', 'Dipende dalla giornata'],
    1,
    'Luca è quello che tiene d’occhio l’orologio!'
  ),
  q(
    'Con cosa Luca fa ridere Erika?',
    ['Le imitazioni', 'Le battute idiote', 'Le barzellette sui gatti', 'I balletti'],
    1,
    'Le battute idiote di Luca sono un grande classico!'
  ),
  q(
    'Chi dei due è più bravo a cucinare?',
    ['Erika', 'Luca', 'Sono bravi entrambi', 'Nessuno dei due'],
    2,
    'In cucina sono entrambi capaci!'
  ),
  q(
    'Chi impiega più tempo a prepararsi per uscire?',
    ['Luca', 'Erika', 'Si preparano in contemporanea', 'Dipende dalla serata'],
    1,
    'Erika si prende tutto il tempo necessario!'
  ),
  q(
    'Chi spende di più durante le vacanze?',
    ['Luca', 'Erika', 'Spendono allo stesso modo', 'Nessuno dei due'],
    1,
    'Erika non si fa mancare nulla in vacanza!'
  ),
  q(
    'Chi sceglie cosa guardare su Netflix?',
    ['Luca', 'Erika', 'Decidono insieme', 'Decide chi prende il telecomando'],
    1,
    'Il telecomando sembra essere nelle mani di Erika!'
  ),
  q(
    'Chi si addormenta prima sul divano?',
    ['Luca', 'Erika', 'Entrambi insieme', 'Nessuno dei due'],
    1,
    'Erika spesso non arriva nemmeno ai titoli di coda!'
  ),
  q(
    'Chi chiede scusa per primo dopo un litigio?',
    ['Luca', 'Erika', 'Entrambi contemporaneamente', 'Nessuno dei due'],
    1,
    'Erika è quella che tende a fare il primo passo per fare pace.'
  ),
  q(
    'Chi è il più testardo?',
    ['Erika', 'Luca', 'Entrambi allo stesso modo', 'Nessuno dei due'],
    1,
    'Quando Luca si mette in testa una cosa, è difficile smuoverlo!'
  ),
  q(
    'Qual è il soprannome che Luca usa per Erika?',
    ['Patatina', 'Patata Bollente', 'Principessa', 'Pulcino'],
    1,
    'Patata Bollente: un soprannome decisamente originale!'
  ),
  q(
    'Come chiama Erika Luca?',
    ['Polpetto', 'Orsetto', 'Lupetto', 'Cicciotto'],
    0,
    'Il mitico Polpetto!'
  ),
  q(
    'Chi dei due ha la patente?',
    ['Solo Erika', 'Solo Luca', 'Entrambi', 'Nessuno dei due'],
    1,
    'Erika non ha la patente: al volante c’è Luca!'
  ),
  q(
    'Chi usa più spesso Google Maps?',
    ['Erika', 'Luca', 'Entrambi', 'Pedro'],
    1,
    'Luca guida e consulta anche Google Maps!'
  ),
  q(
    'Chi è il più goloso?',
    ['Erika', 'Luca', 'Entrambi allo stesso modo', 'Popi'],
    1,
    'Luca ha sempre un certo languorino!'
  ),
  q(
    'Qual è il piatto preferito di Luca?',
    ['Sushi', 'Pizza', 'Carbonara', 'Lasagne'],
    1,
    'Per Luca la pizza è sempre una certezza!'
  ),
  q(
    'Quale tra questi cibi piace particolarmente a Erika?',
    ['Spätzle', 'Riso in bianco', 'Insalata verde', 'Minestrone'],
    0,
    'Erika ama gli Spätzle, ma anche gorgonzola e salsiccia e pizza diavola!'
  ),
  q(
    'Chi è più mattiniera durante la settimana lavorativa?',
    ['Luca', 'Erika', 'Entrambi', 'Nessuno dei due'],
    1,
    'Erika si alza prima per andare al lavoro!'
  ),
  q(
    'Chi organizza i viaggi e le vacanze?',
    ['Erika', 'Luca', 'Entrambi', 'Decide sempre il caso'],
    1,
    'Luca è il responsabile ufficiale dell’organizzazione dei viaggi!'
  ),
  q(
    'Qual è stato il loro viaggio più bello da soli?',
    ['Costiera Amalfitana', 'Gole dell’Alcantara e dintorni', 'Roma', 'Sardegna'],
    1,
    'Un viaggio tra Gole dell’Alcantara, Taormina, Isola Bella e Giardini Naxos!'
  ),
  q(
    'Quanti animali vivono con Erika e Luca?',
    ['Uno', 'Due', 'Tre', 'Quattro'],
    1,
    'La famiglia comprende anche due amici a quattro zampe!'
  ),
  q(
    'Come si chiama la loro gatta?',
    ['Molly', 'Popi', 'Luna', 'Micia'],
    1,
    'La gatta di casa si chiama Popi!'
  ),
  q(
    'Come si chiama il loro bassotto?',
    ['Pedro', 'Pepe', 'Rocky', 'Toby'],
    0,
    'Il bassotto di casa è il mitico Pedro!'
  ),
  q(
    'Chi mantiene maggiormente la calma quando qualcosa va storto?',
    ['Luca', 'Erika', 'Entrambi', 'Dipende dalla situazione'],
    1,
    'Erika è quella che riesce a mantenere più facilmente la calma!'
  ),
  q(
    'A chi sono più affezionati Popi e Pedro?',
    ['A Luca', 'A Erika', 'A entrambi allo stesso modo', 'Al frigorifero'],
    1,
    'Pare proprio che i due pelosetti abbiano un debole per Erika!'
  ),
  q(
    'Chi ha desiderato maggiormente avere Popi e Pedro?',
    ['Luca', 'Erika', 'Entrambi allo stesso modo', 'È stata un’idea degli animali'],
    1,
    'È stata soprattutto Erika a volere gli amici a quattro zampe!'
  )
];
