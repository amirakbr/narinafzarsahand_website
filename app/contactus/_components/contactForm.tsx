import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";

const CantactForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl text-primary font-semibold">ثبت درخواست و مشاوره</p>
      <hr className="text-primary bg-primary border-priamry" />
      <Input label="نام و نام خانوادگی" size="sm" />
      <Input label="ایمیل" size="sm" />
      <Textarea label="یادداشت کنید..." size="sm" />
      <Button color="primary" variant="solid" className="font-semibold text-lg">ارسال پیام</Button>
    </div>
  );
};

export default CantactForm;
