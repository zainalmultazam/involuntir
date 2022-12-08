const GambarMerchant = () => {
  return (
    <div className="w-[130px] h-[98px] relative mr-5">
      {/* Label diskon */}
      <div className="absolute rounded-bl-base rounded-tr-base left-0 bottom-0 p-2 bg-peduly-primary">
        <p className="text-super-small">
          Diskon <span className="font-bold text-sm">10%</span>
        </p>
      </div>
      {/* Gambar */}
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="w-[130px] h-[98px] object-cover rounded-base"
        alt=""
      />
    </div>
  );
};

export default GambarMerchant;
