import { ChangeDetectorRef } from '@angular/core';

export function detectCdr(target: object): ChangeDetectorRef {
  return Object.values(target).find(property =>
    '_appRef' in property
  )
}
