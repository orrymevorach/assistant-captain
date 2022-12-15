'use client';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [uid, setUid] = useState('');
  useEffect(() => {
    const uidCookie = Cookies.get('uid');
    setUid(uidCookie);
  }, []);
  return <h1>{uid}</h1>;
}
