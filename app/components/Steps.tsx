import { Code } from "./Code";

export function Steps() {
    const importyaml = `project:
  name: recipe-remix
  tags:
    - zerops-recipe

services:
  - hostname: remixnodejs
    type: nodejs@20
    enableSubdomainAccess: true
    buildFromGit: https://github.com/nermalcat69/recipe-remix-nodejs`.trim();
  const zeropsyaml = `zerops:
  - setup: remixnodejs
    build:
      base: nodejs@20
      buildCommands:
        - pnpm i
        - pnpm run build
      deployFiles:
        - build
        - server.js
        - package.json
        - node_modules
      cache:
        - node_modules
        - pnpm-lock.yaml
    run:
      base: nodejs@20
      ports:
        - port: 3000
          httpSupport: true
      start: pnpm start`.trim();

  return (
    <div>
      <hr className="py-6 border-[#f4f4f4]" />
      <div className="flex flex-col justify-center">
      <h2 className="text-4xl font-semibold text-[#333] text-center py-10">
        Deploy to Zerops with a Single Click
      </h2>
        <a className="badge flex justify-center hover:-translate-y-1 hover:duration-300 pb-5" href="https://app.zerops.io/recipe/remix" target="_blank">
          <img width="300px" draggable="false" src="https://private-user-images.githubusercontent.com/1303561/335229072-21cf77dd-cded-4e41-8e76-24540a809ccc.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgwMzk1MDAsIm5iZiI6MTcxODAzOTIwMCwicGF0aCI6Ii8xMzAzNTYxLzMzNTIyOTA3Mi0yMWNmNzdkZC1jZGVkLTRlNDEtOGU3Ni0yNDU0MGE4MDljY2MucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDYxMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA2MTBUMTcwNjQwWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9Y2UyMzQ1NmNhNWM1ZTQxYTc5ODhkNDRlMzAwZTJiYWIyZDdkOTM1NDZhNDVjZmRmNTRmYWY3OGExNzVlNTRmNyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.iwgbhkF2hoJaZQ2IbU8OQvCn4VRkML-0GeqraEbRY18" alt="deploy on zerops with one click badge" />
        </a>
      <div className="flex justify-center pb-5">
        <svg height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20M12 20L8 16M12 20L16 16" stroke="#F0F0F0" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </div>
        <p className="max-w-lg text-center mx-auto">Deploying will import the following structure and use following instructions to build and deploy </p>
      </div>
      <div className="grid grid-cols md:grid-cols-2 font-light gap-5 md:gap-10 pt-4">
        <div className="flex flex-col">
          <Code file="import-project.yml" code={importyaml} />
        </div>
        <div className="flex flex-col">
          <Code file="zerops.yml" code={zeropsyaml} />
        </div>
      </div>
    </div>
  );
}
