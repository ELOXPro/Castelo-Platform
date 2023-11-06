export const ShoeTexture = (props) => {
    const { type, part, x, y, w, h } = props;
  
    return (
        <img src={`./Assets/textures/${type}/${part}-color.png`} alt="Castelo" className={`absolute z-10 ${w} ${h} ${y} ${x} mix-blend-multiply`} />
    );
  };
  