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
"Przycisk „Zapisz dane” zapisuje wszystkie wpisane wartości i opis do pliku .json (nazwa pliku pochodzi z opisu auta). Przyciskiem „Wczytaj dane” wczytasz taki plik z powrotem. Dzięki temu możesz mieć osobne zestawy dla różnych aut albo przenieść dane na inny komputer. Zdjęcia nie są zapisywane.": "The “Save data” button saves all entered values and the description to a .json file (the file name comes from the car description). The “Load data” button loads such a file back. This lets you keep separate sets for different cars or move the data to another computer. Photos are not saved."
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
