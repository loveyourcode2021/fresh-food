import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai';
import {GrLogin, GrProductHunt} from 'react-icons/gr';

export default function Header() {
  return (
    <header className='navbar__container'>
      <div className='navbar__ul'>
        <div>
          <Link href="/">
          <AiOutlineHome/>
          </Link>
        </div>
        <div>
          <Link href="/about">
          <GrLogin/>
          </Link>
        </div>
        <div>
          <Link href="/about">
          <GrProductHunt/>
          </Link>
        </div>
      </div>
    </header>
  )
}

        {/* <li>
          <Link href="/post/first">
            <a>First Post</a>
          </Link>
        </li>
        <li>
          <Link href="/post/second">
            <a>Second Post</a>
          </Link>
        </li> */}