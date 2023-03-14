# Image Resizer - 1:1 Ratio

This is a simple image resizer that crops images to a 1:1 ratio by centering the image to make a square image using the package `sharp` for Node.js.

## Prerequisites

Before running the script, make sure you have the following installed:
- [Node.js](https://nodejs.org/en/)
- [Sharp package](https://github.com/lovell/sharp)

## Installation

### Linux
To install Node.js and Sharp package on Linux, follow these steps:
1. Open a terminal window.
2. Update the package list: 

    `apt update`

3. Install Node.js:

    `apt install nodejs`

4. Install npm (Node.js package manager):

    `apt install npm`

5. Install Sharp package:

    `npm install sharp`

### Mac
To install Node.js and Sharp package on Mac, follow these steps:
1. Install [Homebrew](https://brew.sh/) package manager, by running the following command in a terminal window:

    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

2. Install Node.js:

    `brew install node`

3. Install Sharp package:

    `npm install sharp`

## Usage
1. clone the repository
2. Open a terminal window and navigate to the repository.
3. Put all your un-resized images into the `imgs` folder.
4. Run the following command to resize the images:

    `node one-to-one.js`

5. The resized images will be saved in the `output` folder.

## Notes

This image resizer is currently only designed to resize images to a 1:1 ratio by cropping the image in the center to make a square image. 

This tool is particularly helpful for eBay listings or any type of listing that requires a square image, especially if your camera doesn't have a square image setting.
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details
