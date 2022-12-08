const PopUpBerhasil = () => {

    return (
        <div className="h-screen flex flex-col items-center justify-between px-[20px]">
            <div className="flex flex-col items-center justify-center text-center h-full">
                <img src="/images/berhasil.svg"/>
                <p className="my-[16px] text-peduly-success text-[24px] font-semibold">Galang Dana Berhasil</p>
                <p className="text-large">Bagikan galang dana ini supaya mendapakan banyak dukungan</p>
            </div>

            <div className="flex flex-col w-full mb-[20px]">
                <button className="bg-peduly-primary text-white font-semibold rounded-full w-full h-[60px] border-[1px] border-[#E4E4E4] mt-[12px]">
                    Bagikan Galang Dana
                </button>
                <button className="bg-white text-peduly-primary font-semibold rounded-full w-full h-[60px] border-[1px] border-peduly-primary mt-[12px]">
                    Lihat Galang Dana
                </button>
            </div>
        </div>
    );
};

export default PopUpBerhasil;
