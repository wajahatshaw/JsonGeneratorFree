import { cn } from "@/lib/utils";

interface QuantumPulseLoaderProps {
  className?: string;
}

export const QuantumPulseLoader = ({ className }: QuantumPulseLoaderProps) => {
  return (
    <div className={cn("generating-loader-wrapper", className)}>
      <div className="generating-loader-text">
        <span className="generating-loader-letter">G</span>
        <span className="generating-loader-letter">e</span>
        <span className="generating-loader-letter">n</span>
        <span className="generating-loader-letter">e</span>
        <span className="generating-loader-letter">r</span>
        <span className="generating-loader-letter">a</span>
        <span className="generating-loader-letter">t</span>
        <span className="generating-loader-letter">i</span>
        <span className="generating-loader-letter">n</span>
        <span className="generating-loader-letter">g</span>
      </div>
      <div className="generating-loader-bar"></div>
    </div>
  );
};
