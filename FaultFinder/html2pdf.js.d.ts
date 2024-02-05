declare module 'html2pdf.js' {
    function html2pdf(): {
      from(source: HTMLElement | string): {
        set: any;
        toPdf(): void;
        save(): void;
      };
      set(options: object): void;
    };
  
    export default html2pdf;
  }