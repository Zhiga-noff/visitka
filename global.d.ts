export {};

declare global {
  interface Window {
    MSStream: boolean;
    yaContextCb: any;
    Playerjs: any;
    pjscnfgs: any;
    pljssglobal: any;
    Ya: any;
    ym: any;
  }

  const Ya: any;
  const ym: any;

  interface IntersectionObserverEntry {
    readonly isVisible: boolean;
  }
}
