###  Instructions
- Run cron job to refresh websocket data

```sh
npm install -g pm2 # optional
pm2 start --name call5s_ws_message npm -- start
```
