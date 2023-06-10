import React, { useState } from 'react';

function UserRegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameError || emailError || passwordError) {
      // エラーがある場合は送信しない
      return;
    }
    console.log(`name: ${name}, email: ${email}, password: ${password}`);
  };

  const validateName = () => {
    if (!name) {
      setNameError('名前は必須です');
    } else {
      setNameError('');
    }
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError('メールアドレスは必須です');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('メールアドレスの形式が不正です');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('パスワードは必須です');
    } else if (password.length < 8) {
      setPasswordError('パスワードは8文字以上で入力してください');
    } else {
      setPasswordError('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">名前：</label>
        <input
          type="text"
          id="name"
          value={name}
          onBlur={validateName}
          onChange={(event) => setName(event.target.value)}
          required
        />
        {nameError && <div>{nameError}</div>}
      </div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <input
          type="email"
          id="email"
          value={email}
          onBlur={validateEmail}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        {emailError && <div>{emailError}</div>}
      </div>
      <div>
        <label htmlFor="password">パスワード：</label>
        <input
          type="password"
          id="password"
          value={password}
          onBlur={validatePassword}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        {passwordError && <div>{passwordError}</div>}
      </div>
      <button type="submit">登録する</button>
    </form>
  );
}

export default UserRegistrationForm;