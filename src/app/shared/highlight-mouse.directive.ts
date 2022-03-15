import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  //HostListener vai ficar escutando evento no hospedeiro da diretiva
  @HostListener('mouseenter') onMouseOver(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  //Permite que a gente faça uma associação de uma classe ou atributo de um HTML para uma variável
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(
    //private elementRef: ElementRef, private renderer: Renderer2
    ) { }

}
