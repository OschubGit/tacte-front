import { Sessions } from "./types";

export const hasMoreThanHalf = (session: Sessions): boolean => {
  return session.current_reserves > session.max_allowed_reserves / 2;
};

export const mapMessageToError = (message: string) => {
  switch (message) {
    case "validation.confirmed":
      return "Las contraseñas no coinciden";
    case "validation.required":
      return "Este campo es obligatorio";
    case "validation.email":
      return "El formato del email no es válido";
    case "validation.min.string":
      return "La contraseña debe tener al menos 8 caracteres";
    case "validation.unique":
      return "Este email ya está registrado";
    default:
      return message;
  }
};
