import { useForm } from "react-hook-form";
import { Form } from "../components/form";
import { TextField } from "../components/text-input";
import { useAuth } from "../store/auth";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { Button } from "../components/button";
import { CheckUtils } from "../utils/check";

export default function LoginPage() {
  const { login } = useAuth();
  const form = useForm();
  const router = useRouter();

  async function handleSubmit({ email, password }: any) {
    try {
      await login({ email, password });
      const { status } = await CheckUtils.checkPlan();
      if (!status) return;
      router.push("/bot");
    } catch (err) {
      console.log("err", err);
      toast.error("Email/senha invalido!");
    }
  }

  return (
    <div className="flex h-screen  items-center justify-center">
      <Form
        form={form}
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-2 w-full bg-zinc-800 p-6 rounded-lg"
      >
        <TextField type="email" label="Email" name="email" />
        <TextField type="password" label="Senha" name="password" />
        <Button>Logar</Button>
      </Form>
    </div>
  );
}
