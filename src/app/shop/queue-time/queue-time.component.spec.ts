import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QueueTimeComponent } from './queue-time.component';

describe('QueueTimeComponent', () => {
  let component: QueueTimeComponent;
  let fixture: ComponentFixture<QueueTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueTimeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QueueTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
