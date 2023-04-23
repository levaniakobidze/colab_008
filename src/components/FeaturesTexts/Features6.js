import TextItem1 from "./FeaturesComponents/TextItem1";
import TextItem2 from "./FeaturesComponents/TextItem2";
import TextItemTab1 from "./FeaturesComponents/TextItemTab1";
import TextItemTab2 from "./FeaturesComponents/TextItemTab2";
export default function Features6() {
  const width = window.innerWidth;
  let components;

  if (width < 768) {
    components = (
      <>
        <TextItem1 />
        <TextItem2 />
      </>
    );
  } else if (width >= 768 && width < 1440) {
    components = (
      <>
        <TextItemTab1 />
        <TextItemTab2 />
      </>
    );
  } else if (width >= 1440) {
    <>
      <TextItem1 />
      <TextItem2 />
    </>;
  }
  return <div className="features-container-6">{components}</div>;
}
