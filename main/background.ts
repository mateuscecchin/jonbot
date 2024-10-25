import path from "path";
import { app, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import { BrowserUtils } from "../utils/browser";
import { Person } from "../services/PersonGenerator";
import { Page } from "puppeteer";

const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isProd) {
    await mainWindow.loadURL("app://./home");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.on("message", async (event, arg) => {
  event.reply("message", `${arg} World!`);
});

ipcMain.handle("create", async (event, { isMobile, url, data, region }) => {
  const proxys = data.map((item) => item.proxy);
  const browsers = await BrowserUtils.createBrowsers(proxys, isMobile);

  await Promise.all(
    browsers.map(async (browser, index) => {
      const page = browser.page;
      await page.goto(url);

      await page.waitForSelector(
        "[class='primary   shared-button-custom css-11gm6zt']"
      );
      await page.click("[class='primary   shared-button-custom css-11gm6zt']");

      const { email, senha, cpf, nome } = data[index];
      const [firstName] = nome.split(" ");

      await page.waitForSelector("[class='red sign-up']");
      await page.click("[class='red sign-up']");

      await page.waitForSelector("[name='username']");

      await page.type("[name='username']", String(email));
      await page.type("[name='password']", String(senha));
      await page.type("[name='cpf']", String(cpf));

      await page.click(
        "[class='red submit   shared-button-custom css-11gm6zt']"
      );

      await page.waitForNavigation();

      await page.goto("https://jonbet.com/pt/account/profile/personal");

      await page.waitForSelector(
        "[class='primary   shared-button-custom css-11gm6zt']"
      );

      await page.click("[class='primary   shared-button-custom css-11gm6zt']");

      const { address, city, cep } = await Person.create({ region });

      const [
        firstNameInput,
        lastNameInput,
        _,
        addressInput,
        cityInput,
        cepInput,
      ] = await page.$$("input");

      await firstNameInput.type(firstName);
      await lastNameInput.type(nome.replace(firstName, ""));
      await addressInput.type(address);
      await cityInput.type(city);
      await cepInput.type(cep);

      await page.evaluate((region) => {
        (document.querySelector('[data-testid="Brazil"]') as any).click();
        (document.querySelector(`[data-testid="${region}"]`) as any).click();
      }, region);

      await page.click('[data-testid="personal-info-save-button"]');
      return;
    })
  );

  return;
});

ipcMain.handle("reset", () => {
  app.exit();
  app.relaunch();
});

ipcMain.handle("f5", () => {
  BrowserUtils.f5();
});

ipcMain.handle("goTo", (event, url) => {
  BrowserUtils.goTo(url);
});

async function logIn(page: Page, username, password) {
  await page.click(".link");

  await new Promise((ok) => setInterval(ok, 1000));

  await page.type("[name='username']", username);
  await page.type("[name='password']", password);

  await page.click("[class='red submit   shared-button-custom css-11gm6zt']");

  await page.waitForNavigation();
}
