import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: 'input[type="text"]' })
export class AutoCompleteDirective {
    @HostBinding('attr.autocomplete') protected autocomplete = 'one-time-code';
}
