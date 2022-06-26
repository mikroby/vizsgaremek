## MESTEREMBER Applikáció - Szakember kereső adatbázis

## **1. Az alkalmazás célja**

- Az alkalmazás feladata, hogy platformot biztosítson lakossági megrendelők és szakemberek közti
  kapcsolat létrejöttéhez, illetve az ehhez szükséges adatbázist kezelje.


----------------------------------------
## **2. Az alkalmazás telepítése**


- Előfeltételek: Chrome böngésző, Angular keretrendszer, NodeJS futtató-környezet, Git verziókezelő, Docker Desktop konténer-management alkalmazás.
- Forkolni szükséges ennek a GitHub repository-nak a tartalmát: https://github.com/mikroby/vizsgaremek   
- A célgépre le kell klónozni ugyanezt a repository-t a VSCode terminál ablakában a kívánt mappában állva:
  ```
  git clone https://github.com/mikroby/vizsgaremek.git
  ```
- Telepíteni kell az alkalmazások függőségeit:
  * backend: (terminálban a /backend mappában állva)
    ```
    npm i
    ```
  * frontend: (terminálban a /frontend mappában állva)
    ```
    npm i
    ```
- Amennyiben még nincsen telepítve a célgépre az Angular keretrendszer, terminál ablakban ki kell adni:
    ```
    npm i -g @angular/cli
    ```
- Amennyiben nem az alap konfigurációval szeretné futtatni az alkalmazást, végezze el a konfigurálást a 3.sz pont alapján.

- A /frontend mappában állva a terminálban ki kell adni:
    ```
    ng build
    ```   
- A '/frontend/dist/mesterember' mappa teljes tartalmát be kell másolni a /backend/public mappába (amennyiben nincsenek még ott ezek a file-ok a klónozás után)

- A külön mellékelt file-okat be kell másolni:
  - .env file-t a /backend mappába
  - default.json és test.json file-okat a /backend/config almappába

Az alkalmazás indításra kész.


----------------------------------------
## **3. Az alkalmazás konfigurálása**

- A /frontend/environments mappában be  lehet állítani az API-végpont elérési útvonalát: (alapértékek)
  - _environment.ts_ állomány: http://localhost:3000/  
  - _environment.prod.ts_ állomány: http://localhost:3000/
- A /backend/.env file-ban megadható az API portszáma.


----------------------------------------
## **4. Az alkalmazás indítása**

A megadott Docker container indítása és inicializálása:
- El kell indítani a Docker Desktop alkalmazást (előzőleg telepítendő) és megvárni, amíg a motor futásra kész állapotba kerül.
- A /backend mappába belépve a terminálban ki kell adni:
  ```
  npm run compose
  ```
- A Docker Desktop-ban láthatónak kell lenni a konténernek és futó állapotúnak kell lennie.
  Ekkor az alkalmazás a http://localhost:3000/ url-en érhető el alapértékű konfiguráció esetén.


- Ha Docker Desktop nélkül szeretné indítani az alkalmazást:
  - /frontend mappába belépve a terminálban:
  ```
  npm start
  ```
  - /backend mappába belépve terminálban:
  ```
  npm run server  *(vagy nodemon nélkül)* npm start
  ```
  - ekkor a frontend a http://localhost:4200/ url-en, mígy a backend a http://localhost:3000/ -en érhető el a böngészőben.


- Az alkalmazás bizonyos részeihez jogosultságot kell igazolni. pl.:
  - adminisztrátori jogosultság:
    - email: a@a.hu
    - jelszó: 012
  - szakemberi jogosultság:
    - email: x@x.hu
    - jelszó: 012
- Az alkalmazásban létrehozható illetve szerkeszthető több ugyanilyen jogosultság is.


----------------------------------------
## **5. A végpontok dokumentációja**

- Swagger UI:
  - Az alábbi URL-en érhető el a böngészőben: https://localhost:3000/api-docs
  - vagy: https://localhost:3000/welcome oldalon linkről is elérhető.


----------------------------------------
## **Linkek:**  

- Az alkalmazás a következő User Story alapján készült :https://github.com/mikroby/vizsgaremek/blob/main/README.md
