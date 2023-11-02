export const PrimaryButton = (props) => {
    const {label, onClick} = props;
  return (
    <button
      onClick ={onClick}
      className="w-24 md:w-36 text-sm md:text-xl bg-green-800 md:hover:bg-black rounded-md font-bold cursor-pointer text-green-500 transition-colors my-4 py-4">
      {label}
    </button>
  );
}

export const SecondaryButton = (props) => {
  const {label, onClick} = props;
return (
  <button
    onClick ={onClick}
    className="w-24 md:w-36 text-sm md:text-xl bg-green-900 md:hover:bg-green-950 rounded-md font-bold cursor-pointer text-green-500 transition-colors my-4 py-4">
    {label}
  </button>
);
}

export const MenuButton = (props) => {
  const {label, onClick} = props;
  return (
    <button
      onClick ={onClick}
      className="text-2xl md:text-base font-bold cursor-pointer hover:text-green-800 text-green-500 transition-colors mr-0 md:mr-4">
      {label}
    </button>
  );
};

export const SecondaryMenuButton = (props) => {
  const {label, onClick} = props;
return (
  <button
    onClick ={onClick}
    className="w-auto text-lg bg-green-800 md:hover:bg-black rounded-md font-bold cursor-pointer text-green-500 transition-colors my-4 p-2">
    {label}
  </button>
);
}