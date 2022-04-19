import Link from "next/link";

export default function FirstPost() {
    return (
    <>
    <h1>First Post</h1>
      <Link href='/'>
        <a>
          <h2>I decide to go home!</h2>
        </a>
      </Link>
    </>
    );
}
