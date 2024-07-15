# Astro Starter Portfolio Template

This is a portfolio starter template built with Astro and Tailwind CSS. The portfolio configuration is managed through a `cv.json` file.

## Features

- **Astro Framework**: Utilizes Astro for optimal performance and simplified development.
- **Tailwind CSS**: Modern and responsive design using Tailwind CSS.
- **Easy Configuration**: All portfolio information is managed through a `cv.json` file.

## Requirements

- [Node.js](https://nodejs.org/) (v14.17.0 or higher)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/gonzalochale/astro-portfolio-template
    cd astro-portoflio-template
    ```

2. Install dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Run the development server:

    ```sh
    npm run dev
    # or
    yarn dev
    ```

4. Open your browser and navigate to `http://localhost:4321` to see your portfolio.

## Configuration

To customize your portfolio, edit the `cv.json` file located in the root directory. Here is an example of how the `cv.json` might look:

```json
{
    "basics": {
      "name": "I'm Gonzalo Chalé",
      "label": "Systems Engineer",
      "image": "https://github.com/gonzalochale.png",
      "summary": "This is a starter template web protfolio. It is designed to be a starting point to showcase your work and help you stand out from the crowd. Perfect for developers, designers, and other professionals.",
      "location": {
        "city": "Cancún",
        "countryCode": "MX",
        "country": "México"
      },
      "socials": [{
        "network": "X (Fomerly Twitter)",
        "label": "Connect on X",
        "username": "gonzalochale",
        "url": "https://x.com/gonzalochale"
      },
      {
        "network": "GitHub",
        "label": "GitHub",
        "username": "gonzalochale",
        "url": "https://github.com/gonzalochale"
      }]
    },
    "stack": [
      { "src": "/logos/next-light.svg", "alt": "Next JS WordMark" },
      { "src": "/logos/cisco.svg", "alt": "Cisco Logo" },
      { "src": "/logos/stripe.svg", "alt": "Stripe Logo" },
      { "src": "/logos/sanity.svg", "alt": "Sanity Logo" },
      { "src": "/logos/php.svg", "alt": "PHP Logo" },
      { "src": "/logos/webflow.svg", "alt": "WebFlow Logo" },
      { "src": "/logos/jquery.svg", "alt": "JQuery Logo" },
      { "src": "/logos/ngrok.svg", "alt": "NGrok Logo" }
    ],
    "projects": [{
      "name": "Create your React UI library",
      "imageUrl": "/assets/project.webp",
      "url": "https://ui-library-template.vercel.app/"
    },{
      "name": "Create your React UI library",
      "imageUrl": "/assets/project.webp",
      "url": "https://ui-library-template.vercel.app/"
    },{
      "name": "Create your React UI library",
      "imageUrl": "/assets/project.webp",
      "url": "https://ui-library-template.vercel.app/"
    }]
}
```

## Deployment

You can deploy the contents of the dist directory to any static hosting provider, such as Vercel, Netlify, or GitHub Pages.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, improvements, or new features.

Made with ❤️ by Gonzalo Chalé
