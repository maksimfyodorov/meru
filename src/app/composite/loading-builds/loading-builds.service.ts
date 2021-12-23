import { Injectable } from '@angular/core';
import { UserOfficesService } from '@src/app/core/services/user-offices.service';
import { Observable } from 'rxjs';
import { ImageBlobService } from '@shared/images/services/image-blob.service';

@Injectable()
export class LoadingBuildsService {
  constructor(
    private $images: ImageBlobService,
    private $userOffices: UserOfficesService
  ) {}

  get getBuilding(): Observable<any> {
    return this.$userOffices.getMyOrderedFloors();
  }
  getBuildingImageBlob(url: string): Observable<any> {
    return this.$images.getImageBlob(url);
  }
}
