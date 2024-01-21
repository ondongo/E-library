export const WRONG_PASSWORD_ERROR = "auth/wrong-password";
export const NON_EXISTING_USER_ERROR = "auth/user-not-found";
export const DISABLED_ACCOUNT_ERROR = "auth/account-disabled";
export const EMAIL_NOT_VERIFIED_ERROR = "auth/email-not-verified";
export const EMAIL_ALREADY_USED = "auth/email-already-in-use";
export function AuthErrorToMessage(authErrorCode: string) {
  switch (authErrorCode) {
    case WRONG_PASSWORD_ERROR:
      return "Mauvais mot de passe. Avez-vous oublié votre mot de passe ?";
    case NON_EXISTING_USER_ERROR:
      return "Ce compte n'existe pas, vérifiez les données saisies.";
    case DISABLED_ACCOUNT_ERROR:
      return "Votre compte est désactivé.";
    case EMAIL_NOT_VERIFIED_ERROR:
      return "Votre email n'est pas vérifié";
    case EMAIL_ALREADY_USED:
      return "Cette adresse email appartient à un compte existant";
    default:
      return "";
  }
}

export function getTotalPages(ITEMS_PER_PAGE: number, totalCount: number) {
  return Math.ceil(totalCount / ITEMS_PER_PAGE);
}


export function showToastError(
  title: string,
  description: string,
  toast: Function,
  options?: { status?: "error" | "warning" | "success"; duration?: number }
) {
  toast({
    title,
    description,
    status: options?.status ?? "error",
    duration: options?.duration ?? 5000,
    isClosable: true,
  });
}
