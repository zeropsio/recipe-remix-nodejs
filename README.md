# Zerops x Remix - Nodejs

![Header Image](header.png)

A Node.js Remix app example for [Zerops](https://zerops.io).

## Deploy to Zerops

You can either click the deploy button to deploy directly on Zerops, or manually copy the [import yaml](https://github.com/zeropsio/recipe-remix-nodejs/blob/main/zerops-project-import.yml) to the import dialog in the Zerops app.

```yaml
project:
  name: zerops-remix

services:
  - hostname: remixnodejs
    type: nodejs@20
    buildFromGit: https://github.com/zeropsio/recipe-remix-nodejs
    ports:
      - port: 3000
        httpSupport: true
    enableSubdomainAccess: true
    minContainers: 1
```

Join [Zerops Discord community](https://discord.com/invite/WDvCZ54).
