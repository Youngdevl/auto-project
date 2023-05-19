import './blog.css'

const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'Linear Mustangs anes',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael John',
          role: 'Co-Founder',
          href: '#',
          imageUrl:
            'https://imgs.search.brave.com/byMoH1-HTNFdfe5AUXwU4oijznSSZRwhvb-R4nCw_1s/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9yZXYy/Mi0yLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wNi9P/ZmZlcmluZy1xdWFs/aXR5LXBhdGllbnQt/Y2FyZS0xMDYyMDIw/NjU4XzEzNjV4MTM2/NS5qcGc',
        },
      },
      {
        id: 3,
        title: 'Figurs economics',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'MicFoster',
          role: 'Co-CTO',
          href: '#',
          imageUrl:
            'https://imgs.search.brave.com/kfyYkfYsjIsDplweRt12LXvfg1_UldX31k42K0LhtfU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS91d3AvdXdwMjkz/MTQ5OC5qcGVn',
        },
      },
      {
        id: 4,
        title: 'Quick Profits',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 5,
        title: 'Mustang Ideas',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michaeler',
          role: 'CTO',
          href: '#',
          imageUrl:
            'https://imgs.search.brave.com/jvH5vsmob_k51zFLqGR1cUp5bVZYJNBzIIfxyMOZdKQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9yZXYy/Mi0yLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wNi9Z/b3VuZy1Bc2lhbi1N/YWxlLURvY3Rvci1D/b25zdWx0aW5nLXdp/dGgtYW4tRWxkZXJs/eS1BZnJpY2FuLVBh/dGllbnQtc3RvY2st/cGhvdG8tMTE4ODQz/ODE4MF8xMzY1eDEz/NjUuanBn',
        },
      },
      {
        id: 6,
        title: 'Boost Trade Sales ',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael brownit',
          role: 'Co-Founder',
          href: '#',
          imageUrl:
            'https://imgs.search.brave.com/QFnS1Io73n1nuOPYYSvFDTs6Tqo7dId1aI8tRsgKzdA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLmlt/Z3VyLmNvbS9WR1Rx/QmZ4LmpwZw',
        },
      },
    // More posts...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32" id="gj">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-white">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="gt">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-white">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="gt">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  