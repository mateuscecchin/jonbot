import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";

const handler = {
  send(channel: string, value: unknown) {
    ipcRenderer.send(channel, value);
  },
  on(channel: string, callback: (...args: unknown[]) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      callback(...args);
    ipcRenderer.on(channel, subscription);

    return () => {
      ipcRenderer.removeListener(channel, subscription);
    };
  },
  create(
    isMobile: boolean,
    data: { username: string; password: string; cpf: string }[],
    url: string,
    region: string
  ) {
    ipcRenderer.invoke("create", { isMobile, data, url, region });
  },
  reset() {
    ipcRenderer.invoke("reset");
  },
  f5() {
    ipcRenderer.invoke("f5");
  },
  goTo(url) {
    ipcRenderer.invoke("goTo", url);
  },
};

contextBridge.exposeInMainWorld("ipc", handler);

export type IpcHandler = typeof handler;
