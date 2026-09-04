export const sendSuccess = <T>(data: T, message?: string) => ({
  success: true,
  data,
  message,
});

export const sendError = (error: string, code?: number) => ({
  success: false,
  error,
  code,
});
