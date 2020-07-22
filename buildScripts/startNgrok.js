const ngrok = require("ngrok");
var chalk = require("chalk");

(async function () {
  const url = await ngrok.connect(3000);
  const apiUrl = ngrok.getUrl();

  console.log(chalk.green(`Shareable link: ${url}`));
  console.log(chalk.gray(`Nrog started, check ${apiUrl}\n`));
  console.log("Press Cntrl + ^C to stop the tunner");
})();
