import ThemeSwitcher from "./ThemeSwitcher";
import useThemeSwitcher from "./useThemeSwitcher";

declare module 'theme-switcher' {
    export { default as ThemeSwitcher } from "./ThemeSwitcher";
    export { default as useThemeSwitcher } from "./useThemeSwitcher";
}