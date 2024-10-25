import puppeteer, { Browser, Device, Page } from "puppeteer";
import crypto from "crypto";
import { RandomUtils } from "./random";
import { ConstantsUtils } from "./constants";

let browsers: IBrowser[] = [];

export interface IBrowser {
  id: string;
  browser: Browser;
  page: Page;
  proxy: string;
  device: Device;
}

interface ProxyConfig {
  host: string;
  port: string;
  username: string;
  password: string;
}

async function goTo(url: string) {
  Object.values(browsers).forEach(({ page }) => page.goto(url));
}

async function f5() {
  Object.values(browsers).forEach(({ page }) => page.reload());
}

const USERNAME_INDEX = 2;
const PASSWORD_INDEX = 3;

async function createBrowsers(proxys: string[], isMobile: boolean) {
  for (const proxy of proxys) {
    console.log("proxy", proxy);
    try {
      const proxyConfigList = proxy.split(":");
      const isProxyAuthenticate = proxyConfigList.length > 2;
      const [host, port] = proxyConfigList;

      const proxyConfig = { host, port } as ProxyConfig;

      if (isProxyAuthenticate) {
        proxyConfig["username"] = proxyConfigList[USERNAME_INDEX];
        proxyConfig["password"] = proxyConfigList[PASSWORD_INDEX];
      }

      const random = new RandomUtils();

      const args = ["--mute-audio"];

      if (ConstantsUtils.isProduction) {
        args.push(`--proxy-server=${proxyConfig.host}:${proxyConfig.port}`);
      }

      const browser = await puppeteer.launch({
        executablePath: ConstantsUtils.isProduction
          ? ConstantsUtils.chromePath
          : puppeteer.executablePath(),
        args,
        timeout: 1000000000,
        headless: false,
      });

      const [page] = await browser.pages();

      const device = random.device;
      if (isMobile) {
        await page.emulate({
          ...device,
          viewport: { ...device.viewport, width: 0, height: 0 },
        });
      }

      if (ConstantsUtils.isProduction && isProxyAuthenticate) {
        await page.authenticate({
          username: proxyConfig.username,
          password: proxyConfig.password,
        });
      }

      const id = crypto.randomUUID();

      browsers.push({ device, browser, id, page, proxy });
    } catch (err) {
      console.log("err", err);
    }
  }

  return browsers;
}

async function closeAll() {
  for (const browser of browsers) {
    await browser.browser.close();
  }
}

async function reset() {
  await closeAll();
  browsers = [];
}

export const BrowserUtils = {
  createBrowsers,
  browsers,
  closeAll,
  goTo,
  reset,
  f5,
};
