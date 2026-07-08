/** Single source of truth for site-wide constants. */
export const SITE_URL = "https://christianortel.com";
export const SITE_NAME = "Christian Ortel";
export const EMAIL = "christian_ortel@yahoo.com";
export const PHONE = "(518) 925-7498";
export const PHONE_INTL = "+1-518-925-7498";
export const GITHUB_URL = "https://github.com/christianortel";
export const LINKEDIN_URL = "https://linkedin.com/in/christianortel";
export const LINK_HUB_URL = "https://hoo.be/christianortel";

/** Served from public/ so it works locally and in production. */
export const RESUME_URL = "/christian-ortel-resume.pdf";
export const RESUME_FILENAME = "Christian-Ortel-Resume.pdf";

export const ogImage = (name: string) => `${SITE_URL}/og/${name}.jpg`;
export const canonical = (path: string) => `${SITE_URL}${path}`;
