// @ts-nocheck

import puppeteer from "puppeteer";
import { acronymusByRegion } from "../renderer/utils/constant";

export class Person {
  static async create({ region }) {
    try {
      console.log("acronymusByRegion[region]", acronymusByRegion[region]);
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto("https://www.4devs.com.br/gerador_de_pessoas");

      await page.select("#cep_estado", acronymusByRegion[region]);

      await new Promise((ok) => setInterval(ok, 1000));

      await page.click("#bt_gerar_pessoa");

      await new Promise((ok) => setInterval(ok, 1000));

      const personData = await page.evaluate(() => {
        const name = document.querySelector("#nome").innerText;
        const cpf = document.querySelector("#cpf").innerText;
        const rg = document.querySelector("#rg").innerText;
        const birthDate = document.querySelector("#data_nasc").innerText;
        const motherName = document.querySelector("#mae").innerText;
        const fatherName = document.querySelector("#pai").innerText;
        const gender = document.querySelector("#sexo").innerText;
        const cep = document.querySelector("#cep").innerText;
        const address = document.querySelector("#endereco").innerText;
        const city = document.querySelector("#cidade").innerText;
        const state = document.querySelector("#estado").innerText;
        const phone = document.querySelector("#celular").innerText;
        const email = document.querySelector("#email").innerText;

        return {
          name,
          cpf,
          rg,
          birthDate,
          motherName,
          fatherName,
          gender,
          cep,
          address,
          city,
          state,
          phone,
          email,
        };
      });

      await browser.close();

      return personData;
    } catch (err) {
      console.log("[ERROR AO BUSCAR ENDERECO]", err);
    }
  }
}
