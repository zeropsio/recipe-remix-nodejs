import { Card } from "./Card";
import { Code } from "./Code";

export function Steps() {
  const zeropsyaml = `project:
  name: zerops-remix

services:
  - hostname: remixnodejs
    type: nodejs@20
    buildFromGit: https://github.com/zeropsio/recipe-remix-nodejs
    ports:
      - port: 3000
    enableSubdomainAccess: true
    minContainers: 1`.trim();

  return (
    <div>
      <hr className="py-6 border-[#f4f4f4]" />
      <h2 className="text-center text-4xl font-semibold text-[#333]">
        Deploy to Zerops
      </h2>
      <div className="grid grid-cols md:grid-cols-2 font-light gap-5 md:gap-10 pt-4">
        <Card>
          <div className="max-w-lg space-y-10">
            <div>
              <h3 className="font-semibold text-lg">Step 1</h3>
              <p className="font-medium">
                <video width="full" className="rounded-xl mt-3" autoPlay loop>
                  <source src="import.mp4" type="video/mp4" />
                </video>
                <a href="https://zerops.io" target="_blank">
                  Create an account
                </a>{" "}
                and locate the import button as shown in the video.
              </p>
            </div>
          </div>
        </Card>
        <div className="flex flex-col">
          <Card>
            <div className="max-w-lg space-y-10">
              <div>
                <h3 className="font-semibold text-lg">Step 2</h3>
                <p className="font-medium">
                  Copy and paste the YAML code and confirm
                </p>
              </div>
            </div>
          </Card>
          <Code code={zeropsyaml} />
        </div>
      </div>
    </div>
  );
}
