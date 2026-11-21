/** Mockups das apps (public/produtos), com a identidade de cada marca */
export const PRODUCT_SCREENSHOTS = {
  responderja: '/produtos/responderja-mockup.jpg',
  lia: '/produtos/lia-mockup.jpg',
  homestudio: '/produtos/homestudio-mockup.jpg',
  opsflow: '/produtos/opsflow-mockup.jpg',
  subly: '/produtos/subly-mockup.jpg',
  social: '/produtos/social-mockup.jpg',
} as const;

export type ProductWaitlistKey = keyof typeof PRODUCT_SCREENSHOTS;
