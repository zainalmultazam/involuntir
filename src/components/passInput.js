import react from 'react';

function passInput() {
  const [passwordType, setPasswordType] = react.useState('password');
  const [passwordInput, setPasswordInput] = react.useState('');

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };
  return (
    <div className='form-group'>
      <input
        name='password'
        className='rounded-full input-val w-[100%] mt-[24px] py-[20px] px-[29px] h-[60px]'
        placeholder='Password'
        type={passwordType}
        value={passwordInput}
        onChange={handlePasswordChange}
        pattern='^.*(?=.{8,}).*$'
        required
      />
      <button onClick={togglePassword}>
        {passwordType === 'password' ? <p>hide</p> : <p>show</p>}
      </button>
    </div>
  );
}

export default passInput;
