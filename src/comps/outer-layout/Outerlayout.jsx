const Outerlayout = ({ children, maintitle, category }) => {
  return (
    <section className="container">
      <div className="pt-[4rem]">
        <div
          className={`flex flex-wrap gap-4 justify-between ${
            category ? "mb-5" : "mb-9"
          } items-center`}
        >
          <h2 className="text-default font-medium text-lg">{maintitle}</h2>
          {category && (
            <div className="sort">
              <select
                name=""
                id=""
                className="border border-solid border-gray-200 text-sm bg-white rounded-md py-3 pl-5 pr-12 text-gray-600"
              >
                <option value="">Cars</option>
                <option value="">Cars1</option>
                <option value="">Cars2</option>
                <option value="">Cars3</option>
              </select>
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Outerlayout;
