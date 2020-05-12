import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    dropShadow: string;
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
      alternate: string;
    };
  }
}
