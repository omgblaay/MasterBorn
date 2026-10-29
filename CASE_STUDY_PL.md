# Hotel Manager — proces projektowy

## Wersja krótka: jak opowiedzieć o projekcie w 3–4 minuty

### 1. Kontekst i problem

Punktem wyjścia był istniejący widok recepcyjny, w którym w jednej tabeli mieszały się rezerwacje, wolne pokoje i pokoje wyłączone z użytku. Najważniejszym problemem nie była sama estetyka, ale **niejednoznaczna dostępność pokoju** — recepcjonista nie mógł szybko potwierdzić, który pokój jest dostępny przez cały planowany pobyt.

Projekt miał być działającym prototypem bez backendu. Celem było uporządkowanie informacji, skrócenie czasu skanowania tabeli i pokazanie najważniejszych przepływów: filtrowania, wyboru pokoju, dodania rezerwacji, podglądu szczegółów oraz edycji.

### 2. Jak podszedłem do rozwiązania

Najpierw rozdzieliłem trzy pojęcia, które wcześniej były ze sobą zmieszane:

- **rezerwacja** — rekord gościa i jego pobytu;
- **pokój** — zasób ze statusem, pojemnością i wyposażeniem;
- **dostępność** — informacja zależna od wybranego terminu.

Na tej podstawie tabela „Rezerwacje” pokazuje domyślnie tylko rezerwacje. Wolne pokoje można włączyć osobnym przełącznikiem, a pełny wybór pokoju odbywa się w dedykowanym oknie z filtrami i informacją o przyszłych rezerwacjach.

### 3. Najważniejsze decyzje projektowe

- Dodałem karty podsumowania: wolne pokoje, aktualni goście, wszystkie pokoje i pokoje zajęte. Kliknięcie karty filtruje tabelę.
- Podzieliłem rezerwacje w menu na aktualne, przyszłe i archiwalne.
- Wprowadziłem dwa poziomy gęstości tabeli. Widok kompaktowy służy szybkiemu skanowaniu, a pełny pokazuje m.in. numer rezerwacji, osoby dodatkowe i parametry pokoju.
- Formularz nowej rezerwacji został przeniesiony na osobną stronę. Obok niego znajduje się kalendarz dostępności wybranego pokoju.
- Szczegóły rezerwacji są tylko do odczytu. „Edytuj” prowadzi do tego samego formularza co „Nowa rezerwacja”, ale z uzupełnionymi danymi.
- Filtry zostały schowane pod jednym przyciskiem. Aktywne kryteria pozostają widoczne jako usuwalne pille pod wyszukiwarką.

### 4. Iteracja

Projekt powstawał iteracyjnie. Po każdej zmianie sprawdzałem, czy informacja jest wystarczająco jednoznaczna i czy użytkownik nie musi interpretować danych. Przykłady:

- dzień tygodnia został włączony do wartości daty zamiast osobnego tagu;
- notatka gościa została oddzielona od nazwiska;
- identyfikator rezerwacji jest widoczny dopiero w pełnym widoku;
- „Anuluj” i „X” otrzymały zachowanie niezależne od wysłania formularza;
- status i metoda płatności zostały rozdzielone;
- po zapisie rezerwacji pojawia się osobny ekran sukcesu.

### 5. Rezultat i ograniczenia

Rezultatem jest statyczny, interaktywny prototyp HTML/CSS/JS pokazujący główne przepływy bez backendu. Dzięki rozdzieleniu rezerwacji, pokoju i dostępności interfejs lepiej odpowiada na podstawowe pytanie recepcjonisty: **czy mogę bezpiecznie przydzielić ten pokój na cały pobyt?**

Gdybym rozwijał projekt dalej, kolejnym krokiem byłyby testy z recepcjonistami, walidacja konfliktów terminów na prawdziwych danych oraz scenariusze wyjątkowe: zmiana pokoju w trakcie pobytu, częściowe płatności i rezerwacje grupowe.

---

## Ślad pracy

### Pierwszy prompt do AI

> Implement this design from Figma. Dummy view with no backend logic but just modals, filtering etc. For CSS use tokens. There will be 1 or 2 modals that we will open (with JS).

Ten prompt ustalił trzy ograniczenia: zgodność z kierunkiem wizualnym z Figmy, brak backendu oraz konieczność pokazania interakcji w działającym prototypie.

### Najważniejsze iteracje z rozmowy

1. Ustalenie bazowej typografii: `1rem = 16px`.
2. Naprawa zachowania „Anuluj” i „X” w formularzu.
3. Zamiana pola „Pokój” z dropdownu na kartę otwierającą wybór pokoju.
4. Dodanie statusów pokoi, filtrów wyposażenia i informacji o przyszłej rezerwacji.
5. Dodanie widoku kompaktowego i pełnego.
6. Rozbudowanie formularza o osoby dodatkowe, źródło, usługi, płatność i podsumowanie ceny.
7. Przeniesienie formularza na osobną stronę z kalendarzem dostępności.
8. Dodanie statystyk, paginacji i eksportu.
9. Uporządkowanie szczegółów rezerwacji jako widoku tylko do odczytu.
10. Redukcja ciężaru typografii i formularzy oraz dopracowanie hierarchii informacji.
11. Przeniesienie filtrów i akcji drugorzędnych do menu kontekstowych.
12. Pokazanie aktywnych filtrów jako usuwalnych pilli.

### Tablica sticky notes

| Obserwacje                                        | Pytania projektowe                              | Decyzje                                                 | Walidacja                                        |
| ------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------ |
| Rezerwacje i pokoje są pomieszane.                | Co recepcjonista musi zobaczyć w 3 sekundy?     | Tabela pokazuje rezerwacje; wolne pokoje są opcjonalne. | Czy bez liczenia wierszy widać obłożenie?        |
| Status pobytu jest ukryty w nazwisku lub notatce. | Czy status jest jednoznaczny bez interpretacji? | Jawne statusy pobytu i płatności.                       | Czy „wyjazd” i „do 14:00” nadal są mylone?       |
| Brakuje pewności dostępności przez cały termin.   | Jak pokazać konflikt z przyszłą rezerwacją?     | Kalendarz i przyszłe rezerwacje przy wybranym pokoju.   | Czy użytkownik może wybrać zajęty pokój?         |
| Tabela jest zbyt szeroka i ciężka.                | Które dane są potrzebne zawsze?                 | Widok kompaktowy i pełny.                               | Czy ważne dane nie znikają w kompaktowym widoku? |
| Filtry zajmują dużo miejsca.                      | Jak zachować widoczność aktywnego stanu?        | Panel „Filtry” + pille pod wyszukiwarką.                | Czy każdy filtr można usunąć jednym kliknięciem? |

### Materiały, które warto pokazać podczas prezentacji

1. Oryginalny ekran lub referencję z Figmy.
2. Zrzut pierwszego promptu i 2–3 późniejszych iteracji, np. wybór pokoju, widok pełny/kompaktowy i filtry.
3. Tablicę procesu z pliku `process-board.html`.
4. Aktualny widok tabeli w trybie kompaktowym i pełnym.
5. Formularz rezerwacji z kalendarzem pokoju.
6. Widok szczegółów oraz przejście do edycji.

### Proponowane podpisy pod zrzutami

- **Punkt wyjścia:** interfejs mieszał rezerwacje, pokoje i status operacyjny.
- **Hipoteza:** rozdzielenie obiektów skróci czas potrzebny na ocenę dostępności.
- **Eksploracja:** warianty gęstości tabeli i sposobu wyboru pokoju.
- **Iteracja z AI:** szybkie wdrażanie zmian pozwoliło oceniać decyzje na działającym prototypie.
- **Rezultat:** mniej informacji domyślnie, więcej kontekstu na żądanie.

## Checklist przed prezentacją

- [ ] Wykonać zrzut pierwszego promptu z rozmowy.
- [ ] Wykonać zrzut 2–3 istotnych iteracji, nie całej historii.
- [ ] Dodać jeden wczesny szkic lub prosty wireframe.
- [ ] Pokazać porównanie „przed / po”.
- [ ] Zaznaczyć, które elementy są prototypem bez backendu.
- [ ] Zakończyć jednym wnioskiem i jednym następnym krokiem.
