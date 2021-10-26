// import axios from "axios";
import { io } from "../app";
import { prismaClient } from "../prisma";
import { api } from "./api";

interface ICreateMessageResponse {
  message: {
    id: number;
    message: string;
    username: string;
    email: string;
  };
  result: string;
}

class CreateMessageService {
  async execute(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id
      },
      include: {
        user: true
      }
    });

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      created_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url
      }
    };

    io.emit("new_message", infoWS);

    try {
      // const response = await axios.post<ICreateMessageResponse>("http://localhost:4444/api/message", {
      const response = await api.post<ICreateMessageResponse>("/message", {
        message: message.text,
        username: message.user.name,
        email: `${message.user.login}@github.com`
      });
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    return message;
  }
}

export { CreateMessageService };
