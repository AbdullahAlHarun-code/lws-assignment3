import SingleTaskAction from "./SingleTaskAction";
import { FaStar } from "react-icons/fa";

export default function SingleTask() {
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <FaStar  color="grey"/>
      </td>
      <td>Integration API</td>
      <td>
        <div>
          Connect an existing API to a third-party database using secure methods
          and handle data exchange efficiently.
        </div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          <li>
            <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
              Web
            </span>
          </li>
          <li>
            <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#1C92FFB0] px-2.5 text-sm capitalize text-[#F4F5F6]">
              Python
            </span>
          </li>
          <li>
            <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#FE1A1AB5] px-2.5 text-sm capitalize text-[#F4F5F6]">
              API
            </span>
          </li>
        </ul>
      </td>
      <td className="text-center">High</td>
      <td>
        <SingleTaskAction />
      </td>
    </tr>
  );
}
