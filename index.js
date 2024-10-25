const puppeteer = require("puppeteer");

async function scrapePersonData() {
  // Inicia o navegador
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Acessa a página de geração de pessoas do 4devs
  await page.goto("https://www.4devs.com.br/gerador_de_pessoas");

  await page.select("#cep_estado", "MT");

  await new Promise((ok) => setInterval(ok, 500));

  // Clica no botão para gerar uma pessoa
  await page.click("#bt_gerar_pessoa");

  // Espera os dados aparecerem

  await new Promise((ok) => setInterval(ok, 1000));

  // Extrai os dados da pessoa gerada
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

  console.log(personData);

  // Fecha o navegador
}

scrapePersonData();
