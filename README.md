# frontend-ssr-editor

## Länkar till våra repon på github
- Frontend: https://github.com/hagw23bth/frontend-ssr-editor
- Backend: https://github.com/hagw23bth/backend-ssr-editor/

## Länkar till våra publika driftsättningar (av det som finns på main-branchen)
- Frontend (GitHub Pages): https://hagw23bth.github.io/frontend-ssr-editor/
- Backend (Azure) base url: https://jsramverk-editor-hagw23-ejdwfcdze7cna8a5.northeurope-01.azurewebsites.net/

Backend API example endpoint: https://jsramverk-editor-hagw23-ejdwfcdze7cna8a5.northeurope-01.azurewebsites.net/api/documents

Databasen som används är driftsatt med MongoDB Atlas molntjänst.

## Länkar till våra dev driftsättningar (av det som finns på dev-branchen)
- Frontend (GitHub Pages): https://hagw23bth.github.io/frontend-ssr-editor/dev
- Backend (Azure) base url: https://jsramverk-editor-dev-hagw23-e7a9egbngzctgeau.northeurope-01.azurewebsites.net/

___

## Kom igång (lokalt)

### Installera beroenden:
   `npm install`

### Kör tester:
   `npm test`

### Bygg för produktion:
   `npm run build`
   Bygget skapas i `build/`.

### Kör utvecklingsservern:
   `npm start`
   Öppna http://localhost:3000

### Bygg för development:
   `npm run build:dev`
   Bygget skapas i `build/`.

# Kör utvecklingsserver mot dev-backend:
   `npm run start:dev`
   (startar CRA devserver på http://localhost:3000 med REACT_APP_API_URL pekande på dev-backend)
