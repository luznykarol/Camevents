import React from "react";
import { Link } from "gatsby";
import LogoFooter from "@/icons/LogoFooter";
// import { useSocialMedia } from '@/hooks/use-social-media'
import { useFooterNavigation } from "@/hooks/use-footer-navigation";
import Icon from "@/components/Icon";
import FooterLink from "@/components/FooterLink";

const Footer = ({ data }) => {
  // const links = useSocialMedia()
  // const navigation = useFooterNavigation()
  // const socials = links.social_media_links

  return (
    <footer className="footer  relative pt-14  w-full">
      <div className="container-lg">
        <div className="flex flex-col md:flex-row">
          <div className="mx-auto mb-8 md:mb-0 md:ml-0 md:mr-14">
            <LogoFooter />
          </div>
          <div className="flex flex-col md:flex-row justify-between md:justify-start">
            {/* {navigation
              .sort((a, b) => {
                if (
                  a.node.data.body[0].primary.order <
                  b.node.data.body[0].primary.order
                )
                  return -1
                if (
                  a.node.data.body[0].primary.order >
                  b.node.data.body[0].primary.order
                )
                  return 1
                return 0
              })
              .map((item, i) => {
                const footerList = item.node.data.body[0]

                return (
                  <div key={i} className='mx-auto mb-6 md:mr-14 lg:mr-22'>
                    <div className='text-center md:text-left font-bold text-black text-sm mb-4'>
                      {footerList.primary.title}
                    </div>
                    {footerList.items.map((item, i) => {
                      return <FooterLink key={i} data={item} />
                    })}
                  </div>
                )
              })} */}
          </div>
        </div>
        <div className="pt-6 md:mt-16 flex flex-col-reverse justify-between items-center md:flex-row ">
          <div className="text-xs font-semibold text-black">
            © 2021 ComplYant
          </div>
          <div
            className="flex flex-col md:flex-row items-center
          ">
            <Link
              to="/privacy-policy/"
              className="text-xs text-black font-semibold mb-4 md:mb-0">
              Terms and Privacy Policy
            </Link>
            <div className="flex items-center mb-4 md:mb-0">
              {/* {socials.map((item, i) => {
                return (
                  <a
                    key={i}
                    className='ml-5 '
                    href={item.link.url}
                    rel='noopener noreferrer'
                    target='_blank'>
                    <Icon icon={item.social_medium} />
                  </a>
                )
              })} */}
            </div>
          </div>
        </div>
        <div className="text-center pb-6 pt-4 md:pt-0">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.cleancommit.io"
            className="text-xxs text-grey-400 text-center font-semibold mb-6 md:mb-0 mx-auto">
            Designed and Developed by Clean Commit
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
