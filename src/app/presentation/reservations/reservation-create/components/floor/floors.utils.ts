import { ReservationType } from '@shared/http/models/meta.model';
import { IMarkItem, IMarks } from '@base/map/map-mark/map-mark.model';
import { IWorkplace } from '@shared/http/models/database.model';

export function mapPlacesToMArks(places: any[], images: unknown[], type: ReservationType): IMarks {
  return places.map(place => mapPlaceToMark(place, images, type));
}

export function mapPlaceToMark(place: any, images: unknown[], type: ReservationType): IMarkItem {
  const { id, disabled, name, x, y, width, height }: IWorkplace = place;
  const mark: IMarkItem = {
    id,
    disabled,
    img: images[place.id],
    relativePlace: place,
    tooltip: name,
    coordinates: { x, y, size: place.width },
    size: { height, width }
  };

  if (type === 'appointment') {
    mark.logicType = 'Room';
    mark.coordinates.size = 120;
  }

  return mark;
}
