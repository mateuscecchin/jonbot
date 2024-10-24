import { KnownDevices } from "puppeteer";

const firstMasculineNames = [
  "Joao",
  "Pedro",
  "Lucas",
  "Gabriel",
  "Matheus",
  "Mateus",
  "Rafael",
  "Carlos",
  "Tiago",
  "Bruno",
  "Felipe",
  "Rodrigo",
  "Ricardo",
  "Guilherme",
  "Marcelo",
  "André",
  "Leandro",
  "Diego",
  "Paulo",
  "Igor",
  "Murilo",
  "Leonardo",
  "Victor",
  "Caio",
  "Eduardo",
  "Samuel",
  "Julio",
  "Ruan",
  "Vinicius",
  "Daniel",
  "Alex",
  "Luiz",
  "Alan",
  "Otávio",
  "Augusto",
  "Davi",
  "Henry",
  "Jorge",
  "Raul",
  "Fabio",
  "Renato",
  "Arthur",
  "Robson",
  "Thiago",
  "César",
  "Evandro",
  "Cristiano",
  "William",
  "Bruno",
  "Felipe",
  "Fabrício",
  "Douglas",
  "Adriano",
  "Marcos",
  "Éder",
  "Enzo",
  "Emerson",
  "Nicolas",
  "Antonio",
  "Francisco",
  "Jose",
  "Mauricio",
  "Elias",
  "Manoel",
];

const firstNameFeminine = [
  "Maria",
  "Ana",
  "Julia",
  "Fernanda",
  "Laura",
  "Carolina",
  "Isabela",
  "Amanda",
  "Patricia",
  "Luisa",
  "Renata",
  "Vanessa",
  "Mariana",
  "Aline",
  "Bruna",
  "Tatiane",
  "Camila",
  "Leticia",
  "Thais",
  "Gabriela",
  "Lorena",
  "Sofia",
  "Helena",
  "Isadora",
  "Claudia",
  "Viviane",
  "Alessandra",
  "Daniele",
  "Elaine",
  "Marcia",
  "Tatiana",
  "Priscila",
  "Elaine",
  "Bianca",
  "Fabiana",
  "Suzana",
  "Debora",
  "Raquel",
  "Samara",
  "Emanuelle",
  "Juliana",
  "Melissa",
  "Cristiane",
  "Elisabete",
  "Rosana",
  "Eliane",
  "Michele",
  "Simone",
  "Veronica",
  "Sandra",
  "Beatriz",
  "Adriana",
  "Diana",
  "Vera",
  "Luciana",
  "Elisa",
  "Clarissa",
  "Angela",
  "Flavia",
  "Livia",
  "Monique",
  "Sara",
  "Júlia",
  "Alice",
];

const midNameMasculine = [
  "Henrique",
  "Alisson",
  "Eduardo",
  "Roberto",
  "Gustavo",
  "Fernando",
  "Daniel",
  "Vinicius",
  "Augusto",
  "Bernardo",
  "Miguel",
  "Antônio",
  "Francisco",
  "Rui",
  "Alexandre",
  "Cesar",
  "Alfredo",
  "Otávio",
  "Joaquim",
  "Henrique",
  "Afonso",
  "Rodrigues",
  "Valentim",
  "Duarte",
  "Jorge",
  "Alberto",
  "Manuel",
  "Sebastião",
  "Gregório",
  "Teodoro",
  "Emanuel",
  "Murilo",
  "Filipe",
  "Adolfo",
  "Rogério",
  "Artur",
  "Ismael",
  "Sérgio",
  "Leopoldo",
  "Raul",
  "Josué",
  "Estevão",
  "Tobias",
  "Domingos",
  "Horácio",
  "Luciano",
  "Jonas",
  "Renan",
  "Robson",
  "César",
  "Élio",
  "Benjamin",
  "Xavier",
  "Olavo",
  "Válter",
  "Nuno",
];

const midNameFeminine = [
  "Cristina",
  "Carolina",
  "Fernanda",
  "Eduarda",
  "Beatriz",
  "Isabel",
  "Mariana",
  "Clara",
  "Sabrina",
  "Helena",
  "Vitoria",
  "Alice",
  "Sophia",
  "Francisca",
  "Regina",
  "Verônica",
  "Clarice",
  "Estela",
  "Irene",
  "Emanuela",
  "Elisabete",
  "Rosana",
  "Eliane",
  "Simone",
  "Veronica",
  "Sandra",
  "Beatriz",
  "Adriana",
  "Diana",
  "Vera",
  "Luciana",
  "Elisa",
  "Alessandra",
  "Viviane",
  "Raquel",
  "Tatiana",
  "Debora",
  "Samara",
  "Daniele",
  "Claudia",
  "Flavia",
  "Livia",
  "Michele",
  "Monique",
  "Sara",
  "Júlia",
  "Evelyn",
  "Carla",
  "Fabiana",
  "Sílvia",
  "Suzana",
  "Cristiane",
  "Marta",
  "Daniela",
  "Natália",
  "Luana",
];

const lastNames = [
  "Silva",
  "Cruz",
  "Santos",
  "Pereira",
  "Costa",
  "Oliveira",
  "Souza",
  "Melo",
  "Almeida",
  "Lima",
  "Gomes",
  "Ferreira",
  "Rocha",
  "Ribeiro",
  "Barbosa",
  "Martins",
  "Vieira",
  "Teixeira",
  "Araujo",
  "Nascimento",
  "Dias",
  "Ramos",
  "Monteiro",
  "Andrade",
  "Castro",
  "Sousa",
  "Macedo",
  "Cardoso",
  "Gonçalves",
  "Campos",
  "Freitas",
  "Miranda",
  "Moura",
  "Borges",
  "Cavalcante",
  "Reis",
  "Aguiar",
  "Nogueira",
  "Peixoto",
  "Braga",
  "Carvalho",
  "Coelho",
  "Tavares",
  "Neves",
  "Magalhães",
  "Porto",
  "Pacheco",
  "Queiroz",
  "Serra",
  "Machado",
  "Figueiredo",
  "Lopes",
  "Correia",
  "Cardoso",
  "Farias",
  "Duarte",
];

const androidList = [
  {
    name: "Pixel 6",
    userAgent:
      "Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Mobile Safari/537.36",
    viewport: {
      width: 412,
      height: 915,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false,
    },
  },
  {
    name: "Samsung Galaxy S21 Ultra",
    userAgent:
      "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.152 Mobile Safari/537.36",
    viewport: {
      width: 412,
      height: 915,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false,
    },
  },
  {
    name: "OnePlus 9 Pro",
    userAgent:
      "Mozilla/5.0 (Linux; Android 11; LE2123) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36",
    viewport: {
      width: 412,
      height: 915,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false,
    },
  },
  {
    name: "Xiaomi Mi 11 Ultra",
    userAgent:
      "Mozilla/5.0 (Linux; Android 11; M2102K1G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36",
    viewport: {
      width: 392,
      height: 851,
      deviceScaleFactor: 3.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false,
    },
  },
  {
    name: "Samsung Galaxy Z Fold 3",
    userAgent:
      "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-F926B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36",
    viewport: {
      width: 375,
      height: 812,
      deviceScaleFactor: 2.5,
      isMobile: true,
      hasTouch: true,
      isLandscape: false,
    },
  },
];

const iPhoneList = [
  KnownDevices["iPhone 11"],
  KnownDevices["iPhone 11 Pro"],
  KnownDevices["iPhone 12"],
  KnownDevices["iPhone 12 Pro"],
  KnownDevices["iPhone 13"],
  KnownDevices["iPhone 13 Pro"],
  KnownDevices["iPhone 14"],
  KnownDevices["iPhone 14 Pro"],
  KnownDevices["iPhone 15"],
  KnownDevices["iPhone 15 Pro"],
];

function genRandomPhone() {
  const operators = [
    { name: "Vivo", preffixs: ["911", "912", "913", "914"] },
    { name: "Claro", preffixs: ["915", "916", "917", "918"] },
    { name: "TIM", preffixs: ["919", "920", "921", "922"] },
    { name: "Oi", preffixs: ["923", "924", "925", "926"] },
  ];

  const ddd = Math.floor(Math.random() * (99 - 11 + 1)) + 11;

  const operator = operators[Math.floor(Math.random() * operators.length)];

  const preffix =
    operator.preffixs[Math.floor(Math.random() * operator.preffixs.length)];

  const numero = Math.floor(Math.random() * 9000) + 1000;

  const telefone = `${ddd}${preffix}${numero}`;

  return telefone;
}

function genName() {
  function randomName(lista) {
    const index = Math.floor(Math.random() * lista.length);
    return lista[index];
  }

  const masculineGenere = Math.random() < 0.5;
  const firstName = masculineGenere ? firstMasculineNames : firstNameFeminine;
  const midNames = masculineGenere ? midNameMasculine : midNameFeminine;

  const methodOfCreate = [
    () => `${randomName(firstName)} ${randomName(lastNames)}`,
    () =>
      `${randomName(firstName)} ${randomName(midNames)} ${randomName(
        lastNames
      )}`,
    () =>
      `${randomName(firstName)} ${randomName(lastNames)} ${randomName(
        lastNames
      )}`,
    () =>
      `${randomName(firstName)} ${randomName(midNames)} ${randomName(
        lastNames
      )} ${randomName(lastNames)}`,
    () => `${randomName(firstName)} ${randomName(midNames)}`,
  ];

  const method = randomName(methodOfCreate);

  return method();
}

function generateRandomUsername(fullName) {
  const nameParts = fullName.split(" ");

  const removeAccents = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const sanitizedParts = nameParts.map((part) =>
    removeAccents(part).toLowerCase()
  );

  const methods = [
    () => `${sanitizedParts[0].slice(0, 3)}${sanitizedParts[1] || ""}`, // Primeiro nome + Inicial do segundo nome
    () => `${sanitizedParts[0]}${sanitizedParts[1]?.slice(0, 3) || ""}`, // Primeiro nome + Iniciais do segundo nome
    () => `${sanitizedParts[0]}${sanitizedParts[1]?.slice(0, 4) || ""}`, // Primeiro nome + Iniciais do segundo nome
    () => `${sanitizedParts[0]}${sanitizedParts.slice(-1)}`, // Primeiro nome + Último sobrenome
    () =>
      `${sanitizedParts[0]}${sanitizedParts
        .slice(1)
        .map((part) => part.charAt(0))
        .join("")}`, // Primeiro nome + Iniciais dos sobrenomes
    () => `${sanitizedParts.slice(0, 2).join("")}`, // Primeiro e segundo nomes
    () => `${sanitizedParts.slice(0, -1).join("")}${sanitizedParts.slice(-1)}`, // Todos os nomes, com último nome em destaque
  ];

  // Escolhe um método aleatório
  const randomMethod = methods[Math.floor(Math.random() * methods.length)];

  return randomMethod();
}

export class RandomUtils {
  get name() {
    return genName();
  }
  get iphoneDevice() {
    return this.randomize(iPhoneList);
  }
  get androidDevice() {
    return this.randomize(androidList);
  }
  get device() {
    return this.randomize([...iPhoneList, ...androidList]);
  }

  get phone() {
    return genRandomPhone();
  }

  usernameByName(name: string) {
    return generateRandomUsername(name);
  }

  number(min: number, max: number) {
    return (
      Number(Math.floor(Math.random() * (Number(max - min) + 1))) + Number(min)
    );
  }

  randomize<T>(list: T[]) {
    return list[Math.floor(Math.random() * list.length)];
  }
}
