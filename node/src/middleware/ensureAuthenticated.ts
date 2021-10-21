import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      errorCode: "token.invalid"
    });
  }

  // Bearer 8934589345djisdjfk834u25ndsfksdkf
  // [0]    [1]
  const [, token] = authToken.split(" ");

  try {
    const { sub } = jwt.verify(token, String(process.env.JWT_SECRET)) as IPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).json({ errorCode: "token.expired" });
  }
}
