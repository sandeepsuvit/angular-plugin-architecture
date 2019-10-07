import { getGreeting } from '../support/app.po';

describe('tce-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to tce-app!');
  });
});
