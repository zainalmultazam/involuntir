import GambarMerchant from "./GambarMerchant";

const CardMerchant2 = () => {
  return (
    <div className="px-4 mb-[24px] flex flex-row">
      <div className="">
        <GambarMerchant />
      </div>
      <div clasName="">
        <p className="font-semibold text-base text-black">
          Eatlah - Royal Plaza
        </p>
        <p className="font-normal text-small text-merchant-subtitle">
          Fast Food, Fried Chicken
        </p>
        <div className="flex flex-row">
          <img src="/images/icon/merchant/location-orange.svg" alt="" />
          <p className="ml-1 text-basic text-black">
            3 km
            <span className="ml-2 mr-2 text-small text-merchant-subtitle">
              |
            </span>
            <span className="text-ellipsis ">Wonokromo, Surabaya</span>
          </p>
        </div>
        <div className="flex flex-row">
          <img src="/images/icon/merchant/ticket-discount.svg" alt="" />
          <p className="ml-1 text-basic text-black">15 Coin Discount 10%</p>
        </div>
      </div>
    </div>
  );
};

export default CardMerchant2;
