import { useAppStore } from "@/store";
import { HOST } from "@/utils/Constant";
import { createContext, useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const socket = useRef();
  const { userInfo } = useAppStore();

  useEffect(() => {
    if (userInfo) {
      socket.current = io(HOST, {
        withCredentials: true,
        query: { userId: userInfo.id },  // You might want to switch to auth instead of query (see below)
      });

      socket.current.on("connect", () => {
        console.log("Connected to socket server");
      });

      const handleRecieveMessage = (message) =>{
         const {selectedChatData, selectedChatType, addMessage, addContactsInDMContacts} = useAppStore.getState();

         if(selectedChatType!==undefined && (selectedChatData._id === message.sender._id || selectedChatData._id === message.recipient._id)){
            console.log("message rcv", message)
            addMessage(message);
         }
         addContactsInDMContacts(message)
      }

      const handleRecieveChannelMessage =(message) =>{
        console.log("🔥 Received channel message:", message);
        const {selectedChatData, selectedChatType, addMessage, addChannelInChannelList} = useAppStore.getState();
        if( selectedChatType !== undefined && 
            selectedChatData._id === message.channelId
        )  {
             console.log("✅ Matched channel. Calling addMessage()");
            addMessage(message);
        }
        addChannelInChannelList(message);
      }


      socket.current.on("recieveMessage", handleRecieveMessage)
      socket.current.on("receive-channel-message", handleRecieveChannelMessage)

      return () => {
        socket.current.disconnect();
      };
    }
  }, [userInfo]);

  return (
    <SocketContext.Provider value={socket.current}>
      {children}
    </SocketContext.Provider>
  );
};
