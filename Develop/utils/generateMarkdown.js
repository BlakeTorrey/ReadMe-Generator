// TODO: Create a function that returns a license badge based on which license is passed in
function chooselicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'apache') {
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'unilicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else {
   return renderEmptyLicenseBadge();
  };
}
// If there is no license, return an empty string
function renderEmptyLicenseBadge() {
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`;
  } else if ( license === 'apache') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GNU') {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'unilicense') {
    return `(http://unlicense.org/)`;
  } else {
    return '';
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license) {
return `## License 

This application is covered under the following license,
follow the link for more details.

${chooselicenseBadge(license)}
${renderLicenseLink(license)}
`

}
  


// TODO: Create a function to generate markdown for README
function generateMarkdown(title, license) {
  return `# ${title}

${renderLicenseSection(license)} 

`;
}


export default generateMarkdown;
