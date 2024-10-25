import React from "react";
import { Button } from "./button";
import { DownloadIcon } from "lucide-react";

const DownloadCSVButton = () => {
  const headers = ["email", "senha", "cpf", "nome", "proxy"];

  const convertToCSV = () => {
    return headers.join(",");
  };

  const downloadCSV = () => {
    const csvData = convertToCSV();
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.href = url;
    link.setAttribute("download", "modelo.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button variant="secondary" onClick={downloadCSV} className="flex gap-2">
      <DownloadIcon size={16} /> Clique para baixar o modelo de importação
    </Button>
  );
};

export default DownloadCSVButton;
