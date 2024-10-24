import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { XCircleIcon, XIcon } from "lucide-react";
import { CheckUtils } from "../utils/check";

export default function Home() {
  const [isOutdatedVersion, setIsOutdatedVersion] = useState(false);
  const router = useRouter();

  async function checkVersion() {
    const { status } = await CheckUtils.checkVersion();
    if (status) {
      return router.push("/login");
    }
    setIsOutdatedVersion(!status);
  }

  useEffect(() => {
    checkVersion();
  }, []);

  return (
    <>
      {isOutdatedVersion && (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <XCircleIcon size={46} className="text-red-700" />
          <p>Você esta usando uma versão antiga!</p>
          <p>Contate o suporte para baixar uma nova.</p>
        </div>
      )}
    </>
  );
}
