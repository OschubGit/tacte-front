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
    case "Invalid session type":
      return "Tipo de sesión no válido";
    case "The session has already started or finished.":
      return "La sesión ya ha comenzado o ha finalizado";
    case "Session is full":
      return "La sesión está completa";
    case "User already has a reservation for this session":
      return "Ya tienes una reserva para esta sesión";
    case "Unable to reserve.":
      return "No se pudo realizar la reserva";
    case "No active reservation found for this user and session":
      return "No se encontró una reserva activa para esta sesión";
    default:
      return message;
  }
};

export const translateType = (type: string) => {
  switch (type) {
    case "pilates":
      return "Pilates";
    // YOGA_DISABLED
    // case "yoga":
    //   return "Yoga";
    case "nutrition":
      return "Nutrición";
    case "aesthetics":
      return "Estética";
    case "psychology":
      return "Psicología";
    case "osteopathy":
      return "Quiromasaje y Osteopatía";
    default:
      return type;
  }
};
