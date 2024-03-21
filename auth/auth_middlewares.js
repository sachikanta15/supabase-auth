import {supabaseAuthMiddleware} from "./supabaseAuthMiddleware.js"

export const auth_middlewares = (req, res, next) => {
  supabaseAuthMiddleware(req, res, next);
};
