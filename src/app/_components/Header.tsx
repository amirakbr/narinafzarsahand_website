import { Bell, SquareMenu } from "lucide-react";
import Logo from "./logo";

const Header = () => {
  const menuConfig = [
    {
      label: "ثبت درخواست",
      src: "/request",
    },
    {
      label: "مخاطبین",
      src: "/contact",
    },
    {
      label: "راهکار ها",
      src: "/solutions",
    },
    {
      label: "درباره ما",
      src: "/aboutus",
    },
    {
      label: "تماس با ما",
      src: "/contactus",
    },
  ];
  return (
    <header className="flex flex-col gap-2">
      <div className="flex items-center gap-4 flex-row-reverse p-2 container mx-auto">
        <span className="text-primary">02162746000</span>
        <span className="text-primary">@nnnnnnnnnnnnnnnnn</span>
      </div>
      <span className="border-b-1 border-b-primary" />
      <div className="flex items-center justify-between p-2 container mx-auto">
        <div className="flex items-center gap-2">
          <Logo />
          <div className="hidden md:flex flex-row items-center gap-4">
            {menuConfig.map(({ label, src }) => (
              <a key={`header link ${src}`} className="p-2 font-medium">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="text-white hidden md:flex bg-primary rounded-lg items-center gap-2 p-2">
          <Bell color="white" />
          پیغام شخصی
        </div>
        <div className="flex md:hidden items-center gap-1">
          <Bell color="blue" />
          <SquareMenu color="blue" />
        </div>
      </div>
    </header>
  );
};

export default Header;
