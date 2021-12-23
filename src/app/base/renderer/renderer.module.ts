import { NgModule } from '@angular/core';
import { RendererComponent } from './renderer.component';
import { CoreModule } from '@core/core.module';
import { FormatterRendererComponent } from './components/formatter/formatter.component';
import { MapRendererComponent } from './components/map/map.component';
import { ActionRendererComponent } from './components/action/action.component';
import { ActionsRendererComponent } from './components/actions/actions.component';
import { ObjectRendererComponent } from './components/object/object.component';
import { StatusRendererComponent } from './components/status/status.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LinkRendererComponent } from './components/link/link.component';
import { RouterModule } from '@angular/router';
import { TemplateRendererComponent } from './components/template/template.component';

@NgModule({
  declarations: [
    RendererComponent,
    FormatterRendererComponent,
    MapRendererComponent,
    ObjectRendererComponent,
    ActionRendererComponent,
    ActionsRendererComponent,
    StatusRendererComponent,
    LinkRendererComponent,
    TemplateRendererComponent
  ],
  imports: [
    CoreModule.forChild(),
    NzButtonModule,
    NzIconModule,
    RouterModule
  ],
  exports: [ RendererComponent, StatusRendererComponent ]
})
export class RendererModule {
}
