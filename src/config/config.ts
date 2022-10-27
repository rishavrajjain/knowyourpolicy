const environment = `${process.env.ENVIRONMENT}`;
const jwtSecret = `${process.env.JWT_SECRET}`;
const uiUrl = `${process.env.UI_BASE_URL}`;

export const configs = {
  environment,
  jwtSecret,
  cookieSecureConfig: environment === "prod" ? true : false,
  uiUrl: environment === "prod" ? uiUrl : "http://localhost:3000",
  allowedCrossOrigins:
    environment === "prod"
      ? ["https://know-your-policy.vercel.app"]
      : ["https://know-your-policy.vercel.app", "http://localhost:3000"],
};
