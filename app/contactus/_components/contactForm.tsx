import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";

const CantactForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="title-font-size text-primary font-semibold">
        ثبت درخواست و مشاوره
      </p>
      <hr className="text-primary bg-primary border-priamry" />
      <Input
        label="نام و نام خانوادگی"
        size="sm"
        className="text-sm lg:text-2xl"
      />
      <Input label="ایمیل" size="sm" className="text-sm lg:text-2xl" />
      <Textarea
        label="یادداشت کنید..."
        size="sm"
        className="text-sm lg:text-2xl"
      />
      <Button color="primary" variant="solid" className="font-semibold text-lg">
        ارسال پیام
      </Button>
    </div>
  );
};

export default CantactForm;
