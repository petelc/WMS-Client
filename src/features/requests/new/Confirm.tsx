import { RequestSchema } from "../../../lib/schemas/requestSchema";

type Props = {
  requestData: RequestSchema;
};
export default function Confirm({ requestData }: Props) {
  return (
    <div>
      <h2>Confirm Your Request</h2>
      <pre>{JSON.stringify(requestData, null, 2)}</pre>
    </div>
  );
}
