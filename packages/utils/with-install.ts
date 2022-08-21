
import { Plugin } from 'vue';

export type SFCwithInstall<T> = T & Plugin;
export function withInstall<T>(comp:T){//不知类型用泛型
    (comp as SFCwithInstall<T>).install = function(app){
        const {name} = comp as unknown as {name:string}
        app.component(name,comp);//把组件注册成全局组件
    }
    return comp as SFCwithInstall<T> //未必知道返回的类型
}
