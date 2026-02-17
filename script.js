/* ============================================================
           TRANSLATIONS
           ============================================================ */
const TRANSLATIONS = {
  en: {
    addIncome: "Income",
    addExpense: "Expense",
    categories: "Categories",
    categoriesTitle: "Categories",
    totalBalance: "Total Balance",
    income: "Income",
    expenses: "Expenses",
    period: "Period",
    type: "Type",
    catShort: "Cat.",
    all: "All",
    day: "Day",
    week: "Week",
    month: "Month",
    transactions: "Transactions",
    expensesByCategory: "Expenses by Category",
    balanceDynamics: "Balance Dynamics",
    noExpenses: "No expenses",
    noData: "No data",
    amountAndCurrency: "Amount & Currency",
    category: "Category",
    date: "Date",
    comment: "Comment",
    newCategoryPlaceholder: "New category…",
    commentPlaceholder: "Optional…",
    namePlaceholder: "Name",
    add: "+ Add",
    addCategory: "Add Category",
    cancel: "Cancel",
    save: "Save",
    close: "Close",
    noTransactions: "No transactions found",
    modalIncomeTitle: "+ Add Income",
    modalExpenseTitle: "− Add Expense",
    txCount: (n) => `${n} records`,
    incomeCount: (n) => `${n} tx (₴)`,
    expenseCount: (n) => `${n} tx (₴)`,
    balanceSub: (n) => `${n} transactions`,
    noTxSub: "No transactions",
    rateUpdated: "rate updated",
    rateApprox: "approximate rate",
    originalCurrency: "Original",
    catIncomeLabel: "Income",
    catExpenseLabel: "Expense",
    builtinCatTitle: "Built-in category",
    ratesLoading: "Loading rates…",
    ratesLive: "LIVE",
    ratesError: "Offline",
    ratesCached: "Cached",
    // default category names
    salary: "Salary",
    gifts: "Gifts",
    incomeOther: "Other (income)",
    food: "Food",
    transport: "Transport",
    entertainment: "Entertainment",
    housing: "Housing",
    expenseOther: "Other (expense)",
  },
  uk: {
    addIncome: "Дохід",
    addExpense: "Витрата",
    categories: "Категорії",
    categoriesTitle: "Категорії",
    totalBalance: "Загальний баланс",
    income: "Доходи",
    expenses: "Витрати",
    period: "Період",
    type: "Тип",
    catShort: "Кат.",
    all: "Всі",
    day: "День",
    week: "Тиждень",
    month: "Місяць",
    transactions: "Транзакції",
    expensesByCategory: "Витрати за категоріями",
    balanceDynamics: "Динаміка балансу",
    noExpenses: "Немає витрат",
    noData: "Немає даних",
    amountAndCurrency: "Сума та валюта",
    category: "Категорія",
    date: "Дата",
    comment: "Коментар",
    newCategoryPlaceholder: "Нова категорія…",
    commentPlaceholder: "Необов’язково…",
    namePlaceholder: "Назва",
    add: "+ Додати",
    addCategory: "Додати категорію",
    cancel: "Скасувати",
    save: "Зберегти",
    close: "Закрити",
    noTransactions: "Транзакцій не знайдено",
    modalIncomeTitle: "+ Додати дохід",
    modalExpenseTitle: "− Додати витрату",
    txCount: (n) => `${n} записів`,
    incomeCount: (n) => `${n} тр. (₴)`,
    expenseCount: (n) => `${n} тр. (₴)`,
    balanceSub: (n) => `${n} транзакцій`,
    noTxSub: "Немає транзакцій",
    rateUpdated: "курс оновлено",
    rateApprox: "орієнтовний курс",
    originalCurrency: "Оригінал",
    catIncomeLabel: "Дохід",
    catExpenseLabel: "Витрата",
    builtinCatTitle: "Вбудована категорія",
    ratesLoading: "Завантаження…",
    ratesLive: "LIVE",
    ratesError: "Офлайн",
    ratesCached: "Кеш",
    salary: "Зарплата",
    gifts: "Подарунки",
    incomeOther: "Інше (доходи)",
    food: "Їжа",
    transport: "Транспорт",
    entertainment: "Розваги",
    housing: "Житло",
    expenseOther: "Інше (витрати)",
  },
  ru: {
    addIncome: "Доход",
    addExpense: "Расход",
    categories: "Категории",
    categoriesTitle: "Категории",
    totalBalance: "Общий баланс",
    income: "Доходы",
    expenses: "Расходы",
    period: "Период",
    type: "Тип",
    catShort: "Катег.",
    all: "Все",
    day: "День",
    week: "Неделя",
    month: "Месяц",
    transactions: "Транзакции",
    expensesByCategory: "Расходы по категориям",
    balanceDynamics: "Динамика баланса",
    noExpenses: "Нет расходов",
    noData: "Нет данных",
    amountAndCurrency: "Сумма и валюта",
    category: "Категория",
    date: "Дата",
    comment: "Комментарий",
    newCategoryPlaceholder: "Новая категория…",
    commentPlaceholder: "Необязательно…",
    namePlaceholder: "Название",
    add: "+ Добавить",
    addCategory: "Добавить категорию",
    cancel: "Отмена",
    save: "Сохранить",
    close: "Закрыть",
    noTransactions: "Транзакций не найдено",
    modalIncomeTitle: "+ Добавить доход",
    modalExpenseTitle: "− Добавить расход",
    txCount: (n) => `${n} записей`,
    incomeCount: (n) => `${n} тр. (₴)`,
    expenseCount: (n) => `${n} тр. (₴)`,
    balanceSub: (n) => `${n} транзакций`,
    noTxSub: "Нет транзакций",
    rateUpdated: "курс обновлён",
    rateApprox: "примерный курс",
    originalCurrency: "Оригинал",
    catIncomeLabel: "Доход",
    catExpenseLabel: "Расход",
    builtinCatTitle: "Встроенная категория",
    ratesLoading: "Загрузка курсов…",
    ratesLive: "LIVE",
    ratesError: "Офлайн",
    ratesCached: "Кэш",
    salary: "Зарплата",
    gifts: "Подарки",
    incomeOther: "Прочее (доходы)",
    food: "Еда",
    transport: "Транспорт",
    entertainment: "Развлечения",
    housing: "Жильё",
    expenseOther: "Прочее (расходы)",
  },
};

// Keys for the built-in category names (so they translate dynamically)
const BUILTIN_CAT_I18N = {
  salary: "salary",
  gifts: "gifts",
  income_other: "incomeOther",
  food: "food",
  transport: "transport",
  entertainment: "entertainment",
  housing: "housing",
  expense_other: "expenseOther",
};

function t(key) {
  const dict = TRANSLATIONS[state?.lang || "ru"];
  return dict[key] || key;
}

function applyI18n() {
  const lang = state.lang;
  document.documentElement.lang = lang;
  document.title = "Finflow";

  // data-i18n text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = TRANSLATIONS[lang][key];
    if (typeof val === "string") el.textContent = val;
  });

  // data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = TRANSLATIONS[lang][key];
    if (val) el.placeholder = val;
  });

  // mc-type options
  const mcType = document.getElementById("mc-type");
  if (mcType) {
    mcType.options[0].text = t("income");
    mcType.options[1].text = t("expenses");
  }

  // Update currency dropdowns labels
  populateCurrencyDropdowns();
}

/* ============================================================
           SVG ICON LIBRARY
           ============================================================ */
const ICONS = {
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
  gift: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  coins: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><line x1="16.71" y1="13.88" x2="13.63" y2="17"/></svg>`,
  burger: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  bus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="19" x2="8" y2="22"/><line x1="16" y1="19" x2="16" y2="22"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="8" width="20" height="8" rx="4"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  receipt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="16" y2="13"/></svg>`,
  tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  shoppingbag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  car: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  music: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  plane: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 4c-2 0-3 1-3 1L11.2 6.2 3 4 1 6l7 4-2 3 4 2 2-4z"/></svg>`,
};
const ICON_KEYS = Object.keys(ICONS);

/* ============================================================
           CURRENCIES
           ============================================================ */
const CURRENCIES = [
  { code: "UAH", symbol: "₴" },
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "PLN", symbol: "zł" },
  { code: "CHF", symbol: "Fr" },
  { code: "CZK", symbol: "Kč" },
  { code: "JPY", symbol: "¥" },
];
let exchangeRates = {
  UAH: 1,
  USD: 0.024,
  EUR: 0.022,
  GBP: 0.019,
  PLN: 0.098,
  CHF: 0.021,
  CZK: 0.56,
  JPY: 3.65,
};
let ratesLoaded = false;

/* ============================================================
           STATE & STORAGE
           ============================================================ */
const KEYS = {
  TX: "ff4_txs",
  CATS: "ff4_cats",
  THEME: "ff4_theme",
  LANG: "ff4_lang",
};

const DEFAULT_CATEGORIES = [
  {
    id: "salary",
    i18nKey: "salary",
    type: "income",
    iconKey: "briefcase",
    custom: false,
  },
  {
    id: "gifts",
    i18nKey: "gifts",
    type: "income",
    iconKey: "gift",
    custom: false,
  },
  {
    id: "income_other",
    i18nKey: "incomeOther",
    type: "income",
    iconKey: "coins",
    custom: false,
  },
  {
    id: "food",
    i18nKey: "food",
    type: "expense",
    iconKey: "burger",
    custom: false,
  },
  {
    id: "transport",
    i18nKey: "transport",
    type: "expense",
    iconKey: "bus",
    custom: false,
  },
  {
    id: "entertainment",
    i18nKey: "entertainment",
    type: "expense",
    iconKey: "gamepad",
    custom: false,
  },
  {
    id: "housing",
    i18nKey: "housing",
    type: "expense",
    iconKey: "home",
    custom: false,
  },
  {
    id: "expense_other",
    i18nKey: "expenseOther",
    type: "expense",
    iconKey: "receipt",
    custom: false,
  },
];

const CHART_COLORS = [
  "#ff6b6b",
  "#ffa94d",
  "#cc5de8",
  "#5b8cff",
  "#868e96",
  "#ff922b",
  "#20c997",
  "#74c0fc",
  "#f06595",
  "#a9e34b",
];

let state = {
  transactions: [],
  categories: [],
  filters: { period: "all", type: "all", cats: [] },
  theme: "dark",
  lang: "ru",
  currentTxType: "income",
};
let charts = { pie: null, line: null };

/* ============================================================
           HELPERS
           ============================================================ */
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function getCatById(id) {
  const c = state.categories.find((c) => c.id === id);
  if (!c) return { name: id, iconKey: "tag", type: "expense" };
  // For built-in cats, name comes from i18n
  const name = c.custom ? c.name : t(c.i18nKey);
  return { ...c, name };
}

function getCatsByType(type) {
  return state.categories.filter((c) => c.type === type);
}
function catColor(i) {
  return CHART_COLORS[i % CHART_COLORS.length];
}
function getCurrencySymbol(code) {
  return (CURRENCIES.find((c) => c.code === code) || { symbol: code }).symbol;
}

function convertAmount(amount, from, to) {
  if (from === to) return amount;
  const uah = amount / (exchangeRates[from] || 1);
  return uah * (exchangeRates[to] || 1);
}

function fmtNum(n, code) {
  const sym = getCurrencySymbol(code || "UAH");
  const abs = Math.abs(n);
  const str =
    abs >= 1e6
      ? (abs / 1e6).toFixed(1) + "M"
      : abs >= 1e4
      ? (abs / 1e3).toFixed(0) + "k"
      : abs.toLocaleString("uk-UA", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        });
  return (n < 0 ? "−" : "") + sym + str;
}

function fmtDate(ds) {
  const localeMap = { en: "en-GB", uk: "uk-UA", ru: "ru-RU" };
  return new Date(ds + "T12:00").toLocaleDateString(
    localeMap[state.lang] || "ru-RU",
    { day: "numeric", month: "short" }
  );
}

function saveTx() {
  localStorage.setItem(KEYS.TX, JSON.stringify(state.transactions));
}
function saveCats() {
  localStorage.setItem(KEYS.CATS, JSON.stringify(state.categories));
}

/* ============================================================
           INIT
           ============================================================ */
function init() {
  state.transactions = JSON.parse(localStorage.getItem(KEYS.TX) || "[]");
  const sc = localStorage.getItem(KEYS.CATS);
  state.categories = sc
    ? JSON.parse(sc)
    : DEFAULT_CATEGORIES.map((c) => ({ ...c }));
  state.theme = localStorage.getItem(KEYS.THEME) || "dark";
  state.lang = localStorage.getItem(KEYS.LANG) || "ru";

  // Wire lang buttons after JS is parsed — avoids "not defined" on inline onclick
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  applyTheme(state.theme);
  applyLangUI(state.lang);
  populateCurrencyDropdowns();
  populateIconSelects();

  // Load cached rates immediately, then fetch fresh in background
  const cached = loadCachedRates();
  if (cached) {
    applyRates(cached.rates, true);
  } else {
    setRatesStatus("loading");
  }
  fetchExchangeRates();
  startRatesTimer();

  render();
}

/* ============================================================
           LANGUAGE
           ============================================================ */
function setLang(lang) {
  state.lang = lang;
  localStorage.setItem(KEYS.LANG, lang);
  applyLangUI(lang);
  refreshRatesLabels();
  render();
}

function applyLangUI(lang) {
  // update active button
  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  state.lang = lang;
  applyI18n();
}

/* ============================================================
           THEME
           ============================================================ */
function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem(KEYS.THEME, state.theme);
  applyTheme(state.theme);
  renderCharts(getFilteredTransactions());
}
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  const path = document.getElementById("ti-path");
  path.setAttribute(
    "d",
    t === "dark"
      ? "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      : "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 5a7 7 0 1 0 0 14A7 7 0 0 0 12 5z"
  );
}

/* ============================================================
           EXCHANGE RATES — live tracking
           ============================================================ */
const RATES_CACHE_KEY = "ff4_rates_cache";
const RATES_TTL = 60 * 1000; // refresh every 60 s when tab is visible
const RATES_INTERVAL = 60 * 1000;
let ratesTimer = null;
let prevRates = {}; // for change arrows
let ratesLastUpdated = null;

// Fallback rates relative to UAH
const FALLBACK_RATES = {
  UAH: 1,
  USD: 0.024,
  EUR: 0.022,
  GBP: 0.019,
  PLN: 0.098,
  CHF: 0.021,
  CZK: 0.56,
  JPY: 3.65,
};

// Display currencies in the ticker (skip UAH — it's the base)
const TICKER_CURRENCIES = ["USD", "EUR", "GBP", "PLN", "CHF", "CZK", "JPY"];

/* ---- rate store ---- */
function loadCachedRates() {
  try {
    const raw = localStorage.getItem(RATES_CACHE_KEY);
    if (!raw) return null;
    const { rates, ts } = JSON.parse(raw);
    return { rates, ts, fresh: Date.now() - ts < RATES_TTL };
  } catch (e) {
    return null;
  }
}
function saveCachedRates(rates) {
  const ts = Date.now();
  localStorage.setItem(RATES_CACHE_KEY, JSON.stringify({ rates, ts }));
  ratesLastUpdated = ts;
}
function applyRates(rates, fromCache) {
  prevRates = { ...exchangeRates };
  exchangeRates = { UAH: 1, ...rates };
  ratesLoaded = true;
  renderRatesTicker(fromCache);
  renderCharts(getFilteredTransactions());
}

/* ---- fetch ---- */
async function fetchExchangeRates(isManual = false) {
  setRatesStatus("loading");
  try {
    // Try primary source
    const res = await fetch("https://open.er-api.com/v6/latest/UAH");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    if (!data.rates) throw new Error("No rates");
    const rates = {};
    CURRENCIES.forEach((c) => {
      if (data.rates[c.code]) rates[c.code] = data.rates[c.code];
    });
    saveCachedRates(rates);
    applyRates(rates, false);
  } catch (e) {
    // Try cache
    const cached = loadCachedRates();
    if (cached) {
      applyRates(cached.rates, true);
    } else {
      // Use hardcoded fallback
      applyRates(FALLBACK_RATES, true);
      setRatesStatus("error");
    }
  }
}

/* ---- auto-refresh loop ---- */
function startRatesTimer() {
  if (ratesTimer) clearInterval(ratesTimer);
  ratesTimer = setInterval(() => {
    if (!document.hidden) fetchExchangeRates();
  }, RATES_INTERVAL);
  // Also refresh when tab becomes visible after being hidden
  document.addEventListener(
    "visibilitychange",
    () => {
      if (!document.hidden) {
        const cached = loadCachedRates();
        if (!cached || !cached.fresh) fetchExchangeRates();
      }
    },
    { passive: true }
  );
}

function manualRefreshRates() {
  const btn = document.getElementById("rates-refresh-btn");
  btn.classList.add("spinning");
  setTimeout(() => btn.classList.remove("spinning"), 700);
  fetchExchangeRates(true);
}

/* ---- UI ---- */
function setRatesStatus(status) {
  const dot = document.getElementById("rates-dot");
  const label = document.getElementById("rates-status-label");
  dot.className = "rates-live-dot";
  if (status === "loading") {
    dot.classList.add("loading");
    label.textContent = t("ratesLoading");
  } else if (status === "error") {
    dot.classList.add("error");
    label.textContent = t("ratesError");
  }
}

function renderRatesTicker(fromCache) {
  const ticker = document.getElementById("rates-ticker");
  const dot = document.getElementById("rates-dot");
  const label = document.getElementById("rates-status-label");

  dot.className = "rates-live-dot " + (fromCache ? "" : "live");
  label.textContent = fromCache ? t("ratesCached") : t("ratesLive");

  // Time string
  const now = new Date();
  const hhmm = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Build chips — show how many UAH per 1 foreign unit
  const chips = TICKER_CURRENCIES.map((code) => {
    if (!exchangeRates[code]) return "";
    // 1 USD = ? UAH  →  1/rate_UAH_per_USD
    const ratePerUnit = 1 / exchangeRates[code]; // UAH per 1 foreign unit
    const prevRate = prevRates[code] ? 1 / prevRates[code] : ratePerUnit;
    const diff = ratePerUnit - prevRate;
    const changeClass = diff > 0.0001 ? "up" : diff < -0.0001 ? "down" : "flat";
    const arrow =
      changeClass === "up" ? "▲" : changeClass === "down" ? "▼" : "—";
    const formatted =
      ratePerUnit >= 100
        ? ratePerUnit.toFixed(0)
        : ratePerUnit >= 10
        ? ratePerUnit.toFixed(2)
        : ratePerUnit.toFixed(3);
    const sym = getCurrencySymbol(code);
    return `<div class="rate-chip" title="1 ${sym} = ${formatted} ₴">
      <span class="rate-code">${code}</span>
      <span class="rate-val">₴${formatted}</span>
      <span class="rate-change ${changeClass}">${arrow}</span>
    </div>`;
  })
    .filter(Boolean)
    .join("");

  ticker.innerHTML = chips + `<span class="rate-time">${hhmm}</span>`;
}

/* ---- update labels when language changes ---- */
function refreshRatesLabels() {
  const dot = document.getElementById("rates-dot");
  if (!dot) return;
  const label = document.getElementById("rates-status-label");
  if (ratesLoaded) {
    label.textContent = dot.classList.contains("live")
      ? t("ratesLive")
      : t("ratesCached");
  }
  const loadingEl = document.getElementById("rates-loading");
  if (loadingEl) loadingEl.textContent = t("ratesLoading");
}

/* ============================================================
           CURRENCY UI
           ============================================================ */
function populateCurrencyDropdowns() {
  const origLabel = t("originalCurrency");
  const opts = CURRENCIES.map(
    (c) => `<option value="${c.code}">${c.symbol} ${c.code}</option>`
  ).join("");
  ["pie-currency", "line-currency"].forEach((id) => {
    const sel = document.getElementById(id);
    const cur = sel.value;
    sel.innerHTML = `<option value="original">${origLabel}</option>` + opts;
    sel.value = cur || "original";
  });
  document.getElementById("f-currency").innerHTML = opts;
}

function onChartCurrencyChange() {
  renderCharts(getFilteredTransactions());
}

/* ============================================================
           ICON SELECTS
           ============================================================ */
function populateIconSelects() {
  const opts = ICON_KEYS.map((k) => `<option value="${k}">${k}</option>`).join(
    ""
  );
  document.getElementById("f-new-cat-icon-pick").innerHTML = opts;
  document.getElementById("mc-icon").innerHTML = opts;
}

function iconSvg(key, color) {
  return (ICONS[key] || ICONS.tag).replace(
    "<svg ",
    `<svg style="color:${color}" `
  );
}

/* ============================================================
           FILTERS
           ============================================================ */
function setPeriodFilter(p, el) {
  state.filters.period = p;
  document
    .querySelectorAll(".period-chip")
    .forEach((c) => c.classList.remove("active"));
  el.classList.add("active");
  render();
}

function setTypeFilter(tp, el) {
  state.filters.type = tp;
  document
    .querySelectorAll(".type-chip")
    .forEach((c) => c.classList.remove("active"));
  el.classList.add("active");
  render();
}

function toggleCatFilter(catId) {
  const i = state.filters.cats.indexOf(catId);
  if (i === -1) state.filters.cats.push(catId);
  else state.filters.cats.splice(i, 1);
  render();
}
function clearCatFilter() {
  state.filters.cats = [];
  render();
}

function getFilteredTransactions() {
  const now = new Date();
  return state.transactions.filter((tx) => {
    const d = new Date(tx.date + "T12:00");
    if (
      state.filters.period === "day" &&
      d.toDateString() !== now.toDateString()
    )
      return false;
    if (state.filters.period === "week") {
      const w = new Date(now);
      w.setDate(now.getDate() - 7);
      if (d < w) return false;
    }
    if (
      state.filters.period === "month" &&
      (d.getMonth() !== now.getMonth() || d.getFullYear() !== now.getFullYear())
    )
      return false;
    if (state.filters.type !== "all" && tx.type !== state.filters.type)
      return false;
    if (
      state.filters.cats.length > 0 &&
      !state.filters.cats.includes(tx.categoryId)
    )
      return false;
    return true;
  });
}

/* ============================================================
           RENDER
           ============================================================ */
function render() {
  const f = getFilteredTransactions();
  renderStats(f);
  renderCatChips();
  renderTransactions(f);
  renderCharts(f);
}

function renderStats(filtered) {
  const inc = filtered
    .filter((tx) => tx.type === "income")
    .reduce(
      (s, tx) => s + convertAmount(tx.amount, tx.currency || "UAH", "UAH"),
      0
    );
  const exp = filtered
    .filter((tx) => tx.type === "expense")
    .reduce(
      (s, tx) => s + convertAmount(tx.amount, tx.currency || "UAH", "UAH"),
      0
    );
  const bal = inc - exp;
  const balEl = document.getElementById("total-balance");
  balEl.textContent = fmtNum(bal, "UAH");
  balEl.className = "card-value " + (bal >= 0 ? "positive" : "negative");
  document.getElementById("total-income").textContent = fmtNum(inc, "UAH");
  document.getElementById("total-expense").textContent = fmtNum(exp, "UAH");
  const iC = filtered.filter((tx) => tx.type === "income").length;
  const eC = filtered.filter((tx) => tx.type === "expense").length;
  document.getElementById("income-count").textContent = t("incomeCount")(iC);
  document.getElementById("expense-count").textContent = t("expenseCount")(eC);
  document.getElementById("balance-sub").textContent =
    filtered.length > 0 ? t("balanceSub")(filtered.length) : t("noTxSub");
}

function renderCatChips() {
  const wrap = document.getElementById("cat-filter-chips");
  const allActive = state.filters.cats.length === 0;
  let h = `<button class="chip all-chip${
    allActive ? " active" : ""
  }" onclick="clearCatFilter()">${t("all")}</button>`;
  state.categories.forEach((cat) => {
    const catName = cat.custom ? cat.name : t(cat.i18nKey);
    const isActive = state.filters.cats.includes(cat.id);
    const ac = isActive
      ? cat.type === "income"
        ? " active-income"
        : " active-expense"
      : "";
    h += `<button class="chip cat-chip${ac}" onclick="toggleCatFilter('${cat.id}')">${catName}</button>`;
  });
  wrap.innerHTML = h;
}

function renderTransactions(filtered) {
  const list = document.getElementById("tx-list");
  document.getElementById("tx-count-badge").textContent = t("txCount")(
    filtered.length
  );
  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">${
      ICONS.tag
    }</div>${t("noTransactions")}</div>`;
    return;
  }
  list.innerHTML = filtered
    .map((tx) => {
      const cat = getCatById(tx.categoryId);
      const isInc = tx.type === "income";
      const bg = isInc ? "var(--green-bg)" : "var(--red-bg)";
      const clr = isInc ? "var(--green)" : "var(--red)";
      const cur = tx.currency || "UAH";
      const sym = getCurrencySymbol(cur);
      const sign = isInc ? "+" : "−";
      return `<div class="tx-item" data-id="${tx.id}">
      <div class="tx-icon" style="background:${bg}">${iconSvg(
        cat.iconKey || "tag",
        clr
      )}</div>
      <div class="tx-info">
        <div class="tx-category">${cat.name}</div>
        <div class="tx-meta">
          <span>${fmtDate(tx.date)}</span>
          <span class="tx-currency-badge">${cur}</span>
          ${tx.comment ? `<span>· ${tx.comment}</span>` : ""}
        </div>
      </div>
      <div class="tx-amount ${isInc ? "inc" : "exp"}">${sign}${sym}${Number(
        tx.amount
      ).toLocaleString("uk-UA", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })}</div>
      <button class="tx-delete" onclick="deleteTx('${
        tx.id
      }')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    </div>`;
    })
    .join("");
}

/* ============================================================
           TRANSACTIONS CRUD
           ============================================================ */
function saveTransaction(e) {
  e.preventDefault();
  const tx = {
    id: uid(),
    type: state.currentTxType,
    amount: parseFloat(document.getElementById("f-amount").value),
    currency: document.getElementById("f-currency").value,
    categoryId: document.getElementById("f-category").value,
    date: document.getElementById("f-date").value,
    comment: document.getElementById("f-comment").value.trim(),
  };
  state.transactions.unshift(tx);
  saveTx();
  closeTxModal();
  render();
}

function deleteTx(id) {
  const el = document.querySelector(`[data-id="${id}"]`);
  if (el) {
    el.classList.add("removing");
    setTimeout(() => {
      state.transactions = state.transactions.filter((tx) => tx.id !== id);
      saveTx();
      render();
    }, 260);
  }
}

/* ============================================================
           TX MODAL
           ============================================================ */
function openTxModal(type) {
  state.currentTxType = type;
  const isInc = type === "income";
  document.getElementById("tx-modal-title").textContent = isInc
    ? t("modalIncomeTitle")
    : t("modalExpenseTitle");
  document.getElementById("tx-modal-title").className = "modal-title " + type;
  const amtEl = document.getElementById("f-amount");
  amtEl.className = `form-input amount-input ${type}`;
  amtEl.value = "";
  document.getElementById("f-currency").value = "UAH";
  populateCategorySelect(type);
  document.getElementById("f-date").value = new Date()
    .toISOString()
    .split("T")[0];
  document.getElementById("f-comment").value = "";
  document.getElementById("f-new-cat-name").value = "";
  document.getElementById("tx-modal").classList.add("open");
  setTimeout(() => amtEl.focus(), 180);
}
function closeTxModal() {
  document.getElementById("tx-modal").classList.remove("open");
}

function populateCategorySelect(type) {
  document.getElementById("f-category").innerHTML = getCatsByType(type)
    .map(
      (c) =>
        `<option value="${c.id}">${c.custom ? c.name : t(c.i18nKey)}</option>`
    )
    .join("");
}

function addCatFromForm() {
  const name = document.getElementById("f-new-cat-name").value.trim();
  const iconKey = document.getElementById("f-new-cat-icon-pick").value || "tag";
  if (!name) return;
  const cat = {
    id: uid(),
    name,
    iconKey,
    type: state.currentTxType,
    custom: true,
  };
  state.categories.push(cat);
  saveCats();
  document.getElementById("f-new-cat-name").value = "";
  populateCategorySelect(state.currentTxType);
  document.getElementById("f-category").value = cat.id;
  renderCatChips();
}

/* ============================================================
           MANAGE CATEGORIES MODAL
           ============================================================ */
function openManageCatsModal() {
  renderCatManager();
  document.getElementById("manage-cats-modal").classList.add("open");
}
function closeManageCatsModal() {
  document.getElementById("manage-cats-modal").classList.remove("open");
  render();
}

function renderCatManager() {
  const list = document.getElementById("cat-list");
  if (!state.categories.length) {
    list.innerHTML = `<p style="text-align:center;color:var(--text-muted);padding:16px;font-size:.85rem">${t(
      "noData"
    )}</p>`;
    return;
  }
  list.innerHTML = state.categories
    .map((cat) => {
      const catName = cat.custom ? cat.name : t(cat.i18nKey);
      const clr = cat.type === "income" ? "var(--green)" : "var(--red)";
      const bg = cat.type === "income" ? "var(--green-bg)" : "var(--red-bg)";
      const typeLabel =
        cat.type === "income" ? t("catIncomeLabel") : t("catExpenseLabel");
      return `<div class="cat-row">
      <div class="cat-icon-box" style="background:${bg}">${iconSvg(
        cat.iconKey || "tag",
        clr
      )}</div>
      <span class="cat-row-name">${catName}</span>
      <span class="cat-row-type ${cat.type}">${typeLabel}</span>
      <button class="cat-row-del" onclick="deleteCat('${cat.id}')" ${
        cat.custom ? "" : `disabled title="${t("builtinCatTitle")}"`
      }>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>`;
    })
    .join("");
}

function addCatFromManager() {
  const name = document.getElementById("mc-name").value.trim();
  const iconKey = document.getElementById("mc-icon").value || "tag";
  const type = document.getElementById("mc-type").value;
  if (!name) return;
  state.categories.push({ id: uid(), name, iconKey, type, custom: true });
  saveCats();
  document.getElementById("mc-name").value = "";
  renderCatManager();
}

function deleteCat(id) {
  state.categories = state.categories.filter((c) => c.id !== id);
  saveCats();
  state.filters.cats = state.filters.cats.filter((cid) => cid !== id);
  renderCatManager();
}

/* ============================================================
           CHARTS
           ============================================================ */
function getChartMeta() {
  const dark = state.theme === "dark";
  return {
    grid: dark ? "rgba(255,255,255,.05)" : "rgba(0,0,0,.07)",
    tick: dark ? "#6b7280" : "#9ca3af",
    leg: dark ? "#9ba3b2" : "#6b7280",
  };
}

function renderCharts(filtered) {
  renderPieChart(filtered);
  renderLineChart(filtered);
}

function renderPieChart(filtered) {
  const targetCur = document.getElementById("pie-currency").value;
  const byCategory = {};
  filtered
    .filter((tx) => tx.type === "expense")
    .forEach((tx) => {
      const amt =
        targetCur === "original"
          ? tx.amount
          : convertAmount(tx.amount, tx.currency || "UAH", targetCur);
      byCategory[tx.categoryId] = (byCategory[tx.categoryId] || 0) + amt;
    });
  const ids = Object.keys(byCategory);
  const values = ids.map((id) => +byCategory[id].toFixed(2));
  const labels = ids.map((id) => getCatById(id).name);
  const colors = ids.map((_, i) => catColor(i));
  const sym = targetCur === "original" ? "" : getCurrencySymbol(targetCur);
  const pieEmpty = document.getElementById("pie-empty");
  const canvas = document.getElementById("pie-chart");
  document.getElementById("pie-rate-note").textContent =
    targetCur !== "original"
      ? ratesLoaded
        ? t("rateUpdated")
        : t("rateApprox")
      : "";
  pieEmpty.textContent = t("noExpenses");
  if (!ids.length) {
    canvas.style.display = "none";
    pieEmpty.style.display = "block";
    if (charts.pie) {
      charts.pie.destroy();
      charts.pie = null;
    }
    return;
  }
  canvas.style.display = "block";
  pieEmpty.style.display = "none";
  const m = getChartMeta();
  const cfg = {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: colors,
          borderWidth: 0,
          hoverOffset: 6,
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "58%",
      animation: { duration: 400 },
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: m.leg,
            font: { family: "DM Sans", size: 11 },
            padding: 11,
            boxWidth: 11,
          },
        },
        tooltip: {
          callbacks: {
            label: (ctx) =>
              ` ${ctx.label}: ${sym}${ctx.raw.toLocaleString("uk-UA", {
                maximumFractionDigits: 2,
              })}`,
          },
        },
      },
    },
  };
  if (charts.pie) {
    charts.pie.data = cfg.data;
    charts.pie.options.plugins.legend.labels.color = m.leg;
    charts.pie.update();
  } else charts.pie = new Chart(canvas.getContext("2d"), cfg);
}

function renderLineChart(filtered) {
  const targetCur = document.getElementById("line-currency").value;
  const sorted = [...filtered].sort((a, b) => a.date.localeCompare(b.date));
  const dateMap = {};
  sorted.forEach((tx) => {
    const amt =
      targetCur === "original"
        ? tx.type === "income"
          ? tx.amount
          : -tx.amount
        : convertAmount(tx.amount, tx.currency || "UAH", targetCur) *
          (tx.type === "income" ? 1 : -1);
    dateMap[tx.date] = (dateMap[tx.date] || 0) + amt;
  });
  let running = 0;
  const labels = [],
    values = [];
  Object.entries(dateMap).forEach(([date, delta]) => {
    running += delta;
    labels.push(fmtDate(date));
    values.push(+running.toFixed(2));
  });
  const sym = targetCur === "original" ? "₴" : getCurrencySymbol(targetCur);
  const lineEmpty = document.getElementById("line-empty");
  const canvas = document.getElementById("line-chart");
  document.getElementById("line-rate-note").textContent =
    targetCur !== "original"
      ? ratesLoaded
        ? t("rateUpdated")
        : t("rateApprox")
      : "";
  lineEmpty.textContent = t("noData");
  if (!labels.length) {
    canvas.style.display = "none";
    lineEmpty.style.display = "block";
    if (charts.line) {
      charts.line.destroy();
      charts.line = null;
    }
    return;
  }
  canvas.style.display = "block";
  lineEmpty.style.display = "none";
  const ctx = canvas.getContext("2d");
  const m = getChartMeta();
  const grad = ctx.createLinearGradient(0, 0, 0, 160);
  grad.addColorStop(0, "rgba(91,140,255,.28)");
  grad.addColorStop(1, "rgba(91,140,255,0)");
  const cfg = {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          data: values,
          borderColor: "#5b8cff",
          backgroundColor: grad,
          borderWidth: 2,
          pointRadius: values.length > 20 ? 0 : 3,
          pointBackgroundColor: "#5b8cff",
          fill: true,
          tension: 0.42,
        },
      ],
    },
    options: {
      responsive: true,
      animation: { duration: 400 },
      plugins: { legend: { display: false } },
      scales: {
        x: {
          ticks: { color: m.tick, font: { size: 10 } },
          grid: { color: m.grid },
        },
        y: {
          ticks: {
            color: m.tick,
            font: { size: 10 },
            callback: (v) => {
              const a = Math.abs(v);
              const s = a >= 1000 ? (a / 1000).toFixed(0) + "k" : a;
              return sym + (v < 0 ? "-" : "") + s;
            },
          },
          grid: { color: m.grid },
        },
      },
    },
  };
  if (charts.line) {
    charts.line.data = cfg.data;
    ["x", "y"].forEach((ax) => {
      charts.line.options.scales[ax].ticks.color = m.tick;
      charts.line.options.scales[ax].grid.color = m.grid;
    });
    charts.line.update();
  } else charts.line = new Chart(ctx, cfg);
}

/* ============================================================
           CSV EXPORT
           ============================================================ */
function exportCSV() {
  const f = getFilteredTransactions();
  if (!f.length) {
    alert(t("noData"));
    return;
  }
  const header = [
    "ID",
    t("type"),
    t("amountAndCurrency"),
    t("category"),
    t("date"),
    t("comment"),
  ];
  const rows = f.map((tx) => {
    const cat = getCatById(tx.categoryId);
    return [
      tx.id,
      tx.type === "income" ? t("income") : t("expenses"),
      tx.amount,
      tx.currency || "UAH",
      cat.name,
      tx.date,
      `"${(tx.comment || "").replace(/"/g, '""')}"`,
    ];
  });
  const csv = [header, ...rows].map((r) => r.join(",")).join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `finflow_${new Date().toISOString().split("T")[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

/* ============================================================
           MODAL HELPERS
           ============================================================ */
function overlayClick(e, id) {
  if (e.target === document.getElementById(id)) {
    if (id === "tx-modal") closeTxModal();
    else closeManageCatsModal();
  }
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeTxModal();
    closeManageCatsModal();
  }
});

/* ============================================================
           BOOT
           ============================================================ */
init();
