import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SignaturePad  from 'react-signature-canvas';
import './informativa.styles.scss'

export default function Informativa() {
    const sigPad=useRef();
    let data='o';
    const [firma, setFirma]=useState('');
    const [c, setC]=useState(false);

    const clear=()=>{
        sigPad.current.clear();
    }

    const saveFirma=()=>{
        if(sigPad.current.toDataURL()=="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAq8AAAC7CAYAAABLuXc5AAAAAXNSR0IArs4c6QAACnZJREFUeF7t1kENAAAMArHh3/R0XNIpIB0Pdo4AAQIECBAgQIBARGCRnGISIECAAAECBAgQOONVCQgQIECAAAECBDICxmvmVYISIECAAAECBAgYrzpAgAABAgQIECCQETBeM68SlAABAgQIECBAwHjVAQIECBAgQIAAgYyA8Zp5laAECBAgQIAAAQLGqw4QIECAAAECBAhkBIzXzKsEJUCAAAECBAgQMF51gAABAgQIECBAICNgvGZeJSgBAgQIECBAgIDxqgMECBAgQIAAAQIZAeM18ypBCRAgQIAAAQIEjFcdIECAAAECBAgQyAgYr5lXCUqAAAECBAgQIGC86gABAgQIECBAgEBGwHjNvEpQAgQIECBAgAAB41UHCBAgQIAAAQIEMgLGa+ZVghIgQIAAAQIECBivOkCAAAECBAgQIJARMF4zrxKUAAECBAgQIEDAeNUBAgQIECBAgACBjIDxmnmVoAQIECBAgAABAsarDhAgQIAAAQIECGQEjNfMqwQlQIAAAQIECBAwXnWAAAECBAgQIEAgI2C8Zl4lKAECBAgQIECAgPGqAwQIECBAgAABAhkB4zXzKkEJECBAgAABAgSMVx0gQIAAAQIECBDICBivmVcJSoAAAQIECBAgYLzqAAECBAgQIECAQEbAeM28SlACBAgQIECAAAHjVQcIECBAgAABAgQyAsZr5lWCEiBAgAABAgQIGK86QIAAAQIECBAgkBEwXjOvEpQAAQIECBAgQMB41QECBAgQIECAAIGMgPGaeZWgBAgQIECAAAECxqsOECBAgAABAgQIZASM18yrBCVAgAABAgQIEDBedYAAAQIECBAgQCAjYLxmXiUoAQIECBAgQICA8aoDBAgQIECAAAECGQHjNfMqQQkQIECAAAECBIxXHSBAgAABAgQIEMgIGK+ZVwlKgAABAgQIECBgvOoAAQIECBAgQIBARsB4zbxKUAIECBAgQIAAAeNVBwgQIECAAAECBDICxmvmVYISIECAAAECBAgYrzpAgAABAgQIECCQETBeM68SlAABAgQIECBAwHjVAQIECBAgQIAAgYyA8Zp5laAECBAgQIAAAQLGqw4QIECAAAECBAhkBIzXzKsEJUCAAAECBAgQMF51gAABAgQIECBAICNgvGZeJSgBAgQIECBAgIDxqgMECBAgQIAAAQIZAeM18ypBCRAgQIAAAQIEjFcdIECAAAECBAgQyAgYr5lXCUqAAAECBAgQIGC86gABAgQIECBAgEBGwHjNvEpQAgQIECBAgAAB41UHCBAgQIAAAQIEMgLGa+ZVghIgQIAAAQIECBivOkCAAAECBAgQIJARMF4zrxKUAAECBAgQIEDAeNUBAgQIECBAgACBjIDxmnmVoAQIECBAgAABAsarDhAgQIAAAQIECGQEjNfMqwQlQIAAAQIECBAwXnWAAAECBAgQIEAgI2C8Zl4lKAECBAgQIECAgPGqAwQIECBAgAABAhkB4zXzKkEJECBAgAABAgSMVx0gQIAAAQIECBDICBivmVcJSoAAAQIECBAgYLzqAAECBAgQIECAQEbAeM28SlACBAgQIECAAAHjVQcIECBAgAABAgQyAsZr5lWCEiBAgAABAgQIGK86QIAAAQIECBAgkBEwXjOvEpQAAQIECBAgQMB41QECBAgQIECAAIGMgPGaeZWgBAgQIECAAAECxqsOECBAgAABAgQIZASM18yrBCVAgAABAgQIEDBedYAAAQIECBAgQCAjYLxmXiUoAQIECBAgQICA8aoDBAgQIECAAAECGQHjNfMqQQkQIECAAAECBIxXHSBAgAABAgQIEMgIGK+ZVwlKgAABAgQIECBgvOoAAQIECBAgQIBARsB4zbxKUAIECBAgQIAAAeNVBwgQIECAAAECBDICxmvmVYISIECAAAECBAgYrzpAgAABAgQIECCQETBeM68SlAABAgQIECBAwHjVAQIECBAgQIAAgYyA8Zp5laAECBAgQIAAAQLGqw4QIECAAAECBAhkBIzXzKsEJUCAAAECBAgQMF51gAABAgQIECBAICNgvGZeJSgBAgQIECBAgIDxqgMECBAgQIAAAQIZAeM18ypBCRAgQIAAAQIEjFcdIECAAAECBAgQyAgYr5lXCUqAAAECBAgQIGC86gABAgQIECBAgEBGwHjNvEpQAgQIECBAgAAB41UHCBAgQIAAAQIEMgLGa+ZVghIgQIAAAQIECBivOkCAAAECBAgQIJARMF4zrxKUAAECBAgQIEDAeNUBAgQIECBAgACBjIDxmnmVoAQIECBAgAABAsarDhAgQIAAAQIECGQEjNfMqwQlQIAAAQIECBAwXnWAAAECBAgQIEAgI2C8Zl4lKAECBAgQIECAgPGqAwQIECBAgAABAhkB4zXzKkEJECBAgAABAgSMVx0gQIAAAQIECBDICBivmVcJSoAAAQIECBAgYLzqAAECBAgQIECAQEbAeM28SlACBAgQIECAAAHjVQcIECBAgAABAgQyAsZr5lWCEiBAgAABAgQIGK86QIAAAQIECBAgkBEwXjOvEpQAAQIECBAgQMB41QECBAgQIECAAIGMgPGaeZWgBAgQIECAAAECxqsOECBAgAABAgQIZASM18yrBCVAgAABAgQIEDBedYAAAQIECBAgQCAjYLxmXiUoAQIECBAgQICA8aoDBAgQIECAAAECGQHjNfMqQQkQIECAAAECBIxXHSBAgAABAgQIEMgIGK+ZVwlKgAABAgQIECBgvOoAAQIECBAgQIBARsB4zbxKUAIECBAgQIAAAeNVBwgQIECAAAECBDICxmvmVYISIECAAAECBAgYrzpAgAABAgQIECCQETBeM68SlAABAgQIECBAwHjVAQIECBAgQIAAgYyA8Zp5laAECBAgQIAAAQLGqw4QIECAAAECBAhkBIzXzKsEJUCAAAECBAgQMF51gAABAgQIECBAICNgvGZeJSgBAgQIECBAgIDxqgMECBAgQIAAAQIZAeM18ypBCRAgQIAAAQIEjFcdIECAAAECBAgQyAgYr5lXCUqAAAECBAgQIGC86gABAgQIECBAgEBGwHjNvEpQAgQIECBAgAAB41UHCBAgQIAAAQIEMgLGa+ZVghIgQIAAAQIECBivOkCAAAECBAgQIJARMF4zrxKUAAECBAgQIEDAeNUBAgQIECBAgACBjIDxmnmVoAQIECBAgAABAsarDhAgQIAAAQIECGQEjNfMqwQlQIAAAQIECBAwXnWAAAECBAgQIEAgI2C8Zl4lKAECBAgQIECAgPGqAwQIECBAgAABAhkB4zXzKkEJECBAgAABAgSMVx0gQIAAAQIECBDICBivmVcJSoAAAQIECBAgYLzqAAECBAgQIECAQEbAeM28SlACBAgQIECAAAHjVQcIECBAgAABAgQyAsZr5lWCEiBAgAABAgQIGK86QIAAAQIECBAgkBEwXjOvEpQAAQIECBAgQMB41QECBAgQIECAAIGMgPGaeZWgBAgQIECAAAECxqsOECBAgAABAgQIZASM18yrBCVAgAABAgQIEDBedYAAAQIECBAgQCAj8Fk4ALwhFZPeAAAAAElFTkSuQmCC"){
            alert("firma!!");
            setC(false)
        } else{
            setFirma(sigPad.current.toDataURL());

        }
       
        console.log(firma);
    }
    

  return (
    <div className='infCont'>
    <span className="infDesc">Informativa privacy</span>
    <textarea className='ta'>
    La presente Informativa sulla privacy descrive le nostre politiche e procedure sulla raccolta, l'uso e la divulgazione delle tue informazioni quando utilizzi il Servizio e ti informa sui tuoi diritti alla privacy e su come la legge ti protegge.

    Utilizziamo i tuoi dati personali per fornire e migliorare il servizio. Utilizzando il Servizio, accetti la raccolta e l'uso delle informazioni in conformit?? con la presente Informativa sulla privacy.

    Interpretazione e definizioni

    Interpretazione

    Le parole di cui la lettera iniziale ?? in maiuscolo hanno significati definiti alle seguenti condizioni. Le seguenti definizioni avranno lo stesso significato indipendentemente dal fatto che appaiano al singolare o al plurale.


    Definizioni

    Ai fini della presente Informativa sulla privacy:

    Account indica un account univoco creato per consentirti di accedere al nostro Servizio o a parti del nostro Servizio.

    Affiliata indica un'entit?? che controlla, ?? controllata da o ?? sotto il controllo comune di una parte, dove "controllo" indica la propriet?? del 50% o pi?? delle azioni, partecipazioni o altri titoli aventi diritto di voto per l'elezione di amministratori o altra autorit?? di gestione .

    Applicazione indica il programma software fornito dalla Societ?? scaricato dall'Utente su qualsiasi dispositivo elettronico, denominato Bla Bla Cayman

    Azienda (denominata "la Societ??", "Noi", "Noi" o "Nostra" nel presente Contratto) si riferisce a Cayman Group srls, tramite f.sco crispi 19.

    Ai fini del GDPR, la Societ?? ?? il Titolare del trattamento.

    Il paese si riferisce a: Italia

    Titolare del trattamento, ai fini del GDPR (Regolamento generale sulla protezione dei dati), si riferisce alla Societ?? come la persona giuridica che da sola o insieme ad altri determina le finalit?? e le modalit?? del trattamento dei Dati Personali.

    Dispositivo indica qualsiasi dispositivo che pu?? accedere al Servizio come un computer, un telefono cellulare o un tablet digitale.

    Facebook Fan Page ?? un profilo pubblico denominato Cayman Group srls appositamente creato dalla Societ?? sul social network Facebook, accessibile da https://www.facebook.com/caymangroupsrls

    I dati personali sono tutte le informazioni che si riferiscono a un individuo identificato o identificabile.


    Ai fini del GDPR, per Dati Personali si intende qualsiasi informazione relativa all'Utente come un nome, un numero di identificazione, dati sulla posizione, identificatore online o uno o pi?? fattori specifici di carattere fisico, fisiologico, genetico, mentale, economico, culturale o sociale. identit??.

    Il servizio si riferisce all'Applicazione.

    Fornitore di servizi indica qualsiasi persona fisica o giuridica che elabora i dati per conto della Societ??. Si riferisce a societ?? terze o persone impiegate dalla Societ?? per facilitare il Servizio, per fornire il Servizio per conto della Societ??, per eseguire servizi relativi al Servizio o per assistere la Societ?? nell'analisi di come il Servizio viene utilizzato. Ai fini del GDPR, i fornitori di servizi sono considerati responsabili del trattamento dei dati.

    Il servizio di social media di terze parti si riferisce a qualsiasi sito Web o sito Web di social network tramite il quale un utente pu?? accedere o creare un account per utilizzare il servizio.

    I Dati di utilizzo si riferiscono ai dati raccolti automaticamente, generati dall'utilizzo del Servizio o dall'infrastruttura del Servizio stesso (ad esempio, la durata della visita di una pagina).

    Si intende la persona fisica che accede o utilizza il Servizio, o la societ?? o altra entit?? giuridica per conto della quale tale individuo accede o utilizza il Servizio, a seconda dei casi.

    Ai sensi del GDPR (Regolamento generale sulla protezione dei dati), puoi essere indicato come Soggetto dei dati o come Utente in quanto individuo che utilizza il Servizio.


    Raccolta e utilizzo dei dati personali

    Tipi di dati raccolti

    Dati personali

    Durante l'utilizzo del nostro servizio, potremmo chiederti di fornirci alcune informazioni di identificazione personale che possono essere utilizzate per contattarti o identificarti. Le informazioni di identificazione personale possono includere, ma non sono limitate a:

    Indirizzo e-mail

    Nome e cognome

    Numero di telefono

    Indirizzo, stato, provincia, codice postale, citt??

    Dati di utilizzo

    Dati di utilizzo

    I dati di utilizzo vengono raccolti automaticamente durante l'utilizzo del servizio.

    I dati di utilizzo possono includere informazioni quali l'indirizzo del protocollo Internet del dispositivo (ad es. Indirizzo IP), il tipo di browser, la versione del browser, le pagine del nostro servizio che visiti, l'ora e la data della visita, il tempo trascorso su tali pagine, dispositivo unico identificatori e altri dati diagnostici.

    Quando accedi al Servizio da o tramite un dispositivo mobile, potremmo raccogliere determinate informazioni automaticamente, inclusi, a titolo esemplificativo ma non esaustivo, il tipo di dispositivo mobile che utilizzi, l'ID univoco del tuo dispositivo mobile, l'indirizzo IP del tuo dispositivo mobile, il tuo cellulare sistema operativo, il tipo di browser Internet mobile che utilizzi, identificatori univoci del dispositivo e altri dati diagnostici.

    Potremmo anche raccogliere informazioni che il tuo browser invia ogni volta che visiti il nostro servizio o quando accedi al servizio da o tramite un dispositivo mobile.

    Informazioni da servizi di social media di terze parti

    La Societ?? ti consente di creare un account e accedere per utilizzare il Servizio tramite i seguenti servizi di social media di terze parti:

    ??? Google

    ??? Facebook

    ??? Twitter

    Se decidi di registrarti tramite o altrimenti concederci l'accesso a un Servizio di social media di terze parti, potremmo raccogliere dati personali che sono gi?? associati all'account del tuo servizio di social media di terze parti, come il tuo nome, il tuo indirizzo e-mail, le tue attivit?? o il tuo elenco di contatti associato a tale account.

    Potresti anche avere la possibilit?? di condividere informazioni aggiuntive con la Societ?? tramite l'account del tuo servizio di social media di terze parti. Se si sceglie di fornire tali informazioni e Dati personali, durante la registrazione o in altro modo, si concede alla Societ?? il permesso di utilizzarli, condividerli e archiviarli in modo coerente con la presente Informativa sulla privacy.


    Informazioni raccolte durante l'utilizzo dell'applicazione

    Durante l'utilizzo della nostra applicazione, al fine di fornire funzionalit?? della nostra applicazione, potremmo raccogliere, previa autorizzazione dell'utente:

    ??? Informazioni sulla tua posizione

    ??? Informazioni dalla rubrica del dispositivo (elenco contatti)

    ??? Immagini e altre informazioni dalla fotocamera del dispositivo e dalla libreria di foto

    Utilizziamo queste informazioni per fornire funzionalit?? del nostro servizio, per migliorare e personalizzare il nostro servizio. Le informazioni possono essere caricate sui server della Societ?? e / o sul server di un Fornitore di servizi o possono essere semplicemente archiviate sul tuo dispositivo.

    Puoi abilitare o disabilitare l'accesso a queste informazioni in qualsiasi momento, tramite le impostazioni del tuo dispositivo.

    Utilizzo dei tuoi dati personali

    La Societ?? pu?? utilizzare i Dati Personali per le seguenti finalit??:

    Per fornire e mantenere il nostro Servizio, incluso il monitoraggio dell'utilizzo del nostro Servizio.

    Per gestire il tuo account: per gestire la tua registrazione come utente del servizio. I dati personali forniti possono darti accesso a diverse funzionalit?? del servizio che sono disponibili per te come utente registrato.

    Per l'esecuzione di un contratto: lo sviluppo, la conformit?? e l'assunzione del contratto di acquisto per i prodotti, articoli o servizi che hai acquistato o di qualsiasi altro contratto con Noi tramite il Servizio.

    Per contattarti: Per contattarti tramite e-mail, telefonate, SMS o altre forme equivalenti di comunicazione elettronica, come le notifiche push di un'applicazione mobile riguardanti aggiornamenti o comunicazioni informative relative alle funzionalit??, ai prodotti o ai servizi contrattati, inclusi gli aggiornamenti di sicurezza, quando necessario o ragionevole per la loro attuazione.

    Per fornirti notizie, offerte speciali e informazioni generali su altri beni, servizi ed eventi che offriamo simili a quelli che hai gi?? acquistato o richiesto, a meno che tu non abbia scelto di non ricevere tali informazioni.

    Per gestire le tue richieste: per partecipare e gestire le tue richieste a noi.

    Per i trasferimenti aziendali: potremmo utilizzare le tue informazioni per valutare o condurre una fusione, cessione, ristrutturazione, riorganizzazione, scioglimento o altra vendita o trasferimento di alcune o tutte le nostre attivit??, sia come impresa in funzionamento che nell'ambito di un fallimento, liquidazione, o procedimento simile, in cui i dati personali da noi detenuti sugli utenti del nostro servizio sono tra le risorse trasferite.

    Per altri scopi: potremmo utilizzare le tue informazioni per altri scopi, come l'analisi dei dati, l'identificazione delle tendenze di utilizzo, la determinazione dell'efficacia delle nostre campagne promozionali e per valutare e migliorare il nostro Servizio, prodotti, servizi, marketing e la tua esperienza.


    Potremmo condividere le tue informazioni personali nelle seguenti situazioni:

    ??? Con i fornitori di servizi: potremmo condividere le tue informazioni personali con i fornitori di servizi per monitorare e analizzare l'uso del nostro servizio, per contattarti.

    ??? Per i trasferimenti di affari: possiamo condividere o trasferire le tue informazioni personali in relazione o durante le negoziazioni di qualsiasi fusione, vendita di beni della Societ??, finanziamento o acquisizione di tutta o parte della Nostra attivit?? a un'altra societ??.

    ??? Con gli affiliati: potremmo condividere le tue informazioni con i nostri affiliati, nel qual caso richiederemo a tali affiliati di rispettare la presente Informativa sulla privacy. Le affiliate includono la nostra societ?? madre e qualsiasi altra sussidiaria, partner di joint venture o altre societ?? che controlliamo o che sono sotto il controllo comune con noi.

    ??? Con partner commerciali: potremmo condividere le tue informazioni con i nostri partner commerciali per offrirti determinati prodotti, servizi o promozioni.

    ??? Con altri utenti: quando condividi informazioni personali o interagisci in altro modo nelle aree pubbliche con altri utenti, tali informazioni possono essere visualizzate da tutti gli utenti e possono essere distribuite pubblicamente all'esterno. Se interagisci con altri utenti o ti registri tramite un servizio di social media di terze parti, i tuoi contatti sul servizio di social media di terze parti potrebbero vedere il tuo nome, profilo, immagini e descrizione della tua attivit??. Allo stesso modo, altri utenti potranno visualizzare le descrizioni della tua attivit??, comunicare con te e visualizzare il tuo profilo.

    ??? Con il tuo consenso: possiamo divulgare le tue informazioni personali per qualsiasi altro scopo con il tuo consenso.

    Conservazione dei dati personali

    La Societ?? conserver?? i tuoi dati personali solo per il tempo necessario agli scopi indicati nella presente Informativa sulla privacy. Conserveremo e utilizzeremo i tuoi dati personali nella misura necessaria per adempiere ai nostri obblighi legali (ad esempio, se ci viene richiesto di conservare i tuoi dati per conformarci alle leggi applicabili), risolvere controversie e far rispettare i nostri accordi e politiche legali.

    La Societ?? conserver?? anche i dati di utilizzo per scopi di analisi interna. I dati di utilizzo vengono generalmente conservati per un periodo di tempo pi?? breve, tranne quando questi dati vengono utilizzati per rafforzare la sicurezza o per migliorare la funzionalit?? del nostro servizio, o se siamo legalmente obbligati a conservare questi dati per periodi di tempo pi?? lunghi.


    Trasferimento dei tuoi dati personali

    Le tue informazioni, compresi i Dati Personali, sono trattate presso le sedi operative della Societ?? e in ogni altro luogo in cui si trovano le parti coinvolte nel trattamento. Significa che queste informazioni possono essere trasferite a - e mantenute su - computer situati al di fuori del tuo stato, provincia, paese o altra giurisdizione governativa in cui le leggi sulla protezione dei dati possono differire da quelle della tua giurisdizione.

    Il tuo consenso alla presente Informativa sulla privacy seguito dall'invio di tali informazioni rappresenta il tuo consenso a tale trasferimento.

    La Societ?? adotter?? tutte le misure ragionevolmente necessarie per garantire che i tuoi dati siano trattati in modo sicuro e in conformit?? con la presente Informativa sulla privacy e nessun trasferimento dei tuoi dati personali avr?? luogo a un'organizzazione o un paese a meno che non siano in atto controlli adeguati, inclusa la sicurezza di I tuoi dati e altre informazioni personali.

    Divulgazione dei dati personali

    Transazione d'affari

    Se la Societ?? ?? coinvolta in una fusione, acquisizione o vendita di attivit??, i tuoi dati personali potrebbero essere trasferiti. Forniremo un avviso prima che i tuoi dati personali vengano trasferiti e diventino soggetti a una diversa Informativa sulla privacy.

    Forze dell'ordine

    In determinate circostanze, la Societ?? potrebbe essere tenuta a divulgare i dati personali dell'utente se richiesto dalla legge o in risposta a richieste valide da parte delle autorit?? pubbliche (ad esempio un tribunale o un'agenzia governativa).

    Altri requisiti legali

    La Societ?? pu?? divulgare i tuoi dati personali in buona fede, ritenendo che tale azione sia necessaria per:

    ??? Rispettare un obbligo legale

    ??? Proteggere e difendere i diritti o la propriet?? della Societ??

    ??? Prevenire o indagare su possibili illeciti in relazione al Servizio

    ??? Proteggere la sicurezza personale degli Utenti del Servizio o del pubblico

    ??? Proteggere dalla responsabilit?? legale

    Sicurezza dei tuoi dati personali

    La sicurezza dei tuoi dati personali ?? importante per noi, ma ricorda che nessun metodo di trasmissione su Internet o metodo di archiviazione elettronica ?? sicuro al 100%. Sebbene ci sforziamo di utilizzare mezzi commercialmente accettabili per proteggere i tuoi dati personali, non possiamo garantirne l'assoluta sicurezza.


    Privacy GDPR

    Base giuridica per l'elaborazione dei dati personali ai sensi del GDPR

    Possiamo trattare i dati personali alle seguenti condizioni:

    ??? Consenso: hai dato il tuo consenso al trattamento dei dati personali per una o pi?? finalit?? specifiche.

    ??? Esecuzione di un contratto: la fornitura di dati personali ?? necessaria per l'esecuzione di un contratto con l'utente e / o per eventuali obblighi precontrattuali dello stesso.

    ??? Obblighi legali: il trattamento dei dati personali ?? necessario per l'adempimento di un obbligo legale a cui ?? soggetta la Societ??.

    ??? Interessi vitali: il trattamento dei dati personali ?? necessario per proteggere i tuoi interessi vitali o di un'altra persona fisica.

    ??? Interessi pubblici: il trattamento dei dati personali ?? correlato a un'attivit?? svolta nell'interesse pubblico o nell'esercizio di pubblici poteri conferiti alla Societ??.

    ??? Legittimi interessi: il trattamento dei dati personali ?? necessario ai fini degli interessi legittimi perseguiti dalla Societ??.

    In ogni caso, la Societ?? aiuter?? volentieri a chiarire la specifica base giuridica che si applica al trattamento, ed in particolare se la fornitura di Dati Personali sia un requisito legale o contrattuale, o un requisito necessario per stipulare un contratto.

    I tuoi diritti ai sensi del GDPR

    La Societ?? si impegna a rispettare la riservatezza dei Suoi Dati Personali ea garantirle di poter esercitare i Suoi diritti.


    Ai sensi della presente Informativa sulla privacy e per legge, se risiedi all'interno dell'UE, hai il diritto di:

    ??? Richiedi l'accesso ai tuoi dati personali. Il diritto di accedere, aggiornare o eliminare le informazioni che abbiamo su di te. Ove possibile, puoi accedere, aggiornare o richiedere la cancellazione dei tuoi dati personali direttamente nella sezione delle impostazioni del tuo account. Se non sei in grado di eseguire queste azioni da solo, contattaci per aiutarti. Ci?? ti consente anche di ricevere una copia dei dati personali che deteniamo su di te.

    ??? Richiedere la correzione dei dati personali che deteniamo su di te. Hai il diritto di far correggere qualsiasi informazione incompleta o imprecisa su di te in nostro possesso.

    ??? Opporsi al trattamento dei tuoi dati personali. Questo diritto esiste quando ci affidiamo a un interesse legittimo come base legale per il nostro trattamento e c'?? qualcosa nella tua situazione particolare che ti fa desiderare di opporti al nostro trattamento dei tuoi dati personali su questo terreno. Hai anche il diritto di opporti al trattamento dei tuoi dati personali per scopi di marketing diretto.

    ??? Richiedi la cancellazione dei tuoi dati personali. Hai il diritto di chiederci di eliminare o rimuovere i dati personali quando non ci sono validi motivi per continuare a elaborarli.

    ??? Richiedi il trasferimento dei tuoi dati personali. Forniremo a te oa una terza parte che hai scelto i tuoi dati personali in un formato strutturato, comunemente usato e leggibile da una macchina. Si prega di notare che questo diritto si applica solo alle informazioni automatizzate che inizialmente ci hai fornito il consenso per l'uso o dove abbiamo utilizzato le informazioni per eseguire un contratto con te.

    ??? Ritirare il tuo consenso. Hai il diritto di revocare il tuo consenso all'utilizzo dei tuoi dati personali. Se ritiri il tuo consenso, potremmo non essere in grado di fornirti l'accesso a determinate funzionalit?? specifiche del Servizio.


    Esercizio dei tuoi diritti di protezione dei dati GDPR

    Puoi esercitare i tuoi diritti di accesso, rettifica, cancellazione e opposizione contattandoci. Tieni presente che potremmo chiederti di verificare la tua identit?? prima di rispondere a tali richieste. Se fai una richiesta, faremo del nostro meglio per risponderti il prima possibile.

    Hai il diritto di presentare reclamo a un'autorit?? per la protezione dei dati in merito alla nostra raccolta e utilizzo dei tuoi dati personali. Per ulteriori informazioni, se ti trovi nello Spazio economico europeo (SEE), contatta la tua autorit?? locale per la protezione dei dati nello SEE.

    Pagina dei fan di Facebook

    Titolare del trattamento per la Fan Page di Facebook

    La Societ?? ?? il Titolare del trattamento dei tuoi Dati Personali raccolti durante l'utilizzo del Servizio. In qualit?? di gestore della Fan Page di Facebook https://www.facebook.com/caymangroupsrls, la Societ?? e l'operatore del social network Facebook sono Contitolari del trattamento.

    La Societ?? ha stipulato accordi con Facebook che definiscono i termini per l'utilizzo della Fan Page di Facebook, tra le altre cose. Questi termini si basano principalmente sui Termini di servizio di Facebook: https://www.facebook.com/terms.php

    Visitare l'Informativa sulla privacy di Facebook https://www.facebook.com/policy.php per ulteriori informazioni su come Facebook gestisce i dati personali o contattare Facebook online, o per posta: Facebook, Inc. ATTN, Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025, Stati Uniti.


    Facebook Insights

    Utilizziamo la funzione Facebook Insights in relazione al funzionamento della Fan Page di Facebook e sulla base del GDPR, al fine di ottenere dati statistici anonimi sui nostri utenti.

    A tal fine, Facebook inserisce un Cookie sul dispositivo dell'utente che visita la nostra Fan Page di Facebook. Ogni Cookie contiene un codice identificativo univoco e rimane attivo per un periodo di due anni, tranne quando viene cancellato prima della fine di questo periodo.

    Facebook riceve, registra ed elabora le informazioni memorizzate nel Cookie, in particolare quando l'utente visita i servizi di Facebook, servizi forniti da altri membri della Fan Page di Facebook e servizi di altre societ?? che utilizzano i servizi di Facebook.

    Per ulteriori informazioni sulle pratiche sulla privacy di Facebook, visitare l'Informativa sulla privacy di Facebook qui: https://www.facebook.com/full_data_use_policy

    Privacy dei bambini

    Il nostro servizio non si rivolge a persone di et?? inferiore ai 13 anni. Non raccogliamo consapevolmente informazioni di identificazione personale da persone di et?? inferiore ai 13 anni. Se sei un genitore o tutore e sei consapevole che tuo figlio ci ha fornito dati personali, ti preghiamo di Contattaci. Se veniamo a conoscenza del fatto che abbiamo raccolto dati personali da chiunque abbia meno di 13 anni senza la verifica del consenso dei genitori, adottiamo misure per rimuovere tali informazioni dai nostri server.

    Se dobbiamo fare affidamento sul consenso come base legale per l'elaborazione delle tue informazioni e il tuo paese richiede il consenso di un genitore, potremmo richiedere il consenso del tuo genitore prima di raccogliere e utilizzare tali informazioni.


    Collegamenti ad altri siti web

    Il nostro servizio pu?? contenere collegamenti ad altri siti Web che non sono gestiti da noi. Se fai clic su un collegamento di terze parti, verrai indirizzato al sito di quella terza parte. Ti consigliamo vivamente di rivedere l'Informativa sulla privacy di ogni sito che visiti.

    Non abbiamo alcun controllo e non ci assumiamo alcuna responsabilit?? per il contenuto, le politiche sulla privacy o le pratiche di qualsiasi sito o servizio di terze parti.

    Modifiche alla presente informativa sulla privacy

    Potremmo aggiornare la nostra politica sulla privacy di volta in volta. Ti informeremo di eventuali modifiche pubblicando la nuova Informativa sulla privacy in questa pagina.

    Ti informeremo via e-mail e / o un avviso ben visibile sul Nostro Servizio, prima che la modifica diventi effettiva e aggiorneremo la data "Ultimo aggiornamento" nella parte superiore della presente Informativa sulla privacy.

    Si consiglia di rivedere periodicamente la presente Informativa sulla privacy per eventuali modifiche. Le modifiche alla presente Informativa sulla privacy sono effettive quando vengono pubblicate su questa pagina.


    Contattaci

    In caso di domande sulla presente Informativa sulla privacy, ?? possibile contattarci:

    Tramite e-mail: direzione@caymangroup.it

    Visitando questa pagina sul nostro sito: https://www.caymangroup.it/contatti

    Tramite numero di telefono: +39392749 8457
    </textarea>
    <form action="https://formsubmit.co/peppinoplay2@gmail.com" method="POST">
        <div>
           <span className="infScritte">Dati cliente*</span> <br/>
            <input type="text" className="infinp" name='nome' required placeholder='Nome' />
            <input type="text" className="infinp" name='cognome' required placeholder='Cognome' />   
        </div>
        <div>
            <span className="infScritte">Email*</span><br/>
            <input type="email" className="infinp" name='email' required placeholder='Email' />
        </div>
        <div>
            <span className="infScritte">Telefono*</span><br/>
            <input type="tel" className="infinp" name='numero' required placeholder='Telefono' />  
        </div>
        <div className='radio'>
            <span className="infScritte">Infomrativa sulla privacy sopra riportata*</span><br/>
            <input type="radio" id="html" name="Infomrativa sulla privacy sopra riportata*" value="Luce di Enel Energia"/>
            <label for="html">Luce di Enel Energia</label><br/>
            <input type="radio" id="css" name="Infomrativa sulla privacy sopra riportata*" value="Gas di Enel Energia"/>
            <label for="css">Gas di Enel Energia</label><br/>
            <input type="radio" id="javascript" name="Infomrativa sulla privacy sopra riportata*" value="Fibra di Melita"/>
            <label for="javascript">Fibra di Melita</label><br/>
            <input type="radio" id="javascript" name="Infomrativa sulla privacy sopra riportata*" value="Tutti i prodotti sopra elencati"/>
            <label for="javascript">Tutti i prodotti sopra elencati</label>  
        </div>
        <div>
            <span className="infScritte">Informativa sulla Privacy sopra riportata per i seguenti prodotti(1)*</span><br/>
            <input type="radio" id="html" name="Informativa sulla Privacy sopra riportata per i seguenti prodotti(1)*" value="Acconsento al trattamento dei dati personali" required/>
            <label for="html">Acconsento al trattamento dei dati personali</label><br/>
        </div>
  
        <span className="infScritte">Firma*</span>   
        <div className="sigCont">
          <SignaturePad
            ref={sigPad}/>
        </div>
        <input type='text' style={{display:"none"}} name="firma" value={firma} />
        <button type='button' onClick={()=>clear()}>Clear</button> 
        <button type='button' onClick={()=>saveFirma()}>Save</button> <br/>
        <button type='submit' className={firma ? 'send' : 'inv'}>Invia</button>

    </form>

    </div>
  )
}
