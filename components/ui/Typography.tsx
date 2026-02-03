import { Text, type TextProps } from "react-native";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "bodySmall"
  | "label"
  | "caption";

type FontWeight = "normal" | "medium" | "semibold" | "bold" | "black";

interface TypographyProps extends TextProps {
  variant?: Variant;
  weight?: FontWeight;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  body: "text-base",
  bodySmall: "text-sm",
  label: "text-xs",
  caption: "text-xs",
};

const weightClasses: Record<FontWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  black: "font-black",
};

export default function Typography({
  variant = "body",
  weight = "normal",
  className = "",
  children,
  ...props
}: TypographyProps) {
  const baseClasses = `${variantClasses[variant]} ${weightClasses[weight]}`;

  return (
    <Text className={`${baseClasses} ${className}`} {...props}>
      {children}
    </Text>
  );
}
