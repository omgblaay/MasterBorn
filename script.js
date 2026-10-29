const reservations = [
  {
    room: "102",
    type: "1 os.",
    guest: "Andrzej Dudek",
    companions: [],
    id: "#62761",
    note: "",
    status: "W hotelu",
    arrival: "28.10.2026",
    departure: "30.10.2026",
    departureNote: "jutro",
    nights: 2,
    price: "390 zł",
    total: "780 zł",
    payment: "Karta",
    paymentStatus: "Opłacona",
    source: "Bezpośrednio",
    roomState: "occupied",
    period: "current",
    action: "Szczegóły",
    mine: true,
  },
  {
    room: "103",
    type: "2 os.",
    guest: "Michał Nowak",
    companions: ["Katarzyna Nowak"],
    id: "#62768",
    note: "Śniadanie 7:30, parking A5",
    status: "Oczekujące",
    arrival: "29.10.2026",
    arrivalNote: "Dzisiaj",
    departure: "01.11.2026",
    departureNote: "za 3 dni",
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
    arrival: "27.10.2026",
    departure: "29.10.2026",
    departureNote: "Dzisiaj",
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
    arrival: "24.10.2026",
    departure: "29.10.2026",
    departureNote: "Dzisiaj",
    nights: 5,
    price: "1 100 zł",
    total: "5 500 zł",
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
    arrival: "23.10.2026",
    departure: "29.10.2026",
    departureNote: "Dzisiaj",
    nights: 6,
    price: "250 zł",
    total: "1 500 zł",
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
    departure: "20.12.2026",
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
    departure: "25.01.2027",
    nights: 3,
    price: "380 zł",
    total: "1 140 zł",
    payment: "Przelew",
    roomState: "other",
    period: "future",
    action: "Szczegóły",
    mine: false,
  },
];

const archivedGuests = [
  "Anna Kowalska",
  "Piotr Mazur",
  "Zofia Kamińska",
  "Jakub Król",
  "Maria Pawlak",
  "Adam Michalski",
  "Natalia Szymańska",
  "Krzysztof Woźniak",
  "Agnieszka Dąbrowska",
  "Marek Jankowski",
  "Joanna Krawczyk",
  "Łukasz Piotrowski",
  "Karolina Grabowska",
  "Tomasz Zając",
  "Magdalena Pawłowska",
  "Paweł Nowicki",
  "Monika Czarnecka",
  "Robert Lis",
  "Aleksandra Baran",
  "Michał Górski",
];

const archivedStays = [
  ["08.01.2026", "11.01.2026", 3],
  ["19.01.2026", "21.01.2026", 2],
  ["03.02.2026", "07.02.2026", 4],
  ["14.02.2026", "16.02.2026", 2],
  ["26.02.2026", "01.03.2026", 3],
  ["09.03.2026", "13.03.2026", 4],
  ["21.03.2026", "23.03.2026", 2],
  ["02.04.2026", "06.04.2026", 4],
  ["17.04.2026", "20.04.2026", 3],
  ["29.04.2026", "02.05.2026", 3],
  ["10.05.2026", "15.05.2026", 5],
  ["24.05.2026", "27.05.2026", 3],
  ["06.06.2026", "08.06.2026", 2],
  ["18.06.2026", "22.06.2026", 4],
  ["03.07.2026", "07.07.2026", 4],
  ["19.07.2026", "22.07.2026", 3],
  ["05.08.2026", "09.08.2026", 4],
  ["21.08.2026", "24.08.2026", 3],
  ["08.09.2026", "10.09.2026", 2],
  ["26.09.2026", "30.09.2026", 4],
];

const archivedRoomNumbers = [
  "101",
  "102",
  "103",
  "104",
  "105",
  "106",
  "107",
  "108",
  "109",
  "110",
  "111",
  "112",
  "201",
  "202",
];
const archivedStatuses = [
  "Zakończona",
  "Zakończona",
  "Zakończona",
  "Anulowano",
  "Nie przyjechano",
];
const archivedPayments = ["Karta", "Przelew", "Gotówka"];
const archivedSources = ["Bezpośrednio", "Booking.com", "Telefon"];

reservations.push(
  ...archivedStays.map(([arrival, departure, nights], index) => {
    const nightlyRate = 390 + (index % 6) * 90;
    const companion = index % 3 === 0 ? [`Gość ${index + 1}`] : [];
    return {
      room: archivedRoomNumbers[index % archivedRoomNumbers.length],
      type: index % 7 === 0 ? "Apartament" : "2 os.",
      guest: archivedGuests[index],
      companions: companion,
      id: `#${62100 + index}`,
      note: index % 4 === 0 ? "Śniadanie" : index % 5 === 0 ? "Parking" : "",
      status: archivedStatuses[index % archivedStatuses.length],
      arrival,
      departure,
      nights,
      price: `${nightlyRate.toLocaleString("pl-PL")} zł`,
      total: `${(nightlyRate * nights).toLocaleString("pl-PL")} zł`,
      payment: archivedPayments[index % archivedPayments.length],
      paymentStatus: index % 5 === 3 ? "Nieopłacona" : "Opłacona",
      source: archivedSources[index % archivedSources.length],
      roomState: "occupied",
      period: "archive",
      action: "Szczegóły",
      mine: index % 2 === 0,
    };
  }),
);

const futureGuests = [
  "Julia Wróbel",
  "Mateusz Sikora",
  "Oliwia Rutkowska",
  "Filip Ostrowski",
  "Weronika Tomaszewska",
  "Szymon Zalewski",
  "Amelia Marciniak",
  "Wiktor Jabłoński",
  "Lena Sobczak",
  "Kamil Malinowski",
];

const futureStays = [
  ["03.11.2026", "06.11.2026", 3],
  ["08.11.2026", "10.11.2026", 2],
  ["14.11.2026", "18.11.2026", 4],
  ["21.11.2026", "24.11.2026", 3],
  ["29.11.2026", "02.12.2026", 3],
  ["05.12.2026", "09.12.2026", 4],
  ["12.12.2026", "14.12.2026", 2],
  ["27.12.2026", "30.12.2026", 3],
  ["04.01.2027", "08.01.2027", 4],
  ["15.01.2027", "18.01.2027", 3],
];

reservations.push(
  ...futureStays.map(([arrival, departure, nights], index) => {
    const nightlyRate = 450 + (index % 5) * 110;
    const companionCount = index % 4 === 0 ? 2 : index % 2;
    return {
      room: archivedRoomNumbers[(index + 3) % archivedRoomNumbers.length],
      type: companionCount === 2 ? "3 os." : "2 os.",
      guest: futureGuests[index],
      companions: Array.from(
        { length: companionCount },
        (_, companionIndex) => `Gość dodatkowy ${companionIndex + 1}`,
      ),
      id: `#${62810 + index}`,
      note:
        index % 4 === 0
          ? "Śniadanie"
          : index % 3 === 0
            ? "Późne zameldowanie"
            : "",
      status: "Oczekujące",
      arrival,
      departure,
      nights,
      price: `${nightlyRate.toLocaleString("pl-PL")} zł`,
      total: `${(nightlyRate * nights).toLocaleString("pl-PL")} zł`,
      payment: archivedPayments[(index + 1) % archivedPayments.length],
      paymentStatus: index % 3 === 0 ? "Opłacona" : "Nieopłacona",
      source: archivedSources[(index + 2) % archivedSources.length],
      roomState: "occupied",
      period: "future",
      action: "Szczegóły",
      mine: index % 2 === 0,
    };
  }),
);

const reservationGuestData = {
  "#62761": {
    firstName: "Andrzej",
    lastName: "Dudek",
    location: "Katowice, Polska",
    phone: "+48 507 111 204",
    email: "andrzej.dudek@example.com",
    birthDate: "1987-04-12",
  },
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
    reservedFrom: "04.11.2026",
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
  Zakończona: ["status-completed", "assets/check.svg"],
  Anulowano: ["status-cancelled", "assets/calendar-x.svg"],
  "Nie przyjechano": ["status-missed", "assets/alert.svg"],
  Wolne: ["status-free", ""],
  Inne: ["status-other", "assets/alert.svg"],
};

const body = document.querySelector("#reservation-body");
const rowActionsMenu = document.querySelector("#row-actions-menu");
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
const tableListTitle = document.querySelector("#table-list-title");
const reservationsTable = document.querySelector("#reservations-table");
const reservationsColgroup = document.querySelector("#reservations-colgroup");
const reservationsHead = document.querySelector("#reservations-head");
const pageSizeSelect = document.querySelector("#page-size");
const paginationSummary = document.querySelector("#pagination-summary");
const paginationPages = document.querySelector("#pagination-pages");
const pagePrev = document.querySelector("#page-prev");
const pageNext = document.querySelector("#page-next");
const reservationPage = document.querySelector("#new-reservation-page");
const dashboardViews = document.querySelectorAll(".dashboard-view");
const breakfastExtra = document.querySelector("#breakfast-extra");
const breakfastConfig = document.querySelector("#breakfast-config");
const breakfastGuestsInput = document.querySelector("#breakfast-guests");
const breakfastNightsInput = document.querySelector("#breakfast-nights");
const plannedGuestsSelect = document.querySelector("#planned-guests");
const stayRangeToggle = document.querySelector("#stay-range-toggle");
const stayRangePopover = document.querySelector("#stay-range-popover");
const stayRangeDaysPrimary = document.querySelector("#stay-range-days-primary");
const stayRangeDaysSecondary = document.querySelector(
  "#stay-range-days-secondary",
);
const listDateRangeFilter = document.querySelector("#list-date-range-filter");
const listRangeToggle = document.querySelector("#list-range-toggle");
const listRangePopover = document.querySelector("#list-range-popover");
const listRangeDaysPrimary = document.querySelector("#list-range-days-primary");
const listRangeDaysSecondary = document.querySelector(
  "#list-range-days-secondary",
);
let reservationPeriod = "current";
let reservationView = "compact";
let successAnimation;
let statOnlyFree = false;
let currentDetailsReservation = null;
let editingReservation = null;
let checkInMode = false;
let archiveOnly = false;
let currentPage = 1;
let pageSize = 10;
let calendarViewDate = new Date(2026, 10, 1);
let stayPickerViewDate = new Date(2026, 10, 1);
let pendingStayStart = null;
let pendingListRangeStart = null;
const listDateRanges = {
  future: {
    start: "",
    end: "",
    flexibility: "0",
    viewDate: new Date(2026, 9, 1),
  },
  archive: {
    start: "",
    end: "",
    flexibility: "0",
    viewDate: new Date(2026, 8, 1),
  },
};
let manualReservationTotal = null;
let manualNightlyRate = null;
let latestPricingBreakdown = null;
let lastCreatedReservation = null;

function updateHotelStats() {
  const freeRooms = rooms.filter((room) => room.state === "free");
  const occupiedRooms = rooms.filter((room) => room.state === "occupied");
  const unavailableRooms = rooms.filter((room) => room.state === "other");
  const futureReservations = freeRooms.filter(
    (room) => room.reservedFrom,
  ).length;
  const occupancyRate = Math.round((occupiedRooms.length / rooms.length) * 100);
  const currentReservations = reservations.filter(
    (reservation) =>
      reservation.period === "current" &&
      reservation.id &&
      reservation.status !== "Anulowano" &&
      reservation.status !== "Nie przyjechano",
  );
  const currentGuests = currentReservations.reduce(
    (total, reservation) => total + 1 + (reservation.companions?.length || 0),
    0,
  );
  document.querySelector("#stat-free-rooms").textContent = freeRooms.length;
  document.querySelector("#stat-total-rooms").textContent = rooms.length;
  document.querySelector("#stat-occupied-rooms").textContent =
    occupiedRooms.length;
  document.querySelector("#stat-current-guests").textContent = currentGuests;
  document.querySelector(".stat-card-guests small").textContent =
    `W ${currentReservations.length} pokojach`;
  document.querySelector(".stat-card-free small").textContent =
    `${futureReservations} z przyszłą rezerwacją`;
  document.querySelector("#stat-room-breakdown").textContent =
    `${freeRooms.length} wolnych · ${unavailableRooms.length} poza sprzedażą`;
  document.querySelector("#occupancy-rate").textContent = `${occupancyRate}%`;
  document.querySelector("#occupancy-description").textContent =
    `${occupiedRooms.length} z ${rooms.length} pokoi`;
  document.querySelector("#occupancy-progress").style.width =
    `${occupancyRate}%`;
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
  syncListDateRangeFilter();
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
  const formatDate = (value) => {
    const date = new Date(`${value}T12:00:00`);
    return Number.isNaN(date.getTime())
      ? "Przyjadz"
      : new Intl.DateTimeFormat("pl-PL", {
          weekday: "short",
          day: "numeric",
          month: "short",
        }).format(date);
  };
  const arrival = form.elements.arrival.value;
  const departure = form.elements.departure.value;
  document.querySelector("#stay-arrival-display").textContent =
    formatDate(arrival);
  document.querySelector("#stay-departure-display").textContent =
    formatDate(departure);
}

function toIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function setStayRangePopover(open) {
  stayRangePopover.hidden = !open;
  stayRangeToggle.setAttribute("aria-expanded", String(open));
  if (!open) pendingStayStart = null;
}

function renderStayRangePicker() {
  const form = document.querySelector("#reservation-form");
  const arrival = form.elements.arrival.value;
  const departure = form.elements.departure.value;
  const activeStart = pendingStayStart || arrival;
  const activeEnd = pendingStayStart ? "" : departure;
  const secondaryMonth = new Date(
    stayPickerViewDate.getFullYear(),
    stayPickerViewDate.getMonth() + 1,
    1,
  );
  const monthFormatter = new Intl.DateTimeFormat("pl-PL", {
    month: "long",
    year: "numeric",
  });

  document.querySelector("#stay-range-month-primary").textContent =
    monthFormatter.format(stayPickerViewDate);
  document.querySelector("#stay-range-month-secondary").textContent =
    monthFormatter.format(secondaryMonth);

  const renderMonth = (viewDate, container) => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDayOffset = (new Date(year, month, 1).getDay() + 6) % 7;
    const gridStart = new Date(year, month, 1 - firstDayOffset);
    const today = toIsoDate(new Date());

    container.innerHTML = Array.from({ length: 42 }, (_, index) => {
      const date = new Date(gridStart);
      date.setDate(gridStart.getDate() + index);
      const iso = toIsoDate(date);
      const isOutside = date.getMonth() !== month;
      const isPast = iso < today;
      const classes = ["stay-range-day"];
      if (isOutside) classes.push("is-outside");
      if (isPast) classes.push("is-past");
      if (activeStart && activeEnd && iso > activeStart && iso < activeEnd)
        classes.push("is-in-range");
      if (iso === activeStart) classes.push("is-start");
      if (iso === activeEnd) classes.push("is-end");
      const disabled = isOutside || (isPast && iso !== activeStart);
      return `<button type="button" class="${classes.join(" ")}" data-stay-date="${iso}" aria-label="${new Intl.DateTimeFormat("pl-PL", { dateStyle: "long" }).format(date)}"${disabled ? " disabled" : ""}>${date.getDate()}</button>`;
    }).join("");
  };

  renderMonth(stayPickerViewDate, stayRangeDaysPrimary);
  renderMonth(secondaryMonth, stayRangeDaysSecondary);

  document.querySelector("#stay-range-hint").textContent = pendingStayStart
    ? "Wybierz datę wyjazdu"
    : "Wybierz datę przyjazdu";

  const flexibility = form.elements.dateFlexibility.value;
  stayRangePopover.querySelectorAll("[data-flex-days]").forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.flexDays === flexibility,
    );
  });
}

function getListRangeSection() {
  if (archiveOnly) return "archive";
  return reservationPeriod === "future" ? "future" : null;
}

function getActiveListDateRange() {
  const section = getListRangeSection();
  return section ? listDateRanges[section] : null;
}

function formatListRangeDate(value) {
  if (!value) return "Wybierz datę";
  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat("pl-PL", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
}

function updateListRangeDisplays() {
  const range = getActiveListDateRange();
  document.querySelector("#list-range-start-display").textContent =
    formatListRangeDate(range?.start || "");
  document.querySelector("#list-range-end-display").textContent =
    formatListRangeDate(range?.end || "");
}

function setListRangePopover(open) {
  listRangePopover.hidden = !open;
  listRangeToggle.setAttribute("aria-expanded", String(open));
  if (!open) pendingListRangeStart = null;
}

function syncListDateRangeFilter() {
  const visible = Boolean(getListRangeSection());
  listDateRangeFilter.hidden = !visible;
  if (!visible) setListRangePopover(false);
  updateListRangeDisplays();
}

function renderListRangePicker() {
  const range = getActiveListDateRange();
  if (!range) return;
  const activeStart = pendingListRangeStart || range.start;
  const activeEnd = pendingListRangeStart ? "" : range.end;
  const secondaryMonth = new Date(
    range.viewDate.getFullYear(),
    range.viewDate.getMonth() + 1,
    1,
  );
  const monthFormatter = new Intl.DateTimeFormat("pl-PL", {
    month: "long",
    year: "numeric",
  });

  document.querySelector("#list-range-month-primary").textContent =
    monthFormatter.format(range.viewDate);
  document.querySelector("#list-range-month-secondary").textContent =
    monthFormatter.format(secondaryMonth);

  const renderMonth = (viewDate, container) => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDayOffset = (new Date(year, month, 1).getDay() + 6) % 7;
    const gridStart = new Date(year, month, 1 - firstDayOffset);
    container.innerHTML = Array.from({ length: 42 }, (_, index) => {
      const date = new Date(gridStart);
      date.setDate(gridStart.getDate() + index);
      const iso = toIsoDate(date);
      const isOutside = date.getMonth() !== month;
      const classes = ["stay-range-day"];
      if (isOutside) classes.push("is-outside");
      if (activeStart && activeEnd && iso > activeStart && iso < activeEnd)
        classes.push("is-in-range");
      if (iso === activeStart) classes.push("is-start");
      if (iso === activeEnd) classes.push("is-end");
      return `<button type="button" class="${classes.join(" ")}" data-list-stay-date="${iso}" aria-label="${new Intl.DateTimeFormat("pl-PL", { dateStyle: "long" }).format(date)}"${isOutside ? " disabled" : ""}>${date.getDate()}</button>`;
    }).join("");
  };

  renderMonth(range.viewDate, listRangeDaysPrimary);
  renderMonth(secondaryMonth, listRangeDaysSecondary);
  document.querySelector("#list-range-hint").textContent = pendingListRangeStart
    ? "Wybierz datę wyjazdu"
    : "Wybierz datę przyjazdu";
  listRangePopover
    .querySelectorAll("[data-list-flex-days]")
    .forEach((button) => {
      button.classList.toggle(
        "selected",
        button.dataset.listFlexDays === range.flexibility,
      );
    });
}

function shiftIsoDate(value, days) {
  const date = new Date(`${value}T12:00:00`);
  date.setDate(date.getDate() + days);
  return toIsoDate(date);
}

function applyStayRange() {
  const form = document.querySelector("#reservation-form");
  updateDateDisplays();
  setSelectedRoom(form.elements.room.value);
  if (form.elements.arrival.value) {
    const date = new Date(`${form.elements.arrival.value}T12:00:00`);
    calendarViewDate = new Date(date.getFullYear(), date.getMonth(), 1);
  }
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
  document.querySelector("#check-in-reservation").hidden = !checkInMode;
  document.querySelector("#reservation-page-title").textContent = reservation
    ? "Edytuj rezerwację"
    : "Dodaj rezerwację";
  const submitButton = document.querySelector("#reservation-submit");
  submitButton.textContent = reservation ? "Zapisz zmiany" : "Dodaj rezerwację";
  submitButton.classList.toggle("secondary-button", Boolean(reservation));
  submitButton.classList.toggle("primary-button", !reservation);
}

function prepareNewReservation(roomNumber = "101") {
  const form = document.querySelector("#reservation-form");
  form.reset();
  manualNightlyRate = null;
  syncBreakfastConfig();
  resetAdditionalGuests();
  setReservationFormMode(null);
  checkInMode = false;
  setSelectedRoom(roomNumber);
  updateDateDisplays();
  calculateReservationTotal();
}

function populateReservationForm(reservation) {
  const form = document.querySelector("#reservation-form");
  const guest = getReservationGuestDetails(reservation);
  form.reset();
  manualNightlyRate = null;
  resetAdditionalGuests();
  setReservationFormMode(reservation);
  form.elements.guestFirstName.value = guest.firstName;
  form.elements.guestLastName.value = guest.lastName;
  form.elements.guestLocation.value = guest.location;
  form.elements.guestPhone.value = guest.phone;
  form.elements.guestEmail.value = guest.email;
  form.elements.guestBirthDate.value = guest.birthDate;
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
  syncBreakfastConfig({
    setDefaults: breakfastExtra.checked,
    guests:
      Number(reservation.breakfastGuests) ||
      1 + (reservation.companions || []).length,
    nights:
      Number(reservation.breakfastNights) || Number(reservation.nights) || 1,
  });
  const companionEntries = reservation.companionDetails?.length
    ? reservation.companionDetails
    : (reservation.companions || []).map((name) => {
        const parts = name.split(" ");
        return {
          firstName: parts.shift() || "",
          lastName: parts.join(" "),
        };
      });
  companionEntries.forEach((companion) =>
    addAdditionalGuest({ ...companion, focus: false }),
  );
  setSelectedRoom(reservation.room);
  updateDateDisplays();
  calculateReservationTotal();
  document.querySelector("#reservation-total").value = reservation.total;
  document.querySelector("#nightly-rate").value = reservation.price;
  document.querySelector("#night-count").value = reservation.nights;
  const editNights = Number(reservation.nights) || 0;
  const editNightlyRate = parsePrice(reservation.price);
  const baseNightlyRate = parsePrice(
    rooms.find((room) => room.number === reservation.room)?.price ||
      reservation.price,
  );
  manualNightlyRate =
    editNightlyRate === baseNightlyRate ? null : editNightlyRate;
  syncNightlyRateNote(baseNightlyRate, editNightlyRate);
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
  setStayRangePopover(false);
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
  setStayRangePopover(false);
  reservationPage.hidden = true;
  editingReservation = null;
  checkInMode = false;
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

function syncBreakfastConfig({ setDefaults = false, guests, nights } = {}) {
  const checked = breakfastExtra.checked;
  breakfastConfig.hidden = !checked;
  breakfastConfig
    .closest(".addon-option-group")
    .classList.toggle("is-expanded", checked);
  if (!checked || !setDefaults) return;

  const form = document.querySelector("#reservation-form");
  breakfastGuestsInput.value = Math.max(
    1,
    Number(guests) || 1 + form.querySelectorAll(".additional-guest").length,
  );
  breakfastNightsInput.value = Math.max(
    1,
    Number(nights) || Number(document.querySelector("#night-count").value) || 1,
  );
}

const nightlyRateInput = document.querySelector("#nightly-rate");
const nightlyRateNote = document.querySelector("#nightly-rate-note");

function syncNightlyRateNote(baseRate, currentRate) {
  const wasChanged = currentRate !== baseRate;
  nightlyRateNote.hidden = !wasChanged;
  nightlyRateNote.textContent = wasChanged
    ? `Stawka została zmieniona z ${formatPrice(baseRate)} na ${formatPrice(currentRate)} za noc.`
    : "";
}

function calculateReservationTotal() {
  const form = document.querySelector("#reservation-form");
  const arrival = new Date(`${form.elements.arrival.value}T00:00:00`);
  const departure = new Date(`${form.elements.departure.value}T00:00:00`);
  const difference = Math.round((departure - arrival) / 86400000);
  const nights = Number.isFinite(difference) && difference > 0 ? difference : 0;
  const room =
    rooms.find((item) => item.number === form.elements.room.value) || rooms[0];
  const baseNightlyRate = parsePrice(room.price);
  const nightlyRate = manualNightlyRate ?? baseNightlyRate;
  const guests = 1 + form.querySelectorAll(".additional-guest").length;
  let extrasTotal = 0;
  const extraItems = [];
  form.querySelectorAll('[name="extras"]:checked').forEach((extra) => {
    const price = Number(extra.dataset.price);
    let extraTotal = 0;
    let detail = `${formatPrice(price)} jednorazowo`;
    if (extra.dataset.mode === "person-night") {
      const serviceGuests =
        extra === breakfastExtra
          ? Math.max(1, Number(breakfastGuestsInput.value) || 1)
          : guests;
      const serviceNights =
        extra === breakfastExtra
          ? Math.max(1, Number(breakfastNightsInput.value) || 1)
          : nights;
      extraTotal = price * serviceGuests * serviceNights;
      detail = `${formatPrice(price)} × ${serviceGuests} os. × ${serviceNights} ${serviceNights === 1 ? "noc" : "nocy"}`;
    }
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
  nightlyRateInput.value = formatPrice(nightlyRate);
  syncNightlyRateNote(baseNightlyRate, nightlyRate);
  document.querySelector("#reservation-total").value =
    formatPrice(automaticTotal);
  document.querySelector("#price-formula").textContent =
    `${nights} ${nights === 1 ? "noc" : nights > 1 && nights < 5 ? "noce" : "nocy"} × ${formatPrice(nightlyRate)}${extrasTotal ? ` + dodatki ${formatPrice(extrasTotal)}` : ""}`;
  renderPriceReceipt(latestPricingBreakdown);
}

const reservationTotalInput = document.querySelector("#reservation-total");

function getSelectedRoomBaseRate() {
  const form = document.querySelector("#reservation-form");
  const room =
    rooms.find((item) => item.number === form.elements.room.value) || rooms[0];
  return parsePrice(room.price);
}

nightlyRateInput.addEventListener("input", () => {
  const rawValue = nightlyRateInput.value.trim();
  if (!rawValue) {
    nightlyRateNote.hidden = true;
    return;
  }
  syncNightlyRateNote(getSelectedRoomBaseRate(), parsePrice(rawValue));
});

nightlyRateInput.addEventListener("change", () => {
  const baseRate = getSelectedRoomBaseRate();
  const rawValue = nightlyRateInput.value.trim();
  const enteredRate = rawValue ? Math.max(0, parsePrice(rawValue)) : baseRate;
  manualNightlyRate = enteredRate === baseRate ? null : enteredRate;
  calculateReservationTotal();
});

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
  if (plannedGuestsSelect && guests.length < 4)
    plannedGuestsSelect.value = String(guests.length + 1);
  calculateReservationTotal();
  const selectedRoomNumber = document.querySelector(
    '#reservation-form [name="room"]',
  )?.value;
  if (selectedRoomNumber) setSelectedRoom(selectedRoomNumber);
}

function addAdditionalGuest({
  firstName = "",
  lastName = "",
  birthDate = "",
  type = "Dorosły",
  phone = "",
  email = "",
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
      <label class="field">Data urodzenia<input name="additionalGuestBirthDate[]" type="date" required></label>
      <label class="field">Typ osoby<select name="additionalGuestType[]"><option>Dorosły</option><option>Dziecko</option><option>Niemowlę</option></select></label>
      <label class="field"><span>Telefon <small>(opcjonalnie)</small></span><input name="additionalGuestPhone[]" type="tel" placeholder="+48 XXX XXX XXX"></label>
      <label class="field"><span>E-mail <small>(opcjonalnie)</small></span><input name="additionalGuestEmail[]" type="email" placeholder="gosc@example.com"></label>
    </div>`;
  additionalGuests.append(guest);
  guest.querySelector('[name="additionalGuestFirstName[]"]').value = firstName;
  guest.querySelector('[name="additionalGuestLastName[]"]').value = lastName;
  guest.querySelector('[name="additionalGuestBirthDate[]"]').value = birthDate;
  guest.querySelector('[name="additionalGuestType[]"]').value = type;
  guest.querySelector('[name="additionalGuestPhone[]"]').value = phone;
  guest.querySelector('[name="additionalGuestEmail[]"]').value = email;
  updateAdditionalGuests();
  if (focus) guest.querySelector("input").focus();
}

function resetAdditionalGuests() {
  additionalGuests.replaceChildren();
  additionalGuestIndex = 0;
  updateAdditionalGuests();
}

function formatAvailabilityWindow(start, end) {
  const startDate = new Date(`${start}T12:00:00`);
  const endDate = new Date(`${end}T12:00:00`);
  const startDay = new Intl.DateTimeFormat("pl-PL", { day: "numeric" }).format(
    startDate,
  );
  const endText = new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
  }).format(endDate);
  return `${startDay}–${endText}`;
}

function formatAvailabilityDate(value) {
  const iso = reservationDateToIso(value);
  if (!iso) return value;
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
  }).format(new Date(`${iso}T12:00:00`));
}

function getRoomAvailability(room) {
  const form = document.querySelector("#reservation-form");
  const arrival = form.elements.arrival.value;
  const departure = form.elements.departure.value;
  const plannedGuests = Number(form.elements.plannedGuests?.value || 1);
  const roomCapacity = Number.parseInt(room.capacity, 10);
  const reservedFrom = reservationDateToIso(room.reservedFrom || "");
  const hasConflict = Boolean(
    reservedFrom &&
    arrival &&
    departure &&
    reservedFrom >= arrival &&
    reservedFrom < departure,
  );
  const windowLabel =
    arrival && departure
      ? formatAvailabilityWindow(arrival, departure)
      : "wybranym terminie";

  if (editingReservation?.room === room.number) {
    return {
      available: true,
      conflict: false,
      message: `Przypisany do tej rezerwacji · ${windowLabel}`,
    };
  }

  if (room.state !== "free") {
    return {
      available: false,
      conflict: true,
      message: `${room.status} · pokój niedostępny`,
    };
  }
  if (roomCapacity < plannedGuests) {
    return {
      available: false,
      conflict: true,
      message: `Za mały dla ${plannedGuests} osób · wybierz większy pokój`,
    };
  }
  if (hasConflict) {
    return {
      available: false,
      conflict: true,
      message: `Konflikt od ${formatAvailabilityDate(room.reservedFrom)} · niedostępny na cały pobyt`,
    };
  }
  return {
    available: true,
    conflict: false,
    message: room.reservedFrom
      ? `Dostępny ${windowLabel} · kolejna rezerwacja od ${formatAvailabilityDate(room.reservedFrom)}`
      : `Dostępny ${windowLabel} · gotowy do zameldowania`,
  };
}

function setSelectedRoom(number) {
  const room = rooms.find((item) => item.number === String(number));
  if (!room) return;
  const roomInput = document.querySelector('#reservation-form [name="room"]');
  if (roomInput.value !== room.number) manualNightlyRate = null;
  roomInput.value = room.number;
  document.querySelector("#selected-room-number").textContent =
    `Pokój ${room.number}`;
  document.querySelector("#selected-room-type").textContent =
    `${room.type} · ${room.capacity} · ${room.beds}`;
  document.querySelector("#selected-room-floor").textContent = room.floor;
  document.querySelector("#selected-room-price").textContent =
    `${room.price} / noc`;
  const reservationNote = document.querySelector("#selected-room-reserved");
  const availability = getRoomAvailability(room);
  reservationNote.hidden = false;
  reservationNote.textContent = availability.message;
  reservationNote.classList.toggle("has-conflict", availability.conflict);
  reservationNote.classList.toggle("is-available", availability.available);
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
  const availability = getRoomAvailability(room);
  const selectable = availability.available;
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
      <div class="room-option-benefits"><span class="${availability.conflict ? "has-conflict" : ""}">${availability.message}</span></div>
    </div>
    <aside class="room-option-booking">
      <div class="room-option-price"><strong>${room.price}</strong><span>za noc</span></div>
      <button type="button" class="${selected && selectable ? "secondary" : ""}" data-room-number="${room.number}" ${selectable ? "" : "disabled"}>${selectable ? (selected ? "Wybrany" : "Wybierz pokój") : "Niedostępny"}</button>
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
  roomResultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "wynik" : filtered.length > 1 && filtered.length < 5 ? "wyniki" : "wyników"}`;
  roomList.innerHTML = filtered.length
    ? filtered.map(roomOptionTemplate).join("")
    : '<div class="room-list-empty">Nie znaleziono pokoi spełniających wybrane kryteria.</div>';
}

function statusBadge(status) {
  const [className, icon] = statusMeta[status];
  return `<span class="status-badge ${className}">${icon ? `<img src="${icon}" alt="">` : ""}${status}</span>`;
}

function playSuccessAnimation() {
  const container = document.querySelector("#success-lottie");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    container.classList.add("is-static");
    successAnimation?.stop();
    return;
  }

  container.classList.remove("is-static");
  if (!successAnimation) {
    successAnimation = lottie.loadAnimation({
      container,
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
    birthDate: reservation.birthDate || mapped.birthDate || "",
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
  document.querySelector("#details-birth-date").textContent = guest.birthDate
    ? isoToReservationDate(guest.birthDate)
    : "Nie podano";
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
  const nights = Number(reservation.nights) || 0;
  const nightlyRate = parsePrice(reservation.price);
  const roomTotal = nights * nightlyRate;
  const nightLabel =
    nights === 1 ? "noc" : nights > 1 && nights < 5 ? "noce" : "nocy";
  const extraControls = [
    ...document.querySelectorAll('#reservation-form [name="extras"]'),
  ];
  const guestCount = 1 + (reservation.companions?.length || 0);
  const detailExtraItems = extras.map((extra) => {
    const control = extraControls.find((item) => item.value === extra);
    const price = Number(control?.dataset.price || 0);
    const mode = control?.dataset.mode || "flat";
    const configuredGuests = Number(reservation.breakfastGuests) || guestCount;
    const configuredNights = Number(reservation.breakfastNights) || nights;
    const total =
      mode === "person-night"
        ? price * configuredGuests * configuredNights
        : mode === "night"
          ? price * nights
          : price;
    const detail =
      mode === "person-night"
        ? `${configuredGuests} os. × ${configuredNights} nocy × ${formatPrice(price)}`
        : mode === "night"
          ? `${nights} ${nightLabel} × ${formatPrice(price)}`
          : "Opłata jednorazowa";
    return { label: extra, detail, total };
  });
  const automaticTotal =
    roomTotal + detailExtraItems.reduce((sum, item) => sum + item.total, 0);
  const reservationTotal = parsePrice(reservation.total);
  const discount = Math.max(0, automaticTotal - reservationTotal);
  const discountPercent = automaticTotal
    ? (discount / automaticTotal) * 100
    : 0;

  document.querySelector("#details-stay-label").textContent =
    `${nights} ${nightLabel} × ${formatPrice(nightlyRate)}`;
  document.querySelector("#details-stay-total").textContent =
    formatPrice(roomTotal);
  document.querySelector("#details-extras-list").innerHTML = detailExtraItems
    .map(
      (item) =>
        `<div><span><b>${item.label}</b><small>${item.detail}</small></span><strong>${formatPrice(item.total)}</strong></div>`,
    )
    .join("");
  const detailsDiscount = document.querySelector("#details-discount");
  detailsDiscount.hidden = discount <= 0;
  document.querySelector("#details-discount-label").textContent =
    `Rabat -${new Intl.NumberFormat("pl-PL", { maximumFractionDigits: 1 }).format(discountPercent)}%`;
  document.querySelector("#details-discount-value").textContent =
    `-${formatPrice(discount)}`;
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

function getFreeRoomListItems() {
  return rooms
    .filter((room) => room.state === "free")
    .map((room) => ({
      room: room.number,
      type: room.type,
      guest: "",
      companions: [],
      id: "",
      note: "",
      status: "Wolne",
      arrival: "",
      departure: "",
      nights: "",
      price: room.price,
      total: "",
      payment: "",
      source: "",
      roomState: "free",
      action: "Zarezerwuj",
      isRoomOnly: true,
    }));
}

function freeRoomRowTemplate(item) {
  const room = rooms.find((candidate) => candidate.number === item.room);
  const details = roomDetails[item.room];
  const availability = getRoomAvailability(room);
  return `<tr class="free-room-row">
    <td><strong>${room.number}</strong><small>${room.floor}</small></td>
    <td><strong>${room.type}</strong><small>${details.area} m²</small></td>
    <td>${room.capacity}<small>${room.beds}</small></td>
    <td><div class="free-room-amenities">${details.amenities.map((amenity) => `<span>${amenity}</span>`).join("")}</div></td>
    <td><div class="free-room-availability ${availability.conflict ? "has-conflict" : ""}"><strong>${availability.available ? "Dostępny" : "Konflikt terminu"}</strong><span>${availability.message}</span></div></td>
    <td class="amount"><strong>${room.price}</strong><small>za noc</small></td>
    <td><button class="row-button ${availability.available ? "outlined" : ""}" data-free-room-number="${room.number}"${availability.available ? "" : " disabled"}>${availability.available ? "Zarezerwuj" : "Niedostępny"}</button></td>
  </tr>`;
}

function rowTemplate(item) {
  if (item.isRoomOnly) return freeRoomRowTemplate(item);
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
    <td><div class="row-actions"><button class="row-button ${buttonClass}" data-action="${item.action}" data-room="${item.room}">${item.action === "Zamelduj" ? "✓ " : item.action === "Zarezerwuj" ? "⊙ " : ""}${item.action}</button><button type="button" class="more-button" data-row-menu data-room="${item.room}" aria-label="Więcej akcji dla rezerwacji ${item.guest}" aria-controls="row-actions-menu" aria-haspopup="menu" aria-expanded="false"><img src="assets/ellipsis.svg" alt=""></button></div></td>
  </tr>`;
}

function getFilteredReservations() {
  const query = search.value.trim().toLocaleLowerCase("pl");
  const status = statusFilter.value;
  const payment = paymentFilter.value;
  const source = sourceFilter.value;
  const activeDateRange = getActiveListDateRange();
  const flexibility = Number(activeDateRange?.flexibility || 0);
  const rangeStart = activeDateRange?.start
    ? shiftIsoDate(activeDateRange.start, -flexibility)
    : "";
  const rangeEnd = activeDateRange?.end
    ? shiftIsoDate(activeDateRange.end, flexibility)
    : "";
  const sourceItems = statOnlyFree ? getFreeRoomListItems() : reservations;
  return sourceItems.filter((item) => {
    const haystack =
      `${item.room} ${item.type} ${item.guest} ${item.id} ${item.status} ${item.note}`.toLocaleLowerCase(
        "pl",
      );
    const isFreeRoom = item.roomState === "free" && !item.id;
    const isReservation = Boolean(item.id);
    const isArchived =
      item.period === "archive" ||
      item.status === "Anulowano" ||
      item.status === "Nie przyjechano";
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
      isFreeRoom ||
      source === "all" ||
      (item.source || "Bezpośrednio") === source;
    const itemArrival = reservationDateToIso(item.arrival);
    const itemDeparture = reservationDateToIso(item.departure) || itemArrival;
    const matchesDateRange =
      isFreeRoom ||
      !rangeStart ||
      !rangeEnd ||
      (Boolean(itemArrival) &&
        itemArrival <= rangeEnd &&
        itemDeparture >= rangeStart);
    return (
      haystack.includes(query) &&
      matchesTableScope &&
      matchesStatus &&
      matchesPayment &&
      matchesSource &&
      matchesDateRange
    );
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
  const activeDateRange = getActiveListDateRange();
  const filters = [
    activeDateRange?.start &&
      activeDateRange?.end && {
        key: "dateRange",
        label: `Termin: ${formatListRangeDate(activeDateRange.start)} – ${formatListRangeDate(activeDateRange.end)}${Number(activeDateRange.flexibility) ? ` (± ${activeDateRange.flexibility} ${activeDateRange.flexibility === "1" ? "dzień" : "dni"})` : ""}`,
      },
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
  closeRowActionsMenu();
  const filtered = getFilteredReservations();
  const freeRoomMode = statOnlyFree;
  const reservationForm = document.querySelector("#reservation-form");
  const availabilityWindow = formatAvailabilityWindow(
    reservationForm.elements.arrival.value,
    reservationForm.elements.departure.value,
  );
  tableListTitle.textContent = freeRoomMode
    ? `Wolne pokoje · ${availabilityWindow} · ${reservationForm.elements.plannedGuests.value} os.`
    : "Lista rezerwacji";
  tableCard.setAttribute(
    "aria-label",
    freeRoomMode ? "Lista wolnych pokoi" : "Lista rezerwacji",
  );
  tableCard.classList.toggle("table-free-rooms", freeRoomMode);
  reservationsColgroup.innerHTML = freeRoomMode
    ? `<col class="free-room-number"><col class="free-room-type"><col class="free-room-capacity"><col class="free-room-equipment"><col class="free-room-availability-col"><col class="free-room-price"><col class="free-room-action">`
    : `<col class="room"><col class="type"><col class="guest"><col class="status"><col class="arrival"><col class="stay-arrow"><col class="departure"><col class="nights"><col class="night-price"><col class="total"><col class="actions">`;
  reservationsHead.innerHTML = freeRoomMode
    ? `<tr><th>Pokój</th><th>Typ</th><th>Miejsca</th><th>Wyposażenie</th><th>Dostępność ${availabilityWindow}</th><th>Za noc</th><th></th></tr>`
    : `<tr><th>Pokój</th><th>Typ</th><th>Gość</th><th>Status pobytu</th><th>Przyjazd</th><th class="stay-arrow-head" aria-label="Do"></th><th>Wyjazd</th><th>Nocy</th><th>Za noc</th><th>Łącznie</th><th></th></tr>`;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  currentPage = Math.min(currentPage, totalPages);
  const pageStart = (currentPage - 1) * pageSize;
  const visibleRows = filtered.slice(pageStart, pageStart + pageSize);
  body.innerHTML = visibleRows.length
    ? visibleRows.map(rowTemplate).join("")
    : `<tr><td colspan="${freeRoomMode ? 7 : 11}" class="empty-state">${freeRoomMode ? "Brak wolnych pokoi spełniających wybrane kryteria." : "Nie znaleziono rezerwacji spełniających wybrane kryteria."}</td></tr>`;
  tableCard.classList.toggle("table-full", reservationView === "full");
  reservationsTable.setAttribute(
    "aria-label",
    freeRoomMode ? "Wolne pokoje" : "Rezerwacje",
  );
  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "wynik" : filtered.length > 1 && filtered.length < 5 ? "wyniki" : "wyników"}`;
  renderPagination(filtered.length);
  renderActiveFilters();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  window.clearTimeout(showToast.timeout);
  window.clearTimeout(showToast.hideTimeout);
  toast.hidden = false;
  toast.querySelector("span").textContent = message;
  window.requestAnimationFrame(() => toast.classList.add("show"));
  showToast.timeout = window.setTimeout(
    () => {
      toast.classList.remove("show");
      showToast.hideTimeout = window.setTimeout(() => {
        toast.hidden = true;
        toast.querySelector("span").textContent = "";
      }, 250);
    },
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
  freeOnly.checked = false;
  selectStatCard("");
  render();
});
[paymentFilter, sourceFilter].forEach((control) =>
  control.addEventListener("change", () => {
    statOnlyFree = false;
    freeOnly.checked = false;
    currentPage = 1;
    selectStatCard("");
    render();
  }),
);
freeOnly.addEventListener("change", () => {
  if (archiveOnly && freeOnly.checked) {
    archiveOnly = false;
    reservationPeriod = "current";
    syncPeriodFilterButtons();
    syncSidebarSection("current");
    syncListDateRangeFilter();
  }
  statOnlyFree = freeOnly.checked;
  currentPage = 1;
  selectStatCard(freeOnly.checked ? "free" : "");
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
  if (filter === "dateRange") {
    const range = getActiveListDateRange();
    if (range) {
      range.start = "";
      range.end = "";
      range.flexibility = "0";
      pendingListRangeStart = null;
      updateListRangeDisplays();
    }
  }

  statOnlyFree = false;
  currentPage = 1;
  selectStatCard("");
  render();
});

const filtersToggle = document.querySelector("#filters-toggle");
const filtersPopover = document.querySelector("#filters-popover");
const actionsMenuToggle = document.querySelector("#actions-menu-toggle");
const actionsMenu = document.querySelector("#actions-menu");
let activeRowMenuTrigger = null;

function closeRowActionsMenu({ restoreFocus = false } = {}) {
  const trigger = activeRowMenuTrigger;
  if (trigger) trigger.setAttribute("aria-expanded", "false");
  activeRowMenuTrigger = null;
  rowActionsMenu.hidden = true;
  rowActionsMenu.removeAttribute("data-room");
  if (restoreFocus) trigger?.focus();
}

function openRowActionsMenu(trigger) {
  if (activeRowMenuTrigger === trigger && !rowActionsMenu.hidden) {
    closeRowActionsMenu();
    return;
  }

  closeRowActionsMenu();
  activeRowMenuTrigger = trigger;
  trigger.setAttribute("aria-expanded", "true");
  rowActionsMenu.dataset.room = trigger.dataset.room;
  rowActionsMenu.hidden = false;

  const triggerRect = trigger.getBoundingClientRect();
  const menuRect = rowActionsMenu.getBoundingClientRect();
  const pageInset = 12;
  const gap = 6;
  const left = Math.min(
    window.innerWidth - menuRect.width - pageInset,
    Math.max(pageInset, triggerRect.right - menuRect.width),
  );
  const fitsBelow =
    triggerRect.bottom + gap + menuRect.height <= window.innerHeight - pageInset;
  const top = fitsBelow
    ? triggerRect.bottom + gap
    : Math.max(pageInset, triggerRect.top - menuRect.height - gap);

  rowActionsMenu.style.left = `${left}px`;
  rowActionsMenu.style.top = `${top}px`;
  rowActionsMenu.querySelector('[role="menuitem"]')?.focus();
}

function handleMenuKeyboard(event) {
  const items = [...event.currentTarget.querySelectorAll('[role="menuitem"]')];
  if (!items.length) return;
  const currentIndex = items.indexOf(document.activeElement);
  let nextIndex = currentIndex;

  if (event.key === "ArrowDown")
    nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
  else if (event.key === "ArrowUp")
    nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
  else if (event.key === "Home") nextIndex = 0;
  else if (event.key === "End") nextIndex = items.length - 1;
  else return;

  event.preventDefault();
  items[nextIndex].focus();
}

function setPopoverState(trigger, panel, open) {
  panel.hidden = !open;
  trigger.setAttribute("aria-expanded", String(open));
}

filtersToggle.addEventListener("click", () => {
  const open = filtersPopover.hidden;
  setPopoverState(filtersToggle, filtersPopover, open);
  setPopoverState(actionsMenuToggle, actionsMenu, false);
  if (open) statusFilter.focus();
});
document.querySelector("#filters-close").addEventListener("click", () => {
  setPopoverState(filtersToggle, filtersPopover, false);
  filtersToggle.focus();
});
actionsMenuToggle.addEventListener("click", () => {
  const open = actionsMenu.hidden;
  setPopoverState(actionsMenuToggle, actionsMenu, open);
  setPopoverState(filtersToggle, filtersPopover, false);
  if (open) actionsMenu.querySelector('[role="menuitem"]')?.focus();
});
actionsMenu.addEventListener("click", (event) => {
  if (event.target.closest('[role="menuitem"]')) {
    setPopoverState(actionsMenuToggle, actionsMenu, false);
    actionsMenuToggle.focus();
  }
});
actionsMenu.addEventListener("keydown", handleMenuKeyboard);
document.addEventListener("click", (event) => {
  if (
    !filtersPopover.contains(event.target) &&
    !filtersToggle.contains(event.target)
  )
    setPopoverState(filtersToggle, filtersPopover, false);
  if (
    !actionsMenu.contains(event.target) &&
    !actionsMenuToggle.contains(event.target)
  )
    setPopoverState(actionsMenuToggle, actionsMenu, false);
  if (
    !rowActionsMenu.contains(event.target) &&
    !event.target.closest("[data-row-menu]")
  )
    closeRowActionsMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const rowMenuWasOpen = !rowActionsMenu.hidden;
  const filtersWereOpen = !filtersPopover.hidden;
  const actionsWereOpen = !actionsMenu.hidden;
  setPopoverState(filtersToggle, filtersPopover, false);
  setPopoverState(actionsMenuToggle, actionsMenu, false);
  setStayRangePopover(false);
  setListRangePopover(false);
  closeRowActionsMenu({ restoreFocus: rowMenuWasOpen });
  if (!rowMenuWasOpen && filtersWereOpen) filtersToggle.focus();
  else if (!rowMenuWasOpen && actionsWereOpen) actionsMenuToggle.focus();
});
rowActionsMenu.addEventListener("click", (event) => {
  const option = event.target.closest("[data-row-option]");
  if (!option) return;
  event.preventDefault();
  closeRowActionsMenu({ restoreFocus: true });
});
rowActionsMenu.addEventListener("keydown", handleMenuKeyboard);
window.addEventListener("resize", closeRowActionsMenu);
document.addEventListener("scroll", closeRowActionsMenu, true);
document
  .querySelectorAll("[data-stat-filter]")
  .forEach((card) =>
    card.addEventListener("click", () =>
      applyStatFilter(card.dataset.statFilter),
    ),
  );
stayRangeToggle.addEventListener("click", () => {
  const open = stayRangePopover.hidden;
  if (open) {
    const form = document.querySelector("#reservation-form");
    const arrival = form.elements.arrival.value;
    pendingStayStart =
      arrival && !form.elements.departure.value ? arrival : null;
    if (arrival) {
      const date = new Date(`${arrival}T12:00:00`);
      stayPickerViewDate = new Date(
        date.getFullYear(),
        date.getMonth() - (date.getDate() <= 7 ? 1 : 0),
        1,
      );
    }
    renderStayRangePicker();
  }
  setStayRangePopover(open);
});

document.querySelector("#stay-range-prev").addEventListener("click", () => {
  stayPickerViewDate = new Date(
    stayPickerViewDate.getFullYear(),
    stayPickerViewDate.getMonth() - 1,
    1,
  );
  renderStayRangePicker();
});

document.querySelector("#stay-range-next").addEventListener("click", () => {
  stayPickerViewDate = new Date(
    stayPickerViewDate.getFullYear(),
    stayPickerViewDate.getMonth() + 1,
    1,
  );
  renderStayRangePicker();
});

stayRangePopover.addEventListener("click", (event) => {
  event.stopPropagation();
  const flexibilityButton = event.target.closest("[data-flex-days]");
  if (flexibilityButton) {
    const form = document.querySelector("#reservation-form");
    form.elements.dateFlexibility.value = flexibilityButton.dataset.flexDays;
    renderStayRangePicker();
    return;
  }

  const day = event.target.closest("[data-stay-date]");
  if (!day || day.disabled) return;
  const form = document.querySelector("#reservation-form");
  const selectedDate = day.dataset.stayDate;

  if (!pendingStayStart) {
    pendingStayStart = selectedDate;
    form.elements.arrival.value = selectedDate;
    form.elements.departure.value = "";
    renderStayRangePicker();
    updateDateDisplays();
    return;
  }

  if (selectedDate < pendingStayStart) {
    pendingStayStart = selectedDate;
    form.elements.arrival.value = selectedDate;
    renderStayRangePicker();
    updateDateDisplays();
    return;
  }

  form.elements.departure.value = selectedDate;
  pendingStayStart = null;
  applyStayRange();
  setStayRangePopover(false);
});

listRangeToggle.addEventListener("click", () => {
  const open = listRangePopover.hidden;
  if (open) renderListRangePicker();
  setListRangePopover(open);
});

document.querySelector("#list-range-prev").addEventListener("click", () => {
  const range = getActiveListDateRange();
  if (!range) return;
  range.viewDate = new Date(
    range.viewDate.getFullYear(),
    range.viewDate.getMonth() - 1,
    1,
  );
  renderListRangePicker();
});

document.querySelector("#list-range-next").addEventListener("click", () => {
  const range = getActiveListDateRange();
  if (!range) return;
  range.viewDate = new Date(
    range.viewDate.getFullYear(),
    range.viewDate.getMonth() + 1,
    1,
  );
  renderListRangePicker();
});

listRangePopover.addEventListener("click", (event) => {
  event.stopPropagation();
  const range = getActiveListDateRange();
  if (!range) return;

  const flexibilityButton = event.target.closest("[data-list-flex-days]");
  if (flexibilityButton) {
    range.flexibility = flexibilityButton.dataset.listFlexDays;
    currentPage = 1;
    renderListRangePicker();
    render();
    return;
  }

  const day = event.target.closest("[data-list-stay-date]");
  if (!day || day.disabled) return;
  const selectedDate = day.dataset.listStayDate;

  if (!pendingListRangeStart) {
    pendingListRangeStart = selectedDate;
    range.start = selectedDate;
    range.end = "";
    updateListRangeDisplays();
    renderListRangePicker();
    render();
    return;
  }

  if (selectedDate < pendingListRangeStart) {
    pendingListRangeStart = selectedDate;
    range.start = selectedDate;
    updateListRangeDisplays();
    renderListRangePicker();
    return;
  }

  range.end = selectedDate;
  pendingListRangeStart = null;
  currentPage = 1;
  updateListRangeDisplays();
  render();
  setListRangePopover(false);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".stay-range-picker")) setStayRangePopover(false);
  if (!event.target.closest(".list-stay-range-picker"))
    setListRangePopover(false);
});
document
  .querySelectorAll('#reservation-form [name="extras"]')
  .forEach((control) =>
    control.addEventListener("change", () => {
      if (control === breakfastExtra)
        syncBreakfastConfig({ setDefaults: breakfastExtra.checked });
      calculateReservationTotal();
    }),
  );
[breakfastGuestsInput, breakfastNightsInput].forEach((control) =>
  control.addEventListener("input", calculateReservationTotal),
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
    syncListDateRangeFilter();
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
    syncListDateRangeFilter();
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
  checkInMode = false;
  populateReservationForm(currentDetailsReservation);
  document.querySelector("#details-modal").close();
  openReservationPage();
});
document
  .querySelector("#success-view-reservation")
  .addEventListener("click", () => {
    document.querySelector("#success-modal").close();
    if (lastCreatedReservation) openReservationDetails(lastCreatedReservation);
  });
document
  .querySelector("#add-guest")
  .addEventListener("click", () => addAdditionalGuest());
plannedGuestsSelect.addEventListener("change", () => {
  const desiredAdditionalGuests = Number(plannedGuestsSelect.value) - 1;
  let guests = [...additionalGuests.querySelectorAll(".additional-guest")];
  while (guests.length < desiredAdditionalGuests) {
    addAdditionalGuest({ focus: false });
    guests = [...additionalGuests.querySelectorAll(".additional-guest")];
  }
  while (guests.length > desiredAdditionalGuests) {
    guests.at(-1).remove();
    guests = [...additionalGuests.querySelectorAll(".additional-guest")];
  }
  updateAdditionalGuests();
  roomCapacityFilter.value = plannedGuestsSelect.value;
  setSelectedRoom(
    document.querySelector('#reservation-form [name="room"]').value,
  );
});
additionalGuests.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-guest]");
  if (!removeButton) return;
  removeButton.closest(".additional-guest").remove();
  updateAdditionalGuests();
});
body.addEventListener("click", (event) => {
  const rowMenuButton = event.target.closest("[data-row-menu]");
  if (rowMenuButton) {
    event.stopPropagation();
    openRowActionsMenu(rowMenuButton);
    return;
  }
  const freeRoomButton = event.target.closest("[data-free-room-number]");
  if (freeRoomButton && !freeRoomButton.disabled) {
    prepareNewReservation(freeRoomButton.dataset.freeRoomNumber);
    openReservationPage();
    return;
  }
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
    if (actionButton.dataset.action === "Zamelduj") {
      checkInMode = true;
      populateReservationForm(reservation);
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
    if (!form.elements.arrival.value || !form.elements.departure.value) {
      renderStayRangePicker();
      setStayRangePopover(true);
      stayRangeToggle.focus();
      return;
    }
    if (!editingReservation) {
      const selectedRoom = rooms.find(
        (room) => room.number === form.elements.room.value,
      );
      if (!selectedRoom || !getRoomAvailability(selectedRoom).available) {
        showToast("Wybrany pokój nie jest dostępny przez cały pobyt");
        document.querySelector("#room-picker").showModal();
        return;
      }
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const additionalCount = form.querySelectorAll(".additional-guest").length;
    const guestName =
      `${data.get("guestFirstName")} ${data.get("guestLastName")}`.trim();
    const companionFirstNames = data.getAll("additionalGuestFirstName[]");
    const companionLastNames = data.getAll("additionalGuestLastName[]");
    const companionBirthDates = data.getAll("additionalGuestBirthDate[]");
    const companionTypes = data.getAll("additionalGuestType[]");
    const companionPhones = data.getAll("additionalGuestPhone[]");
    const companionEmails = data.getAll("additionalGuestEmail[]");
    const companionDetails = companionFirstNames.map((firstName, index) => ({
      firstName: String(firstName).trim(),
      lastName: String(companionLastNames[index] || "").trim(),
      birthDate: companionBirthDates[index] || "",
      type: companionTypes[index] || "Dorosły",
      phone: String(companionPhones[index] || "").trim(),
      email: String(companionEmails[index] || "").trim(),
    }));
    const companionNames = companionDetails
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`.trim())
      .filter(Boolean);
    if (editingReservation) {
      const selectedRoom = rooms.find(
        (room) => room.number === data.get("room"),
      );
      editingReservation.firstName = data.get("guestFirstName").trim();
      editingReservation.lastName = data.get("guestLastName").trim();
      editingReservation.guest = guestName;
      editingReservation.birthDate = data.get("guestBirthDate");
      editingReservation.location = data.get("guestLocation").trim();
      editingReservation.phone = data.get("guestPhone").trim();
      editingReservation.email = data.get("guestEmail").trim();
      editingReservation.companions = companionNames;
      editingReservation.companionDetails = companionDetails;
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
      editingReservation.breakfastGuests = Number(data.get("breakfastGuests"));
      editingReservation.breakfastNights = Number(data.get("breakfastNights"));
      editingReservation.note = data.get("notes").trim();
      editingReservation = null;
      setReservationFormMode(null);
      closeReservationPage();
      render();
      updateHotelStats();
      showToast("Zmiany w rezerwacji zostały zapisane");
      return;
    }
    const selectedRoom = rooms.find((room) => room.number === data.get("room"));
    const nextReservationNumber =
      Math.max(
        ...reservations
          .map((reservation) =>
            Number(String(reservation.id).replace(/\D/g, "")),
          )
          .filter(Number.isFinite),
      ) + 1;
    lastCreatedReservation = {
      firstName: data.get("guestFirstName").trim(),
      lastName: data.get("guestLastName").trim(),
      guest: guestName,
      birthDate: data.get("guestBirthDate"),
      location: data.get("guestLocation").trim(),
      phone: data.get("guestPhone").trim(),
      email: data.get("guestEmail").trim(),
      companions: companionNames,
      companionDetails,
      id: `#${nextReservationNumber}`,
      room: data.get("room"),
      type: selectedRoom?.capacity || "—",
      status: "Oczekujące",
      arrival: isoToReservationDate(data.get("arrival")),
      departure: isoToReservationDate(data.get("departure")),
      nights: Number(document.querySelector("#night-count").value),
      price: document.querySelector("#nightly-rate").value,
      total: data.get("total"),
      payment: data.get("paymentMethod"),
      paymentStatus: data.get("paymentStatus"),
      source: data.get("source"),
      extras: data.getAll("extras"),
      breakfastGuests: Number(data.get("breakfastGuests")),
      breakfastNights: Number(data.get("breakfastNights")),
      note: data.get("notes").trim(),
      roomState: "occupied",
      period: "current",
      action: "Zamelduj",
      mine: true,
    };
    reservations.unshift(lastCreatedReservation);
    document.querySelector("#success-guest").textContent =
      `${guestName}${additionalCount ? ` + ${additionalCount} ${additionalCount === 1 ? "osoba" : "osoby"}` : ""}`;
    document.querySelector("#success-room").textContent =
      `Pokój ${data.get("room")}`;
    document.querySelector("#success-total").textContent = data.get("total");
    document.querySelector("#success-payment").textContent =
      `${data.get("paymentStatus")} · ${data.get("paymentMethod")}`;
    closeReservationPage();
    render();
    updateHotelStats();
    document.querySelector("#success-modal").showModal();
    playSuccessAnimation();
    form.reset();
    syncBreakfastConfig();
    resetAdditionalGuests();
    updateDateDisplays();
    setSelectedRoom("101");
  });

syncListDateRangeFilter();
render();
renderRoomPicker();
syncBreakfastConfig();
calculateReservationTotal();
updateDateDisplays();
renderStayRangePicker();
renderReservationCalendar();
updateHotelStats();
