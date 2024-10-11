export default function Button(prop) {
  console.log(prop);

  return (
    <>
      <a
        href={prop.buttonLink}
        className={`"inline-flex items-center justify-center rounded-md ${prop.regStyle} px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out ${prop.hoverStyle} "`}
      >
        {prop.buttonText}
      </a>
    </>
  );
}
