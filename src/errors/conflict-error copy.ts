import { ApplicationError } from "@/protocols";

export function invalidError(): ApplicationError {
  return {
    name: "Invalid",
    message: "Params aren't valid!",
  };
}
