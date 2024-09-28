// TODO: Create a function that returns a license badge based on which license is passed in
function chooselicenseBadge(license) {
  let licenseBadge;
  if (license === 'MIT') {
    licenseBadge = `[![License: MIT]`;
  } else if (license === 'apache') {
    licenseBadge = `[![License]`;
  } else if (license === 'GNU') {
    licenseBadge = `[![License]`;
  } else if (license === 'unilicense') {
    licenseBadge = `[![License: Unlicense]`;
  } else {
    renderEmptyLicenseBadge(license);
  }
}
// If there is no license, return an empty string
function renderEmptyLicenseBadge(license) {
  licenseBadge = '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink; 
  if (license === 'MIT') {
    licenseLink = `(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if ( license === 'apache') {
    licenseLink = `(https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GNU') {
    licenseLink = `(https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (license === 'unilicense') {
    licenseLink = `(https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else {
    licenseLink = '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) =>
` ${chooselicenseBadge(license)}
  ${renderLicenseLink(license)}
`;
    
  


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection}
`;
}

export default generateMarkdown;
