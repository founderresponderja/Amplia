/** Product previews served from public/produtos */
export const PRODUCT_SCREENSHOTS = {
  lia: '/produtos/lia-preview.png',
  homestudio: '/produtos/homestudio-preview.png',
  opsflow: '/produtos/opsflow-preview.png',
  subly: '/produtos/subly-preview.png',
  social: '/produtos/social-preview.png',
} as const;

export type ProductWaitlistKey = keyof typeof PRODUCT_SCREENSHOTS;
