// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var license = "MIT";

function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case "MIT":
      badge =
        "https://img.shields.io/badge/license-MIT-blue?style=for-the-badge";
      break;
    case "Apache 2.0":
      badge =
        "https://img.shields.io/badge/license-Apache%202.0-blue?style=for-the-badge";
      break;
    case "GPL 2.0":
      badge =
        "https://img.shields.io/badge/license-GNU%20General%20Public-blue?style=for-the-badge";
      break;
    case "MPL 2.0":
      badge =
        "https://img.shields.io/badge/license-Mozilla%20Public%202.0-blue?style=for-the-badge";
      break;
    case "BSD 3-Clause":
      badge =
        "https://img.shields.io/badge/license-BSD%203--Clause-blue?style=for-the-badge";
      break;
    case "BSD 2-Clause":
      badge =
        "https://img.shields.io/badge/license-BSD%202--Clause-blue?style=for-the-badge";
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  switch (license) {
    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;
    case "Apache 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL 2.0":
      link = "https://opensource.org/licenses/GPL-2.0";
      break;
    case "MPL 2.0":
      link = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "BSD 3-Clause":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "BSD 2-Clause":
      link = "https://opensource.org/licenses/BSD-2-Clause";
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let renderLicense = "";
  if (license === "None") {
    return renderLicense;
  } else {
    renderLicense = `<a href="${renderLicenseLink(license)}"><img src="${renderLicenseBadge(license)}"></a>`
  }
  return renderLicense;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

## Description

${data.description}
****

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

****
## Installation

${data.installation}

****
## Usage

${data.usage}

****
## License

${renderLicenseSection(data.license)}

****
## How To Contribute

${data.contributing}

****
## Tests

${data.tests}

****
## Questions

If you have any questions regarding this project, please email me <a href="mailto:${
    data.email
  }">here!</a>
Visit my <a href="https://www.github.com/${data.github}">Github profile!</a>

`;
}

module.exports = generateMarkdown;
