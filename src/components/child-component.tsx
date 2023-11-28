import { useState } from "react";

type PropsRenderData = {
  title: string;
  resetTitle: () => void;
};

type Props = {
  propsRender: (props: PropsRenderData) => JSX.Element;
};

export default function ChildComponent({ propsRender }: Props) {
  const [title, setTitle] = useState("");

  const resetTitle = () => {
    setTitle("");
  };

  return (
    <div style={{ padding: "12px", backgroundColor: "whitesmoke" }}>
      <h1>Title: {title}</h1>
      <div>
        <input
          type="text"
          placeholder="Input title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {propsRender({ title, resetTitle })}
    </div>
  );
}
