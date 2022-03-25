import React, { useState } from "react";
import { graphql } from "gatsby";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { CSSTransition } from "react-transition-group";
import Icon from "@/components/Icon";

import InputField from "@/components/Forms/InputField";

const ContactForm = ({ title }) => {
  const { register, handleSubmit, reset, errors } = useForm({
    mode: "onBlur",
  });

  const [sent, setSent] = useState(false);
  const [isSending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState(true);

  const onSubmit = (data, e) => {
    e.preventDefault();

    if (!isSending) {
      setSending(true);
      emailjs
        .sendForm(
          "service_hye8kpc",
          "template_95ygmv4",
          e.target,
          "8H4FXzbpzBA5Kjwi_"
        )
        .then(
          (res) => {
            setSending(false);
            setSent(!sent);
            setSuccess(!success);
            reset();
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
          },
          (error) => {
            setSending(false);
            setFormError(true);
          }
        );
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

  const phoneValidation = register({
    required: true,
    pattern: {
      value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
    },
  });

  return (
    <section className="contact pb-32" id="contactForm">
      <div className="container-sm">
        <div className="mt-28 lg:mt-32 mx-auto text-center mb-18 ">
          <h2 className="uppercase text-cam-white text-center">
            Dołącz do nas!
          </h2>
        </div>
        <p className="text-cam-white text-center">
          Wypełnij poniższy formularz, odezwiemy się do Ciebie jak najszybciej.
        </p>
        <div className="w-full py-5 px-5 sm:py-10 sm:px-20 sm:max-w-xl relative mx-auto">
          <form
            id="form_1"
            className="form-wrap"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            method="POST">
            <InputField
              type="text"
              name="name"
              placeholder="Imię"
              id="name"
              register={requiredOnly}
              error={errors.name}
              errorMessage={
                (errors.name &&
                  errors.name.type === "required" &&
                  "Pole wymagane") ||
                (errors.name &&
                  errors.name.type === "minLength" &&
                  "Wpisane imię jest za krótkie")
              }
            />
            <InputField
              type="text"
              name="lastName"
              placeholder="Nazwisko"
              id="lastName"
              className="mt-6 rounded-lg"
              register={requiredOnly}
              error={errors.lastName}
              errorMessage={
                (errors.lastName &&
                  errors.lastName.type === "required" &&
                  "Pole wymagane") ||
                (errors.lastName &&
                  errors.lastName.type === "minLength" &&
                  "Wpisane imię jest za krótkie")
              }
            />
            <InputField
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="mt-6"
              register={emailValidation}
              error={errors.email}
              errorMessage="Proszę wpisać poprawny adres email"
            />
            <InputField
              name="phone"
              className="mt-6"
              id="phone"
              placeholder="Numer telefonu"
              register={phoneValidation}
              error={errors.phone}
              errorMessage={
                (errors.phone &&
                  errors.phone.type === "required" &&
                  "Pole wymagane") ||
                (errors.phone &&
                  errors.phone.type === "minLength" &&
                  "Podany numer telefonu jest za krótki")
              }
            />
            <InputField
              name="city"
              className="mt-6"
              id="city"
              placeholder="Miejsce zamieszkania"
              register={requiredOnly}
              error={errors.city}
              errorMessage={
                errors.city &&
                errors.city.type === "required" &&
                "Pole wymagane"
              }
            />
            <CSSTransition
              in={success}
              timeout={400}
              classNames="contact-slide"
              unmountOnExit>
              <div className="rounded-lg mt-8 contact-badge flex justify-between items-center bg-white  border border-green border-1">
                <div className="p-4 border-r-1 border border-green">
                  <Icon icon="check" />
                </div>
                <p className="p-4 text-green font-bold ">
                  Dzięki za zgłoszenie, odezwiemy się jak najszybciej!
                </p>
              </div>
            </CSSTransition>
            <button
              className="btn btn--medium w-full btn--blue mt-12 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSending}>
              {!isSending ? "Dołącz" : "Wysyłam wiadomość..."}
            </button>
          </form>
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
