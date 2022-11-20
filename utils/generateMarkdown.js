// render badge function assigns the styled badge url to the badge variable depending on user input

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

// render license link assigns license url depending on user input
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

// render license section takes badge and link functions and puts them together into a linked image badge
function renderLicenseSection(license) {
  let renderLicense = "";
  if (license === "None") {
    return renderLicense;
  } else {
    renderLicense = `<a href="${renderLicenseLink(license)}"><img src="${renderLicenseBadge(license)}"></a>`
  }
  return renderLicense;
};

// generate markdown pulls user responses into readme template
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseSection(data.license)}

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

Please refer to the license <a href="${renderLicenseLink(data.license)}">here</a>

****
## Contributing

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
