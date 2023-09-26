import {
    ButtonType,
    ButtonShape,
    ButtonHTMLType,
    ButtonSizeType,
  } from './button.helper';
  
  export interface BaseButtonProps {
    type?: ButtonType;
    icon?: React.ReactNode;
    shape?: ButtonShape;
    size?: ButtonSizeType;
    disabled?: boolean;
    loading?:
      | boolean
      | {
          delay?: number;
        };
    htmlType?: ButtonHTMLType;
    className?: string;
    block?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
  }
  
  export const BaseStyles =
    'bxsdw py-2 px-9 outline-none font-inter flex items-center whitespace-nowrap bg-secondary text-white font-semibold';