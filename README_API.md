# API Documentation

## Настройка

1. Создайте файл `.env` в корне проекта:

```env
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_PORT=3306
PORT=3001
```

2. Установите зависимости:

```bash
npm install
```

3. Запустите сервер:

```bash
npm run dev:server
```

## Базы данных

Проект использует 4 базы данных:

- **Infamous_token** - Store и Token Leaderboard
- **infamous_iga** - Bans, Punishments, Staff, Playtime Leaderboard
- **infamous_server** - Gangs
- **infamous_darkrp** - Money Leaderboard и Events

## API Endpoints

### Store API (`/api/store`)

- `GET /api/store/tokens/:steamId` - Получить токены пользователя
- `GET /api/store/transactions/:steamId` - Получить транзакции пользователя
- `POST /api/store/transactions` - Создать транзакцию

### Leaderboard API (`/api/leaderboard`)

- `GET /api/leaderboard/tokens` - Token Leaderboard (Infamous_token, roasts_tokens)
- `GET /api/leaderboard/money` - Money Leaderboard (infamous_darkrp, darkrp_player)
- `GET /api/leaderboard/events` - Event Leaderboard (infamous_darkrp, event_winners)
- `GET /api/leaderboard/playtime` - Playtime Leaderboard (infamous_iga, player)

### Bans API (`/api/bans`)

- `GET /api/bans` - Получить все баны (infamous_iga, player_bans)
- `GET /api/bans/:id` - Получить бан по ID
- `GET /api/bans/steamid/:steamId` - Получить баны по SteamID

### Punishments API (`/api/punishments`)

- `GET /api/punishments` - Получить все наказания (infamous_iga, player_punishments)
- `GET /api/punishments/:id` - Получить наказание по ID
- `GET /api/punishments/steamid/:steamId` - Получить наказания по SteamID

### Gangs API (`/api/gangs`)

- `GET /api/gangs` - Получить все банды (infamous_server, gangs)
- `GET /api/gangs/:id` - Получить банду по ID

### Staff API (`/api/staff`)

- `GET /api/staff` - Получить весь персонал (infamous_iga, od_times)
- `GET /api/staff/steamid/:steamId` - Получить персонал по SteamID

## Примеры использования

### Получить токены пользователя

```javascript
const response = await fetch('http://localhost:3001/api/store/tokens/STEAM_0:1:12345678');
const data = await response.json();
```

### Получить список банов

```javascript
const response = await fetch('http://localhost:3001/api/bans?limit=50&offset=0');
const bans = await response.json();
```

### Получить Token Leaderboard

```javascript
const response = await fetch('http://localhost:3001/api/leaderboard/tokens?limit=100');
const leaderboard = await response.json();
```

## Health Check

`GET /api/health` - Проверка подключения ко всем базам данных
