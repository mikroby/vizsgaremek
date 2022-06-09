## MESTEREMBER Applikáció - Szakember kereső adatbázis

## User Stories


## 1. Főoldal

#### ( minden szerepkör számára )

**1. User Story:**

> _Üdvözlő képernyő, amely egyszerű módon bemutatja az oldal alapvető célját: platform biztosítása lakossági megrendelők és szakemberek közti kapcsolat létrejöttéhez._

**Elfogadási kritérium:**

+ Reszponzív megjelenéssel, néhány kép és nagyobb felirat, amely leírja az oldal célját: szakember kereső adatbázis lakossági megrendelők számára.

**2. User Story:**

> _Felül mindvégig látható egy fejléc-sáv, az oldal főcímével az aktuális dátum és idő megjelenítésével viszonyítási pontként._

**Elfogadási kritérium:**

A fejléc szerkezete:
+ a főcím megjelenítése középen, egyben "Home" link-ként minden esetben erre a főoldalra navigál.
+ bal szélen az aktuális dátum és időpont, mely folyamatosan frissül
+ jobb szélen az adminisztrátor ikonja, melyre kattintva a beléptető oldara navigál.

**3. User Story:**

> _A szerepkörökhöz tartozó használat egyértelműen elkülönül._

**Elfogadási kritérium:**

+ Belépés / Regisztráció gombok: a jelentkező szakemberek számára, gombcsoportba foglalva
+ Keresés gomb: a potenciális lakossági megrendelőket a kereső oldalra navigálja
+ Adminisztrátor gomb: Az oldal adminisztrátora a navigációs fejlécben tud belépni a megfelelő ikonra kattintva


---------------------------------------------------------
## 2. Kereső oldal

#### ( megrendelők számára )

**1. User Story:**

> _Megrendelők számára a szakma-kategóriák megjelenítése ikonokkal, az eligazodás megkönnyítésére._

**Elfogadási kritérium:**

+ Középre igazított raszterhálóban megjelennek az adatbázis kategóriái ikonokkal, amelyekre kattintva a kategória szerinti kereső-listázó aloldalra navigálják a felhasználót.


---------------------------------------------------------
## 3. Kereső-listázó aloldal(ak)

#### ( megrendelők számára )

**1. User Story:**

> _A kiválasztott kategórián belül lista jelenik meg a felhasználó részére, böngészés céljából._

**Elfogadási kritérium:**

+ Reszponzív lista megjelenítése a kategóriához tartozó szakemberek adatbázisban tárolt publikus adataival.

**2. User Story:**

> _A felhasználó szabadszavas keresőmezővel szűkítheti a találati listát._

**Elfogadási kritérium:**

+ Szabadszavas - beíráskor folyamatosan frissülő - keresőmező megjelenítése és a lista szűrése a találatok alapján. 

**3. User Story:**

> _A felhasználó megadhatja, hogy a megadott szöveges szűkítés mely - számára releváns - adat alapján történjen._

**Elfogadási kritérium:**

+ Beviteli mező legördülő menü formájában, ahol egy mezőt kiválasztva ez alapján történik a lista további szűrése.

**4. User Story:**

> _A felhasználó testreszabhatja a lista mely fejléceket jelenítse meg._

**Elfogadási kritérium:**

+ Beviteli mező legördülő menü formájában, ahol több mezőt kiválasztva a lista megfelelő fejlécei jelennek meg. Ilyenkor a szűkítés csak a megjelenített mezők alapján lehetséges.

**5. User Story:**

> _A felhasználó megadhatja az egy lapon megjeleníteni kívánt sorok számát._

**Elfogadási kritérium:**

+ Lapozó ikonok alul, illetve külön beviteli mezőben megadható az egy lapon megjelenő sorok száma is.

**6. User Story:**

> _A felhasználó tetszőlegesen átrendezheti a táblázat oszlopainak sorrendjét._

**Elfogadási kritérium:**

+ Az oszlopok sorrendje "drag & drop" technikával átrendezhető.

**7. User Story:**

> _A felhasználó a kiválasztott sorra kattintva megkapja a szakember részletes adatait, elérhetőségét felkeresés, további egyeztetés céljából._

**Elfogadási kritérium:**

+ A sorok kattinthatóak, külön ablakban (vagy kártyán) megjelenik a kiválasztott szakember összes publikus adata, ha van, a feltöltött kép is.

**8. User Story:**

> _A felhasználó válaszhat táblázat vagy kártyás megjelenés között._

**Elfogadási kritérium:**

+ Megjelenő ikon a lista vagy kártyás megjelenés kiválasztásához. A kártyás megjelenítés hasonlóan történik a fentiekhez (kivéve az oszlopok áthelyezhetőségét)


---------------------------------------------------------
## 4. Beléptető oldal

#### ( szakemberek és az adminisztrátor számára )

**1. User Story:**

> _A beléptetés külön oldalon jelenik meg._

**Elfogadási kritérium:**

+ Középen megjelenő ablak beviteli mezőiben meg kell adni a felhasználó nevet és a jelszót.
+ Ha a beléptetés elvégezhető innen a megfelelő oldalra navigál. Adminisztrátor esetében az "admin" oldalra, szakember esetében a "szerkesztő" oldalra.
+ Ha a megadott azonosító adatok nem megfelelőek, hibaüzenet jelenik meg. Újrapróbálkozás lehetséges.


---------------------------------------------------------
## 5. Regisztrációs oldal

#### ( szakemberek számára )

**1. User Story:**

> _A regisztráció külön oldalon jelenik meg, a szükséges adatok megadásával. A regisztrációtól való elállás lehetséges._

**Elfogadási kritérium:**

+ Középen megjelenő ablak beviteli mezőiben meg kell adni a felhasználó nevet és a jelszót és a többi adatbázisba kerülő adatot (űrlap).
+ Ha a regisztráció elvégezhető (validáció sikeres) üzenet jelenik meg. Innen a kategórián belüli listára navigál.
 (ua. mint "3. Kereső-listázó aloldal" kritériumai)
+ Ha a megadott adatok nem megfelelőek, hibaüzenet jelenik meg. Újrapróbálkozás szükséges.
+ Elállás a regisztrációtól "mégsem" gombbal. Ilyenkor a főoldalra navigál.


---------------------------------------------------------
## 6. Admin oldal

#### ( adminisztrátor számára )

**1. User Story:**

> _Az adminisztrátor külön listából választhat, hogy az adatbázis mely elemeit (entitásait) kívánja listázni._

**Elfogadási kritérium:**

+ Az adatbázist alkotó entitások Dashboard oldalsávként jelennek meg felsorolva, amelyre kattintva a megfelelő lista jelenik meg.
+ Kilépés gomb jelenik meg. Kattintva a főoldalra navigál, megszűnik az adminisztrátori autentikáció.

**2. User Story:**

> _Az adminisztrátor áttekintő-összegző adatokat kap az adatbázist alkotó elemekről._

**Elfogadási kritérium:**

+ Infografikával áttekintő kimutatások jelennek meg az adatbázisról a Dashboard főoldalán.


---------------------------------------------------------
## 7. Admin aloldalak

#### ( adminisztrátor számára )

**1. User Story:**

> _Az adminisztrátor számára a kiválasztott entitások részletes adatai jelennek meg lista formában._

**Elfogadási kritérium:**

+ A kiválasztott entitás listája megjelenik. A lista jellege megegyezik a 3. Kereső-listázó aloldalnál megadottakkal, kiegészülve "szerkesztő" és "törlő" gombbal (egy-egy ikon megjelenésével).

**2. User Story:**

> _Az adminisztrátor a lista soraiban megjelenő adatokat gombnyomásra szerkesztheti._

**Elfogadási kritérium:**

+ A "szerkesztés" gombra kattintva aloldalon megjelenő űrlapon módosíthatók az adatok.
+ Validáció után az adatbázisban átvezetésre kerülnek az új adatok.
+ Az űrlap bezáródik és a korábbi lista jelenik meg a frissített adatokkal.

**3. User Story:**

> _Az adminisztrátor a lista sorait gombnyomásra törölheti._

**Elfogadási kritérium:**

+ Törlés csak a megerősítő kérdés elfogadása után történik meg.

**4. User Story:**

> _Az adminisztrátor a listához új sort adhat hozzá._

**Elfogadási kritérium:**

+ "Új létrehozás" gomb jelenik meg, melyre kattintva aloldalon megjelenő űrlapon megadhatók az adatok.
+ Validáció után az adatbázisban átvezetésre kerülnek az új adatok.
+ Az űrlap bezáródik és a korábbi lista jelenik meg a frissített adatokkal.


---------------------------------------------------------
## A projekt egyéb adatai:

**Prioritás:** magas

**Megvalósítás időtartama:** 10 hét

**Továbbfejlesztési lehetőségek:**

+ Megrendelői regisztráció lehetősége
+ Megrendelői menedzsment-felület létrehozása
+ Szakember-értékelés lehetősége az elvégzett munkára
+ Szakemberek számára menedzsment-felület létrehozása 
+ Közvetlen üzenetküldés lehetősége az oldalon (mindhárom szerepkör között)
+ Adminisztrátor számára autentikáció-menedzsment felület létrehozása
+ Akadálymentesítés

---------------------------------------------------------
## Linkek:

+ Dokumentáció elérhetősége:
+ Kiegészítő anyagok elérhetősége: