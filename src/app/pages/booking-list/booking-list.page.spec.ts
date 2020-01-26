import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingListPage } from './booking-list.page';

describe('BookingListPage', () => {
  let component: BookingListPage;
  let fixture: ComponentFixture<BookingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
