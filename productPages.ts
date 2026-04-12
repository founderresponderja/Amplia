/** GitHub Open Graph previews — mockups dos repositórios */
export const PRODUCT_SCREENSHOTS = {
  lia: 'https://opengraph.githubassets.com/1be7fe99ee239b6636d4c2fd37c05985848789e87bea784b192f86eb0ced5977/founderresponderja/Lia',
  homestudio:
    'https://opengraph.githubassets.com/338257c02451528166370ca4f2b3948fd1558914a9a43eaaaf113aa08d5a03fb/founderresponderja/AmpliaHomeStudio',
  opsflow:
    'https://opengraph.githubassets.com/b6d51bc2ddf8a0de2ce797f6eb53272f7aaa35496d8d0a3de2cf23088347eee1/founderresponderja/AmpliaOpsFlow',
} as const;

export type ProductWaitlistKey = keyof typeof PRODUCT_SCREENSHOTS;
