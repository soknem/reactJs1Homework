import FeedBackComponet from "./FeedBackComponet";
import ProductPageComponent from "./ProductPageComponesnt";

const MianComponent = () => {
  return (
    <>
      <div className="h-auto w-[90%] bg-white flex flex-col items-center justify-between">
        <ProductPageComponent />
        <FeedBackComponet />
      </div>
    </>
  );
};
export default MianComponent;
