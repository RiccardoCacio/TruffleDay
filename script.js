window.onload = function () {

    // Today's Date
    let today = document.getElementById('today');
    let data = new Date();
    let letteralDay = ['Domenica', 'Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato'];
    let numberMonth = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
    let todayDate = letteralDay[data.getDay()] + ' ' + data.getDate() + '/' + numberMonth[data.getMonth()] + '/' + data.getFullYear();
    today.innerHTML = todayDate;
    let truffleBox = document.getElementById('truffleBox');


    //tartufo bianco (Cambia Ogni Anno)

    let biancoBox = document.getElementById('tartufoBianco');

    let biancoName = document.createElement('p');
    biancoName.setAttribute('id', 'tartufoBiancoName');
    biancoName.textContent = 'Tartufo Bianco';

    let biancoData = document.createElement('p');
    biancoData.setAttribute('id', 'tartufoBiancoData');
    biancoData.textContent = 'La raccolta inizia il 24/09/2023 e termina il 31/12/2023';

    let biancoDescription = document.createElement('p');
    biancoDescription.setAttribute('id', 'tartufoBiancoDescription');
    biancoDescription.textContent = "Il tartufo bianco è un fungo ipogeo il quale esternamente si presenta liscio al tocco, con sfumature che vanno dal crema al giallo ocra, mentre la parte interna è chiara con venature marroni. Questo tartufo predilige un ambiente boschivo ricco di humus, esso cresce in simbiosi con: querce, lecci, salici e pioppi.";

    let startBianco = new Date('2023-09-24');
    let endBianco = new Date('2023-12-31');


    let pngBianco = document.createElement('img');
    pngBianco.src = 'tartufobianco.png';
    pngBianco.setAttribute('id', 'imgBianco');

    if (data >= startBianco && data <= endBianco) {
        biancoBox.appendChild(biancoName)
        biancoBox.appendChild(biancoData)
        biancoBox.appendChild(pngBianco)
        biancoBox.appendChild(biancoDescription)
    }

    // Tartufo nero pregiato

    let neroPregiatoBox = document.getElementById('tartufoNeroPreg');

    let neroPregName = document.createElement('p');
    neroPregName.setAttribute('id', 'tartufoNeroPregName');
    neroPregName.textContent = 'Tartufo Nero Pregiato';


    let neroPregData = document.createElement('p');
    neroPregData.setAttribute('id', 'tartufoNeroPregData');
    neroPregData.textContent = 'La raccolta inizia il 01/12/2023 e termina il 15/03/2024';

    let neroPregDescription = document.createElement('p');
    neroPregDescription.setAttribute('id', 'tartufoNeroPregiatoDescription');
    neroPregDescription.textContent = "Il tartufo nero pregiato ha una forma tondeggiante piuttosto regolare. La parte esterna anche detta perfidiò è nera e rugosa, costellata da piccole verruche scure, mentre la parte interna anche detta gleba è di colore violaceo, solcata da sottili venature chiare. Ha un profumo delicato e gradevole, con un sapore quasi tendente al dolciastro.";


    let startNeroPreg = new Date('2023-12-1');
    let endNeroPreg = new Date('2024-03-15');


    let pngNeroPreg = document.createElement('img')
    pngNeroPreg.src = 'neropregiato.png';
    pngNeroPreg.setAttribute('id', 'imgNeroPregiato');

    if (data >= startNeroPreg && data <= endNeroPreg) {
        neroPregiatoBox.appendChild(neroPregName)
        neroPregiatoBox.appendChild(neroPregData)
        neroPregiatoBox.appendChild(pngNeroPreg)
        neroPregiatoBox.appendChild(neroPregDescription)
    }

    // Tartufo moscato

    let moscatoBox = document.getElementById('tartufoMoscato');

    let moscatoName = document.createElement('p');
    moscatoName.setAttribute('id', 'tartufoMoscatoName');
    moscatoName.textContent = 'Tartufo Moscato';

    let moscatoData = document.createElement('p');
    moscatoData.setAttribute('id', 'tartufoMoscatoData');
    moscatoData.textContent = 'La raccolta inizia il 01/12/2023 e termina il 15/03/2024';

    let moscatoDescription = document.createElement('p');
    moscatoDescription.setAttribute('id', 'tartufoMoscatoDescription')
    moscatoDescription.textContent = "Il tartufo moscato si distingue per il suo forte profumo, ricco di note che richiamano il sottobosco e il muschio, accompagnato da delle note che ricordano il piccante. Questo tartufo varia dal color ocra al beige-marrone e all’arancio, con delle grandi venature di colore più chiaro.";

    let startMoscato = new Date('2023-12-1');
    let endMoscato = new Date('2024-03-15');

    let pngMoscato = document.createElement('img')
    pngMoscato.src = 'moscato.png';
    pngMoscato.setAttribute('id', 'imgMoscato');


    if (data >= startMoscato && data <= endMoscato) {
        moscatoBox.appendChild(moscatoName)
        moscatoBox.appendChild(moscatoData)
        moscatoBox.appendChild(pngMoscato)
        moscatoBox.appendChild(moscatoDescription)
    }

    //Tartufo scorzone/nero estivo (Cambia Ogni Anno)

    let scorzoneBox = document.getElementById('tartufoScorzone');

    let scorzoneName = document.createElement('p');
    scorzoneName.setAttribute('id', 'tartufoScorzoneName');
    scorzoneName.textContent = 'Tartufo nero Estivo o Scorzone';

    let scorzoneData = document.createElement('p');
    scorzoneData.setAttribute('id', 'tartufoScorzoneData');
    scorzoneData.textContent = 'La raccolta inizia il 28/05/2023 e termina il 31/08/2023';

    let scorzoneDescription = document.createElement('p');
    scorzoneDescription.setAttribute('id', 'tartufoScorzoneDescription')
    scorzoneDescription.textContent = "Lo scorzone, anche detto tartufo estivo predilige i terreni argillosi. Come piante simbionti ha: loverella, cerro, leccio, carpino e nocciolo. La parte esterne del tartufo estivo è grossolana con grosse verruche piramidali molto sporgente e con un intero chiaro e fitto di tonalità che vanno dal nocciola chiaro al marrone intenso.";

    let startScorzone = new Date('2023-05-28');
    let endScorzone = new Date('2023-08-31');


    let pngScorzone = document.createElement('img');
    pngScorzone.src = 'scorzoneestivo.png';
    pngScorzone.setAttribute('id', 'imgScorzone');

    if (data >= startScorzone && data <= endScorzone) {
        scorzoneBox.appendChild(scorzoneName)
        scorzoneBox.appendChild(scorzoneData)
        scorzoneBox.appendChild(pngScorzone)
        scorzoneBox.appendChild(scorzoneDescription)
    }

    //Tartufo uncinato

    let uncinatoBox = document.getElementById('tartufoUncinato');

    let uncinatoName = document.createElement('p');
    uncinatoName.setAttribute('id', 'tartufoUncinatoName');
    uncinatoName.textContent = 'Tartufo Uncinato';

    let uncinatoData = document.createElement('p');
    uncinatoData.setAttribute('id', 'tartufoUncinatoData');
    uncinatoData.textContent = 'La raccolta inizia il 01/10/2023 e termina il 31/01/2024';


    let uncinatoDescription = document.createElement('p');
    uncinatoDescription.setAttribute('id', 'tartufoUncinatoDescription');
    uncinatoDescription.textContent = "Il tartufo uncinato è un tartufo di montagna, ha un peridio simile a quello dello scorzone, anche se distinto da da verruche più piccole e accentuate. La gleba tende al color cioccolato e quando è matura presenta delle venature biancastre ramificate. Questo tartufo ha un odore e un sapore inteso.";


    let startUncinato = new Date('2023-10-01');
    let endUncinato = new Date('2024-01-31');



    let pngUncinato = document.createElement('img');
    pngUncinato.src = 'uncinato.png';
    pngUncinato.setAttribute('id', 'imgUncinato');

    if (data >= startUncinato && data <= endUncinato) {
        uncinatoBox.appendChild(uncinatoName)
        uncinatoBox.appendChild(uncinatoData)
        uncinatoBox.appendChild(pngUncinato)
        uncinatoBox.appendChild(uncinatoDescription)
    }

    //Nero invernale
    let neroInvernaleBox = document.getElementById('tartufoNeroInv');

    let neroInvName = document.createElement('p');
    neroInvName.setAttribute('id', 'tartufoNeroInvName');
    neroInvName.textContent = 'Tartufo Nero Invernale';

    let neroInvData = document.createElement('p');
    neroInvData.setAttribute('id', 'tartufoNeroInvData');
    neroInvData.textContent = 'La raccolta inizia il 01/01/2024 e termina il 15/03/2024';

    let neroInvDescription = document.createElement('p');
    neroInvDescription.setAttribute('id', 'tartufoNeroInvDescription');
    neroInvDescription.textContent = "Il tartufo nero invernale anche detto brumale ha il perfidiò di colore nero/brunastro ed è sormontato da piccole verruche scure. Ha una polpa dal colore gigio/fumo con venature rade e ben definite.";




    let startNeroInv = new Date('2024-01-01');
    let endNeroInv = new Date('2024-03-15');



    let pngNeroInv = document.createElement('img')
    pngNeroInv.src = 'neroinvernale.png';
    pngNeroInv.setAttribute('id', 'imgNeroInvernale');

    if (data >= startNeroInv && data <= endNeroInv) {
        neroInvernaleBox.appendChild(neroInvName)
        neroInvernaleBox.appendChild(neroInvData)
        neroInvernaleBox.appendChild(pngNeroInv)
        neroInvernaleBox.appendChild(neroInvDescription)
    }

    //Bianchetto

    let bianchettoBox = document.getElementById('tartufoBianchetto');


    let bianchettoName = document.createElement('p');
    bianchettoName.setAttribute('id', 'tartufoBianchettoName')
    bianchettoName.textContent = 'Tartufo Bianchetto'

    let bianchettoData = document.createElement('p');
    bianchettoData.setAttribute('id', 'tartufoBianchettoData')
    bianchettoData.textContent = 'La raccolta inizia il 15/01/2023 e termina il 15/04/2023'


    let bianchettoDescription = document.createElement('p');
    bianchettoDescription.setAttribute('id', 'tartufoBianchettoDescription')
    bianchettoDescription.textContent = "Il bianchetto anche detto marzuolo si distingue dall’aroma forte e piccante. Il marzuolo ha una forma globosa non troppo irregolare, con il peridio liscio di color bianco ocra, a volte tendente al rossiccio. La parte interna anche detta gleba è piuttosto chiara, solcata da grossolane venature biancastre. Ha un profumo delicato all’inizio che man mano che matura tende a diventare più intenso con sentori di aglio. Ha un sapore forte, piccante e molto agliaceo."

    let startBianchetto = new Date('2023-01-15');
    let endBianchetto = new Date('2023-04-15');

    let pngBianchetto = document.createElement('img')
    pngBianchetto.src = 'bianchetto.png';
    pngBianchetto.setAttribute('id', 'imgBianchetto');

    if (data >= startBianchetto && data <= endBianchetto) {
        bianchettoBox.appendChild(bianchettoName)
        bianchettoBox.appendChild(bianchettoData)
        bianchettoBox.appendChild(pngBianchetto)
        bianchettoBox.appendChild(bianchettoDescription)
    }

    //Tartufo nero liscio

    let neroLiscioBox = document.getElementById('tartufoNeroLiscio');

    let tartfuoNeroLiscioName = document.createElement('p');
    tartfuoNeroLiscioName.setAttribute('id', 'tartufoNeroLiscioName');
    tartfuoNeroLiscioName.textContent = 'Tartufo Nero Liscio';

    let tartfuoNeroLiscioData = document.createElement('p');
    tartfuoNeroLiscioData.setAttribute('id', 'tartufoNeroLiscioData');
    tartfuoNeroLiscioData.textContent = 'La raccolta inizia il 01/10/2023 e termina il 31/12/2023';

    let tartfuoNeroLiscioDescription = document.createElement('p');
    tartfuoNeroLiscioDescription.setAttribute('id', 'tartufoNeroLiscioDescription');
    tartfuoNeroLiscioDescription.textContent = "Il tartufo nero liscio come già dice il nome ha un peridio caratterizzato da spore rade e poco prominenti che gli donano una scorza levigata e uniforme. Le gleba è di colore bruno biancastro, tendente a toni rugginosi con il passare del tempo. Il tartufo nero liscio emana un odore che ricorda quello del bianco, ma più intenso e persistente. Il sapore si contraddistingue per i ton intensi e persistenti che lo rendono ideale per molti usi culinari.";

    let startTartfuoNeroLiscio = new Date('2023-10-01');
    let endTartfuoNeroLiscio = new Date('2023-12-31');


    let pngTartfuoNeroLiscio = document.createElement('img')
    pngTartfuoNeroLiscio.src = 'neroliscio.png';
    pngTartfuoNeroLiscio.setAttribute('id', 'imgNeroLiscio');

    if (data >= startTartfuoNeroLiscio && data <= endTartfuoNeroLiscio) {
        neroLiscioBox.appendChild(tartfuoNeroLiscioName)
        neroLiscioBox.appendChild(tartfuoNeroLiscioData)
        neroLiscioBox.appendChild(pngTartfuoNeroLiscio)
        neroLiscioBox.appendChild(tartfuoNeroLiscioDescription)
    }

    //Tartufo nero ordinario

    let neroOrdinarioBox = document.getElementById('tartufoNeroOrd');

    let tartfuoNeroOrdinarioName = document.createElement('p');
    tartfuoNeroOrdinarioName.setAttribute('id', 'tartufoNeroOrdName');
    tartfuoNeroOrdinarioName.textContent = 'Tartufo Nero Ordinario';

    let tartfuoNeroOrdinarioData = document.createElement('p');
    tartfuoNeroOrdinarioData.setAttribute('id', 'tartufoNeroOrdData');
    tartfuoNeroOrdinarioData.textContent = 'La raccolta inizia il 01/11/2023 e termina il 15/04/2024';

    let tartfuoNeroOrdinarioDescription = document.createElement('p');
    tartfuoNeroOrdinarioDescription.setAttribute('id', 'tartufoNeroOrdescription');
    tartfuoNeroOrdinarioDescription.textContent = "Il tartufo nero ordinario ha una gleba grigio bruna ma in alcuni casi ha un colore giallo tendente al marrone sempre con venature bianche. Esso ha una superficie rugosa con una forma sferica. Ha un profumo molto forte e un sapore delicato ma leggermente amarognolo.";

    let startTartfuoNeroOrdinario = new Date('2023-11-01');
    let endTartfuoNeroOrdinario = new Date('2024-03-15');


    let pngTartfuoNeroOrdinario = document.createElement('img')
    pngTartfuoNeroOrdinario.src = 'neroordinario.png';
    pngTartfuoNeroOrdinario.setAttribute('id', 'imgNeroOrdinario');

    if (data >= startTartfuoNeroOrdinario && data <= endTartfuoNeroOrdinario) {
        neroOrdinarioBox.appendChild(tartfuoNeroOrdinarioName)
        neroOrdinarioBox.appendChild(tartfuoNeroOrdinarioData)
        neroOrdinarioBox.appendChild(pngTartfuoNeroOrdinario)
        neroOrdinarioBox.appendChild(tartfuoNeroOrdinarioDescription)
    }


    //Prima Chiusura

    let primaChiusura = document.getElementById('primaChiusura');

    let chiusuraUno = document.createElement('p')
    chiusuraUno.textContent = 'In questo momento in Umbria non si possono raccogliere tartufi, torna il giorno 28-05-2023 per la raccolta del Tartufo nero estivo anche detto scorzone.'


    let startPrimaChiusura = new Date('2023-04-16');
    let endPrimaChiusura = new Date('2023-05-28');


    if (data >= startPrimaChiusura && data <= endPrimaChiusura) {
        primaChiusura.appendChild(chiusuraUno)
    }

    //Seconda Chiusura

    let secondaChiusura = document.getElementById('secondaChiusura');

    let chiusuraDue = document.createElement('p')
    chiusuraUno.textContent = 'In questo periodo in Umbria non si possono raccogliere tartufi, torna il giorno 24-09-2023 per la raccolta del Tartufo nero estivo anche detto scorzone.'


    let startSecondaChiusura = new Date('2023-09-01');
    let endSecondaChiusura = new Date('2023-09-24');


    if (data >= startSecondaChiusura && data <= endSecondaChiusura) {
        secondaChiusura.appendChild(chiusuraDue)
    }
}
