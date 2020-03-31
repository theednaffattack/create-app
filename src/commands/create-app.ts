import { GluegunCommand } from "gluegun";
import { GluegunAskResponse } from "gluegun/build/types/toolbox/prompt-types";
import { path } from "app-root-path";

interface SelectTypeProps {
  type: string;
  name: string;
  message: string;
  choices: string[];
}

type ProjectTypeChoices = "Typescript" | "Javascript";
type ServerOrClientChoices = "Front-end" | "Back-end";

interface ProjectTypeOpts extends Omit<SelectTypeProps, "choices"> {
  choices: ProjectTypeChoices[];
}
interface ServerOrClientOpts extends Omit<SelectTypeProps, "choices"> {
  choices: ServerOrClientChoices[];
}

// interface ProjectNameOpts extends Omit<SelectTypeProps, "choices"> {}

type ProjectNameOpts = Omit<SelectTypeProps, "choices">;

const command: GluegunCommand = {
  name: "create-app",
  run: async toolbox => {
    const { copyDir, print, prompt } = toolbox;

    print.info("Welcome to create-app CLI");

    const projectTypePrompt: ProjectTypeOpts = {
      type: "select",
      name: "projectType",
      message: "What type of project would you like to generate?",
      choices: ["Typescript", "Javascript"]
    };

    const serverOrClientPrompt: ServerOrClientOpts = {
      type: "select",
      name: "serverOrClient",
      message: "Do you want a API server or a Client server?",
      choices: ["Front-end", "Back-end"]
    };

    const projectNamePrompt: ProjectNameOpts = {
      type: "input",
      name: "projectName",
      message: "What is the project name?"
    };

    const questions = [
      projectTypePrompt,
      serverOrClientPrompt,
      projectNamePrompt
    ];

    const {
      projectType,
      projectName,
      serverOrClient
    }: GluegunAskResponse = await prompt.ask(questions);

    const highlightProjectType =
      projectType === "Typescript" ? "blue" : "green";

    const highlightServerOrClient =
      serverOrClient === "Back-end" ? "blue" : "green";

    const tsGraphqlServerTemplate = `${path}/node_modules/create-app/src/scaffolds/typescript/back-end/ts-graphql`;
    const tsNextJs9ApolloClientTemplate = `${path}/node_modules/create-app/src/scaffolds/typescript/front-end/ts-nextJs_9-apollo`;

    const jsGraphqlServerTemplate = `${path}/node_modules/create-app/src/scaffolds/javascript/back-end/js-graphql`;
    const jsNextJs9ApolloClientTemplate = `${path}/node_modules/create-app/src/scaffolds/javascript/front-end/js-nextJs_9-apollo`;

    const tsTemplatePath =
      serverOrClient === "Back-end"
        ? tsGraphqlServerTemplate
        : tsNextJs9ApolloClientTemplate;

    const jsTemplatePath =
      serverOrClient === "Back-end"
        ? jsGraphqlServerTemplate
        : jsNextJs9ApolloClientTemplate;

    print.info(
      `\nGreat. Let's get started with a new ${print.colors[
        highlightProjectType
      ](projectType)}, ${print.colors[highlightServerOrClient](
        serverOrClient
      )} project.\n`
    );

    // The "copyDir" function below will need to take a template path...
    // based on projectType & serverOrClient. Ex: copyDir(templatePath, projectName)
    if (projectType === "Typescript" && projectName) {
      copyDir({ templatePath: tsTemplatePath, projectName });
      return;
    }

    if (projectType === "Javascript" && projectName) {
      copyDir({ templatePath: jsTemplatePath, projectName });
      return;
    } else {
      print.info(
        "Error! A selection should've been made. Impossible state error"
      );
    }
    // let serverOrClient: GluegunAskResponse;

    // if (projectType && projectType.projectType === "Typescript") {
    //   serverOrClient = await prompt.ask(serverOrClientPrompt);
    // }
  }
};

module.exports = command;
