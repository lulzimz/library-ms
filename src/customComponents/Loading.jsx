import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev + 20) % 100);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
};

export default Loading;
