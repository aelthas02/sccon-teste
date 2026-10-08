import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[cepMask]',
  standalone: true
})
export class CepMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['\$event'])
  onInputChange(event: any) {
    const input = this.el.nativeElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 8) {
      value = value.substring(0, 8);
    }

    if (value.length > 5) {
      value = `${value.substring(0, 5)}-${value.substring(5)}`;
    }

    input.value = value;
  }
}