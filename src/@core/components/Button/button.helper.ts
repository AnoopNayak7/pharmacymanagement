declare const ButtonTypes: readonly ['default', 'primary', 'outlined', 'link'];
export type ButtonType = (typeof ButtonTypes)[number];

declare const ButtonShapes: readonly [
  'edges',
  'nonrounded',
  'rounded',
  'round5'
];
export type ButtonShape = (typeof ButtonShapes)[number];

declare const ButtonHTMLTypes: readonly ['submit', 'button', 'reset'];
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

declare const ButtonSizeTypes: readonly ['small', 'middle', 'large', undefined];
export type ButtonSizeType = (typeof ButtonSizeTypes)[number];

interface ButtonKeyType {
  [key: string]: string;
}

export const ButtonShapeStyles: ButtonKeyType = {
  rounded: 'rounded-full',
  edges: 'rounded-sm',
  round5: 'rounded-[8px]',
  nonrounded: 'rounded-0',
};

export {};