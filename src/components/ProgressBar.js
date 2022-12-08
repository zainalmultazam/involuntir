import '../styles/landing.css';

const ProgressBar = ({target, current, waktu}) => {
  let percent = (current / target) * 100;

  function dayToGo(TargetDay) {
    const firstDate = new Date(TargetDay);
    if (!isNaN(firstDate.getTime())) {
      const oneDay = 24 * 60 * 60 * 1000;
      const secondDate = new Date();
      const diffDays = Math.round((firstDate - secondDate) / oneDay);
      if (diffDays <= 0) {
        return 'berakhir';
      }
      return diffDays;
    }
    return 'tanpaBatas';
  }

  return (
    <div className='rounded-full bg-[#e4e4e4] w-full max-w-full -z-[1px]'>
      <div
        className={`rounded-full h-[3px] z-[2px] ${
          dayToGo(waktu) !== 'berakhir' ? 'bg-[#e7513b]' : 'bg-[#717171]'
        }`}
        style={{width: `${percent}%`, maxWidth: '100%'}}
      ></div>
    </div>
  );
};

export default ProgressBar;
