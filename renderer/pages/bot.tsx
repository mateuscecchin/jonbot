import React, { useState } from "react";
import { Button } from "../components/button";
import Papa from "papaparse";
import { TextField } from "../components/text-input";
import { Form } from "../components/form";
import { useForm } from "react-hook-form";
import { FileInput } from "../components/file-input";
import { SelectField } from "../components/select-field";
import { regions } from "../utils/constant";
import { FormDescription, FormLabel } from "../components/form-shadcn";
import { ArrowLeft, PlayIcon, PlusIcon, RotateCcwIcon } from "lucide-react";
import DownloadCSVButton from "../components/download-model";
import { CheckUtils } from "../utils/check";

const regionsFormatted = regions.map((region, i) => ({
  id: i,
  name: region,
  description: region,
}));

export default function BotPage() {
  const [csvData, setCsvData] = useState([]);
  const [url, setUrl] = useState("");
  const form = useForm();

  function handleChangeFile(event) {
    const file = event.target.files[0];

    if (file) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => {
          setCsvData(results.data);
        },
      });
    }
  }

  async function handleSubmit({ url, region }: any) {
    const { status } = await CheckUtils.checkPlan();
    if (!status) return;
    setUrl(url);
    window.ipc.create(true, csvData, url, region);
  }

  async function f5() {
    const { status } = await CheckUtils.checkPlan();
    if (!status) return;
    window.ipc.f5();
  }

  async function restart() {
    const { status } = await CheckUtils.checkPlan();
    if (!status) return;
    window.ipc.reset();
  }

  async function goToHome() {
    const { status } = await CheckUtils.checkPlan();
    if (!status || !url) return;
    window.ipc.goTo(url);
  }

  return (
    <Form form={form} onSubmit={handleSubmit} className="flex flex-1 gap-4 p-3">
      <section className="flex flex-1 flex-col gap-2">
        <h1 className="text-2xl font-semibold mb-4">Menu de ações</h1>
        <Button className="w-full gap-2">
          <PlayIcon size={16} /> Criar contas
        </Button>
        <Button className="w-full gap-2" variant="secondary" onClick={f5}>
          <RotateCcwIcon size={20} /> Atualizar paginas
        </Button>
        <Button
          className="w-full gap-2"
          variant="secondary"
          onClick={() => goToHome()}
        >
          <ArrowLeft size={20} /> Voltar para tela inicial
        </Button>
        <Button
          className="w-full gap-2"
          variant="destructive"
          onClick={restart}
        >
          <RotateCcwIcon size={20} /> Reiniciar (fechar e abrir o sistema)
        </Button>
      </section>
      <div className="w-px bg-zinc-800" />
      <section className="flex flex-1 flex-col gap-2">
        <h1 className="text-2xl font-semibold mb-4">Menu de configuração</h1>
        <div className="flex gap-2">
          <TextField name="url" label="Url 🎰" className="w-full" />
          <div className="w-full">
            <SelectField
              name="region"
              label="Estado 🌎"
              data={regionsFormatted}
            />
          </div>
        </div>
        <FormLabel>Planilha de contas 🎲</FormLabel>
        <FileInput name="files" accept=".csv" onChange={handleChangeFile} />
        <FormDescription>
          A quantidade de contas que voce adicionar na planilha, sera a
          quantidade de telas aberta
        </FormDescription>
        <DownloadCSVButton />
      </section>
    </Form>
  );
}
