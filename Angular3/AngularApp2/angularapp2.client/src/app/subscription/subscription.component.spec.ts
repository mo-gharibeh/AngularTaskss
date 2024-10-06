import { ComponentFixture, TestBed } from '@angular/core/testing';
import { subscriptionComponent } from './subscription.component';


describe('SubscriptionComponent', () => {
  let component: subscriptionComponent;
  let fixture: ComponentFixture<subscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [subscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(subscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
