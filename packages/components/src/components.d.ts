import * as components from './index';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    OrButton: typeof components.Button;
    OrIcon: typeof components.Icon;
  }
}
export {};
