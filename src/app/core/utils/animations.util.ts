import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';

export const fadeInOutAnimation: any[] = [getFadeInOutAnimation()];

export function getFadeInOutAnimation(name: string = 'fadeInOut', inDelay: number = .35, outDelay: number = .35): AnimationTriggerMetadata {
  return trigger(name, [
    transition(':enter', [
        style({opacity: 0}),
        animate(
          `${inDelay}s ease-out`,
          style({opacity: 1})
        )
      ]
    ),
    transition(':leave', [
      style({opacity: 1}),
      animate(
        `${outDelay}s ease-out`,
        style({opacity: 0})
      )
    ]),
    state('in', style({
      opacity: 1
    })),
    state('out', style({
      opacity: 0
    })),
    transition('out => in', [
      animate(`${inDelay}s ease-out`)
    ]),
    transition('in => out', [
      animate(`${outDelay}s ease-out`)
    ]),
  ]);
}

