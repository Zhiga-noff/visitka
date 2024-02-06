export {};

declare global {
  interface Window {
    MSStream: boolean;
    yaContextCb: any;
    Ya: any;
    ym: any;
  }

  const Ya: any;
  const ym: any;

  interface IntersectionObserverEntry {
    readonly isVisible: boolean;
  }
}
