import { HelloProps } from "../types/formDataType"

export const Hello = ({firstName, lastName, age}: HelloProps) => {
  return (
    <>
      <h1>Good Afternoon, {firstName} {lastName}</h1>
    </>
  )
}