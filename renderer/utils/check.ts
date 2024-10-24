import { AuthApi } from "../../services/AuthApi";
import pkg from "../../package.json";
import { toast } from "sonner";

async function checkVersion() {
  try {
    const res = await AuthApi.checkVersion();
    let status = true;
    if (compareVersions(pkg.version, res.version) == "minor") {
      status = false;
    }
    return { status };
  } catch (err) {
    return { status: false };
  }
}

async function checkPlan() {
  let status;
  try {
    await AuthApi.checkPlan();
    status = true;
  } catch (err) {
    status = false;
    toast.error(
      "Parece que seu plano de assinatura chegou ao fim. Não se preocupe, você pode renová-lo agora para continuar aproveitando todos os benefícios."
    );
  }

  return { status };
}

export const CheckUtils = { checkVersion, checkPlan };

function compareVersions(v1, v2) {
  const parts1 = v1.split(".").map(Number);
  const parts2 = v2.split(".").map(Number);

  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const num1 = parts1[i] || 0;
    const num2 = parts2[i] || 0;

    if (num1 > num2) return "minor";
    if (num1 < num2) return "major";
  }

  return "equals";
}
