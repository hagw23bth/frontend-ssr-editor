# frontend-ssr-editor

## Länkar till våra driftsatta services
- Frontend (GitHub Pages): https://hagw23bth.github.io/frontend-ssr-editor/
- Backend (Azure) base url: https://jsramverk-editor-hagw23-ejdwfcdze7cna8a5.northeurope-01.azurewebsites.net/

Backend API example endpoint: https://jsramverk-editor-hagw23-ejdwfcdze7cna8a5.northeurope-01.azurewebsites.net/api/documents

Databasen som används är driftsatt med MongoDB Atlas molntjänst.

## Länkar till våra repon på github
- Frontend: https://github.com/hagw23bth/frontend-ssr-editor
- Backend: https://github.com/hagw23bth/backend-ssr-editor/
___

## Kort beskrivning
React‑frontend för ssr-editor. Byggs med Create React App och deployas till GitHub Pages.

## Kom igång (lokalt)
1. Installera beroenden:
   npm install

2. Kör utvecklingsservern:
   npm start
   Öppna http://localhost:3000

3. Kör tester:
   npm test

4. Bygg för produktion:
   npm run build
   Bygget skapas i `build/`.

## Deployment (GitHub Pages)
- Se `package.json` → `homepage` måste peka på din Pages‑URL.
- CI/Actions bygger och publicerar `build/` till GitHub Pages.

## Miljövariabler
- Frontend: sätt API‑bas via REACT_APP_API_URL vid build/tid:
  - Lokalt: skapa `.env.development` med t.ex. REACT_APP_API_URL=http://localhost:1337
  - CI: exportera REACT_APP_API_URL i workflow.
- Backend/databas: never commit secrets. Använd GitHub Secrets eller .env på servern.
  - Exempel (INTE att committa): MONGO_URI="mongodb+srv://user:pwd@.../dbname"



