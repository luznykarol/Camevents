import React, { useState } from "react";
import { graphql } from "gatsby";
import { useForm } from "react-hook-form";
import axios from "axios";

import { useSocialMedia } from "@/hooks/use-social-media";

import InputField from "@/components/Forms/InputField";
import TextField from "@/components/Forms/TextField";
import SelectField from "@/components/Forms/SelectField";

import Icon from "@/components/Icon";

const ContactForm = ({ title }) => {
  const links = useSocialMedia();

  const link = links.email.url;
  const linkText = links.text.text;

  const socialMedia = links.social_media_links;

  const { register, handleSubmit, reset, errors } = useForm({
    mode: "onBlur",
  });

  const [sent, setSent] = useState(false);
  const [isSending, setSending] = useState(false);
  const [formError, setFormError] = useState(true);

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (!isSending) {
      setSending(true);
      axios
        .post("/api/zendesk-form", {
          ...data,
          subject: "Contact Form Submission",
        })
        .then((res) => {
          setSending(false);
          setSent(!sent);
          reset();
        })
        .catch((error) => {
          setSending(false);
          setFormError(true);
        });
    }
  };

  const handleClick = () => {
    setSent(!sent);
  };

  const requiredOnly = register({ required: true });

  const emailValidation = register({
    required: true,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    },
  });

  return (
    <section className="contact mb-48 xl:mb-80">
      <div className="container-lg">
        <div className="shadow-1 border-1 bg-grey-800 border-grey-200 w-full py-5 px-5 sm:py-10 sm:px-20 sm:max-w-xl relative mx-auto">
          <form
            id="form_1"
            className="form-wrap"
            noValidate
            onSubmit={handleSubmit(onSubmit)}>
            <InputField
              type="text"
              name="name"
              label="Name"
              register={requiredOnly}
              error={errors.firstName}
              errorMessage={
                (errors.firstName &&
                  errors.firstName.type === "required" &&
                  "this field is required") ||
                (errors.firstName &&
                  errors.firstName.type === "minLength" &&
                  "Name too short")
              }
            />
            <InputField
              type="email"
              name="email"
              label="Email"
              className="mt-8"
              register={emailValidation}
              error={errors.email}
              errorMessage="Enter correct email format"
            />
            <SelectField
              className="mt-8"
              label="How can we help?"
              name="inquiry"
              register={requiredOnly}
              error={errors.inquiry}
              options={[
                "General Inquiry or Feedback",
                "Founder Call",
                "Business Question",
                "Tax Question",
                "Technical or Website Issue",
                "Product Demo",
              ]}
            />
            <TextField
              name="message"
              className="mt-8"
              label="Message"
              register={requiredOnly}
              error={errors.message}
              errorMessage={
                (errors.message &&
                  errors.message.type === "required" &&
                  "this field is required") ||
                (errors.message &&
                  errors.message.type === "minLength" &&
                  "Message too short")
              }
            />

            <button
              className="btn btn--medium w-full btn--blue mt-12 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSending}>
              {!isSending ? "Send message" : "Sending..."}
            </button>
          </form>
        </div>
        <div className="max-w-xl mx-auto mt-8 border-1 border-grey-200 shadow-3 rounded-sm bg-white ">
          <div className="p-8 flex justify-center">
            <a href={link} className="flex items-center justify-start">
              <div className="icon-outline p-2 mr-5"></div>
              <span className="text-black text-lg font-medium">{linkText}</span>
            </a>
          </div>
          <div className="p-8 border-t-1 border-grey-200 flex justify-center items-center">
            {socialMedia.map((item, i) => {
              return (
                <a
                  key={i}
                  className="mx-2"
                  href={item.link.url}
                  rel="noopener noreferrer"
                  target="_blank">
                  <Icon icon={item.social_medium} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;

export const query = graphql`
  fragment ContactForm on PrismicPageDataBodyContactForm {
    slice_type
    id
  }
`;
