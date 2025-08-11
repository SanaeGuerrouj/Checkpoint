function Person(props) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md border-2 border-gray-300 p-8 text-center">
      <img
        src={props.imgSrc}
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full mb-6 object-cover"
      />
      <h2 className="text-xl font-semibold mb-3">{props.fullName}</h2>
      <p className="text-gray-600 italic mb-3">{props.profession}</p>
      <p className="text-gray-700">{props.bio}</p>
    </div>
  );
}

export default Person;
