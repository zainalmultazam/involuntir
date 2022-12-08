import React, {useState} from 'react';

const usePasswordToggle = () => {
  const [visible, setVisiblity] = useState(false);

  const Icon = (
    <button onClick={setVisiblity((visible) => !visible)}>
      {visible ? 'eye-slas' : 'juma'}
    </button>
  );

  const InputType = visible ? 'text' : 'password';

  return [InputType, Icon];
};

export default usePasswordToggle;
