import { Building, LightbulbIcon, Map, Newspaper } from "lucide-react";

const Testimonial = () => {
  const TestimonialData = [
    {
      icon: <Newspaper color="blue"/>,
      title: "اخبار روز",
      links: [
        {
          label: "نقش فین‌تک‌ها در اقتصاد ایران",
          url: "",
        },
        {
          label: "عدم اطمینان مردم به فین‌تک!",
          url: "",
        },
      ],
    },
    {
      icon: <Building color="blue"/>,
      title: "مشتریان",
      links: [
        {
          label: "ارگان‌ها",
          url: "",
        },
        {
          label: "سازمان‌ها",
          url: "",
        },
      ],
    },
    {
      icon: <Map color="blue"/>,
      title: "شهرها",
      links: [
        {
          label: "+28 شهر داخلی",
          url: "",
        },
        {
          label: "+5 شهر خارجی",
          url: "",
        },
      ],
    },
    {
      icon: <LightbulbIcon color="blue"/>,
      title: "پروژه‌ها",
      links: [
        {
          label: "+30 پروژه‌های اجرا شده",
          url: "",
        },
        {
          label: "+10 پروژه‌های در حال اجرا",
          url: "",
        },
      ],
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-16 p-8 -top-20 relative z-[11] container mx-auto md:px-2">
        {TestimonialData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 py-8 rounded-sm shadow-md shadow-slate-800"
          >
            <div className="flex items-center gap-4 mb-2 border-b-2 border-b-primary pb-2">
              {item.icon}
              <h3 className="text-lg font-bold">{item.title}</h3>
            </div>
            {item.links.map((link, linkIndex) => (
              <div key={linkIndex} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-1"></span>
                <a href={link.url} className="hover:underline">
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
