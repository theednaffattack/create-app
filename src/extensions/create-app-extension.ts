import { GluegunToolbox } from "gluegun";
// import { path } from "app-root-path";
// .resolve('/lib/my-module.js');
// import { getInstalledPath } from "get-installed-path";

interface TBoxCopyDirProps {
  templatePath: string;
  projectName: string;
}

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox): void => {
  toolbox.copyDir = async ({
    templatePath,
    projectName: name
  }: TBoxCopyDirProps): Promise<void> => {
    const currentWorkingDirectory = toolbox.filesystem.cwd();

    // const tsGraphqlServerTemplate = `${path}/node_modules/create-app/src/scaffolds/typescript/back-end/ts-graphql`;

    // const existsTsGraphqlServerTemplate = toolbox.filesystem.exists(
    //   tsGraphqlServerTemplate
    // );

    toolbox.print.info(`Template scaffold directory found...`);

    toolbox.filesystem.copy(templatePath, `${currentWorkingDirectory}/${name}`);
    toolbox.print.info(
      `New project, ${toolbox.print.colors["green"](
        name
      )} created at ${currentWorkingDirectory}/${name}.`
    );
  };
};
