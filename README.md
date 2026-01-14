# Projekt-idé: 

### Beskrivning:
Ett system (konstruerat i expo?) för att registrera och spåra paket från “skickat” till “levererat”.

### Funktioner:

- Skapa paket (avsändare, mottagare, vikt)

- Statusflöde: Registered → In Transit → Out for Delivery → Delivered

- Tidslinje med statusuppdateringar

- Sök paket via tracking-ID

### Teknik:

- Go: REST API, SQLite/Postgres

- React: lista + detaljerad vy, status-badge
