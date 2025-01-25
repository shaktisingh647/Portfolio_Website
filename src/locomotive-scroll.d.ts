// filepath: /c:/Users/PRIYA SINGH/OneDrive/Desktop/Portfolio_web/Portfolio-Website/src/locomotive-scroll.d.ts
declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el: Element | null;
    smooth: boolean;
    [key: string]: any;
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    on(event: string, callback: Function): void;
    update(): void;
    destroy(): void;
    scrollTo(target: string | Element, options?: any): void;
  }
}