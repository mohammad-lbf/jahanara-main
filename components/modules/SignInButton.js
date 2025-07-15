import Link from 'next/link';
import React from 'react';

function SignInButton() {
  return (
    <Link
      className="btn btn-linear hover-up hover-shadow signin-btn"
      href="/signup"
    >
      ورود همکاران
    </Link>
  );
}

export default SignInButton;
