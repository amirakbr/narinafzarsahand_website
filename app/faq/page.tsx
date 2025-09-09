"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import Banner from "../_components/banner/banner";
import { Divider } from "@heroui/react";
import { useState } from "react";
import type { Selection } from "@react-types/shared";
import { Minus, Plus } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleSelectionChange = (keys: Selection) => {
    if (!faqData || faqData?.length === 0) {
      return null;
    }
    if (keys === "all") {
      setOpenItems(faqData?.map(({ id }) => `faq-${id}`));
    } else {
      setOpenItems(Array.from(keys as Set<string>));
    }
  };

  const faqData = [
    {
      id: 10,
      question: "خدمات نارین افزار سهند؟",
      answer:
        "نارین افزار سهند راهکارهای نرم افزاری هوشمند در زمینه های مالی، فین تک، سیستم های پرداخت و دستگاه های پوز ارائه می دهد که به کسب وکارها کمک می کند تا فرآیندهای خود را بهینه سازی و یکپارچه کنند.",
    },
    {
      id: 18,
      question:
        "چگونه می توانم از راهکارهای مالی نارین افزار سهند استفاده کنم؟",
      answer:
        "شما می توانید از طریق تماس تلفنی یا ثبت تیکت درخواست خود را با تیم نارین افزار سهند درمیان بگذارید و از مشاوره متخصصین ما بهره‌مند شوید.",
    },
    {
      id: 17,
      question: "پشتیبانی و به روزرسانی نرم افزارها چگونه انجام می شود؟",
      answer:
        "هر زمان که به کمک نیاز داشته باشید، تیم پشتیبانی ما آماده پاسخگویی به شماست. همچنین، نرم افزارها به طور منظم به روزرسانی می شوند تا همواره از آخرین امکانات و ویژگی های موجود بهره مند شوید.",
    },
    {
      id: 16,
      question:
        "آیا می توان نرم افزارها را متناسب با نیاز کسب وکار خود سفارشی کرد؟",
      answer:
        "بله! نرم افزارهای ما کاملاً سفارشی سازی می شوند تا متناسب با نیازهای خاص کسب وکار شما عمل کنند. تیم ما با شما همکاری می کند تا تمام ویژگی ها و امکانات لازم را پیاده سازی کرده و تجربه‌ای منحصر به فرد برای شما بسازد.",
    },
    {
      id: 15,
      question: "چگونه می توان با نارین افزار سهند همکاری کرد؟",
      answer:
        "برای همکاری با نارین افزار سهند، تنها کافیست با ما تماس بگیرید یا از طریق فرم آنلاین درخواست مشاوره کنید. تیم ما بعد از ارزیابی نیازهای شما، بهترین راهکارها را به شما ارائه خواهد داد تا بتوانید با بهره‌گیری از فناوری‌های پیشرفته، کسب‌وکار خود را ارتقا دهید.",
    },
    {
      id: 51,
      question: "نارین افزار سهند در چه شهرهایی فعالیت دارد؟",
      answer:
        "نارین افزار سهند در سراسر ایران فعالیت می کند و خدمات خود را به تمامی کسب وکارها در تمامی شهرها ارائه می دهد. تیم ما آماده همکاری با مشتریان در هر نقطه از کشور است.",
    },
    {
      id: 14,
      question: "مزایای راهکارهای مالی نارین افزار سهند؟",
      answer:
        "راهکارهای مالی ما منعطف و بومی سازی شده است و به شما کمک می کنند تا دقت، سرعت و بهره وری خود را افزایش دهید و همچنین فرآیندهای مالی را به طور یکپارچه مدیریت کنید.",
    },
    {
      id: 31,
      question: "نرم افزار دستگاه های پوز و سیستم های پرداخت یکپارچه هستند؟",
      answer:
        "بله، نرم افزارهای ما به طور کامل با دستگاه های پوز و سیستم های پرداخت یکپارچه می شوند و کارکردی ساده و بدون پیچیدگی ارائه می دهند.",
    },
    {
      id: 21,
      question: "خدمات پشتیبانی به چه صورت است؟",
      answer:
        "پشتیبان های ما ۲۴ ساعته حتی در ایام تعطیل آماده پاسخگویی به سوالات و حل چالش های شما هستند.",
    },
    {
      id: 11,
      question: "راه های ارتباطی با نارین افزار سهند",
      answer:
        "برای ارتباط با ما، می توانید از طریق تلفن، ایمیل یا تیکت اقدام کنید. تیم ما آماده پاسخگویی به سؤالات شماست.",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-16">
        <Banner
          backGroundimageAlt="faq banner image with question marks"
          backGroundimageSrc="/assets/faq/faq.png"
          description="پاسخ تمام ابهامات شما در یک نگاه!"
          title="داستان ما"
          highlightWord={["پاسخ"]}
          classNames={{
            image: "object-[center_0] sm:object-[center_65%]",
          }}
        />
        {/* <div className="p-8 rounded-xl bg-slate-200 container mx-auto xl:max-w-4xl">
          <div>
            <Accordion selectionMode="multiple" variant="splitted" className="gap-4">
              {faqData.map(({ answer, question }, index) => (
                <AccordionItem
                  key={`faq ${index}`}
                  aria-label={question}
                  title={question}
                  classNames={{ title: "cursor-pointer" }}
                >
                  {answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div> */}
        <div className="px-20 flex justify-center">
          <div className="p-3 px-1 container rounded-xl bg-slate-200 w-full ">
            {faqData && faqData?.length > 0 ? (
              <Accordion
                selectionMode="multiple"
                showDivider={false}
                className="flex flex-col gap-6 "
                selectedKeys={openItems}
                onSelectionChange={handleSelectionChange}
              >
                {faqData?.map(({ answer, question, id }) => {
                  const key = `faq-${id}`;
                  const isOpen = openItems.includes(key);

                  return (
                    <AccordionItem
                      key={key}
                      aria-label={question}
                      className="bg-white rounded-xl px-4 !py-2 flex flex-col "
                      hideIndicator
                      classNames={{ startContent: "!shrink" }}
                      startContent={
                        <div className="flex items-center gap-2 cursor-pointer">
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-slate-700" />
                          ) : (
                            <Plus className="w-5 h-5 text-slate-700" />
                          )}
                          <p className="text-right text-base md:text-lg xl:text-3xl font-medium ">
                            {question}
                          </p>
                        </div>
                      }
                    >
                      <Divider className="mb-2" />
                      <p className="text-slate-700 text-sm md:text-lg text-justify">
                        {answer}
                      </p>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
