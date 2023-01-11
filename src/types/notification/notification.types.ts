export interface INotification {
  isVisible?: boolean;
  message: string;
  type: "success" | "error";
}
