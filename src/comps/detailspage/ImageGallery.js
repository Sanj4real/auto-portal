import Gallery from "react-image-gallery";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import InnerImageZoom from "react-inner-image-zoom";
import { baseUrl } from "src/helpers/constants";

const leftNav = (onClick, disabled) => {
  return (
    <button
      className="absolute top-1/2 left-0 z-10 p-2 bg-gray-200 rounded-full opacity-70"
      disabled={disabled}
      onClick={onClick}
    >
      <AiOutlineLeft />
    </button>
  );
};

export default function ImageGallery({ galleryApi }) {
  // const imagesProduct1 = [
  //   {
  //     original:
  //       Array.isArray(galleryApi?.images) && galleryApi?.images?.length
  //         ? `${baseUrl}/${galleryApi?.images[0]?.url}`
  //         : "",
  //     thumbnail:
  //       Array.isArray(galleryApi?.images) && galleryApi?.images?.length
  //         ? `${baseUrl}/${galleryApi?.images[0]?.url}`
  //         : "",
  //   },
  // ];
  console.log("galleryApi?.images");
  const imagesProduct =
    Array.isArray(galleryApi?.images) && galleryApi?.images?.length
      ? galleryApi?.images.map((item) => ({
          original: `${baseUrl}/${galleryApi?.images[0]?.url}`,
          // original: `https://laurenashpole.github.io/react-inner-image-zoom/images/unsplash-1.jpg`,
          thumbnail: `${baseUrl}/${item?.url}`,
        }))
      : [];

  const renderItem = (item) => {
    return (
      <InnerImageZoom
        src={item.original}
        zoomSrc={item.original}
        zoomScale={1.9}
        hasSpacer={true}
        zoomType="hover"
        zoomPreload={true}
        fullscreenOnMobile={false}
        imgAttributes={{
          src: "test",
          "data-key": "value",
          title: "Title",
          alt: "",
          height: "100%",
          onLoad: () => console.log("Original image loaded"),
        }}
      />
    );
  };

  return (
    <>
      <Gallery
        items={imagesProduct}
        renderItem={(item) => renderItem(item)}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        // renderLeftNav={leftNav}
        // renderRightNav={rightNav}
      ></Gallery>
      <style jsx>
        {`
          :global(.image-gallery-slide img) {
            width: 100% !important;
            height: 230px !important ;
            object-fit: cover !important;
          }
          :global(.image-gallery-thumbnail) {
            width: 60px !important;
          }
          :global(.image-gallery-thumbnail.active) {
            border: 2px solid #337ab7;
          }
          :global(.image-gallery-thumbnail:hover) {
            border: 2px solid #337ab7;
          }
          :global(.image-gallery-thumbnail img) {
            height: 40px !important;
            width: 40px !important;
            object-fit: contain;
            margin: auto;
          }
        `}
      </style>
    </>
  );
}
