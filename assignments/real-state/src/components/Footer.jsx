import BLOGDATA from "../assets/data/blog-data";
import Feature_text, { footer_About_Text } from "../assets/data/link-text-data";

function LinkText(prop) {
  return (
    <a
      href="javascript:void(0)"
      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
    >
      {prop.text}
    </a>
  );
}

function SocialIcon(prop) {
  return (
    <a href={prop.href} className="px-3 text-gray-7 hover:text-white">
      <img src={prop.icon} alt={prop.altText} />
    </a>
  );
}

function BlogList(prop) {
  return (
    <a href="blog-details.html" className="group flex items-center gap-[22px]">
      <div className="overflow-hidden rounded">
        <img src={prop.imgSrc} alt="blog" />
      </div>
      <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
        {prop.title}
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <a
                href="javascript:void(0)"
                className="mb-6 inline-block  max-h-[100px]"
              >
                <img
                  src="/images/logo/logo.svg"
                  alt="logo"
                  className="max-w-full"
                />
              </a>
              <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <div className="-mx-3 flex items-center">
                <SocialIcon
                  href={"javascript:void(0)"}
                  icon={"/svg/footer-1.svg"}
                  altText={"footer-1 svg"}
                ></SocialIcon>
                <SocialIcon
                  href={"javascript:void(0)"}
                  icon={"/svg/footer-2.svg"}
                  altText={"footer-2 svg"}
                ></SocialIcon>

                <SocialIcon
                  href={"javascript:void(0)"}
                  icon={"/svg/footer-3.svg"}
                  altText={"footer-3 svg"}
                ></SocialIcon>
                <SocialIcon
                  href={"javascript:void(0)"}
                  icon={"/svg/footer-4.svg"}
                  altText={"footer-4 svg"}
                ></SocialIcon>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                About Us
              </h4>
              <ul>
                {footer_About_Text.map((item) => {
                  return (
                    <li key={item.id}>
                      <LinkText text={item.title}></LinkText>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Features
              </h4>
              <ul>
                {Feature_text.map((item) => {
                  return (
                    <li key={item.id}>
                      <LinkText text={item.title}></LinkText>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Latest blog
              </h4>
              <div className="flex flex-col gap-8">
                {BLOGDATA.map((item) => {
                  return (
                    <BlogList
                      key={item.id}
                      imgSrc={item.imgSrc}
                      title={item.title}
                    ></BlogList>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
