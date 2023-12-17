import { HasCssClass, HasTitle } from "./base";

export default interface RouterLink extends HasCssClass, HasTitle {
    title: string;
    routerLinkTo: string;
}