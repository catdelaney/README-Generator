# README Generator

## Description
README Generator is a command-line application designed to help with the creation of professional README.md files for GitHub projects. By using this tool, developers can quickly generate README files with essential sections like Description, Installation, Usage, License, Contributing, Tests, and Questions. The generator prompts users for details about their project, including the title, description, installation instructions, usage information, contribution guidelines, test instructions, and license choice and then it creates a README.md file from that with links to the developer’s GitHub profile and email address at the end. To use the generator, simply install Node.js and npm, then run the application using the prompt `node index.js`, follow the interactive prompts, and the README file will be generated.

## Walk-Through Video
[Video](https://www.loom.com/share/b2ccbbe1b6ed43f496e0812bb715c86b?sid=ddefe591-2b77-4a7d-b9ed-ae0ad4c0ffaf)

## User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## Links
Deployed Link: https://catdelaney.github.io/README-Generator/

GitHub Repo: https://github.com/catdelaney/README-Generator