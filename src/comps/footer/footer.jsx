import Image from "next/image";
import Link from "next/link";

const SOCIAL = [{}];

const Footer = () => {
  return (
    <div className="footer-main pt-20 pb-12 ">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-[425px_auto_auto_auto_200px] gap-x-[50px] gap-y-9 footer-menu">
          <div>
            <div className="sm:max-w-[305px]">
              <h5 className="font-semibold mb-[10px] text-lg text-white">
                Auto Portal
              </h5>
              <p className="mb-7 text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                viverra feugiat placerat mus.
              </p>
              <div className="flex gap-6">
                <div>
                  <Link href="#">
                    <a className="">
                      <Image
                        src="/images/fb.png"
                        alt="fb"
                        width={32}
                        height={32}
                      />
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <a>
                      <Image
                        src="/images/twitter.png"
                        alt="fb"
                        width={32}
                        height={32}
                      />
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <a>
                      <Image
                        src="/images/linkedin.png"
                        alt="fb"
                        width={32}
                        height={32}
                      />
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <a>
                      <Image
                        src="/images/insta.png"
                        alt="fb"
                        width={32}
                        height={32}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h6 className="text-lg font-medium text-[#fff] mb-3">Company</h6>
            <ul className="text-sm font-normal">
              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a>FAQ’s</a>
                </Link>
              </li>
              <li>Careers</li>

              <li>
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-medium  text-[#fff] mb-3">Policy</h6>
            <ul className="text-sm font-normal">
              <li>
                <Link href="/terms">
                  <a>Term of Use</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a>Privacy and Policy</a>
                </Link>
              </li>
              <li>Sitemap</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-medium  text-[#fff] mb-3">
              Phone Number
            </h6>
            <ul className="text-sm font-normal">
              <li>
                <Link href="#">
                  <a>+977 984516xxxx</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>+977 984516xxxx</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>+977 984516xxxx</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-medium  text-[#fff] mb-3">Address</h6>
            <ul className="text-sm font-normal">
              <li>Chabahil tole 7,Kathmandu 182-0024 Nepal</li>
              <li>FAX : +977 6235723472</li>
              <li>
                <Link href="#">
                  <a>Email : air@example.com</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
