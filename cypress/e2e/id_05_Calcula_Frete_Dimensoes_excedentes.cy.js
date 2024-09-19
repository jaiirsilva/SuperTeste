/// <reference types="cypress" />

import loc from '../support/locators'
import info from '../support/variables'

describe('Calculating shipping with excess dimensions', () => {

  beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.viewport(1366, 768)
  });

  it('Access homepage', () => {
    cy.visit('https://web.superfrete.com/')
    cy.wait(10000)
    cy.screenshot()
  });

  it('Insert Cep Origin', () => {
    cy.get(loc.CEPS.CEP_ORIGIN).type(info.lOCATION.CEP_ORIGIN)
  });

  it('Insert Height Package', () => {
    cy.get(loc.PACKAGE.PACKAGE_WEIGHT_LIST).click()
    cy.get(loc.PACKAGE.PACKAGE_WEIGHT).click()
  });

  it('Insert dimensions', () => {
    cy.get(loc.DIMENSIONS.HEIGHT).type(info.PACKAGE_EXCESS_DIMENSIONS.HEIGHT)
    cy.get(loc.DIMENSIONS.WIDTH).type(info.PACKAGE_EXCESS_DIMENSIONS.WIDTH)
    cy.get(loc.DIMENSIONS.LENGTH).type(info.PACKAGE_EXCESS_DIMENSIONS.LENGTH)
  });

  it('Insert Cep Destination', () => {
    cy.get(loc.CEPS.CEP_DESTIATION).type(info.lOCATION.CEP_DESTIATION)
  });

  it('Calculate', () => {
    cy.screenshot()
    cy.get(loc.BUTTONS.BUTTON_CALCULATE).click()
  });

  it('Validate excess package', () => {
    cy.get(loc.VALIDATIONS.EXCESS_PACKAGE).should('contain', info.PACKAGE_EXCESS_DIMENSIONS.TEXT_EXCESS)
    cy.screenshot()
  });
})
