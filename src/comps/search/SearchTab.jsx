import { useState, useEffect } from "react";

const SearchTab = () => {
  // tab
  const [tab, setTab] = useState("car");
  const [filter, setFilter] = useState({});
  const toggleTab = (index) => {
    setTab(index);
    setFilter({ ...filter, tab: index });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  useEffect(() => {
    console.log("filter is>>>", filter);
  }, [filter]);

  return (
    <div className="block md:hidden lg:block">
      <ul className="search-tab flex flex-col md:flex-row  gap-9 border-b border-solid border-[#E6EAF0] mb-5">
        <li
          className={`cursor-pointer pb-2 text-center text-base
              ${
                tab == "car"
                  ? "active border-b-2 px-2 border-solid border-primary text-default"
                  : "text-gray-400 border-b-2 border-transparent"
              }`}
          onClick={() => {
            toggleTab("car");
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mb-1 mr-2.5"
          >
            <path
              d="M8.09306 5.07812H4.57972C3.33972 5.07812 3.05972 5.69813 2.90639 6.46479L2.33972 9.16479H10.3397L9.77305 6.46479C9.60639 5.69813 9.33306 5.07812 8.09306 5.07812V5.07812Z"
              stroke="#A7B2C3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3264 13.5735C11.3798 14.1602 10.9131 14.6668 10.3131 14.6668H9.37309C8.83309 14.6668 8.75976 14.4335 8.65976 14.1535L8.55976 13.8535C8.41976 13.4468 8.32643 13.1668 7.60643 13.1668H5.04643C4.32643 13.1668 4.21976 13.4802 4.09309 13.8535L3.99309 14.1535C3.89976 14.4402 3.82643 14.6668 3.27976 14.6668H2.33976C1.73976 14.6668 1.26643 14.1602 1.32643 13.5735L1.60643 10.5268C1.67976 9.77349 1.81976 9.16016 3.13309 9.16016H9.51309C10.8264 9.16016 10.9664 9.77349 11.0398 10.5268L11.3264 13.5735Z"
              stroke="#A7B2C3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.33301 7.66406H1.83301"
              stroke="#A7B2C3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.833 7.66406H10.333"
              stroke="#A7B2C3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.33301 11.1641H4.83301"
              stroke="#A7B2C3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.83301 11.1641H9.33301"
              stroke="#A7B2C3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.4731 5.82678C12.6598 5.39345 12.5931 4.80678 12.2464 4.29345C11.9064 3.78011 11.3864 3.49345 10.9131 3.50011"
              stroke="#A7B2C3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5466 6.48536C14.8266 5.4787 14.6266 4.24536 13.9133 3.1787C13.1999 2.11203 12.1333 1.4587 11.0933 1.33203"
              stroke="#A7B2C3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Cars
        </li>
        <li
          className={`cursor-pointer pb-2 text-center text-base
              ${
                tab == "bike"
                  ? "active border-b-2 px-2 border-solid border-primary text-default"
                  : "text-gray-400"
              }`}
          onClick={() => {
            toggleTab("bike");
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mb-1 mr-2.5"
          >
            <path
              d="M10.3335 4.6246C11.0431 5.03408 11.6324 5.62324 12.042 6.3328C12.4516 7.04236 12.6671 7.84729 12.6668 8.6666V13.9999H9.88683C9.7491 14.3903 9.49367 14.7283 9.15576 14.9674C8.81786 15.2065 8.41411 15.3349 8.00016 15.3349C7.58622 15.3349 7.18247 15.2065 6.84456 14.9674C6.50666 14.7283 6.25123 14.3903 6.1135 13.9999H3.3335V8.6666C3.3332 7.84729 3.5487 7.04236 3.95831 6.3328C4.36792 5.62324 4.95719 5.03408 5.66683 4.6246C5.55729 4.42785 5.47328 4.21793 5.41683 3.99993H3.3335V2.6666H5.4175C5.56579 2.09444 5.89988 1.58772 6.36732 1.22598C6.83477 0.864243 7.4091 0.667969 8.00016 0.667969C8.59123 0.667969 9.16556 0.864243 9.63301 1.22598C10.1004 1.58772 10.4345 2.09444 10.5828 2.6666H12.6668V3.99993H10.5828C10.5265 4.21777 10.4429 4.42764 10.3342 4.6246H10.3335ZM9.36483 5.6246C8.95237 5.87109 8.48066 6.00082 8.00016 5.99993C7.51969 6.00066 7.04802 5.87093 6.6355 5.6246C6.049 5.88787 5.55112 6.31509 5.20183 6.85481C4.85255 7.39453 4.66676 8.02372 4.66683 8.6666V12.6666H6.00016V9.99993C6.00016 9.4695 6.21088 8.96079 6.58595 8.58572C6.96102 8.21065 7.46973 7.99993 8.00016 7.99993C8.5306 7.99993 9.0393 8.21065 9.41438 8.58572C9.78945 8.96079 10.0002 9.4695 10.0002 9.99993V12.6666H11.3335V8.6666C11.3336 8.02372 11.1478 7.39453 10.7985 6.85481C10.4492 6.31509 9.95133 5.88787 9.36483 5.6246ZM8.00016 9.33327C7.82335 9.33327 7.65378 9.4035 7.52876 9.52853C7.40373 9.65355 7.3335 9.82312 7.3335 9.99993V13.3333C7.3335 13.5101 7.40373 13.6796 7.52876 13.8047C7.65378 13.9297 7.82335 13.9999 8.00016 13.9999C8.17697 13.9999 8.34654 13.9297 8.47157 13.8047C8.59659 13.6796 8.66683 13.5101 8.66683 13.3333V9.99993C8.66683 9.82312 8.59659 9.65355 8.47157 9.52853C8.34654 9.4035 8.17697 9.33327 8.00016 9.33327ZM8.00016 4.6666C8.35379 4.6666 8.69292 4.52612 8.94297 4.27607C9.19302 4.02603 9.3335 3.68689 9.3335 3.33327C9.3335 2.97964 9.19302 2.6405 8.94297 2.39046C8.69292 2.14041 8.35379 1.99993 8.00016 1.99993C7.64654 1.99993 7.3074 2.14041 7.05735 2.39046C6.80731 2.6405 6.66683 2.97964 6.66683 3.33327C6.66683 3.68689 6.80731 4.02603 7.05735 4.27607C7.3074 4.52612 7.64654 4.6666 8.00016 4.6666Z"
              fill="#A7B2C3"
            />
          </svg>
          Bike
        </li>
        <li
          className={`cursor-pointer pb-2 text-center text-base
              ${
                tab == "heavy"
                  ? "active border-b-2 px-2 border-solid border-primary text-default"
                  : "text-gray-400"
              }`}
          onClick={() => {
            toggleTab("heavy");
          }}
        >
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mb-1 mr-2.5"
          >
            <path d="M1 0H17V16H1V0Z" fill="white" fillOpacity="0.01" />
            <path d="M17 0H1V16H17V0Z" fill="white" fillOpacity="0.01" />
            <path
              d="M4.99984 12.9987C5.35346 12.9987 5.6926 12.8582 5.94265 12.6082C6.19269 12.3581 6.33317 12.019 6.33317 11.6654C6.33317 11.3117 6.19269 10.9726 5.94265 10.7226C5.6926 10.4725 5.35346 10.332 4.99984 10.332C4.64622 10.332 4.30708 10.4725 4.05703 10.7226C3.80698 10.9726 3.6665 11.3117 3.6665 11.6654C3.6665 12.019 3.80698 12.3581 4.05703 12.6082C4.30708 12.8582 4.64622 12.9987 4.99984 12.9987V12.9987Z"
              stroke="#A7B2C3"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M12.6668 12.9987C13.0205 12.9987 13.3596 12.8582 13.6096 12.6082C13.8597 12.3581 14.0002 12.019 14.0002 11.6654C14.0002 11.3117 13.8597 10.9726 13.6096 10.7226C13.3596 10.4725 13.0205 10.332 12.6668 10.332C12.3132 10.332 11.9741 10.4725 11.724 10.7226C11.474 10.9726 11.3335 11.3117 11.3335 11.6654C11.3335 12.019 11.474 12.3581 11.724 12.6082C11.9741 12.8582 12.3132 12.9987 12.6668 12.9987V12.9987Z"
              stroke="#A7B2C3"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M3.6665 11.668H1.6665V3.66797H11.3332V11.668H6.33317"
              stroke="#A7B2C3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3335 11.6667V6H14.1905L16.3335 8.83333V11.6667H14.2705"
              stroke="#A7B2C3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Heavy
        </li>
        <li
          className={`cursor-pointer pb-2 text-center text-base
              ${
                tab == "other"
                  ? "active border-b-2 px-2 border-solid border-primary text-default"
                  : "text-gray-400"
              }`}
          onClick={() => {
            toggleTab("other");
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mb-1 mr-2.5"
          >
            <path
              d="M15 3.33333C15 2.04689 13.9531 1 12.6667 1C12.1857 1.00136 11.717 1.15164 11.325 1.43019C10.9329 1.70873 10.6368 2.10187 10.4772 2.55556H5.52278C5.36322 2.10187 5.06706 1.70873 4.67501 1.43019C4.28296 1.15164 3.81426 1.00136 3.33333 1C2.04689 1 1 2.04689 1 3.33333C1 4.346 1.65256 5.20078 2.55556 5.52278V10.4764C2.10199 10.6364 1.70903 10.9328 1.43053 11.3249C1.15204 11.7171 1.00165 12.1857 1 12.6667C1 13.9531 2.04689 15 3.33333 15C3.81426 14.9986 4.28296 14.8484 4.67501 14.5698C5.06706 14.2913 5.36322 13.8981 5.52278 13.4444H10.4764C10.6361 13.8981 10.9323 14.2911 11.3243 14.5697C11.7163 14.8482 12.185 14.9985 12.6659 15C13.9523 15 14.9992 13.9531 14.9992 12.6667C14.9976 12.1857 14.8472 11.7171 14.5687 11.3249C14.2902 10.9328 13.8972 10.6364 13.4437 10.4764V5.52356C13.8974 5.36379 14.2906 5.06749 14.5693 4.67534C14.8479 4.28319 14.9984 3.8144 15 3.33333ZM12.6667 2.55556C12.8207 2.5554 12.9713 2.60095 13.0995 2.68644C13.2277 2.77193 13.3276 2.89352 13.3866 3.03581C13.4456 3.17811 13.4611 3.33471 13.4311 3.48581C13.4011 3.63691 13.3269 3.7757 13.218 3.88463C13.109 3.99356 12.9702 4.06773 12.8191 4.09774C12.668 4.12776 12.5114 4.11228 12.3691 4.05325C12.2269 3.99423 12.1053 3.89432 12.0198 3.76617C11.9343 3.63802 11.8887 3.48738 11.8889 3.33333C11.8889 2.90478 12.2373 2.55556 12.6667 2.55556ZM10.4772 11.8889H5.52278C5.40714 11.5634 5.22045 11.2677 4.97627 11.0234C4.73208 10.7791 4.43654 10.5923 4.11111 10.4764V5.52356C4.43654 5.40774 4.73208 5.22089 4.97627 4.97657C5.22045 4.73225 5.40714 4.4366 5.52278 4.11111H10.4764C10.5923 4.43654 10.7791 4.73208 11.0234 4.97627C11.2677 5.22045 11.5634 5.40714 11.8889 5.52278V10.4764C11.5635 10.5923 11.2679 10.7791 11.0237 11.0234C10.7795 11.2677 10.5929 11.5634 10.4772 11.8889ZM3.33333 2.55556C3.48738 2.5554 3.63802 2.60095 3.76617 2.68644C3.89432 2.77193 3.99423 2.89352 4.05325 3.03581C4.11228 3.17811 4.12776 3.33471 4.09774 3.48581C4.06773 3.63691 3.99356 3.7757 3.88463 3.88463C3.7757 3.99356 3.63691 4.06773 3.48581 4.09774C3.33471 4.12776 3.17811 4.11228 3.03581 4.05325C2.89352 3.99423 2.77193 3.89432 2.68644 3.76617C2.60095 3.63802 2.5554 3.48738 2.55556 3.33333C2.55556 2.90478 2.904 2.55556 3.33333 2.55556ZM3.33333 13.4444C3.13307 13.4355 2.94398 13.3496 2.80544 13.2047C2.66689 13.0599 2.58957 12.8671 2.58957 12.6667C2.58957 12.4662 2.66689 12.2735 2.80544 12.1286C2.94398 11.9837 3.13307 11.8978 3.33333 11.8889C3.5336 11.8978 3.72268 11.9837 3.86123 12.1286C3.99977 12.2735 4.0771 12.4662 4.0771 12.6667C4.0771 12.8671 3.99977 13.0599 3.86123 13.2047C3.72268 13.3496 3.5336 13.4355 3.33333 13.4444ZM12.6667 13.4444C12.4664 13.4355 12.2773 13.3496 12.1388 13.2047C12.0002 13.0599 11.9229 12.8671 11.9229 12.6667C11.9229 12.4662 12.0002 12.2735 12.1388 12.1286C12.2773 11.9837 12.4664 11.8978 12.6667 11.8889C12.8669 11.8978 13.056 11.9837 13.1946 12.1286C13.3331 12.2735 13.4104 12.4662 13.4104 12.6667C13.4104 12.8671 13.3331 13.0599 13.1946 13.2047C13.056 13.3496 12.8669 13.4355 12.6667 13.4444Z"
              fill="#A7B2C3"
            />
          </svg>
          Others
        </li>
      </ul>
      <div className="tab-content ">
        <div className={tab === "car" ? `block` : `hidden`}>
          <p className="mb-5 text-sm text-gray-700">
            Search for auto vehicles to buy
          </p>
          <form
            action="#"
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
            onSubmit={submitHandler}
          >
            <div>
              <select onChange={changeHandler} name="location" id="">
                <option value="">Location</option>
                <option value="d">Location1</option>
                <option value="">Location2</option>
                <option value="">Location3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="type" id="">
                <option value="d">Type</option>
                <option value="d">Type1</option>
                <option value="d">Type2</option>
                <option value="">Type3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="make" id="">
                <option value="">Make</option>
                <option value="d">Make1</option>
                <option value="">Make2</option>
                <option value="">Make3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="modal" id="">
                <option value="">Modal</option>
                <option value="d">Modal1</option>
                <option value="">Modal2</option>
                <option value="">Modal3</option>
              </select>
            </div>
            <div>
              <button className="btn btn-primary !py-[11px] xl:!px-14 w-full xl:w-auto">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2.5 mb-1"
                >
                  <path
                    d="M15.0259 13.8488L18.5951 17.4171L17.4159 18.5963L13.8476 15.0271C12.5199 16.0915 10.8684 16.6704 9.16675 16.668C5.02675 16.668 1.66675 13.308 1.66675 9.16797C1.66675 5.02797 5.02675 1.66797 9.16675 1.66797C13.3067 1.66797 16.6667 5.02797 16.6667 9.16797C16.6692 10.8696 16.0903 12.5211 15.0259 13.8488ZM13.3542 13.2305C14.4118 12.1429 15.0025 10.685 15.0001 9.16797C15.0001 5.94464 12.3892 3.33464 9.16675 3.33464C5.94341 3.33464 3.33341 5.94464 3.33341 9.16797C3.33341 12.3905 5.94341 15.0013 9.16675 15.0013C10.6838 15.0037 12.1417 14.4131 13.2292 13.3555L13.3542 13.2305Z"
                    fill="white"
                  />
                </svg>
                Search
              </button>
            </div>
            <div>
              <select onChange={changeHandler} name="kilometer" id="">
                <option value="">Kilometer</option>
                <option value="d">Kilometer1</option>
                <option value="">Kilometer2</option>
                <option value="">Kilometer3</option>
              </select>
            </div>
            <div className="flex gap-2.5">
              <select onChange={changeHandler} name="from" id="">
                <option value="">From</option>
                <option value="d">From1</option>
                <option value="">From2</option>
                <option value="">From3</option>
              </select>
              <select onChange={changeHandler} name="to" id="">
                <option value="">To</option>
                <option value="">To1</option>
                <option value="">To2</option>
                <option value="">To3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="bodyType" id="">
                <option value="">Body Type</option>
                <option value="">Body Type1</option>
                <option value="">Body Type2</option>
                <option value="">Body Type3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="priceRange" id="">
                <option value="">Pricing Range</option>
                <option value="">Pricing Range1</option>
                <option value="">Pricing Range2</option>
                <option value="">Pricing Range3</option>
              </select>
            </div>
          </form>
        </div>
        <div className={tab === "bike" ? `block` : `hidden`}>
          <p className="mb-5 text-sm text-gray-700">
            Search for auto vehicles to buy
          </p>
          <form
            action="#"
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            <div>
              <select onChange={changeHandler} name="location" id="">
                <option value="">Location</option>
                <option value="">Location1</option>
                <option value="">Location2</option>
                <option value="">Location3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="type" id="">
                <option value="">Type</option>
                <option value="">Type1</option>
                <option value="">Type2</option>
                <option value="">Type3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="make" id="">
                <option value="">Make</option>
                <option value="">Make1</option>
                <option value="">Make2</option>
                <option value="">Make3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="modal" id="">
                <option value="">Modal</option>
                <option value="">Modal1</option>
                <option value="">Modal2</option>
                <option value="">Modal3</option>
              </select>
            </div>
            <div>
              <button className="btn btn-primary !py-[11px] xl:!px-14 w-full xl:w-auto">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2.5 mb-1"
                >
                  <path
                    d="M15.0259 13.8488L18.5951 17.4171L17.4159 18.5963L13.8476 15.0271C12.5199 16.0915 10.8684 16.6704 9.16675 16.668C5.02675 16.668 1.66675 13.308 1.66675 9.16797C1.66675 5.02797 5.02675 1.66797 9.16675 1.66797C13.3067 1.66797 16.6667 5.02797 16.6667 9.16797C16.6692 10.8696 16.0903 12.5211 15.0259 13.8488ZM13.3542 13.2305C14.4118 12.1429 15.0025 10.685 15.0001 9.16797C15.0001 5.94464 12.3892 3.33464 9.16675 3.33464C5.94341 3.33464 3.33341 5.94464 3.33341 9.16797C3.33341 12.3905 5.94341 15.0013 9.16675 15.0013C10.6838 15.0037 12.1417 14.4131 13.2292 13.3555L13.3542 13.2305Z"
                    fill="white"
                  />
                </svg>
                Search
              </button>
            </div>
            <div>
              <select onChange={changeHandler} name="" id="kilometeer">
                <option value="">Kilometer</option>
                <option value="">Kilometer1</option>
                <option value="">Kilometer2</option>
                <option value="">Kilometer3</option>
              </select>
            </div>
            <div className="flex gap-2.5">
              <select onChange={changeHandler} name="from" id="">
                <option value="">From</option>
                <option value="">From1</option>
                <option value="">From2</option>
                <option value="">From3</option>
              </select>
              <select onChange={changeHandler} name="to" id="">
                <option value="">To</option>
                <option value="">To1</option>
                <option value="">To2</option>
                <option value="">To3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="bodyType" id="">
                <option value="">Body Type</option>
                <option value="">Body Type1</option>
                <option value="">Body Type2</option>
                <option value="">Body Type3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="priceRange" id="">
                <option value="">Pricing Range</option>
                <option value="">Pricing Range1</option>
                <option value="">Pricing Range2</option>
                <option value="">Pricing Range3</option>
              </select>
            </div>
          </form>
        </div>
        <div className={tab === "heavy" ? `block` : `hidden`}>
          <p className="mb-5 text-sm text-gray-700">
            Search for auto vehicles to buy
          </p>
          <form
            action="#"
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            <div>
              <select onChange={changeHandler} name="location" id="">
                <option value="">Location</option>
                <option value="">Location1</option>
                <option value="">Location2</option>
                <option value="">Location3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="type" id="">
                <option value="">Type</option>
                <option value="">Type1</option>
                <option value="">Type2</option>
                <option value="">Type3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="make" id="">
                <option value="">Make</option>
                <option value="">Make1</option>
                <option value="">Make2</option>
                <option value="">Make3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="modal" id="">
                <option value="">Modal</option>
                <option value="">Modal1</option>
                <option value="">Modal2</option>
                <option value="">Modal3</option>
              </select>
            </div>
            <div>
              <button className="btn btn-primary !py-[11px] xl:!px-14 w-full xl:w-auto">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2.5 mb-1"
                >
                  <path
                    d="M15.0259 13.8488L18.5951 17.4171L17.4159 18.5963L13.8476 15.0271C12.5199 16.0915 10.8684 16.6704 9.16675 16.668C5.02675 16.668 1.66675 13.308 1.66675 9.16797C1.66675 5.02797 5.02675 1.66797 9.16675 1.66797C13.3067 1.66797 16.6667 5.02797 16.6667 9.16797C16.6692 10.8696 16.0903 12.5211 15.0259 13.8488ZM13.3542 13.2305C14.4118 12.1429 15.0025 10.685 15.0001 9.16797C15.0001 5.94464 12.3892 3.33464 9.16675 3.33464C5.94341 3.33464 3.33341 5.94464 3.33341 9.16797C3.33341 12.3905 5.94341 15.0013 9.16675 15.0013C10.6838 15.0037 12.1417 14.4131 13.2292 13.3555L13.3542 13.2305Z"
                    fill="white"
                  />
                </svg>
                Search
              </button>
            </div>
            <div>
              <select onChange={changeHandler} name="kilometer" id="">
                <option value="">Kilometer</option>
                <option value="">Kilometer1</option>
                <option value="">Kilometer2</option>
                <option value="">Kilometer3</option>
              </select>
            </div>
            <div className="flex gap-2.5">
              <select onChange={changeHandler} name="from" id="">
                <option value="">From</option>
                <option value="">From1</option>
                <option value="">From2</option>
                <option value="">From3</option>
              </select>
              <select onChange={changeHandler} name="to" id="">
                <option value="">To</option>
                <option value="">To1</option>
                <option value="">To2</option>
                <option value="">To3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="bodyType" id="">
                <option value="">Body Type</option>
                <option value="">Body Type1</option>
                <option value="">Body Type2</option>
                <option value="">Body Type3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="priceRange" id="">
                <option value="">Pricing Range</option>
                <option value="">Pricing Range1</option>
                <option value="">Pricing Range2</option>
                <option value="">Pricing Range3</option>
              </select>
            </div>
          </form>
        </div>
        <div className={tab === "other" ? `block` : `hidden`}>
          <p className="mb-5 text-sm text-gray-700">
            Search for auto vehicles to buy
          </p>
          <form
            action="#"
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            <div>
              <select onChange={changeHandler} name="location" id="">
                <option value="">Location</option>
                <option value="">Location1</option>
                <option value="">Location2</option>
                <option value="">Location3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="type" id="">
                <option value="">Type</option>
                <option value="">Type1</option>
                <option value="">Type2</option>
                <option value="">Type3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="make" id="">
                <option value="">Make</option>
                <option value="">Make1</option>
                <option value="">Make2</option>
                <option value="">Make3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="modal" id="">
                <option value="">Modal</option>
                <option value="">Modal1</option>
                <option value="">Modal2</option>
                <option value="">Modal3</option>
              </select>
            </div>
            <div>
              <button className="btn btn-primary !py-[11px] xl:!px-14 w-full xl:w-auto">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2.5 mb-1"
                >
                  <path
                    d="M15.0259 13.8488L18.5951 17.4171L17.4159 18.5963L13.8476 15.0271C12.5199 16.0915 10.8684 16.6704 9.16675 16.668C5.02675 16.668 1.66675 13.308 1.66675 9.16797C1.66675 5.02797 5.02675 1.66797 9.16675 1.66797C13.3067 1.66797 16.6667 5.02797 16.6667 9.16797C16.6692 10.8696 16.0903 12.5211 15.0259 13.8488ZM13.3542 13.2305C14.4118 12.1429 15.0025 10.685 15.0001 9.16797C15.0001 5.94464 12.3892 3.33464 9.16675 3.33464C5.94341 3.33464 3.33341 5.94464 3.33341 9.16797C3.33341 12.3905 5.94341 15.0013 9.16675 15.0013C10.6838 15.0037 12.1417 14.4131 13.2292 13.3555L13.3542 13.2305Z"
                    fill="white"
                  />
                </svg>
                Search
              </button>
            </div>
            <div>
              <select onChange={changeHandler} name="kilometer" id="">
                <option value="">Kilometer</option>
                <option value="">Kilometer1</option>
                <option value="">Kilometer2</option>
                <option value="">Kilometer3</option>
              </select>
            </div>
            <div className="flex gap-2.5">
              <select onChange={changeHandler} name="from" id="">
                <option value="">From</option>
                <option value="">From1</option>
                <option value="">From2</option>
                <option value="">From3</option>
              </select>
              <select onChange={changeHandler} name="to" id="">
                <option value="">To</option>
                <option value="">To1</option>
                <option value="">To2</option>
                <option value="">To3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="bodyType" id="">
                <option value="">Body Type</option>
                <option value="">Body Type1</option>
                <option value="">Body Type2</option>
                <option value="">Body Type3</option>
              </select>
            </div>
            <div>
              <select onChange={changeHandler} name="priceRange" id="">
                <option value="">Pricing Range</option>
                <option value="">Pricing Range1</option>
                <option value="">Pricing Range2</option>
                <option value="">Pricing Range3</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchTab;
