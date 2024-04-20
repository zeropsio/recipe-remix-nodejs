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
      <div className="grid grid-cols md:grid-cols-2 font-light gap-10 pt-4">
        <Card>
          <div className="max-w-lg space-y-10">
            <div>
              <h3 className="font-semibold text-lg">Step 1</h3>
              <p className="font-medium">
                Open{" "}
                <a
                  href="https://app.zerops.io/dashboard/projects"
                  target="_blank"
                >
                  Zerops Dashboard
                </a>{" "}
                and locate the <strong>Import Project</strong> button on the sidebar. Not a
                user?{" "}
                <a href="https://zerops.io" target="_blank">
                  Register now
                </a>
              </p>
            </div>
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
  );
}
