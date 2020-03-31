import { GluegunToolbox } from "gluegun";

// interface FooReturn extends GluegunToolbox {
//   foo: (message: any) => void;
// }

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox): void => {
  toolbox.foo = (): void => {
    toolbox.print.info("called foo extension");
  };

  // enable this if you want to read configuration in from
  // the current folder's package.json (in a "create-app" property),
  // create-app.config.json, etc.
  // toolbox.config = {
  //   ...toolbox.config,
  //   ...toolbox.config.loadConfig(process.cwd(), "create-app")
  // }
};
