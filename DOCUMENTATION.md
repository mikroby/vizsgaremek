## **1. Az alkalmazás célja**

Pl.:
- Az alkalmazás feladata, hogy a ... adatait nyilvántartsa és kezelje.

## **2. Az alkalmazás telepítése**

Pl.:
- Forkolni kell az adott GitHub repository tartalmát: (ide jöhet, hogy honnan)   
- A célgépre le kell klónozni az adott GitHub repository tartalmát: (milyen módon, milyen paranccsal)   
- Telepíteni kell az alkalmazás függőségeit: (backend és frontend, hová kell belépni, milyen parancsot kell kiadni)   
- Ha még nincsen fenn a célgépen, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal (ha kell)   
- A terminálban ki kell adni az `ng build` parancsot   
- A /frontend/dist/frontend mappa tartalmát be kell másolni a /backend/public mappába   
- A terminálon be kell lépni a /backend mappába és futtatni az `npm run build` parancsot 

## **3. Az alkalmazás konfigurálása**

Pl.:
A /frontend/environments mappában be kell állítani az API-végpont elérési útvonalát: (ha szükséges)
  - _environment.ts_ állomány: http://127.0.0.1:3000/  
  - _environment.prod.ts_ állomány: http://localhost:3000/ 

## **4. Az alkalmazás indítása**

Pl.:
A megadott Docker container indítása és inicializálása:
- El kell indítani a Docker Desktop alkalmazást
- A /backend mappába belépve a terminálban ki kell adni az `npm run dev` parancsot  
- Ha szükséges, a /frontend mappába belépve a terminálban az `npm start` paranccsal indítható a frontend

_Megjegyzés_:  
A belépéshez egy érvényes e-mail-cím és jelszó páros (példa):  

E-mail | Jelszó
------------ | -------------
jmottinelli2d@reuters.com | $2a$10$u7hjgNaac3

## **5. A végpontok dokumentációja**

Pl.:
Swagger 
- Az alábbi URL-t kell beírni a böngészőbe: https://localhost:3000/api-docs

---
---

## **Linkek:**  

Pl.:
- a User Story-ra mutató link




