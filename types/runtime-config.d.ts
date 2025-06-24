export {};
declare module "nuxt/schema" {
  interface runtimeConfig {
    smtpHost: string;
    smtpPort: number;
    smtpUser: string;
    smtpPass: string;
    clientEmail: string;
  }
}
