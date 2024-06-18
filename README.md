# Zerops x Remix - Node.js

![remix](https://github.com/zeropsio/recipe-shared-assets/blob/main/covers/cover-remix.png)

Remix is a powerful framework for building fast, dynamic web applications with server-side rendering. [Zerops](https://zerops.io) makes deploying and managing Remix applications effortless, offering capabilities like automatic scaling, optional integrations for caching and logging, and seamless setup for additional services. With Zerops, you can easily enhance your Remix app's performance and monitoring, letting you focus on development without worrying about infrastructure complexities.

## Deploy to Zerops

You can either click the deploy button to deploy directly on Zerops, or manually copy the [import yaml](https://github.com/zeropsio/recipe-remix-nodejs/blob/main/zerops-project-import.yml) to the import dialog in the Zerops app.

<a href="https://app.zerops.io/recipe/remix-nodejs">
    <img width="250" alt="Deploy on Zerops" src="https://github.com/zeropsio/recipe-shared-assets/blob/main/deploy-button/deploy-button.png">
</a>

<br/>
<br/>

## Recipe features
- A Node.js version of Remix v2 running on a load balanced **Zerops Node.js** service.

<br/>

## Production vs. development
This recipe is ready for production as is, and will scale horizontally by adding more containers in case of high traffic surges. If you want to achieve the highest baseline reliability and resiliace, start with at least two containers (add `minContainers: 2` in recipe YAML in the `app` service section, or change the minimum containers in "Automatic Scaling configuration" section of service detail).

Additionally for you might want to consider:
- using Zerops Redis service for caching
- setup [Winston](https://github.com/winstonjs/winston) for advanced and structured logging

<br/>

## Changes made over the default installation
If you want to modify your existing Remix app to efficiently run on Zerops, there are no changes needed in the codebase on top of the standard installation, just add [zerops.yml](https://github.com/zeropsio/recipe-remix-nodejs/blob/main/zerops.yml) to your repository.

<br/>
<br/>

Need help setting your project up? Join [Zerops Discord community](https://discord.com/invite/WDvCZ54).
