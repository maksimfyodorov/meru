import { ColorAlias } from '@src/theme/ts';
import { IStatusRendererOptions } from '@base/renderer/renderer.model';

export class StatusService {
  public mapColor(options: IStatusRendererOptions, value: any): string {
    const mappedColor: string = options.map[value].color;

    if (mappedColor && mappedColor.startsWith('#')) {
      return mappedColor;
    }

    return ColorAlias[mappedColor] || ColorAlias.default;
  }
}
