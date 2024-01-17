function TeammateCard({user: { id, name, description, photo }}) {
  return (
    <article
      key={id}
      className="group w-[350px] h-[250px] flex flex-col justify-end bg-[url('/alex.jpg')] bg-cover bg-center bg-no-repeat relative text-white rounded-md overflow-hidden"
    >
      <h1 className="p-2 text-xl z-10 transition-all duration-300  group-hover:text-transparent">
        {name}
      </h1>
      <span className="bg-transparent group-hover:bg-[#0000009f] absolute top-0 left-0 right-0 bottom-0  z-0 transition-colors duration-300"></span>
      <div className="absolute text-transparent group-hover:text-white p-2">
        <h1 className="p-2 text-xl z-10 transition-colors duration-300 text-transparent group-hover:text-white">
          {name}
        </h1>
        <p className="p-2 text-md z-10 border-t-2 border-transparent group-hover:border-white transition-colors duration-300">
          {description}
        </p>
      </div>
    </article>
  );
}

export default TeammateCard;
