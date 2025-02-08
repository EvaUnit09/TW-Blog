import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      {/* Cybersecurity Profiles Section */}
      <div className="mb-8 rounded-lg bg-gray-900 p-8 text-white">
        <div className="flex flex-col items-center space-y-6">
          {/* Personal Info and icons */}

          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://github.com/EvaUnit09" target="_blank" rel="noopener noreferrer">
              <img src="/static/images/githubicon1.png" alt="GitHub" />
            </a>
            <a
              href="https://tryhackme.com/p/noahnotnulls"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/static/images/THMlogo.svg"
                alt="TryHackMe"
                style={{ height: '100px', width: '100px' }}
              />
            </a>
            <a
              href="https://www.hackthebox.com/home/users/profile/EvaUnit09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/static/images/HackTheBox.svg"
                alt="HackTheBox"
                className="h-8 w-8"
                style={{ height: '80px', width: '80px' }}
              />
            </a>
          </div>
        </div>

        {/* Cybersecurity Profiles Section */}
        <div className="mt-12">
          <h2 className="mb-8 text-center text-3xl font-semibold">Training Profiles</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* TryHackMe Profile */}
            <div
              className="flex flex-col items-center space-y-4 rounded-lg bg-gray-800 p-6 shadow-md"
              style={{ height: '300px', width: '100%' }}
            >
              <h3 className="text-xl font-bold">TryHackMe</h3>
              <iframe
                src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3557796"
                style={{
                  border: 'none',
                  width: '80%',
                  height: '120px',
                  overflow: 'hidden',
                  transform: 'scale(1.3)',
                }}
                title="TryHackMe Badge"
              ></iframe>
              <a
                href="https://tryhackme.com/p/Noahnotnull"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                View Profile
              </a>
            </div>

            {/* HackTheBox Profile */}
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-gray-800 p-6 shadow-md">
              <h3 className="text-xl font-bold">HackTheBox</h3>
              <a
                href="https://app.hackthebox.com/profile/2242696"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/static/images/htbBadge.png"
                  alt="Hack The Box Profile Badge"
                  className="shadow-blue-gray-900/50 rounded-lg object-cover object-center shadow-xl"
                />
              </a>
              <a
                href="https://app.hackthebox.com/profile/2242696"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Existing Latest Posts Section */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-white dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest Posts
          </h1>
          <p className="text-lg leading-7 text-white dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-white dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link href={`/blog/${slug}`} className="text-white dark:text-gray-100">
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-200 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
