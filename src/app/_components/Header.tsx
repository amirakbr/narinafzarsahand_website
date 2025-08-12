import { Bell, SquareMenu } from "lucide-react";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="flex flex-col gap-2">
      <div className="border-b-1 border-b-primary flex items-center gap-4 flex-row-reverse p-2">
        <span>02162746000</span>
        <span>@nnnnnnnnnnnnnnnnn</span>
      </div>
      <div className="flex items-center justify-between p-2">
        <Logo />
        <div className="flex items-center gap-1">
            <Bell color="blue" />
            <SquareMenu color="blue" />
        </div>
      </div>
    </header>
  );
};

export default Header;
