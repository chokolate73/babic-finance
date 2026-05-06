import type { Locale } from "./services";

export interface PKVCard {
  title: string;
  body: string;
}

export interface PKVStep {
  title: string;
  body: string;
}

export interface PKVFaq {
  q: string;
  a: string;
}

export interface PKVContent {
  h1: string;
  intro: string;
  cta1: string;
  cta2: string;
  decisionHelperHeading: string;
  decisionHelperIntro: string;
  cards: PKVCard[];
  processHeading: string;
  steps: PKVStep[];
  faqHeading: string;
  faq: PKVFaq[];
  ctaHeading: string;
  ctaBody: string;
}

const pkvDE: PKVContent = {
  h1: "Private Krankenversicherung - eine Entscheidung für Jahrzehnte",
  intro:
    "PKV oder GKV? Die Frage stellen sich viele - meistens, wenn der Job sich ändert, das Einkommen steigt oder Familie geplant wird. Die Antwort hängt nicht vom Tarif ab, sondern von deiner Lebensplanung. Genau dort fängt eine ehrliche Beratung an.",
  cta1: "Auf WhatsApp schreiben",
  cta2: "Beratungstermin vereinbaren",
  decisionHelperHeading: "Lohnt sich PKV für dich?",
  decisionHelperIntro:
    "Es gibt vier Lebenssituationen, in denen sich die Frage ernsthaft stellt. Nicht in jeder ist die Antwort „ja\".",
  cards: [
    {
      title: "Angestellt mit Einkommen über der Versicherungspflichtgrenze",
      body: "Wenn dein Bruttojahresgehalt über der JAEG (2026: 73 800 €) liegt, hast du theoretisch die Wahl. Die wirklichen Fragen sind aber andere: planst du Familie? Wechselst du den Job häufiger? Bist du gesund - und wirst es voraussichtlich bleiben? Wir gehen das gemeinsam durch, bevor du wechselst.",
    },
    {
      title: "Selbstständig oder Freiberufler",
      body: "Hier hast du immer die Wahl zwischen GKV (freiwillig) und PKV. Für Selbstständige ohne familiäre Mitversicherung ist PKV oft günstiger und leistungsstärker - vor allem in jungen Jahren. Aber: die Beiträge im Alter brauchen einen Plan, sonst wird's eng.",
    },
    {
      title: "Beamter oder Beamtenanwärter",
      body: "Für Beamte ist PKV in den meisten Fällen die wirtschaftlich klare Wahl - durch die Beihilfe übernimmt der Dienstherr 50–70 % der Kosten. Wir wählen den Restkostentarif, der zu deiner Lebenssituation passt.",
    },
    {
      title: "Familie geplant - oder schon da",
      body: "In der GKV sind Kinder und nicht-erwerbstätige Ehepartner oft kostenfrei mitversichert. In der PKV zahlt jeder seinen eigenen Beitrag. Das kann bei großer Familie ein Argument gegen PKV sein - oder dafür, wenn die Leistung wichtiger ist als der Preis. Wir rechnen das konkret durch.",
    },
  ],
  processHeading: "Was ich für dich mache",
  steps: [
    {
      title: "Bestandsaufnahme",
      body: "Wir schauen uns deine aktuelle Situation an - Einkommen, Familie, Gesundheit, Pläne für die nächsten 10 Jahre. 30–45 Minuten, persönlich oder per Video.",
    },
    {
      title: "Ehrliche Einschätzung",
      body: "Ich sage dir, ob PKV in deinem Fall überhaupt sinnvoll ist. In etwa einem Drittel der Gespräche rate ich klar zu „bei der GKV bleiben\" - das gehört zur Beratung dazu.",
    },
    {
      title: "Tarifauswahl aus dem Generali-Portfolio",
      body: "Wenn PKV passt, wählen wir gemeinsam den Tarif aus dem Angebot der Central Krankenversicherung - mit Blick auf Leistungen, Beitragsentwicklung und Zukunftssicherheit.",
    },
    {
      title: "Antrag und Begleitung",
      body: "Gesundheitsfragen sauber beantworten, Antragsweg begleiten, im Schadenfall ansprechbar bleiben - auch nach dem Abschluss.",
    },
  ],
  faqHeading: "Häufige Fragen zur PKV",
  faq: [
    {
      q: "Kann ich von der PKV zurück in die GKV?",
      a: "Bis 55 Jahre - schwierig, aber möglich, wenn du wieder versicherungspflichtig wirst (z. B. Anstellung unter der JAEG). Ab 55 ist der Rückweg in den meisten Fällen versperrt. Genau deshalb ist die Erstentscheidung so wichtig - und genau deshalb beraten wir hier nicht im Schnellverfahren.",
    },
    {
      q: "Steigen die PKV-Beiträge im Alter ins Unermessliche?",
      a: "Sie steigen - aber nicht zwangsläufig dramatisch, wenn du den Tarif richtig wählst und Beitragsentlastungs-Komponenten einbaust. Wir planen das von Anfang an mit ein. Was nicht funktioniert: einen reinen Billigtarif abschließen und hoffen, dass es schon gut geht.",
    },
    {
      q: "Was passiert mit meinen Kindern?",
      a: "In der PKV werden Kinder mit eigenem Beitrag versichert. In der GKV sind sie meistens kostenfrei mitversichert. Bei zwei oder mehr Kindern verschiebt das die Rechnung deutlich - wir kalkulieren das durch, bevor du wechselst.",
    },
    {
      q: "Welche Leistungen bekomme ich in der PKV, die die GKV nicht hat?",
      a: "Schnellere Termine, Chefarztbehandlung, Einzelzimmer im Krankenhaus, höhere Erstattungen bei Zahn und Sehhilfen, freie Arztwahl ohne Kassenarzt-Beschränkungen. Aber: das alles kostet - und nur du entscheidest, was dir das wert ist.",
    },
    {
      q: "Kann ich Tarife der Central Krankenversicherung mit anderen vergleichen?",
      a: "Als gebundener Versicherungsvertreter nach §34d Abs. 7 GewO arbeite ich exklusiv mit der Generali-Gruppe (zu der die Central Krankenversicherung gehört). Wir suchen den passenden Tarif aus diesem Portfolio. Wenn du einen marktweiten Vergleich brauchst, ist ein Versicherungsmakler der richtige Ansprechpartner - und ich sage dir das ehrlich.",
    },
    {
      q: "Wie lange dauert die Beratung bis zum Abschluss?",
      a: "Erstgespräch 45 Minuten. Bedenkzeit nach dem Gespräch: keine Vorgabe - bei einer 30-Jahres-Entscheidung gibt's keine Eile. Antragsphase mit Gesundheitsprüfung: 2–6 Wochen, je nach Versicherer und Fragenkomplexität.",
    },
  ],
  ctaHeading: "Erstgespräch - kostenlos und ohne Verpflichtung",
  ctaBody:
    "45 Minuten, persönlich in Troisdorf, per Zoom oder WhatsApp. Wir schauen uns deine Situation an, ich sage dir ehrlich, ob PKV passt.",
};

const pkvRU: PKVContent = {
  h1: "Частная медицинская страховка - решение на десятилетия",
  intro:
    "PKV или GKV? Этот вопрос всплывает, когда меняется работа, растёт доход, планируется семья. Ответ зависит не от тарифа, а от твоих жизненных планов. Именно с этого начинается честная консультация.",
  cta1: "Написать в WhatsApp",
  cta2: "Записаться на консультацию",
  decisionHelperHeading: "Подходит ли тебе PKV?",
  decisionHelperIntro:
    "Есть четыре жизненные ситуации, когда вопрос имеет смысл. Не в каждой ответ «да».",
  cards: [
    {
      title: "Работаешь по найму с доходом выше Versicherungspflichtgrenze",
      body: "Если твой годовой брутто выше границы JAEG (2026: 73 800 €), у тебя теоретически есть выбор. Но реальные вопросы другие: планируешь ли семью? Часто меняешь работу? Здоров ли - и останешься ли здоровым? Разбираем это до того, как ты переходишь.",
    },
    {
      title: "Самозанятый или фрилансер",
      body: "Здесь у тебя всегда выбор между GKV (добровольная) и PKV. Для самозанятого без семейного со-страхования PKV часто дешевле и лучше по покрытию - особенно в молодом возрасте. Но: взносы в старости требуют плана, иначе будет тяжело.",
    },
    {
      title: "Госслужащий (Beamter)",
      body: "Для госслужащих PKV почти всегда экономически очевидный выбор - через Beihilfe работодатель покрывает 50–70 % расходов. Мы подбираем тариф остаточных расходов под твою ситуацию.",
    },
    {
      title: "Семья запланирована - или уже есть",
      body: "В GKV дети и неработающий супруг часто застрахованы бесплатно. В PKV каждый платит свой взнос. При большой семье это аргумент против PKV - или за, если важнее покрытие, чем цена. Считаем конкретно.",
    },
  ],
  processHeading: "Что я делаю",
  steps: [
    {
      title: "Разбор ситуации",
      body: "Смотрим твоё текущее положение - доход, семья, здоровье, планы на 10 лет. 30–45 минут, лично или по видео.",
    },
    {
      title: "Честная оценка",
      body: "Скажу, есть ли вообще смысл в PKV в твоём случае. Примерно в трети разговоров я советую «оставайся в GKV» - это часть консультации.",
    },
    {
      title: "Подбор тарифа из портфеля Generali",
      body: "Если PKV подходит, выбираем тариф из предложений Central Krankenversicherung - с прицелом на покрытие, динамику взносов и стабильность в долгую.",
    },
    {
      title: "Заявление и сопровождение",
      body: "Правильно отвечаем на медицинские вопросы, ведём процесс подачи заявления, остаёмся на связи при страховых случаях. На русском или немецком - как тебе удобнее.",
    },
  ],
  faqHeading: "Частые вопросы про PKV",
  faq: [
    {
      q: "Можно ли вернуться из PKV обратно в GKV?",
      a: "До 55 лет - сложно, но возможно при возвращении к обязательному страхованию (например, найм с зарплатой ниже JAEG). После 55 путь назад в большинстве случаев закрыт. Именно поэтому первое решение настолько важное - и именно поэтому мы не консультируем второпях.",
    },
    {
      q: "Взносы PKV в старости растут до бесконечности?",
      a: "Растут - но не катастрофически, если правильно выбрать тариф и заложить компоненты Beitragsentlastung. Мы планируем это с самого начала. Что не работает: брать самый дешёвый тариф и надеяться, что пронесёт.",
    },
    {
      q: "Что с детьми?",
      a: "В PKV детей страхуют отдельным взносом. В GKV они часто застрахованы бесплатно. При двух и больше детях это серьёзно меняет расклад - считаем заранее.",
    },
    {
      q: "Какие услуги в PKV отличаются от GKV?",
      a: "Быстрее запись к врачу, лечение у главврача, отдельная палата в больнице, более полная компенсация по стоматологии и оптике, свободный выбор врача без ограничений Kassenarzt. Но: всё это стоит - решаешь только ты, насколько это для тебя важно.",
    },
    {
      q: "Можно ли сравнить тарифы Central с другими страховщиками?",
      a: "Как gebundener Versicherungsvertreter nach §34d Abs. 7 GewO я работаю эксклюзивно с группой Generali (в которую входит Central Krankenversicherung). Мы подбираем подходящий тариф из этого портфеля. Если тебе нужно сравнение по всему рынку - это к Versicherungsmakler, и я честно об этом скажу.",
    },
    {
      q: "Сколько времени занимает консультация до договора?",
      a: "Первая встреча - 45 минут. Время на обдумывание после: без ограничений - для решения на 30 лет спешка не нужна. Подача заявления с медосмотром: 2–6 недель в зависимости от страховщика и сложности вопросов.",
    },
  ],
  ctaHeading: "Первая консультация - бесплатно и без обязательств",
  ctaBody:
    "45 минут, лично в Тройсдорфе, по Zoom или WhatsApp. Разберём твою ситуацию, скажу честно - подходит ли PKV. На русском или немецком.",
};

const pkvUA: PKVContent = {
  h1: "Приватна медична страховка - рішення на десятиліття",
  intro:
    "PKV чи GKV? Це питання спливає, коли змінюється робота, росте дохід, планується сім'я. Відповідь залежить не від тарифу, а від твоїх життєвих планів. Саме з цього починається чесна консультація.",
  cta1: "Написати в WhatsApp",
  cta2: "Записатися на консультацію",
  decisionHelperHeading: "Чи підходить тобі PKV?",
  decisionHelperIntro:
    "Є чотири життєві ситуації, коли питання має сенс. Не в кожній відповідь «так».",
  cards: [
    {
      title: "Працюєш за наймом з доходом вище Versicherungspflichtgrenze",
      body: "Якщо твій річний брутто вище межі JAEG (2026: 73 800 €), у тебе теоретично є вибір. Але реальні питання інші: чи плануєш сім'ю? Часто змінюєш роботу? Чи здоровий - і чи залишишся здоровим? Розбираємо це до того, як ти переходиш.",
    },
    {
      title: "Самозайнятий або фрілансер",
      body: "Тут у тебе завжди вибір між GKV (добровільна) і PKV. Для самозайнятого без сімейного со-страхування PKV часто дешевша і краща за покриттям - особливо в молодому віці. Але: внески в старості потребують плану, інакше буде важко.",
    },
    {
      title: "Держслужбовець (Beamter)",
      body: "Для держслужбовців PKV майже завжди економічно очевидний вибір - через Beihilfe роботодавець покриває 50–70 % витрат. Підбираємо тариф залишкових витрат під твою ситуацію.",
    },
    {
      title: "Сім'я запланована - або вже є",
      body: "У GKV діти й непрацюючий чоловік/дружина часто застраховані безкоштовно. У PKV кожен платить свій внесок. При великій сім'ї це аргумент проти PKV - або за, якщо покриття важливіше за ціну. Рахуємо конкретно.",
    },
  ],
  processHeading: "Що я роблю",
  steps: [
    {
      title: "Розбір ситуації",
      body: "Дивимося на твоє поточне становище - дохід, сім'я, здоров'я, плани на 10 років. 30–45 хвилин, особисто або по відео.",
    },
    {
      title: "Чесна оцінка",
      body: "Скажу, чи взагалі є сенс у PKV у твоєму випадку. Приблизно в третині розмов я раджу «залишайся в GKV» - це частина консультації.",
    },
    {
      title: "Підбір тарифу з портфеля Generali",
      body: "Якщо PKV підходить, обираємо тариф з пропозицій Central Krankenversicherung - з прицілом на покриття, динаміку внесків і стабільність на довго.",
    },
    {
      title: "Заява і супровід",
      body: "Правильно відповідаємо на медичні питання, ведемо процес подачі заяви, залишаємося на зв'язку при страхових випадках. Українською чи німецькою - як тобі зручніше.",
    },
  ],
  faqHeading: "Часті питання про PKV",
  faq: [
    {
      q: "Чи можна повернутися з PKV назад у GKV?",
      a: "До 55 років - складно, але можливо при поверненні до обов'язкового страхування (наприклад, найм із зарплатою нижче JAEG). Після 55 шлях назад у більшості випадків закритий. Саме тому перше рішення настільки важливе - і саме тому ми не консультуємо поспіхом.",
    },
    {
      q: "Чи зростають внески PKV у старості до нескінченності?",
      a: "Зростають - але не катастрофічно, якщо правильно вибрати тариф і закласти компоненти Beitragsentlastung. Плануємо це з самого початку. Що не працює: взяти найдешевший тариф і сподіватися, що пронесе.",
    },
    {
      q: "Що з дітьми?",
      a: "У PKV дітей страхують окремим внеском. У GKV вони часто застраховані безкоштовно. При двох і більше дітях це серйозно змінює розклад - рахуємо заздалегідь.",
    },
    {
      q: "Які послуги в PKV відрізняються від GKV?",
      a: "Швидше запис до лікаря, лікування у головлікаря, окрема палата в лікарні, повніша компенсація за стоматологію й оптику, вільний вибір лікаря без обмежень Kassenarzt. Але: все це коштує - вирішуєш тільки ти, наскільки це для тебе важливо.",
    },
    {
      q: "Чи можна порівняти тарифи Central з іншими страховиками?",
      a: "Як gebundener Versicherungsvertreter nach §34d Abs. 7 GewO я працюю ексклюзивно з групою Generali (до якої входить Central Krankenversicherung). Підбираємо потрібний тариф з цього портфеля. Якщо тобі потрібне порівняння по всьому ринку - це до Versicherungsmakler, і я чесно про це скажу.",
    },
    {
      q: "Скільки часу займає консультація до договору?",
      a: "Перша зустріч - 45 хвилин. Час на обдумування після: без обмежень - для рішення на 30 років поспіх не потрібен. Подача заяви з медоглядом: 2–6 тижнів залежно від страховика й складності питань.",
    },
  ],
  ctaHeading: "Перша консультація - безкоштовно і без зобов'язань",
  ctaBody:
    "45 хвилин, особисто у Тройсдорфі, по Zoom або WhatsApp. Розберемо твою ситуацію, скажу чесно - чи підходить PKV. Українською чи німецькою.",
};

export const pkvContent: Record<Locale, PKVContent> = {
  de: pkvDE,
  ru: pkvRU,
  ua: pkvUA,
};
