export class AuthTokenError extends Error {
  constructor() {
    super("Error related to the authentication token.");
  }
}
