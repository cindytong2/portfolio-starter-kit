import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-3xl font-semibold">
        Hi, I'm Cindy. 👋
        <span className="block text-gray-500 font-normal text-2xl">
          A junior studying Computer Science at Princeton.
        </span>
      </h1>
      <p className="mb-4 text-lg">
        {`I love building fast, scalable software for people. Whether it's leading a team or shipping a full-stack app, I'm passionate about using tech to make a positive impact.`}
      </p>
      <Link
          href="/aboutme"
          className="text-blue-500 hover:text-blue-600"
        >
          About Me
          <span className="ml-2">
            →
          </span>
        </Link>
    </section>
  )
}
