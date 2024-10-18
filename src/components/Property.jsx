import PROPERTYINFO from "../assets/data/property-data";

function PropertyBedAndBath(prop) {
  return (
    <div className="flex items-center">
      <img
        src={prop.icon}
        alt={prop.altText}
        className="w-6 h-6 mr-3 text-gray-600 fill-current"
      />
      <p>
        <span className="font-bold text-gray-900">{prop.itemNumber}</span>{" "}
        {prop.itemText}
      </p>
    </div>
  );
}

function PropertyItem(prop) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img src={prop.imgSrc} alt="property" />

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{prop.title}</h4>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">
            {prop.price}
          </span>{" "}
          /M
        </div>
      </div>

      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <PropertyBedAndBath
          icon={"/svg/property-bed.svg"}
          altText={""}
          itemNumber={prop.bedroom}
          itemText={"Bedrooms"}
        ></PropertyBedAndBath>

        <PropertyBedAndBath
          icon={"/svg/property-bath.svg"}
          altText={""}
          itemNumber={prop.bathroom}
          itemText={"Bathrooms"}
        ></PropertyBedAndBath>
      </div>
    </div>
  );
}

export default function Property() {
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTYINFO.map((item) => {
            return (
              <PropertyItem
                key={item.id}
                title={item.title}
                price={item.price}
                imgSrc={item.imgSrc}
                bedroom={item.bedroom}
                bathroom={item.bathroom}
              ></PropertyItem>
            );
          })}
        </div>
      </div>
    </section>
  );
}
