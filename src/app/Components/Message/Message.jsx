import { BiSolidMessageRoundedDetail } from "react-icons/bi";

function Message() {
  return (
    <div>
      <div className="bg-secondary-9 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer">
        <BiSolidMessageRoundedDetail className="text-4xl" />
      </div>
    </div>
  );
}
export default Message;
