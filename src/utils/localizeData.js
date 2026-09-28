import { PACKAGES, DESTINATIONS, REVIEWS } from '../data/travelData';

// ----------------------------------------------------
// 1. REVIEWS TRANSLATIONS (All 6 Reviews in 6 Languages)
// ----------------------------------------------------
const reviewTranslations = {
  it: {
    1: {
      comment: "Ho avuto il piacere assoluto di fare un tour di sei giorni (costa occidentale e sud dello Sri Lanka) con Ceylon Heaven Tours ad aprile 2025, guidato dal fantastico Akeel – ed è stata un'esperienza davvero indimenticabile! Dall'inizio alla fine, il viaggio è stato perfetto, stimolante e profondamente coinvolgente. Akeel non ci ha solo portato nei luoghi più famosi, ma ci ha guidato lungo percorsi autentici fuori dalle rotte turistiche. Abbiamo vissuto la ricca cultura, assaggiato deliziosi piatti locali e provato la vera ospitalità dello Sri Lanka. Akeel è stato molto più di una guida: è diventato un vero amico. Consiglio vivamente Ceylon Heaven Tours!"
    },
    2: {
      comment: "Il nostro primo viaggio in Sri Lanka è stato organizzato in modo eccellente da Ceylon Heaven Tour con la massima professionalità e dedizione. Consiglio vivamente a chiunque desideri visitare lo Sri Lanka di contattare Akeel e il suo team. Hanno selezionato per noi i migliori hotel e hanno avuto un'attenzione straordinaria per i nostri bambini, trattandoli con cura, sicurezza e affetto. Un'esperienza fantastica di 5 giorni che non dimenticheremo mai!"
    },
    3: {
      comment: "Tour fantastico di 11 giorni e 10 notti in Sri Lanka con Akeel Jaazar e Ceylon Heaven Tours! Non avremmo potuto chiedere un'esperienza migliore. Tutto era pianificato alla perfezione, rendendo il viaggio rilassante e senza stress. Akeel è stato straordinario, esperto, amichevole e sempre pronto a fare il possibile per rendere speciale il nostro viaggio: dalle antiche rovine di Anuradhapura al safari a Yala e all'avvistamento delle balene a Mirissa. Consigliamo vivamente Ceylon Heaven Tours!"
    },
    4: {
      comment: "Esperienza straordinaria!! Quando siamo partiti abbiamo lasciato un pezzo di cuore e 2 nuovi amici! Akeel e Shan ci hanno trattato durante tutto il viaggio con un rispetto incredibile. Anche il nostro anniversario è caduto durante le vacanze e ci hanno organizzato una bellissima sorpresa! Tour perfettamente organizzato per vedere tutte le attrazioni principali dello Sri Lanka."
    },
    5: {
      comment: "Abbiamo trascorso la vacanza più bella con Akeel! Il programma era vario ed entusiasmante. Abbiamo imparato molto sulla cultura, il paese e le persone. Gli hotel erano ben selezionati e confortevoli. Akeel è una guida locale eccezionale, ha fornito consigli preziosi e conosceva i posti migliori. Guida sicura e massima flessibilità!"
    },
    6: {
      comment: "Ho avuto un'esperienza meravigliosa con Ceylon Heaven Tour. Tutto è stato organizzato benissimo, dalla pianificazione all'esecuzione. Il team è stato professionale, cordiale e sempre pronto ad aiutare. Il nostro itinerario è stato gestito perfettamente e abbiamo esplorato posti bellissimi in totale relax. Raccomando vivamente Ceylon Heaven Tour per un viaggio indimenticabile!"
    }
  },

  es: {
    1: {
      comment: "Tuve el placer absoluto de realizar un tour de seis días por la costa oeste y sur de Sri Lanka con Ceylon Heaven Tours en abril de 2025, guiado por el maravilloso Akeel. ¡Fue una experiencia inolvidable! De principio a fin, el viaje fue perfecto y muy enriquecedor. Akeel nos llevó por rutas auténticas descubriendo la verdadera cultura y gastronomía de Sri Lanka. Más que un guía, se convirtió en un amigo. ¡Altamente recomendado!"
    },
    2: {
      comment: "Nuestro primer viaje a Sri Lanka fue extraordinario gracias a Ceylon Heaven Tour. Todo estuvo organizado con la máxima profesionalidad y dedicación por Akeel. Tuvieron un cuidado súper especial con nuestros niños pequeños. Fueron 5 días inolvidables y recomendamos a todos ponerse en contacto con ellos."
    },
    3: {
      comment: "¡Increíble tour de 11 días y 10 noches en Sri Lanka con Akeel Jaazar y Ceylon Heaven Tours! Desde el momento en que llegamos, todo estuvo perfectamente planificado. Akeel fue fantástico, muy amable y conocedor de la historia y cultura. Disfrutamos de Sigiriya, safari en Yala, avistamiento de ballenas y mucho más. ⭐⭐⭐⭐⭐"
    },
    4: {
      comment: "¡¡Experiencia increíble!! Akeel y Shan nos trataron con un respeto maravilloso durante todo el viaje. Incluso coincidió nuestro aniversario y nos prepararon una gran sorpresa. El tour estuvo perfectamente organizado para ver lo mejor de Sri Lanka."
    },
    5: {
      comment: "¡Tuvimos las mejores vacaciones con Akeel! El programa fue variado y emocionante. Aprendimos mucho sobre la cultura y la gente. Su conducción fue muy segura y fue extremadamente flexible para adaptar el viaje a nuestros deseos."
    },
    6: {
      comment: "Tuve una experiencia maravillosa con Ceylon Heaven Tour. Todo estuvo muy bien organizado de principio a fin. El equipo fue muy profesional y atento. Los hoteles y el transporte fueron excelentes. Recomiendo totalmente Ceylon Heaven Tour."
    }
  },

  de: {
    1: {
      comment: "Ich hatte das absolute Vergnügen, im April 2025 eine 6-tägige Tour mit Ceylon Heaven Tours und unserem wundervollen Guide Akeel zu machen. Von Anfang bis Ende war die Reise perfekt organisiert! Akeel zeigte uns nicht nur die berühmten Sehenswürdigkeiten, sondern auch versteckte Juwelen Sri Lankas. Ein unvergesslicher Urlaub!"
    },
    2: {
      comment: "Unsere erste Reise nach Sri Lanka war dank der hochprofessionellen Organisation von Ceylon Heaven Tours ein voller Erfolg! Akeel und Shan haben sich rührend um unsere Familie und kleinen Kinder gekümmert. Wir haben die 5 Tage sehr genossen und können Ceylon Heaven Tours wärmstens empfehlen!"
    },
    3: {
      comment: "Phänomenale 11-Tage-Tour durch Sri Lanka mit Akeel Jaazar! Alles war von A bis Z perfekt durchdacht. Akeel ist ein fantastischer Guide mit tiefem Wissen über Land und Leute. Highlights waren Sigiriya, der Yala-Safari-Ausflug und das Walbeobachten in Mirissa."
    },
    4: {
      comment: "Großartige Erfahrung! Akeel und Shan haben uns wie Freunde behandelt. Zum Hochzeitstag gab es sogar eine wunderschöne Überraschung. Die Tour war perfekt organisiert, um alle Hauptattraktionen Sri Lankas stressfrei zu erleben."
    },
    5: {
      comment: "Wir hatten den schönsten Urlaub mit Akeel! Das Programm war abwechslungsreich und spannend. Akeel fuhr sehr sicher und war jederzeit flexibel bei Programmwünschen. Eine rundum perfekte Reise!"
    },
    6: {
      comment: "Wunderbare Erfahrung mit Ceylon Heaven Tour. Alles war bestens organisiert. Das Team war professionell, freundlich und hilfsbereit. Sehr zu empfehlen für jeden, der einen unvergesslichen Sri Lanka Urlaub sucht!"
    }
  },

  fr: {
    1: {
      comment: "J'ai eu le plaisir absolu de faire un circuit de six jours avec Ceylon Heaven Tours et le formidable Akeel en avril 2025 – une expérience inoubliable ! Du début à la fin, le voyage était fluide, passionnant et immersif. Akeel nous a fait découvrir la vraie culture et la cuisine locale du Sri Lanka. Un guide au top !"
    },
    2: {
      comment: "Notre premier voyage au Sri Lanka a été magnifiquement organisé par l'équipe de Ceylon Heaven Tours avec professionnalisme et dévouement. Akeel et Shan ont pris un soin tout particulier de nos jeunes enfants. 5 jours mémorables !"
    },
    3: {
      comment: "Circuit incroyable de 11 jours et 10 nuits au Sri Lanka avec Akeel Jaazar ! Organisation impeccable, guide chaleureux et passionné. Nous avons adoré Sigiriya, le safari à Yala et l'observation des baleines à Mirissa. 5 étoiles !"
    },
    4: {
      comment: "Expérience formidable ! Akeel et Shan nous ont traités avec un respect incroyable pendant tout le séjour. Ils ont même organisé une surprise pour notre anniversaire de mariage ! Un circuit parfait pour visiter le Sri Lanka."
    },
    5: {
      comment: "Nous avons passé les plus belles vacances avec Akeel ! Le programme était riche et varié. Les hôtels étaient bien choisis et Akeel est un guide passionné et très prudent au volant."
    },
    6: {
      comment: "Une expérience merveilleuse avec Ceylon Heaven Tour. Tout était très bien organisé de la planification à la réalisation. L'équipe était très professionnelle et attentionnée. Je recommande vivement !"
    }
  },

  ar: {
    1: {
      comment: "لقد حظيت بفرصة رائعة جداً برحلة مدتها 6 أيام في الساحل الغربي والجنوبي لسريلانكا مع شركة سيلان هيفن والمرشد الممتاز عقيل في أبريل 2025. كانت تجربة لا تُنسى من البداية إلى النهاية! أخذنا عقيل لرؤية المعالم الرئيسية بالإضافة إلى الأماكن السرية والأصيلة وتذوق الأطعمة المحلية اللذيذة. عقيل أكثر من مجرد مرشد، لقد أصبح صديقاً حقيقياً. ننصح بشدة بشركة سيلان هيفن!"
    },
    2: {
      comment: "رحلتنا الأولى إلى سريلانكا كانت فائقة الروعة بفضل التنظيم الاحترافي والاهتمام البالغ من شركة سيلان هيفن وعقيل وشان. اهتموا بأطفالنا الصغار بكل حب وأمان ورعاية. كانت 5 أيام ممتازة وننصح الجميع بالتواصل معهم لتنظيم رحلاتهم."
    },
    3: {
      comment: "جولة ساحرة وممتازة لمدة 11 يوماً و 10 ليالٍ في سريلانكا مع المرشد عقيل جازار وشركة سيلان هيفن! من لحظة وصولنا كان كل شيء مخططاً بدقة وبدون أي توتر. استمتعنا بصعود صخرة سيجيريا، وسفاري الفهود في يالا، ومراقبة الحيتان في ميريسا. تجربة 5 نجوم! ⭐⭐⭐⭐⭐"
    },
    4: {
      comment: "تجربة فائقة الروعة!! عاملنا عقيل وشان باحترام واهتمام راقٍ طوال الرحلة. حتى أن تاريخ ذكرى زواجنا صادف خلال الرحلة ورتبوا لنا مفاجأة جميلة جداً! الجولة كانت منظمة بأسلوب ممتاز لرؤية أجمل معالم سريلانكا."
    },
    5: {
      comment: "أقضينا أجمل عطلة على الإطلاق مع المرشد عقيل! البرنامج كان متنوعاً وممتعاً جداً. تعلمنا الكثير عن الثقافة والشعب، وكانت قيادته آمنة للغاية ومستعداً دائماً لتلبية كافة طلباتنا وتعديل البرنامج حسب رغبتنا."
    },
    6: {
      comment: "تجربة ممتازة للغاية مع شركة سيلان هيفن. كل شيء كان منظماً بأسلوب راقٍ من التخطيط إلى التنفيذ. الفريق محترف ولطيف ومستعد للمساعدة في أي وقت. الإقامة والتنقلات كانت مريحة جداً ونوصي بهم لرحلة لا تُنسى!"
    }
  }
};

// ----------------------------------------------------
// 2. DESTINATIONS TRANSLATIONS (All 6 Destinations)
// ----------------------------------------------------
const destinationTranslations = {
  it: {
    sigiriya: { name: 'Sigiriya e Dambulla', tagline: 'Fortezza sulla roccia sacra patrimonio UNESCO, templi nelle grotte e giardini reali antichi.', toursCount: '8 Pacchetti' },
    kandy: { name: 'Kandy e Nuwara Eliya', tagline: 'Capitale culturale dello Sri Lanka tra le montagne, sede del celebre Tempio del Dente e treni panoramici.', toursCount: '12 Pacchetti' },
    ella: { name: 'Ella e Ponte dei Nove Archi', tagline: 'Cittadina di montagna tra le nuvole con il famoso Ponte dei Nove Archi e piantagioni di tè.', toursCount: '10 Pacchetti' },
    yala: { name: 'Parco Nazionale di Yala e Udawalawe', tagline: 'Il parco safari più famoso dello Sri Lanka per l’avvistamento di leopardi e elefanti.', toursCount: '9 Pacchetti' },
    galle: { name: 'Forte di Galle e Costa Sud', tagline: 'Forte olandese del XVII secolo patrimonio UNESCO, bastioni in pietra e spiagge della costa sud.', toursCount: '15 Pacchetti' },
    bentota: { name: 'Spiagge di Bentota e Mirissa', tagline: 'Spiagge dorate incontaminate, sport acquatici, avvistamento di balene blu e resort di lusso.', toursCount: '14 Pacchetti' }
  },
  es: {
    sigiriya: { name: 'Sigiriya y Dambulla', tagline: 'Fortaleza en la roca sagrada patrimonio UNESCO, templos en cuevas y jardines reales.', toursCount: '8 Paquetes' },
    kandy: { name: 'Kandy y Nuwara Eliya', tagline: 'Capital cultural de Sri Lanka rodeada de colinas, sede del sagrado Templo del Diente y trenes panorámicos.', toursCount: '12 Paquetes' },
    ella: { name: 'Ella y Puente de Nueve Arcos', tagline: 'Pueblo de montaña entre nubes con el famoso Puente de Nueve Arcos y campos de té.', toursCount: '10 Paquetes' },
    yala: { name: 'Parque Nacional Yala y Udawalawe', tagline: 'El parque nacional más famoso de Sri Lanka para avistar leopardos salvajes y elefantes.', toursCount: '9 Paquetes' },
    galle: { name: 'Fuerte de Galle y Costa Sur', tagline: 'Fuerte holandés del siglo XVII patrimonio de la UNESCO, murallas de piedra y playas del sur.', toursCount: '15 Paquetes' },
    bentota: { name: 'Playas de Bentota y Mirissa', tagline: 'Playas doradas vírgenes, deportes acuáticos, avistamiento de ballenas azules y resorts de lujo.', toursCount: '14 Paquetes' }
  },
  de: {
    sigiriya: { name: 'Sigiriya & Dambulla', tagline: 'Heilige Felsenfestung UNESCO-Weltkulturerbe, Höhlentempel und antike königliche Gärten.', toursCount: '8 Angebote' },
    kandy: { name: 'Kandy & Nuwara Eliya', tagline: 'Kulturhauptstadt Sri Lankas in den Bergen, Heimat des heiligen Zahntempels und Panoramazüge.', toursCount: '12 Angebote' },
    ella: { name: 'Ella & Nine Arch Bridge', tagline: 'Bergdorf in den Wolken mit der berühmten Nine Arch Bridge und Teeplantagen.', toursCount: '10 Angebote' },
    yala: { name: 'Yala & Udawalawe Nationalpark', tagline: 'Sri Lankas berühmtester Safari-Park für die Beobachtung von Leoparden und Elefanten.', toursCount: '9 Angebote' },
    galle: { name: 'Fort Galle & Südküste', tagline: 'Historisches holländisches Fort aus dem 17. Jahrhundert (UNESCO) und Traumstrände.', toursCount: '15 Angebote' },
    bentota: { name: 'Strände von Bentota & Mirissa', tagline: 'Traumhafte goldene Sandstrände, Wassersport, Blauwal-Beobachtung und Luxus-Resorts.', toursCount: '14 Angebote' }
  },
  fr: {
    sigiriya: { name: 'Sigiriya & Dambulla', tagline: 'Forteresse rocheuse inscrite à l’UNESCO, temples grottes et jardins royaux antiques.', toursCount: '8 Offres' },
    kandy: { name: 'Kandy & Nuwara Eliya', tagline: 'Capitale culturelle du Sri Lanka entourée de collines, abritant le Temple de la Dent.', toursCount: '12 Offres' },
    ella: { name: 'Ella & Pont des Neuf Arches', tagline: 'Village de montagne niché dans les nuages avec le célèbre Pont des Neuf Arches.', toursCount: '10 Offres' },
    yala: { name: 'Parc National de Yala & Udawalawe', tagline: 'Le parc national le plus célèbre du Sri Lanka pour observer les léopards et éléphants.', toursCount: '9 Offres' },
    galle: { name: 'Fort de Galle et Côte Sud', tagline: 'Fort néerlandais du XVIIe siècle classé à l’UNESCO, remparts historiques et plages du sud.', toursCount: '15 Offres' },
    bentota: { name: 'Plages de Bentota et Mirissa', tagline: 'Plages de sable doré, sports nautiques, observation des baleines bleues et séjours de luxe.', toursCount: '14 Offres' }
  },
  ar: {
    sigiriya: { name: 'سيجيريا ودامبولا', tagline: 'قلعة الصخرة الملكية المدرجة ضمن اليونسكو، ومعابد الكهف الذهبية والحدائق الملكية.', toursCount: '8 باقات' },
    kandy: { name: 'كاندي ونوراليا', tagline: 'العاصمة الثقافية وسط الجبال الخضراء، وموطن معبد السن المقدس ورحلات القطار الجبلي.', toursCount: '12 باقة' },
    ella: { name: 'إيلا وجسر الأقواس التسعة', tagline: 'بلدة جبلية ساحرة بين السحاب تضم جسر الأقواس التسعة ومزارع الشاي الخضراء.', toursCount: '10 باقات' },
    yala: { name: 'محمية يالا وأوداوالاوي', tagline: 'أشهر محمية طبيعية في سريلانكا لرؤية الفهود المفترسة قطيع الفيلة والطيور النادرة.', toursCount: '9 باقات' },
    galle: { name: 'قلعة جالي والساحل الجنوبي', tagline: 'قلعة هولندية تاريخية من القرن 17 مدرجة ضمن اليونسكو مع شواطئ ميريسا وجالي الساحرة.', toursCount: '15 باقة' },
    bentota: { name: 'شواطئ بنتوتا وميريسا', tagline: 'شواطئ ذهبية ساحرة، رياضات مائية، مشاهدة الحيتان الزرقاء، ومنتجعات فاخرة مطلة على المحيط.', toursCount: '14 باقة' }
  }
};

// ----------------------------------------------------
// 3. PACKAGES TRANSLATIONS (All 14 Packages in 5 Languages)
// ----------------------------------------------------
const packageTranslations = {
  it: {
    'cultural-heritage-4d3n': {
      title: 'Fuga nel Patrimonio Culturale di 4 Giorni e 3 Notti',
      duration: '4 Giorni / 3 Notti',
      packageType: 'Cultura e Patrimonio',
      difficulty: 'Facile',
      bestTime: 'Tutto l’anno',
      travelers: '2-12 Viaggiatori',
      overview: 'Questa Fuga nel Patrimonio Culturale di 4 Giorni e 3 Notti è il tour breve perfetto per sperimentare i luoghi più sacri e storici dello Sri Lanka: Kandy, Sigiriya, Dambulla e Anuradhapura.',
      itinerary: [
        { day: 'Giorno 1', title: 'Arrivo ed Esplorazione di Kandy', detail: 'Arrivo in Sri Lanka e trasferimento a Kandy. Visita il Tempio del Dente Sacro, passeggia lungo il Lago di Kandy, visita i Giardini Botanici Reali e goditi uno spettacolo di danze tradizionali.' },
        { day: 'Giorno 2', title: 'Da Kandy a Sigiriya e Dambulla', detail: 'Viaggio a Sigiriya per scalare la Fortezza sulla Roccia patrimonio UNESCO. Dopo pranzo, visita il Tempio della Grotta di Dambulla.' },
        { day: 'Giorno 3', title: 'Città Sacra di Anuradhapura', detail: 'Esplora l’antica città sacra di Anuradhapura compreso l’albero Sri Maha Bodhi e gli antichi stupa stupendi.' },
        { day: 'Giorno 4', title: 'Trasferimento in Aeroporto (Partenza)', detail: 'Prima colazione e trasferimento in aeroporto per il volo di ritorno.' }
      ]
    },
    'grand-escape-5d4n': {
      title: 'Grande Fuga di 5 Giorni e 4 Notti',
      duration: '5 Giorni / 4 Notti',
      packageType: 'Avventura e Natura',
      difficulty: 'Facile / Moderato',
      bestTime: 'Tutto l’anno',
      travelers: '2-10 Viaggiatori',
      overview: 'La Grande Fuga di 5 Giorni unisce antiche fortezze, safari tradizionali nei villaggi, il famoso viaggio in treno tra i monti del tè e safari di leopardi a Yala.'
    },
    'mini-discovery-3d2n': {
      title: 'Mini Scoperta di 3 Giorni e 2 Notti',
      duration: '3 Giorni / 2 Notti',
      packageType: 'Relax e Breve Sosta',
      difficulty: 'Facile',
      bestTime: 'Tutto l’anno',
      travelers: '1-8 Viaggiatori',
      overview: 'Una breve vacanza di 3 giorni pensata per chi desidera ammirare il bagno degli elefanti, la cultura del tè e i paesaggi di Kandy.'
    },
    'ramayana-tour-8d7n': {
      title: 'Pacchetto Tour Ramayana di 8 Giorni e 7 Notti',
      duration: '8 Giorni / 7 Notti',
      packageType: 'Cultura e Pellegrinaggio',
      overview: 'Scopri i luoghi sacri dell’epopea del Ramayana in Sri Lanka legati a Rama, Sita e Hanuman.'
    },
    'ramayana-tour-11d10n': {
      title: 'Tour Ramayana Completo di 11 Giorni e 10 Notti',
      duration: '11 Giorni / 10 Notti',
      packageType: 'Pellegrinaggio Storico',
      overview: 'Un viaggio spirituale approfondito attraverso i siti sacri del Ramayana a Chilaw, Jaffna, Trincomalee, Kandy e Nuwara Eliya.'
    },
    'decade-adventure-10d9n': {
      title: 'Tour Avventura del Decennio 10 Giorni e 9 Notti',
      duration: '10 Giorni / 9 Notti',
      packageType: 'Avventura e Cultura',
      overview: 'Vivi 10 giorni indimenticabili tra antichi regni, monti del tè, safari naturalistici e spiagge tropicali.'
    },
    'eastern-coast-exploration-11d10n': {
      title: 'Esplorazione della Costa Orientale 11 Giorni e 10 Notti',
      duration: '11 Giorni / 10 Notti',
      packageType: 'Spiaggia e Cultura',
      overview: 'Combina il patrimonio culturale con le spiagge bianche di Pasikuda e Trincomalee in un unico pacchetto.'
    },
    'fortnight-expedition-14d13n': {
      title: 'Spedizione di Due Settimane 14 Giorni e 13 Notti',
      duration: '14 Giorni / 13 Notti',
      packageType: 'Lusso e Gran Tour',
      overview: 'L’esperienza completa dello Sri Lanka: cultura, safari, treno panoramico, avvistamento balene e spiagge.'
    },
    'seaside-serenity-10d': {
      title: 'Tour Spiagge e Serenità Marina 10 Giorni',
      duration: '10 Giorni / 9 Notti',
      packageType: 'Spiaggia e Relax',
      overview: 'Un perfetto equilibrio tra cultura a Kandy, treno per Ella, safari a Yala e relax sulle spiagge di Tangalle e Weligama.'
    },
    'week-long-adventure-8d7n': {
      title: 'Avventura di una Settimana 8 Giorni e 7 Notti',
      duration: '8 Giorni / 7 Notti',
      packageType: 'Avventura e Natura',
      overview: 'Una settimana intensa tra Sigiriya, treno per Ella, safari leopardi a Yala e spiagge di Mirissa.'
    },
    'week-of-wanderlust-7d6n': {
      title: 'Settimana di Meraviglia 7 Giorni e 6 Notti',
      duration: '7 Giorni / 6 Notti',
      packageType: 'Lusso e Natura',
      overview: 'Un’esperienza di 7 giorni tra le colline del tè, safari selvaggi e mare cristallino.'
    },
    'colombo-kandy-bentota-day-tours': {
      title: 'Tour Giornaliero Colombo, Kandy e Bentota',
      duration: 'Escursione di 1 Giorno',
      packageType: 'Tour Giornaliero',
      overview: 'Escursione giornaliera ideale per scoprire le attrazioni principali di Kandy e Bentota partendo da Colombo.'
    },
    'galle-day-tour-itinerary': {
      title: 'Tour Giornaliero del Forte di Galle e Costa',
      duration: 'Escursione di 1 Giorno',
      packageType: 'Cultura e Mare',
      overview: 'Esplora il Forte storico di Galle patrimonio UNESCO, safari in barca sul fiume Madu e santuario delle tartarughe.'
    },
    'sigiriya-dambulla-day-tour': {
      title: 'Tour Giornaliero di Sigiriya e Dambulla',
      duration: 'Escursione di 1 Giorno',
      packageType: 'Patrimonio Storico',
      overview: 'Visita in una sola giornata la Fortezza sulla Roccia di Sigiriya e il Tempio della Grotta d’Oro a Dambulla.'
    }
  },

  es: {
    'cultural-heritage-4d3n': {
      title: 'Escapada al Patrimonio Cultural de 4 Días y 3 Noches',
      duration: '4 Días / 3 Noches',
      packageType: 'Cultura y Patrimonio',
      difficulty: 'Fácil',
      bestTime: 'Todo el año',
      travelers: '2-12 Viajeros',
      overview: 'Esta escapada de 4 días y 3 noches es el recorrido perfecto para experimentar los lugares más sagrados e históricos de Sri Lanka: Kandy, Sigiriya, Dambulla y Anuradhapura.'
    },
    'grand-escape-5d4n': {
      title: 'Gran Escapada de 5 Días y 4 Noches',
      duration: '5 Días / 4 Noches',
      packageType: 'Aventura y Naturaleza',
      overview: 'Combina fortalezas de roca, safaris en aldeas, el famoso tren de montaña y safaris de leopardos en Yala.'
    },
    'mini-discovery-3d2n': {
      title: 'Mini Descubrimiento de 3 Días y 2 Noches',
      duration: '3 Días / 2 Noches',
      packageType: 'Descanso Corto',
      overview: 'Una breve escapada de 3 días ideal para ver elefantes bañándose en el río, plantaciones de té y Kandy.'
    },
    'ramayana-tour-8d7n': {
      title: 'Paquete Turístico Ramayana de 8 Días y 7 Noches',
      duration: '8 Días / 7 Noches',
      packageType: 'Cultura y Peregrinación',
      overview: 'Recorre la ruta mística del Ramayana en Sri Lanka visitando templos sagrados vinculados a Rama, Sita y Hanuman.'
    },
    'ramayana-tour-11d10n': {
      title: 'Tour Ramayana Completo de 11 Días y 10 Noches',
      duration: '11 Días / 10 Noches',
      packageType: 'Peregrinación Histórica',
      overview: 'Viaje espiritual profundo visitando sitios sagrados en Chilaw, Jaffna, Trincomalee, Kandy y Nuwara Eliya.'
    },
    'decade-adventure-10d9n': {
      title: 'Aventura de una Década 10 Días y 9 Noches',
      duration: '10 Días / 9 Noches',
      packageType: 'Aventura y Cultura',
      overview: 'Disfruta de 10 días inolvidables explorando ruinas antiguas, plantaciones de té, safari y playas vírgenes.'
    },
    'eastern-coast-exploration-11d10n': {
      title: 'Exploración de la Costa Este 11 Días y 10 Noches',
      duration: '11 Días / 10 Noches',
      packageType: 'Playa y Cultura',
      overview: 'Combina patrimonio histórico con las paradisíacas playas de Pasikuda y Trincomalee.'
    },
    'fortnight-expedition-14d13n': {
      title: 'Expedición de Quincena 14 Días y 13 Noches',
      duration: '14 Días / 13 Noches',
      packageType: 'Gran Tour de Lujo',
      overview: 'La experiencia completa en Sri Lanka: templos, elefantes, tren escénico a Ella, safari en Yala y playas doradas.'
    },
    'seaside-serenity-10d': {
      title: 'Tour Serenidad Marina 10 Días',
      duration: '10 Días / 9 Noches',
      packageType: 'Playa y Descanso',
      overview: 'El equilibrio perfecto entre cultura en Kandy, tren panorámico a Ella, safari y playas de Tangalle y Weligama.'
    },
    'week-long-adventure-8d7n': {
      title: 'Aventura de una Semana 8 Días y 7 Noches',
      duration: '8 Días / 7 Noches',
      packageType: 'Aventura y Naturaleza',
      overview: 'Una semana increíble con la Roca de Sigiriya, tren panorámico, safari de leopardos y avistamiento de ballenas.'
    },
    'week-of-wanderlust-7d6n': {
      title: 'Semana de Pasión por Viajar 7 Días y 6 Noches',
      duration: '7 Días / 6 Noches',
      packageType: 'Lujo y Naturaleza',
      overview: 'Circuito de 7 días entre colinas verdes de té, safari salvaje en Yala y descanso frente al océano.'
    },
    'colombo-kandy-bentota-day-tours': {
      title: 'Excursión de un Día: Colombo, Kandy y Bentota',
      duration: 'Excursión de 1 Día',
      packageType: 'Tour de un Día',
      overview: 'La mejor opción de un día para visitar el Templo del Diente y las playas de Bentota saliendo desde Colombo.'
    },
    'galle-day-tour-itinerary': {
      title: 'Excursión de un Día al Fuerte de Galle',
      duration: 'Excursión de 1 Día',
      packageType: 'Cultura y Costa',
      overview: 'Descubre el histórico Fuerte de Galle, paseo en barco por el río Madu y criadero de tortugas marinas.'
    },
    'sigiriya-dambulla-day-tour': {
      title: 'Excursión de un Día a Sigiriya y Dambulla',
      duration: 'Excursión de 1 Día',
      packageType: 'Patrimonio Histórico',
      overview: 'Visita en un solo día la Fortaleza de Roca de Sigiriya y el Templo Dorado en las Cuevas de Dambulla.'
    }
  },

  de: {
    'cultural-heritage-4d3n': {
      title: '4 Tage – 3 Nächte Kulturerbe-Kurztrip',
      duration: '4 Tage / 3 Nächte',
      packageType: 'Kultur & Erbe',
      overview: 'Eine perfekte 4-tägige Kurzreise zu den heiligsten Kulturstätten Sri Lankas: Kandy, Sigiriya, Dambulla und Anuradhapura.'
    },
    'grand-escape-5d4n': {
      title: '5 Tage – 4 Nächte Grand Escape',
      duration: '5 Tage / 4 Nächte',
      packageType: 'Abenteuer & Natur',
      overview: 'Verbindet antike Felsenfestungen, Dorf-Safaris, die berühmte Panoramazugfahrt nach Ella und Yala-Leoparden-Safaris.'
    },
    'mini-discovery-3d2n': {
      title: '3 Tage – 2 Nächte Mini Discovery',
      duration: '3 Tage / 2 Nächte',
      packageType: 'Kurzurlaub & Erholung',
      overview: 'Ein 3-Tages-Trip für Reisende mit wenig Zeit, die Elefanten im Fluss, Tee-Kultur und Kandy erleben möchten.'
    },
    'ramayana-tour-8d7n': {
      title: '8 Tage - 7 Nächte Ramayana Tour Paket',
      duration: '8 Tage / 7 Nächte',
      packageType: 'Kultur & Pilgerreise',
      overview: 'Verfolgen Sie die Spuren des Ramayana Epos in Sri Lanka mit Heiligtümern von Rama, Sita und Hanuman.'
    },
    'ramayana-tour-11d10n': {
      title: '11 Tage - 10 Nächte Grosse Ramayana Tour',
      duration: '11 Tage / 10 Nächte',
      packageType: 'Historische Pilgerreise',
      overview: 'Tiefgehende spirituelle Reise zu den wichtigsten Ramayana-Stätten in Chilaw, Jaffna, Trincomalee und Kandy.'
    },
    'decade-adventure-10d9n': {
      title: '10 Tage – 9 Nächte Jahrzehnt-Abenteuer',
      duration: '10 Tage / 9 Nächte',
      packageType: 'Abenteuer & Kultur',
      overview: 'Erleben Sie 10 unvergessliche Tage mit antiken Festungen, Teegärten, Yala-Safari und Traumstränden.'
    },
    'eastern-coast-exploration-11d10n': {
      title: '11 Tage Ostküsten-Erkundung',
      duration: '11 Tage / 10 Nächte',
      packageType: 'Strand & Kultur',
      overview: 'Kombiniert das faszinierende Kulturerbe Sri Lankas mit den schneeweißen Stränden von Pasikuda und Trincomalee.'
    },
    'fortnight-expedition-14d13n': {
      title: '14 Tage – 13 Nächte Zwei-Wochen-Expedition',
      duration: '14 Tage / 13 Nächte',
      packageType: 'Luxus-Rundreise',
      overview: 'Das komplette Sri Lanka Erlebnis: Kultur, Elefanten, Panoramazug nach Ella, Yala-Safari und Traumstrände.'
    },
    'seaside-serenity-10d': {
      title: '10 Tage Meeresstille & Strand-Tour',
      duration: '10 Tage / 9 Nächte',
      packageType: 'Strand & Erholung',
      overview: 'Die perfekte Mischung aus Kultur in Kandy, Zugfahrt nach Ella, Safari und Entspannung in Tangalle und Weligama.'
    },
    'week-long-adventure-8d7n': {
      title: '8 Tage – 7 Nächte Wochen-Abenteuer',
      duration: '8 Tage / 7 Nächte',
      packageType: 'Abenteuer & Natur',
      overview: 'Eine abwechslungsreiche Woche mit Sigiriya-Felsen, Zugfahrt nach Ella, Leoparden-Safari und Walbeobachtung.'
    },
    'week-of-wanderlust-7d6n': {
      title: '7 Tage – 6 Nächte Fernweh-Woche',
      duration: '7 Tage / 6 Nächte',
      packageType: 'Luxus & Natur',
      overview: 'Eine Rundreise zu den schönsten Highlights Sri Lankas von den Teebergen bis zur Südküste.'
    },
    'colombo-kandy-bentota-day-tours': {
      title: 'Tagesausflug: Colombo, Kandy & Bentota',
      duration: '1-Tages-Ausflug',
      packageType: 'Tages-Tour',
      overview: 'Der ideale Tagesausflug von Colombo zum heiligen Zahntempel in Kandy und an die Strände von Bentota.'
    },
    'galle-day-tour-itinerary': {
      title: 'Tagesausflug Fort Galle & Südküste',
      duration: '1-Tages-Ausflug',
      packageType: 'Kultur & Küste',
      overview: 'Erkunden Sie das historische UNESCO Fort Galle, eine Mangroven-Bootssafari auf dem Madu-Fluss und Schildkröten.'
    },
    'sigiriya-dambulla-day-tour': {
      title: 'Tagesausflug Sigiriya & Dambulla',
      duration: '1-Tages-Ausflug',
      packageType: 'Kulturerbe',
      overview: 'Besuchen Sie an einem einzigen Tag die berühmte Felsenfestung Sigiriya und den goldenen Höhlentempel von Dambulla.'
    }
  },

  fr: {
    'cultural-heritage-4d3n': {
      title: 'Évasion Patrimoine Culturel de 4 Jours et 3 Nuits',
      duration: '4 Jours / 3 Nuits',
      packageType: 'Culture et Patrimoine',
      overview: 'Un court séjour parfait de 4 jours pour découvrir les lieux les plus sacrés du Sri Lanka : Kandy, Sigiriya, Dambulla et Anuradhapura.'
    },
    'grand-escape-5d4n': {
      title: 'Grand Évasion de 5 Jours et 4 Nuits',
      duration: '5 Jours / 4 Nuits',
      packageType: 'Aventure et Nature',
      overview: 'Combine forteresses rocheuses, safaris dans les villages, train panoramique dans les montagnes de thé et safari léopards à Yala.'
    },
    'mini-discovery-3d2n': {
      title: 'Mini Découverte de 3 Jours et 2 Nuits',
      duration: '3 Jours / 2 Nuits',
      packageType: 'Court Séjour & Détente',
      overview: 'Une escapade express de 3 jours conçue pour observer les éléphants dans la rivière, déguster le thé et découvrir Kandy.'
    },
    'ramayana-tour-8d7n': {
      title: 'Circuit Ramayana de 8 Jours et 7 Nuits',
      duration: '8 Jours / 7 Nuits',
      packageType: 'Culture et Pèlerinage',
      overview: 'Pèlerinage sacré sur les traces du Ramayana au Sri Lanka à la découverte des sites sacrés de Rama, Sita et Hanuman.'
    },
    'ramayana-tour-11d10n': {
      title: 'Grand Circuit Ramayana de 11 Jours et 10 Nuits',
      duration: '11 Jours / 10 Nuits',
      packageType: 'Pèlerinage Historique',
      overview: 'Un voyage spirituel complet reliant Chilaw, Jaffna, Trincomalee, Kandy, Nuwara Eliya et Colombo.'
    },
    'decade-adventure-10d9n': {
      title: 'Aventure d’une Décennie 10 Jours et 9 Nuits',
      duration: '10 Jours / 9 Nuits',
      packageType: 'Aventure et Culture',
      overview: 'Profitez de 10 jours inoubliables entre cités antiques, plantations de thé, safari et plages de rêve.'
    },
    'eastern-coast-exploration-11d10n': {
      title: 'Exploration de la Côte Est 11 Jours et 10 Nuits',
      duration: '11 Jours / 10 Nuits',
      packageType: 'Plage et Culture',
      overview: 'Combinez le patrimoine culturel avec les superbes plages de sable blanc de Pasikuda et Trincomalee.'
    },
    'fortnight-expedition-14d13n': {
      title: 'Expédition de Deux Semaines 14 Jours et 13 Nuits',
      duration: '14 Jours / 13 Nuits',
      packageType: 'Grand Tour de Luxe',
      overview: 'L’expérience complète du Sri Lanka : cités royales, train légendaire vers Ella, safari à Yala et détente balnéaire.'
    },
    'seaside-serenity-10d': {
      title: 'Sérénité Balnéaire 10 Jours',
      duration: '10 Jours / 9 Notti',
      packageType: 'Plage et Détente',
      overview: 'Un équilibre parfait entre culture à Kandy, train panoramique vers Ella, safari et plages de Tangalle et Weligama.'
    },
    'week-long-adventure-8d7n': {
      title: 'Aventure d’une Semaine 8 Jours et 7 Nuits',
      duration: '8 Jours / 7 Nuits',
      packageType: 'Aventure et Nature',
      overview: 'Une semaine riche en émotions : rocher de Sigiriya, train pittoresque, safari léopards et baleines bleues.'
    },
    'week-of-wanderlust-7d6n': {
      title: 'Semaine Évasion et Merveilles 7 Jours',
      duration: '7 Jours / 6 Nuits',
      packageType: 'Luxe et Nature',
      overview: 'Circuit de 7 jours à travers les collines de thé, le parc national de Yala et la côte sud tropicale.'
    },
    'colombo-kandy-bentota-day-tours': {
      title: 'Excursion d’un Jour : Colombo, Kandy et Bentota',
      duration: 'Excursion d’un Jour',
      packageType: 'Circuit d’un Jour',
      overview: 'Découvrez le Temple de la Dent à Kandy et les plages de Bentota au départ de Colombo en une journée.'
    },
    'galle-day-tour-itinerary': {
      title: 'Excursion d’un Jour au Fort de Galle',
      duration: 'Excursion d’un Jour',
      packageType: 'Culture et Littoral',
      overview: 'Visite guidée du Fort historique de Galle (UNESCO), safari en bateau sur la rivière Madu et tortues marines.'
    },
    'sigiriya-dambulla-day-tour': {
      title: 'Excursion d’un Jour à Sigiriya et Dambulla',
      duration: 'Excursion d’un Jour',
      packageType: 'Patrimoine Culturel',
      overview: 'Visitez en une seule journée le Rocher du Lion à Sigiriya et les temples grottes d’Or à Dambulla.'
    }
  },

  ar: {
    'cultural-heritage-4d3n': {
      title: 'رحلة التراث الثقافي 4 أيام – 3 ليالٍ',
      duration: '4 أيام / 3 ليالٍ',
      packageType: 'الثقافة والتراث',
      difficulty: 'سهل',
      bestTime: 'على مدار السنة',
      travelers: '2-12 مسافرين',
      overview: 'تعتبر هذه الجولة القصيرة لمدة 4 أيام و 3 ليالٍ خياراً مثالياً للمسافرين الراغبين في زيارة أكثر الوجهات قدسية وتاريخاً في سريلانكا: كاندي، سيجيريا، دامبولا وأنورادهابورا.',
      itinerary: [
        { day: 'اليوم 1', title: 'الوصول واستكشاف كاندي', detail: 'الوصول إلى سريلانكا والانتقال إلى كاندي. زيارة معبد السن المقدس، والتجول حول بحيرة كاندي، وزيارة الحدائق الملكية، وحضور عرض الرقص الثقافي.' },
        { day: 'اليوم 2', title: 'من كاندي إلى سيجيريا ودامبولا', detail: 'السفر إلى سيجيريا وصعود قلعة صخرة سيجيريا المدرجة ضمن اليونسكو. بعد الغداء، زيارة معبد كهف دامبولا والمبيت في سيجيريا.' },
        { day: 'اليوم 3', title: 'جولة المدينة المقدسة أنورادهابورا', detail: 'استكشاف مدينة أنورادهابورا القديمة المقدسة وشجرة شري ماها بودي الشهيرة والمعابد التاريخية.' },
        { day: 'اليوم 4', title: 'الانتقال إلى المطار (المغادرة)', detail: 'تناول الإفطار ثم الانتقال إلى المطار للمغادرة وختام الجولة الثقافية.' }
      ],
      included: ['الاستقبال والتوديع في المطار', 'وسيلة نقل خاصة ومكيفة مع سائق ومرشد', 'تأمين السفر', 'مرشد وسائق محترف ينطق بالإنجليزية', 'جميع التوصيلات والجولات المذكورة'],
      notIncluded: ['تذاكر الطيران الدولي', 'رسوم التأشيرة لسريلانكا', 'تذاكر دخول المعالم', 'الغداء والعشاء'],
      highlights: ['استقبال حار في المطار وتوصيل خاص إلى كاندي', 'زيارة معبد السن المقدس (شري دالادا مالغوا)', 'صعود قلعة صخرة سيجيريا الساحرة (موقع يونسكو)', 'زيارة معبد كهف دامبولا ومدينة أنورادهابورا المقدسة'],
      importantInfo: ['إمكانية التعديل والتخصيص حسب الطلب', 'خيارات دفع مرنة', 'دعم فوري على مدار 24/7', 'إلغاء مجاني حتى 10 أيام']
    },
    'grand-escape-5d4n': {
      title: 'الهروب الكبير 5 أيام – 4 ليالٍ',
      duration: '5 أيام / 4 ليالٍ',
      packageType: 'المغامرة والطبيعة',
      difficulty: 'سهل / متوسط',
      bestTime: 'على مدار السنة',
      travelers: '2-10 مسافرين',
      overview: 'تجمع هذه الجولة بين القلاع الصخرية القديمة، ورحلات السفاري القروية، ورحلة القطار الشهيرة عبر مزارع الشاي، وسفاري الفهود في محمية يالا.',
      itinerary: [
        { day: 'اليوم 1', title: 'صخرة سيجيريا وسفاري القرية', detail: 'الاستقبال في المطار والتوجّه إلى سيجيريا. صعود القلعة وركوب عربات الثوار وتناول وجبة غداء قروية تقليدية.' },
        { day: 'اليوم 2', title: 'حديقة التوابل وكاندي', detail: 'زيارة حديقة التوابل في ماتالي وتذوق الشاي، ثم زيارة معبد السن المقدس في كاندي.' },
        { day: 'اليوم 3', title: 'رحلة القطار الجبلي الساحر إلى إيلا', detail: 'ركوب القطار الأزرق الشهير عبر جبال الشاي والعبور فوق جسر الأقواس التسعة.' },
        { day: 'اليوم 4', title: 'سفاري الفهود في يالا والشاطئ', detail: 'سفاري جيب 4x4 في محمية يالا الوطنية لرؤية الفهود والفيلة، ثم الانتقال إلى شاطئ ميريسا.' },
        { day: 'اليوم 5', title: 'قلعة جالي الهولندية والمغادرة', detail: 'استكشاف قلعة جالي التاريخية المطلة على المحيط ثم التوجّه للمطار.' }
      ],
      included: ['سيارة خاصة مكيفة مع سائق ومرشد', 'الإفطار والعشاء اليومي في الفنادق', 'تذاكر القطار الجبلي إلى إيلا', 'تصاريح وسفاري جيب 4x4 في محمية يالا'],
      notIncluded: ['الطيران الدولي', 'رسوم التأشيرة', 'المصاريف الشخصية'],
      highlights: ['صعود قلعة صخرة سيجيريا', 'رحلة القطار الساحرة من كاندي إلى إيلا', 'عبور جسر الأقواس التسعة', 'سفاري 4x4 لرؤية الفهود في يالا'],
      importantInfo: ['دعم 24/7', 'إلغاء مجاني حتى 10 أيام']
    },
    'mini-discovery-3d2n': {
      title: 'اكتشاف مصغر 3 أيام – 2 ليالٍ',
      duration: '3 أيام / 2 ليالٍ',
      packageType: 'عطلة قصيرة واسترخاء',
      difficulty: 'سهل',
      bestTime: 'على مدار السنة',
      travelers: '1-8 مسافرين',
      overview: 'عطلة قصيرة لمدة 3 أيام مصممة للمسافرين ذوي الوقت المحدود للاستمتاع برعاية الفيلة في النهر ومزارع الشاي ومعالم كاندي.',
      itinerary: [
        { day: 'اليوم 1', title: 'محمية الفيلة في بيناوالا وكاندي', detail: 'مشاهدة استحمام الفيلة في النهر وزيارة معبد السن المقدس في كاندي.' },
        { day: 'اليوم 2', title: 'الحدائق الملكية ومصنع الشاي', detail: 'التجول في حدائق بيرادينيا وتذوق الشاي السريلانكي الطازج.' },
        { day: 'اليوم 3', title: 'سوق نيجومبو للأسماك والتوصيل للمطار', detail: 'جولة قصيرة في نيجومبو ثم التوصيل للمطار للمغادرة.' }
      ],
      included: ['سيارة خاصة مكيفة', 'الإفطار اليومي', 'تذاكر المحمية والحدائق'],
      notIncluded: ['الطيران الدولي', 'الغداء والعشاء'],
      highlights: ['مشاهدة استحمام الفيلة', 'زيارة معبد السن', 'تذوق الشاي الفاخر'],
      importantInfo: ['دعم 24/7', 'إلغاء مجاني']
    },
    'ramayana-tour-8d7n': {
      title: 'برنامج جولة رامايانا 8 أيام - 7 ليالٍ',
      duration: '8 أيام / 7 ليالٍ',
      packageType: 'الثقافة والحج الروحي',
      difficulty: 'متوسط',
      bestTime: 'من ديسمبر إلى أبريل',
      travelers: '2-12 مسافرين',
      overview: 'استكشف أرض لانكا المقدسة في هذه الرحلة الروحية لمدة 8 أيام لزيارة المعالم التاريخية والدينية الشهيرة.',
      itinerary: [
        { day: 'اليوم 1', title: 'الوصول وزيارة المعابد التاريخية', detail: 'الاستقبال في المطار وزيارة معابد شيفا التاريخية ثم التوجّه إلى أنورادهابورا.' },
        { day: 'اليوم 2', title: 'أنورادهابورا إلى ترينكومالي', detail: 'زيارة المعابد الكبرى في أنورادهابورا والمعبد البحري في ترينكومالي.' },
        { day: 'اليوم 3', title: 'ترينكومالي إلى كاندي', detail: 'زيارة معبد كهف دامبولا وحديقة التوابل ومعبد السن في كاندي.' },
        { day: 'اليوم 4', title: 'كاندي ورعاية الفيلة', detail: 'حديقة بيرادينيا الملكية ومحمية بيناوالا للفيلة وعرض الرقص الثقافي.' },
        { day: 'اليوم 5', title: 'كاندي إلى نوراليا', detail: 'زيارة معبد هانومان وشلالات رامبودا ومزارع الشاي في نوراليا.' },
        { day: 'اليوم 6', title: 'نوراليا إلى كاتاراجاما', detail: 'معبد سيثا أمان وشلالات رافانا ثم الانتقال إلى كاتاراجاما.' },
        { day: 'اليوم 7', title: 'كاتاراجاما إلى كولومبو', detail: 'زيارة قلعة جالي وجبل روماسالا التاريخي والتوجّه إلى كولومبو.' },
        { day: 'اليوم 8', title: 'كولومبو والمغادرة', detail: 'جولة تسوق في كولومبو والتوصيل للمطار للمغادرة.' }
      ],
      included: ['إقامة 7 ليالٍ في الفنادق', 'سيارة خاصة مع مرشد', 'وجبتي الإفطار والعشاء'],
      notIncluded: ['الطيران الدولي', 'رسوم التأشيرة'],
      highlights: ['معالم رامايانا المقدسة', 'مزارع الشاي والشلالات', 'عروض الرقص الثقافي'],
      importantInfo: ['دعم 24/7']
    },
    'ramayana-tour-11d10n': {
      title: 'جولة رامايانا الشاملة 11 يوماً – 10 ليالٍ',
      duration: '11 يوماً / 10 ليالٍ',
      packageType: 'جولة تاريخية شاملة',
      difficulty: 'متوسط',
      bestTime: 'من نوفمبر إلى أبريل',
      travelers: '2-12 مسافرين',
      overview: 'انطلق في رحلة إيمانية واستكشافية ساحرة عبر أهم المعالم التاريخية والثقافية والطبيعية في سريلانكا من تشيلاو وجافنا إلى ترينكومالي، كاندي، نوراليا، وكولومبو.'
    },
    'decade-adventure-10d9n': {
      title: 'جولة مغامرة العقد 10 أيام – 9 ليالٍ',
      duration: '10 أيام / 9 ليالٍ',
      packageType: 'المغامرة والثقافة',
      difficulty: 'متوسط',
      bestTime: 'على مدار السنة',
      travelers: '2-12 مسافرين',
      overview: 'عش 10 أيام لا تُنسى في استكشاف الممالك القديمة، ومزارع الشاي الضبابية، وسفاري البرية في يالا، والشواطئ الاستوائية الذهبية.'
    },
    'eastern-coast-exploration-11d10n': {
      title: 'استكشاف الساحل الشرقي 11 يوماً – 10 ليالٍ',
      duration: '11 يوماً / 10 ليالٍ',
      packageType: 'الشواطئ والثقافة',
      difficulty: 'سهل',
      bestTime: 'من مايو إلى سبتمبر',
      travelers: '2-12 مسافرين',
      overview: 'اجمع بين التراث الثقافي العريق وشواطئ باسكودا وترينكومالي البيضاء الساحرة في برنامج واحد متكامل لمدة 11 يوماً.'
    },
    'fortnight-expedition-14d13n': {
      title: 'رحلة الأسبوعين الشاملة 14 يوماً – 13 ليلة',
      duration: '14 يوماً / 13 ليلة',
      packageType: 'الفخامة والجولة الكبرى',
      difficulty: 'سهل',
      bestTime: 'من نوفمبر إلى أبريل',
      travelers: '2-12 مسافرين',
      overview: 'التجربة الكاملة والأشمل لسريلانكا: المدن التاريخية، قطار الشاي الجبلي، سفاري يالا، مشاهدة الحيتان، والاسترخاء على شواطئ بنتوتا.'
    },
    'seaside-serenity-10d': {
      title: 'جولة الهدوء والشواطئ البحرية 10 أيام',
      duration: '10 أيام / 9 ليالٍ',
      packageType: 'الشواطئ والاسترخاء',
      difficulty: 'سهل',
      bestTime: 'على مدار السنة',
      travelers: '2-12 مسافرين',
      overview: 'المزيج المثالي بين الثقافة في كاندي، والقطار الجبلي إلى إيلا، وسفاري المحميات، مع أيام استرخاء كاملة على شواطئ تانجالي وويليجاما.'
    },
    'week-long-adventure-8d7n': {
      title: 'مغامرة الأسبوع الكامل 8 أيام – 7 ليالٍ',
      duration: '8 أيام / 7 ليالٍ',
      packageType: 'المغامرة والطبيعة',
      difficulty: 'سهل إلى متوسط',
      bestTime: 'على مدار السنة',
      travelers: '2-12 مسافرين',
      overview: 'أسبوع حافل بالمغامرة والجمال: صعود صخرة سيجيريا، القطار البانورامي إلى إيلا، سفاري الفهود، ومراقبة الحيتان في ميريسا.'
    },
    'week-of-wanderlust-7d6n': {
      title: 'أسبوع الاستكشاف والجمال 7 أيام – 6 ليالٍ',
      duration: '7 أيام / 6 ليالٍ',
      packageType: 'الفخامة والطبيعة',
      difficulty: 'سهل',
      bestTime: 'من نوفمبر إلى أبريل',
      travelers: '2-12 مسافرين',
      overview: 'رحلة مدتها أسبوع تغطي أبرز المعالم الثقافية والجبلية وشواطئ الجنوب الساحرة مع سفاري الفهود في محمية يالا.'
    },
    'colombo-kandy-bentota-day-tours': {
      title: 'جولة يومية: كولومبو، كاندي وبنتوتا',
      duration: 'جولة يوم كامل',
      packageType: 'رحلة يومية',
      difficulty: 'سهل',
      bestTime: 'على مدار السنة',
      travelers: '2-12 مسافرين',
      overview: 'رحلة يومية ممتازة انطلاقاً من كولومبو لزيارة معبد السن المقدس في كاندي وشواطئ بنتوتا الساحرة.'
    },
    'galle-day-tour-itinerary': {
      title: 'جولة يومية إلى قلعة جالي والساحل',
      duration: 'جولة يوم كامل',
      packageType: 'ثقافة وساحل',
      difficulty: 'سهل',
      bestTime: 'على مدار السنة',
      travelers: '2-12 مسافرين',
      overview: 'استكشف قلعة جالي التاريخية المدرجة ضمن اليونسكو، وسفاري القوارب في نهر مادو، ومحمية السلاحف البحرية.'
    },
    'sigiriya-dambulla-day-tour': {
      title: 'جولة يومية إلى سيجيريا ودامبولا',
      duration: 'جولة يوم كامل',
      packageType: 'تراث تاريخي',
      difficulty: 'سهل',
      bestTime: 'على مدار السنة',
      travelers: '2-12 مسافرين',
      overview: 'زر صخرة سيجيريا الملكية الساحرة ومعبد كهف دامبولا الذهبي في رحلة يومية واحدة حافلة بالمتعة.'
    }
  }
};

// Helper for dynamic duration and day title translation fallbacks
function getLocalizedDuration(durationStr, lang) {
  if (!durationStr || lang === 'en') return durationStr;
  let d = durationStr;

  if (lang === 'ar') {
    d = d.replace(/(\d+)\s*Days?/gi, '$1 أيام')
         .replace(/(\d+)\s*Nights?/gi, '$1 ليالٍ')
         .replace(/Full Day Tour/gi, 'جولة يوم كامل')
         .replace(/1 Day/gi, 'يوم واحد');
  } else if (lang === 'it') {
    d = d.replace(/(\d+)\s*Days?/gi, '$1 Giorni')
         .replace(/(\d+)\s*Nights?/gi, '$1 Notti')
         .replace(/Full Day Tour/gi, 'Escursione di 1 Giorno')
         .replace(/1 Day/gi, '1 Giorno');
  } else if (lang === 'es') {
    d = d.replace(/(\d+)\s*Days?/gi, '$1 Días')
         .replace(/(\d+)\s*Nights?/gi, '$1 Noches')
         .replace(/Full Day Tour/gi, 'Excursión de 1 Día')
         .replace(/1 Day/gi, '1 Día');
  } else if (lang === 'de') {
    d = d.replace(/(\d+)\s*Days?/gi, '$1 Tage')
         .replace(/(\d+)\s*Nights?/gi, '$1 Nächte')
         .replace(/Full Day Tour/gi, '1-Tages-Ausflug')
         .replace(/1 Day/gi, '1 Tag');
  } else if (lang === 'fr') {
    d = d.replace(/(\d+)\s*Days?/gi, '$1 Jours')
         .replace(/(\d+)\s*Nights?/gi, '$1 Nuits')
         .replace(/Full Day Tour/gi, 'Excursion d’un Jour')
         .replace(/1 Day/gi, '1 Jour');
  }
  return d;
}

function getLocalizedItinerary(itineraryArray, lang) {
  if (!Array.isArray(itineraryArray) || lang === 'en') return itineraryArray;

  const dayPrefixes = {
    ar: 'اليوم',
    it: 'Giorno',
    es: 'Día',
    de: 'Tag',
    fr: 'Jour'
  };

  const prefix = dayPrefixes[lang];

  return itineraryArray.map(item => {
    let dayStr = item.day;
    if (prefix && dayStr && dayStr.toLowerCase().startsWith('day')) {
      dayStr = dayStr.replace(/day/i, prefix);
    }
    return {
      ...item,
      day: dayStr
    };
  });
}

// ----------------------------------------------------
// LOCALIZER HELPERS
// ----------------------------------------------------

export function getLocalizedPackage(pkg, lang = 'en') {
  if (!pkg) return pkg;

  const tr = (packageTranslations[lang] && packageTranslations[lang][pkg.id]) || {};

  return {
    ...pkg,
    title: tr.title || pkg.title,
    duration: tr.duration || getLocalizedDuration(pkg.duration, lang),
    packageType: tr.packageType || pkg.packageType,
    difficulty: tr.difficulty || pkg.difficulty,
    bestTime: tr.bestTime || pkg.bestTime,
    travelers: tr.travelers || pkg.travelers,
    overview: tr.overview || pkg.overview,
    itinerary: tr.itinerary || getLocalizedItinerary(pkg.itinerary, lang),
    included: tr.included || pkg.included,
    notIncluded: tr.notIncluded || pkg.notIncluded,
    highlights: tr.highlights || pkg.highlights,
    importantInfo: tr.importantInfo || pkg.importantInfo
  };
}

export function getLocalizedPackages(packagesArray, lang = 'en') {
  if (!Array.isArray(packagesArray)) return [];
  return packagesArray.map(pkg => getLocalizedPackage(pkg, lang));
}

export function getLocalizedPackagesByCategory(categoryMap, lang = 'en') {
  if (!categoryMap) return {};
  const result = {};
  for (const catKey in categoryMap) {
    result[catKey] = getLocalizedPackages(categoryMap[catKey], lang);
  }
  return result;
}

export function getLocalizedDestination(dest, lang = 'en') {
  if (!dest) return dest;

  const tr = (destinationTranslations[lang] && destinationTranslations[lang][dest.id]) || {};

  return {
    ...dest,
    name: tr.name || dest.name,
    tagline: tr.tagline || dest.tagline,
    toursCount: tr.toursCount || dest.toursCount
  };
}

export function getLocalizedDestinations(destArray, lang = 'en') {
  if (!Array.isArray(destArray)) return [];
  return destArray.map(d => getLocalizedDestination(d, lang));
}

export function getLocalizedReview(review, lang = 'en') {
  if (!review) return review;

  const tr = (reviewTranslations[lang] && reviewTranslations[lang][review.id]) || {};

  return {
    ...review,
    comment: tr.comment || review.comment
  };
}

export function getLocalizedReviews(reviewsArray, lang = 'en') {
  if (!Array.isArray(reviewsArray)) return [];
  return reviewsArray.map(r => getLocalizedReview(r, lang));
}
