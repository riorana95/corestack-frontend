// describe to start testing expected aurg 1st is component export name, 
// 2nd arrow funtion
// it - indivdual test (take example for each test case will create it)
import { UnitTestPractice } from './unit-test-practice'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { vi } from 'vitest';

describe('UnitTestPractice',()=>{
  let component : UnitTestPractice;
  let fixture : ComponentFixture<UnitTestPractice>;
  // check instance of the component
  // let service: UnitTestPractice;
  // beforeEach(()=>{
  //   service = new UnitTestPractice();
  // })

  beforeEach(async()=>{
    await TestBed.configureTestingModule({
      imports : [UnitTestPractice],
      providers : []
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTestPractice);
    component = fixture.componentInstance;

    // fixture.detectChanges();

  })

  it('should create UnitTestPractice',()=>{
    expect(component).toBeTruthy();
  });

  it('should emit data', ()=> {
    vi.spyOn(component.ChildToParent, "emit");
    component.ontrackURL();
    expect(component.ChildToParent, "emit").toHaveBeenCalled();
  })




  afterEach(()=>{

  })

  afterAll(()=>{

  })

  beforeAll(()=>{

  })

  // it('compponent should be created',()=>{
  //   expect(service).toBeTruthy();
  // })


  // // test add fun
  // it("to check correct addition" , ()=>{
  //   // write code to test
  //   const result = service.add(10,30);
  //   expect(result).toEqual(401);
  // })

  // it("to check correct sub",()=>{
  //   const resultSub = service.sub(30,20);
  //   expect(resultSub).toEqual(20);
  // })

  //   it("to check correct mul",()=>{
  //   const resultSub = service.mlt(30,20);
  //   expect(resultSub).toEqual(20);
  // })

  //   it("to check correct sub",()=>{
  //   expect(()=>service.divi(30,0)).toThrowError('Cannot divide by zero')
  // })
})
