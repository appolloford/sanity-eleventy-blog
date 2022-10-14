export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '634989f0a2e38b006e5aa369',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-d1hscsxv',
                  apiId: '17211517-0c7e-4d49-8abe-0f3cad097b70'
                },
                {
                  buildHookId: '634989f06cad93006531c305',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-y24vovx4',
                  apiId: '7021a0e0-af56-43e6-8545-df2965163fda'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/appolloford/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-y24vovx4.netlify.app', category: 'apps'}
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
