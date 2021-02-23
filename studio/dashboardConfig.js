export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6034aaabf5b877950d7ee236',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xnwxghgk',
                  apiId: '27c8b8e8-2f82-4d61-b729-f46f4001c8f1'
                },
                {
                  buildHookId: '6034aaacec20d0986fdd7c50',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-psz7hbr4',
                  apiId: 'd229521b-f974-47f8-a4f2-d9a0763dd29b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/neerajchandola/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-psz7hbr4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
