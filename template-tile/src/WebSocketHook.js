import { useState } from "react";
import useWebSocket from "react-use-websocket";

export const useSocket = (domains, onMessageReceived) => {
  const [connect] = useState(true);

  const websocketService = useWebSocket(
    "ws://192.168.178.80:8080",
    {
      onOpen: () => console.log("Connection Opened"),
      onClose: () => console.log("Websocket Connection Closed"),
      onError: (event) => console.log(event),
      onMessage: (event) => {
        try {
          const response = JSON.parse(event.data);
          if (domains.indexOf(response.domain) > -1) {
            onMessageReceived(response);
          }
        } catch (e) {
          console.log(e);
        }
      },
      share: true,
      shouldReconnect: (_closeEvent) => true,
      reconnectAttempts: 10,
      reconnectInterval: 3000,
    },
    connect
  );

  const sendMessage = (message) => {
      websocketService.sendJsonMessage(message);
  }

  return { sendMessage };
};
