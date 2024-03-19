import { Typewriter } from "./Typewriter";

interface Props {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div
      className={"flex items-center mb-10 gap-8 text-[2rem] uppercase md:text-[2.5rem]"}
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className={"heading__line"} />
      <h2>
        <Typewriter
          text={title}
          color="text-neutral-200"
        />
      </h2>
    </div>
  );
};
