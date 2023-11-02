export const ShoeButton = (props) => {
    const { type, part, x, y, w, h } = props;
  
    return (
      <div>
        <img src={`./Assets/textures/${type}/${part}-color.png`} alt="Castelo" className={`absolute z-10 ${w} ${h} ${y} ${x} mix-blend-multiply`} />
      </div>
    );
  };
  