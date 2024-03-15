import { Reveal } from "@/components/utils/Reveal";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import ButtonLink from "@/components/buttons/ButtonLink";
import { Typewriter } from "@/components/utils/Typewriter";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={"contact__wrapper"}>
        <h4
          className={
            "text-center font-medium text-xl mx-auto font-rajdhani text-neutral-100 mb-2"
          }
        >
          <Typewriter
            text={"Let's get in touch"}
            className="text-[2.5rem]"
            color="text-neutral-200"
          />
        </h4>
        <Reveal className="mx-auto text-center">
          <p className={"text-center mb-6 font-light"}>
            If you're looking to connect, feel free to drop me an email!
            <br />
            Alternatively, you can also reach out to me on{" "}
            <ButtonLink href="https://www.linkedin.com/in/john-carlo-devera-5240761b6/">
              LinkedIn
            </ButtonLink>
            .
          </p>
        </Reveal>
        <div className="mx-auto w-fit">
          <Reveal>
            <Link href="mailto:dev.johncarlo.devera@gmail.com">
              <button className="relative inline-flex items-center justify-center h-12 px-10 overflow-hidden font-medium duration-500 rounded-lg group bg-neutral-800 text-neutral-200">
                <div className="relative inline-flex items-center transition -translate-x-0 group-hover:-translate-x-6">
                  <div className="transition translate-x-0 opacity-100 group-hover:-translate-x-6 group-hover:opacity-0">
                    <AiFillMail size="1.5rem" />
                  </div>
                  <span className="pl-3">Send Email</span>
                  <div className="absolute right-0 transition translate-x-12 opacity-0 group-hover:translate-x-6 group-hover:opacity-100">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
