// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `# ${answers.Title}

## Description
${answers.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.Installation}

## Usage
${answers.Usage}

## Contributing
${answers.Contributing}

## Tests
${answers.Tests}

## License
${answers.License}

## Questions
For any questions, please contact:
GitHub: [@${answers.GitHub}](https://github.com/${answers.GitHub})
Email: ${answers['E-mail']}
`;
}

module.exports = generateMarkdown;
