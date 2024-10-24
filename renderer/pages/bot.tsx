import React, { useState } from "react";
import { Button } from "../components/button";
import Papa from "papaparse";
import { TextField } from "../components/text-input";
import { Form } from "../components/form";
import { useForm } from "react-hook-form";
import { FileInput } from "../components/file-input";

export default function BotPage() {
  const [csvData, setCsvData] = useState([]);
  const form = useForm();

  function handleChangeFile(event) {
    const file = event.target.files[0];

    if (file) {
      Papa.parse(file, {
        header: true, // Define se a primeira linha do CSV contém cabeçalhos
        dynamicTyping: true, // Converte os dados para os tipos corretos automaticamente
        skipEmptyLines: true, // Ignora linhas vazias
        complete: (results) => {
          setCsvData(results.data); // Atualiza o estado com os dados lidos do CSV
        },
      });
    }
  }

  function handleSubmit({ proxy, url }: any) {
    window.ipc.create(true, csvData, url, proxy);
  }

  return (
    <Form
      form={form}
      onSubmit={handleSubmit}
      className="flex flex-col flex-1 gap-4 p-3"
    >
      <TextField name="proxy" label="Proxy" />
      <TextField name="url" label="Url" />
      <FileInput name="files" accept=".csv" onChange={handleChangeFile} />

      <Button>Criar contas</Button>
    </Form>
  );
}
