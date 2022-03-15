import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  //aplicado somente para as tag p
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { 
    //console.log(elementRef)
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow'; <- EVITE ESSE CÓDIGO

    //Usar o renderer2 <- Boas Práticas!
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
      )
  }

}
