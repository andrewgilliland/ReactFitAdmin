export type FormState = {
  success: boolean;
  message: string;
  errors: { [key: string]: string } | undefined;
};
