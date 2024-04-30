import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone:true,
    name:'powerPipe'
})
export class PowerPipe implements PipeTransform{

    transform(value: any,pow: any):number {
        return Math.pow(value, pow);
    }

}