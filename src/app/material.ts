import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatMenuModule, MatCheckboxModule,MatToolbarModule,MatSidenavModule,MatStepperModule,
  MatIconModule,MatListModule,MatInputModule,MatCardModule,MatTabsModule,MatSnackBarModule,
  MatExpansionModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatSortModule,
  MatRadioModule,MatSelectModule,MatPaginatorModule,MatTableModule, MatGridListModule,MatDialogModule,} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule,MatToolbarModule,MatSidenavModule,MatSortModule,
    MatIconModule,MatListModule,MatInputModule,MatCardModule,MatTabsModule,MatSnackBarModule,
    MatExpansionModule,FlexLayoutModule,LayoutModule,MatFormFieldModule,MatDatepickerModule,MatDialogModule,
    MatNativeDateModule,MatRadioModule,MatSelectModule,MatPaginatorModule,MatTableModule,MatStepperModule,
    MatGridListModule,MatMenuModule
  ],
  exports:[ MatButtonModule, MatCheckboxModule,MatToolbarModule,MatSidenavModule,MatSortModule,
    MatIconModule,MatListModule,MatInputModule,MatCardModule,MatTabsModule,MatSnackBarModule,
    MatExpansionModule,FlexLayoutModule,LayoutModule, MatFormFieldModule,MatDatepickerModule,MatDialogModule,
    MatNativeDateModule,MatRadioModule,MatSelectModule,MatPaginatorModule,MatTableModule,MatStepperModule,
    MatGridListModule,MatMenuModule]
})
export class MaterialModule { }