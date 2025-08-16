import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>سازمان‌ها - نرم‌افزار نارین افزار سهند</title>
        <meta name="description" content="پلتفرم هوشمند مدیریت مالی و عملیاتی" />
      </Head>

      {/* Top Navigation */}
      <header className="border-b">
        <div className="container mx-auto flex justify-between items-center py-3 px-4 text-sm">
          <div className="flex gap-4">
            <span>📞 ۰۹۱۲۳۴۵۶۷۸۹</span>
            <span>✉ info@example.com</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-1 rounded">
            پشتیبانی شخصی
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-64 bg-gray-300"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold">سازمان‌ها</h1>
          <p className="mt-2">تکیه‌گاه بیش از ۴۰۰ شرکت</p>
        </div>
      </section>

      {/* Private Organizations */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-xl font-bold mb-4">سازمان‌های خصوصی</h2>
        <p className="mb-6 leading-7">
          در دنیای امروز، سازمان‌های خصوصی در صنایع مختلف نیازمند افزایش بهره‌وری...
        </p>

        <ul className="list-disc list-inside mb-6 leading-7">
          <li>بهبود فرآیندها و کاهش هزینه‌ها</li>
          <li>پشتیبانی و ارتقاء کیفیت خدمات و نتایج</li>
          <li>افزایش شفافیت مالی</li>
        </ul>

        <h3 className="text-lg font-semibold mb-6">
          با راهکارهای نوآورانه، پنجره‌ای متناسب با نیاز صنعت شما ارائه می‌دهیم.
        </h3>

        {/* Terminals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="w-full h-40 bg-gray-300"></div>
          <div className="w-full h-40 bg-gray-300"></div>
          <div className="w-full h-40 bg-gray-300"></div>
          <div className="w-full h-40 bg-gray-300"></div>
        </div>
      </section>

      {/* Non-Private Organizations */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-xl font-bold mb-4">سازمان‌های غیرخصوصی</h2>
        <p className="mb-6 leading-7">
          سازمان‌های غیرخصوصی شامل وزارت‌خانه‌ها و سازمان‌های عمومی...
        </p>
      </section>

      {/* Company Feature Box */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">شرکت جوان سیر ایثار</h2>
          <p className="mb-6 leading-7">
            شرکت جوان سیر ایثار از نرم‌افزار سهند، به‌منظور توسعه...
          </p>

          <ul className="list-disc list-inside mb-4 leading-7">
            <li>برنامه‌های هوشمند مدیریت مسیرها</li>
            <li>کنترل هزینه‌ها و افزایش شفافیت مالی</li>
            <li>سیستم‌های تسهیل پرداخت</li>
          </ul>

          <div className="w-full h-40 bg-gray-300"></div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-xl font-bold mb-4">ویژگی‌های کلیدی پلتفرم نارین افزار سهند</h2>
        <ul className="list-disc list-inside leading-7 space-y-2">
          <li>مدیریت جامع مالی و عملیاتی</li>
          <li>پشتیبانی از سازمان‌های بزرگ</li>
          <li>افزایش بهره‌وری و شفافیت</li>
          <li>امنیت داده‌ها</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-4">تماس با ما</h4>
            <p>support@narinatsarand.com</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">خدمات</h4>
            <ul className="space-y-1">
              <li>مشاوره</li>
              <li>پشتیبانی</li>
              <li>آموزش</li>
            </ul>
          </div>
          <div className="w-full h-24 bg-gray-300"></div>
        </div>
      </footer>
    </>
  );
}
