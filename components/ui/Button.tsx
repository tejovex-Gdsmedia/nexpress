import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-150 active:scale-[0.97] focus-visible:outline-sky disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-navy text-white hover:bg-sky hover:scale-[1.03]",
        secondary: "bg-white text-navy hover:bg-light-blue hover:scale-[1.03]",
        outline:
          "border border-white text-white bg-transparent hover:bg-white hover:text-navy hover:scale-[1.03]",
        ghost: "text-navy hover:bg-off-white",
        sky: "bg-sky text-white hover:bg-navy hover:scale-[1.03]",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-2.5 text-sm",
        lg: "px-8 py-4 text-base rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
    );
  }
);
Button.displayName = "Button";

export default Button;
export { buttonVariants };
