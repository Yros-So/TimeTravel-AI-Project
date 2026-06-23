import React, { useEffect, useMemo, useState } from "react";
import {
  Bot,
  CalendarDays,
  ChevronRight,
  CircleHelp,
  Clock3,
  Landmark,
  Menu,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Ticket,
  X,
} from "lucide-react";

const destinations = [
  {
    id: "paris",
    name: "Paris 1889",
    period: "Belle Epoque",
    image: "/assets/paris-1889-hero-16x9.png",
    eyebrow: "Exposition Universelle",
    tagline: "Une capitale en pleine effervescence, illuminee par la naissance de la Tour Eiffel.",
    description:
      "Vivez Paris au sommet de son elegance : pavillons internationaux, diners Belle Epoque, promenades sur les quais et premiere rencontre avec le monument le plus audacieux de 1889.",
    activities: ["Tour Eiffel inaugurale", "Diner Belle Epoque", "Bal aux lanternes"],
    price: "8 900 credits temporels",
    duration: "2 jours / 1 nuit",
    audience: "Couples, amateurs de luxe et passionnes de ville",
    mood: "Elegance urbaine",
    score: "Confort 5/5",
    tags: ["Culture", "Luxe", "Romantique"],
  },
  {
    id: "cretace",
    name: "Cretace -65M",
    period: "Prehistoire",
    image: "/assets/cretace-65m-hero-16x9.png",
    eyebrow: "Expedition securisee",
    tagline: "Une immersion controlee dans un monde sauvage avant l'histoire humaine.",
    description:
      "Partez en capsule blindee observer les geants prehistoriques, les forets primitives et les rivages tropicaux d'un monde disparu, accompagne par nos guides paleo-explorateurs.",
    activities: ["Observation de dinosaures", "Safari en capsule", "Briefing paleo-survie"],
    price: "12 400 credits temporels",
    duration: "1 jour intensif",
    audience: "Explorateurs, curieux de science et profils aventure",
    mood: "Aventure extreme",
    score: "Intensite 5/5",
    tags: ["Nature", "Aventure", "Science"],
  },
  {
    id: "florence",
    name: "Florence 1504",
    period: "Renaissance",
    image: "/assets/florence-1504-hero-16x9.png",
    eyebrow: "Atelier Renaissance",
    tagline: "Entrez dans la ville ou l'art, la science et l'architecture changent le monde.",
    description:
      "Explorez Florence au moment ou Michel-Ange, les ateliers d'artistes et les grandes familles mecenes redessinent l'Europe. Une destination ideale pour les passionnes d'art et de savoir.",
    activities: ["Ateliers d'artistes", "Architecture Renaissance", "Parcours Michel-Ange"],
    price: "9 700 credits temporels",
    duration: "3 jours / 2 nuits",
    audience: "Amateurs d'art, architecture et culture Renaissance",
    mood: "Inspiration artistique",
    score: "Culture 5/5",
    tags: ["Art", "Architecture", "Histoire"],
  },
];

const quickQuestions = [
  "Quelle destination choisir pour un amateur d'art ?",
  "Le Cretace est-il dangereux ?",
  "Quel voyage est le plus romantique ?",
  "Quels sont les prix ?",
  "Peut-on voyager avec des enfants ?",
  "Comment reserver ?",
];

const initialMessages = [
  {
    role: "assistant",
    text: "Bonjour, je suis Chronos, l'assistant virtuel de TimeTravel Agency. Je peux comparer les epoques, expliquer les prix, repondre a la FAQ et recommander un voyage selon vos envies.",
  },
];

const faqAnswers = [
  {
    label: "Securite",
    keywords: ["securite", "danger", "risque", "protection", "survie"],
    answer:
      "Chaque depart suit un protocole temporel : briefing, equipement adapte, guide specialise et fenetre de retour verrouillee. Le Cretace reste le plus intense, mais il se visite en capsule securisee.",
  },
  {
    label: "Prix",
    keywords: ["prix", "tarif", "cout", "combien", "credit"],
    answer:
      "Nos tarifs fictifs : Paris 1889 a 8 900 credits temporels, Florence 1504 a 9 700 credits temporels et Cretace -65M a 12 400 credits temporels.",
  },
  {
    label: "Reservation",
    keywords: ["reserver", "reservation", "date", "planifier", "depart"],
    answer:
      "Pour reserver, choisissez une destination, une date et le nombre de voyageurs dans le formulaire. L'agence confirme ensuite la disponibilite de la fenetre temporelle.",
  },
  {
    label: "Famille",
    keywords: ["enfant", "famille", "age", "mineur"],
    answer:
      "Paris 1889 est l'option la plus confortable pour une famille. Florence 1504 convient aussi aux adolescents interesses par l'art. Le Cretace est reserve aux voyageurs qui acceptent un niveau d'intensite eleve.",
  },
  {
    label: "Duree",
    keywords: ["duree", "temps", "long", "nuit"],
    answer:
      "Durees conseillees : Paris 1889 sur 2 jours, Florence 1504 sur 3 jours et le Cretace sur 1 jour intensif pour limiter l'exposition temporelle.",
  },
];

const quizQuestions = [
  {
    id: "experience",
    label: "Quel type d'experience recherchez-vous ?",
    options: [
      { label: "Culturelle et artistique", scores: { florence: 3, paris: 1 } },
      { label: "Aventure et nature", scores: { cretace: 3 } },
      { label: "Elegance et raffinement", scores: { paris: 3, florence: 1 } },
    ],
  },
  {
    id: "period",
    label: "Votre periode preferee ?",
    options: [
      { label: "Histoire moderne", scores: { paris: 3 } },
      { label: "Temps anciens et origines", scores: { cretace: 3 } },
      { label: "Renaissance et classicisme", scores: { florence: 3 } },
    ],
  },
  {
    id: "setting",
    label: "Vous preferez :",
    options: [
      { label: "L'effervescence urbaine", scores: { paris: 3 } },
      { label: "La nature sauvage", scores: { cretace: 3 } },
      { label: "L'art et l'architecture", scores: { florence: 3 } },
    ],
  },
  {
    id: "activity",
    label: "Votre activite ideale :",
    options: [
      { label: "Visiter des monuments", scores: { paris: 2, florence: 1 } },
      { label: "Observer la faune", scores: { cretace: 3 } },
      { label: "Explorer des musees", scores: { florence: 3, paris: 1 } },
    ],
  },
];

function normalizeMessage(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function findDestinationInMessage(message) {
  if (message.includes("paris") || message.includes("1889") || message.includes("eiffel")) {
    return destinations.find((destination) => destination.id === "paris");
  }

  if (message.includes("cretace") || message.includes("dinosaure") || message.includes("prehistoire")) {
    return destinations.find((destination) => destination.id === "cretace");
  }

  if (message.includes("florence") || message.includes("renaissance") || message.includes("michel")) {
    return destinations.find((destination) => destination.id === "florence");
  }

  return null;
}

function formatDestinationSummary(destination) {
  return `${destination.name} : ${destination.tagline} Prix : ${destination.price}. Duree conseillee : ${destination.duration}. Public ideal : ${destination.audience}.`;
}

function buildRecommendationReason(destination, answers) {
  const selectedValues = Object.values(answers).join(", ").toLowerCase();

  if (destination.id === "paris") {
    return `Votre profil met en avant ${selectedValues}. Paris 1889 correspond bien a une experience elegante, urbaine et confortable, avec une forte dimension monumentale autour de la Tour Eiffel.`;
  }

  if (destination.id === "cretace") {
    return `Votre profil met en avant ${selectedValues}. Le Cretace -65M est le meilleur choix pour une experience sauvage, scientifique et spectaculaire, avec un niveau d'aventure eleve.`;
  }

  return `Votre profil met en avant ${selectedValues}. Florence 1504 est la destination la plus adaptee pour l'art, l'architecture et l'immersion Renaissance.`;
}

function buildAgentResponse(question) {
  const normalized = normalizeMessage(question);
  const matchedDestination = findDestinationInMessage(normalized);
  const matchedFaq = faqAnswers.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword)),
  );

  if (["bonjour", "salut", "hello", "bonsoir"].some((word) => normalized.includes(word))) {
    return "Bonjour, je suis Chronos. Je peux vous orienter selon vos envies : art, aventure, romantisme, famille, budget ou niveau de confort.";
  }

  if (matchedFaq) {
    return matchedFaq.answer;
  }

  if (normalized.includes("compare") || normalized.includes("difference") || normalized.includes("choisir")) {
    return "Pour choisir : Paris 1889 privilegie le luxe romantique et l'effervescence urbaine, Florence 1504 l'art et la Renaissance, tandis que le Cretace -65M vise l'aventure scientifique et la nature spectaculaire.";
  }

  if (normalized.includes("art") || normalized.includes("musee") || normalized.includes("architecture")) {
    return "Je vous conseille Florence 1504 : c'est l'option la plus riche pour l'art, les ateliers, l'architecture et l'univers de Michel-Ange.";
  }

  if (normalized.includes("nature") || normalized.includes("aventure") || normalized.includes("science")) {
    return "Le Cretace -65M est le meilleur choix pour une experience nature et aventure. Le voyage est spectaculaire, mais encadre par une capsule securisee et un briefing paleo-survie.";
  }

  if (normalized.includes("romantique") || normalized.includes("couple") || normalized.includes("elegant")) {
    return "Paris 1889 est le meilleur choix romantique : diner Belle Epoque, promenades illuminees et atmosphere de grande premiere autour de la Tour Eiffel.";
  }

  if (matchedDestination) {
    return formatDestinationSummary(matchedDestination);
  }

  return "Je peux vous aider a choisir entre Paris 1889, Cretace -65M et Florence 1504. Indiquez vos envies : art, nature, romantisme, famille, budget, securite ou niveau d'aventure.";
}

function App() {
  const [activeDestination, setActiveDestination] = useState(destinations[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [bookingStatus, setBookingStatus] = useState("");
  const [quizAnswers, setQuizAnswers] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.14 },
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const destinationOptions = useMemo(
    () => destinations.map((destination) => destination.name),
    [],
  );

  const quizRecommendation = useMemo(() => {
    const scores = { paris: 0, cretace: 0, florence: 0 };

    quizQuestions.forEach((question) => {
      const selectedLabel = quizAnswers[question.id];
      const selectedOption = question.options.find((option) => option.label === selectedLabel);

      if (selectedOption) {
        Object.entries(selectedOption.scores).forEach(([destinationId, score]) => {
          scores[destinationId] += score;
        });
      }
    });

    const answeredCount = Object.keys(quizAnswers).length;
    if (answeredCount < quizQuestions.length) {
      return null;
    }

    const winnerId = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    const destination = destinations.find((item) => item.id === winnerId);

    return {
      destination,
      reason: buildRecommendationReason(destination, quizAnswers),
      scores,
    };
  }, [quizAnswers]);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }

  function selectDestination(destination) {
    setActiveDestination(destination);
    setTimeout(() => scrollTo("details"), 30);
  }

  function answerForQuestion(question) {
    return buildAgentResponse(question);
  }

  function sendMessage(text = chatInput) {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
    ]);
    setChatInput("");
    setChatOpen(true);
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { role: "assistant", text: answerForQuestion(trimmed) },
      ]);
      setIsTyping(false);
    }, 450);
  }

  function selectQuizAnswer(questionId, optionLabel) {
    setQuizAnswers((current) => ({
      ...current,
      [questionId]: optionLabel,
    }));
  }

  function handleBookingSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "");
    const destination = String(formData.get("destination") || "");
    const date = String(formData.get("date") || "");

    if (!email.includes("@") || !destination || !date) {
      setBookingStatus("Merci de renseigner une destination, une date et un email valide.");
      return;
    }

    setBookingStatus(`Demande recue pour ${destination}. Notre agent vous recontactera a ${email}.`);
    event.currentTarget.reset();
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand" type="button" onClick={() => scrollTo("top")} aria-label="Retour accueil">
          <span className="brand-mark">TA</span>
          <span>TimeTravel Agency</span>
        </button>

        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Navigation principale">
          <button type="button" onClick={() => scrollTo("top")}>Accueil</button>
          <button type="button" onClick={() => scrollTo("destinations")}>Destinations</button>
          <button type="button" onClick={() => scrollTo("assistant")}>Assistant IA</button>
          <button type="button" onClick={() => scrollTo("quiz")}>Quiz</button>
          <button type="button" onClick={() => scrollTo("booking")}>Reservation</button>
        </nav>

        <button className="header-cta" type="button" onClick={() => scrollTo("booking")}>
          <Ticket size={18} aria-hidden="true" />
          Planifier
        </button>

        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <img src="/assets/teaser-storyboard-contact-sheet.png" alt="" />
          </div>
          <div className="hero-overlay" aria-hidden="true" />
          <div className="time-ring ring-one" aria-hidden="true" />
          <div className="time-ring ring-two" aria-hidden="true" />

          <div className="hero-content" data-reveal>
            <p className="section-kicker">Agence de voyage temporel premium</p>
            <h1 id="hero-title">Voyagez dans le temps, vivez l'histoire.</h1>
            <p className="hero-copy">
              Explorez Paris 1889, le Cretace -65M et Florence 1504 avec une interface immersive,
              des conseils personnalises et des destinations concues pour marquer les esprits.
            </p>
            <div className="hero-actions">
              <button className="primary-button" type="button" onClick={() => scrollTo("destinations")}>
                Explorer les destinations
                <ChevronRight size={18} aria-hidden="true" />
              </button>
              <button className="secondary-button" type="button" onClick={() => setChatOpen(true)}>
                <Bot size={18} aria-hidden="true" />
                Demander conseil
              </button>
            </div>
          </div>
        </section>

        <section className="agency-section section-wrap" data-reveal>
          <div>
            <p className="section-kicker">Notre promesse</p>
            <h2>Une agence fictive, une experience complete.</h2>
          </div>
          <div className="value-grid">
            <article>
              <Landmark size={24} aria-hidden="true" />
              <h3>Immersion historique</h3>
              <p>Chaque voyage met en scene une epoque avec ses lieux, ses codes et son atmosphere.</p>
            </article>
            <article>
              <ShieldCheck size={24} aria-hidden="true" />
              <h3>Securite temporelle</h3>
              <p>Les parcours sont encadres par des protocoles narratifs clairs et rassurants.</p>
            </article>
            <article>
              <Sparkles size={24} aria-hidden="true" />
              <h3>Conseil personnalise</h3>
              <p>L'assistant IA aide les visiteurs a choisir selon leurs envies et leur niveau d'aventure.</p>
            </article>
          </div>
        </section>

        <section className="destinations-section section-wrap" id="destinations" data-reveal>
          <div className="section-heading">
            <p className="section-kicker">Galerie des destinations</p>
            <h2>Trois epoques, trois facons de voyager.</h2>
          </div>

          <div className="destination-grid">
            {destinations.map((destination) => (
              <article className="destination-card" key={destination.id}>
                <img src={destination.image} alt={destination.name} loading="lazy" />
                <div className="card-content">
                  <p>{destination.eyebrow}</p>
                  <h3>{destination.name}</h3>
                  <span>{destination.tagline}</span>
                  <div className="tag-row" aria-label="Themes">
                    {destination.tags.map((tag) => (
                      <small key={tag}>{tag}</small>
                    ))}
                  </div>
                  <button type="button" onClick={() => selectDestination(destination)}>
                    Voir le voyage
                    <ChevronRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="details-section section-wrap" id="details" data-reveal>
          <div className="detail-image">
            <img src={activeDestination.image} alt={activeDestination.name} loading="lazy" />
          </div>
          <div className="detail-copy">
            <p className="section-kicker">{activeDestination.period}</p>
            <h2>{activeDestination.name}</h2>
            <p>{activeDestination.description}</p>
            <div className="detail-meta">
              <span><Clock3 size={17} aria-hidden="true" /> {activeDestination.mood}</span>
              <span><Rocket size={17} aria-hidden="true" /> {activeDestination.score}</span>
              <span><Ticket size={17} aria-hidden="true" /> {activeDestination.price}</span>
            </div>
            <ul className="activity-list">
              {activeDestination.activities.map((activity) => (
                <li key={activity}>
                  <Sparkles size={16} aria-hidden="true" />
                  {activity}
                </li>
              ))}
            </ul>
            <button className="primary-button compact" type="button" onClick={() => scrollTo("booking")}>
              Choisir cette destination
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </section>

        <section className="assistant-section section-wrap" id="assistant" data-reveal>
          <div>
            <p className="section-kicker">Agent conversationnel</p>
            <h2>Besoin d'un conseil avant le depart ?</h2>
            <p>
              Chronos repond aux questions courantes et recommande une destination selon vos envies :
              art, aventure, romantisme ou confort.
            </p>
            <div className="faq-strip" aria-label="Themes couverts par l'assistant">
              {faqAnswers.map((faq) => (
                <span key={faq.label}>
                  <CircleHelp size={15} aria-hidden="true" />
                  {faq.label}
                </span>
              ))}
            </div>
          </div>
          <div className="quick-questions" aria-label="Questions rapides">
            {quickQuestions.map((question) => (
              <button key={question} type="button" onClick={() => sendMessage(question)}>
                <MessageCircle size={17} aria-hidden="true" />
                {question}
              </button>
            ))}
          </div>
        </section>

        <section className="quiz-section section-wrap" id="quiz" data-reveal>
          <div className="section-heading">
            <p className="section-kicker">Automatisation intelligente</p>
            <h2>Quiz de recommandation personnalisee.</h2>
            <p>
              Repondez aux 4 questions : l'algorithme recommande automatiquement la destination
              la plus coherente avec vos preferences.
            </p>
          </div>

          <div className="quiz-layout">
            <div className="quiz-questions">
              {quizQuestions.map((question, questionIndex) => (
                <fieldset className="quiz-card" key={question.id}>
                  <legend>
                    <span>{questionIndex + 1}</span>
                    {question.label}
                  </legend>
                  <div className="quiz-options">
                    {question.options.map((option) => {
                      const isSelected = quizAnswers[question.id] === option.label;

                      return (
                        <button
                          className={isSelected ? "is-selected" : ""}
                          key={option.label}
                          type="button"
                          onClick={() => selectQuizAnswer(question.id, option.label)}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              ))}
            </div>

            <aside className="quiz-result" aria-live="polite">
              {quizRecommendation ? (
                <>
                  <p className="section-kicker">Destination recommandee</p>
                  <h3>{quizRecommendation.destination.name}</h3>
                  <p>{quizRecommendation.reason}</p>
                  <div className="detail-meta">
                    <span><Ticket size={17} aria-hidden="true" /> {quizRecommendation.destination.price}</span>
                    <span><Clock3 size={17} aria-hidden="true" /> {quizRecommendation.destination.duration}</span>
                  </div>
                  <button
                    className="primary-button compact"
                    type="button"
                    onClick={() => selectDestination(quizRecommendation.destination)}
                  >
                    Voir cette destination
                    <ChevronRight size={18} aria-hidden="true" />
                  </button>
                </>
              ) : (
                <>
                  <p className="section-kicker">Analyse en attente</p>
                  <h3>{Object.keys(quizAnswers).length}/4 reponses</h3>
                  <p>
                    Completez le quiz pour obtenir une recommandation claire entre Paris 1889,
                    Cretace -65M et Florence 1504.
                  </p>
                </>
              )}
            </aside>
          </div>
        </section>

        <section className="booking-section section-wrap" id="booking" data-reveal>
          <div className="section-heading">
            <p className="section-kicker">Reservation optionnelle</p>
            <h2>Preparer une demande de voyage.</h2>
          </div>

          <form className="booking-form" onSubmit={handleBookingSubmit}>
            <label>
              Destination
              <select name="destination" defaultValue="">
                <option value="" disabled>Choisir une destination</option>
                {destinationOptions.map((destination) => (
                  <option key={destination} value={destination}>{destination}</option>
                ))}
              </select>
            </label>
            <label>
              Date souhaitee
              <input name="date" type="date" />
            </label>
            <label>
              Voyageurs
              <input name="travelers" type="number" min="1" max="8" defaultValue="2" />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="vous@exemple.com" />
            </label>
            <label className="full-field">
              Preferences
              <textarea name="preferences" rows="4" placeholder="Art, aventure, famille, confort..." />
            </label>
            <button className="primary-button compact" type="submit">
              <CalendarDays size={18} aria-hidden="true" />
              Valider la demande
            </button>
            {bookingStatus && <p className="form-status" role="status">{bookingStatus}</p>}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <span>TimeTravel Agency - projet pedagogique</span>
        <span>Assets : projet TimeTravel Agency phase 1</span>
      </footer>

      <aside className={chatOpen ? "chat-widget is-open" : "chat-widget"} aria-label="Chatbot TimeTravel Agency">
        <button className="chat-fab" type="button" onClick={() => setChatOpen((open) => !open)} aria-label="Ouvrir le chatbot">
          {chatOpen ? <X size={22} /> : <MessageCircle size={22} />}
        </button>

        <div className="chat-panel">
          <div className="chat-header">
            <div>
              <strong>Chronos</strong>
              <span>Assistant IA local</span>
            </div>
            <Bot size={22} aria-hidden="true" />
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <p className={message.role === "assistant" ? "assistant-message" : "user-message"} key={`${message.role}-${index}`}>
                {message.text}
              </p>
            ))}
            {isTyping && <p className="assistant-message typing-message">Chronos prepare une recommandation...</p>}
          </div>
          <form
            className="chat-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              value={chatInput}
              onChange={(event) => setChatInput(event.target.value)}
              placeholder="Posez-moi vos questions sur les voyages temporels..."
              aria-label="Message pour le chatbot"
            />
            <button type="submit" aria-label="Envoyer" disabled={isTyping}>
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </form>
        </div>
      </aside>
    </div>
  );
}

export default App;
