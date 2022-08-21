/// <reference types="vite/clinet" />


declare module  "*.vue"{
    import type { DefineComponent } from "vue";
    const component:DefineComponent<{},{},any>
    export default component;
}

import '.git'