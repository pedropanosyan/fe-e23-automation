# This repository contains end-to-end tests written in Playwright 

## Project Setup
Make sure you have the following installed:
Node.js

npm (Node.js package manager)

## Installing Dependencies
Clone the repository git clone URL

Navigate to the project directory

Install dependencies: <code>npm install</code>

## Folder Structure

page objects: Contains locators and methods organized by pages for easy maintenance and code reusability.

test-data: Holds the data used in tests in JSON format for easy data management and updates.

tests: Contains the test files written in Playwright.

# Challenge

End-2-End Automation Testing Challenge
For the End-2-End Automation testing challenge, you will automate test cases for the provided website below.

https://practice.automationtesting.in/

## Guidelines
### Design Pattern:
Page Object Model

**Page Object Files**
Each page or component of the application should be separated into its own file containing locators and functions for that page.
**Test Data Files**
It is a JSON file from which data is retrieved for the tests.
**Test Files**
Test files are separated by functionalities and sections of the app, not by page.
A test can consume page objects from different files.

### Test Structure:
You can create the test structure as you see fit, considering code readability and report readability. You can use the test.step function for this.

### Perks:

Configurations from the .config file will be considered to enhance the execution of your tests, reliability, coverage, and traceability.

## Test Cases:

The test cases are available at this link: https://practice.automationtesting.in/test-cases/

Automate a single test case for each section **HOME PAGE, MY ACCOUNT - LOGIN, MY ACCOUNT - REGISTRATION, SHOP, MY ACCOUNT)**

**TOTAL: 5** Automated tests should be in the suite.

The complexity level of the chosen tests will be taken into account.

## Resources

Playwright Documentation: https://playwright.dev/docs/intro

Page Object Model Tutorial: https://www.youtube.com/watch?v=IUjZQC2zGfg&ab_channel=SDET-QA

Learn more about playwright and automation : https://testautomationu.applitools.com/learningpaths.html?id=playwright-path
