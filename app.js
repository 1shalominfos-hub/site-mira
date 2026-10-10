const { settings, elevageCards, equipment, products, services, formations, projects, gallery, news, faq, testimonials, team } = globalThis.MIRA_DATA;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const renderCards = () => {
  const container = $('#elevage-cards');
  container.innerHTML = elevageCards.map(card => `
    <article class="service-card reveal">
      <div class="service-icon">${card.icon}</div>
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <small>${card.status}</small>
    </article>`).join('');
};

const renderEquipment = () => {
  $('#equipment-grid').innerHTML = equipment.map(item => `
    <article class="service-card reveal">
      <div class="equipment-card-image"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
      <div><div class="service-icon">◇</div><h3>${item.name}</h3><p>${item.description}</p></div>
      <div><small>${item.price}</small><a class="button button-small button-primary" href="#demande-devis" data-product="${item.name}">Demander un devis</a></div>
    </article>`).join('');
};

const renderTabs = () => {
  const productsPanel = $('#products-panel');
  const servicesPanel = $('#services-panel');
  productsPanel.innerHTML = products.map(item => `<article class="product-item"><span>Produit</span><h3>${item.name}</h3><p>${item.note}</p></article>`).join('');
  servicesPanel.innerHTML = services.map(item => `<article class="product-item"><span>Service</span><h3>${item.name}</h3><p>${item.note}</p></article>`).join('');
};

const renderFormations = () => {
  $('#formation-list').innerHTML = formations.map(item => `
    <article class="formation-item reveal"><div><h4>${item.title}</h4><p>${item.description}</p><div class="formation-meta"><span>Durée : ${item.duration}</span><span>Lieu : ${item.location}</span><span>Session : ${item.session}</span><span>Tarif : ${item.tariff}</span></div></div><a href="#demande-devis">Demander →</a></article>`).join('');
};

const renderProjects = () => {
  $('#projects-grid').innerHTML = projects.map(item => `
    <article class="project-card reveal"><img src="${item.image}" alt="${item.title}" loading="lazy"><div class="project-card-content"><span>${item.category} · ${item.date}</span><h3>${item.title}</h3><p>${item.description}</p></div></article>`).join('');
};

const renderGallery = () => {
  $('#gallery-grid').innerHTML = gallery.map((item, index) => `
    <button class="gallery-item reveal" data-category="${item.category}" type="button" aria-label="Afficher ${item.title}"><img src="${item.src}" alt="${item.title}" loading="lazy"><span>${item.category}</span></button>`).join('');
};

const renderNews = () => {
  $('#news-grid').innerHTML = news.map(item => `
    <article class="news-card reveal"><img src="${item.image}" alt="" loading="lazy"><div class="news-card-content"><span class="meta">${item.category} · ${item.date}</span><h3>${item.title}</h3><p>${item.excerpt}</p></div></article>`).join('');
};

const renderFaq = () => {
  const target = $('#faq-list');
  if (!target) return;
  target.innerHTML = faq.map((item, index) => `
    <article class="faq-item ${index === 0 ? 'active' : ''}">
      <button class="faq-question" type="button" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="faq-answer-${index}">
        <span>${item.category}</span>
        <strong>${item.question}</strong>
      </button>
      <div class="faq-answer" id="faq-answer-${index}" ${index === 0 ? '' : 'hidden'}>
        <p>${item.answer}</p>
      </div>
    </article>`).join('');
};

const renderTestimonials = () => {
  const target = $('#testimonials-grid');
  if (!target) return;
  target.innerHTML = testimonials.map(item => `
    <article class="testimonial-card reveal">
      <div class="testimonial-mark">“</div>
      <blockquote>${item.quote}</blockquote>
      <footer>
        <strong>${item.author}</strong>
        <span>${item.role}</span>
        <small>${item.context}</small>
      </footer>
    </article>`).join('');
};

const renderTeam = () => {
  const target = $('#team-grid');
  if (!target) return;
  target.innerHTML = team.map(member => `
    <article class="team-card reveal">
      <div class="team-photo" aria-label="Photo de ${member.name}">${member.initials}</div>
      <div class="team-body">
        <span class="team-role">${member.role}</span>
        <h3>${member.name}</h3>
        <p>${member.specialty}</p>
      </div>
    </article>`).join('');
};

const setupTabs = () => {
  $$('.tab').forEach(tab => tab.addEventListener('click', () => {
    $$('.tab').forEach(item => { item.classList.toggle('active', item === tab); item.setAttribute('aria-selected', item === tab ? 'true' : 'false'); });
    const active = $('#products-panel');
    const service = $('#services-panel');
    const isProducts = tab.dataset.tab === 'products';
    active.hidden = !isProducts;
    active.classList.toggle('active', isProducts);
    service.hidden = isProducts;
    service.classList.toggle('active', !isProducts);
  }));
};

const setupGallery = () => {
  const filter = $('#gallery-filter');
  filter.addEventListener('click', event => {
    const button = event.target.closest('.filter');
    if (!button) return;
    $$('.filter').forEach(item => item.classList.toggle('active', item === button));
    const value = button.dataset.filter;
    $$('.gallery-item').forEach(item => item.classList.toggle('hidden', value !== 'all' && item.dataset.category !== value));
  });
  const lightbox = $('#lightbox');
  $$('.gallery-item').forEach(item => item.addEventListener('click', () => {
    const img = item.querySelector('img');
    $('img', lightbox).src = img.src;
    $('img', lightbox).alt = img.alt;
    $('p', lightbox).textContent = img.alt;
    lightbox.hidden = false;
    document.body.classList.add('agent-open');
  }));
  $('.lightbox-close', lightbox).addEventListener('click', () => { lightbox.hidden = true; document.body.classList.remove('agent-open'); });
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.hidden = true; });
};

const setupFaq = () => {
  $$('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      $$('.faq-item').forEach(entry => {
        const question = entry.querySelector('.faq-question');
        const panel = entry.querySelector('.faq-answer');
        question.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
        entry.classList.remove('active');
      });

      if (!isOpen) {
        button.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
        item.classList.add('active');
      }
    });
  });
};

const closeSectionWindow = () => {
  const shell = $('#section-window-shell');
  if (!shell) return;
  shell.classList.remove('open');
  document.body.classList.remove('window-open');
};

const openSectionWindow = targetId => {
  const source = document.getElementById(targetId);
  if (!source) return;

  let shell = $('#section-window-shell');
  if (!shell) {
    shell = document.createElement('div');
    shell.id = 'section-window-shell';
    shell.className = 'section-window-shell';
    shell.innerHTML = `
      <div class="section-window-backdrop" aria-hidden="true"></div>
      <div class="section-window-panel" role="dialog" aria-modal="true" aria-label="Fenêtre de navigation">
        <div class="section-window-header">
          <div class="section-window-title">Section</div>
          <button type="button" class="section-window-close" aria-label="Fermer la fenêtre">×</button>
        </div>
        <div class="section-window-body"></div>
      </div>
    `;
    const closeButton = $('.section-window-close', shell);
    $('.section-window-backdrop', shell).addEventListener('click', closeSectionWindow);
    closeButton.addEventListener('click', closeSectionWindow);
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && shell.classList.contains('open')) closeSectionWindow();
    });
    document.body.appendChild(shell);
  }

  const title = $('.section-window-title', shell);
  const body = $('.section-window-body', shell);
  const clone = source.cloneNode(true);

  clone.classList.add('section-window-content');
  clone.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
  clone.querySelectorAll('a[href^="#"]').forEach(link => {
    const nextId = link.getAttribute('href').slice(1);
    link.addEventListener('click', event => {
      event.preventDefault();
      openSectionWindow(nextId);
    });
  });
  clone.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));

  const heading = clone.querySelector('h2, h3, .eyebrow') || clone;
  title.textContent = heading.textContent.trim().slice(0, 40) || 'Section';
  body.innerHTML = '';
  body.appendChild(clone);
  shell.classList.add('open');
  document.body.classList.add('window-open');
};

const setupNavigation = () => {
  const header = $('#site-header');
  const menu = $('#mobile-menu');
  const toggle = $('.menu-toggle');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24));
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    document.body.classList.toggle('menu-open', open);
  });

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || !link.closest('.desktop-nav, #mobile-menu')) return;
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    event.preventDefault();
    event.stopPropagation();
    const targetId = href.slice(1);
    openSectionWindow(targetId);
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
};

const setupAgent = () => {
  const panel = $('#agent-panel');
  const backdrop = $('.agent-backdrop');
  const body = $('.agent-body');
  const form = $('.agent-input');
  const input = $('input', form);
  const openPanel = () => { panel.classList.add('open'); panel.setAttribute('aria-hidden', 'false'); backdrop.hidden = false; document.body.classList.add('agent-open'); };
  const closePanel = () => { panel.classList.remove('open'); panel.setAttribute('aria-hidden', 'true'); backdrop.hidden = true; document.body.classList.remove('agent-open'); };
  $$('.agent-trigger').forEach(button => button.addEventListener('click', () => { openPanel(); input.focus(); }));
  $('.agent-close').addEventListener('click', closePanel);
  backdrop.addEventListener('click', closePanel);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closePanel(); });

  const addMessage = (text, sender = 'agent', link) => {
    const message = document.createElement('div');
    message.className = `agent-message ${sender}`;
    if (sender === 'agent') {
      const icon = document.createElement('span');
      icon.textContent = '✦';
      message.append(icon);
    }
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    message.append(paragraph);
    if (link) {
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.textContent = link.label;
      if (link.external) {
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
      }
      message.append(anchor);
    }
    body.append(message);
    body.scrollTop = body.scrollHeight;
  };

  const getReply = message => {
    const normalized = message.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    if (/^(bonjour|bonsoir|salut|hello|coucou)\b/.test(normalized)) {
      return { text: 'Bonjour ! Je peux vous renseigner sur MIRA, l’élevage, les équipements, les devis, les formations et nos coordonnées. Que souhaitez-vous savoir ?' };
    }
    if (/\b(contact\w*|telephone|numero|appeler|whatsapp|adresse|situe|localisation|trouve)\b/.test(normalized)) {
      return {
        text: 'MIRA ÉLEVAGE se trouve à Karpala, Ouagadougou, Burkina Faso. Vous pouvez appeler au +226 70 93 40 50 ou nous écrire sur WhatsApp.',
        link: { href: `https://wa.me/${settings.company.whatsappNumber}`, label: 'Écrire à MIRA sur WhatsApp', external: true }
      };
    }
    const intent = [
      { pattern: /\b(formation|formations|cifea|apprendre|apprentissage|stage)\b/, category: 'Formations et CIFEA' },
      { pattern: /\b(devis|prix|tarif|commander|commande|renseignement|cout)\b/, category: 'Équipements et matériels' },
      { pattern: /\b(elevage|volaille|production|agricole|projet|ferme)\b/, category: 'Élevage et productions' },
      { pattern: /\b(entreprise|activite|mission|propos|mira|services)\b/, category: 'Présentation' }
    ].find(item => item.pattern.test(normalized));
    const stopWords = new Set(['avec', 'dans', 'elle', 'elles', 'est', 'faire', 'fait', 'comment', 'des', 'les', 'leur', 'leurs', 'nous', 'notre', 'peut', 'pour', 'quels', 'quelle', 'quelles', 'qui', 'sont', 'sur', 'vous', 'votre']);
    const queryTerms = normalized.match(/[a-z0-9]+/g).filter(term => term.length > 3 && !stopWords.has(term));
    const rankedFaq = faq.map(item => {
      const terms = `${item.category} ${item.question}`.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
        .match(/[a-z0-9]+/g).filter(term => term.length > 3 && !stopWords.has(term));
      return { item, score: queryTerms.filter(queryTerm => terms.some(term => term.includes(queryTerm) || queryTerm.includes(term))).length };
    }).sort((left, right) => right.score - left.score);
    const matchedFaq = intent
      ? faq.find(item => item.category === intent.category)
      : rankedFaq[0]?.score > 0 ? rankedFaq[0].item : null;
    if (matchedFaq) {
      const needsQuoteLink = matchedFaq.category === 'Équipements et matériels' || matchedFaq.category === 'Commandes, devis et renseignements';
      return {
        text: matchedFaq.answer,
        link: needsQuoteLink ? { href: '#demande-devis', label: 'Faire une demande de devis' } : undefined
      };
    }
    return {
      text: 'Je n’ai pas cette information dans mes réponses pour le moment. Pour une réponse personnalisée, contactez directement l’équipe MIRA.',
      link: { href: `https://wa.me/${settings.company.whatsappNumber}`, label: 'Contacter MIRA sur WhatsApp', external: true }
    };
  };

  form.addEventListener('submit', event => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message) return;
    addMessage(message, 'user');
    input.value = '';
    const reply = getReply(message);
    addMessage(reply.text, 'agent', reply.link);
  });
  $$('.agent-suggestion').forEach(button => button.addEventListener('click', () => {
    input.value = button.dataset.message;
    form.requestSubmit();
    input.focus();
  }));
};

const setupForm = () => {
  const form = $('#quote-form');
  const success = $('#form-success');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const request = Object.fromEntries(data.entries());
    sessionStorage.setItem('miraQuoteRequest', JSON.stringify(request));
    form.querySelectorAll('input, select, textarea').forEach(field => field.disabled = true);
    form.querySelector('button[type="submit"]').disabled = true;
    success.hidden = false;
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  const productParameter = new URLSearchParams(window.location.search).get('product');
  if (productParameter) {
    form.elements.subject.value = productParameter;
    document.querySelector('#demande-devis').scrollIntoView({ behavior: 'smooth' });
  }
  $$('[data-product]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const product = link.dataset.product;
    window.history.replaceState({}, '', `?product=${encodeURIComponent(product)}`);
    form.elements.subject.value = product;
    document.querySelector('#demande-devis').scrollIntoView({ behavior: 'smooth' });
  }));
};

const setupReveal = () => {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  $$('.reveal').forEach(element => observer.observe(element));
};

const setupMeta = () => {
  $('#year').textContent = new Date().getFullYear();
  document.title = `${settings.company.name} | Élevage, Agro & Formation`;
  $('meta[name="description"]').content = `${settings.company.name} : élevage, agroéquipement, fabrication d'aliments, livraison et formations professionnelles au Burkina Faso.`;
};

renderCards();
renderEquipment();
renderTabs();
renderFormations();
renderProjects();
renderGallery();
renderNews();
renderFaq();
renderTestimonials();
renderTeam();
setupTabs();
setupGallery();
setupFaq();
setupNavigation();
setupAgent();
setupForm();
setupReveal();
setupMeta();
