const translations = {
  en: {
    nav_projects: 'Projects', nav_approach: 'Approach', nav_stack: 'Stack', nav_contact: 'Contact',
    hero_kicker: 'Portfolio / Builder Profile',
    hero_title: 'I build useful digital systems — fast, practical, and real.',
    hero_text: 'Telegram tools, dashboards, mini-CRM systems, monitoring interfaces, parsers, and experimental products that move from idea to working software without wasting months.',
    hero_btn_github: 'Open GitHub', hero_btn_projects: 'View selected work',
    stat_1: 'Bots, parsers, automation, workflow tools', stat_2: 'Dashboards, mini-CRM, admin panels', stat_3: 'IoT, monitoring, weird useful systems',
    feature_kicker: 'Featured direction',
    feature_title: 'Practical tools for real workflows.',
    feature_text: 'I’m most interested in software that people can actually use: lead collection bots, internal business tools, data parsers, dashboards, and hardware-connected interfaces.',
    feature_item_1: 'Rapid prototyping with real use cases', feature_item_2: 'Product thinking over feature bloat', feature_item_3: 'Small systems with clear value',
    projects_kicker: 'Selected projects', projects_title: 'A few things that represent how I build',
    featured_label: 'Featured project',
    featured_text: 'Telegram bot with admin panel for collecting and managing furniture reupholstery leads. Built around a real business flow: intake, photos, contact details, manager notifications, and lightweight operations.',
    project_1: 'Role-based CRM for order intake, logistics, workshop flow, and delivery tracking.',
    project_2: 'Windows utility for exporting Telegram channel history into a portable static HTML archive.',
    project_3: 'ESP8266-based monitoring system with dashboard, history, charts, and API endpoints.',
    project_4: 'Telegram transaction parser with balance tracking and a lightweight personal finance interface.',
    project_5: 'Finance tracker built around Telegram parsing, local storage, and small browser UI.',
    project_6: 'Experimental AI assistant interface with a visual, glass-style UI direction.',
    approach_kicker: 'Approach',
    approach_title: 'I prefer shipping useful things over talking about perfect systems.',
    approach_text_1: 'My work usually starts with a concrete problem: collecting leads, tracking operations, parsing messages, monitoring something physical, or building a tool that saves time.',
    approach_text_2: 'I like systems that are small enough to move fast, but real enough to be useful. That means practical architecture, clear workflows, and quick iteration instead of endless planning.',
    stack_kicker: 'Stack', stack_title: 'Tools I actually use', stack_group_1: 'Languages', stack_group_2: 'Frameworks', stack_group_3: 'Focus areas',
    contact_kicker: 'Contact', contact_title: 'If the problem is real, I’m interested.', contact_text: 'Right now the cleanest entry point is GitHub. Later this section can include Telegram, email, project links, or a simple contact form.',
    footer_text: 'Built as a practical portfolio, not a template clone.'
  },
  ru: {
    nav_projects: 'Проекты', nav_approach: 'Подход', nav_stack: 'Стек', nav_contact: 'Контакт',
    hero_kicker: 'Портфолио / профиль builder-а',
    hero_title: 'Я собираю полезные цифровые системы — быстро, прикладно и по делу.',
    hero_text: 'Telegram-инструменты, дашборды, mini-CRM, системы мониторинга, парсеры и экспериментальные продукты, которые быстро проходят путь от идеи до рабочего софта.',
    hero_btn_github: 'Открыть GitHub', hero_btn_projects: 'Смотреть избранное',
    stat_1: 'Боты, парсеры, автоматизация, workflow-инструменты', stat_2: 'Дашборды, mini-CRM, админки', stat_3: 'IoT, мониторинг и странные, но полезные системы',
    feature_kicker: 'Ключевое направление',
    feature_title: 'Практичные инструменты для реальных сценариев.',
    feature_text: 'Больше всего мне интересен софт, которым реально пользуются: боты для заявок, внутренние бизнес-инструменты, парсеры, дашборды и интерфейсы, связанные с железом.',
    feature_item_1: 'Быстрое прототипирование под реальную задачу', feature_item_2: 'Продуктовое мышление вместо раздувания фич', feature_item_3: 'Небольшие системы с понятной ценностью',
    projects_kicker: 'Избранные проекты', projects_title: 'Несколько проектов, по которым понятен мой стиль работы',
    featured_label: 'Флагманский проект',
    featured_text: 'Telegram-бот с админкой для сбора и обработки заявок на перетяжку мебели. Построен вокруг реального бизнес-флоу: заявка, фото, контакты, уведомления менеджеру и лёгкая операционка.',
    project_1: 'CRM с ролями для приёма заказов, логистики, работы мастерской и отслеживания доставки.',
    project_2: 'Windows-утилита для экспорта истории Telegram-канала в переносимый статический HTML-архив.',
    project_3: 'Система мониторинга на ESP8266 с дашбордом, историей, графиками и API.',
    project_4: 'Парсер Telegram-транзакций с учётом баланса и лёгким интерфейсом для личных финансов.',
    project_5: 'Финансовый трекер на базе Telegram-парсинга, локального хранения и маленького web UI.',
    project_6: 'Экспериментальный интерфейс AI-ассистента с визуальным glass-style направлением.',
    approach_kicker: 'Подход',
    approach_title: 'Мне ближе выпускать полезные штуки, чем бесконечно говорить об идеальной архитектуре.',
    approach_text_1: 'Обычно работа начинается с конкретной задачи: собрать лиды, отслеживать процессы, парсить сообщения, мониторить что-то физическое или сделать инструмент, который экономит время.',
    approach_text_2: 'Мне нравятся системы, которые достаточно маленькие, чтобы двигаться быстро, и достаточно реальные, чтобы приносить пользу. Поэтому я выбираю практичную архитектуру, понятные workflow и быстрые итерации вместо бесконечного планирования.',
    stack_kicker: 'Стек', stack_title: 'Инструменты, которыми я реально пользуюсь', stack_group_1: 'Языки', stack_group_2: 'Фреймворки', stack_group_3: 'Фокус',
    contact_kicker: 'Контакт', contact_title: 'Если задача реальная — мне это интересно.', contact_text: 'Сейчас самая чистая точка входа — GitHub. Позже сюда можно добавить Telegram, email, ссылки на проекты или простую форму связи.',
    footer_text: 'Сделано как практичное портфолио, а не шаблонная копия.'
  },
  hy: {
    nav_projects: 'Նախագծեր', nav_approach: 'Մոտեցում', nav_stack: 'Ստեկ', nav_contact: 'Կապ',
    hero_kicker: 'Պորտֆոլիո / builder-ի պրոֆիլ',
    hero_title: 'Ես ստեղծում եմ օգտակար թվային համակարգեր՝ արագ, գործնական և իրական։',
    hero_text: 'Telegram գործիքներ, dashboard-ներ, mini-CRM համակարգեր, monitoring interface-ներ, parser-ներ և փորձարարական պրոդուկտներ, որոնք արագ անցնում են գաղափարից մինչև աշխատող software։',
    hero_btn_github: 'Բացել GitHub-ը', hero_btn_projects: 'Տեսնել ընտրված նախագծերը',
    stat_1: 'Բոտեր, parser-ներ, ավտոմատացում, workflow գործիքներ', stat_2: 'Dashboard-ներ, mini-CRM, admin panel-ներ', stat_3: 'IoT, monitoring և strange-but-useful systems',
    feature_kicker: 'Հիմնական ուղղություն',
    feature_title: 'Գործնական գործիքներ իրական workflow-ների համար։',
    feature_text: 'Ամենաշատը ինձ հետաքրքրում է software-ը, որը մարդիկ կարող են իրականում օգտագործել՝ lead collection bot-եր, ներքին business tool-եր, parser-ներ, dashboard-ներ և hardware-ի հետ կապված interface-ներ։',
    feature_item_1: 'Արագ պրոտոտիպավորում իրական use case-երով', feature_item_2: 'Product thinking՝ feature bloat-ի փոխարեն', feature_item_3: 'Փոքր համակարգեր՝ հստակ արժեքով',
    projects_kicker: 'Ընտրված նախագծեր', projects_title: 'Մի քանի նախագիծ, որոնք բացատրում են ինչպես եմ կառուցում',
    featured_label: 'Գլխավոր նախագիծ',
    featured_text: 'Telegram բոտ + admin panel՝ կահույքի վերապատման հայտերի հավաքման և կառավարման համար։ Կառուցված է իրական բիզնես workflow-ի շուրջ՝ intake, photos, contact details, manager notifications և թեթև operations։',
    project_1: 'Դերային CRM՝ պատվերների intake, logistics, workshop workflow և delivery tracking-ի համար։',
    project_2: 'Windows utility՝ Telegram channel history-ը portable static HTML archive-ի վերածելու համար։',
    project_3: 'ESP8266-based monitoring system՝ dashboard-ով, history-ով, charts-ով և API endpoint-ներով։',
    project_4: 'Telegram transaction parser՝ balance tracking-ով և lightweight personal finance interface-ով։',
    project_5: 'Finance tracker՝ Telegram parsing-ի, local storage-ի և փոքր browser UI-ի հիման վրա։',
    project_6: 'Փորձարարական AI assistant interface՝ visual glass-style ուղղությամբ։',
    approach_kicker: 'Մոտեցում',
    approach_title: 'Ես նախընտրում եմ օգտակար բաներ թողարկել, ոչ թե անընդհատ խոսել կատարյալ համակարգերի մասին։',
    approach_text_1: 'Իմ աշխատանքը սովորաբար սկսվում է կոնկրետ խնդրից՝ հավաքել lead-եր, հետևել operations-ին, parse անել messages, monitor անել ինչ-որ ֆիզիկական բան կամ ստեղծել գործիք, որը խնայում է ժամանակ։',
    approach_text_2: 'Ինձ դուր են գալիս համակարգեր, որոնք բավական փոքր են արագ շարժվելու համար, բայց բավական իրական՝ օգտակար լինելու համար։ Այսինքն՝ practical architecture, clear workflows և արագ iteration՝ endless planning-ի փոխարեն։',
    stack_kicker: 'Ստեկ', stack_title: 'Գործիքներ, որոնք ես իրականում օգտագործում եմ', stack_group_1: 'Լեզուներ', stack_group_2: 'Ֆրեյմվորքներ', stack_group_3: 'Ֆոկուս ոլորտներ',
    contact_kicker: 'Կապ', contact_title: 'Եթե խնդիրը իրական է, ինձ հետաքրքիր է։', contact_text: 'Այս պահին ամենամաքուր entry point-ը GitHub-ն է։ Հետագայում այստեղ կարելի է ավելացնել Telegram, email, project links կամ simple contact form։',
    footer_text: 'Սա կառուցված է որպես գործնական պորտֆոլիո, ոչ թե template clone։'
  }
};
const html = document.documentElement;
const buttons = document.querySelectorAll('[data-lang-btn]');
document.getElementById('year').textContent = new Date().getFullYear();
function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  buttons.forEach((btn) => btn.classList.toggle('active', btn.dataset.langBtn === lang));
  html.lang = lang;
  localStorage.setItem('site-lang', lang);
}
buttons.forEach((btn) => btn.addEventListener('click', () => setLanguage(btn.dataset.langBtn)));
setLanguage(localStorage.getItem('site-lang') || 'en');
