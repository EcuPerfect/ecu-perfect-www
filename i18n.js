/* ECU-Perfect – przełącznik języka PL/EN (v1.0)
 * Teksty polskie są w HTML. Słownik EN mapuje polski tekst -> angielski.
 * Język: zapisany wybór > język przeglądarki (pl => PL, inne => EN).
 * API: I18N.t(pl,en), I18N.f(liczba,miejsca), I18N.onChange(fn), I18N.set('pl'|'en'), I18N.lang()
 */
(function () {
  'use strict';
  var EN = {
"ECU-Perfect – chiptuning Wrocław": "ECU-Perfect – chip tuning, Wrocław",
"ECU-Perfect – chiptuning, hamownia, diagnostyka komputerowa. Wrocław. Zajrzyj na nasz profil na Facebooku.": "ECU-Perfect – chip tuning, dyno, computer diagnostics. Wrocław, Poland. Visit our Facebook profile.",
"Usługi": "Services",
"Narzędzia": "Tools",
"Kontakt": "Contact",
"Zapraszamy na nasz": "Visit our",
"profil na Facebooku": "Facebook page",
"Realizacje, wyniki z hamowni, ciekawe projekty. Napisz, jeśli masz pytanie o swoje auto.": "Projects, dyno results, interesting builds. Write to us if you have a question about your car.",
"Odwiedź nas na Facebooku": "Visit us on Facebook",
"Czym się zajmujemy": "What we do",
"Indywidualny chiptuning z pomiarem mocy oraz diagnostyką komputerową.": "Individual chip tuning with power measurement and computer diagnostics.",
"Moc silnika diesla na podstawie parametrów live-data": "Diesel engine power based on live-data parameters",
"Szacuje moc i moment silnika diesla na podstawie obrotów, dawki paliwa (mg/suw), doładowania, lambdy i pojemności. Opcjonalnie uwzględnia dyszę nitro.": "Estimates diesel engine power and torque from RPM, fuel quantity (mg/stroke), boost, lambda and displacement. Optionally accounts for a nitrous jet.",
"Otwórz kalkulator": "Open calculator",
"Moc silnika benzynowego (turbo) na podstawie parametrów live-data": "Petrol (turbo) engine power based on live-data parameters",
"Szacuje moc i moment turbodoładowanego silnika benzynowego z doładowania, VE lub MAF, lambdy i paliwa (benzyna, E85, mieszanki). Podpowiada też przepływ powietrza i rozmiar wtryskiwaczy.": "Estimates power and torque of a turbocharged petrol engine from boost, VE or MAF, lambda and fuel (petrol, E85, blends). Also suggests airflow and injector size.",
"Kalkulator obwodu opon": "Tyre circumference calculator",
"Liczy obwód opony (np. 225/55 R17) i pokazuje zamienniki o najbliższym obwodzie z różnicą w cm i w procentach oraz wpływem na prędkościomierz.": "Calculates tyre circumference (e.g. 225/55 R17) and shows replacement sizes with the closest circumference, with the difference in cm and in percent and the effect on the speedometer.",
"Moc silnika na podstawie przyspieszenia 100–200 km/h": "Engine power based on 100–200 km/h acceleration",
"Szacuje moc silnika na podstawie masy auta i zmierzonego czasu przyspieszenia od 100 do 200 km/h.": "Estimates engine power from the car’s mass and the measured 100–200 km/h acceleration time.",
"Prędkość auta na biegach": "Car speed in each gear",
"Prędkość na każdym z 8 biegów z obrotów silnika, przełożeń skrzyni, dyferencjału i rozmiaru opon.": "Speed in each of up to 8 gears from engine RPM, gearbox ratios, final drive and tyre size.",
"Przelicznik jednostek mocy": "Power unit converter",
"kW, KM (PS), HP oraz Nm, lb-ft, kGm – plus przeliczanie mocy na moment przy zadanych obrotach.": "kW, PS (metric hp), HP as well as Nm, lb-ft, kgf·m – plus conversion between power and torque at a given RPM.",
"Otwórz przelicznik": "Open converter",
"Linki": "Links",
"Przydatne linki": "Useful links",
"Wiki o sterownikach (ME7, MS4x, Simos, EDC17), kody błędów BMW i VAG, narzędzia do tuningu, kalkulatory turbo i katalogi części – z krótkim opisem każdej strony.": "Wikis on ECUs (ME7, MS4x, Simos, EDC17), BMW and VAG fault codes, tuning tools, turbo calculators and parts catalogues – each with a short description.",
"Zobacz linki": "See links",
"Wyniki kalkulatorów mocy silnika są orientacyjne i nie zastępują pomiaru na hamowni.": "Engine power calculator results are approximate and do not replace a dyno measurement.",
"Kopiowanie, przerabianie i wykorzystywanie treści, narzędzi oraz logo tej strony wymaga zgody. Udostępnianie linków jest dozwolone.": "Copying, modifying or using the content, tools and logo of this site requires permission. Sharing links is allowed.",
"Najszybciej telefonicznie lub przez Facebooka.": "Fastest by phone or via Facebook.",
"Telefon": "Phone",
"Kopiowanie, przerabianie i wykorzystywanie treści, narzędzi oraz logo tej strony wymaga zgody. Udostępnianie linków jest dozwolone. Wyniki są orientacyjne.": "Copying, modifying or using the content, tools and logo of this site requires permission. Sharing links is allowed. Results are approximate.",
"© ECU-Perfect · chiptuning · Wrocław ·": "© ECU-Perfect · chip tuning · Wrocław ·",
"© ECU-Perfect · chiptuning · Wrocław": "© ECU-Perfect · chip tuning · Wrocław",
"Moc silnika diesla na podstawie parametrów live-data – ECU-Perfect": "Diesel engine power based on live-data parameters – ECU-Perfect",
"Darmowy kalkulator szacujący moc i moment silnika diesla na podstawie obrotów, dawki paliwa, doładowania, lambdy i pojemności.": "Free calculator estimating diesel engine power and torque from RPM, fuel quantity, boost, lambda and displacement.",
"← Strona główna": "← Home",
"Szacuje moc i moment silnika diesla na podstawie obrotów, dawki paliwa (mg/suw), doładowania, pojemności oraz opcjonalnie lambdy i dyszy nitro. Kropka lub przecinek – oba działają.": "Estimates diesel engine power and torque from RPM, fuel quantity (mg/stroke), boost, displacement and, optionally, lambda and a nitrous jet. Dot or comma – both work.",
"Dane wejściowe": "Input data",
"Obroty [rpm]": "Engine speed [rpm]",
"np. 3800": "e.g. 3800",
"Paliwo [mg/suw/cyl]": "Fuel [mg/stroke/cyl]",
"np. 50": "e.g. 50",
"Doładowanie względne [bar]": "Boost (gauge) [bar]",
"np. 1.8": "e.g. 1.8",
"Liczba cylindrów": "Number of cylinders",
"np. 6": "e.g. 6",
"Pojemność silnika [l]": "Engine displacement [l]",
"np. 3.0": "e.g. 3.0",
"VE – sprawność napełnienia [%]": "VE – volumetric efficiency [%]",
"np. 90": "e.g. 90",
"Opcjonalnie": "Optional",
"np. 1.1 (puste = z powietrza)": "e.g. 1.1 (empty = from air)",
"Nitro: dysza [cale]": "Nitrous: jet [inches]",
"np. 0.042 (puste = brak nitro)": "e.g. 0.042 (empty = no nitrous)",
"Nitro: ciśnienie butli [bar]": "Nitrous: bottle pressure [bar]",
"np. 62": "e.g. 62",
"Korekty": "Corrections",
"Temp. powietrza za chłodnicą [°C]": "Air temp. after intercooler [°C]",
"np. 45": "e.g. 45",
"Korekta wyniku [%]": "Result correction [%]",
"np. 100 (mnożnik wyniku)": "e.g. 100 (result multiplier)",
"Oblicz": "Calculate",
"Dodaj do tabeli": "Add to table",
"Wynik": "Result",
"Moment": "Torque",
"Moc": "Power",
"KM": "hp",
"Moc [kW]": "Power [kW]",
"Doładowanie abs. [bar]": "Boost abs. [bar]",
"Powietrze [mg/suw/cyl]": "Air [mg/stroke/cyl]",
"Tabela punktów": "Points table",
"Eksport CSV": "Export CSV",
"Wyczyść tabelę": "Clear table",
"Wyniki mają charakter orientacyjny (model uproszczony) i nie zastępują pomiaru na hamowni. Pole „Korekta wyniku\" pozwala skalibrować model do znanego pomiaru, np. 95 daje wynik o ok. 5% niższy.": "Results are approximate (simplified model) and do not replace a dyno measurement. The “Result correction” field lets you calibrate the model to a known measurement, e.g. 95 gives a result about 5% lower.",
"Moc silnika benzynowego (turbo) na podstawie parametrów live-data – ECU-Perfect": "Petrol (turbo) engine power based on live-data parameters – ECU-Perfect",
"Darmowy kalkulator szacujący moc i moment turbodoładowanego silnika benzynowego na podstawie obrotów, doładowania, pojemności, VE, lambdy i rodzaju paliwa (benzyna, E85, mieszanki).": "Free calculator estimating power and torque of a turbocharged petrol engine from RPM, boost, displacement, VE, lambda and fuel type (petrol, E85, blends).",
"Szacuje moc i moment turbodoładowanego silnika benzynowego na podstawie ilości powietrza (doładowanie + VE albo wskazanie MAF), lambdy i rodzaju paliwa. Dodatkowo podpowiada przepływ powietrza, zużycie paliwa i minimalny rozmiar wtryskiwaczy. Kropka lub przecinek – oba działają.": "Estimates power and torque of a turbocharged petrol engine from the amount of air (boost + VE, or MAF reading), lambda and fuel type. Also suggests airflow, fuel consumption and minimum injector size. Dot or comma – both work.",
"np. 5500": "e.g. 5500",
"np. 1.2 (puste, jeśli podasz MAF)": "e.g. 1.2 (empty if you enter MAF)",
"np. 2.0": "e.g. 2.0",
"np. 95 (turbobenzyny: 85–105)": "e.g. 95 (turbo petrol: 85–105)",
"np. 0.85 (pełne doładowanie 0.78–0.90)": "e.g. 0.85 (full boost 0.78–0.90)",
"Paliwo": "Fuel",
"wpływa na AFR i energię": "affects AFR and energy content",
"Benzyna 95/98": "Petrol 95/98",
"Własna mieszanka…": "Custom blend…",
"Zawartość etanolu [%]": "Ethanol content [%]",
"np. 30 (E30)": "e.g. 30 (E30)",
"MAF – przepływ powietrza [g/s]": "MAF – airflow [g/s]",
"np. 190 (puste = z doładowania i VE)": "e.g. 190 (empty = from boost and VE)",
"np. 4 (do doboru wtryskiwaczy)": "e.g. 4 (for injector sizing)",
"Przepływ powietrza": "Airflow",
"VE (użyte / wyliczone)": "VE (used / calculated)",
"Zużycie paliwa": "Fuel consumption",
"Wtryskiwacz (przy 80% wypełnienia)": "Injector (at 80% duty cycle)",
"g/s powietrza": "air g/s",
"Wyniki mają charakter orientacyjny (model uproszczony; realnie ±10% przy dobrej kalibracji). Moc benzynowego silnika turbo zależy też od wyprzedzenia zapłonu, detonacji i temperatury, których kalkulator nie zna. Pole „Korekta wyniku\" pozwala skalibrować model do znanego pomiaru z hamowni, np. 95 daje wynik o ok. 5% niższy.": "Results are approximate (simplified model; realistically ±10% with good calibration). Turbo petrol engine power also depends on ignition timing, knock and temperature, which the calculator does not know. The “Result correction” field lets you calibrate the model to a known dyno measurement, e.g. 95 gives a result about 5% lower.",
"Kalkulator obwodu opon i zamienników v1.0 – ECU-Perfect": "Tyre circumference and replacement sizes calculator v1.0 – ECU-Perfect",
"Oblicz obwód opony (np. 225/55 R17) i znajdź zamienniki o najbliższym obwodzie z różnicą w cm i procentach oraz wpływem na prędkościomierz.": "Calculate tyre circumference (e.g. 225/55 R17) and find replacement sizes with the closest circumference, with the difference in cm and percent and the effect on the speedometer.",
"Kalkulator obwodu opon v1.0": "Tyre circumference calculator v1.0",
"Wybierz rozmiar opony (szerokość / profil / średnica felgi). Kalkulator policzy obwód w cm i pokaże zamienniki o najbliższym obwodzie wraz z różnicą w cm i w procentach oraz wpływem na prędkościomierz.": "Choose the tyre size (width / aspect ratio / rim diameter). The calculator computes the circumference in cm and shows replacement sizes with the closest circumference, including the difference in cm and percent and the effect on the speedometer.",
"Twoja opona": "Your tyre",
"Szerokość [mm]": "Width [mm]",
"Profil [%]": "Aspect ratio [%]",
"Felga [cale]": "Rim [inches]",
"Obwód": "Circumference",
"Średnica opony": "Tyre diameter",
"Wysokość boku": "Sidewall height",
"Obrotów na 1 km": "Revolutions per 1 km",
"Zamienniki": "Replacement sizes",
"Maks. różnica obwodu [%]": "Max. circumference difference [%]",
"Średnica felgi": "Rim diameter",
"Ta sama felga": "Same rim",
"±1 cal": "±1 inch",
"±2 cale": "±2 inches",
"Dowolna": "Any",
"Ile wyników": "Number of results",
"Rozmiar": "Size",
"Rozmiar:": "Size:",
"Obwód [cm]": "Circumference [cm]",
"Różnica [cm]": "Difference [cm]",
"Różnica [%]": "Difference [%]",
"Średnica [cm]": "Diameter [cm]",
"Prędkościomierz: wskazuje 100 → rzecz.": "Speedometer: shows 100 → actual",
"Brak zamienników w podanych granicach – zwiększ dopuszczalną różnicę lub rozszerz zakres felg.": "No replacement sizes within the given limits – increase the allowed difference or widen the rim range.",
"Obwód = π × (średnica felgi + 2 × szerokość × profil). Wartości dotyczą rozmiarów nominalnych – faktyczny obwód zależy od producenta, zużycia bieżnika, ciśnienia i obciążenia. Zwykle przyjmuje się, że różnica do ok. ±2% jest bezpieczna dla prędkościomierza i układów ABS/ESP, ale zawsze sprawdź dozwolone rozmiary w dowodzie rejestracyjnym lub dokumentacji pojazdu i dobierz nośność oraz indeks prędkości. Prędkościomierz: gdy wskazuje 100 km/h, rzeczywista prędkość to 100 × obwód nowej / obwód oryginalnej opony. Kalkulator ma charakter pomocniczy.": "Circumference = π × (rim diameter + 2 × width × aspect ratio). Values refer to nominal sizes – the actual circumference depends on the manufacturer, tread wear, pressure and load. A difference of up to about ±2% is usually considered safe for the speedometer and ABS/ESP systems, but always check the permitted sizes in the vehicle registration document or manual and choose the proper load and speed index. Speedometer: when it shows 100 km/h, the actual speed is 100 × new circumference / original tyre circumference. The calculator is for guidance only.",
"Moc silnika na podstawie przyspieszenia 100–200 km/h – ECU-Perfect": "Engine power based on 100–200 km/h acceleration – ECU-Perfect",
"Oszacuj moc silnika na podstawie czasu przyspieszenia 100–200 km/h i masy auta.": "Estimate engine power from the 100–200 km/h acceleration time and the car’s mass.",
"Podaj masę auta i zmierzony czas przyspieszenia od 100 do 200 km/h – kalkulator oszacuje moc silnika.": "Enter the car’s mass and the measured 100 to 200 km/h acceleration time – the calculator estimates engine power.",
"Dane": "Data",
"Masa auta [kg]": "Car mass [kg]",
"np. 1600": "e.g. 1600",
"Kierowca + ładunek [kg]": "Driver + load [kg]",
"np. 120": "e.g. 120",
"Czas 100–200 km/h [s]": "100–200 km/h time [s]",
"np. 14,5": "e.g. 14.5",
"Nachylenie drogi [%]": "Road gradient [%]",
"np. 1 (pod górę), -1 (z górki), 0 = płasko": "e.g. 1 (uphill), -1 (downhill), 0 = flat",
"Napęd": "Drivetrain",
"wpływa na straty w układzie napędowym": "affects drivetrain losses",
"Przedni (FWD) – straty ok. 10%": "Front-wheel drive (FWD) – losses approx. 10%",
"Tylny (RWD) – straty ok. 12%": "Rear-wheel drive (RWD) – losses approx. 12%",
"4x4 (xDrive/quattro) – straty ok. 16%": "4x4 (xDrive/quattro) – losses approx. 16%",
"Cd × pow.czołowa [m²]": "Cd × frontal area [m²]",
"Opis do raportu": "Report description",
"Wykorzystanie mocy szczytowej [%]": "Peak power utilisation [%]",
"średnio na odcinku; np. 90 (turbodiesel 85–90, turbobenzyna 90–95, wolnossąca 80–85)": "average over the run; e.g. 90 (turbodiesel 85–90, turbo petrol 90–95, naturally aspirated 80–85)",
"Wybierz zdjęcia": "Choose photos",
"Zdjęcia do raportu (maks. 2)": "Photos for the report (max. 2)",
"opcjonalnie, np. wynik z aplikacji (Dragy) lub zdjęcie auta; możesz też wkleić ze schowka (Ctrl+V); zostają w Twojej przeglądarce, nigdzie nie są wysyłane": "optional, e.g. a result screenshot from an app (Dragy) or a photo of the car; you can also paste from the clipboard (Ctrl+V); they stay in your browser and are not uploaded anywhere",
"np. BMW 335d, Stage 1": "e.g. BMW 335d, Stage 1",
"Raport / wydruk": "Report / print",
"np. 0,65 (typowo 0,6–0,75)": "e.g. 0.65 (typically 0.6–0.75)",
"Moc silnika": "Engine power",
"Moc na kołach": "Wheel power",
"Czas 100–200 po korekcie na 0%": "100–200 time corrected to 0%",
"Moc / masa": "Power / mass",
"KM/t": "hp/t",
"Model: moc na kołach = moc silnika pomniejszona o straty napędu wybranego typu (FWD 90%, RWD 88%, 4x4 84% sprawności; skrzynia pomijana), uwzględnia opór powietrza i toczenia. Pole „Wykorzystanie mocy szczytowej\" określa, jaką część mocy maksymalnej silnik oddaje średnio na całym odcinku (zmiany biegów, spadek mocy na wysokich obrotach); domyślnie 90%. Wartości w podpowiedzi są orientacyjne. Wynik to szacunek – dokładność zależy od jakości pomiaru czasu (najlepiej GPS), wiatru, nachylenia drogi, przełożeń i aerodynamiki auta. Nachylenie: wpisz średnie nachylenie odcinka (+ pod górę, − z górki) – kalkulator wyliczy moc z uwzględnieniem siły ciężkości, a następnie pokaże, jaki czas auto uzyska na płaskiej drodze. Wiatru nie uwzględniamy. Najlepiej mierz w obu kierunkach i uśrednij.": "Model: wheel power = engine power minus drivetrain losses of the selected type (FWD 90%, RWD 88%, 4x4 84% efficiency; gearbox ignored), taking air drag and rolling resistance into account. The “Peak power utilisation” field sets what share of maximum power the engine delivers on average over the whole run (gear changes, power drop at high RPM); default 90%. The values in the hint are indicative. The result is an estimate – accuracy depends on the quality of the time measurement (preferably GPS), wind, road gradient, gear ratios and the car’s aerodynamics. Gradient: enter the average gradient of the section (+ uphill, − downhill) – the calculator computes power taking gravity into account and then shows the time the car would achieve on a flat road. Wind is not taken into account. It is best to measure in both directions and average.",
"Prędkość auta na biegach v1.0 – ECU-Perfect": "Car speed in each gear v1.0 – ECU-Perfect",
"Oblicz prędkość auta z obrotów silnika, przełożeń skrzyni, dyferencjału i rozmiaru opon – i odwrotnie.": "Calculate car speed from engine RPM, gearbox ratios, differential and tyre size.",
"Prędkość auta na biegach v1.0": "Car speed in each gear v1.0",
"Podaj rozmiar opony, przełożenie główne (dyfer), przełożenia biegów i obroty silnika – kalkulator pokaże prędkość auta na każdym biegu.": "Enter the tyre size, final drive ratio (differential), gear ratios and engine RPM – the calculator shows the car’s speed in each gear.",
"Opona": "Tyre",
"Obwód opony": "Tyre circumference",
"Przełożenia": "Ratios",
"Przełożenie główne (dyfer)": "Final drive ratio (differential)",
"np. 3,46": "e.g. 3.46",
"Obroty silnika [rpm]": "Engine speed [rpm]",
"np. 3000": "e.g. 3000",
"Bieg 1": "Gear 1",
"Bieg 2": "Gear 2",
"Bieg 3": "Gear 3",
"Bieg 4": "Gear 4",
"Bieg 5": "Gear 5",
"Bieg 6": "Gear 6",
"Bieg 7": "Gear 7",
"Bieg 8": "Gear 8",
"Przełożenia biegów np. 4,17 / 2,34 / 1,52… Puste pola są pomijane (wpisz tyle biegów, ile ma skrzynia, do 8).": "Gear ratios e.g. 4.17 / 2.34 / 1.52… Empty fields are skipped (enter as many gears as the gearbox has, up to 8).",
"Prędkość auta": "Car speed",
"Bieg": "Gear",
"Przełożenie": "Ratio",
"Prędkość [km/h]": "Speed [km/h]",
"Prędkość [km/h] = obroty × obwód opony [m] × 60 / (przełożenie biegu × przełożenie główne × 1000). Obwód opony jest nominalny; faktyczny zależy od marki, zużycia i ciśnienia. W automacie z konwerterem występuje poślizg, więc rzeczywista prędkość może być nieco niższa.": "Speed [km/h] = RPM × tyre circumference [m] × 60 / (gear ratio × final drive ratio × 1000). Tyre circumference is nominal; the actual value depends on the brand, wear and pressure. In an automatic with a torque converter there is slip, so the actual speed may be slightly lower.",
"Przelicznik jednostek mocy v1.0 – ECU-Perfect": "Power unit converter v1.0 – ECU-Perfect",
"Przelicznik kW, KM (PS), HP, Nm, lb-ft oraz moc↔moment przy zadanych obrotach.": "Converter for kW, PS (metric hp), HP, Nm, lb-ft and power↔torque at a given RPM.",
"Przelicznik jednostek mocy v1.0": "Power unit converter v1.0",
"Przeliczaj kW, KM, HP oraz Nm, lb-ft, kGm – wpisz wartość w dowolnym polu.": "Convert kW, PS, HP and Nm, lb-ft, kgf·m – enter a value in any field.",
"KM (PS, DIN)": "PS (metric hp, DIN)",
"HP (SAE / mech.)": "HP (SAE / mechanical)",
"Moment obrotowy": "Torque",
"kGm (kgf·m)": "kgf·m",
"Moc ↔ moment przy obrotach": "Power ↔ torque at RPM",
"np. 4000": "e.g. 4000",
"Moc z momentu (pole Nm wyżej)": "Power from torque (Nm field above)",
"Moment z mocy (pole kW wyżej)": "Torque from power (kW field above)",
"1 KM (PS) = 0,735499 kW, 1 HP = 0,7457 kW, 1 kW = 1,35962 KM. Moc [kW] = moment [Nm] × obroty / 9549. Wpisz wartość w dowolnym polu – pozostałe przeliczą się automatycznie. Polskie „KM” to koń mechaniczny metryczny (PS), a „HP” anglosaski jest ok. 1,4% większy.": "1 PS = 0.735499 kW, 1 HP = 0.7457 kW, 1 kW = 1.35962 PS. Power [kW] = torque [Nm] × RPM / 9549. Enter a value in any field – the others are converted automatically. The Polish “KM” is the metric horsepower (PS), while the Anglo-Saxon “HP” is about 1.4% larger.",
"Przydatne linki – ECU-Perfect": "Useful links – ECU-Perfect",
"Przydatne linki dla chiptunerów i pasjonatów motoryzacji: wiki o ECU, kody błędów, katalogi części, kalkulatory turbo.": "Useful links for chip tuners and car enthusiasts: ECU wikis, fault codes, parts catalogues, turbo calculators.",
"Strony, z których korzystamy lub które polecamy – wiki o sterownikach, kody błędów, narzędzia i katalogi części. Linki otwierają się w nowej karcie. Strony zewnętrzne, nie nasze.": "Sites we use or recommend – ECU wikis, fault codes, tools and parts catalogues. Links open in a new tab. These are external sites, not ours.",
"Wiki o ECU i strojeniu": "ECU and tuning wikis",
"Wiki społeczności o strojeniu, diagnostyce i inżynierii wstecznej sterowników Bosch Motronic (VW, Audi, Porsche, Volvo).": "Community wiki on tuning, diagnostics and reverse engineering of Bosch Motronic ECUs (VW, Audi, Porsche, Volvo).",
"Wiki o sterownikach Siemens MS41/MS42/MS43/MS45 w benzynowych BMW: opisy DME, narzędzia, definicje i oprogramowanie.": "Wiki on Siemens MS41/MS42/MS43/MS45 ECUs in petrol BMWs: DME descriptions, tools, definitions and software.",
"Wiki o sterownikach Simos (VW/Audi/Skoda/Seat): budowa, odczyt i zapis, strojenie.": "Wiki on Simos ECUs (VW/Audi/Skoda/Seat): hardware, reading and writing, tuning.",
"Opis strojenia Audi S4 z silnikiem V6 biturbo, w tym podstawy ME7.": "Tuning guide for the Audi S4 with the twin-turbo V6, including ME7 basics.",
"Obszerny przewodnik po budowie i najważniejszych mapach ME7.": "Comprehensive guide to the structure and key maps of ME7.",
"Ogólny opis rodziny sterowników Bosch Motronic i jej historii.": "General description of the Bosch Motronic ECU family and its history.",
"Opis logiki sterownika diesla EDC17: żądanie momentu, ograniczniki, dawka paliwa i doładowanie.": "Description of the EDC17 diesel ECU logic: torque request, limiters, fuel quantity and boost.",
"Kody błędów i diagnostyka": "Fault codes and diagnostics",
"Wyszukiwarka kodów błędów BMW (P-kody i szesnastkowe), z opisem w wielu językach, także po polsku.": "BMW fault code search (P-codes and hex), with descriptions in many languages, including Polish.",
"Kody błędów BMW po polsku (e46forum.pl)": "BMW fault codes in Polish (e46forum.pl)",
"Polskie tłumaczenie bazy kodów błędów BMW.": "Polish translation of the BMW fault code database.",
"Kody usterek VAG (VW Klub Polska)": "VAG fault codes (VW Klub Polska)",
"Polska lista kodów usterek aut z grupy VAG.": "Polish list of fault codes for VAG group cars.",
"Ross-Tech – bloki pomiarowe VCDS": "Ross-Tech – VCDS measuring blocks",
"Opis bloków pomiarowych (Measuring Blocks) do odczytu parametrów w VCDS.": "Description of Measuring Blocks for reading parameters in VCDS.",
"Ross-Tech – VCDS dla TDI": "Ross-Tech – VCDS for TDI",
"Informacje o diagnostyce silników TDI w VCDS.": "Information on diagnosing TDI engines with VCDS.",
"TestO – logowanie parametrów BMW (E90Post)": "TestO – BMW parameter logging (E90Post)",
"Wątek o narzędziu TestO do logowania parametrów w BMW (kabel K+DCAN i laptop z Windows).": "Thread about TestO, a tool for logging parameters in BMWs (K+DCAN cable and a Windows laptop).",
"Darmowa przeglądarka i udostępnianie logów z VCDS, COBB, ScanXL, ME7Logger, BlueDriver i OBDeleven. Bez konta.": "Free viewer and sharing of logs from VCDS, COBB, ScanXL, ME7Logger, BlueDriver and OBDeleven. No account needed.",
"Narzędzia i oprogramowanie": "Tools and software",
"TunerPro – definicje BIN": "TunerPro – BIN definitions",
"Pliki definicji (XDF/ADX) do TunerPro, programu do edycji plików ECU.": "Definition files (XDF/ADX) for TunerPro, a program for editing ECU files.",
"VW_Flash – instrukcja dla Windows": "VW_Flash – Windows guide",
"Instrukcja instalacji i użycia VW_Flash na Windows, narzędzia open source do flashowania sterowników VW/Audi.": "Installation and usage guide for VW_Flash on Windows, an open-source tool for flashing VW/Audi ECUs.",
"Instrukcje do sterownika skrzyni TCU TurboLamik: BMW (F, G, E90), Dodge/Jeep 8HP, komunikacja CAN, TunerPro, kody błędów.": "Manuals for the TurboLamik TCU gearbox controller: BMW (F, G, E90), Dodge/Jeep 8HP, CAN communication, TunerPro, error codes.",
"Osiągi, turbo i części": "Performance, turbo and parts",
"FastestLaps – ranking 1/4 mili": "FastestLaps – quarter-mile ranking",
"Ranking najszybszych aut i motocykli na ćwierć mili z czasami i prędkością.": "Ranking of the fastest cars and motorcycles over a quarter mile with times and speeds.",
"Strike Engine – kalkulator turbo": "Strike Engine – turbo calculator",
"Kalkulator doboru rozmiaru turbosprężarki: przepływ powietrza (CFM) i stopień sprężania.": "Turbocharger sizing calculator: airflow (CFM) and pressure ratio.",
"Narzędzie producenta do doboru turbosprężarki do silnika.": "Manufacturer’s tool for matching a turbocharger to an engine.",
"7zap – katalogi części": "7zap – parts catalogues",
"Katalogi części oryginalnych (schematy i numery) wielu marek.": "Original parts catalogues (diagrams and part numbers) for many brands.",
"Polski sklep z częściami BMW.": "Polish BMW parts shop.",
"Pomoc: moc silnika na podstawie przyspieszenia 100–200 km/h – ECU-Perfect": "Help: engine power based on 100–200 km/h acceleration – ECU-Perfect",
"Instrukcja użycia narzędzia szacującego moc silnika na podstawie przyspieszenia 100–200 km/h: jak mierzyć, co oznaczają pola i wyniki, jak zrobić raport.": "How to use the tool that estimates engine power from 100–200 km/h acceleration: how to measure, what the fields and results mean, how to make a report.",
"Pomoc: moc silnika na podstawie przyspieszenia 100–200 km/h": "Help: engine power based on 100–200 km/h acceleration",
"Pomoc": "Help",
"Narzędzie szacuje moc silnika z czasu przyspieszenia od 100 do 200 km/h. Przy tych prędkościach przyczepność najczęściej nie ma już znaczenia, więc wynik zależy głównie od mocy, masy i oporów ruchu.": "The tool estimates engine power from the 100 to 200 km/h acceleration time. At these speeds traction usually no longer matters, so the result depends mainly on power, mass and driving resistance.",
"Jak użyć krok po kroku": "How to use it, step by step",
"Zmierz czas 100–200 km/h np. aplikacją Dragy lub RaceLogic (jak na przykładzie: 8,38 s, nachylenie −0,80%). Uwaga: licznik pokazuje najczęściej prędkość wyższą, więc filmik z licznikiem nie jest najlepszą metodą pomiaru ;)": "Measure the 100–200 km/h time, e.g. with the Dragy or RaceLogic app (as in the example: 8.38 s, slope −0.80%). Note: the speedometer usually over-reads, so a video of the speedometer is not the best way to measure ;)",
"Wpisz dane auta (zważ auto!) i zmierzony czas (opis pól niżej). Wynik przelicza się na bieżąco, nie ma przycisku „Oblicz”.": "Enter the car data (weigh the car!) and the measured time (fields are described below). The result updates live; there is no “Calculate” button.",
"Opcjonalnie wpisz opis auta do raportu i dodaj do dwóch zdjęć (np. zdjęcie auta i z pomiarem). Możesz też wkleić obraz ze schowka (Ctrl+V). Zdjęcia zostają w Twojej przeglądarce i nigdzie nie są wysyłane.": "Optionally enter a car description for the report and add up to two photos (e.g. a photo of the car and the measurement). You can also paste an image from the clipboard (Ctrl+V). Photos stay in your browser and are not uploaded anywhere.",
"Kliknij „Raport / wydruk”. Otworzy się karta z gotowym raportem, w której przycisk „Drukuj / zapisz jako PDF” zapisze go do pliku.": "Click “Report / print”. A tab with the finished report opens, where the “Print / save as PDF” button saves it to a file.",
"Główny ekran z przykładowymi danymi i wynikami.": "Main screen with sample data and results.",
"Zrzut ekranu z wersji angielskiej.": "Screenshot from the English version.",
"Pola wejściowe": "Input fields",
"Pole": "Field",
"Co oznacza": "Meaning",
"Przykład": "Example",
"Pamiętaj, że dane w dowodzie są orientacyjne, a to istotny parametr do obliczeń, więc musisz zważyć auto.": "Remember that the figures in the registration document are only indicative and this is an important input, so you need to weigh the car.",
"Wszystko, co jest w aucie oprócz niego samego. Kalkulator dodaje to do masy auta.": "Everything in the car besides the car itself. The calculator adds it to the car mass.",
"8,38": "8.38",
"Zmierzony czas przyspieszenia.": "The measured acceleration time.",
"−0,8": "−0.8",
"Średnie nachylenie odcinka. Plus oznacza jazdę pod górę, minus z górki, 0 to płasko. Aplikacja GPS zwykle je pokazuje.": "Average slope of the stretch. Plus means uphill, minus downhill, 0 is flat. A GPS app usually shows it.",
"FWD, RWD lub 4x4. Wpływa na straty w układzie napędowym (ok. 10%, 12% i 16%).": "FWD, RWD or 4x4. It sets the drivetrain losses (about 10%, 12% and 16%).",
"Cd × pow. czołowa [m²]": "Cd × frontal area [m²]",
"0,65": "0.65",
"Opór aerodynamiczny. Typowo dla aut osobowych 0,6–0,75. Dla aut wyższych, np. SUV-ów, opór jest większy!": "Aerodynamic drag. Typically 0.6–0.75 for passenger cars. For taller cars, e.g. SUVs, the drag is higher!",
"Jaką część mocy maksymalnej silnik oddaje średnio na całym odcinku, bo moc zmienia się z obrotami i są zmiany biegów. Typowo: turbodiesel 85–90, turbobenzyna 90–95, wolnossąca benzyna 80–85 (wartości orientacyjne). To najbardziej wpływowe pole: zmiana o 5 punktów przesuwa wynik o kilkadziesiąt KM.": "What share of its maximum power the engine delivers on average over the whole stretch, because power varies with rpm and there are gear changes. Typical: turbodiesel 85–90, turbo petrol 90–95, naturally aspirated petrol 80–85 (indicative values). This is the most influential field: a change of 5 points moves the result by several dozen hp.",
"Dowolny tekst, który trafi do raportu, np. marka, model i wersja auta.": "Any text that goes into the report, e.g. make, model and version of the car.",
"Wyniki": "Results",
"Szacowana moc na wale silnika w KM i kW.": "Estimated power at the engine crankshaft in hp and kW.",
"503 KM / 370 kW": "503 hp / 370 kW",
"Moc silnika pomniejszona o straty napędu.": "Engine power reduced by drivetrain losses.",
"423 KM": "423 hp",
"Czas, jaki auto z tą mocą uzyskałoby na płaskiej drodze. Pozwala porównywać pomiary z różnych odcinków.": "The time this car would achieve with this power on a flat road. It lets you compare measurements from different stretches.",
"8,60 s (zmierzone 8,38 s, bo jazda była lekko z górki)": "8.60 s (measured 8.38 s, because the run was slightly downhill)",
"Moc silnika w stosunku do masy całkowitej (auto + kierowca).": "Engine power relative to total mass (car + driver).",
"281 KM/t": "281 hp/t",
"Raport": "Report",
"Raport zawiera opis, dane wejściowe, wyniki i do dwóch zdjęć. Przycisk „Drukuj / zapisz jako PDF” otwiera okno drukowania, w którym możesz wybrać zapis do pliku PDF.": "The report contains the description, input data, results and up to two photos. The “Print / save as PDF” button opens the print dialog, where you can choose to save as a PDF file.",
"Przykładowy raport gotowy do wydruku lub zapisu do PDF.": "Sample report ready to print or save as PDF.",
"O czym warto pamiętać": "Worth remembering",
"To szacunek, nie pomiar na hamowni. Realny rozrzut to rzędu ±5–10% i zależy od jakości pomiaru czasu, wiatru, nachylenia, aerodynamiki i przyjętego wykorzystania mocy, rodzaju skrzyni biegów, liczby biegów i prędkości ich zmiany, szerokości opon itp. Najlepiej używać go do porównań „przed i po” na tym samym odcinku i przy podobnych warunkach.": "This is an estimate, not a dyno measurement. The real spread is around ±5–10% and depends on the quality of the timing, wind, slope, aerodynamics and the assumed power utilisation, gearbox type, number of gears and shift speed, tyre width, etc. It is best used for “before and after” comparisons on the same stretch under similar conditions.",
"← Wróć do kalkulatora": "← Back to the calculator",
"❓ Pomoc": "❓ Help",
"Zapisz dane": "Save data",
"Wczytaj dane": "Load data",
"Zapamiętywanie, zapis i odczyt danych": "Remembering, saving and loading data",
"Wpisane dane są automatycznie zapamiętywane w Twojej przeglądarce, więc po ponownym wejściu na stronę nie musisz ich wpisywać od nowa.": "Entered data is remembered automatically in your browser, so you do not have to type it in again when you return to the page.",
"Przycisk „Zapisz dane” zapisuje wszystkie wpisane wartości i opis do pliku .json (nazwa pliku pochodzi z opisu auta). Przyciskiem „Wczytaj dane” wczytasz taki plik z powrotem. Dzięki temu możesz mieć osobne zestawy dla różnych aut albo przenieść dane na inny komputer. Zdjęcia nie są zapisywane.": "The “Save data” button saves all entered values and the description to a .json file (the file name comes from the car description). The “Load data” button loads such a file back. This lets you keep separate sets for different cars or move the data to another computer. Photos are not saved.",
"Kalkulator: przepływ powietrza na mg na cylinder": "Calculator: air flow to mg per cylinder",
"Wpisz dane silnika i przepływ z przepływomierza (kg/h). Wynik przelicza się automatycznie.": "Enter the engine data and the air flow from the mass airflow sensor (kg/h). The result updates automatically.",
"np. 3,0": "e.g. 3.0",
"Obroty [obr/min]": "Engine speed [rpm]",
"Przepływ powietrza [kg/h]": "Air flow [kg/h]",
"z przepływomierza, np. 675": "from the airflow sensor, e.g. 675",
"Temperatura powietrza w dolocie [°C]": "Intake air temperature [°C]",
"za intercoolerem, np. 50": "after the intercooler, e.g. 50",
"Napełnianie cylindra [%]": "Cylinder filling [%]",
"AFR (stosunek powietrza do paliwa)": "AFR (air-fuel ratio)",
"np. 18": "e.g. 18",
"Powietrze na cylinder": "Air per cylinder",
"Ciśnienie bezwzględne": "Absolute pressure",
"Doładowanie (względne)": "Boost (gauge)",
"Paliwo przy zadanym AFR": "Fuel at the given AFR",
"Przyjęto ciśnienie otoczenia 1 bar. Ciśnienie i doładowanie to wartości orientacyjne, zależne od założonej temperatury i napełniania cylindra.": "Ambient pressure is assumed to be 1 bar. Pressure and boost are approximate and depend on the assumed temperature and cylinder filling.",
"Kalkulator: AFR i lambda z doładowania i dawki paliwa": "Calculator: AFR and lambda from boost and fuel quantity",
"Wpisz dane silnika, doładowanie i dawkę paliwa. Ilość powietrza, AFR i lambda przeliczają się automatycznie.": "Enter the engine data, boost and fuel quantity. Air quantity, AFR and lambda update automatically.",
"ponad ciśnienie otoczenia, np. 0,9": "above ambient pressure, e.g. 0.9",
"Dawka paliwa [mg/suw]": "Fuel quantity [mg/stroke]",
"na cylinder, np. 52": "per cylinder, e.g. 52",
"AFR (spodziewany)": "AFR (expected)",
"Lambda (spodziewana)": "Lambda (expected)",
"Przyjęto ciśnienie otoczenia 1 bar oraz stechiometrię diesla 14,5:1 (lambda 1 = AFR 14,5). Wartości są orientacyjne i zależą od założonej temperatury i napełniania cylindra.": "Ambient pressure is assumed to be 1 bar and the diesel stoichiometric ratio 14.5:1 (lambda 1 = AFR 14.5). Values are approximate and depend on the assumed temperature and cylinder filling.",
"Turbosprężarka z geometrią zmienną i siłownikiem sterowanym przez komputer silnika.": "Variable-geometry turbocharger with an actuator controlled by the engine computer.",
"Turbosprężarka z siłownikiem geometrii zmiennej": "Turbocharger with a variable-geometry actuator",
"Wtryskiwacz common rail.": "Common rail injector.",
"Wtryskiwacz układu common rail": "Common rail injector",
"Chłodnica powietrza doładowanego (intercooler).": "Charge air cooler (intercooler).",
"Intercooler (chłodnica powietrza doładowanego)": "Intercooler (charge air cooler)",
"Kolektor dolotowy zanieczyszczony nagarem, typowy skutek pracy zaworu EGR.": "Intake manifold fouled with carbon deposits, a typical result of EGR operation.",
"Kolektor dolotowy zanieczyszczony nagarem": "Intake manifold fouled with carbon deposits",
"Log z VW (grupy pomiarowe 008 i 011): obroty, moment kierowcy, ograniczenie zadymienia oraz doładowanie zadane i uzyskane.": "VW log (measuring blocks 008 and 011): engine speed, driver torque request, smoke limitation and specified and actual boost pressure.",
"Log z VW z doładowaniem zadanym i uzyskanym": "VW log with specified and actual boost pressure",
"Log z BMW: m.in. obroty, ilość wtryskiwanego paliwa i zadane ciśnienie w listwie paliwowej.": "BMW log: among others engine speed, injected fuel quantity and requested rail pressure.",
"Log z BMW z obrotami, dawką paliwa i ciśnieniem w listwie": "BMW log with engine speed, fuel quantity and rail pressure",
"Tabliczka znamionowa z wartością graniczną zadymienia": "Type plate with the smoke limit value",
"Tabliczka znamionowa: wartość graniczna zadymienia jest w ramce (tu 0,53).": "Type plate: the smoke limit value is in the box (here 0.53).",
"Turbosprężarka ze zmienną geometrią i siłownikiem sterowanym przez komputer silnika.": "Variable-geometry turbocharger with an actuator controlled by the engine computer.",
"Dawny wolnossący diesel: bez elektroniki, moc regulowana wyłącznie ilością paliwa.": "An old naturally aspirated diesel: no electronics, power controlled only by the amount of fuel.",
"Zabytkowy traktor z silnikiem wysokoprężnym": "Vintage tractor with a diesel engine",
"Log z VW (grupy pomiarowe 008 i 011): obroty, moment obrotowy, ograniczenie zadymienia oraz doładowanie zadane i uzyskane.": "VW log (measuring blocks 008 and 011): engine speed, torque, smoke limitation and specified and actual boost pressure.",
"Silnik diesla – jak to naprawdę działa": "How a diesel engine really works",
"Zacznijmy od stwierdzenia: silnik diesla „jedzie paliwem\", a nie „mieszanką\".": "Let us start with this statement: a diesel engine runs on fuel, not on a “mixture”.",
"W benzynowym wszystko kręci się wokół powietrza: przepustnica decyduje, ile go wpuścić, a paliwo dobierane jest do niego. W dieslu jest odwrotnie. Komputer najpierw decyduje, ile paliwa chce wtrysnąć, a powietrze jest tylko dodatkiem, który musi się znaleźć w cylindrze. Dlatego w dieslu zwykle nie znajdziesz przepustnicy (spotykana klapa dolotowa służy głównie do wyciszania silnika przy gaszeniu i do wspomagania EGR, a nie do sterowania mocą), a mocą steruje się w zasadzie paliwem.": "In a petrol engine everything revolves around air: the throttle decides how much of it gets in, and the fuel is matched to it. In a diesel it is the other way round. The computer first decides how much fuel it wants to inject, and air is just an add-on that has to be present in the cylinder. That is why you will usually not find a throttle in a diesel (an intake flap, where fitted, mainly serves to quieten the engine on shutdown and to support EGR, not to control power), and power is basically controlled by fuel.",
"Jak to było kiedyś": "How it used to be",
"Kilkadziesiąt lat temu wolnossący diesel był prostą maszyną: żadnej przepustnicy, przepływomierza, czujnika ciśnienia w kolektorze (MAP) ani turbiny. Silnik zasysał stałą porcję powietrza wynikającą z pojemności cylindra, a pedał gazu był połączony linką z pompą wtryskową. Wciskasz pedał, pompa podaje więcej paliwa. Koniec historii.": "Several decades ago a naturally aspirated diesel was a simple machine: no throttle, no air mass sensor, no manifold pressure sensor (MAP) and no turbo. The engine drew in a fixed amount of air determined by the cylinder capacity, and the accelerator pedal was connected by a cable to the injection pump. Press the pedal and the pump delivers more fuel. End of story.",
"Paliwo trafiało wtedy do komory wstępnej, a nie bezpośrednio do cylindra jak dziś. Ówczesne pompy wytwarzały po prostu dużo niższe ciśnienia.": "Back then the fuel went into a pre-chamber rather than directly into the cylinder as it does today. The pumps of that time simply produced much lower pressures.",
"A skoro nie ma świecy, to skąd zapłon? Diesel nazywa się silnikiem z zapłonem samoczynnym: powietrze jest tak mocno sprężone i gorące, że wtryśnięte paliwo zapala się „samoczynnie\", bez żadnej iskry.": "And if there is no spark plug, how does ignition happen? A diesel is called a compression-ignition engine: the air is compressed so strongly and gets so hot that the injected fuel ignites “by itself”, without any spark.",
"Po co więc turbo, skoro diesel „jedzie paliwem\"?": "So why a turbo, if a diesel “runs on fuel”?",
"Bo paliwa nie da się wlewać w nieskończoność. Do danej ilości powietrza można wtrysnąć paliwo w szerokim zakresie, ale jednak nie bez ograniczeń: trzeba mieć czym je spalić. Turbosprężarka zmieniła zasady gry: wciska do cylindra więcej powietrza, niż wynika z jego pojemności, więc można wtrysnąć więcej paliwa i dostać moc większą, niż sugerowałaby pojemność silnika.": "Because you cannot pour in fuel endlessly. For a given amount of air you can inject fuel within a wide range, but not without limits: you need air to burn it. The turbocharger changed the rules of the game: it forces more air into the cylinder than its capacity allows, so more fuel can be injected and you get more power than the engine capacity alone would suggest.",
"Większość turbodiesli ma turbosprężarkę z tzw. zmienną geometrią. To blaszki, których ułożenie decyduje, pod jakim kątem spaliny uderzają w wirnik turbiny. Komputer może więc regulować jej wydajność w zależności od ilości paliwa i znów widać, że to paliwo jest decydujące, a powietrze dopasowuje się do niego (w silniku benzynowym jest odwrotnie).": "Most turbodiesels have a turbocharger with so-called variable geometry. These are small vanes whose position determines the angle at which the exhaust gas hits the turbine wheel. The computer can therefore adjust its output depending on the amount of fuel, and again you can see that fuel is the decisive factor and air adapts to it (in a petrol engine it is the opposite).",
"Do tego dochodzi zawór EGR, czyli recyrkulacji spalin: wpuszcza spaliny z powrotem do dolotu i spalinami „zbija\" ilość powietrza. Chodzi o ekologię (mniej tlenków azotu), a w niektórych silnikach pomaga też szybciej się nagrzać.": "On top of that there is the EGR valve, i.e. exhaust gas recirculation: it feeds exhaust gas back into the intake and “pushes down” the amount of air. It is about the environment (fewer nitrogen oxides), and in some engines it also helps them warm up faster.",
"Jak komputer steruje dieslem w pigułce": "How the computer controls a diesel in a nutshell",
"Wolne obroty": "Idle",
"Na wolnych obrotach (ok. 700 obr/min po rozgrzaniu silnika) komputer pilnuje jednej rzeczy: zadanych obrotów biegu jałowego. Obroty spadają, to dorzuca paliwa, rosną, to obcina. Żadnych silniczków krokowych ani przepustnic, które dolewałyby powietrza.": "At idle (about 700 rpm once the engine is warm) the computer looks after just one thing: the target idle speed. When the speed drops it adds fuel, when it rises it cuts it. No stepper motors or throttles that would pour in extra air.",
"Wtryskiwacze nie są idealnie takie same (nawet nowe – dlatego mamy kody IMA wtryskiwaczy), a cylindry zużywają się inaczej, więc komputer na bieżąco liczy korekcje dla każdego cylindra osobno, żeby silnik chodził równo. Taka ciekawostka: w automatach opory na „luzie\" są większe niż w manualach, więc w logach zobaczysz tam zwykle więcej paliwa podczas pracy silnika na wolnych obrotach.": "Injectors are not exactly identical (not even new ones – which is why we have injector IMA codes), and cylinders wear differently, so the computer continuously calculates corrections for each cylinder separately to keep the engine running smoothly. A fun fact: in automatics the drag at idle is higher than in manuals, so in logs you will usually see more fuel there while the engine idles.",
"Teraz małe uproszczenie, które bardzo ułatwi rachunki: przyjmijmy, że 1 m³ powietrza waży 1 kg (w rzeczywistości przy 20°C to ok. 1,2 kg). Wtedy cylinder o pojemności 0,5 l „zasysa\" ok. 500 mg powietrza.": "Now a small simplification that will make the calculations much easier: let us assume that 1 m³ of air weighs 1 kg (in reality, at 20°C, it is about 1.2 kg). A cylinder of 0.5 l then “draws in” about 500 mg of air.",
"W mapach EGR przy niskim obciążeniu zadana ilość powietrza często wynosi np. 280 mg. Komputer widzi różnicę (500 zamiast 280) i otwiera zawór EGR, który wpuszcza spaliny i zbija ilość powietrza. Właściciele starszych VW TDI mogą to podejrzeć w logu 003 (a w 003 BS EGR naprzemiennie się włącza i wyłącza).": "In EGR maps at low load the requested amount of air is often around, say, 280 mg. The computer sees the difference (500 instead of 280) and opens the EGR valve, which lets in exhaust gas and pushes down the amount of air. Owners of older VW TDIs can watch this in log 003 (and in 003 BS the EGR is switched on and off alternately).",
"Jazda z gazem": "Driving with throttle",
"Inaczej to wygląda, gdy wciskasz pedał: komputer dostaje sygnał „chcę moc\" i przelicza to na ilość paliwa, a do tej ilości paliwa potrzebuje określonej ilości powietrza (powietrze jest dodatkiem do paliwa, pamiętasz?). Jeżeli potrzeba": "It is different when you press the pedal: the computer receives the signal “I want power” and converts it into an amount of fuel, and for that amount of fuel it needs a certain amount of air (air is an add-on to fuel, remember?). If",
"więcej": "more",
"powietrza, niż cylinder zassie sam, komputer wysteruje turbosprężarkę tak, żeby dostarczyła brakującą resztę.": "air is needed than the cylinder draws in on its own, the computer drives the turbocharger so that it delivers the missing remainder.",
"Wtrysk: czas, ciśnienie, kąt": "Injection: time, pressure, angle",
"Dzisiejsze pompy common rail budują ciśnienie od ok. 270 bar na wolnych obrotach aż do ok. 2700 bar w nowoczesnych, wysilonych silnikach. Ciśnieniem steruje np. zawór na listwie paliwowej, skąd paliwo idzie do wtryskiwaczy.": "Today’s common rail pumps build fuel pressure from about 270 bar at idle up to about 2700 bar in modern, highly stressed engines. The pressure is controlled, for example, by a valve on the fuel rail, from where the fuel goes to the injectors.",
"Wtryskiwacz to w uproszczeniu kran: komputer go otwiera i zamyka. Ten sam kran w łazience, otwarty na ten sam czas, wleje różną ilość wody zależnie od ciśnienia w instalacji. Z paliwem jest tak samo: tę samą ilość można wtrysnąć krócej pod większym ciśnieniem albo dłużej pod mniejszym.": "An injector is, in simple terms, a tap: the computer opens and closes it. The same tap in a bathroom, open for the same time, will pour a different amount of water depending on the pressure in the system. It is the same with fuel: the same amount can be injected for a shorter time at a higher pressure or for longer at a lower pressure.",
"Ilość paliwa mierzymy w mm³ lub mg (1 m³ oleju napędowego waży ok. 830 kg, więc mm³ przelicza się na mg, choć wynik zależy od temperatury paliwa).": "We measure the amount of fuel in mm³ or mg (1 m³ of diesel fuel weighs about 830 kg, so mm³ can be converted to mg, although the result depends on the fuel temperature).",
"Czas wtrysku podaje się najczęściej w mikrosekundach (1000 µs to jedna tysięczna sekundy). Skoro znamy obroty, możemy zamienić czas na stopnie obrotu wału, i to jest ciekawe: te same 1000 µs przy 4000 obr/min to aż 24 stopnie obrotu wału, a przy 1000 obr/min tylko 6. Do tego dochodzi czas samego spalania, bo ono też trwa, i w ten sposób dochodzimy do kąta wtrysku, czyli do tego, ile stopni przed górnym martwym punktem (GMP) trzeba zacząć wtrysk. Właściciele starszych VW TDI mogą go zobaczyć w logu 004, a po włączeniu 004 Basic Setting komputer naprzemiennie przestawia kąt wtrysku do skrajnych wartości, więc można obserwować jego wpływ na pracę silnika.": "Injection time is most often given in microseconds (1000 µs is one thousandth of a second). Knowing the engine speed, we can convert time into degrees of crankshaft rotation, and this is interesting: the same 1000 µs at 4000 rpm is as much as 24 degrees of crankshaft rotation, and at 1000 rpm only 6. On top of that there is the combustion time itself, because it also takes time, and this is how we arrive at the injection angle, i.e. how many degrees before top dead centre (TDC) the injection has to start. Owners of older VW TDIs can see it in log 004, and after starting 004 Basic Setting the computer alternately shifts the injection angle to extreme values, so you can observe its effect on how the engine runs.",
"Warto wiedzieć: na wolnych obrotach i przy małym obciążeniu producenci czasem wtryskują paliwo już po GMP.": "Worth knowing: at idle and at low load manufacturers sometimes inject the fuel after TDC.",
"Powietrze, turbo i AFR": "Air, turbo and AFR",
"Stosunek ilości powietrza do paliwa (w mg) nazywa się AFR (air-fuel ratio). W przeciwieństwie do benzyny akceptowalny przedział jest ogromny. Cylinder 0,5 l przy wyłączonym EGR może na wolnych obrotach dostać np. 6 mg paliwa (AFR 500/6, czyli ponad 80!), ale równie dobrze przy tej samej ilości powietrza 30 mg (AFR 500/30 ≈ 16,7).": "The ratio of the amount of air to fuel (in mg) is called AFR (air-fuel ratio). Unlike in a petrol engine, the acceptable range is huge. With EGR switched off, a 0.5 l cylinder can get, say, 6 mg of fuel at idle (AFR 500/6, i.e. over 80!), but just as well 30 mg with the same amount of air (AFR 500/30 ≈ 16.7).",
"Przyjmijmy, że na niskich obrotach skrajną wartością w aucie seryjnym jest AFR ok. 15 (stechiometria diesla to ok. 14,5, więc to już granica silnego dymienia). Dla 500 mg powietrza daje to maksymalnie ok. 33 mg paliwa, i tu wchodzi turbo. Na wysokich obrotach AFR 15 byłby już „ostry\", dlatego w aucie seryjnym realne są tam wartości 17–19. Na niskich obrotach ok. 15–16 jest akceptowane fabrycznie, bo więcej paliwa to więcej energii w spalinach i szybsze pobudzenie turbiny.": "Let us assume that at low rpm the limit value in a production car is an AFR of about 15 (the diesel stoichiometric ratio is about 14.5, so this is already the edge of heavy smoking). For 500 mg of air that gives at most about 33 mg of fuel, and this is where the turbo comes in. At high rpm an AFR of 15 would already be “aggressive”, so in a production car values of 17–19 are realistic there. At low rpm about 15–16 is accepted by the factory, because more fuel means more energy in the exhaust and faster spooling of the turbine.",
"Ile potrafi turbo? Seryjne turbodiesle budują ciśnienie względne od ok. 1 bara w starszych, niewysilonych silnikach do ok. 3 barów (czyli ok. 4 barów bezwzględnych) w tych najbardziej wysilonych.": "How much can a turbo do? Production turbodiesels build gauge pressure from about 1 bar in older, less highly stressed engines to about 3 bar (i.e. about 4 bar absolute) in the most highly stressed ones.",
"Policzmy na prostym przykładzie. Załóżmy 1,5 bara doładowania względnego. Razem z atmosferycznym (ok. 1 bar) daje to 2,5 bara ciśnienia bezwzględnego. Potraktujmy to jako mnożnik pojemności: nasz cylinder 0,5 l ma teraz „wirtualnie\" 1,25 l, więc zamiast 500 mg powietrza mamy 1250 mg. Przy AFR 15 można wtrysnąć już nie 33, a": "Let us do a simple example. Assume 1.5 bar of gauge boost. Together with atmospheric pressure (about 1 bar) this gives 2.5 bar of absolute pressure. Let us treat this as a multiplier of the capacity: our 0.5 l cylinder now “virtually” has 1.25 l, so instead of 500 mg of air we have 1250 mg. With an AFR of 15 you can now inject not 33 but",
"83 mg paliwa": "83 mg of fuel",
", i to przekłada się na większą moc.": ", which translates into more power.",
"Oczywiście świat nie jest idealny. Cylinder nie napełnia się w 100% (w mocnych dieslach bywa to około 90%), a sprężarka podgrzewa powietrze (wystarczy popompować koło roweru ręczną pompką, żeby poczuć, jak się grzeje). Gorące powietrze jest rzadsze, więc w tej samej objętości mieści się go mniej. Żeby je schłodzić, stosuje się chłodnicę powietrza, czyli intercooler.": "Of course the world is not perfect. The cylinder does not fill 100% (in powerful diesels it is about 90%), and the compressor heats the air as it raises the pressure (pump up a bicycle tyre with a hand pump and you can feel how warm it gets). Hot air is less dense, so less of it fits in the same volume. To cool it down, a charge air cooler, i.e. an intercooler, is used.",
"Przepływomierz: od kg/h do mg na suw": "Air mass sensor: from kg/h to mg per stroke",
"W dieslu najczęściej stosuje się przepływomierze podające powietrze w kg/h. Komputer przelicza je wewnętrznie na mg na suw, czyli właśnie na to, o czym mówiliśmy do tej pory.": "In a diesel the air flow is most often measured by sensors that give air in kg/h. The computer converts it internally into mg per stroke, which is exactly what we have been talking about so far.",
"Przykład: silnik 3 l, 6 cylindrów, 4000 obr/min, 675 kg/h powietrza. Daje to dokładnie": "Example: a 3 l engine, 6 cylinders, 4000 rpm, 675 kg/h of air. This gives exactly",
"937,5 mg": "937.5 mg",
"powietrza na cylinder na cykl (675 000 000 mg ÷ 60 min ÷ (6 cylindrów × 2000 cykli na minutę)). Tu policzmy już dokładniej: przy 50°C za intercoolerem gęstość powietrza to ok. 1,08 kg/m³, więc cylinder 0,5 l mieści przy 1 barze ok. 540 mg, a przy napełnianiu na poziomie 90% ok. 485 mg. Żeby upchnąć 937,5 mg, potrzebne jest ciśnienie ok. 1,9 bara bezwzględnego, czyli ok. 0,9 bara nadciśnienia. Przy AFR 18 (bardziej realnym w aucie seryjnym) mamy 937,5/18, czyli ok.": "of air per cylinder per cycle (675,000,000 mg ÷ 60 min ÷ (6 cylinders × 2000 cycles per minute)). Let us now calculate more precisely: at 50°C after the intercooler the air density is about 1.08 kg/m³, so a 0.5 l cylinder holds about 540 mg at 1 bar, and at 90% filling about 485 mg. To fit 937.5 mg, an absolute pressure of about 1.9 bar is needed, i.e. about 0.9 bar of boost. With an AFR of 18 (more realistic in a production car) we have 937.5/18, i.e. about",
"52 mg": "52 mg",
"paliwa.": "of fuel.",
"Chcesz sprawdzić samemu? Wpisz dane do kalkulatorów poniżej.": "Want to try it yourself? Enter the data in the calculators below.",
"Logika komputera w jednym akapicie": "The computer’s logic in one paragraph",
"Sterowanie dieslem to wtryśnięcie właściwej ilości paliwa we właściwy sposób i dostarczenie właściwej ilości powietrza do jego spalenia. Komputer ustala, ile paliwa podać i jak, wylicza, ile do tego potrzeba powietrza, a potem tak steruje turbosprężarką, żeby je dostarczyć (o ile potrzebuje go więcej, niż cylinder zassie sam).": "Controlling a diesel means injecting the right amount of fuel in the right way and supplying the right amount of air to burn it. The computer decides how much fuel to give and how, works out how much air that needs, and then controls the turbocharger so that it supplies it (if it needs more than the cylinder draws in on its own).",
"Kto Ci ogranicza moc przy pełnym gazie?": "Who limits your power at full throttle?",
"Marketingowiec:": "The marketing person:",
"uznał, że nie zapłaciłeś za BMW E87 118d 143 KM, a jedynie za 116d 116 KM, albo obciął moc, bo ubezpieczenie byłoby za drogie.": "decided that you did not pay for a BMW E87 118d 143 hp, only for a 116d 116 hp, or cut the power because the insurance would otherwise be too expensive.",
"Inżynier:": "The engineer:",
"stwierdził, że sprzęgło się rozleci przy pełnej mocy.": "decided that the clutch would fall apart at full power.",
"Czujnik temperatury:": "The temperature sensor:",
"wykrył przegrzanie silnika albo zbyt gorące spaliny lub dolot.": "detected engine overheating or exhaust or intake that is too hot.",
"Przepływomierz:": "The air mass sensor:",
"poinformował, że powietrza jest za mało (np. turbo jeszcze nie zbudowało ciśnienia).": "reported that there is too little air (e.g. the turbo has not built up pressure yet).",
"Skrzynia biegów:": "The gearbox:",
"wysłała do silnika wiadomość: „za dużo, bo się rozlecę\".": "sent the engine a message: “too much, I will fall apart”.",
"Systemy bezpieczeństwa:": "Safety systems:",
"tną moc, bo auto już „leci bokiem\".": "cut the power because the car is already “going sideways”.",
"DPF, EGR i AdBlue: dlaczego bywają kłopotliwe": "DPF, EGR and AdBlue: why they can be troublesome",
"Niestety diesle z natury dymią (stare auta bez filtra cząstek stałych miały dlatego rury wydechowe skierowane w dół) i może dlatego ekolodzy ich nie lubią. Żeby zmieścić się w normach, od ok. 20 lat mają DPF. Dobre dla środowiska, gorsze dla kieszeni i osiągów: filtr jest przeszkodą dla spalin, powoduje grzanie się silnika i ogranicza potencjał turbosprężarki.": "Unfortunately diesels smoke by nature (old cars without a particulate filter therefore had their exhaust pipes pointing downwards) and perhaps that is why environmentalists do not like them. To meet emission standards they have had a DPF for about 20 years. Good for the environment, worse for your wallet and performance: the filter is an obstacle for the exhaust gas, makes the engine run hotter and limits the potential of the turbocharger.",
"Wcześniej producenci walczyli z tlenkami azotu zaworem EGR. A od ponad 10 lat dochodzi AdBlue, czyli roztwór mocznika, który te tlenki dodatkowo redukuje.": "Earlier, manufacturers fought nitrogen oxides with the EGR valve. And for over 10 years AdBlue has been added, a urea solution that reduces these oxides further.",
"Niestety wszystkie te systemy w autach z dużymi przebiegami lubią się psuć, a naprawa bywa droga. Dlatego część właścicieli decyduje się je usunąć. Powody są dwa: finanse (często po nieudanej wcześniejszej naprawie) i tuning (duża „tuningowa\" turbosprężarka może z DPF pracować gorzej niż seryjna). Warto wiedzieć, że naprawa EGR to często po prostu wyczyszczenie dolotu i ewentualnie wymiana chłodnicy spalin.": "Unfortunately all of these systems tend to fail in cars with high mileage, and repairs can be expensive. That is why some owners decide to remove them. There are two reasons: money (often after an unsuccessful earlier repair) and tuning (a large “tuning” turbocharger can work worse with a DPF than a stock one). It is worth knowing that repairing an EGR is often simply a matter of cleaning the intake and possibly replacing the exhaust gas cooler.",
"Co na to prawo? Usunięcie DPF lub AdBlue jest modyfikacją niedozwoloną, a takie auto nie ma prawa przejść przeglądu technicznego. Obecnie, poza obejrzeniem układu wydechowego, diagnosta sprawdza (powinien ;) zadymienie przy pełnym wciśnięciu gazu (usunięcie AdBlue tego nie zmienia). Auto podczas testu stoi w miejscu. Norma zadymienia jest wpisana w ramce na tabliczce znamionowej, bez jednostki (np. 0,53; to współczynnik absorpcji światła w m⁻¹, a wartość zależy od auta i normy, jaką ma spełniać).": "What does the law say? Removing the DPF or AdBlue is an unauthorised modification, and such a car is not allowed to pass the technical inspection. Currently, apart from looking at the exhaust system, the inspector checks (should ;) the smoke opacity at full throttle (removing AdBlue does not change this). The car stands still during the test. The smoke limit is written in a box on the type plate, without a unit (e.g. 0.53; it is the light absorption coefficient in m⁻¹, and the value depends on the car and on the standard it has to meet).",
"Gdy procedura przeglądu się zmieni (np. będą weryfikować oryginalność oprogramowania, odczyt ciśnienia wstecznego spalin), żadne „trikowe\" przeglądy już nie przejdą, a do tunerów zaczną się zgłaszać właściciele diesli z prośbą o ponowne włączenie DPF i AdBlue. W Polsce średni wiek auta to obecnie ok. 16 lat, a nowy DPF z czujnikiem różnicowym i wymianą może kosztować ok. 10 tys. zł (zależnie od auta), więc jest, jak jest…": "When the inspection procedure changes (e.g. they will verify the originality of the software and read the exhaust back pressure), no “tricky” inspections will pass any more, and owners of diesels will start coming to tuners asking to switch the DPF and AdBlue back on. In Poland the average age of a car is currently about 16 years, and a new DPF with a differential pressure sensor and fitting can cost about 10,000 PLN (depending on the car), so it is what it is…",
"Logi i diagnostyka: zajrzyj do komputera silnika": "Logs and diagnostics: look inside the engine computer",
"Komputer silnika to nie blackbox. Zwykle można odczytać nie tylko kody usterek, ale i bieżące parametry pracy. Właściciele starszych VW TDI (1.9 TDI, 2.0 TDI, 2.5 TDI) mogą dzięki VAGCOM/VCDS (lub innemu oprogramowaniu diagnostycznemu o podobnych możliwościach) zobaczyć obroty, doładowanie zadane i uzyskane, wysterowanie geometrii turbiny, zadaną i aktualną ilość powietrza, dawkę paliwa i wiele innych. W starszych autach grupy VW robi się to przez „Measuring Blocks\", w nowszych przez „Advanced Measuring Values\".": "The engine computer is not a black box. Usually you can read not only fault codes but also live operating parameters. Owners of older VW TDIs (1.9 TDI, 2.0 TDI, 2.5 TDI) can use VAGCOM/VCDS (or other diagnostic software with similar capabilities) to see engine speed, specified and actual boost, turbine geometry control, specified and actual air quantity, fuel quantity and much more. In older VW Group cars this is done through “Measuring Blocks”, in newer ones through “Advanced Measuring Values”.",
"W autach BMW do dyspozycji są INPA, ISTA (z ograniczoną liczbą parametrów), a także np. TestO i BimmerTool.": "For BMW cars there are INPA, ISTA (with a limited number of parameters), and also e.g. TestO and BimmerTool.",
"Pamiętaj tylko, że tanie, uniwersalne interfejsy diagnostyczne obsługują zwykle jedynie standard ELM327, który ma sporo ograniczeń (np. ciśnienie doładowania zatrzymuje się na 2550 hPa, czyli 1,55 bara względnego).": "Just remember that cheap universal diagnostic interfaces usually support only the ELM327 standard, which has quite a few limitations (e.g. boost pressure stops at 2550 hPa, i.e. 1.55 bar gauge).",
"Silnik diesla – jak to naprawdę działa – ECU-Perfect": "How a diesel engine really works – ECU-Perfect",
"Jak działa silnik diesla: powietrze, paliwo, turbo, EGR, AFR, wtrysk common rail, DPF i AdBlue oraz odczyt parametrów w logach.": "How a diesel engine works: air, fuel, turbo, EGR, AFR, common rail injection, DPF and AdBlue, and reading parameters in logs.",
"Poradnik": "Guide",
"Powietrze, paliwo, turbo, EGR, AFR, wtrysk common rail, DPF i AdBlue oraz odczyt parametrów w logach. Z dwoma kalkulatorami (kg/h na mg/suw oraz AFR i lambda).": "Air, fuel, turbo, EGR, AFR, common rail injection, DPF and AdBlue, and reading parameters in logs. With two calculators (kg/h to mg/stroke, and AFR and lambda).",
"Czytaj": "Read"
};
  var KEY = 'ecup_lang';

  function detect() {
    try { var s = localStorage.getItem(KEY); if (s === 'pl' || s === 'en') return s; } catch (e) {}
    var l = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return String(l).toLowerCase().indexOf('pl') === 0 ? 'pl' : 'en';
  }
  var lang = detect();
  var callbacks = [];
  var origText = new WeakMap();      // wezel tekstowy -> oryginalny tekst PL
  var origAttr = new WeakMap();      // element -> {attr: PL}
  var observer = null;
  var ATTRS = ['alt', 'title', 'placeholder'];

  function collapse(s) { return s.replace(/\s+/g, ' ').trim(); }
  function tr(s) {
    var e = EN[collapse(s)];
    if (!e) return s;
    return s.match(/^\s*/)[0] + e + s.match(/\s*$/)[0];
  }

  function doText(n) {
    var o = origText.get(n);
    if (lang === 'en') {
      if (o !== undefined && n.nodeValue !== tr(o)) { origText.delete(n); o = undefined; }   // zmieniony przez skrypt strony
      var base = (o === undefined) ? n.nodeValue : o;
      var t = tr(base);
      if (t !== base) { if (o === undefined) origText.set(n, base); n.nodeValue = t; }
    } else if (o !== undefined) {
      n.nodeValue = o; origText.delete(n);
    }
  }
  function doAttrs(el) {
    var store = origAttr.get(el) || {};
    var changed = false;
    var list = ATTRS.slice();
    if (el.tagName === 'META') list.push('content');
    list.forEach(function (a) {
      if (!el.hasAttribute(a)) return;
      if (el.tagName === 'META' && a === 'content' &&
          !(el.getAttribute('name') === 'description' || el.getAttribute('property') === 'og:title')) return;
      var cur = el.getAttribute(a), o = store[a];
      if (lang === 'en') {
        if (o !== undefined && cur !== tr(o)) { delete store[a]; o = undefined; }
        var base = (o === undefined) ? cur : o, t = tr(base);
        if (t !== base) { if (o === undefined) store[a] = base; el.setAttribute(a, t); changed = true; }
      } else if (o !== undefined) { el.setAttribute(a, o); delete store[a]; }
    });
    if (changed) origAttr.set(el, store);
  }
  function walk(root) {
    if (root.nodeType === 3) { if (!skipParent(root.parentNode)) doText(root); return; }
    if (root.nodeType !== 1) return;
    if (root.tagName === 'SCRIPT' || root.tagName === 'STYLE') return;
    doAttrs(root);
    var tw = document.createTreeWalker(root, 5, null);     // 1 | 4 = elementy + tekst
    var n;
    while ((n = tw.nextNode())) {
      if (n.nodeType === 3) { if (!skipParent(n.parentNode)) doText(n); }
      else if (n.nodeType === 1 && n.tagName !== 'SCRIPT' && n.tagName !== 'STYLE') doAttrs(n);
    }
  }
  function skipParent(p) { return !p || p.tagName === 'SCRIPT' || p.tagName === 'STYLE'; }

  function run(fn) {
    if (observer) observer.disconnect();
    try { fn(); } finally { if (observer) observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true }); }
  }
  function applyAll() { run(function () { walk(document.documentElement); }); }

  function setLang(l) {
    if (l !== 'pl' && l !== 'en') return;
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    document.documentElement.lang = l;
    markSwitch();
    fixInputs();
    applyAll();
    callbacks.forEach(function (fn) { try { fn(l); } catch (e) {} });
    applyAll();   // dla tekstow wygenerowanych przez callbacki
  }

  function fixInputs() {
    var from = lang === 'pl' ? '.' : ',', to = lang === 'pl' ? ',' : '.';
    var ins = document.querySelectorAll('input');
    for (var i = 0; i < ins.length; i++) {
      var v = ins[i].value;
      if (/^-?\d+[.,]\d+$/.test(v) && v.indexOf(from) >= 0) ins[i].value = v.replace(from, to);
    }
  }
  function markSwitch() {
    var b = document.querySelectorAll('.langsw button');
    for (var i = 0; i < b.length; i++) {
      var on = b[i].getAttribute('data-l') === lang;
      b[i].className = on ? 'on' : '';
      b[i].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }
  function injectSwitch() {
    var st = document.createElement('style');
    st.textContent = '.langsw{display:inline-flex;margin-left:20px;border:1px solid #262633;border-radius:8px;overflow:hidden;vertical-align:middle}' +
      '.langsw button{background:transparent;color:#9a9aab;border:0;padding:3px 10px;font:600 .8rem "Segoe UI",system-ui,Arial,sans-serif;cursor:pointer;margin:0;border-radius:0}' +
      '.langsw button:hover{color:#f2f2f6;background:transparent}' +
      '.langsw button.on{background:#e5202e;color:#fff}';
    document.head.appendChild(st);
    var host = document.querySelector('nav .links') || document.querySelector('nav');
    if (!host) return;
    var sw = document.createElement('span');
    sw.className = 'langsw';
    sw.innerHTML = '<button type="button" data-l="pl" title="Polski">PL</button><button type="button" data-l="en" title="English">EN</button>';
    host.appendChild(sw);
    sw.addEventListener('click', function (e) {
      var l = e.target && e.target.getAttribute && e.target.getAttribute('data-l');
      if (l) setLang(l);
    });
    markSwitch();
  }

  function init() {
    document.documentElement.lang = lang;
    injectSwitch();
    if (lang === 'en') fixInputs();
    applyAll();
    observer = new MutationObserver(function (muts) {
      observer.disconnect();
      try {
        muts.forEach(function (m) {
          if (m.type === 'characterData') { if (!skipParent(m.target.parentNode)) doText(m.target); }
          else for (var i = 0; i < m.addedNodes.length; i++) walk(m.addedNodes[i]);
        });
      } finally { observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true }); }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

  window.I18N = {
    lang: function () { return lang; },
    t: function (pl, en) { return lang === 'en' ? en : pl; },
    f: function (x, d) { var s = Number(x).toFixed(d); return lang === 'pl' ? s.replace('.', ',') : s; },
    onChange: function (fn) { callbacks.push(fn); },
    set: setLang
  };
})();
