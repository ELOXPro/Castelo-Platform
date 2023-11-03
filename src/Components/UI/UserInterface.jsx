

export const PrimaryButton = (props) => {
    const {label, onClick} = props;
  return (
    <button
      onClick ={onClick}
      className="w-24 md:w-36 text-sm md:text-base bg-green-500 md:hover:bg-green-800 rounded-md font-bold cursor-pointer text-white transition-colors my-4 py-4">
      {label}
    </button>
  );
}

export const SecondaryButton = (props) => {
  const {label, onClick} = props;
return (
  <button
    onClick ={onClick}
    className="w-24 md:w-36 text-sm md:text-base bg-white md:hover:bg-zinc-200 rounded-md font-bold cursor-pointer text-green-500 transition-colors my-4 py-4">
    {label}
  </button>
);
}

export const MenuButton = (props) => {
  const {label, onClick} = props;
  return (
    <button
      onClick ={onClick}
      className="text-2xl md:text-base font-bold cursor-pointer mt-0 hover:-mt-2 text-green-500 transition-all mr-0 md:mr-4">
      {label}
    </button>
  );
};

export const SecondaryMenuButton = (props) => {
  const {label, onClick} = props;
return (
  <button
    onClick ={onClick}
    className="w-auto text-lg bg-green-500 md:hover:bg-green-800 rounded-md font-bold cursor-pointer text-white transition-colors my-4 p-2">
    {label}
  </button>
);
}

export const VideoCard = (props) => {
  const {video} = props;
  return (
    <div className="bg-white w-full border-4 border-zinc-200 overflow-hidden">
      <video autoPlay muted loop className="w-full  rounded-lg">
      <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export const ImageCard = (props) => {
  const {image, caption, feature} = props;
  return (
    <div className=" flex flex-col md:flex-col items-center justify-center bg-white rounded-lg shadow-lg p-2 w-full h-full gap-2">
      <img src={image} alt="Castelo features" className="w-1/2 md:w-1/4 rounded-lg"/>
      <div className="flex flex-col justify-center items-center gap-2">
          <h3 className=" font-mono font-bold text-3xl text-green-600">{feature}</h3>
          <h3 className="capitalize text-zinc-400 text-base font-bold text-left px-4">{caption}</h3>
      </div>
    </div>
  );
};

export const FooterButton = (props) => {
  const {label, onClick} = props;
  return (
    <button
      onClick ={onClick}
      className="text-left text-base font-bold cursor-pointer mt-0 hover:text-zinc-600 text-zinc-500 transition-all mr-0 md:mr-4">
      {label}
    </button>
  );
};