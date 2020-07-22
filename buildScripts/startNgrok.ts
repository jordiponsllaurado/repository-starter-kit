import * as ngrok from "ngrok";
import * as chalk from "chalk";

(async function () {
  const url = await ngrok.connect({ addr: 8080, host_header: 8080 });
  const apiUrl = ngrok.getUrl();

  console.log(chalk.green(`Shareable link: ${url}`));
  console.log(chalk.gray(`Nrog started, check ${apiUrl}\n`));
  console.log("Press Cntrl + ^C to stop the tunner");
})();
