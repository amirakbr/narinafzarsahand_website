import Banner from "../_components/banner/banner";
import CantactForm from "./_components/contactForm";
import Info from "./_components/info";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-8">
      <Banner
        backGroundimageAlt="support crow image"
        backGroundimageSrc="/assets/contactus/contactus.png"
        description="با ما در ارتباط باشید!"
        highlightWord={["با", "ما"]}
        title="تماس با مـا"
        classNames={{ image: "object-[center_0] lg:object-[center_30%]" }}
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 container mx-auto px-4">
        <CantactForm />
        <Info />
      </div>
    </div>
  );
};

export default ContactUs;
