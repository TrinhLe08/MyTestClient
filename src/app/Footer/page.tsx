const Footer = () => {
  return (
    <div className="grid w-full mt-2 justify-center">
      <h3 className="text-sm font-semibold">Made by MindX 🔥</h3>
      <div>
        <span>Available on:</span>
        <span className="languague-picker">🇻🇳</span>
        <span className="languague-picker selected mt-2 text-sm">🇺🇸</span>
      </div>
    </div>
  );
};

export default Footer;
