import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material'

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule],
  declarations: [],
})
export class MaterialModule {}
