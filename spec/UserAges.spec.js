import { UserAges } from './../src/UserAges.js';
import { mercury } from './../src/UserAges.js';
import { venus } from './../src/UserAges.js';
import { mars } from './../src/UserAges.js';
import { jupiter } from './../src/UserAges.js';
import { earth } from './../src/UserAges.js';

describe('UserAges', function () {
  let testAge;

  beforeEach(function () {
    testAge = new UserAges(12);
  });

  it('should return Mercury age equal to Earth age divided by 0.24', function () {
    expect(testAge.getAgeOn(mercury)).toEqual(50);
  });
  it('should return Venus age equal to Earth age divided by 0.62', function () {
    expect(testAge.getAgeOn(venus)).toEqual(19.35);
  });
  it('should return Mars age equal to Earth age divided by 1.88', function () {
    expect(testAge.getAgeOn(mars)).toEqual(6.38);
  });
  it('should return Jupiter age equal to Earth age divided by 11.86', function () {
    expect(testAge.getAgeOn(jupiter)).toEqual(1.01);
  });
  it('should return 66.69 years for years remaining on Earth', function () {
    let earthYearsLeft = testAge.getEarthYearsLeft();
    expect(earthYearsLeft).toEqual(66.69);
  })

  it('should return how many years past Earth life expectancy user has lived', function () {
    let oldUser = new UserAges(102);
    let earthYearsPast = oldUser.getEarthYearsLeft(oldUser.LifeExpectancy);
    expect(earthYearsPast).toEqual(23.31);
  })
  it('should return Mercury life expectancy', function () {
    // user enters an age expectancy in earth years
    testAge.LifeExpectancy = 85;
    expect(testAge.getLifeExpectancyOn(mercury)).toEqual(354.17);
  })
  it('should return Mars life expectancy', function () {
    testAge.LifeExpectancy = 80;
    let marsLife = testAge.getLifeExpectancyOn(mars);
    expect(marsLife).toEqual(42.55);
  })
  it('getLifeExpectancyOn for Earth should match LifeExpectancy property', function () {
    let testEarthLifeSpan = testAge.getLifeExpectancyOn(earth);
    expect(testEarthLifeSpan).toEqual(testAge.LifeExpectancy);
  })
  it('should return 277.88 expected Mercury years left', function () {
    let mercuryYearsLeft = testAge.getYearsLeftOnMercury();
    expect(mercuryYearsLeft).toEqual(277.88);
  })
  it('should return 107.57 expected Venus years left', function () {
    let venusYearsLeft = testAge.getYearsLeftOnVenus();
    expect(venusYearsLeft).toEqual(107.57);
  })
  it('should return 35.48 expected Mars years left', function () {
    let marsYearsLeft = testAge.getYearsLeftOnMars();
    expect(marsYearsLeft).toEqual(35.48);
  })
  it('should return 5.62 expected Jupiter years left', function () {
    let jupiterYearsLeft = testAge.getYearsLeftOnJupiter();
    expect(jupiterYearsLeft).toEqual(5.62);
  })
  it('superOld should return true if earth age set to 98', function () {
    testAge.EarthAge = 98;
    console.log(testAge.superOld());
    expect(testAge.superOld()).toBe(true);
  })
  it('superOld should return false if earth age set to 40', function () {
    testAge.EarthAge = 40;
    testAge.LifeExpectancy = 72;
    expect(testAge.superOld()).toBe(false);
  })
});