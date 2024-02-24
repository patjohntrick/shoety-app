import { ReactNode } from "react";

export interface TabItemProps {
  key: string;
  label: ReactNode | string;
  content: ReactNode | string;
}
