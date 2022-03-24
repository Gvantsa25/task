import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import {Status} from './app.component';

@Directive({
  selector: '[appStatusColor]'
})
export class StatusColorDirective implements OnInit{

  constructor(
    private eleRef: ElementRef) { }
  @Input() status: string | undefined;
  @Input() statusChild: string | undefined;

  ngOnInit(): void {
    if (this.statusChild === Status.Active) {
      this.eleRef.nativeElement.style.background = 'rgb(74, 197, 74)';
    } else if (this.statusChild === Status.Deleted) {
      this.eleRef.nativeElement.style.background = 'rgb(207, 68, 68)';
    } else if (this.statusChild === Status.Inactive) {
      this.eleRef.nativeElement.style.background = 'rgb(123, 123, 158)';
    }

          if(this.status === Status.Active){
      this.eleRef.nativeElement.style.background = 'green';
      }else if(this.status === Status.Deleted){
            this.eleRef.nativeElement.style.background = 'red';
          } else if (this.status === Status.Inactive) {
            this.eleRef.nativeElement.style.background = 'blue';
      }
  }
}
