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
+ "MesterEmber" főcím megjelenítése vastagabb betűvel, amely egyben "Home" link-ként minden esetben erre a főoldalra navigál.
+ bal szélén az aktuális dátum és időpont, a hét napjának rövidítésével, mely folyamatosan frissül.
+ jobb szélen a "Bejelentkezés" felirat látható, melyre kattintva a beléptető oldara navigál.
+ tőle balra a "Regisztráció" felirat olvasható, mely az újonnan érkező szakembereket a regisztrációhoz továbbítja.
+ tőle balra a "Keresés" link található, leendő megrendelők számára. Rákattintva a kereső oldalra navigál.

**3. User Story:**

> _A szerepkörökhöz tartozó használat egyértelműen elkülönül._

**Elfogadási kritérium:**

+ Regisztráció gombok: a képernyő középső részén a jelentkező szakemberek számára.
+ Keresés gomb: a potenciális lakossági megrendelőket a kereső oldalra navigálja
+ Adminisztrátor: Az oldal adminisztrátora(i) a bejelentkezés gombot használhatják a fejlécben.


---------------------------------------------------------
## 2. Kereső oldal

#### ( megrendelők számára )

**1. User Story:**

> _Megrendelők számára a szakma-kategóriák megjelenítése ikonokkal, az eligazodás megkönnyítésére._

**Elfogadási kritérium:**

+ Középre igazított raszterhálóban megjelennek az adatbázis kategóriái kártyái ikonokkal/logókkal,
  amelyekre kattintva a kategóriába tartozó tevékenységek listája jelenik meg.
  Minden logó alatt található egy gomb, a kategória nevével. Erre a gombra kattintva juthat el a kategórián belüli
  kereső-listázó aloldalra a felhasználó.


---------------------------------------------------------
## 3. Kereső-listázó aloldal(ak)

#### ( megrendelők számára )

**1. User Story:**

> _A kiválasztott kategórián belül lista jelenik meg a felhasználó részére, böngészés céljából._

**Elfogadási kritérium:**

+ Reszponzív lista megjelenítése a kategóriához tartozó szakemberek adatbázisban tárolt publikus adataival.
+ Kétféle megjelenítés lehetséges: kártya nézet és lista nézet. (lsd.: 6.sz. user story-nál.)

**2. User Story:**

> _A felhasználó szabadszavas keresőmezővel szűkítheti a találati listát._

**Elfogadási kritérium:**

+ Lista nézet kiválasztása után táblázatos formában megjelenik a szűkíthető lista.
+ Szabadszavas - beíráskor folyamatosan frissülő - keresőmező megjelenítése és a lista szűrése a találatok alapján.
+ Ehhez keresőmező, szűrést kiválasztó legördülő menü és a megjelenő oszlopok testreszabhatóságát megoldó legördülő
  menü jelenik meg.

**3. User Story:**

> _A felhasználó megadhatja, hogy a megadott szöveges szűkítés mely - számára releváns - adat alapján történjen._

**Elfogadási kritérium:**

+ Beviteli mező legördülő menü formájában, ahol egy mezőt kiválasztva ez alapján történik a lista további szűrése.

**4. User Story:**

> _A felhasználó testreszabhatja a lista mely fejléceket jelenítse meg._

**Elfogadási kritérium:**

+ Beviteli mező legördülő menü formájában, ahol több mezőt kiválasztva a lista megfelelő fejlécei jelennek meg.
  Ilyenkor a szűkítés és keresés csak a megjelenített mezők alapján lehetséges.

**5. User Story:**

> _A felhasználó megadhatja az egy lapon megjeleníteni kívánt sorok számát._

**Elfogadási kritérium:**

+ Lapozó ikonok alul, illetve külön beviteli mezőben megadható az egy lapon megjelenő sorok száma is.

**6. User Story:**

> _A felhasználó egyszerűen válaszhat táblázat vagy kártyás megjelenés között._

**Elfogadási kritérium:**

+ A két megjelenés között osztott gombbal lehet váltani, a könnyebb átláthatóság miatt ikonok jelzik a funkciót.
+ Kártyás nézetben csak a legfontosabb adatok jelennek meg, a gyorsabb keresés, könnyebb átláthatóság céljából.
+ A kártyákon a regisztrált szakemberek által feltöltött képecskék jelennek meg.


---------------------------------------------------------
## 4. Beléptető oldal

#### ( szakemberek és adminisztrátorok számára )

**1. User Story:**

> _A beléptetés külön oldalon jelenik meg._

**Elfogadási kritérium:**

+ Középen megjelenő ablak beviteli mezőiben meg kell adni a felhasználó nevet és a jelszót.
+ A hitelesítés egyedi email-címet feltételez minden felhasználóhoz.
+ Ha a beléptetés elvégezhető innen a megfelelő oldalra navigál. Adminisztrátor esetében az "Vezérlőpult" oldalra, szakember esetében a
  "Profil" oldalra.
+ Ha a megadott azonosító adatok nem megfelelőek, hibaüzenet jelenik meg. Újrapróbálkozás lehetséges.

**2. User Story:**

> _Az egyes oldalak megtekintése jogosultsághoz kötött_

**Elfogadási kritérium:**

+ Jogosultság alapján szervezett elérési út-rendszer.
+ JWT autentikáció használata.
+ Back-end felől beszerzett adatok alapján session-storage-ba mentett bejelentkezési adatok, melyek onnan bármikor kinyerhetők az
  alkalmazás számára.
+ Ezen adatok: felhasználó vezeték- és keresztneve, avatar file-név, e-mail címe, jogköre, access_token, belépés sikerességét jelző
  logikai érték.

**3. User Story:**

> _A nem jogosult oldalak helyett tájékoztató üzenet jelenik meg a megfelelő bejelentkezés szükségességéről._

**Elfogadási kritérium:**

+ Szöveges tájékoztató oldal a hiba okáról a bejelentkezésre lehetőséget biztosító, kattintható gomb megjelenítésével.
+ Mellette a főoldalra navigáló gomb is helyet kap.

**4. User Story:**

> _Belépés után, a bejelentkezés időtartama alatt ikon vagy kép jelzi a személyt._

**Elfogadási kritérium:**

+ Jobb felső sarokban a fejlécben megjelenő kép. Erre kattintva legördülő menüből választhat a jogköréhez tartozó funkciókat.
+ Kijelentkezés után a jogkör megszűnik, a kép eltűnik, jelezve, hogy nem érhetőek el a jogosult oldalak.


---------------------------------------------------------
## 5. Regisztrációs oldal

#### ( szakemberek számára )

**1. User Story:**

> _A regisztráció külön oldalon jelenik meg, a szükséges adatok megadásával. A regisztrációtól való elállás lehetséges._

**Elfogadási kritérium:**

+ Középen megjelenő ablak beviteli mezőiben meg kell adni a vezeték- és keresztnevet az email-címet és a választott jelszót.
+ "Regisztráció" goombbal indíthatja a regisztráció menetét.
+ Elállás esetén a fejlécben elérhető linkek bármelyikére kattintva elnavigálhat.
+ Ha a regisztráció elvégezhető (validáció sikeres) üzenet jelenik meg.
+ Ha a megadott adatok nem megfelelőek, hibaüzenet jelenik meg. Újrapróbálkozás szükséges.
+ Sikeres regisztráció után a "Profil" oldalra irányítja a szakembert.


---------------------------------------------------------
## 6. Profil oldal

#### ( szakemberek számára )

**1. User Story:**

> _A hiányzó adatok megadása, mely ahhoz szükséges, hogy regisztrált felhasználóként szakemberi minőségben kereshetővé váljon._

**Elfogadási kritérium:**

+ Középen megjelenő ablak beviteli mezőkkel.
+ A korábban megadott regisztrációs adatok is szerkeszthetőek.
+ Újabb adatok felvitele: avatar kép feltöltése, életkor (opcionális), óradíj, telefonszám, munkavégézés gyakorisága és ideje,
  kategória kiválasztása és azon belül a tevékenység megadása szükséges.
+ Az űrlap kitöltése egy mentés gombbal zárható le. Ezután válik kereshetővé egy adott szakember.
+ Bármikor kijelentkezés valósítható meg a fejléc sarkában található "Kijelentkezés" linkkel.


---------------------------------------------------------
## 7. Admin főoldal (Vezérlőpult)

#### ( adminisztrátor számára )

**1. User Story:**

> _Az adminisztrátor külön listából választhat, hogy az adatbázis mely elemeit (entitásait) kívánja listázni._

**Elfogadási kritérium:**

+ Az adatbázist alkotó entitások Dashboard oldalsávként jelennek meg felsorolva, amelyre kattintva a megfelelő lista jelenik meg.
+ Kilépés gomb jelenik meg. Kattintva a főoldalra navigál, megszűnik az adminisztrátori autentikáció.

**2. User Story:**

> _Az adminisztrátor áttekintő-összegző adato(ka)t kap az adatbázist alkotó elemekről._

**Elfogadási kritérium:**

+ Infografikával (pl:oszlopgrafikon) áttekintő kimutatás jelenik meg az adatbázisról. Későbbiekben igény szerint fejleszthető.

**3. User Story:**

> _Az adminisztrátori jogkör kijelentkezés után megszűnik._

**Elfogadási kritérium:**

+ Kijelentkezés gombra kattintva a belépő oldalra navigál, megszűnik az adminisztrátori autentikáció, eltűnik a jelző-kép.


---------------------------------------------------------
## 7. Admin aloldalak (jelenleg 5db)

#### ( adminisztrátorok számára )

**1. User Story:**

> _Az adminisztrátor számára a kiválasztott entitás részletes adatai jelennek meg lista formában._

**Elfogadási kritérium:**

+ A kiválasztott entitás listája megjelenik. A lista jellege megegyezik a 3. Kereső-listázó aloldalnál megadottakkal, kiegészülve "Szerkesztés" és "Törlés" gombbal (egy-egy ikon megjelenésével).

**2. User Story:**

> _Az adminisztrátor a lista soraiban megjelenő adatokat gombnyomásra szerkesztheti._

**Elfogadási kritérium:**

+ A "Szerkesztés" gombra kattintva aloldalon megjelenő űrlapon módosíthatók az adatok.
+ Validáció után az adatbázisban átvezetésre kerülnek az új adatok.
+ Az űrlap bezáródik és a korábbi lista jelenik meg a frissített adatokkal.

**3. User Story:**

> _Az adminisztrátor a lista sorait gombnyomásra törölheti._

**Elfogadási kritérium:**

+ A "Törlés" gomb megnyomása után felugró ablakban megerősítést kérő gomb megnyomása után történik meg a művelet.

**4. User Story:**

> _Az adminisztrátor a listához új sort adhat hozzá._

**Elfogadási kritérium:**

+ "Új létrehozása" gomb, melyre kattintva aloldalon megjelenő űrlapon megadhatók az adatok.
+ Validáció után az adatbázisban átvezetésre kerülnek az új adatok.
+ "Mentés" gomb megnyomása után az űrlap bezáródik és a korábbi lista jelenik meg a frissített adatokkal.

**5. User Story:**

> _Legyen lehetőség visszalépésre a szerkesztéskor._

**Elfogadási kritérium:**

+ Mind új sor létrehozásako, illetve szerkesztéskor a menté gomb mellett megjelenik a "Mégsem" gomb, melyre kattintva
  visszalépünk a listához.

**6. User Story:**

> _A lista rendezhető, szűrhető, testreszabható._

**Elfogadási kritérium:**

+ Részletesen megtalálható a 3.sz. Kereső-listázó oldalnál.


---------------------------------------------------------
## A projekt egyéb adatai:

**Prioritás:** magas

**Megvalósítás időtartama:** 34 nap

**Továbbfejlesztési lehetőségek:**

+ Megrendelői regisztráció lehetősége.
+ Megrendelői menedzsment-felület létrehozása.
+ Szakember-értékelés lehetősége az elvégzett munkára.
+ Szakemberek számára menedzsment-felület létrehozása, pl.: számlázás, megrendelések követése.
+ Közvetlen üzenetküldés lehetősége az oldalon (mindhárom szerepkör között)
+ A táblázat oszlopainak sorrendje "drag & drop" technikával legyen átrendezhető.
+ Akadálymentesítés

---------------------------------------------------------
## Linkek:

+ Dokumentáció elérhetősége: https://github.com/mikroby/vizsgaremek/blob/main/DOCUMENTATION.md