import React from "react";
import { cn } from "@/lib/utils";

const BubbleBackground = ({ className, ...props }) => {
  return (
    <div className={cn("fixed inset-0 overflow-hidden pointer-events-none", className)} {...props}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full opacity-20 animate-pulse",
              i % 4 === 0 && "bg-gradient-to-br from-blue-200 to-blue-400",
              i % 4 === 1 && "bg-gradient-to-br from-indigo-200 to-indigo-400", 
              i % 4 === 2 && "bg-gradient-to-br from-purple-200 to-purple-400",
              i % 4 === 3 && "bg-gradient-to-br from-pink-200 to-pink-400"
            )}
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { BubbleBackground };