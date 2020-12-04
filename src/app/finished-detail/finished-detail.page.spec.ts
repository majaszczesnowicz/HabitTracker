import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinishedDetailPage } from './finished-detail.page';

describe('FinishedDetailPage', () => {
  let component: FinishedDetailPage;
  let fixture: ComponentFixture<FinishedDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinishedDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
