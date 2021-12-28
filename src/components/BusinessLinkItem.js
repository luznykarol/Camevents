import React from "react";
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import Icon from "@/components/Icon";
import htmlSerializer from "../utils/HtmlSerializer";

const BusinessLinkItem = ({ data }) => {
  const { title, content, icon } = data.data;

  return (
    <Link
      to={`/${data.uid}/`}
      className="card-business py-14 px-10 max-w-md w-full mx-auto sm:mx-0 sm:max-w-none flex flex-col justify-center items-center">
      <Icon className="mx-auto mb-6" icon={icon} />
      <h5 className="text-cam-white text-center">{title.text}</h5>
      <div className="markdown-content text-body-dark text-center mt-6">
        <RichText render={content.raw} htmlSerializer={htmlSerializer} />
      </div>
    </Link>
  );
};

export default BusinessLinkItem;
