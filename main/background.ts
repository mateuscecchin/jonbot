import path from "path";
import { app, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import { BrowserUtils } from "../utils/browser";

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

ipcMain.handle("create", async (event, { proxy, isMobile, url, data }) => {
  const proxys = Array.from({ length: data.length }).map(() => proxy);
  const browsers = await BrowserUtils.createBrowsers(proxys, isMobile);

  let index = 0;
  for (const browser of browsers) {
    const { email, senha, cpf } = data[index];
    const page = browser.page;

    await page.goto(url);

    await page.waitForSelector(
      "[class='primary   shared-button-custom css-11gm6zt']"
    );
    await page.click("[class='primary   shared-button-custom css-11gm6zt']");

    await page.waitForSelector("[class='red sign-up']");
    await page.click("[class='red sign-up']");

    await page.waitForSelector("[name='username']");

    await page.type("[name='username']", String(email));
    await page.type("[name='password']", String(senha));
    await page.type("[name='cpf']", String(cpf));

    await page.click("[class='red submit   shared-button-custom css-11gm6zt']");

    index++;
  }
  return;
});
