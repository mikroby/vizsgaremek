## MESTEREMBER Applikáció - Szakember kereső adatbázis
----
## USER STORIES

## 1. Főoldal

#### ( minden szerepkör számára )

**1. User Story:**

> _Üdvözlő képernyő, amely egyszerű módon bemutatja az oldal alapvető célját._

**Elfogadási kritérium:**

+ Reszponzív megjelenéssel, néhány kép és nagyobb felirat, amely leírja az oldal célját: lakossági szakember kereső adatbázis.

**2. User Story:**

> _Felül mindvégig legyen látható egy fejléc-sáv, az oldal főcímével az aktuális dátum és idő megjelenítésével viszonyítási pontként._

**Elfogadási kritérium:**

A fejléc szerkezete:
+ a főcím megjelenítése középen, egyben "Home" link-ként navigáljon minden esetben erre a főoldalra!
+ bal szélen az aktuális dátum és időpont, mely folyamatosan frissül
+ jobb szélen az adminisztrátor ikonja, mely kattintható.

**3. User Story:**

> _A szerepkörök elkülönítésére gombok jelenjenek meg._

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

+ Középre igazított raszterhálóban megjelennek az adatbázis kategóriái ikonokkal, amelyek a megfelelő kereső-listázó aloldalra navigálják a felhasználót.


---------------------------------------------------------
## 3. Kereső-listázó aloldal(ak)

#### ( megrendelők számára )

**1. User Story:**

> _A kiválasztott kategórián belül lista jelenik meg a felhasználó részére._

**Elfogadási kritérium:**

+ Reszponzív lista megjelenítése a kategóriához tartozó szakemberek adatbázisban tárolt publikus adataival. Az adatok jellegének megnevezése fejléccel történik.

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

+ Beviteli mező legördülő menü formájában, ahol több mezőt kiválasztva a lista megfelelő fejlécei jelennek meg. Ilyenkor a szűkítés csak a megjelenített mezők alapján legyen lehetséges!

**5. User Story:**

> _A felhasználó megadhatja az egy lapon megjeleníteni kívánt sorok számát._

**Elfogadási kritérium:**

+ Lapozó ikonok alul, illetve külön beviteli mezőben legyen megadható az egy lapon megjelenő sorok száma is.

**6. User Story:**

> _A felhasználó tetszőlegesen átrendezheti a táblázat oszlopainak sorrendjét._

**Elfogadási kritérium:**

+ Az oszlopok sorrendje "drag & drop" technikával átrendezhető legyen.

**7. User Story:**

> _A felhasználó a kiválasztott sorra kattintva megkapja a szakember részletes adatait, elérhetőségét._

**Elfogadási kritérium:**

+ A sorok kattinthatóak legyenek, külön ablakban (vagy kártyán) megjelenik a kiválasztott szakember összes publikus adata, ha van, a feltöltött kép is.

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

> _A regisztráció külön oldalon jelenik meg, a szükséges adatok megadásával. A regisztrációtól való elállás legyen lehetséges._

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

> _Az adminisztrátor külön áttekintő oldalon listából választhat, hogy az adatbázis mely elemeit (entitásait) kívánja aloldalakon listázni, szerkeszteni._

**Elfogadási kritérium:**

+ Felül a fejléc alatt megjelennek az adatbázist alkotó entitások, amelyre kattintva a megfelelő aloldalra navigál.
+ Infografikával megjelennek áttekintő kimutatások az adatbázisról.
+ Kilépés gomb jelenik meg. Kattintva a főoldalra navigál, megszűnik az adminisztrátori autentikáció.


---------------------------------------------------------
## 7. Admin aloldalak

#### ( adminisztrátor számára )

**1. User Story:**

> _Az adminisztrátor a kiválasztott entitások részletes adatait listában szerkesztheti._

**Elfogadási kritérium:**

+ "Új létrehozás" gomb jelenik meg, melyre kattintva aloldalon megjelenő űrlapon megadhatók az adatok.
+ A kiválasztott entitás listája megjelenik. A lista jellege megegyezik a 3. Kereső-listázó aloldalnál megadottakkal, kiegészülve szerkesztő és törlő gombbal (egy-egy ikon megjelenésével).
+ A "szerkesztés" gombra kattintva aloldalon megjelenő űrlapon módosíthatók az adatok.
+ Validáció után az adatbázisban átvezetésre kerülnek az új adatok.

