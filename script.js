const reservations = [
  {
    room: "103",
    type: "2 os.",
    guest: "Michał Nowak",
    companions: ["Katarzyna Nowak"],
    id: "#62768",
    note: "Śniadanie 7:30, parking A5",
    status: "Oczekujące",
    arrival: "2.11.2026",
    arrivalNote: "Dzisiaj",
    departure: "22.05.2026",
    departureNote: "za 4 dni",
    nights: 3,
    price: "500 zł",
    total: "1 500 zł",
    payment: "Karta",
    roomState: "occupied",
    period: "current",
    action: "Zamelduj",
    mine: true,
  },
  {
    room: "104",
    type: "2 os.",
    guest: "Ewa Wiśniewska",
    companions: [],
    id: "#62796",
    note: "",
    status: "W hotelu",
    arrival: "10.07.2026",
    departure: "01.06.2026",
    nights: 2,
    price: "550 zł",
    total: "1 100 zł",
    payment: "Przelew",
    roomState: "occupied",
    period: "current",
    action: "Szczegóły",
    mine: true,
  },
  {
    room: "105",
    type: "2 os.",
    guest: "Janusz Zieliński",
    companions: ["Anna Zielińska"],
    id: "#62797",
    note: "Do 14:00",
    status: "W hotelu",
    arrival: "05.08.2026",
    departure: "15.07.2026",
    nights: 5,
    price: "1 100 zł",
    total: "1 350 zł",
    payment: "Gotówka",
    roomState: "occupied",
    period: "current",
    action: "Szczegóły",
    mine: false,
  },
  {
    room: "106",
    type: "2 os.",
    guest: "–",
    id: "",
    note: "",
    status: "Wolne",
    arrival: "–",
    departure: "–",
    nights: "–",
    price: "750 zł",
    total: "–",
    payment: "",
    roomState: "free",
    action: "Zarezerwuj",
    mine: true,
  },
  {
    room: "107",
    type: "2 os.",
    guest: "Tomasz Lewandowski",
    companions: ["Maja Lewandowska"],
    id: "#62789",
    note: "",
    status: "W hotelu",
    arrival: "30.10.2026",
    departure: "20.09.2026",
    nights: 6,
    price: "250 zł",
    total: "1 600 zł",
    payment: "Przelew",
    roomState: "occupied",
    period: "current",
    action: "Szczegóły",
    mine: true,
  },
  {
    room: "108",
    type: "Studio",
    guest: "–",
    id: "",
    note: "",
    status: "Inne",
    arrival: "–",
    departure: "–",
    nights: "–",
    price: "750 zł",
    total: "–",
    payment: "",
    roomState: "other",
    action: "Zarezerwuj",
    mine: false,
  },
  {
    room: "109",
    type: "2 os.",
    guest: "Paweł Kaczmarek",
    companions: ["Natalia Kaczmarek"],
    id: "#62791",
    note: "",
    status: "Oczekujące",
    arrival: "18.12.2026",
    departure: "05.11.2026",
    nights: 2,
    price: "550 zł",
    total: "1 100 zł",
    payment: "Karta",
    roomState: "other",
    period: "future",
    action: "Szczegóły",
    mine: true,
  },
  {
    room: "110",
    type: "2 os.",
    guest: "Monika Wójcik",
    companions: ["Adam Wójcik", "Zofia Wójcik"],
    id: "#62792",
    note: "Śniadanie 7:30, parking A5",
    status: "Anulowano",
    arrival: "22.01.2027",
    departure: "10.12.2026",
    nights: 3,
    price: "380 zł",
    total: "1 150 zł",
    payment: "Przelew",
    roomState: "other",
    period: "future",
    action: "Szczegóły",
    mine: false,
  },
];

const reservationGuestData = {
  "#62768": {
    firstName: "Michał",
    lastName: "Nowak",
    location: "Kraków, Polska",
    phone: "+48 501 234 567",
    email: "michal.nowak@example.com",
  },
  "#62796": {
    firstName: "Ewa",
    lastName: "Wiśniewska",
    location: "Poznań, Polska",
    phone: "+48 602 345 678",
    email: "ewa.wisniewska@example.com",
  },
  "#62797": {
    firstName: "Janusz",
    lastName: "Zieliński",
    location: "Gdańsk, Polska",
    phone: "+48 603 456 789",
    email: "janusz.zielinski@example.com",
  },
  "#62789": {
    firstName: "Tomasz",
    lastName: "Lewandowski",
    location: "Wrocław, Polska",
    phone: "+48 604 567 890",
    email: "tomasz.lewandowski@example.com",
  },
  "#62791": {
    firstName: "Paweł",
    lastName: "Kaczmarek",
    location: "Łódź, Polska",
    phone: "+48 605 678 901",
    email: "pawel.kaczmarek@example.com",
  },
  "#62792": {
    firstName: "Monika",
    lastName: "Wójcik",
    location: "Warszawa, Polska",
    phone: "+48 606 789 012",
    email: "monika.wojcik@example.com",
  },
};

const rooms = [
  {
    number: "101",
    type: "Standard",
    capacity: "2 osoby",
    beds: "1 łóżko podwójne",
    floor: "1. piętro",
    price: "500 zł",
    state: "free",
    status: "Wolny",
  },
  {
    number: "102",
    type: "Standard",
    capacity: "1 osoba",
    beds: "1 łóżko pojedyncze",
    floor: "1. piętro",
    price: "390 zł",
    state: "occupied",
    status: "Zajęty",
  },
  {
    number: "103",
    type: "Standard",
    capacity: "2 osoby",
    beds: "1 łóżko podwójne",
    floor: "1. piętro",
    price: "500 zł",
    state: "occupied",
    status: "Zajęty",
  },
  {
    number: "104",
    type: "Standard",
    capacity: "2 osoby",
    beds: "2 łóżka pojedyncze",
    floor: "1. piętro",
    price: "550 zł",
    state: "occupied",
    status: "Zajęty",
  },
  {
    number: "105",
    type: "Superior",
    capacity: "2 osoby",
    beds: "1 łóżko king size",
    floor: "1. piętro",
    price: "1 100 zł",
    state: "occupied",
    status: "Zajęty",
  },
  {
    number: "106",
    type: "Standard",
    capacity: "2 osoby",
    beds: "1 łóżko podwójne",
    floor: "1. piętro",
    price: "750 zł",
    state: "free",
    status: "Wolny",
  },
  {
    number: "107",
    type: "Standard",
    capacity: "2 osoby",
    beds: "2 łóżka pojedyncze",
    floor: "2. piętro",
    price: "250 zł",
    state: "occupied",
    status: "Zajęty",
  },
  {
    number: "108",
    type: "Studio",
    capacity: "3 osoby",
    beds: "1 łóżko + sofa",
    floor: "2. piętro",
    price: "750 zł",
    state: "other",
    status: "Sprzątanie",
  },
  {
    number: "109",
    type: "Standard",
    capacity: "2 osoby",
    beds: "1 łóżko podwójne",
    floor: "2. piętro",
    price: "550 zł",
    state: "other",
    status: "Do inspekcji",
  },
  {
    number: "110",
    type: "Standard",
    capacity: "2 osoby",
    beds: "2 łóżka pojedyncze",
    floor: "2. piętro",
    price: "380 zł",
    state: "other",
    status: "Wyłączony",
  },
  {
    number: "111",
    type: "Deluxe",
    capacity: "2 osoby",
    beds: "1 łóżko king size",
    floor: "2. piętro",
    price: "890 zł",
    state: "free",
    status: "Wolny",
  },
  {
    number: "112",
    type: "Standard Plus",
    capacity: "2 osoby",
    beds: "1 łóżko podwójne",
    floor: "2. piętro",
    price: "620 zł",
    state: "free",
    status: "Wolny",
    reservedFrom: "12.11.2026",
  },
  {
    number: "201",
    type: "Apartament",
    capacity: "4 osoby",
    beds: "2 łóżka + sofa",
    floor: "3. piętro",
    price: "1 450 zł",
    state: "free",
    status: "Wolny",
  },
  {
    number: "202",
    type: "Apartament Deluxe",
    capacity: "4 osoby",
    beds: "2 łóżka + sofa",
    floor: "3. piętro",
    price: "1 550 zł",
    state: "free",
    status: "Wolny",
    reservedFrom: "05.11.2026",
  },
];

const roomDetails = {
  101: { area: 22, amenities: ["Balkon", "Wi‑Fi", "Klimatyzacja"] },
  102: { area: 18, amenities: ["Wi‑Fi", "Biurko"] },
  103: { area: 24, amenities: ["Balkon", "Parking", "Wi‑Fi"] },
  104: { area: 23, amenities: ["Widok na ogród", "Wi‑Fi"] },
  105: { area: 31, amenities: ["Balkon", "Minibar", "Klimatyzacja"] },
  106: { area: 25, amenities: ["Balkon", "Wi‑Fi", "Parking"] },
  107: { area: 20, amenities: ["Wi‑Fi", "TV"] },
  108: { area: 34, amenities: ["Aneks kuchenny", "Sofa", "Klimatyzacja"] },
  109: { area: 23, amenities: ["Wi‑Fi", "Widok na miasto"] },
  110: { area: 21, amenities: ["Wi‑Fi"] },
  111: { area: 30, amenities: ["Balkon", "Minibar", "Klimatyzacja"] },
  112: { area: 26, amenities: ["Balkon", "Wi‑Fi", "Ekspres do kawy"] },
  201: {
    area: 45,
    amenities: ["Aneks kuchenny", "Balkon", "Widok na ogród", "Zmywarka"],
  },
  202: {
    area: 52,
    amenities: [
      "Aneks kuchenny",
      "Taras",
      "Widok na miasto",
      "Ekspres do kawy",
    ],
  },
};

const roomBookings = {
  101: [
    {
      start: "2026-11-12",
      end: "2026-11-15",
      guest: "Anna Kowalska",
      id: "#62820",
    },
    {
      start: "2026-11-24",
      end: "2026-11-28",
      guest: "Robert Mazur",
      id: "#62841",
    },
  ],
  102: [
    {
      start: "2026-11-03",
      end: "2026-11-08",
      guest: "Karol Król",
      id: "#62813",
    },
  ],
  103: [
    {
      start: "2026-11-08",
      end: "2026-11-11",
      guest: "Marta Lis",
      id: "#62818",
    },
  ],
  104: [
    {
      start: "2026-11-16",
      end: "2026-11-20",
      guest: "Igor Wrona",
      id: "#62831",
    },
  ],
  105: [
    {
      start: "2026-11-10",
      end: "2026-11-14",
      guest: "Julia Zając",
      id: "#62825",
    },
  ],
  106: [
    {
      start: "2026-11-18",
      end: "2026-11-21",
      guest: "Piotr Kania",
      id: "#62835",
    },
  ],
  107: [
    {
      start: "2026-11-05",
      end: "2026-11-09",
      guest: "Maria Gajda",
      id: "#62815",
    },
  ],
  108: [],
  109: [],
  110: [],
  111: [
    {
      start: "2026-11-20",
      end: "2026-11-23",
      guest: "Adam Polak",
      id: "#62837",
    },
  ],
  112: [
    {
      start: "2026-11-12",
      end: "2026-11-16",
      guest: "Eliza Sowa",
      id: "#62827",
    },
  ],
  201: [
    { start: "2026-11-06", end: "2026-11-10", guest: "Ola Maj", id: "#62816" },
  ],
  202: [
    { start: "2026-11-05", end: "2026-11-09", guest: "Jan Kot", id: "#62814" },
  ],
};

const successLottieData = {
  v: "5.13.0",
  fr: 60,
  ip: 0,
  op: 100,
  w: 200,
  h: 200,
  nm: "Reservation success",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Success circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [0, 0, 100], e: [112, 112, 100] },
            { t: 18, s: [112, 112, 100], e: [100, 100, 100] },
            { t: 28, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              d: 1,
              s: { a: 0, k: [118, 118] },
              p: { a: 0, k: [0, 0] },
              nm: "Circle",
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.086, 0.62, 0.32, 1] },
              o: { a: 0, k: 100 },
              r: 1,
              nm: "Fill",
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
              sk: { a: 0, k: 0 },
              sa: { a: 0, k: 0 },
            },
          ],
          nm: "Circle group",
        },
      ],
      ip: 0,
      op: 100,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Check mark",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                  ],
                  o: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                  ],
                  v: [
                    [-34, 1],
                    [-10, 25],
                    [39, -28],
                  ],
                  c: false,
                },
              },
              nm: "Check path",
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 1, 1, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 11 },
              lc: 2,
              lj: 2,
              ml: 4,
              nm: "Stroke",
            },
            {
              ty: "tm",
              s: { a: 0, k: 0 },
              e: {
                a: 1,
                k: [
                  { t: 24, s: [0], e: [100] },
                  { t: 58, s: [100] },
                ],
              },
              o: { a: 0, k: 0 },
              m: 1,
              nm: "Draw check",
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
              sk: { a: 0, k: 0 },
              sa: { a: 0, k: 0 },
            },
          ],
          nm: "Check group",
        },
      ],
      ip: 0,
      op: 100,
      st: 0,
      bm: 0,
    },
  ],
  markers: [],
};

const statusMeta = {
  Oczekujące: ["status-pending", "assets/clock.svg"],
  "W hotelu": ["status-staying", "assets/stay.svg"],
  Anulowano: ["status-cancelled", "assets/calendar-x.svg"],
  "Nie przyjechano": ["status-missed", "assets/alert.svg"],
  Wolne: ["status-free", ""],
  Inne: ["status-other", "assets/alert.svg"],
};

const body = document.querySelector("#reservation-body");
const resultCount = document.querySelector("#result-count");
const search = document.querySelector("#search");
const statusFilter = document.querySelector("#status-filter");
const paymentFilter = document.querySelector("#payment-filter");
const sourceFilter = document.querySelector("#source-filter");
const freeOnly = document.querySelector("#mine-only");
const activeFilters = document.querySelector("#active-filters");
const roomSearch = document.querySelector("#room-search");
const roomList = document.querySelector("#room-list");
const roomResultCount = document.querySelector("#room-result-count");
const roomCapacityFilter = document.querySelector("#room-capacity-filter");
const roomAreaFilter = document.querySelector("#room-area-filter");
const roomAmenityFilters = document.querySelectorAll(
  ".room-amenity-filters input",
);
const tableCard = document.querySelector(".table-card");
const pageSizeSelect = document.querySelector("#page-size");
const paginationSummary = document.querySelector("#pagination-summary");
const paginationPages = document.querySelector("#pagination-pages");
const pagePrev = document.querySelector("#page-prev");
const pageNext = document.querySelector("#page-next");
const reservationPage = document.querySelector("#new-reservation-page");
const dashboardViews = document.querySelectorAll(".dashboard-view");
let reservationPeriod = "current";
let reservationView = "compact";
let successAnimation;
let statOnlyFree = false;
let currentDetailsReservation = null;
let editingReservation = null;
let archiveOnly = false;
let currentPage = 1;
let pageSize = 10;
let calendarViewDate = new Date(2026, 10, 1);
let manualReservationTotal = null;
let latestPricingBreakdown = null;

function updateHotelStats() {
  const freeRooms = rooms.filter((room) => room.state === "free");
  const occupiedRooms = rooms.filter((room) => room.state === "occupied");
  const futureReservations = freeRooms.filter(
    (room) => room.reservedFrom,
  ).length;
  document.querySelector("#stat-free-rooms").textContent = freeRooms.length;
  document.querySelector("#stat-total-rooms").textContent = rooms.length;
  document.querySelector("#stat-occupied-rooms").textContent =
    occupiedRooms.length;
  document.querySelector(".stat-card-free small").textContent =
    `${futureReservations} z przyszłą rezerwacją`;
}

function selectStatCard(filter) {
  document.querySelectorAll("[data-stat-filter]").forEach((card) => {
    const selected = card.dataset.statFilter === filter;
    card.classList.toggle("selected", selected);
    card.setAttribute("aria-pressed", String(selected));
  });
}

function syncPeriodFilterButtons() {
  document.querySelectorAll("[data-period-filter]").forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.periodFilter === reservationPeriod,
    );
  });
}

function syncSidebarSection(section) {
  document.querySelectorAll("[data-sidebar-section]").forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.sidebarSection === section,
    );
  });
}

function applyStatFilter(filter) {
  archiveOnly = false;
  statusFilter.value = filter === "guests" ? "W hotelu" : "all";
  reservationPeriod =
    filter === "guests" || filter === "occupied" ? "current" : "all";
  statOnlyFree = filter === "free";
  freeOnly.checked = filter === "free";
  selectStatCard(filter);
  syncPeriodFilterButtons();
  syncSidebarSection(
    filter === "guests" || filter === "occupied" ? "current" : "",
  );
  render();
}

function roomStateClass(state) {
  return state === "free"
    ? "room-state-free"
    : state === "occupied"
      ? "room-state-occupied"
      : "room-state-other";
}

function parsePrice(price) {
  return Number(String(price).replace(/[^0-9]/g, ""));
}

function formatPrice(value) {
  return `${new Intl.NumberFormat("pl-PL").format(value)} zł`;
}

function updateDateDisplays() {
  const form = document.querySelector("#reservation-form");
  ["arrival", "departure"].forEach((fieldName) => {
    const date = new Date(`${form.elements[fieldName].value}T12:00:00`);
    const display = document.querySelector(`#${fieldName}-date-display`);
    display.textContent = Number.isNaN(date.getTime())
      ? "Wybierz datę"
      : new Intl.DateTimeFormat("pl-PL", {
          weekday: "long",
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }).format(date);
  });
}

function toIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatBookingRange(start, end) {
  const startDate = new Date(`${start}T12:00:00`);
  const endDate = new Date(`${end}T12:00:00`);
  const startText = new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "short",
  }).format(startDate);
  const endText = new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(endDate);
  return `${startText} – ${endText}`;
}

function renderReservationCalendar() {
  const form = document.querySelector("#reservation-form");
  const room =
    rooms.find((item) => item.number === form.elements.room.value) || rooms[0];
  const arrival = form.elements.arrival.value;
  const departure = form.elements.departure.value;
  const bookings = roomBookings[room.number] || [];
  const year = calendarViewDate.getFullYear();
  const month = calendarViewDate.getMonth();
  document.querySelector("#calendar-month").textContent =
    new Intl.DateTimeFormat("pl-PL", { month: "long", year: "numeric" }).format(
      calendarViewDate,
    );

  const firstDayOffset = (new Date(year, month, 1).getDay() + 6) % 7;
  const gridStart = new Date(year, month, 1 - firstDayOffset);
  const days = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    const iso = toIsoDate(date);
    const selected = arrival && departure && iso >= arrival && iso <= departure;
    const booked = bookings.some(
      (booking) => iso >= booking.start && iso < booking.end,
    );
    const classes = ["calendar-day"];
    if (date.getMonth() !== month) classes.push("is-outside");
    if (selected) classes.push("is-selected");
    if (selected && iso === arrival) classes.push("is-selected-start");
    if (selected && iso === departure) classes.push("is-selected-end");
    if (selected && arrival === departure) classes.push("is-single-selected");
    if (booked) classes.push("is-booked");
    return `<span class="${classes.join(" ")}" title="${booked ? "Pokój zajęty" : ""}">${date.getDate()}</span>`;
  });
  document.querySelector("#calendar-days").innerHTML = days.join("");
  document.querySelector("#future-bookings-count").textContent =
    bookings.length;
  document.querySelector("#future-bookings-list").innerHTML = bookings.length
    ? bookings
        .map(
          (booking) =>
            `<div class="future-booking-item"><strong>${booking.guest}</strong><span>${formatBookingRange(booking.start, booking.end)}</span><small>${booking.id}</small></div>`,
        )
        .join("")
    : '<div class="future-bookings-empty">Brak kolejnych rezerwacji dla tego pokoju.</div>';
}

function reservationDateToIso(value) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const [day, month, year] = String(value).split(".");
  if (!day || !month || !year) return "";
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

function isoToReservationDate(value) {
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat("pl-PL").format(date);
}

function setReservationFormMode(reservation = null) {
  editingReservation = reservation;
  document.querySelector("#reservation-page-title").textContent = reservation
    ? "Edytuj rezerwację"
    : "Dodaj rezerwację";
  document.querySelector("#reservation-submit").textContent = reservation
    ? "Zapisz zmiany"
    : "Dodaj rezerwację";
}

function prepareNewReservation(roomNumber = "101") {
  const form = document.querySelector("#reservation-form");
  form.reset();
  resetAdditionalGuests();
  setReservationFormMode(null);
  setSelectedRoom(roomNumber);
  updateDateDisplays();
  calculateReservationTotal();
}

function populateReservationForm(reservation) {
  const form = document.querySelector("#reservation-form");
  const guest = getReservationGuestDetails(reservation);
  form.reset();
  resetAdditionalGuests();
  setReservationFormMode(reservation);
  form.elements.guestFirstName.value = guest.firstName;
  form.elements.guestLastName.value = guest.lastName;
  form.elements.guestLocation.value = guest.location;
  form.elements.guestPhone.value = guest.phone;
  form.elements.guestEmail.value = guest.email;
  form.elements.arrival.value = reservationDateToIso(reservation.arrival);
  form.elements.departure.value = reservationDateToIso(reservation.departure);
  form.elements.source.value = reservation.source || "Bezpośrednio";
  form.elements.paymentStatus.value =
    reservation.paymentStatus || "Nieopłacona";
  form.elements.paymentMethod.value = reservation.payment || "Karta";
  form.elements.notes.value = reservation.note || "";
  const selectedExtras = reservation.extras?.length
    ? reservation.extras
    : [...form.querySelectorAll('[name="extras"]')]
        .map((input) => input.value)
        .filter((value) =>
          reservation.note
            ?.toLocaleLowerCase("pl")
            .includes(value.toLocaleLowerCase("pl")),
        );
  form.querySelectorAll('[name="extras"]').forEach((input) => {
    input.checked = selectedExtras.includes(input.value);
  });
  (reservation.companions || []).forEach((name) => {
    const parts = name.split(" ");
    addAdditionalGuest({
      firstName: parts.shift() || "",
      lastName: parts.join(" "),
      focus: false,
    });
  });
  setSelectedRoom(reservation.room);
  updateDateDisplays();
  calculateReservationTotal();
  document.querySelector("#reservation-total").value = reservation.total;
  document.querySelector("#nightly-rate").value = reservation.price;
  document.querySelector("#night-count").value = reservation.nights;
  const editNights = Number(reservation.nights) || 0;
  const editNightlyRate = parsePrice(reservation.price);
  const editRoomTotal = editNights * editNightlyRate;
  const editTotal = parsePrice(reservation.total);
  manualReservationTotal = null;
  latestPricingBreakdown = {
    nights: editNights,
    nightlyRate: editNightlyRate,
    roomTotal: editRoomTotal,
    extraItems: (reservation.extras || []).map((label) => ({
      label,
      detail: "Wybrana usługa",
      total: null,
    })),
    total: editTotal,
    automaticTotal: editTotal,
  };
  renderPriceReceipt(latestPricingBreakdown);
}

function openReservationPage() {
  dashboardViews.forEach((view) => {
    view.hidden = true;
  });
  reservationPage.hidden = false;
  const arrival = document.querySelector(
    '#reservation-form [name="arrival"]',
  ).value;
  if (arrival) {
    const date = new Date(`${arrival}T12:00:00`);
    calendarViewDate = new Date(date.getFullYear(), date.getMonth(), 1);
  }
  renderReservationCalendar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeReservationPage() {
  reservationPage.hidden = true;
  dashboardViews.forEach((view) => {
    view.hidden = false;
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPriceReceipt({
  nights,
  nightlyRate,
  roomTotal,
  extraItems,
  total,
  automaticTotal = total,
}) {
  const nightLabel =
    nights === 1 ? "noc" : nights > 1 && nights < 5 ? "noce" : "nocy";
  document.querySelector("#receipt-stay-label").textContent =
    `${nights} ${nightLabel} × ${formatPrice(nightlyRate)}`;
  document.querySelector("#receipt-stay-total").textContent =
    formatPrice(roomTotal);
  document.querySelector("#receipt-extras").innerHTML = extraItems
    .map(
      (item) =>
        `<div><span><b>${item.label}</b>${item.detail ? `<small>${item.detail}</small>` : ""}</span><strong>${Number.isFinite(item.total) ? formatPrice(item.total) : "Wybrano"}</strong></div>`,
    )
    .join("");
  const discount = Math.max(0, automaticTotal - total);
  const discountPercent = automaticTotal
    ? (discount / automaticTotal) * 100
    : 0;
  const discountRow = document.querySelector("#receipt-discount");
  discountRow.hidden = discount <= 0;
  document.querySelector("#receipt-discount-label").textContent =
    `Rabat -${new Intl.NumberFormat("pl-PL", { maximumFractionDigits: 1 }).format(discountPercent)}%`;
  document.querySelector("#receipt-discount-value").textContent =
    `-${formatPrice(discount)}`;
  document.querySelector("#receipt-total").textContent = formatPrice(total);
}

function calculateReservationTotal() {
  const form = document.querySelector("#reservation-form");
  const arrival = new Date(`${form.elements.arrival.value}T00:00:00`);
  const departure = new Date(`${form.elements.departure.value}T00:00:00`);
  const difference = Math.round((departure - arrival) / 86400000);
  const nights = Number.isFinite(difference) && difference > 0 ? difference : 0;
  const room =
    rooms.find((item) => item.number === form.elements.room.value) || rooms[0];
  const nightlyRate = parsePrice(room.price);
  const guests = 1 + form.querySelectorAll(".additional-guest").length;
  let extrasTotal = 0;
  const extraItems = [];
  form.querySelectorAll('[name="extras"]:checked').forEach((extra) => {
    const price = Number(extra.dataset.price);
    let extraTotal = 0;
    let detail = `${formatPrice(price)} jednorazowo`;
    if (extra.dataset.mode === "person-night")
      extraTotal = price * guests * nights;
    if (extra.dataset.mode === "person-night")
      detail = `${formatPrice(price)} × ${guests} os. × ${nights} ${nights === 1 ? "noc" : "nocy"}`;
    if (extra.dataset.mode === "night") {
      extraTotal = price * nights;
      detail = `${formatPrice(price)} × ${nights} ${nights === 1 ? "noc" : "nocy"}`;
    }
    if (extra.dataset.mode === "flat") extraTotal = price;
    extrasTotal += extraTotal;
    extraItems.push({ label: extra.value, detail, total: extraTotal });
  });
  const roomTotal = nightlyRate * nights;
  const automaticTotal = roomTotal + extrasTotal;
  manualReservationTotal = null;
  latestPricingBreakdown = {
    nights,
    nightlyRate,
    roomTotal,
    extraItems,
    total: automaticTotal,
    automaticTotal,
  };
  document.querySelector("#night-count").value = nights;
  document.querySelector("#nightly-rate").value = formatPrice(nightlyRate);
  document.querySelector("#reservation-total").value =
    formatPrice(automaticTotal);
  document.querySelector("#price-formula").textContent =
    `${nights} ${nights === 1 ? "noc" : nights > 1 && nights < 5 ? "noce" : "nocy"} × ${formatPrice(nightlyRate)}${extrasTotal ? ` + dodatki ${formatPrice(extrasTotal)}` : ""}`;
  renderPriceReceipt(latestPricingBreakdown);
}

const reservationTotalInput = document.querySelector("#reservation-total");

reservationTotalInput.addEventListener("change", () => {
  if (!latestPricingBreakdown) return;
  const rawValue = reservationTotalInput.value.trim();
  if (!rawValue) {
    manualReservationTotal = null;
    reservationTotalInput.value = formatPrice(
      latestPricingBreakdown.automaticTotal,
    );
    renderPriceReceipt(latestPricingBreakdown);
    return;
  }

  manualReservationTotal = Math.max(0, parsePrice(rawValue));
  reservationTotalInput.value = formatPrice(manualReservationTotal);
  renderPriceReceipt({
    ...latestPricingBreakdown,
    total: manualReservationTotal,
  });
});

const additionalGuests = document.querySelector("#additional-guests");
const additionalGuestsCount = document.querySelector(
  "#additional-guests-count",
);
let additionalGuestIndex = 0;

function updateAdditionalGuests() {
  const guests = additionalGuests.querySelectorAll(".additional-guest");
  additionalGuestsCount.textContent = guests.length
    ? `${guests.length} ${guests.length === 1 ? "osoba dodatkowa" : guests.length < 5 ? "osoby dodatkowe" : "osób dodatkowych"}`
    : "Brak dodatkowych osób";
  guests.forEach((guest, index) => {
    guest.querySelector(".additional-guest-head strong").textContent =
      `Osoba dodatkowa ${index + 1}`;
  });
  calculateReservationTotal();
}

function addAdditionalGuest({
  firstName = "",
  lastName = "",
  type = "Dorosły",
  focus = true,
} = {}) {
  additionalGuestIndex += 1;
  const guest = document.createElement("div");
  guest.className = "additional-guest";
  guest.dataset.guestIndex = additionalGuestIndex;
  guest.innerHTML = `<div class="additional-guest-head"><strong>Osoba dodatkowa</strong><button type="button" class="remove-guest" data-remove-guest>Usuń</button></div>
    <div class="additional-guest-grid">
      <label class="field">Imię<input name="additionalGuestFirstName[]" required placeholder="Imię"></label>
      <label class="field">Nazwisko<input name="additionalGuestLastName[]" required placeholder="Nazwisko"></label>
      <label class="field">Typ osoby<select name="additionalGuestType[]"><option>Dorosły</option><option>Dziecko</option><option>Niemowlę</option></select></label>
    </div>`;
  additionalGuests.append(guest);
  guest.querySelector('[name="additionalGuestFirstName[]"]').value = firstName;
  guest.querySelector('[name="additionalGuestLastName[]"]').value = lastName;
  guest.querySelector('[name="additionalGuestType[]"]').value = type;
  updateAdditionalGuests();
  if (focus) guest.querySelector("input").focus();
}

function resetAdditionalGuests() {
  additionalGuests.replaceChildren();
  additionalGuestIndex = 0;
  updateAdditionalGuests();
}

function setSelectedRoom(number) {
  const room = rooms.find((item) => item.number === String(number));
  if (!room) return;
  document.querySelector('#reservation-form [name="room"]').value = room.number;
  document.querySelector("#selected-room-number").textContent =
    `Pokój ${room.number}`;
  document.querySelector("#selected-room-type").textContent =
    `${room.type} · ${room.capacity} · ${room.beds}`;
  document.querySelector("#selected-room-floor").textContent = room.floor;
  document.querySelector("#selected-room-price").textContent =
    `${room.price} / noc`;
  const reservationNote = document.querySelector("#selected-room-reserved");
  reservationNote.hidden = !room.reservedFrom;
  reservationNote.textContent = room.reservedFrom
    ? `Zarezerwowany od ${room.reservedFrom}`
    : "";
  const status = document.querySelector("#selected-room-status");
  status.textContent = room.status;
  status.className = `room-state ${roomStateClass(room.state)}`;
  renderRoomPicker();
  calculateReservationTotal();
  renderReservationCalendar();
}

function roomOptionTemplate(room) {
  const selected =
    document.querySelector('#reservation-form [name="room"]').value ===
    room.number;
  const selectable = room.state === "free";
  const details = roomDetails[room.number];
  const nights = Number(document.querySelector("#night-count").value) || 1;
  const stayTotal = formatPrice(parsePrice(room.price) * nights);
  const amenityTags = details.amenities
    .map((amenity) => `<span>${amenity}</span>`)
    .join("");
  return `<article class="room-option${selected ? " is-selected" : ""}${selectable ? "" : " is-unavailable"}">
    <div class="room-option-main">
      <div class="room-option-heading">
        <div style="display: flex; flex-direction:row; align-items:center; gap: 10px;">
        <p class="room-option-number" style="margin:0">${room.number}</p>·
          <strong>${room.type}</strong>·
          <span>${room.capacity} · ${details.area} m² · ${room.floor}</span>
        </div>
      </div>
      <div class="room-option-sleep">${room.beds}<span>Łazienka prywatna · pokój na wyłączność</span></div>
      <div class="room-option-amenities">${amenityTags}</div>

    </div>
    <aside class="room-option-booking">
      <div class="room-option-price"><strong>${room.price}</strong><span>za noc</span></div>
      <button type="button" class="${selected ? "secondary" : ""}" data-room-number="${room.number}" ${selectable ? "" : "disabled"}>${selected ? "Wybrany" : selectable ? "Wybierz pokój" : "Niedostępny"}</button>
    </aside>
  </article>`;
}

function renderRoomPicker() {
  const query = roomSearch.value.trim().toLocaleLowerCase("pl");
  const capacity = roomCapacityFilter.value;
  const minimumArea = Number(roomAreaFilter.value);
  const selectedAmenities = [...roomAmenityFilters]
    .filter((input) => input.checked)
    .map((input) => input.value);
  const filtered = rooms.filter((room) => {
    const details = roomDetails[room.number];
    const haystack =
      `${room.number} ${room.type} ${room.capacity} ${room.beds} ${room.floor} ${room.status} ${details.area} ${details.amenities.join(" ")}`.toLocaleLowerCase(
        "pl",
      );
    const roomCapacity = Number.parseInt(room.capacity, 10);
    const matchesCapacity =
      capacity === "all" || roomCapacity >= Number(capacity);
    const matchesArea = details.area >= minimumArea;
    const matchesAmenities = selectedAmenities.every((amenity) =>
      details.amenities.includes(amenity),
    );
    return (
      haystack.includes(query) &&
      room.state === "free" &&
      matchesCapacity &&
      matchesArea &&
      matchesAmenities
    );
  });
  roomList.innerHTML = filtered.length
    ? filtered.map(roomOptionTemplate).join("")
    : '<div class="room-list-empty">Nie znaleziono pokoi spełniających wybrane kryteria.</div>';
}

function statusBadge(status) {
  const [className, icon] = statusMeta[status];
  return `<span class="status-badge ${className}">${icon ? `<img src="${icon}" alt="">` : ""}${status}</span>`;
}

function playSuccessAnimation() {
  if (!successAnimation) {
    successAnimation = lottie.loadAnimation({
      container: document.querySelector("#success-lottie"),
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: successLottieData,
    });
    return;
  }
  successAnimation.goToAndPlay(0, true);
}

function syncDetailsStatus(status) {
  document.querySelector("#details-current-status").innerHTML =
    statusBadge(status);
}

function getReservationGuestDetails(reservation) {
  const mapped = reservationGuestData[reservation.id] || {};
  const nameParts = reservation.guest.split(" ");
  return {
    firstName:
      reservation.firstName || mapped.firstName || nameParts.shift() || "",
    lastName: reservation.lastName || mapped.lastName || nameParts.join(" "),
    location: reservation.location || mapped.location || "",
    phone: reservation.phone || mapped.phone || "",
    email: reservation.email || mapped.email || "",
  };
}

function updateReservationDetailsView(reservation) {
  const guest = getReservationGuestDetails(reservation);
  const room = rooms.find((item) => item.number === reservation.room);
  const roomInfo = roomDetails[reservation.room];
  const inferredExtras = ["Śniadanie", "Parking", "Późne wymeldowanie"].filter(
    (extra) =>
      reservation.note
        ?.toLocaleLowerCase("pl")
        .includes(extra.toLocaleLowerCase("pl")),
  );
  const extras = reservation.extras?.length
    ? reservation.extras
    : inferredExtras;

  document.querySelector("#details-first-name").textContent =
    guest.firstName || "—";
  document.querySelector("#details-last-name").textContent =
    guest.lastName || "—";
  document.querySelector("#details-location").textContent =
    guest.location || "Nie podano";
  document.querySelector("#details-phone").textContent =
    guest.phone || "Nie podano";
  document.querySelector("#details-email").textContent =
    guest.email || "Nie podano";
  document.querySelector("#details-companions").textContent = reservation
    .companions?.length
    ? reservation.companions.join(", ")
    : "Brak";
  document.querySelector("#details-id").textContent =
    reservation.id || "Brak numeru";
  document.querySelector("#details-room").textContent = room
    ? `${room.number} · ${room.type}`
    : `${reservation.room} · ${reservation.type}`;
  document.querySelector("#details-room-area").textContent = roomInfo
    ? `${roomInfo.area} m²`
    : "Nie podano";
  document.querySelector("#details-room-capacity").textContent =
    room?.capacity || reservation.type;
  document.querySelector("#details-room-beds").textContent =
    room?.beds || "Nie podano";
  document.querySelector("#details-room-floor").textContent =
    room?.floor || "Nie podano";
  document.querySelector("#details-room-amenities").textContent =
    roomInfo?.amenities.join(", ") || "Brak dodatkowych udogodnień";
  document.querySelector("#details-dates").textContent =
    `${reservation.arrival} → ${reservation.departure}`;
  document.querySelector("#details-nights").textContent = reservation.nights;
  document.querySelector("#details-payment-nights").textContent =
    reservation.nights;
  document.querySelector("#details-price").textContent = reservation.price;
  document.querySelector("#details-extras").textContent = extras.length
    ? extras.join(", ")
    : "Brak";
  document.querySelector("#details-total").textContent = reservation.total;
  document.querySelector("#details-payment").textContent =
    reservation.payment || "Nieopłacona";
  document.querySelector("#details-payment-status").textContent =
    reservation.paymentStatus || "Nieopłacona";
  document.querySelector("#details-note").textContent =
    reservation.note || "Brak dodatkowych informacji.";
  syncDetailsStatus(reservation.status);
}

function openReservationDetails(reservation) {
  currentDetailsReservation = reservation;
  updateReservationDetailsView(reservation);
  document.querySelector("#details-modal").showModal();
}

function rowTemplate(item) {
  const buttonClass =
    item.action === "Zamelduj"
      ? "dark"
      : item.action === "Zarezerwuj"
        ? "outlined"
        : "";
  const room = rooms.find((candidate) => candidate.number === item.room);
  const details = roomDetails[item.room];
  const amenities = details
    ? details.amenities.map((amenity) => `<span>${amenity}</span>`).join("")
    : "";
  const guestNames = item.id ? [item.guest, ...(item.companions || [])] : [];
  const guestCount = guestNames.length;
  const guestCountBadge = guestCount
    ? `<span class="guest-count" aria-label="Liczba osób: ${guestCount}"><img src="assets/users.svg" alt=""><b>× ${guestCount}</b></span>`
    : "";
  const guestNamesExpanded = guestCount
    ? `<div class="reservation-guests-expanded"><span>Osoby w rezerwacji</span><div class="guest-name-list">${guestNames.map((name, index) => `<span>${name}${index === 0 ? "<small>główny gość</small>" : ""}</span>`).join("")}</div></div>`
    : "";
  return `<tr data-reservation-room="${item.room}" tabindex="0" aria-label="Otwórz szczegóły rezerwacji dla pokoju ${item.room}">
    <td><span>${item.room}</span>${room ? `<small class="reservation-extra">${room.floor}</small>` : ""}</td><td>${item.type}${details ? `<small class="reservation-extra">${details.area} m²</small>` : ""}</td>
    <td class="guest-cell">
    <div class="guest-main-line"><strong>${item.guest}</strong>${item.id ? `<span class="reservation-id">${item.id}</span>` : ""}${guestCountBadge}</div>${item.note ? `<div class="guest-note">${item.note}</div>` : ""}${guestNamesExpanded}${room && details ? `<div class="reservation-room-expanded"><strong>${room.beds}</strong><span class="reservation-amenities">${amenities}</span></div>` : ""}</td>
    <td>${statusBadge(item.status)}</td>
    <td class="date-cell">${item.arrival}${item.arrivalNote ? `<small>${item.arrivalNote}</small>` : ""}</td>
    <td class="stay-arrow-cell" aria-hidden="true">→</td>
    <td class="date-cell">${item.departure}${item.departureNote ? `<small>${item.departureNote}</small>` : ""}</td>
    <td>${item.nights}</td><td class="amount">${item.price}</td>
    <td class="amount">${item.total}${item.payment ? `<small>${item.payment}</small>` : ""}</td>
    <td><div class="row-actions"><button class="row-button ${buttonClass}" data-action="${item.action}" data-room="${item.room}">${item.action === "Zamelduj" ? "✓ " : item.action === "Zarezerwuj" ? "⊙ " : ""}${item.action}</button><button class="more-button" aria-label="Więcej akcji"><img src="assets/ellipsis.svg" alt=""></button></div></td>
  </tr>`;
}

function getFilteredReservations() {
  const query = search.value.trim().toLocaleLowerCase("pl");
  const status = statusFilter.value;
  const payment = paymentFilter.value;
  const source = sourceFilter.value;
  return reservations.filter((item) => {
    const haystack =
      `${item.room} ${item.type} ${item.guest} ${item.id} ${item.status} ${item.note}`.toLocaleLowerCase(
        "pl",
      );
    const isFreeRoom = item.roomState === "free" && !item.id;
    const isReservation = Boolean(item.id);
    const isArchived =
      item.status === "Anulowano" || item.status === "Nie przyjechano";
    const matchesPeriod =
      reservationPeriod === "all" || item.period === reservationPeriod;
    const matchesReservationView = archiveOnly
      ? isArchived
      : !isArchived && matchesPeriod;
    const matchesTableScope = statOnlyFree
      ? isFreeRoom
      : (isReservation && matchesReservationView) ||
        (freeOnly.checked && isFreeRoom);
    const matchesStatus =
      isFreeRoom || status === "all" || item.status === status;
    const matchesPayment =
      isFreeRoom || payment === "all" || item.payment === payment;
    const matchesSource =
      isFreeRoom || source === "all" || (item.source || "Bezpośrednio") === source;
    return haystack.includes(query)
      && matchesTableScope
      && matchesStatus
      && matchesPayment
      && matchesSource;
  });
}

function renderPagination(totalResults) {
  const totalPages = Math.max(1, Math.ceil(totalResults / pageSize));
  currentPage = Math.min(Math.max(1, currentPage), totalPages);
  const start = totalResults ? (currentPage - 1) * pageSize + 1 : 0;
  const end = Math.min(currentPage * pageSize, totalResults);
  paginationSummary.textContent = `${start}–${end} z ${totalResults}`;
  pagePrev.disabled = currentPage === 1;
  pageNext.disabled = currentPage === totalPages;
  paginationPages.innerHTML = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    return `<button type="button" data-page="${page}"${page === currentPage ? ' aria-current="page"' : ""} aria-label="Strona ${page}">${page}</button>`;
  }).join("");
}

function renderActiveFilters() {
  const filters = [
    statusFilter.value !== "all" && {
      key: "status",
      label: `Status: ${statusFilter.selectedOptions[0].textContent}`,
    },
    paymentFilter.value !== "all" && {
      key: "payment",
      label: `Płatność: ${paymentFilter.selectedOptions[0].textContent}`,
    },
    sourceFilter.value !== "all" && {
      key: "source",
      label: `Źródło: ${sourceFilter.selectedOptions[0].textContent}`,
    },
    freeOnly.checked && {
      key: "free",
      label: "Wolne pokoje",
    },
  ].filter(Boolean);

  activeFilters.hidden = filters.length === 0;
  activeFilters.innerHTML = filters
    .map(
      ({ key, label }) => `
        <span class="filter-pill">
          <span>${label}</span>
          <button
            type="button"
            data-remove-filter="${key}"
            aria-label="Usuń filtr: ${label}"
          >×</button>
        </span>`,
    )
    .join("");
}

function render() {
  const filtered = getFilteredReservations();
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  currentPage = Math.min(currentPage, totalPages);
  const pageStart = (currentPage - 1) * pageSize;
  const visibleRows = filtered.slice(pageStart, pageStart + pageSize);
  body.innerHTML = visibleRows.length
    ? visibleRows.map(rowTemplate).join("")
    : `<tr><td colspan="11" class="empty-state">Nie znaleziono rezerwacji spełniających wybrane kryteria.</td></tr>`;
  tableCard.classList.toggle("table-full", reservationView === "full");
  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "wynik" : filtered.length > 1 && filtered.length < 5 ? "wyniki" : "wyników"}`;
  renderPagination(filtered.length);
  renderActiveFilters();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.querySelector("span").textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(
    () => toast.classList.remove("show"),
    2200,
  );
}

function exportReservationsCsv() {
  const rows = getFilteredReservations();
  const columns = [
    "Pokój",
    "Typ",
    "Gość",
    "Nr rezerwacji",
    "Status",
    "Przyjazd",
    "Wyjazd",
    "Nocy",
    "Za noc",
    "Łącznie",
    "Płatność",
  ];
  const escapeCsv = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
  const lines = [
    columns,
    ...rows.map((item) => [
      item.room,
      item.type,
      item.guest,
      item.id,
      item.status,
      item.arrival,
      item.departure,
      item.nights,
      item.price,
      item.total,
      item.payment,
    ]),
  ];
  const blob = new Blob(
    [`\ufeff${lines.map((line) => line.map(escapeCsv).join(";")).join("\n")}`],
    { type: "text/csv;charset=utf-8" },
  );
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "rezerwacje.csv";
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast(`Wyeksportowano ${rows.length} rekordów do Excela`);
}

search.addEventListener("input", render);
statusFilter.addEventListener("change", () => {
  statOnlyFree = false;
  selectStatCard("");
  render();
});
[paymentFilter, sourceFilter].forEach((control) =>
  control.addEventListener("change", () => {
    statOnlyFree = false;
    currentPage = 1;
    selectStatCard("");
    render();
  }),
);
freeOnly.addEventListener("change", () => {
  statOnlyFree = false;
  if (archiveOnly && freeOnly.checked) {
    archiveOnly = false;
    reservationPeriod = "current";
    syncPeriodFilterButtons();
    syncSidebarSection("current");
  }
  selectStatCard("");
  render();
});

activeFilters.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-filter]");
  if (!removeButton) return;

  const filter = removeButton.dataset.removeFilter;
  if (filter === "status") statusFilter.value = "all";
  if (filter === "payment") paymentFilter.value = "all";
  if (filter === "source") sourceFilter.value = "all";
  if (filter === "free") freeOnly.checked = false;

  statOnlyFree = false;
  currentPage = 1;
  selectStatCard("");
  render();
});

const filtersToggle = document.querySelector("#filters-toggle");
const filtersPopover = document.querySelector("#filters-popover");
const actionsMenuToggle = document.querySelector("#actions-menu-toggle");
const actionsMenu = document.querySelector("#actions-menu");

function setPopoverState(trigger, panel, open) {
  panel.hidden = !open;
  trigger.setAttribute("aria-expanded", String(open));
}

filtersToggle.addEventListener("click", () => {
  const open = filtersPopover.hidden;
  setPopoverState(filtersToggle, filtersPopover, open);
  setPopoverState(actionsMenuToggle, actionsMenu, false);
});
document.querySelector("#filters-close").addEventListener("click", () =>
  setPopoverState(filtersToggle, filtersPopover, false),
);
actionsMenuToggle.addEventListener("click", () => {
  const open = actionsMenu.hidden;
  setPopoverState(actionsMenuToggle, actionsMenu, open);
  setPopoverState(filtersToggle, filtersPopover, false);
});
actionsMenu.addEventListener("click", (event) => {
  if (event.target.closest("button"))
    setPopoverState(actionsMenuToggle, actionsMenu, false);
});
document.addEventListener("click", (event) => {
  if (!filtersPopover.contains(event.target) && !filtersToggle.contains(event.target))
    setPopoverState(filtersToggle, filtersPopover, false);
  if (!actionsMenu.contains(event.target) && !actionsMenuToggle.contains(event.target))
    setPopoverState(actionsMenuToggle, actionsMenu, false);
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  setPopoverState(filtersToggle, filtersPopover, false);
  setPopoverState(actionsMenuToggle, actionsMenu, false);
});
document
  .querySelectorAll("[data-stat-filter]")
  .forEach((card) =>
    card.addEventListener("click", () =>
      applyStatFilter(card.dataset.statFilter),
    ),
  );
document
  .querySelectorAll('#reservation-form input[type="date"]')
  .forEach((control) =>
    control.addEventListener("change", () => {
      updateDateDisplays();
      calculateReservationTotal();
      if (control.name === "arrival" && control.value) {
        const date = new Date(`${control.value}T12:00:00`);
        calendarViewDate = new Date(date.getFullYear(), date.getMonth(), 1);
      }
      renderReservationCalendar();
    }),
  );
document
  .querySelectorAll('#reservation-form [name="extras"]')
  .forEach((control) =>
    control.addEventListener("change", calculateReservationTotal),
  );
document.querySelectorAll("[data-period-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-period-filter]")
      .forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    reservationPeriod = button.dataset.periodFilter;
    archiveOnly = false;
    statOnlyFree = false;
    selectStatCard("");
    syncSidebarSection(reservationPeriod);
    render();
  }),
);
document.querySelectorAll("[data-sidebar-section]").forEach((button) =>
  button.addEventListener("click", () => {
    const section = button.dataset.sidebarSection;
    closeReservationPage();
    archiveOnly = section === "archive";
    reservationPeriod = archiveOnly ? "all" : section;
    statusFilter.value = "all";
    freeOnly.checked = false;
    statOnlyFree = false;
    currentPage = 1;
    selectStatCard("");
    syncPeriodFilterButtons();
    syncSidebarSection(section);
    render();
  }),
);
document
  .querySelector("#reservations-nav")
  .addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('[data-sidebar-section="current"]').click();
  });

roomSearch.addEventListener("input", renderRoomPicker);
roomCapacityFilter.addEventListener("change", renderRoomPicker);
roomAreaFilter.addEventListener("change", renderRoomPicker);
roomAmenityFilters.forEach((input) =>
  input.addEventListener("change", renderRoomPicker),
);
document.querySelector("#clear-room-filters").addEventListener("click", () => {
  roomSearch.value = "";
  roomCapacityFilter.value = "all";
  roomAreaFilter.value = "0";
  roomAmenityFilters.forEach((input) => {
    input.checked = false;
  });
  renderRoomPicker();
});
document.querySelectorAll("[data-table-view]").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-table-view]")
      .forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    reservationView = button.dataset.tableView;
    render();
  }),
);
pageSizeSelect.addEventListener("change", () => {
  pageSize = Number(pageSizeSelect.value);
  currentPage = 1;
  render();
});
paginationPages.addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (!button) return;
  currentPage = Number(button.dataset.page);
  render();
});
pagePrev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage -= 1;
    render();
  }
});
pageNext.addEventListener("click", () => {
  const totalPages = Math.max(
    1,
    Math.ceil(getFilteredReservations().length / pageSize),
  );
  if (currentPage < totalPages) {
    currentPage += 1;
    render();
  }
});

document.querySelector("#calendar-prev").addEventListener("click", () => {
  calendarViewDate = new Date(
    calendarViewDate.getFullYear(),
    calendarViewDate.getMonth() - 1,
    1,
  );
  renderReservationCalendar();
});
document.querySelector("#calendar-next").addEventListener("click", () => {
  calendarViewDate = new Date(
    calendarViewDate.getFullYear(),
    calendarViewDate.getMonth() + 1,
    1,
  );
  renderReservationCalendar();
});
roomList.addEventListener("click", (event) => {
  const option = event.target.closest("[data-room-number]");
  if (!option || option.disabled) return;
  setSelectedRoom(option.dataset.roomNumber);
  document.querySelector("#room-picker").close("selected");
});

document
  .querySelectorAll("[data-open]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      document.querySelector(`#${button.dataset.open}`).showModal(),
    ),
  );
document.querySelectorAll("[data-open-reservation-page]").forEach((button) =>
  button.addEventListener("click", () => {
    prepareNewReservation();
    openReservationPage();
  }),
);
document
  .querySelector("#back-to-reservations")
  .addEventListener("click", closeReservationPage);
document
  .querySelector("#cancel-reservation-page")
  .addEventListener("click", closeReservationPage);
document.querySelector("#details-edit-toggle").addEventListener("click", () => {
  if (!currentDetailsReservation) return;
  document.querySelector("#details-modal").close();
  populateReservationForm(currentDetailsReservation);
  openReservationPage();
});
document
  .querySelector("#add-guest")
  .addEventListener("click", () => addAdditionalGuest());
additionalGuests.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-guest]");
  if (!removeButton) return;
  removeButton.closest(".additional-guest").remove();
  updateAdditionalGuests();
});
body.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    const reservation = reservations.find(
      (item) => item.room === actionButton.dataset.room,
    );
    if (actionButton.dataset.action === "Zarezerwuj") {
      prepareNewReservation(reservation.room);
      openReservationPage();
      return;
    }
    openReservationDetails(reservation);
    return;
  }
  const row = event.target.closest("[data-reservation-room]");
  if (!row) return;
  openReservationDetails(
    reservations.find((item) => item.room === row.dataset.reservationRoom),
  );
});
body.addEventListener("keydown", (event) => {
  const row = event.target.closest("[data-reservation-room]");
  if (event.key !== "Enter" || !row || event.target.closest("button")) return;
  openReservationDetails(
    reservations.find((item) => item.room === row.dataset.reservationRoom),
  );
});

document.querySelectorAll("dialog").forEach((dialog) =>
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  }),
);

document
  .querySelector("#reservation-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const additionalCount = form.querySelectorAll(".additional-guest").length;
    const guestName =
      `${data.get("guestFirstName")} ${data.get("guestLastName")}`.trim();
    if (editingReservation) {
      const selectedRoom = rooms.find(
        (room) => room.number === data.get("room"),
      );
      const companionFirstNames = data.getAll("additionalGuestFirstName[]");
      const companionLastNames = data.getAll("additionalGuestLastName[]");
      editingReservation.firstName = data.get("guestFirstName").trim();
      editingReservation.lastName = data.get("guestLastName").trim();
      editingReservation.guest = guestName;
      editingReservation.location = data.get("guestLocation").trim();
      editingReservation.phone = data.get("guestPhone").trim();
      editingReservation.email = data.get("guestEmail").trim();
      editingReservation.companions = companionFirstNames
        .map((firstName, index) =>
          `${firstName} ${companionLastNames[index] || ""}`.trim(),
        )
        .filter(Boolean);
      editingReservation.room = data.get("room");
      editingReservation.type = selectedRoom
        ? selectedRoom.capacity
        : editingReservation.type;
      editingReservation.arrival = isoToReservationDate(data.get("arrival"));
      editingReservation.departure = isoToReservationDate(
        data.get("departure"),
      );
      editingReservation.nights = Number(
        document.querySelector("#night-count").value,
      );
      editingReservation.price = document.querySelector("#nightly-rate").value;
      editingReservation.total = data.get("total");
      editingReservation.payment = data.get("paymentMethod");
      editingReservation.paymentStatus = data.get("paymentStatus");
      editingReservation.source = data.get("source");
      editingReservation.extras = data.getAll("extras");
      editingReservation.note = data.get("notes").trim();
      editingReservation = null;
      setReservationFormMode(null);
      closeReservationPage();
      render();
      updateHotelStats();
      showToast("Zmiany w rezerwacji zostały zapisane");
      return;
    }
    document.querySelector("#success-guest").textContent =
      `${guestName}${additionalCount ? ` + ${additionalCount} ${additionalCount === 1 ? "osoba" : "osoby"}` : ""}`;
    document.querySelector("#success-room").textContent =
      `Pokój ${data.get("room")}`;
    document.querySelector("#success-total").textContent = data.get("total");
    document.querySelector("#success-payment").textContent =
      `${data.get("paymentStatus")} · ${data.get("paymentMethod")}`;
    closeReservationPage();
    document.querySelector("#success-modal").showModal();
    playSuccessAnimation();
    form.reset();
    resetAdditionalGuests();
    updateDateDisplays();
    setSelectedRoom("101");
  });

render();
renderRoomPicker();
calculateReservationTotal();
updateDateDisplays();
renderReservationCalendar();
updateHotelStats();
