import { AbstractControl } from "@angular/forms";

export class MyValidators {
  // customerise validators
  static cannotContainSpace(control: AbstractControl) {
    if (/\s/.test(control.value)) return { cannotContainSpace: true };
    return null;
  }
}
