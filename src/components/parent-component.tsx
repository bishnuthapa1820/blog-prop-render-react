import ChildComponent from "./child-component";

export default function ParentComponent() {
  const popupTitle = (title: string, resetTitle: () => void) => {
    alert(title);
    resetTitle();
  };

  return (
    <div>
      <ChildComponent
        propsRender={(props) => {
          return (
            <div
              style={{
                marginTop: "12px",
                padding: "12px",
                backgroundColor: "yellow",
              }}
            >
              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={props.resetTitle}>Reset</button>
                <button
                  onClick={() => popupTitle(props.title, props.resetTitle)}
                >
                  Popup Title
                </button>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}
