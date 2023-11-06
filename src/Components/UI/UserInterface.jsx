

export const PrimaryButton = (props) => {
    const {label, onClick} = props;
  return (
    <button
      onClick ={onClick}
      className="w-auto text-sm md:text-base bg-green-500 rounded-md font-bold cursor-pointer text-white dark:text-zinc-700 transition-all my-4 px-2 md:px-4 py-3 shadow-lg md:hover:shadow-zinc-700 dark:md:hover:shadow-white md:hover:text-zinc-700 md:hover:dark:text-white">
      {label}
    </button>
  );
}

export const SecondaryButton = (props) => {
  const {label, onClick} = props;
return (
  <button
    onClick ={onClick}
    className="w-auto text-sm md:text-base bg-white dark:bg-zinc-700 rounded-md font-bold cursor-pointer text-green-500 transition-all my-4 px-2 md:px-4 py-0 shadow-lg md:hover:shadow-zinc-700 dark:md:hover:shadow-white md:hover:text-zinc-700 md:hover:dark:text-white">
    {label}
  </button>
);
}

export const MenuButton = (props) => {
  const {label, onClick} = props;
  return (
    <button
      onClick ={onClick}
      className="text-2xl md:text-base font-bold cursor-pointer mt-0 md:hover:-mt-2 text-green-500 transition-all mr-0 md:mr-4  md:hover:underline decoration-4 underline-offset-8 decoration-zinc-700 dark:decoration-white">
      {label}
    </button>
  );
};

export const SecondaryMenuButton = (props) => {
  const {label, onClick} = props;
return (
  <button
    onClick ={onClick}
    className="w-auto text-lg bg-green-500 rounded-md font-bold cursor-pointer text-white dark:text-zinc-700 md:hover:text-zinc-700 md:hover:dark:text-white transition-all my-4 p-2 shadow-md md:hover:shadow-zinc-700 dark:md:hover:shadow-white">
    {label}
  </button>
);
}

export const IconButton = (props) => {
  const {label, onClick} = props;
return (
  <button
    onClick ={onClick}
    className="">
    <svg className="fill-green-500 w-5 mt-0 md:hover:fill-zinc-700 dark:md:hover:fill-white transition-all " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.43 122.88">
    <g>
      <path  d={label}/>
    </g>
    </svg>
  </button>
);
}

export const VideoCard = (props) => {
  const {video} = props;
  return (
    <div className="w-full">
      <video autoPlay muted loop className="w-full  rounded-lg">
      <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export const ImageCard = (props) => {
  const {image, caption, feature} = props;
  return (
    <div className=" flex flex-col md:flex-col items-center justify-center bg-white dark:bg-zinc-700 rounded-lg shadow-lg p-4 w-full h-full gap-2 overflow-hidden">
      <img src={image} alt="Castelo features" className="w-1/3 md:w-1/4 animate-bounce"/>
      <div className="flex flex-col justify-center items-center gap-2">
          <h3 className=" font-mono font-bold text-3xl text-green-600">{feature}</h3>
          <h3 className="capitalize text-zinc-500 dark:text-zinc-200 text-base font-bold text-left px-4">{caption}</h3>
      </div>
    </div>
  );
};

export const FooterButton = (props) => {
  const {label, onClick} = props;
  return (
    <button
      onClick ={onClick}
      className="text-left text-base font-bold cursor-pointer mt-0 hover:text-zinc-600 text-zinc-500 dark:text-zinc-200 hover:dark:text-zinc-400 transition-all mr-0 md:mr-4 w-auto">
      {label}
    </button>
  );
};