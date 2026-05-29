import flowerTrain from "../../assets/dreamy-flower-train/flower-train-set.svg";

const routeClass = {
  "/about": "at-about",
  "/projects": "at-projects",
  "/conclution": "at-conclution",
};

export function FlowerTrainLayer({ activePath }) {
  return (
    <div className={`flower-train-layer ${routeClass[activePath] ?? "at-about"}`} aria-hidden="true">
      <img src={flowerTrain} alt="" />
    </div>
  );
}

