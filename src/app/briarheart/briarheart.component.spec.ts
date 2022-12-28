import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriarheartComponent } from './briarheart.component';

describe('BriarheartComponent', () => {
  let component: BriarheartComponent;
  let fixture: ComponentFixture<BriarheartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriarheartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriarheartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
