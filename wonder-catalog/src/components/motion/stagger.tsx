import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delayStep?: number;
};

export function StaggerList({ children, className, delayStep = 60 }: Props) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {items.map((child, idx) => (
        <div
          key={idx}
          className="animate-fade-in-up"
          style={{
            animationDelay: `${idx * delayStep}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
