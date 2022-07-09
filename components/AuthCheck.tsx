import Link from 'next/link';
import { useContext } from 'react';
import { userContext } from '../lib/context';

// Component's children only shown to logged-in users
export default function AuthCheck(props) {
  const { username } = useContext(userContext);

  return username ? props.children : props.fallback || <Link href="/enter">You must be signed in</Link>;
}